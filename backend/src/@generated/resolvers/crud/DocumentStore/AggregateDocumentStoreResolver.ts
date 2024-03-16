import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDocumentStoreArgs } from "./args/AggregateDocumentStoreArgs";
import { DocumentStore } from "../../../models/DocumentStore";
import { AggregateDocumentStore } from "../../outputs/AggregateDocumentStore";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentStore)
export class AggregateDocumentStoreResolver {
  @TypeGraphQL.Query(_returns => AggregateDocumentStore, {
    nullable: false
  })
  async aggregateDocumentStore(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDocumentStoreArgs): Promise<AggregateDocumentStore> {
    return getPrismaFromContext(ctx).documentStore.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
