import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDocumentStoreOrThrowArgs } from "./args/FindUniqueDocumentStoreOrThrowArgs";
import { DocumentStore } from "../../../models/DocumentStore";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentStore)
export class FindUniqueDocumentStoreOrThrowResolver {
  @TypeGraphQL.Query(_returns => DocumentStore, {
    nullable: true
  })
  async getDocumentStore(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDocumentStoreOrThrowArgs): Promise<DocumentStore | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentStore.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
