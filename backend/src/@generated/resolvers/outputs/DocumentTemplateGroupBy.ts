import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTemplateAvgAggregate } from "../outputs/DocumentTemplateAvgAggregate";
import { DocumentTemplateCountAggregate } from "../outputs/DocumentTemplateCountAggregate";
import { DocumentTemplateMaxAggregate } from "../outputs/DocumentTemplateMaxAggregate";
import { DocumentTemplateMinAggregate } from "../outputs/DocumentTemplateMinAggregate";
import { DocumentTemplateSumAggregate } from "../outputs/DocumentTemplateSumAggregate";
import { TemplateSpeciality } from "../../enums/TemplateSpeciality";

@TypeGraphQL.ObjectType("DocumentTemplateGroupBy", {})
export class DocumentTemplateGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  templateName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  evenTemplateUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  eventDoxTemplate!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  oddTemplateUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  oddDoxTemplate!: string | null;

  @TypeGraphQL.Field(_type => TemplateSpeciality, {
    nullable: false
  })
  templateSpeciality!: "CARDIOLOGY" | "GYNECOLOGY";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => DocumentTemplateCountAggregate, {
    nullable: true
  })
  _count!: DocumentTemplateCountAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTemplateAvgAggregate, {
    nullable: true
  })
  _avg!: DocumentTemplateAvgAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTemplateSumAggregate, {
    nullable: true
  })
  _sum!: DocumentTemplateSumAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTemplateMinAggregate, {
    nullable: true
  })
  _min!: DocumentTemplateMinAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTemplateMaxAggregate, {
    nullable: true
  })
  _max!: DocumentTemplateMaxAggregate | null;
}
