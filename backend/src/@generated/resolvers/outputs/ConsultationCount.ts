import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationCountConsultationListArgs } from "./args/ConsultationCountConsultationListArgs";

@TypeGraphQL.ObjectType("ConsultationCount", {})
export class ConsultationCount {
  ConsultationList!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "ConsultationList",
    nullable: false
  })
  getConsultationList(@TypeGraphQL.Root() root: ConsultationCount, @TypeGraphQL.Args() args: ConsultationCountConsultationListArgs): number {
    return root.ConsultationList;
  }
}
