import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { User } from "../../../models/User";
import { WorkingList } from "../../../models/WorkingList";
import { UserClinicalEventArgs } from "./args/UserClinicalEventArgs";
import { UserWorkingListArgs } from "./args/UserWorkingListArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [WorkingList], {
    nullable: false
  })
  async WorkingList(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserWorkingListArgs): Promise<WorkingList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).WorkingList({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ClinicalEvent], {
    nullable: false
  })
  async ClinicalEvent(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserClinicalEventArgs): Promise<ClinicalEvent[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).ClinicalEvent({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
