import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPatientScannedDocumentArgs } from "./args/GroupByPatientScannedDocumentArgs";
import { PatientScannedDocument } from "../../../models/PatientScannedDocument";
import { PatientScannedDocumentGroupBy } from "../../outputs/PatientScannedDocumentGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PatientScannedDocument)
export class GroupByPatientScannedDocumentResolver {
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
}
