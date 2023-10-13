import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMobileDeviceArgs } from "./args/GroupByMobileDeviceArgs";
import { MobileDevice } from "../../../models/MobileDevice";
import { MobileDeviceGroupBy } from "../../outputs/MobileDeviceGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MobileDevice)
export class GroupByMobileDeviceResolver {
  @TypeGraphQL.Query(_returns => [MobileDeviceGroupBy], {
    nullable: false
  })
  async groupByMobileDevice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMobileDeviceArgs): Promise<MobileDeviceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).mobileDevice.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
