import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DocumentStore } from "../../../models/DocumentStore";
import { Patient } from "../../../models/Patient";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentStore)
export class DocumentStoreRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Patient, {
    nullable: false
  })
  async patient(@TypeGraphQL.Root() documentStore: DocumentStore, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patient> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentStore.findUniqueOrThrow({
      where: {
        id: documentStore.id,
      },
    }).patient({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
