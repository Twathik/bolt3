import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePatientScannedDocumentArgs } from "./args/AggregatePatientScannedDocumentArgs";
import { CreateManyPatientScannedDocumentArgs } from "./args/CreateManyPatientScannedDocumentArgs";
import { CreateOnePatientScannedDocumentArgs } from "./args/CreateOnePatientScannedDocumentArgs";
import { DeleteManyPatientScannedDocumentArgs } from "./args/DeleteManyPatientScannedDocumentArgs";
import { DeleteOnePatientScannedDocumentArgs } from "./args/DeleteOnePatientScannedDocumentArgs";
import { FindFirstPatientScannedDocumentArgs } from "./args/FindFirstPatientScannedDocumentArgs";
import { FindFirstPatientScannedDocumentOrThrowArgs } from "./args/FindFirstPatientScannedDocumentOrThrowArgs";
import { FindManyPatientScannedDocumentArgs } from "./args/FindManyPatientScannedDocumentArgs";
import { FindUniquePatientScannedDocumentArgs } from "./args/FindUniquePatientScannedDocumentArgs";
import { FindUniquePatientScannedDocumentOrThrowArgs } from "./args/FindUniquePatientScannedDocumentOrThrowArgs";
import { GroupByPatientScannedDocumentArgs } from "./args/GroupByPatientScannedDocumentArgs";
import { UpdateManyPatientScannedDocumentArgs } from "./args/UpdateManyPatientScannedDocumentArgs";
import { UpdateOnePatientScannedDocumentArgs } from "./args/UpdateOnePatientScannedDocumentArgs";
import { UpsertOnePatientScannedDocumentArgs } from "./args/UpsertOnePatientScannedDocumentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PatientScannedDocument } from "../../../models/PatientScannedDocument";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePatientScannedDocument } from "../../outputs/AggregatePatientScannedDocument";
import { PatientScannedDocumentGroupBy } from "../../outputs/PatientScannedDocumentGroupBy";

@TypeGraphQL.Resolver(_of => PatientScannedDocument)
export class PatientScannedDocumentCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePatientScannedDocument, {
    nullable: false
  })
  async aggregatePatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePatientScannedDocumentArgs): Promise<AggregatePatientScannedDocument> {
    return getPrismaFromContext(ctx).patientScannedDocument.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPatientScannedDocumentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PatientScannedDocument, {
    nullable: false
  })
  async createOnePatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePatientScannedDocumentArgs): Promise<PatientScannedDocument> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPatientScannedDocumentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PatientScannedDocument, {
    nullable: true
  })
  async deleteOnePatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePatientScannedDocumentArgs): Promise<PatientScannedDocument | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PatientScannedDocument, {
    nullable: true
  })
  async findFirstPatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPatientScannedDocumentArgs): Promise<PatientScannedDocument | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PatientScannedDocument, {
    nullable: true
  })
  async findFirstPatientScannedDocumentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPatientScannedDocumentOrThrowArgs): Promise<PatientScannedDocument | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PatientScannedDocument], {
    nullable: false
  })
  async patientScannedDocuments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPatientScannedDocumentArgs): Promise<PatientScannedDocument[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PatientScannedDocument, {
    nullable: true
  })
  async patientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePatientScannedDocumentArgs): Promise<PatientScannedDocument | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PatientScannedDocument, {
    nullable: true
  })
  async getPatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePatientScannedDocumentOrThrowArgs): Promise<PatientScannedDocument | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PatientScannedDocumentGroupBy], {
    nullable: false
  })
  async groupByPatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPatientScannedDocumentArgs): Promise<PatientScannedDocumentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPatientScannedDocumentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PatientScannedDocument, {
    nullable: true
  })
  async updateOnePatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePatientScannedDocumentArgs): Promise<PatientScannedDocument | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PatientScannedDocument, {
    nullable: false
  })
  async upsertOnePatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePatientScannedDocumentArgs): Promise<PatientScannedDocument> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
