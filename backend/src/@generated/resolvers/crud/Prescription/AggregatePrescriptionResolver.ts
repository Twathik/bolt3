import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePrescriptionArgs } from "./args/AggregatePrescriptionArgs";
import { Prescription } from "../../../models/Prescription";
import { AggregatePrescription } from "../../outputs/AggregatePrescription";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescription)
export class AggregatePrescriptionResolver {
  @TypeGraphQL.Query(_returns => AggregatePrescription, {
    nullable: false
  })
  async aggregatePrescription(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePrescriptionArgs): Promise<AggregatePrescription> {
    return getPrismaFromContext(ctx).prescription.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
