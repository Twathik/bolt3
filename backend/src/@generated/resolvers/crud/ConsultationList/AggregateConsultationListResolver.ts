import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateConsultationListArgs } from "./args/AggregateConsultationListArgs";
import { ConsultationList } from "../../../models/ConsultationList";
import { AggregateConsultationList } from "../../outputs/AggregateConsultationList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsultationList)
export class AggregateConsultationListResolver {
  @TypeGraphQL.Query(_returns => AggregateConsultationList, {
    nullable: false
  })
  async aggregateConsultationList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateConsultationListArgs): Promise<AggregateConsultationList> {
    return getPrismaFromContext(ctx).consultationList.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
