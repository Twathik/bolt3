import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMobileDeviceOrThrowArgs } from "./args/FindUniqueMobileDeviceOrThrowArgs";
import { MobileDevice } from "../../../models/MobileDevice";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MobileDevice)
export class FindUniqueMobileDeviceOrThrowResolver {
  @TypeGraphQL.Query(_returns => MobileDevice, {
    nullable: true
  })
  async getMobileDevice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMobileDeviceOrThrowArgs): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).mobileDevice.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
