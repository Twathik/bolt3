import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TemplateSpeciality } from "../../enums/TemplateSpeciality";

@TypeGraphQL.InputType("NestedEnumTemplateSpecialityFilter", {})
export class NestedEnumTemplateSpecialityFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTemplateSpecialityFilter, {
    nullable: true
  })
  not?: NestedEnumTemplateSpecialityFilter | undefined;
}
