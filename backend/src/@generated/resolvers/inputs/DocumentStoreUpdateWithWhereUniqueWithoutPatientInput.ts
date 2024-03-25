import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreUpdateWithoutPatientInput } from "../inputs/DocumentStoreUpdateWithoutPatientInput";
import { DocumentStoreWhereUniqueInput } from "../inputs/DocumentStoreWhereUniqueInput";

@TypeGraphQL.InputType("DocumentStoreUpdateWithWhereUniqueWithoutPatientInput", {})
export class DocumentStoreUpdateWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => DocumentStoreWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentStoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentStoreUpdateWithoutPatientInput, {
    nullable: false
  })
  data!: DocumentStoreUpdateWithoutPatientInput;
}
