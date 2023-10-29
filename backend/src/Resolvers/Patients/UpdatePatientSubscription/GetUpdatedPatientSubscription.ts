import * as TypeGraphQL from 'type-graphql'
import { Patient } from '../../../@generated'
import { getPrismaFromContext } from '../../../@generated/helpers'
import { GetUpdatedPatientArgs } from './Args/GetUpdatedPatientArgs'
import { PrismaClient } from '@prisma/client'

@TypeGraphQL.Resolver((_of) => Patient)
export class GetUpdatedPatientSubscription {
  @TypeGraphQL.Subscription((_returns) => Patient, {
    topics: 'GET_UPDATED_PATIENT',
    filter: ({ payload, args }) => {
      return args.id === payload
    },
  })
  async getUpdatedPatient(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() { id }: GetUpdatedPatientArgs,
  ): Promise<Patient | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient

    try {
      const patient = await prisma.patient.findUnique({ where: { id } })
      return patient
    } catch (error) {
      throw new Error('subscription to patient update failed')
    }
  }
}
