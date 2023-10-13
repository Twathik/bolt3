import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneConsultationListArgs } from "./args/UpdateOneConsultationListArgs";
import { ConsultationList } from "../../../models/ConsultationList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsultationList)
export class UpdateOneConsultationListResolver {
  @TypeGraphQL.Mutation(_returns => ConsultationList, {
    nullable: true
  })
  async updateOneConsultationList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneConsultationListArgs): Promise<ConsultationList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultationList.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
