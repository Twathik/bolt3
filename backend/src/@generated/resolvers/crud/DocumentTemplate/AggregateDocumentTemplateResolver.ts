import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDocumentTemplateArgs } from "./args/AggregateDocumentTemplateArgs";
import { DocumentTemplate } from "../../../models/DocumentTemplate";
import { AggregateDocumentTemplate } from "../../outputs/AggregateDocumentTemplate";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentTemplate)
export class AggregateDocumentTemplateResolver {
  @TypeGraphQL.Query(_returns => AggregateDocumentTemplate, {
    nullable: false
  })
  async aggregateDocumentTemplate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDocumentTemplateArgs): Promise<AggregateDocumentTemplate> {
    return getPrismaFromContext(ctx).documentTemplate.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
