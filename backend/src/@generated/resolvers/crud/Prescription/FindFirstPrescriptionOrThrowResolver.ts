import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPrescriptionOrThrowArgs } from "./args/FindFirstPrescriptionOrThrowArgs";
import { Prescription } from "../../../models/Prescription";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescription)
export class FindFirstPrescriptionOrThrowResolver {
  @TypeGraphQL.Query(_returns => Prescription, {
    nullable: true
  })
  async findFirstPrescriptionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPrescriptionOrThrowArgs): Promise<Prescription | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescription.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
