import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneConsultationListArgs } from "./args/UpsertOneConsultationListArgs";
import { ConsultationList } from "../../../models/ConsultationList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsultationList)
export class UpsertOneConsultationListResolver {
  @TypeGraphQL.Mutation(_returns => ConsultationList, {
    nullable: false
  })
  async upsertOneConsultationList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneConsultationListArgs): Promise<ConsultationList> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultationList.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
