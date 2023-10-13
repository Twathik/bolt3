import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstConsultationListArgs } from "./args/FindFirstConsultationListArgs";
import { ConsultationList } from "../../../models/ConsultationList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsultationList)
export class FindFirstConsultationListResolver {
  @TypeGraphQL.Query(_returns => ConsultationList, {
    nullable: true
  })
  async findFirstConsultationList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstConsultationListArgs): Promise<ConsultationList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultationList.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
