import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneClinicalEventArgs } from "./args/UpsertOneClinicalEventArgs";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClinicalEvent)
export class UpsertOneClinicalEventResolver {
  @TypeGraphQL.Mutation(_returns => ClinicalEvent, {
    nullable: false
  })
  async upsertOneClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneClinicalEventArgs): Promise<ClinicalEvent> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
