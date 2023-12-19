import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EconomizerCountOrderByAggregateInput } from "../inputs/EconomizerCountOrderByAggregateInput";
import { EconomizerMaxOrderByAggregateInput } from "../inputs/EconomizerMaxOrderByAggregateInput";
import { EconomizerMinOrderByAggregateInput } from "../inputs/EconomizerMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EconomizerOrderByWithAggregationInput", {})
export class EconomizerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  eventType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  template?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EconomizerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EconomizerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EconomizerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EconomizerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EconomizerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EconomizerMinOrderByAggregateInput | undefined;
}
