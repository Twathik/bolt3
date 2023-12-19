import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyModalityInput } from "../inputs/WorkingListCreateManyModalityInput";

@TypeGraphQL.InputType("WorkingListCreateManyModalityInputEnvelope", {})
export class WorkingListCreateManyModalityInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkingListCreateManyModalityInput], {
    nullable: false
  })
  data!: WorkingListCreateManyModalityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
