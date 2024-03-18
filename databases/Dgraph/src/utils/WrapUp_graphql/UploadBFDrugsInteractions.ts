import fs from 'fs'
import { AddBfDrugsInteractionsInput } from '../../graphql.sdk'
import { BFDrugFormattedInterface } from '../../interfaces/drugsInterfaces'
import { graphqlSdk } from '../graphQlRequestClient'
import cliProgress from 'cli-progress'
import _ from 'lodash'

export const UploadBFDrugsInteractions = async () => {
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )

  const BFdata = fs.readFileSync(
    './src/ReadyToUseDB/Drugs/BFDrugsInteractions.json',
    'utf-8',
  )

  const data = JSON.parse(BFdata.toString()) as BFDrugFormattedInterface[]
  const BFInputs: AddBfDrugsInteractionsInput[] = []

  for (const BfDrug of data) {
    const relatedDrugs: AddBfDrugsInteractionsInput[] = data
      .filter((e) => BfDrug.relatedDrugs?.includes(e.name))
      .map((d) => ({ name: d.name }))
    const BFInput: AddBfDrugsInteractionsInput = {
      name: BfDrug.name,
      keywords: BfDrug.keywords?.filter((e) => !_.isObject(e)),
      LastModificationDate: BfDrug.LastModificationDate,
      LastModificationType: BfDrug.LastModificationType,
      references: JSON.stringify(BfDrug.references),
      DrugLevelAndEffect: JSON.stringify(BfDrug.references),
      relatedDrugs,
    }
    BFInputs.push(BFInput)
  }

  console.log(`
  #######################################
  Sending BF drugs interactions in progress ...
  #######################################
  `)
  progressBar.start(BFInputs.length, 0)

  try {
    for (const input of BFInputs) {
      await graphqlSdk.addBFDrugsInteractions({ input, upsert: true })
      progressBar.increment()
    }
  } catch (error) {
    progressBar.stop()
    console.dir({ BFerror: error }, { depth: 10 })
  }
  progressBar.stop()

  console.log(`
  #######################################
  Sending BF drugs done!
  #######################################
  `)
  console.timeLog('processTimer')
}
