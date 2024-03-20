import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentStoreCountAggregate } from "../outputs/DocumentStoreCountAggregate";
import { DocumentStoreMaxAggregate } from "../outputs/DocumentStoreMaxAggregate";
import { DocumentStoreMinAggregate } from "../outputs/DocumentStoreMinAggregate";
import { PatientDocumentType } from "../../enums/PatientDocumentType";

@TypeGraphQL.ObjectType("DocumentStoreGroupBy", {})
export class DocumentStoreGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  @TypeGraphQL.Field(_type => PatientDocumentType, {
    nullable: false
  })
  patientDocumentType!: "folder" | "document";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

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
