import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyPatientInput } from "../inputs/WorkingListCreateManyPatientInput";

@TypeGraphQL.InputType("WorkingListCreateManyPatientInputEnvelope", {})
export class WorkingListCreateManyPatientInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkingListCreateManyPatientInput], {
    nullable: false
  })
  data!: WorkingListCreateManyPatientInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
