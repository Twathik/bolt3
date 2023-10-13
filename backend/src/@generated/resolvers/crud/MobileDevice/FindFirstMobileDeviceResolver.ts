import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMobileDeviceArgs } from "./args/FindFirstMobileDeviceArgs";
import { MobileDevice } from "../../../models/MobileDevice";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MobileDevice)
export class FindFirstMobileDeviceResolver {
  @TypeGraphQL.Query(_returns => MobileDevice, {
    nullable: true
  })
  async findFirstMobileDevice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMobileDeviceArgs): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).mobileDevice.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
