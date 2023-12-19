import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { EnumModalityTypeFilter } from "../inputs/EnumModalityTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ModalityWhereInput } from "../inputs/ModalityWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WorkingListListRelationFilter } from "../inputs/WorkingListListRelationFilter";

@TypeGraphQL.InputType("ModalityWhereUniqueInput", {})
export class ModalityWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modalityName?: string | undefined;

  @TypeGraphQL.Field(_type => [ModalityWhereInput], {
    nullable: true
  })
  AND?: ModalityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ModalityWhereInput], {
    nullable: true
  })
  OR?: ModalityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ModalityWhereInput], {
    nullable: true
  })
  NOT?: ModalityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  modalityPseudo?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  modalityAETitle?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  modalityIpAddress?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumModalityTypeFilter, {
    nullable: true
  })
  modalityType?: EnumModalityTypeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  modalityPort?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  deleted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  activated?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  enabled?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => WorkingListListRelationFilter, {
    nullable: true
  })
  WorkingList?: WorkingListListRelationFilter | undefined;
}
