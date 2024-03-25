import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreCreateManyPatientInputEnvelope } from "../inputs/DocumentStoreCreateManyPatientInputEnvelope";
import { DocumentStoreCreateOrConnectWithoutPatientInput } from "../inputs/DocumentStoreCreateOrConnectWithoutPatientInput";
import { DocumentStoreCreateWithoutPatientInput } from "../inputs/DocumentStoreCreateWithoutPatientInput";
import { DocumentStoreScalarWhereInput } from "../inputs/DocumentStoreScalarWhereInput";
import { DocumentStoreUpdateManyWithWhereWithoutPatientInput } from "../inputs/DocumentStoreUpdateManyWithWhereWithoutPatientInput";
import { DocumentStoreUpdateWithWhereUniqueWithoutPatientInput } from "../inputs/DocumentStoreUpdateWithWhereUniqueWithoutPatientInput";
import { DocumentStoreUpsertWithWhereUniqueWithoutPatientInput } from "../inputs/DocumentStoreUpsertWithWhereUniqueWithoutPatientInput";
import { DocumentStoreWhereUniqueInput } from "../inputs/DocumentStoreWhereUniqueInput";

@TypeGraphQL.InputType("DocumentStoreUpdateManyWithoutPatientNestedInput", {})
export class DocumentStoreUpdateManyWithoutPatientNestedInput {
  @TypeGraphQL.Field(_type => [DocumentStoreCreateWithoutPatientInput], {
    nullable: true
  })
  create?: DocumentStoreCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: DocumentStoreCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreUpsertWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  upsert?: DocumentStoreUpsertWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentStoreCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: DocumentStoreCreateManyPatientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreWhereUniqueInput], {
    nullable: true
  })
  set?: DocumentStoreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DocumentStoreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreWhereUniqueInput], {
    nullable: true
  })
  delete?: DocumentStoreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreWhereUniqueInput], {
    nullable: true
  })
  connect?: DocumentStoreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreUpdateWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  update?: DocumentStoreUpdateWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreUpdateManyWithWhereWithoutPatientInput], {
    nullable: true
  })
  updateMany?: DocumentStoreUpdateManyWithWhereWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DocumentStoreScalarWhereInput[] | undefined;
}
