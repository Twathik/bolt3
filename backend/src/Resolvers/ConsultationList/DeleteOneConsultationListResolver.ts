import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import {
  ConsultationList,
  DeleteOneConsultationListArgs,
} from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { v4 as uuid } from 'uuid'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { format } from 'date-fns'
import { Context } from '../../context'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'

@TypeGraphQL.Resolver((_of) => ConsultationList)
export class DeleteOneConsultationListResolver {
  @TypeGraphQL.Mutation((_returns) => ConsultationList, {
    nullable: true,
  })
  async deleteOneConsultationList(
    @TypeGraphQL.Ctx() { prisma, pubSub }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneConsultationListArgs,
  ): Promise<ConsultationList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    try {
      const consultationList = await prisma.consultationList.delete({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        include: { patient: true },
      })

      const { active, id, patientId, consultationDate } = consultationList
      const { firstName, lastName, ddn, sexe } =
        await prisma.patient.findFirstOrThrow({
          where: { id: patientId },
        })
      const message: WebsocketMessageInterface = {
        type: 'consultation-list',
        destination: ['consultation-list'],
        global: true,
        id: uuid(),
        subscriptionIds: [],
        payload: {
          operation: 'remove',
          consultationList: {
            consultationDate,
            label: `${lastName} ${firstName}`,
            description: `DDN : ${format(ddn, 'dd-MM-yyyy')} - sexe: ${
              sexe === 'F' ? 'Femme' : 'Homme'
            }`,
            patientId,
            consultationList: {
              active,
              id,
              patient: {
                ddn: format(ddn, 'dd-MM-yyyy'),
                firstName,
                lastName,
                sexe,
              },
              patientId,
              consultationDate,
            },
          },
        },
      }
      await pubSub.publish(notificationTopic, message)

      return consultationList
    } catch (error) {
      console.log({ error })
      throw Error('consultationList deletion failed')
    }
  }
}
