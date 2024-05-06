import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Patient } from "../../../models/Patient";
import { PatientScannedDocument } from "../../../models/PatientScannedDocument";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PatientScannedDocument)
export class PatientScannedDocumentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Patient, {
    nullable: false
  })
  async patient(@TypeGraphQL.Root() patientScannedDocument: PatientScannedDocument, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patient> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patientScannedDocument.findUniqueOrThrow({
      where: {
        id: patientScannedDocument.id,
      },
    }).patient({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
