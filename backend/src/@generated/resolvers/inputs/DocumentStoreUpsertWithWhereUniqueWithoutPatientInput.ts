import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreCreateWithoutPatientInput } from "../inputs/DocumentStoreCreateWithoutPatientInput";
import { DocumentStoreUpdateWithoutPatientInput } from "../inputs/DocumentStoreUpdateWithoutPatientInput";
import { DocumentStoreWhereUniqueInput } from "../inputs/DocumentStoreWhereUniqueInput";

@TypeGraphQL.InputType("DocumentStoreUpsertWithWhereUniqueWithoutPatientInput", {})
export class DocumentStoreUpsertWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => DocumentStoreWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentStoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentStoreUpdateWithoutPatientInput, {
    nullable: false
  })
  update!: DocumentStoreUpdateWithoutPatientInput;

  @TypeGraphQL.Field(_type => DocumentStoreCreateWithoutPatientInput, {
    nullable: false
  })
  create!: DocumentStoreCreateWithoutPatientInput;
}
