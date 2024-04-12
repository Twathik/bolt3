import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Context } from '../../context'
import { ConsultationList } from '../../@generated'
import {
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'

import { RegisterPatientArgs } from './args/RegisterPatientArgs'
import { format } from 'date-fns'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { v4 as uuid } from 'uuid'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'

@TypeGraphQL.Resolver((_of) => ConsultationList)
export class RegisterPatient {
  @TypeGraphQL.Mutation((_returns) => Boolean, {
    nullable: false,
  })
  async registerPatient(
    @TypeGraphQL.Ctx() { prisma, pubSub }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { patientId }: RegisterPatientArgs,
  ): Promise<Boolean> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const consultationDate = format(new Date(), 'dd-MM-yyyy')

    try {
      const [consultationList, patient] = await Promise.all([
        await prisma.consultationList.upsert({
          where: {
            patientId_consultationDate: {
              consultationDate,
              patientId,
            },
          },
          create: {
            active: true,
            patientId,
            consultationDate,
          },
          update: {
            active: true,
          },
          ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        }),
        await prisma.patient.findFirstOrThrow({
          where: { id: patientId },
        }),
      ])
      const { id, active } = consultationList

      const { lastName, firstName, sexe, ddn } = patient

      const message: WebsocketMessageInterface = {
        type: 'consultation-list',
        destination: ['consultation-list'],
        global: true,
        id: uuid(),
        subscriptionIds: [],
        payload: {
          operation: 'add',
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

      return true
    } catch (error) {
      return false
    }
  }
}
