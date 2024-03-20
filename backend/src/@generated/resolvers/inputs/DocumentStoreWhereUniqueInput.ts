import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreWhereInput } from "../inputs/DocumentStoreWhereInput";
import { EnumPatientDocumentTypeFilter } from "../inputs/EnumPatientDocumentTypeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("DocumentStoreWhereUniqueInput", {})
export class DocumentStoreWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patientId?: string | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreWhereInput], {
    nullable: true
  })
  AND?: DocumentStoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreWhereInput], {
    nullable: true
  })
  OR?: DocumentStoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreWhereInput], {
    nullable: true
  })
  NOT?: DocumentStoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumPatientDocumentTypeFilter, {
    nullable: true
  })
  patientDocumentType?: EnumPatientDocumentTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;
}
