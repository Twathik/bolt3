import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityCreateWithoutWorkingListInput } from "../inputs/ModalityCreateWithoutWorkingListInput";
import { ModalityUpdateWithoutWorkingListInput } from "../inputs/ModalityUpdateWithoutWorkingListInput";
import { ModalityWhereInput } from "../inputs/ModalityWhereInput";

@TypeGraphQL.InputType("ModalityUpsertWithoutWorkingListInput", {})
export class ModalityUpsertWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => ModalityUpdateWithoutWorkingListInput, {
    nullable: false
  })
  update!: ModalityUpdateWithoutWorkingListInput;

  @TypeGraphQL.Field(_type => ModalityCreateWithoutWorkingListInput, {
    nullable: false
  })
  create!: ModalityCreateWithoutWorkingListInput;

  @TypeGraphQL.Field(_type => ModalityWhereInput, {
    nullable: true
  })
  where?: ModalityWhereInput | undefined;
}
