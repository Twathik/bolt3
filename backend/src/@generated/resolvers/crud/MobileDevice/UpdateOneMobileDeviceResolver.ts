import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMobileDeviceArgs } from "./args/UpdateOneMobileDeviceArgs";
import { MobileDevice } from "../../../models/MobileDevice";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MobileDevice)
export class UpdateOneMobileDeviceResolver {
  @TypeGraphQL.Mutation(_returns => MobileDevice, {
    nullable: true
  })
  async updateOneMobileDevice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMobileDeviceArgs): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).mobileDevice.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
