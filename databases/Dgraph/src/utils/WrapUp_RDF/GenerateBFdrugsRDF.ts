import fs from 'fs'
import {
  BFDrugFormattedInterface,
  BFDrugFormattedRDFinterface,
  BFDrugLevelAndEffectInterface,
  BFReferencesInterface,
} from '../../interfaces/drugsInterfaces'
import _ from 'lodash'
import {
  generateRDFTemplate,
  transformObjectToRDF,
} from '../generateRDFTemplate'
import { createHash } from '../createHash'
import { uniqueArray } from '../arrayUnique'

export const GenerateBFdrugsRDF = async () => {
  console.log(`
  ######################
  ## Formatting BF files
  ######################
  `)

  const BFdata = fs.readFileSync(
    './src/ReadyToUseDB/Drugs/BFDrugsInteractions.json',
    'utf-8',
  )
  let template = ''
  const data = JSON.parse(BFdata.toString()) as BFDrugFormattedInterface[]
  let BFInputs: BFDrugFormattedRDFinterface[] = []
  let BFDrugLevelAndEffectInputs: {
    input: BFDrugLevelAndEffectInterface
    BFId: string
  }[] = []
  let BFReferencesInput: { BFId: string; input: BFReferencesInterface }[] = []

  data.forEach((BfDrug) => {
    const BFId = createHash({ data: BfDrug.name, len: 8 })
    const BFInput: BFDrugFormattedRDFinterface = {
      BFId,
      name: BfDrug.name,
      LastModificationDate: BfDrug.LastModificationDate
        ? new Date(BfDrug.LastModificationDate).toISOString()
        : null,
      LastModificationType: BfDrug.LastModificationType ?? '',
    }
    BfDrug.DrugLevelAndEffect?.forEach((e) => {
      BFDrugLevelAndEffectInputs.push({
        BFId,
        input: {
          id: createHash({ data: e.title.join(' '), len: 8 }),
          title: e.title.join(' '),
          content: e.content
            .join('. ')
            .replaceAll('"', '')
            .replaceAll('\n', ''),
        },
      })
    })

    BfDrug.references?.content.forEach((e) => {
      BFReferencesInput.push({
        BFId,
        input: {
          id: createHash({ data: e.articleTitle, len: 8 }),
          articleTitle: e.articleTitle.replaceAll('"', '').replaceAll('\n', ''),
          pubId:
            e.pubId
              ?.map((d) => `${d.id}:${d.type}`)
              .join('-')
              .replaceAll('"', '')
              .replaceAll('\n', '') ?? '',
        },
      })
    })
    BFInputs.push(BFInput)
  })

  template = template.concat(`

 ################
 # BFdrugs
 ################
 `)
  BFInputs.forEach((input) => {
    template = template.concat(
      transformObjectToRDF({
        object: input,
        type: 'BFAndDrugs',
        uid: input.BFId,
      }),
    )
  })

  template = template.concat(`

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
  )

  fs.writeFileSync('./src/generatedRDF/BFDrugs.rdf', template, 'utf-8')

  console.timeLog('processTimer')
}
