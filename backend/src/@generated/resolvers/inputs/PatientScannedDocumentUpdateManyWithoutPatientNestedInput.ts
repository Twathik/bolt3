import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentCreateManyPatientInputEnvelope } from "../inputs/PatientScannedDocumentCreateManyPatientInputEnvelope";
import { PatientScannedDocumentCreateOrConnectWithoutPatientInput } from "../inputs/PatientScannedDocumentCreateOrConnectWithoutPatientInput";
import { PatientScannedDocumentCreateWithoutPatientInput } from "../inputs/PatientScannedDocumentCreateWithoutPatientInput";
import { PatientScannedDocumentScalarWhereInput } from "../inputs/PatientScannedDocumentScalarWhereInput";
import { PatientScannedDocumentUpdateManyWithWhereWithoutPatientInput } from "../inputs/PatientScannedDocumentUpdateManyWithWhereWithoutPatientInput";
import { PatientScannedDocumentUpdateWithWhereUniqueWithoutPatientInput } from "../inputs/PatientScannedDocumentUpdateWithWhereUniqueWithoutPatientInput";
import { PatientScannedDocumentUpsertWithWhereUniqueWithoutPatientInput } from "../inputs/PatientScannedDocumentUpsertWithWhereUniqueWithoutPatientInput";
import { PatientScannedDocumentWhereUniqueInput } from "../inputs/PatientScannedDocumentWhereUniqueInput";

@TypeGraphQL.InputType("PatientScannedDocumentUpdateManyWithoutPatientNestedInput", {})
export class PatientScannedDocumentUpdateManyWithoutPatientNestedInput {
  @TypeGraphQL.Field(_type => [PatientScannedDocumentCreateWithoutPatientInput], {
    nullable: true
  })
  create?: PatientScannedDocumentCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: PatientScannedDocumentCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentUpsertWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  upsert?: PatientScannedDocumentUpsertWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: PatientScannedDocumentCreateManyPatientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentWhereUniqueInput], {
    nullable: true
  })
  set?: PatientScannedDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PatientScannedDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentWhereUniqueInput], {
    nullable: true
  })
  delete?: PatientScannedDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: PatientScannedDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentUpdateWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  update?: PatientScannedDocumentUpdateWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentUpdateManyWithWhereWithoutPatientInput], {
    nullable: true
  })
  updateMany?: PatientScannedDocumentUpdateManyWithWhereWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PatientScannedDocumentScalarWhereInput[] | undefined;
}
