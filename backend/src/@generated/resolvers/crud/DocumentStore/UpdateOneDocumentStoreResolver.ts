import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneDocumentStoreArgs } from "./args/UpdateOneDocumentStoreArgs";
import { DocumentStore } from "../../../models/DocumentStore";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentStore)
export class UpdateOneDocumentStoreResolver {
  @TypeGraphQL.Mutation(_returns => DocumentStore, {
    nullable: true
  })
  async updateOneDocumentStore(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneDocumentStoreArgs): Promise<DocumentStore | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentStore.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
