import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateClinicalEventArgs } from "./args/AggregateClinicalEventArgs";
import { CreateManyClinicalEventArgs } from "./args/CreateManyClinicalEventArgs";
import { CreateOneClinicalEventArgs } from "./args/CreateOneClinicalEventArgs";
import { DeleteManyClinicalEventArgs } from "./args/DeleteManyClinicalEventArgs";
import { DeleteOneClinicalEventArgs } from "./args/DeleteOneClinicalEventArgs";
import { FindFirstClinicalEventArgs } from "./args/FindFirstClinicalEventArgs";
import { FindFirstClinicalEventOrThrowArgs } from "./args/FindFirstClinicalEventOrThrowArgs";
import { FindManyClinicalEventArgs } from "./args/FindManyClinicalEventArgs";
import { FindUniqueClinicalEventArgs } from "./args/FindUniqueClinicalEventArgs";
import { FindUniqueClinicalEventOrThrowArgs } from "./args/FindUniqueClinicalEventOrThrowArgs";
import { GroupByClinicalEventArgs } from "./args/GroupByClinicalEventArgs";
import { UpdateManyClinicalEventArgs } from "./args/UpdateManyClinicalEventArgs";
import { UpdateOneClinicalEventArgs } from "./args/UpdateOneClinicalEventArgs";
import { UpsertOneClinicalEventArgs } from "./args/UpsertOneClinicalEventArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateClinicalEvent } from "../../outputs/AggregateClinicalEvent";
import { ClinicalEventGroupBy } from "../../outputs/ClinicalEventGroupBy";

@TypeGraphQL.Resolver(_of => ClinicalEvent)
export class ClinicalEventCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateClinicalEvent, {
    nullable: false
  })
  async aggregateClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateClinicalEventArgs): Promise<AggregateClinicalEvent> {
    return getPrismaFromContext(ctx).clinicalEvent.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyClinicalEventArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ClinicalEvent, {
    nullable: false
  })
  async createOneClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneClinicalEventArgs): Promise<ClinicalEvent> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyClinicalEventArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ClinicalEvent, {
    nullable: true
  })
  async deleteOneClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneClinicalEventArgs): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ClinicalEvent, {
    nullable: true
  })
  async findFirstClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstClinicalEventArgs): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ClinicalEvent, {
    nullable: true
  })
  async findFirstClinicalEventOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstClinicalEventOrThrowArgs): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ClinicalEvent], {
    nullable: false
  })
  async clinicalEvents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyClinicalEventArgs): Promise<ClinicalEvent[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ClinicalEvent, {
    nullable: true
  })
  async clinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueClinicalEventArgs): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ClinicalEvent, {
    nullable: true
  })
  async getClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueClinicalEventOrThrowArgs): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ClinicalEventGroupBy], {
    nullable: false
  })
  async groupByClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByClinicalEventArgs): Promise<ClinicalEventGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyClinicalEventArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ClinicalEvent, {
    nullable: true
  })
  async updateOneClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneClinicalEventArgs): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ClinicalEvent, {
    nullable: false
  })
  async upsertOneClinicalEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneClinicalEventArgs): Promise<ClinicalEvent> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).clinicalEvent.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
