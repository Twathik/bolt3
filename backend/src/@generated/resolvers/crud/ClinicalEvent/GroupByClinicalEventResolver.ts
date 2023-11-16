import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByClinicalEventArgs } from "./args/GroupByClinicalEventArgs";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { ClinicalEventGroupBy } from "../../outputs/ClinicalEventGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClinicalEvent)
export class GroupByClinicalEventResolver {
  @TypeGraphQL.Query(_returns => [ClinicalEventGroupBy], {
    nullable: false
  })
  async groupByClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByClinicalEventArgs): Promise<ClinicalEventGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
