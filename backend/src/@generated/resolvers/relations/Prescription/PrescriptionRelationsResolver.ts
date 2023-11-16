import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { Prescription } from "../../../models/Prescription";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Prescription)
export class PrescriptionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ClinicalEvent, {
    nullable: false
  })
  async clinicalEvent(@TypeGraphQL.Root() prescription: Prescription, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ClinicalEvent> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).prescription.findUniqueOrThrow({
      where: {
        id: prescription.id,
      },
    }).clinicalEvent({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
