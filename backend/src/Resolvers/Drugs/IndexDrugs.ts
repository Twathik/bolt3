import * as TypeGraphQL from 'type-graphql'
import { Context } from '../../context'
import { sleep } from '../../Utils/typesense'
import createTypesenseDocuments from '../../Utils/typesense/operations/createDocuments'
import { ClinicalEvent } from '../../@generated'
import formattedDrugs from '../../Utils/typesense/Drugs/DrugList_final_sorted.json'
import { RawDruGInterface } from '../../Utils/typesense/Drugs/RawDrugsInterface'
import DrugsSchema from '../../Utils/typesense/Drugs/DrugsSchema'
import { v4 as uuidV4 } from 'uuid'
import { DrugsInterface } from '../../Utils/typesense/Drugs/DrugsInterface'

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
      const documents: DrugsInterface[] = (
        formattedDrugs as RawDruGInterface[]
      ).map((drug) => {
        const {
          fullName,
          comercialisé,
          img,
          link,
          miniatureImageLink,
          noticeLink,
          prodLocal,
          type,
          rx,
          infos: {
            NumEnregistrement,
            classPharmaco,
            classTherapeutique,
            codeDCI,
            dosage,
            forme,
            labo,
            liste,
            pays,
            remboursable,
            nomCommercial,
            conditionnement,
          },
          vignette: { DCI, PPA, TR, background },
        } = drug

        return {
          id: uuidV4(),
          fullName,
          drugTemplate: `${nomCommercial} ${forme} ${dosage}`,
          rx: JSON.stringify(rx),
          type,
          labo,
          nomCommercial,
          DCI,
          PPA,
          TR,
          vignetteColor: background,
          classPharmaco,
          classTherapeutique,
          codeDCI,
          forme,
          dosage,
          conditionnement,
          liste,
          pays,
          remboursable: remboursable === 'oui',
          NumEnregistrement,
          img,
          miniatureImageLink,
          link,
          noticeLink,
          prodLocal: prodLocal === 'Oui',
          comercialisé: comercialisé === 'Oui',
        }
      })

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
