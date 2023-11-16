import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateNestedOneWithoutPrescriptionInput } from "../inputs/ClinicalEventCreateNestedOneWithoutPrescriptionInput";

@TypeGraphQL.InputType("PrescriptionCreateInput", {})
export class PrescriptionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  savedPrescription?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateNestedOneWithoutPrescriptionInput, {
    nullable: false
  })
  clinicalEvent!: ClinicalEventCreateNestedOneWithoutPrescriptionInput;
}
