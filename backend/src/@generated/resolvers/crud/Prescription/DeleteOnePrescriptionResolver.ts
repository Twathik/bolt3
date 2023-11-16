import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePrescriptionArgs } from "./args/DeleteOnePrescriptionArgs";
import { Prescription } from "../../../models/Prescription";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescription)
export class DeleteOnePrescriptionResolver {
  @TypeGraphQL.Mutation(_returns => Prescription, {
    nullable: true
  })
  async deleteOnePrescription(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePrescriptionArgs): Promise<Prescription | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescription.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
