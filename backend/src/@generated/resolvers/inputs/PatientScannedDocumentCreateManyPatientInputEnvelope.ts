import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentCreateManyPatientInput } from "../inputs/PatientScannedDocumentCreateManyPatientInput";

@TypeGraphQL.InputType("PatientScannedDocumentCreateManyPatientInputEnvelope", {})
export class PatientScannedDocumentCreateManyPatientInputEnvelope {
  @TypeGraphQL.Field(_type => [PatientScannedDocumentCreateManyPatientInput], {
    nullable: false
  })
  data!: PatientScannedDocumentCreateManyPatientInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
