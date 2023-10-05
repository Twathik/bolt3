import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSexeFilter } from "../inputs/NestedEnumSexeFilter";
import { Sexe } from "../../enums/Sexe";

@TypeGraphQL.InputType("EnumSexeFilter", {})
export class EnumSexeFilter {
  @TypeGraphQL.Field(_type => Sexe, {
    nullable: true
  })
  equals?: "M" | "F" | undefined;

  @TypeGraphQL.Field(_type => [Sexe], {
    nullable: true
  })
  in?: Array<"M" | "F"> | undefined;

  @TypeGraphQL.Field(_type => [Sexe], {
    nullable: true
  })
  notIn?: Array<"M" | "F"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSexeFilter, {
    nullable: true
  })
  not?: NestedEnumSexeFilter | undefined;
}
