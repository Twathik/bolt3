import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TemplateSpeciality } from "../../enums/TemplateSpeciality";

@TypeGraphQL.InputType("EnumTemplateSpecialityFieldUpdateOperationsInput", {})
export class EnumTemplateSpecialityFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TemplateSpeciality, {
    nullable: true
  })
  set?: "CARDIOLOGY" | "GYNECOLOGY" | undefined;
}
