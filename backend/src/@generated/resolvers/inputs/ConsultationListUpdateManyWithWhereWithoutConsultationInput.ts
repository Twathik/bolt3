import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListScalarWhereInput } from "../inputs/ConsultationListScalarWhereInput";
import { ConsultationListUpdateManyMutationInput } from "../inputs/ConsultationListUpdateManyMutationInput";

@TypeGraphQL.InputType("ConsultationListUpdateManyWithWhereWithoutConsultationInput", {})
export class ConsultationListUpdateManyWithWhereWithoutConsultationInput {
  @TypeGraphQL.Field(_type => ConsultationListScalarWhereInput, {
    nullable: false
  })
  where!: ConsultationListScalarWhereInput;

  @TypeGraphQL.Field(_type => ConsultationListUpdateManyMutationInput, {
    nullable: false
  })
  data!: ConsultationListUpdateManyMutationInput;
}
