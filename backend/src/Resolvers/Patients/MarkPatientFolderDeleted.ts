import * as TypeGraphQL from 'type-graphql'

import { Patient } from '../../@generated'
import { Context } from '../../context'
import { MarkPatientFolderDeletedArgs } from './Args/MarkPatientFolderDeletedArgs'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'

@TypeGraphQL.Resolver((_of) => Patient)
export class MarkPatientFolderDeleted {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: true,
  })
  async markPatientFolderDeleted(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() { id, userId }: MarkPatientFolderDeletedArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<Patient | null> {
    try {
      const prisma = ctx.prisma
      const patient = await prisma.patient.update({
        where: { id },
        data: { deleted: true },
      })
      const {
        firstName,
        lastName,
        sexe,
        ddn,
        deleted,
        onTrash,
        informationsConfirmed,
        nTel,
      } = patient
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
      })
      return patient
    } catch (error) {
      console.log({ error })
      throw new Error('failed to update patient data')
    }
  }
}
