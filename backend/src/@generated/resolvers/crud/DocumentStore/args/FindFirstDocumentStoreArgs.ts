import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentStoreOrderByWithRelationInput } from "../../../inputs/DocumentStoreOrderByWithRelationInput";
import { DocumentStoreWhereInput } from "../../../inputs/DocumentStoreWhereInput";
import { DocumentStoreWhereUniqueInput } from "../../../inputs/DocumentStoreWhereUniqueInput";
import { DocumentStoreScalarFieldEnum } from "../../../../enums/DocumentStoreScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDocumentStoreArgs {
  @TypeGraphQL.Field(_type => DocumentStoreWhereInput, {
    nullable: true
  })
  where?: DocumentStoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DocumentStoreOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentStoreWhereUniqueInput, {
    nullable: true
  })
  cursor?: DocumentStoreWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "patientId" | "clinicalData" | "documentData"> | undefined;
}
