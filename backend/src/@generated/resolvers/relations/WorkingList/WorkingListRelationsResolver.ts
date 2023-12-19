import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { Modality } from "../../../models/Modality";
import { Patient } from "../../../models/Patient";
import { User } from "../../../models/User";
import { WorkingList } from "../../../models/WorkingList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WorkingList)
export class WorkingListRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Patient, {
    nullable: false
  })
  async patient(@TypeGraphQL.Root() workingList: WorkingList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patient> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workingList.findUniqueOrThrow({
      where: {
        id: workingList.id,
      },
    }).patient({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Modality, {
    nullable: false
  })
  async modality(@TypeGraphQL.Root() workingList: WorkingList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Modality> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workingList.findUniqueOrThrow({
      where: {
        id: workingList.id,
      },
    }).modality({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() workingList: WorkingList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workingList.findUniqueOrThrow({
      where: {
        id: workingList.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ClinicalEvent, {
    nullable: false
  })
  async clinicalEvent(@TypeGraphQL.Root() workingList: WorkingList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ClinicalEvent> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).workingList.findUniqueOrThrow({
      where: {
        id: workingList.id,
      },
    }).clinicalEvent({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
