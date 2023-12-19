import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Modality } from "../../../models/Modality";
import { WorkingList } from "../../../models/WorkingList";
import { ModalityWorkingListArgs } from "./args/ModalityWorkingListArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Modality)
export class ModalityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [WorkingList], {
    nullable: false
  })
  async WorkingList(@TypeGraphQL.Root() modality: Modality, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ModalityWorkingListArgs): Promise<WorkingList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).modality.findUniqueOrThrow({
      where: {
        id: modality.id,
      },
    }).WorkingList({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
