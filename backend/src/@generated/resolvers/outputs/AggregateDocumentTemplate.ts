import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTemplateCountAggregate } from "../outputs/DocumentTemplateCountAggregate";
import { DocumentTemplateMaxAggregate } from "../outputs/DocumentTemplateMaxAggregate";
import { DocumentTemplateMinAggregate } from "../outputs/DocumentTemplateMinAggregate";

@TypeGraphQL.ObjectType("AggregateDocumentTemplate", {})
export class AggregateDocumentTemplate {
  @TypeGraphQL.Field(_type => DocumentTemplateCountAggregate, {
    nullable: true
  })
  _count!: DocumentTemplateCountAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTemplateMinAggregate, {
    nullable: true
  })
  _min!: DocumentTemplateMinAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTemplateMaxAggregate, {
    nullable: true
  })
  _max!: DocumentTemplateMaxAggregate | null;
}
