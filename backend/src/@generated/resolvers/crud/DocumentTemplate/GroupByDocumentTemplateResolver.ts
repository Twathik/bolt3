import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDocumentTemplateArgs } from "./args/GroupByDocumentTemplateArgs";
import { DocumentTemplate } from "../../../models/DocumentTemplate";
import { DocumentTemplateGroupBy } from "../../outputs/DocumentTemplateGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentTemplate)
export class GroupByDocumentTemplateResolver {
  @TypeGraphQL.Query(_returns => [DocumentTemplateGroupBy], {
    nullable: false
  })
  async groupByDocumentTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDocumentTemplateArgs): Promise<DocumentTemplateGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentTemplate.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
