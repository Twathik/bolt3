import * as TypeGraphQL from 'type-graphql'
import { Context } from '../../context'
import clinicalIndex from './FilteredDedupedAlphabeticalIndexCIMsuisse.json'
import { ClinicalDiagnosticsInterface } from '../../Utils/typesense/ClinicalDiagnostics/ClinicalDiagnosticsInterface'
import clinicalDiagnosticSchema from '../../Utils/typesense/ClinicalDiagnostics/ClinicalDiagnosticSchema'
import { sleep } from '../../Utils/typesense'
import createTypesenseDocuments from '../../Utils/typesense/operations/createDocuments'
import { ClinicalEvent } from '../../@generated'

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class IndexClinicalDiagnostics {
  @TypeGraphQL.Mutation((_returns) => Boolean, { nullable: true })
  async indexClinicalDiagnostics(
    @TypeGraphQL.Ctx() ctx: Context,
  ): Promise<Boolean | null> {
    try {
      await ctx.typesense.collections('clinical-diagnostics').delete()
    } catch (error) {
      console.log('new clinical diagnostics collection')
    }
    try {
      await ctx.typesense.collections().create(clinicalDiagnosticSchema)
    } catch (error) {
      console.warn({ error })
    }
    await sleep(10000)
    try {
      await createTypesenseDocuments({
        index: 'clinical-diagnostics',
        typesense: ctx.typesense,
        documents: clinicalIndex as ClinicalDiagnosticsInterface[],
      })
      return true
    } catch (error) {
      console.log({ error })
      console.log({ error: (error as any).importResults })
      return false
    }
  }
}
