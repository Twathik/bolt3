import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutDocumentStoreInput } from "../inputs/PatientCreateWithoutDocumentStoreInput";
import { PatientUpdateWithoutDocumentStoreInput } from "../inputs/PatientUpdateWithoutDocumentStoreInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpsertWithoutDocumentStoreInput", {})
export class PatientUpsertWithoutDocumentStoreInput {
  @TypeGraphQL.Field(_type => PatientUpdateWithoutDocumentStoreInput, {
    nullable: false
  })
  update!: PatientUpdateWithoutDocumentStoreInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutDocumentStoreInput, {
    nullable: false
  })
  create!: PatientCreateWithoutDocumentStoreInput;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;
}
