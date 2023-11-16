import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneDocumentTemplateArgs } from "./args/UpdateOneDocumentTemplateArgs";
import { DocumentTemplate } from "../../../models/DocumentTemplate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentTemplate)
export class UpdateOneDocumentTemplateResolver {
  @TypeGraphQL.Mutation(_returns => DocumentTemplate, {
    nullable: true
  })
  async updateOneDocumentTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneDocumentTemplateArgs): Promise<DocumentTemplate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentTemplate.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
