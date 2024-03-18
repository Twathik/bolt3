import fs from 'fs'
import { G6PDinteractionsInterface } from '../../interfaces/drugsInterfaces'
import { graphqlSdk } from '../graphQlRequestClient'
import cliProgress from 'cli-progress'
import _ from 'lodash'

export const UploadG6PDinteractions = async () => {
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )

  const Rawdata = fs.readFileSync(
    './src/ReadyToUseDB/Drugs/G6PDDrugs.json',
    'utf-8',
  )

  const data = JSON.parse(Rawdata.toString()) as G6PDinteractionsInterface[]
  console.log(`
  #######################################
  Sending G6PD interactions in progress ...
  #######################################
  `)
  progressBar.start(data.length, 0)

  try {
    for (const input of data) {
      await graphqlSdk.addG6PDinteractions({ input, upsert: true })
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
