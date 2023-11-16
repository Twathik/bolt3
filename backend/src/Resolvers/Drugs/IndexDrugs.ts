import * as TypeGraphQL from 'type-graphql'
import { Context } from '../../context'
import { sleep } from '../../Utils/typesense'
import createTypesenseDocuments from '../../Utils/typesense/operations/createDocuments'
import { ClinicalEvent } from '../../@generated'
import AlgerianDrugsWithRx from '../../Utils/typesense/Drugs/AlgerianWithRx.json'
import { AlgerianDrugsWithRxInterface } from '../../Utils/typesense/Drugs/AlgerianDrugsWithRxInterface'
import DrugsSchema from '../../Utils/typesense/Drugs/DrugsSchema'
import { v4 as uuidV4 } from 'uuid'

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class IndexDrugs {
  @TypeGraphQL.Mutation((_returns) => Boolean, { nullable: true })
  async indexDrugs(@TypeGraphQL.Ctx() ctx: Context): Promise<Boolean | null> {
    try {
      await ctx.typesense.collections('drugs').delete()
    } catch (error) {
      console.log('new Drugs collection')
    }
    try {
      await ctx.typesense.collections().create(DrugsSchema)
    } catch (error) {
      console.warn({ error })
    }
    await sleep(10000)
    try {
      const documents = (
        AlgerianDrugsWithRx as AlgerianDrugsWithRxInterface[]
      ).map((drug) => ({
        ...drug,
        rx: JSON.stringify(drug.rx),
        id: uuidV4(),
        drugTemplate: `${drug.NOM_COMMERCIALE} ${drug.FORME} ${drug.DOSAGE}`,
      }))

      await createTypesenseDocuments({
        index: 'drugs',
        typesense: ctx.typesense,
        documents,
      })
      return true
    } catch (error) {
      console.log({ error: (error as any).importResults })
      return false
    }
  }
}
