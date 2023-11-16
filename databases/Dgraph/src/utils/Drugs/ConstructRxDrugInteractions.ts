import fs from 'fs'
import axios from 'axios'
import RxNavDrugsList from '../../Drugs/formatted/RxNawWithAlDrugsIds.json'
import { RxNAvIdswithAlDrugsIdsInterface } from '../../interfaces/drugsInterfaces'
import cliProgress from 'cli-progress'

const RxNavDrugs: RxNAvIdswithAlDrugsIdsInterface[] =
  RxNavDrugsList as RxNAvIdswithAlDrugsIdsInterface[]

const basePath = 'https://rxnav.nlm.nih.gov/REST/interaction/interaction.json'

const FormatDrug = async ({
  Drug,
  progressBar,
  dir,
}: {
  Drug: RxNAvIdswithAlDrugsIdsInterface
  progressBar: cliProgress.SingleBar
  dir: string
}) => {
  try {
    const fetch = await axios.get(basePath, {
      params: {
        rxcui: Drug.rxcui,
      },
    })

    fs.writeFileSync(
      `${dir}/${Drug.name
        ?.replaceAll(' ', '_')
        .replaceAll(',', '_')}_interactions.json`,
      JSON.stringify(fetch.data),
      'utf-8',
    )
    progressBar.increment()
  } catch (error) {
    console.log({ error })
    console.log({ DrugError: Drug })
  }
}

const ConstructRxDrugInteractions = async () => {
  const root = './src/Drugs/formatted/RXnavDrugs'
  const dir = `./src/Drugs/formatted/RXnavDrugs/Interactions`
  try {
    if (!fs.existsSync(root)) {
      fs.mkdirSync(root)
    }

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
  } catch (error) {
    console.log({ error })
  }
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )
  progressBar.start(RxNavDrugs.length, 0)
  // await Promise.all(RxNavDrugs.map((Drug) => FormatDrug(Drug, progressBar)))
  for (const Drug of RxNavDrugs) {
    if (Drug?.rxcui !== '') {
      await FormatDrug({ Drug, progressBar, dir })
    }
  }
}

export default ConstructRxDrugInteractions
