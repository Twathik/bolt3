import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePatientScannedDocumentArgs } from "./args/FindUniquePatientScannedDocumentArgs";
import { PatientScannedDocument } from "../../../models/PatientScannedDocument";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PatientScannedDocument)
export class FindUniquePatientScannedDocumentResolver {
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
}
