import * as TypeGraphQL from 'type-graphql'
import { Consultation, EventTypes } from '../../../@generated'
import { EventTypes as PrismaEventTypes } from '@prisma/client'

import { Context } from '../../../context'

@TypeGraphQL.Resolver((_of) => Consultation)
export class AllowedEventTypes {
  @TypeGraphQL.FieldResolver((_returns) => [EventTypes], { nullable: false })
  async allowedEventTypes(
    @TypeGraphQL.Ctx() ctx: Context,
  ): Promise<PrismaEventTypes[]> {
    const settings = await ctx.prisma.setting.findFirstOrThrow()
    return settings.allowedEventTypes
  }
}
