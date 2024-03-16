import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("DocumentStoreWhereInput", {})
export class DocumentStoreWhereInput {
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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  patientId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  clinicalData?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  documentData?: BytesNullableFilter | undefined;
}
