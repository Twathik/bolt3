import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'

import { Patient } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { Context } from '../../context'
import UpdateTypesenseDocument from '../../Utils/typesense/operations/updateDocument'
import { UpdateOnePatientArgs } from './Args/UpdateOnePatientArgs'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'

@TypeGraphQL.Resolver((_of) => Patient)
export class UpdateOnePatientResolver {
  @TypeGraphQL.Mutation((_returns) => Patient, {
    nullable: true,
  })
  async updateOnePatient(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: UpdateOnePatientArgs,
  ): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const { prisma, pubSub } = ctx
    try {
      const patient = await prisma.patient.update({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      await UpdateTypesenseDocument({
        index: 'patients',
        document: patient,
        typesense: ctx.typesense,
      })
      if (patient) {
        const notification: WebsocketMessageInterface = {
          global: true,
          subscriptionIds: [patient.id],
          destination: [],
          type: 'patient',
          payload: {
            operation: 'update',
            patient,
          },
        }
        await pubSub.publish(notificationTopic, notification)
      }

      return patient
    } catch (error) {
      console.log({ error })
      throw new Error('failed to update patient data')
    }
  }
}
