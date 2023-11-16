import fs from 'fs'
import {
  AddPregnancyInteractionsInput,
  PregnancyInteractionsCategories,
} from '../../graphql.sdk'
import {
  DrugAnPregnancyCategory,
  DrugsAndPregnancyFormattedInterface,
} from '../../interfaces/drugsInterfaces'
import { graphqlSdk } from '../graphQlRequestClient'
import cliProgress from 'cli-progress'
import _ from 'lodash'

const generateCategories = ({
  category,
}: {
  category: DrugAnPregnancyCategory
}): PregnancyInteractionsCategories => {
  switch (category) {
    case 'A':
      return PregnancyInteractionsCategories.A
    case 'B1':
      return PregnancyInteractionsCategories.B1
    case 'B2':
      return PregnancyInteractionsCategories.B2
    case 'B3':
      return PregnancyInteractionsCategories.B3
    case 'C':
      return PregnancyInteractionsCategories.C
    case 'D':
      return PregnancyInteractionsCategories.D
    case 'X':
      return PregnancyInteractionsCategories.X

    default:
      console.log({ category })
      throw Error('not defined category')
  }
}

export const UploadPregnancyAndDrugsInteractions = async () => {
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )

  const Rawdata = fs.readFileSync(
    './src/ReadyToUseDB/Drugs/drugsDuringPregnancy.json',
    'utf-8',
  )

  const data = JSON.parse(
    Rawdata.toString(),
  ) as DrugsAndPregnancyFormattedInterface[]
  let AllInputs: AddPregnancyInteractionsInput[] = []

  for (const raw of data) {
    try {
      raw.Drugs.forEach((drug) => {
        const LocalInput: AddPregnancyInteractionsInput = {
          name: drug.name,
          Category: generateCategories({ category: raw.Category }),
          Observation: raw.Observation,
        }
        AllInputs.push(LocalInput)
      })
    } catch (error) {
      console.log({ error })
    }
  }

  AllInputs = _.uniqBy(AllInputs, 'name')

  console.log(`
  #######################################
  Sending Pregnancy interactions in progress ...
  #######################################
  `)
  progressBar.start(AllInputs.length, 0)

  try {
    for (const input of AllInputs) {
      await graphqlSdk.addPregnancyInteractions({ input, upsert: true })
      progressBar.increment()
    }
  } catch (error) {
    progressBar.stop()
    console.dir({ BFerror: error }, { depth: 10 })
  }
  progressBar.stop()

  console.log(`
  #######################################
  Sending Pregnancy interactions done!
  #######################################
  `)
  console.timeLog('processTimer')
}
