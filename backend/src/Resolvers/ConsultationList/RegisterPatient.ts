import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Context } from '../../context'
import { ConsultationList } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'

import { PrismaClient } from '@prisma/client'
import { RegisterPatientArgs } from './args/RegisterPatientArgs'
import { getDate, getMonth, getYear } from 'date-fns'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'

@TypeGraphQL.Resolver((_of) => ConsultationList)
export class RegisterPatient {
  @TypeGraphQL.Mutation((_returns) => String, {
    nullable: false,
  })
  async registerPatient(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: RegisterPatientArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<String> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const { patient_id, userId } = args
    const newDate = new Date()

    const day = getDate(newDate)
    const month = getMonth(newDate)
    const year = getYear(newDate)

    try {
      const prisma = getPrismaFromContext(ctx) as PrismaClient

      let todayConsultation = await prisma.consultation.findFirst({
        where: {
          AND: [
            { day: { equals: day } },
            { month: { equals: month } },
            { year: { equals: year } },
          ],
        },
      })

      if (!todayConsultation) {
        todayConsultation = await prisma.consultation.create({
          data: { day, month, year },
          ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        })
      }
      const { id, active, consultationId, patientId } =
        await prisma.consultationList.upsert({
          where: {
            patientId_consultationId: {
              patientId: patient_id,
              consultationId: todayConsultation.id,
            },
          },
          create: {
            active: true,
            consultationId: todayConsultation.id,
            patientId: patient_id,
          },
          update: {
            active: true,
          },
        })
      const { lastName, firstName, sexe, ddn } =
        await prisma.patient.findFirstOrThrow({
          where: { id: patient_id },
        })
      await notify({
        userId,
        global: true,
        subscriptionSpecificId: consultationId,
        type: 'consultationLists',
        appPayload: JSON.stringify({
          operation: 'create',
          consultationList: {
            id,
            active,
            consultationId,
            patientId,
            patient: {
              id: patient_id,
              lastName,
              firstName,
              sexe,
              ddn,
            },
          },
        }),
      })
      return todayConsultation.id
    } catch (error) {
      throw Error(error as any)
    }
  }
}
