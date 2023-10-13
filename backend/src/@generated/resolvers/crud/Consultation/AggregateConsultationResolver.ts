import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateConsultationArgs } from "./args/AggregateConsultationArgs";
import { Consultation } from "../../../models/Consultation";
import { AggregateConsultation } from "../../outputs/AggregateConsultation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultation)
export class AggregateConsultationResolver {
  @TypeGraphQL.Query(_returns => AggregateConsultation, {
    nullable: false
  })
  async aggregateConsultation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateConsultationArgs): Promise<AggregateConsultation> {
    return getPrismaFromContext(ctx).consultation.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
