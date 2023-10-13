import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ConsultationList } from "../../../models/ConsultationList";
import { Patient } from "../../../models/Patient";
import { PatientConsultationListArgs } from "./args/PatientConsultationListArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class PatientRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ConsultationList], {
    nullable: false
  })
  async ConsultationList(@TypeGraphQL.Root() patient: Patient, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientConsultationListArgs): Promise<ConsultationList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patient.findUniqueOrThrow({
      where: {
        id: patient.id,
      },
    }).ConsultationList({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
