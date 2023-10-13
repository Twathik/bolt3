import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMobileDeviceArgs } from "./args/AggregateMobileDeviceArgs";
import { MobileDevice } from "../../../models/MobileDevice";
import { AggregateMobileDevice } from "../../outputs/AggregateMobileDevice";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MobileDevice)
export class AggregateMobileDeviceResolver {
  @TypeGraphQL.Query(_returns => AggregateMobileDevice, {
    nullable: false
  })
  async aggregateMobileDevice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMobileDeviceArgs): Promise<AggregateMobileDevice> {
    return getPrismaFromContext(ctx).mobileDevice.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
