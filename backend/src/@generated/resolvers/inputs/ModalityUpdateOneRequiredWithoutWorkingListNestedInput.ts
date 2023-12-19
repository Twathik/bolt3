import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityCreateOrConnectWithoutWorkingListInput } from "../inputs/ModalityCreateOrConnectWithoutWorkingListInput";
import { ModalityCreateWithoutWorkingListInput } from "../inputs/ModalityCreateWithoutWorkingListInput";
import { ModalityUpdateToOneWithWhereWithoutWorkingListInput } from "../inputs/ModalityUpdateToOneWithWhereWithoutWorkingListInput";
import { ModalityUpsertWithoutWorkingListInput } from "../inputs/ModalityUpsertWithoutWorkingListInput";
import { ModalityWhereUniqueInput } from "../inputs/ModalityWhereUniqueInput";

@TypeGraphQL.InputType("ModalityUpdateOneRequiredWithoutWorkingListNestedInput", {})
export class ModalityUpdateOneRequiredWithoutWorkingListNestedInput {
  @TypeGraphQL.Field(_type => ModalityCreateWithoutWorkingListInput, {
    nullable: true
  })
  create?: ModalityCreateWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => ModalityCreateOrConnectWithoutWorkingListInput, {
    nullable: true
  })
  connectOrCreate?: ModalityCreateOrConnectWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => ModalityUpsertWithoutWorkingListInput, {
    nullable: true
  })
  upsert?: ModalityUpsertWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => ModalityWhereUniqueInput, {
    nullable: true
  })
  connect?: ModalityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ModalityUpdateToOneWithWhereWithoutWorkingListInput, {
    nullable: true
  })
  update?: ModalityUpdateToOneWithWhereWithoutWorkingListInput | undefined;
}
