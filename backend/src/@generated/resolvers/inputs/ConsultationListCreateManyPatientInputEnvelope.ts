import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateManyPatientInput } from "../inputs/ConsultationListCreateManyPatientInput";

@TypeGraphQL.InputType("ConsultationListCreateManyPatientInputEnvelope", {})
export class ConsultationListCreateManyPatientInputEnvelope {
  @TypeGraphQL.Field(_type => [ConsultationListCreateManyPatientInput], {
    nullable: false
  })
  data!: ConsultationListCreateManyPatientInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
