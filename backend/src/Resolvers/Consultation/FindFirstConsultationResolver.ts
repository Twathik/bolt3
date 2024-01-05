import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { Consultation } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { FindTodayConsultationArgs } from './args/FindTodayConsultationArgs'

@TypeGraphQL.Resolver((_of) => Consultation)
export class FindFirstConsultationResolver {
  @TypeGraphQL.Query((_returns) => Consultation, {
    nullable: true,
  })
  async findFirstConsultation(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { day, month, year }: FindTodayConsultationArgs,
  ): Promise<Consultation> {
    const { _count } = transformInfoIntoPrismaArgs(info)

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

      return todayConsultation
    } catch (error) {
      throw Error('We failed to create today consultation')
    }
  }
}
