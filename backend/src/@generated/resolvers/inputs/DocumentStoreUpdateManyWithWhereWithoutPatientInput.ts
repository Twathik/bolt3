import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreScalarWhereInput } from "../inputs/DocumentStoreScalarWhereInput";
import { DocumentStoreUpdateManyMutationInput } from "../inputs/DocumentStoreUpdateManyMutationInput";

@TypeGraphQL.InputType("DocumentStoreUpdateManyWithWhereWithoutPatientInput", {})
export class DocumentStoreUpdateManyWithWhereWithoutPatientInput {
  @TypeGraphQL.Field(_type => DocumentStoreScalarWhereInput, {
    nullable: false
  })
  where!: DocumentStoreScalarWhereInput;

  @TypeGraphQL.Field(_type => DocumentStoreUpdateManyMutationInput, {
    nullable: false
  })
  data!: DocumentStoreUpdateManyMutationInput;
}
