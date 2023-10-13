import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCountConsultationListArgs } from "./args/PatientCountConsultationListArgs";

@TypeGraphQL.ObjectType("PatientCount", {})
export class PatientCount {
  ConsultationList!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "ConsultationList",
    nullable: false
  })
  getConsultationList(@TypeGraphQL.Root() root: PatientCount, @TypeGraphQL.Args() args: PatientCountConsultationListArgs): number {
    return root.ConsultationList;
  }
}
