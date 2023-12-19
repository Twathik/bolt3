import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityCreateOrConnectWithoutWorkingListInput } from "../inputs/ModalityCreateOrConnectWithoutWorkingListInput";
import { ModalityCreateWithoutWorkingListInput } from "../inputs/ModalityCreateWithoutWorkingListInput";
import { ModalityWhereUniqueInput } from "../inputs/ModalityWhereUniqueInput";

@TypeGraphQL.InputType("ModalityCreateNestedOneWithoutWorkingListInput", {})
export class ModalityCreateNestedOneWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => ModalityCreateWithoutWorkingListInput, {
    nullable: true
  })
  create?: ModalityCreateWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => ModalityCreateOrConnectWithoutWorkingListInput, {
    nullable: true
  })
  connectOrCreate?: ModalityCreateOrConnectWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => ModalityWhereUniqueInput, {
    nullable: true
  })
  connect?: ModalityWhereUniqueInput | undefined;
}
