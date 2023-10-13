import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateNestedManyWithoutConsultationInput } from "../inputs/ConsultationListCreateNestedManyWithoutConsultationInput";

@TypeGraphQL.InputType("ConsultationCreateInput", {})
export class ConsultationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  day!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  month!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  year!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ConsultationListCreateNestedManyWithoutConsultationInput, {
    nullable: true
  })
  ConsultationList?: ConsultationListCreateNestedManyWithoutConsultationInput | undefined;
}
