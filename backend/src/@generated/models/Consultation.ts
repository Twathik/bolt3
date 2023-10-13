import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ConsultationList } from "../models/ConsultationList";
import { ConsultationCount } from "../resolvers/outputs/ConsultationCount";

@TypeGraphQL.ObjectType("Consultation", {})
export class Consultation {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  day!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  month!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  year!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  ConsultationList?: ConsultationList[];

  @TypeGraphQL.Field(_type => ConsultationCount, {
    nullable: true
  })
  _count?: ConsultationCount | null;
}
