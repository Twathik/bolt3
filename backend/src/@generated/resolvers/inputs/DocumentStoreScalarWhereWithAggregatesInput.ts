import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableWithAggregatesFilter } from "../inputs/BytesNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("DocumentStoreScalarWhereWithAggregatesInput", {})
export class DocumentStoreScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DocumentStoreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DocumentStoreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DocumentStoreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DocumentStoreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  patientId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  clinicalData?: BytesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  documentData?: BytesNullableWithAggregatesFilter | undefined;
}
