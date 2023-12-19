import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateModalityArgs } from "./args/AggregateModalityArgs";
import { Modality } from "../../../models/Modality";
import { AggregateModality } from "../../outputs/AggregateModality";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Modality)
export class AggregateModalityResolver {
  @TypeGraphQL.Query(_returns => AggregateModality, {
    nullable: false
  })
  async aggregateModality(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateModalityArgs): Promise<AggregateModality> {
    return getPrismaFromContext(ctx).modality.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
