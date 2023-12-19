import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstModalityOrThrowArgs } from "./args/FindFirstModalityOrThrowArgs";
import { Modality } from "../../../models/Modality";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Modality)
export class FindFirstModalityOrThrowResolver {
  @TypeGraphQL.Query(_returns => Modality, {
    nullable: true
  })
  async findFirstModalityOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstModalityOrThrowArgs): Promise<Modality | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).modality.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
