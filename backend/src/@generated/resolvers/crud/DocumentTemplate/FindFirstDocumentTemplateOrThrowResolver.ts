import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDocumentTemplateOrThrowArgs } from "./args/FindFirstDocumentTemplateOrThrowArgs";
import { DocumentTemplate } from "../../../models/DocumentTemplate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentTemplate)
export class FindFirstDocumentTemplateOrThrowResolver {
  @TypeGraphQL.Query(_returns => DocumentTemplate, {
    nullable: true
  })
  async findFirstDocumentTemplateOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDocumentTemplateOrThrowArgs): Promise<DocumentTemplate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentTemplate.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
