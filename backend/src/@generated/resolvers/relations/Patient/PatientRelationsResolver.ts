import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ClinicalEvent } from "../../../models/ClinicalEvent";
import { ConsultationList } from "../../../models/ConsultationList";
import { DocumentStore } from "../../../models/DocumentStore";
import { Patient } from "../../../models/Patient";
import { PatientScannedDocument } from "../../../models/PatientScannedDocument";
import { WorkingList } from "../../../models/WorkingList";
import { PatientClinicalEventArgs } from "./args/PatientClinicalEventArgs";
import { PatientConsultationListArgs } from "./args/PatientConsultationListArgs";
import { PatientDocumentStoreArgs } from "./args/PatientDocumentStoreArgs";
import { PatientPatientScanedDocumentArgs } from "./args/PatientPatientScanedDocumentArgs";
import { PatientWorkingListArgs } from "./args/PatientWorkingListArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class PatientRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ConsultationList], {
    nullable: false
  })
  async ConsultationList(@TypeGraphQL.Root() patient: Patient, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientConsultationListArgs): Promise<ConsultationList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patient.findUniqueOrThrow({
      where: {
        id: patient.id,
      },
    }).ConsultationList({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ClinicalEvent], {
    nullable: false
  })
  async ClinicalEvent(@TypeGraphQL.Root() patient: Patient, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientClinicalEventArgs): Promise<ClinicalEvent[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patient.findUniqueOrThrow({
      where: {
        id: patient.id,
      },
    }).ClinicalEvent({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [WorkingList], {
    nullable: false
  })
  async WorkingList(@TypeGraphQL.Root() patient: Patient, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientWorkingListArgs): Promise<WorkingList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patient.findUniqueOrThrow({
      where: {
        id: patient.id,
      },
    }).WorkingList({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [DocumentStore], {
    nullable: false
  })
  async DocumentStore(@TypeGraphQL.Root() patient: Patient, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientDocumentStoreArgs): Promise<DocumentStore[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patient.findUniqueOrThrow({
      where: {
        id: patient.id,
      },
    }).DocumentStore({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PatientScannedDocument], {
    nullable: false
  })
  async PatientScanedDocument(@TypeGraphQL.Root() patient: Patient, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientPatientScanedDocumentArgs): Promise<PatientScannedDocument[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patient.findUniqueOrThrow({
      where: {
        id: patient.id,
      },
    }).PatientScanedDocument({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
