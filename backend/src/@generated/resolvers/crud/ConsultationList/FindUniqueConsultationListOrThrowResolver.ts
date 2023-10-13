import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueConsultationListOrThrowArgs } from "./args/FindUniqueConsultationListOrThrowArgs";
import { ConsultationList } from "../../../models/ConsultationList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsultationList)
export class FindUniqueConsultationListOrThrowResolver {
  @TypeGraphQL.Query(_returns => ConsultationList, {
    nullable: true
  })
  async getConsultationList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueConsultationListOrThrowArgs): Promise<ConsultationList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultationList.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
