import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateClinicalEventArgs } from "./args/AggregateClinicalEventArgs";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { AggregateClinicalEvent } from "../../outputs/AggregateClinicalEvent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClinicalEvent)
export class AggregateClinicalEventResolver {
  @TypeGraphQL.Query(_returns => AggregateClinicalEvent, {
    nullable: false
  })
  async aggregateClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateClinicalEventArgs): Promise<AggregateClinicalEvent> {
    return getPrismaFromContext(ctx).clinicalEvent.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
