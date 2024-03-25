import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreWhereInput } from "../inputs/DocumentStoreWhereInput";

@TypeGraphQL.InputType("DocumentStoreListRelationFilter", {})
export class DocumentStoreListRelationFilter {
  @TypeGraphQL.Field(_type => DocumentStoreWhereInput, {
    nullable: true
  })
  every?: DocumentStoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentStoreWhereInput, {
    nullable: true
  })
  some?: DocumentStoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentStoreWhereInput, {
    nullable: true
  })
  none?: DocumentStoreWhereInput | undefined;
}
