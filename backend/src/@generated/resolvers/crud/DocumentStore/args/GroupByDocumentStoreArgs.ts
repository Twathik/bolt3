import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentStoreOrderByWithAggregationInput } from "../../../inputs/DocumentStoreOrderByWithAggregationInput";
import { DocumentStoreScalarWhereWithAggregatesInput } from "../../../inputs/DocumentStoreScalarWhereWithAggregatesInput";
import { DocumentStoreWhereInput } from "../../../inputs/DocumentStoreWhereInput";
import { DocumentStoreScalarFieldEnum } from "../../../../enums/DocumentStoreScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDocumentStoreArgs {
  @TypeGraphQL.Field(_type => DocumentStoreWhereInput, {
    nullable: true
  })
  where?: DocumentStoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DocumentStoreOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentStoreScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "patientId" | "clinicalData" | "documentData">;

  @TypeGraphQL.Field(_type => DocumentStoreScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DocumentStoreScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
