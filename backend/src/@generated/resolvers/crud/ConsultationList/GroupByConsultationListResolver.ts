import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByConsultationListArgs } from "./args/GroupByConsultationListArgs";
import { ConsultationList } from "../../../models/ConsultationList";
import { ConsultationListGroupBy } from "../../outputs/ConsultationListGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsultationList)
export class GroupByConsultationListResolver {
  @TypeGraphQL.Query(_returns => [ConsultationListGroupBy], {
    nullable: false
  })
  async groupByConsultationList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByConsultationListArgs): Promise<ConsultationListGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultationList.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
