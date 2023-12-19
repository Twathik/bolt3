import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEconomizerArgs } from "./args/UpdateOneEconomizerArgs";
import { Economizer } from "../../../models/Economizer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Economizer)
export class UpdateOneEconomizerResolver {
  @TypeGraphQL.Mutation(_returns => Economizer, {
    nullable: true
  })
  async updateOneEconomizer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEconomizerArgs): Promise<Economizer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).economizer.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
