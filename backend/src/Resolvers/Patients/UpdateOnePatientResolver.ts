import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'

import { Patient } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { Context } from '../../context'
import UpdateTypesenseDocument from '../../Utils/typesense/operations/updateDocument'
import { UpdateOnePatientArgs } from './Args/UpdateOnePatientArgs'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'

@TypeGraphQL.Resolver((_of) => Patient)
export class UpdateOnePatientResolver {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: true,
  })
  async updateOnePatient(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: UpdateOnePatientArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    try {
      const patient = await getPrismaFromContext(ctx).patient.update({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      await UpdateTypesenseDocument({
        index: 'patients',
        document: patient,
        typesense: ctx.typesense,
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
