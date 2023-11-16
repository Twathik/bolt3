import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueClinicalEventArgs } from "./args/FindUniqueClinicalEventArgs";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClinicalEvent)
export class FindUniqueClinicalEventResolver {
  @TypeGraphQL.Query(_returns => ClinicalEvent, {
    nullable: true
  })
  async clinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueClinicalEventArgs): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
