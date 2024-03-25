import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutDocumentStoreInput } from "../inputs/PatientCreateOrConnectWithoutDocumentStoreInput";
import { PatientCreateWithoutDocumentStoreInput } from "../inputs/PatientCreateWithoutDocumentStoreInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateNestedOneWithoutDocumentStoreInput", {})
export class PatientCreateNestedOneWithoutDocumentStoreInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutDocumentStoreInput, {
    nullable: true
  })
  create?: PatientCreateWithoutDocumentStoreInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutDocumentStoreInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutDocumentStoreInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientWhereUniqueInput | undefined;
}
