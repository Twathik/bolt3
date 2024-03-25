import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateWithoutDocumentStoreInput } from "../inputs/PatientUpdateWithoutDocumentStoreInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpdateToOneWithWhereWithoutDocumentStoreInput", {})
export class PatientUpdateToOneWithWhereWithoutDocumentStoreInput {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutDocumentStoreInput, {
    nullable: false
  })
  data!: PatientUpdateWithoutDocumentStoreInput;
}
