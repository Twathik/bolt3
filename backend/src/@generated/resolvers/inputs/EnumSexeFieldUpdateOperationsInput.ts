import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sexe } from "../../enums/Sexe";

@TypeGraphQL.InputType("EnumSexeFieldUpdateOperationsInput", {})
export class EnumSexeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Sexe, {
    nullable: true
  })
  set?: "M" | "F" | undefined;
}
