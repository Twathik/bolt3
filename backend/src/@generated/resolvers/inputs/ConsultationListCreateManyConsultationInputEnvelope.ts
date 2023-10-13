import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateManyConsultationInput } from "../inputs/ConsultationListCreateManyConsultationInput";

@TypeGraphQL.InputType("ConsultationListCreateManyConsultationInputEnvelope", {})
export class ConsultationListCreateManyConsultationInputEnvelope {
  @TypeGraphQL.Field(_type => [ConsultationListCreateManyConsultationInput], {
    nullable: false
  })
  data!: ConsultationListCreateManyConsultationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
