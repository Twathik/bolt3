import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyUserInput } from "../inputs/WorkingListCreateManyUserInput";

@TypeGraphQL.InputType("WorkingListCreateManyUserInputEnvelope", {})
export class WorkingListCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkingListCreateManyUserInput], {
    nullable: false
  })
  data!: WorkingListCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
