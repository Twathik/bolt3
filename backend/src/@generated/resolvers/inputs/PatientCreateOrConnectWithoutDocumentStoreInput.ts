import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutDocumentStoreInput } from "../inputs/PatientCreateWithoutDocumentStoreInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateOrConnectWithoutDocumentStoreInput", {})
export class PatientCreateOrConnectWithoutDocumentStoreInput {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutDocumentStoreInput, {
    nullable: false
  })
  create!: PatientCreateWithoutDocumentStoreInput;
}
