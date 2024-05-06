import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePatientScannedDocumentArgs } from "./args/DeleteOnePatientScannedDocumentArgs";
import { PatientScannedDocument } from "../../../models/PatientScannedDocument";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PatientScannedDocument)
export class DeleteOnePatientScannedDocumentResolver {
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
}
