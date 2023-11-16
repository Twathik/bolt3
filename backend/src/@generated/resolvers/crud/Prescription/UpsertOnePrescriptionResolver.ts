import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePrescriptionArgs } from "./args/UpsertOnePrescriptionArgs";
import { Prescription } from "../../../models/Prescription";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescription)
export class UpsertOnePrescriptionResolver {
  @TypeGraphQL.Mutation(_returns => Prescription, {
    nullable: false
  })
  async upsertOnePrescription(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePrescriptionArgs): Promise<Prescription> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescription.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
