import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWorkingListOrThrowArgs } from "./args/FindFirstWorkingListOrThrowArgs";
import { WorkingList } from "../../../models/WorkingList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WorkingList)
export class FindFirstWorkingListOrThrowResolver {
  @TypeGraphQL.Query(_returns => WorkingList, {
    nullable: true
  })
  async findFirstWorkingListOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWorkingListOrThrowArgs): Promise<WorkingList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workingList.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
