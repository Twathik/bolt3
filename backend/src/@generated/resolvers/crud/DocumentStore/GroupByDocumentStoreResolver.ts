import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDocumentStoreArgs } from "./args/GroupByDocumentStoreArgs";
import { DocumentStore } from "../../../models/DocumentStore";
import { DocumentStoreGroupBy } from "../../outputs/DocumentStoreGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentStore)
export class GroupByDocumentStoreResolver {
  @TypeGraphQL.Query(_returns => [DocumentStoreGroupBy], {
    nullable: false
  })
  async groupByDocumentStore(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDocumentStoreArgs): Promise<DocumentStoreGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentStore.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
