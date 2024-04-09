import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTemplateSpecialityFilter } from "../inputs/NestedEnumTemplateSpecialityFilter";
import { NestedEnumTemplateSpecialityWithAggregatesFilter } from "../inputs/NestedEnumTemplateSpecialityWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { TemplateSpeciality } from "../../enums/TemplateSpeciality";

@TypeGraphQL.InputType("EnumTemplateSpecialityWithAggregatesFilter", {})
export class EnumTemplateSpecialityWithAggregatesFilter {
  @TypeGraphQL.Field(_type => TemplateSpeciality, {
    nullable: true
  })
  equals?: "CARDIOLOGY" | "GYNECOLOGY" | undefined;

  @TypeGraphQL.Field(_type => [TemplateSpeciality], {
    nullable: true
  })
  in?: Array<"CARDIOLOGY" | "GYNECOLOGY"> | undefined;

  @TypeGraphQL.Field(_type => [TemplateSpeciality], {
    nullable: true
  })
  notIn?: Array<"CARDIOLOGY" | "GYNECOLOGY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTemplateSpecialityWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTemplateSpecialityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTemplateSpecialityFilter, {
    nullable: true
  })
  _min?: NestedEnumTemplateSpecialityFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTemplateSpecialityFilter, {
    nullable: true
  })
  _max?: NestedEnumTemplateSpecialityFilter | undefined;
}
