import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWorkingListArgs } from "./args/AggregateWorkingListArgs";
import { WorkingList } from "../../../models/WorkingList";
import { AggregateWorkingList } from "../../outputs/AggregateWorkingList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WorkingList)
export class AggregateWorkingListResolver {
  @TypeGraphQL.Query(_returns => AggregateWorkingList, {
    nullable: false
  })
  async aggregateWorkingList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWorkingListArgs): Promise<AggregateWorkingList> {
    return getPrismaFromContext(ctx).workingList.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
