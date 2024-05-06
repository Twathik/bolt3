import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import {
  DeleteOnePatientScannedDocumentArgs,
  PatientScannedDocument,
} from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'

@TypeGraphQL.Resolver((_of) => PatientScannedDocument)
export class DeleteOnePatientScanedDocumentResolver {
  @TypeGraphQL.Mutation((_returns) => PatientScannedDocument, {
    nullable: true,
  })
  async deleteOnePatientScannedDocument(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOnePatientScannedDocumentArgs,
  ): Promise<PatientScannedDocument | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).patientScannedDocument.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
