import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEconomizerArgs } from "./args/AggregateEconomizerArgs";
import { Economizer } from "../../../models/Economizer";
import { AggregateEconomizer } from "../../outputs/AggregateEconomizer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Economizer)
export class AggregateEconomizerResolver {
  @TypeGraphQL.Query(_returns => AggregateEconomizer, {
    nullable: false
  })
  async aggregateEconomizer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEconomizerArgs): Promise<AggregateEconomizer> {
    return getPrismaFromContext(ctx).economizer.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
