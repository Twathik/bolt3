import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Consultation } from "../../../models/Consultation";
import { ConsultationList } from "../../../models/ConsultationList";
import { ConsultationConsultationListArgs } from "./args/ConsultationConsultationListArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Consultation)
export class ConsultationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ConsultationList], {
    nullable: false
  })
  async ConsultationList(@TypeGraphQL.Root() consultation: Consultation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ConsultationConsultationListArgs): Promise<ConsultationList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultation.findUniqueOrThrow({
      where: {
        id: consultation.id,
      },
    }).ConsultationList({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
