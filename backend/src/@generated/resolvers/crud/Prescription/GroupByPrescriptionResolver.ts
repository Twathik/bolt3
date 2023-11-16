import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPrescriptionArgs } from "./args/GroupByPrescriptionArgs";
import { Prescription } from "../../../models/Prescription";
import { PrescriptionGroupBy } from "../../outputs/PrescriptionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescription)
export class GroupByPrescriptionResolver {
  @TypeGraphQL.Query(_returns => [PrescriptionGroupBy], {
    nullable: false
  })
  async groupByPrescription(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPrescriptionArgs): Promise<PrescriptionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescription.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
