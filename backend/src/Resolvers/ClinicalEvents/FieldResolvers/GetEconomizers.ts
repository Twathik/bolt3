import * as TypeGraphQL from 'type-graphql'
import { ClinicalEvent, Economizer } from '../../../@generated'
import { Context } from '../../../context'

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class GetEconomizers {
  @TypeGraphQL.FieldResolver((_returns) => [Economizer], {
    nullable: false,
  })
  async getEconomizers(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Root() clinicalEvent: ClinicalEvent,
  ): Promise<Economizer[]> {
    try {
      return await ctx.prisma.economizer.findMany({
        where: { eventType: clinicalEvent.eventType },
      })
    } catch (error) {
      throw Error('Failed to fetch economizers list')
    }
  }
}
