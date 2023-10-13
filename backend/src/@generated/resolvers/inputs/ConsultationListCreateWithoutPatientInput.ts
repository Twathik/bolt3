import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationCreateNestedOneWithoutConsultationListInput } from "../inputs/ConsultationCreateNestedOneWithoutConsultationListInput";

@TypeGraphQL.InputType("ConsultationListCreateWithoutPatientInput", {})
export class ConsultationListCreateWithoutPatientInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ConsultationCreateNestedOneWithoutConsultationListInput, {
    nullable: false
  })
  consultation!: ConsultationCreateNestedOneWithoutConsultationListInput;
}
