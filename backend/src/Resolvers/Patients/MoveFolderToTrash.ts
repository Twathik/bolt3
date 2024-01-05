import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../@generated'
import { Context } from '../../context'
import { MovePatientFolderToTrash } from './Args/MovePatientFolderToTrash'
import createTypesenseDocuments from '../../Utils/typesense/operations/createDocuments'
import RemoveTypesenseDocument from '../../Utils/typesense/operations/removeDocument'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'
import { getYear } from 'date-fns'

@TypeGraphQL.Resolver((_of) => Patient)
export class MoveFolderToTrash {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: true,
  })
  async movePatientFolderToTrash(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() { userId, ...args }: MovePatientFolderToTrash,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<Patient | null> {
    try {
      const patient = await ctx.prisma.patient.update({
        where: { id: args.id },
        data: { onTrash: args.onTrash },
      })
      const {
        id,
        firstName,
        lastName,
        sexe,
        ddn,
        deleted,
        onTrash,
        informationsConfirmed,
        nTel,
      } = patient

      if (args.onTrash) {
        await Promise.all([
          RemoveTypesenseDocument({
            index: 'patients',
            id: patient.id,
            typesense: ctx.typesense,
          }),
          await notify({
            type: 'patientUpdate',
            userId,
            global: true,
            appPayload: JSON.stringify({
              operation: 'update',
              patient: {
                id,
                firstName,
                lastName,
                sexe,
                ddn,
                deleted,
                onTrash,
                patientFullName: `${lastName} ${firstName}`,
                informationsConfirmed,
                nTel,
              },
            }),
          }),
        ])
      } else {
        await Promise.all([
          createTypesenseDocuments({
            index: 'patients',
            typesense: ctx.typesense,
            documents: [
              {
                ...patient,
                ddn_year: getYear(ddn),
                search_ddn_year: getYear(ddn).toString(),
              },
            ],
          }),
          await notify({
            type: 'patientUpdate',
            userId,
            global: true,
            appPayload: JSON.stringify({
              operation: 'update',
              patient: {
                id,
                firstName,
                lastName,
                sexe,
                ddn,
                deleted,
                onTrash,
                patientFullName: `${lastName} ${firstName}`,
                informationsConfirmed,
                nTel,
              },
            }),
          }),
          ,
        ])
      }

      return patient
    } catch (error) {
      console.dir({ error }, { depth: 5, colors: true })
      throw new Error('failed to update patient data')
    }
  }
}
