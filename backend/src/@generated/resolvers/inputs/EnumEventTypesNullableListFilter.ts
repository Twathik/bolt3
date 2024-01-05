import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("EnumEventTypesNullableListFilter", {})
export class EnumEventTypesNullableListFilter {
  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: true
  })
  equals?: Array<"CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO"> | undefined;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: true
  })
  has?: "CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO" | undefined;

  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: true
  })
  hasEvery?: Array<"CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO"> | undefined;

  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: true
  })
  hasSome?: Array<"CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO"> | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}
