import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreCreateWithoutPatientInput } from "../inputs/DocumentStoreCreateWithoutPatientInput";
import { DocumentStoreWhereUniqueInput } from "../inputs/DocumentStoreWhereUniqueInput";

@TypeGraphQL.InputType("DocumentStoreCreateOrConnectWithoutPatientInput", {})
export class DocumentStoreCreateOrConnectWithoutPatientInput {
  @TypeGraphQL.Field(_type => DocumentStoreWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentStoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentStoreCreateWithoutPatientInput, {
    nullable: false
  })
  create!: DocumentStoreCreateWithoutPatientInput;
}
