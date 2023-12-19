import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { Patient } from "../../../models/Patient";
import { Prescription } from "../../../models/Prescription";
import { User } from "../../../models/User";
import { WorkingList } from "../../../models/WorkingList";
import { ClinicalEventPrescriptionArgs } from "./args/ClinicalEventPrescriptionArgs";
import { ClinicalEventWorkingListArgs } from "./args/ClinicalEventWorkingListArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ClinicalEvent)
export class ClinicalEventRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() clinicalEvent: ClinicalEvent, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.findUniqueOrThrow({
      where: {
        id: clinicalEvent.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patient, {
    nullable: false
  })
  async patient(@TypeGraphQL.Root() clinicalEvent: ClinicalEvent, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patient> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.findUniqueOrThrow({
      where: {
        id: clinicalEvent.id,
      },
    }).patient({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Prescription, {
    nullable: true
  })
  async Prescription(@TypeGraphQL.Root() clinicalEvent: ClinicalEvent, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ClinicalEventPrescriptionArgs): Promise<Prescription | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.findUniqueOrThrow({
      where: {
        id: clinicalEvent.id,
      },
    }).Prescription({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [WorkingList], {
    nullable: false
  })
  async WorkingList(@TypeGraphQL.Root() clinicalEvent: ClinicalEvent, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ClinicalEventWorkingListArgs): Promise<WorkingList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.findUniqueOrThrow({
      where: {
        id: clinicalEvent.id,
      },
    }).WorkingList({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
