import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityWhereInput } from "../inputs/ModalityWhereInput";

@TypeGraphQL.InputType("ModalityRelationFilter", {})
export class ModalityRelationFilter {
  @TypeGraphQL.Field(_type => ModalityWhereInput, {
    nullable: true
  })
  is?: ModalityWhereInput | undefined;

  @TypeGraphQL.Field(_type => ModalityWhereInput, {
    nullable: true
  })
  isNot?: ModalityWhereInput | undefined;
}
