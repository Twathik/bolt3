import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDocumentStoreOrThrowArgs } from "./args/FindFirstDocumentStoreOrThrowArgs";
import { DocumentStore } from "../../../models/DocumentStore";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentStore)
export class FindFirstDocumentStoreOrThrowResolver {
  @TypeGraphQL.Query(_returns => DocumentStore, {
    nullable: true
  })
  async findFirstDocumentStoreOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDocumentStoreOrThrowArgs): Promise<DocumentStore | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentStore.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
