import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { EnumModalityTypeWithAggregatesFilter } from "../inputs/EnumModalityTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ModalityScalarWhereWithAggregatesInput", {})
export class ModalityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ModalityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ModalityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ModalityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ModalityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ModalityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ModalityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  modalityName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  modalityPseudo?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  modalityAETitle?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  modalityIpAddress?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumModalityTypeWithAggregatesFilter, {
    nullable: true
  })
  modalityType?: EnumModalityTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  modalityPort?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  deleted?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  activated?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  enabled?: BoolWithAggregatesFilter | undefined;
}
