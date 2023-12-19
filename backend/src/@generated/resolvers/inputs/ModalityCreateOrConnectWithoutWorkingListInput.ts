import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityCreateWithoutWorkingListInput } from "../inputs/ModalityCreateWithoutWorkingListInput";
import { ModalityWhereUniqueInput } from "../inputs/ModalityWhereUniqueInput";

@TypeGraphQL.InputType("ModalityCreateOrConnectWithoutWorkingListInput", {})
export class ModalityCreateOrConnectWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => ModalityWhereUniqueInput, {
    nullable: false
  })
  where!: ModalityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ModalityCreateWithoutWorkingListInput, {
    nullable: false
  })
  create!: ModalityCreateWithoutWorkingListInput;
}
