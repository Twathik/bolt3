import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import {
  AffectedRowsOutput,
  Patient,
  UpdateManyPatientArgs,
} from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { Context } from '../../context'
import UpsertTypesenseDocument from '../../Utils/typesense/operations/upsertDocument'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import {
  PatientInfoInterface,
  notificationTopic,
} from '../../Utils/PubSubInterfaces/MessageTypesInterface'
import { v4 } from 'uuid'
import { format } from 'date-fns'

@TypeGraphQL.Resolver((_of) => Patient)
export class ToggleSelectedTrashMutation {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async toggleSelectedTrashMutation(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyPatientArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const pubsub = ctx.pubSub
    try {
      const trash = await prisma.patient.updateMany({
        ...args,
        where: { AND: [{ id: args.where?.id }, { onTrash: true }] },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      const documents = await prisma.patient.findMany({
        where: { id: args.where?.id },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          sexe: true,
          ddn: true,
          deleted: true,
          onTrash: true,
          informationsConfirmed: true,
          nTel: true,
          updated: true,
        },
      })
      if (args.data?.onTrash?.set === false) {
        await UpsertTypesenseDocument({
          index: 'patients',
          typesense: ctx.typesense,
          documents,
        })
      }
      await Promise.all(
        documents.map((patient) => {
          const message: WebsocketMessageInterface = {
            id: v4(),
            destination: ['trash'],
            global: true,
            subscriptionIds: [],
            type: 'patient',
            payload: {
              operation: 'onTrash',
              trashOperation: patient.onTrash ? 'addToTrash' : 'restore',
              patient: {
                ...patient,
                ddn: format(patient.ddn, 'dd-MM-yyyy'),
                patientFullName: `${patient.lastName} ${patient.firstName}`,
                updated: patient.updated.toISOString(),
              } as PatientInfoInterface,
            },
          }
          pubsub.publish(notificationTopic, message)
        }),
      )

      return trash
    } catch (error) {
      throw Error('Impossible to empty trash')
    }
  }
}
