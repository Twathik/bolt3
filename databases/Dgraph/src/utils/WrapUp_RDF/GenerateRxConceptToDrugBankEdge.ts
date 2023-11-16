import fs from 'fs'
import {
  RxConceptWithDrugBank,
  RxDrugsInteractions,
} from '../../interfaces/rxDrugsInterfaces'
import cliProgress from 'cli-progress'
import _ from 'lodash'
import { transformObjectToRDF } from '../generateRDFTemplate'

export const GenerateRxConceptToDrugBankEdge = () => {
  let template: string = ''
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )
  let addRxConceptDrugBankInputs: RxConceptWithDrugBank[] = []

  const interactionDir = './src/ReadyToUseDB/RXnavDrugs/Interactions/'
  const interactionDataDir = fs.readdirSync(interactionDir, 'utf-8')
  progressBar.start(interactionDataDir.length, 0)
  interactionDataDir.forEach((file) => {
    const interactionDataRaw = fs.readFileSync(interactionDir.concat(file))
    const interaction = JSON.parse(
      interactionDataRaw.toString(),
    ) as RxDrugsInteractions

    interaction.interactionTypeGroup?.forEach((interactionGroup) => {
      if (interactionGroup.sourceName === 'DrugBank') {
        interactionGroup.interactionType.forEach((interactionType) => {
          interactionType.interactionPair.forEach((interactionPair) => {
            interactionPair.interactionConcept.forEach((interactionConcept) => {
              addRxConceptDrugBankInputs.push({
                rxcui: interactionConcept.minConceptItem.rxcui,
                drugBank: {
                  DrugBankId: interactionConcept.sourceConceptItem.id,
                  DrugBankName: interactionConcept.sourceConceptItem.name,
                  DrugBankUrl: interactionConcept.sourceConceptItem.url,
                },
              })
            })
          })
        })
      }
    })

    progressBar.increment()
  })

  progressBar.stop()

  console.log(
    `
  #######################################
  Final formatting in progress ...
  #######################################`,
  )
  template = template.concat(`

 ################
 # RXNav concepts To DrugBank links
 ################
 `)

  addRxConceptDrugBankInputs = _.uniqBy(addRxConceptDrugBankInputs, 'rxcui')

  addRxConceptDrugBankInputs.forEach((concept) => {
    template = template.concat(
      transformObjectToRDF({
        object: concept.drugBank,
        type: 'RxConcept',
        uid: concept.rxcui,
        generateType: false,
      }),
    )
  })

  console.log(
    `
  #######################################
  Writing File in progress ...
  #######################################`,
  )

  fs.writeFileSync(
    './src/generatedRDF/GenerateRxConceptDrugBank.rdf',
    template,
    'utf-8',
  )

  console.timeLog('processTimer')
}
