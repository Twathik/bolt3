import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEconomizerOrThrowArgs } from "./args/FindFirstEconomizerOrThrowArgs";
import { Economizer } from "../../../models/Economizer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Economizer)
export class FindFirstEconomizerOrThrowResolver {
  @TypeGraphQL.Query(_returns => Economizer, {
    nullable: true
  })
  async findFirstEconomizerOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEconomizerOrThrowArgs): Promise<Economizer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).economizer.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
