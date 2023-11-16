import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDocumentTemplateArgs } from "./args/FindFirstDocumentTemplateArgs";
import { DocumentTemplate } from "../../../models/DocumentTemplate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentTemplate)
export class FindFirstDocumentTemplateResolver {
  @TypeGraphQL.Query(_returns => DocumentTemplate, {
    nullable: true
  })
  async findFirstDocumentTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDocumentTemplateArgs): Promise<DocumentTemplate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentTemplate.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
