import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWorkingListArgs } from "./args/GroupByWorkingListArgs";
import { WorkingList } from "../../../models/WorkingList";
import { WorkingListGroupBy } from "../../outputs/WorkingListGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WorkingList)
export class GroupByWorkingListResolver {
  @TypeGraphQL.Query(_returns => [WorkingListGroupBy], {
    nullable: false
  })
  async groupByWorkingList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWorkingListArgs): Promise<WorkingListGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workingList.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
