import fs from 'fs'
import axios from 'axios'
import RxNavDrugsList from '../../Drugs/formatted/RxNawWithAlDrugsIds.json'
import { RxNAvIdswithAlDrugsIdsInterface } from '../../interfaces/drugsInterfaces'
import cliProgress from 'cli-progress'

const RxNavDrugs: RxNAvIdswithAlDrugsIdsInterface[] =
  RxNavDrugsList as RxNAvIdswithAlDrugsIdsInterface[]

const basePath = 'https://rxnav.nlm.nih.gov/REST/rxclass/class/byRxcui.json'

const completeArray = async (array: any) => {
  const original = array.rxclassDrugInfoList?.rxclassDrugInfo ?? []
  let formatted: any[] = []
  for (const classe of original) {
    try {
      const graph = await axios.get(
        'https://rxnav.nlm.nih.gov/REST/rxclass/classGraph.json',
        {
          params: {
            classId: classe['rxclassMinConceptItem']['classId'],
            source: classe['rxclassMinConceptItem']['classType'],
          },
        },
      )
      classe['graph'] = graph.data
      formatted.push(classe)
    } catch (error) {
      console.log({ error })
    }
  }

  return formatted
}

const FormatDrug = async ({
  Drug,
  progressBar,
  dir,
  type,
}: {
  Drug: any
  progressBar: cliProgress.SingleBar
  dir: string
  type: string
}) => {
  try {
    const fetch = await axios.get(basePath, {
      params: {
        rxcui: Drug.rxcui,
        relaSource: type,
      },
    })
    const classes = {
      rxcui: Drug.rxcui,
      name: Drug.name,
      classes: await completeArray(fetch.data),
    }

    fs.writeFileSync(
      `${dir}/${Drug.name
        ?.replaceAll(' ', '_')
        .replaceAll(',', '_')}_${type}.json`,
      JSON.stringify(classes),
      'utf-8',
    )
    progressBar.increment()
  } catch (error) {
    console.log({ error })
    console.log({ DrugError: Drug })
  }
}

const constructRx = async ({
  type,
}: {
  type: 'ATC' | 'MESH' | 'MEDRT' | 'FDASPL' | 'VA'
}) => {
  const root = './src/Drugs/formatted/RXnavDrugs'
  const dir = `./src/Drugs/formatted/RXnavDrugs/${type}`
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
      await FormatDrug({ Drug, progressBar, dir, type })
    }
  }
  console.log('Drugs formatted')
}

export const constructRxNavDrugs = async () => {
  await constructRx({ type: 'VA' })
}

export default constructRxNavDrugs
