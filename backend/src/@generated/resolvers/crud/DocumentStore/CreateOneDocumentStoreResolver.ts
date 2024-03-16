import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneDocumentStoreArgs } from "./args/CreateOneDocumentStoreArgs";
import { DocumentStore } from "../../../models/DocumentStore";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentStore)
export class CreateOneDocumentStoreResolver {
  @TypeGraphQL.Mutation(_returns => DocumentStore, {
    nullable: false
  })
  async createOneDocumentStore(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneDocumentStoreArgs): Promise<DocumentStore> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentStore.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
