import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneClinicalEventArgs } from "./args/UpdateOneClinicalEventArgs";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClinicalEvent)
export class UpdateOneClinicalEventResolver {
  @TypeGraphQL.Mutation(_returns => ClinicalEvent, {
    nullable: true
  })
  async updateOneClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneClinicalEventArgs): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
