import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreCreateManyPatientInputEnvelope } from "../inputs/DocumentStoreCreateManyPatientInputEnvelope";
import { DocumentStoreCreateOrConnectWithoutPatientInput } from "../inputs/DocumentStoreCreateOrConnectWithoutPatientInput";
import { DocumentStoreCreateWithoutPatientInput } from "../inputs/DocumentStoreCreateWithoutPatientInput";
import { DocumentStoreWhereUniqueInput } from "../inputs/DocumentStoreWhereUniqueInput";

@TypeGraphQL.InputType("DocumentStoreCreateNestedManyWithoutPatientInput", {})
export class DocumentStoreCreateNestedManyWithoutPatientInput {
  @TypeGraphQL.Field(_type => [DocumentStoreCreateWithoutPatientInput], {
    nullable: true
  })
  create?: DocumentStoreCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: DocumentStoreCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentStoreCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: DocumentStoreCreateManyPatientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreWhereUniqueInput], {
    nullable: true
  })
  connect?: DocumentStoreWhereUniqueInput[] | undefined;
}
