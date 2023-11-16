import fs from 'fs'
import {
  DrugsAndPregnancyFormattedInterface,
  DrugWithPregnancyInterface,
} from '../../interfaces/drugsInterfaces'
import _ from 'lodash'
import { createHash } from '../createHash'
import { transformObjectToRDF } from '../generateRDFTemplate'

export const GenerateDrugWithPregnancyRDF = () => {
  let template: string = ''
  const Rawdata = fs.readFileSync(
    './src/ReadyToUseDB/Drugs/drugsDuringPregnancy.json',
    'utf-8',
  )

  const data = JSON.parse(
    Rawdata.toString(),
  ) as DrugsAndPregnancyFormattedInterface[]

  let DrugWithPregnancyInputs: DrugWithPregnancyInterface[] = []

  for (const raw of data) {
    try {
      raw.Drugs.forEach((drug) => {
        DrugWithPregnancyInputs.push({
          id: createHash({ data: drug.name, len: 8 }),
          name: drug.name
            .replaceAll('"', '')
            .replaceAll('\n', '')
            .replaceAll('\\', '--'),
          category: raw.Category,
          observation: raw.Observation.replaceAll('"', '')
            .replaceAll('\n', '')
            .replaceAll('\\', '--'),
        })
      })
    } catch (error) {
      console.log({ error })
    }
  }

  DrugWithPregnancyInputs = _.uniqBy(DrugWithPregnancyInputs, 'name')

  console.log(`
  #######################################
  Formatting Pregnancy interactions in progress ...
  #######################################
  `)

  template = template.concat(`

 ################
 # BFdrugs
 ################
 `)
  DrugWithPregnancyInputs.forEach((input) => {
    template = template.concat(
      transformObjectToRDF({
        object: input,
        type: 'DrugWithPregnancy',
        uid: input.id,
      }),
    )
  })

  console.log(
    `
  #######################################
  Writing PregnancyWithDrugs File in progress ...
  #######################################`,
  )

  fs.writeFileSync(
    './src/generatedRDF/PregnancyWithDrugs.rdf',
    template,
    'utf-8',
  )

  console.timeLog('processTimer')
}
