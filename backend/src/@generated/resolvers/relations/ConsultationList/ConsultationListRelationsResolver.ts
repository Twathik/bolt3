import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Consultation } from "../../../models/Consultation";
import { ConsultationList } from "../../../models/ConsultationList";
import { Patient } from "../../../models/Patient";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsultationList)
export class ConsultationListRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Patient, {
    nullable: false
  })
  async patient(@TypeGraphQL.Root() consultationList: ConsultationList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patient> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultationList.findUniqueOrThrow({
      where: {
        id: consultationList.id,
      },
    }).patient({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Consultation, {
    nullable: false
  })
  async consultation(@TypeGraphQL.Root() consultationList: ConsultationList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Consultation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).consultationList.findUniqueOrThrow({
      where: {
        id: consultationList.id,
      },
    }).consultation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
