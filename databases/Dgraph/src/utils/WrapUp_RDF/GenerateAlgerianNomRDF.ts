import fs from 'fs'
import {
  AlgerianDrugsWithPregnancyInterfaceWithId,
  AlgerianNomFormattedRDFinterface,
} from '../../interfaces/drugsInterfaces'
import _ from 'lodash'
import {
  transformObjectToRDF,
  generateRDFTemplate,
} from '../generateRDFTemplate'
import { createHash } from '../createHash'

export const GenerateAlgerianNomRDF = async () => {
  console.log(`
  ######################
  ## Formatting Algerian nomenclature
  ######################
  `)

  const AlgerianData = fs.readFileSync(
    './src/ReadyToUseDB/Drugs/DrugsWithRxAndId.json',
    'utf-8',
  )
  let template = ''
  const data = JSON.parse(
    AlgerianData.toString(),
  ) as AlgerianDrugsWithPregnancyInterfaceWithId[]

  let IdsWithInputsInputs: {
    input: AlgerianNomFormattedRDFinterface
    AlId: string
    drugCategories: string[]
  }[] = []

  let DrugCategories: string[] = []

  data.forEach((Drug) => {
    const AlId = `${Drug.id}`
    const input: AlgerianNomFormattedRDFinterface = {
      CODE_DCI: Drug.CODE_DCI,
      COND: Drug.COND,
      DATE_D_ENREGISTREMENT_FINAL: Drug.DATE_D_ENREGISTREMENT_FINAL,
      DATE_D_ENREGISTREMENT_INITIAL: Drug.DATE_D_ENREGISTREMENT_INITIAL,
      DCI: Drug.DCI,
      DOSAGE: Drug.DOSAGE,
      DUREE_DE_STABILITE: Drug.DUREE_DE_STABILITE,
      FORME: Drug.FORME,
      LABORATOIRES_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT:
        Drug.LABORATOIRES_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT,
      LISTE: Drug.LISTE,
      N_ENREGISTREMENT: Drug.N_ENREGISTREMENT,
      NOM_COMMERCIALE: Drug.NOM_COMMERCIALE,
      OBS: Drug.OBS,
      P1: Drug.P1,
      P2: Drug.P2,
      PAYS_DU_LABORATOIRE_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT:
        Drug.PAYS_DU_LABORATOIRE_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT,
      STATUT: Drug.STATUT,
      TYPE: Drug.TYPE,
      availableInAlgeria: Drug.availableInAlgeria,
    }
    IdsWithInputsInputs.push({
      AlId,
      input,
      drugCategories: Drug.DrugCategories,
    })
    DrugCategories.push(...Drug.DrugCategories)
  })

  template = template.concat(`

 ################
 # Algerian Drugs
 ################
 `)
  IdsWithInputsInputs.forEach((input) => {
    template = template.concat(
      transformObjectToRDF({
        object: input.input,
        type: 'AlgerianNomenclature',
        uid: input.AlId,
      }),
    )
  })

  let FormattedDrugCategories: { name: string }[] = _.uniq(DrugCategories).map(
    (e) => ({ name: e }),
  )

  template = template.concat(`

 ################
 # Algerian Drugs Categories
 ################
 `)
  FormattedDrugCategories.forEach((input) => {
    template = template.concat(
      transformObjectToRDF({
        object: input,
        type: 'AlgerianDrugsCategory',
        uid: createHash({ data: input.name, len: 8 }),
      }),
    )
  })

  template = template.concat(`

 ################
 # Algerian Drugs  with relations
 ################
 `)
  data.forEach((input) => {
    input.DrugCategories.forEach((cat) => {
      if (cat.length > 0) {
        template = template.concat(
          generateRDFTemplate({
            object: `_:AlgerianNomenclature${input.id}`,
            predicate: 'AlgerianNomenclature.category',
            value: `_:AlgerianDrugsCategory${createHash({
              data: cat,
              len: 8,
            })}`,
          }),
        )
        template = template.concat(
          generateRDFTemplate({
            object: `_:AlgerianDrugsCategory${createHash({
              data: cat,
              len: 8,
            })}`,
            predicate: 'AlgerianDrugsCategory.AlgerianDrugs',
            value: `_:AlgerianNomenclature${input.id}`,
          }),
        )
      }
    })
    input.PregnancyIndexLink.forEach((preg) => {
      if (preg.length > 0) {
        template = template.concat(
          generateRDFTemplate({
            object: `_:AlgerianNomenclature${input.id}`,
            predicate: 'AlgerianNomenclature.linkWithPregnancy',
            value: `_:DrugWithPregnancy${createHash({
              data: preg,
              len: 8,
            })}`,
          }),
        )
        template = template.concat(
          generateRDFTemplate({
            object: `_:DrugWithPregnancy${createHash({
              data: preg,
              len: 8,
            })}`,
            predicate: 'DrugWithPregnancy.AlgerianDrugs',
            value: `_:AlgerianNomenclature${input.id}`,
          }),
        )
      }
    })

    input.InteractionIndexLink.forEach((link) => {
      if (link.length > 0) {
        template = template.concat(
          generateRDFTemplate({
            object: `_:AlgerianNomenclature${input.id}`,
            predicate: 'AlgerianNomenclature.ANSMinteraction',
            value: `_:ANSMmolecule${createHash({
              data: link.toLowerCase(),
              len: 8,
            })}`,
          }),
        )
        template = template.concat(
          generateRDFTemplate({
            object: `_:ANSMmolecule${createHash({
              data: link.toLowerCase(),
              len: 8,
            })}`,
            predicate: 'ANSMmolecule.AlgerianDrugs',
            value: `_:AlgerianNomenclature${input.id}`,
          }),
        )
      }
    })

    input.rx?.forEach((rx) => {
      template = template.concat(
        generateRDFTemplate({
          object: `_:AlgerianNomenclature${input.id}`,
          predicate: 'AlgerianNomenclature.RxConcept',
          value: `_:RxConcept${rx.rxcui}`,
        }),
      )
      template = template.concat(
        generateRDFTemplate({
          object: `_:RxConcept${rx.rxcui}`,
          predicate: 'RxConcept.AlgerianDrugs',
          value: `_:AlgerianNomenclature${input.id}`,
        }),
      )
    })
  })

  /* template = template.concat(`

 ################
 # BFdrugs related drugs
 ################
 `)
  data.forEach((input) => {
    input.relatedDrugs?.forEach((drug) => {
      template = template.concat(
        generateRDFTemplate({
          object: `_:BFAndDrugs${createHash({ data: input.name, len: 8 })}`,
          predicate: 'BFAndDrugs.relatedDrugs',
          value: `_:BFAndDrugs${createHash({ data: drug, len: 8 })}`,
        }),
      )
    })
  })

  template = template.concat(`

 ################
 # BFdrugs BFDrugLevelAndEffect
 ################
 `)

  BFDrugLevelAndEffectInputs.forEach((input) => {
    template = template
      .concat(
        transformObjectToRDF({
          object: input.input,
          type: 'BFDrugLevelAndEffect',
          uid: input.input.id,
        }),
      )
      .concat(
        generateRDFTemplate({
          object: `_:BFAndDrugs${input.BFId}`,
          predicate: 'BFAndDrugs.DrugLevelAndEffect',
          value: `_:BFDrugLevelAndEffect${input.input.id}`,
        }),
      )
  })

  template = template.concat(`

 ################
 # BFdrugs references
 ################
 `)
  BFReferencesInput = uniqueArray(BFReferencesInput, ['input.articleTitle'])
  BFReferencesInput.forEach((input) => {
    template = template
      .concat(
        transformObjectToRDF({
          object: input.input,
          type: 'BFReferences',
          uid: input.input.id,
        }),
      )
      .concat(
        generateRDFTemplate({
          object: `_:BFAndDrugs${input.BFId}`,
          predicate: 'BFAndDrugs.references',
          value: `_:BFReferences${input.input.id}`,
        }),
      )
  })
  console.log(
    `
  #######################################
  Writing BFDrugs File in progress ...
  #######################################`,
  ) */

  fs.writeFileSync('./src/generatedRDF/AlgerianNom.rdf', template, 'utf-8')

  console.timeLog('processTimer')
}
