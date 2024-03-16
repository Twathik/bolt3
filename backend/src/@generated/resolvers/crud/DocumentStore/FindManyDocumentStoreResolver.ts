import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyDocumentStoreArgs } from "./args/FindManyDocumentStoreArgs";
import { DocumentStore } from "../../../models/DocumentStore";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentStore)
export class FindManyDocumentStoreResolver {
  @TypeGraphQL.Query(_returns => [DocumentStore], {
    nullable: false
  })
  async documentStores(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyDocumentStoreArgs): Promise<DocumentStore[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentStore.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
