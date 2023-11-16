import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDocumentTemplateOrThrowArgs } from "./args/FindUniqueDocumentTemplateOrThrowArgs";
import { DocumentTemplate } from "../../../models/DocumentTemplate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentTemplate)
export class FindUniqueDocumentTemplateOrThrowResolver {
  @TypeGraphQL.Query(_returns => DocumentTemplate, {
    nullable: true
  })
  async getDocumentTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDocumentTemplateOrThrowArgs): Promise<DocumentTemplate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentTemplate.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
