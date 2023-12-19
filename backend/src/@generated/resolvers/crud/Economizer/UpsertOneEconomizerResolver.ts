import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEconomizerArgs } from "./args/UpsertOneEconomizerArgs";
import { Economizer } from "../../../models/Economizer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Economizer)
export class UpsertOneEconomizerResolver {
  @TypeGraphQL.Mutation(_returns => Economizer, {
    nullable: false
  })
  async upsertOneEconomizer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEconomizerArgs): Promise<Economizer> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).economizer.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
