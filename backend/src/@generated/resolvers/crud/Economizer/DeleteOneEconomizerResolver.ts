import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneEconomizerArgs } from "./args/DeleteOneEconomizerArgs";
import { Economizer } from "../../../models/Economizer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Economizer)
export class DeleteOneEconomizerResolver {
  @TypeGraphQL.Mutation(_returns => Economizer, {
    nullable: true
  })
  async deleteOneEconomizer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEconomizerArgs): Promise<Economizer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).economizer.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
