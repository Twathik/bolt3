import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMobileDeviceArgs } from "./args/FindUniqueMobileDeviceArgs";
import { MobileDevice } from "../../../models/MobileDevice";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MobileDevice)
export class FindUniqueMobileDeviceResolver {
  @TypeGraphQL.Query(_returns => MobileDevice, {
    nullable: true
  })
  async mobileDevice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMobileDeviceArgs): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).mobileDevice.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
