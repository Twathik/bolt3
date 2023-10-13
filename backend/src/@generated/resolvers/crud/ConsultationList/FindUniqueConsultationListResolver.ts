import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueConsultationListArgs } from "./args/FindUniqueConsultationListArgs";
import { ConsultationList } from "../../../models/ConsultationList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsultationList)
export class FindUniqueConsultationListResolver {
  @TypeGraphQL.Query(_returns => ConsultationList, {
    nullable: true
  })
  async consultationList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueConsultationListArgs): Promise<ConsultationList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultationList.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
