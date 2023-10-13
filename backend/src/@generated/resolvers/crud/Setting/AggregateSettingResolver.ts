import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSettingArgs } from "./args/AggregateSettingArgs";
import { Setting } from "../../../models/Setting";
import { AggregateSetting } from "../../outputs/AggregateSetting";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Setting)
export class AggregateSettingResolver {
  @TypeGraphQL.Query(_returns => AggregateSetting, {
    nullable: false
  })
  async aggregateSetting(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSettingArgs): Promise<AggregateSetting> {
    return getPrismaFromContext(ctx).setting.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
