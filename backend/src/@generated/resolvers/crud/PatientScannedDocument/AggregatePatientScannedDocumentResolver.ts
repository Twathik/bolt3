import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePatientScannedDocumentArgs } from "./args/AggregatePatientScannedDocumentArgs";
import { PatientScannedDocument } from "../../../models/PatientScannedDocument";
import { AggregatePatientScannedDocument } from "../../outputs/AggregatePatientScannedDocument";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PatientScannedDocument)
export class AggregatePatientScannedDocumentResolver {
  @TypeGraphQL.Query(_returns => AggregatePatientScannedDocument, {
    nullable: false
  })
  async aggregatePatientScannedDocument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePatientScannedDocumentArgs): Promise<AggregatePatientScannedDocument> {
    return getPrismaFromContext(ctx).patientScannedDocument.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
