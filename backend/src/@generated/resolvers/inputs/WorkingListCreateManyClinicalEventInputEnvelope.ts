import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyClinicalEventInput } from "../inputs/WorkingListCreateManyClinicalEventInput";

@TypeGraphQL.InputType("WorkingListCreateManyClinicalEventInputEnvelope", {})
export class WorkingListCreateManyClinicalEventInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkingListCreateManyClinicalEventInput], {
    nullable: false
  })
  data!: WorkingListCreateManyClinicalEventInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
