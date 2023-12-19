import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityUpdateWithoutWorkingListInput } from "../inputs/ModalityUpdateWithoutWorkingListInput";
import { ModalityWhereInput } from "../inputs/ModalityWhereInput";

@TypeGraphQL.InputType("ModalityUpdateToOneWithWhereWithoutWorkingListInput", {})
export class ModalityUpdateToOneWithWhereWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => ModalityWhereInput, {
    nullable: true
  })
  where?: ModalityWhereInput | undefined;

  @TypeGraphQL.Field(_type => ModalityUpdateWithoutWorkingListInput, {
    nullable: false
  })
  data!: ModalityUpdateWithoutWorkingListInput;
}
