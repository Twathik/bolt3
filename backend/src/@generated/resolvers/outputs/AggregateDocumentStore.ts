import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreCountAggregate } from "../outputs/DocumentStoreCountAggregate";
import { DocumentStoreMaxAggregate } from "../outputs/DocumentStoreMaxAggregate";
import { DocumentStoreMinAggregate } from "../outputs/DocumentStoreMinAggregate";

@TypeGraphQL.ObjectType("AggregateDocumentStore", {})
export class AggregateDocumentStore {
  @TypeGraphQL.Field(_type => DocumentStoreCountAggregate, {
    nullable: true
  })
  _count!: DocumentStoreCountAggregate | null;

  @TypeGraphQL.Field(_type => DocumentStoreMinAggregate, {
    nullable: true
  })
  _min!: DocumentStoreMinAggregate | null;

  @TypeGraphQL.Field(_type => DocumentStoreMaxAggregate, {
    nullable: true
  })
  _max!: DocumentStoreMaxAggregate | null;
}
