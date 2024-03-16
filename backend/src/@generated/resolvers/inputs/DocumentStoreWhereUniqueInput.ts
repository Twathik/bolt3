import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DocumentStoreWhereInput } from "../inputs/DocumentStoreWhereInput";

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

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  clinicalData?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  documentData?: BytesNullableFilter | undefined;
}
