import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSexeFilter } from "../inputs/NestedEnumSexeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Sexe } from "../../enums/Sexe";

@TypeGraphQL.InputType("NestedEnumSexeWithAggregatesFilter", {})
export class NestedEnumSexeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumSexeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumSexeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSexeFilter, {
    nullable: true
  })
  _min?: NestedEnumSexeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSexeFilter, {
    nullable: true
  })
  _max?: NestedEnumSexeFilter | undefined;
}
