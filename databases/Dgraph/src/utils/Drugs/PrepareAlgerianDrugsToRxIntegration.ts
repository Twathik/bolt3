import fs from 'fs'
import {
  AlgerianDrugsDciWithRxInterface,
  AlgerianDrugsWithPregnancyInterface,
  AlgerianDrugsWithPregnancyInterfaceWithId,
  DciWithRxConcatIdsInterface,
  RxNAvIdswithAlDrugsIdsInterface,
} from '../../interfaces/drugsInterfaces'
import DrugsList from '../../ReadyToUseDB/Drugs/PregnancyWithAlgerianDrugsList.json'
import DCI_withRxList from '../../Drugs/manual/PrepareDrugsToRx.json'
import DCI_withRxAndIdList from '../../Drugs/formatted/DrugsWithRxAndId.json'
import RxNavIdsList from '../../Drugs/manual/DrugsToRxWithConcatId.json'

import _ from 'lodash'

const Drugs: AlgerianDrugsWithPregnancyInterface[] =
  DrugsList as AlgerianDrugsWithPregnancyInterface[]

const DCIwithDrugs: AlgerianDrugsDciWithRxInterface[] =
  DCI_withRxList as AlgerianDrugsDciWithRxInterface[]

const DCI_withRxAndId: AlgerianDrugsWithPregnancyInterfaceWithId[] =
  DCI_withRxAndIdList as AlgerianDrugsWithPregnancyInterfaceWithId[]

const RxNavWithIds: DciWithRxConcatIdsInterface[] =
  RxNavIdsList as DciWithRxConcatIdsInterface[]

export const PrepareAlgerianDrugsToRxIntegration = () => {
  let DCIList: string[] = Drugs.map((d) => d.DCI)
  DCIList = _.uniq(DCIList).sort()
  const formattedData: AlgerianDrugsDciWithRxInterface[] = DCIList.map(
    (drug) => {
      return {
        rx: [{}],
        DCI: drug,
      }
    },
  )
  fs.writeFileSync(
    './src/Drugs/formatted/PrepareDrugsToRx.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
  console.log('Prepared DCI to Rx list done !!')
}

export const GetRxListWithMedicId = () => {
  let i = 0

  let formattedData: AlgerianDrugsWithPregnancyInterfaceWithId[] = Drugs.map(
    (drug) => {
      i += 1
      const rx = DCIwithDrugs.find((e) => e.DCI === drug.DCI)?.rx
      return { id: i, ...drug, rx: rx! }
    },
  )
  fs.writeFileSync(
    './src/Drugs/formatted/DrugsWithRxAndId.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
}
export const PrepareAlgerianDrugsToRxIntegrationWithId = () => {
  let formattedData: DciWithRxConcatIdsInterface[] = []
  DCI_withRxAndId.forEach((drug) => {
    const findIndex = formattedData.findIndex((e) => e.DCI === drug.DCI)
    if (findIndex === -1) {
      formattedData.push({ ids: [drug.id], DCI: drug.DCI, rx: drug.rx })
    } else {
      formattedData[findIndex].ids?.push(drug.id)
    }
  })
  formattedData = _.orderBy(formattedData, ['DCI', 'asc'])
  fs.writeFileSync(
    './src/Drugs/formatted/DrugsToRxWithConcatId.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
  console.log('Prepared DCI to Rx list done !!')
}

export const PrepareRXNavIdsWithAlDrugsIds = () => {
  let formattedData: RxNAvIdswithAlDrugsIdsInterface[] = []

  RxNavWithIds.forEach((drug) => {
    drug.rx.forEach((rx) => {
      const findIndex = formattedData.findIndex((e) => e.rxcui === rx.rxcui)
      if (findIndex === -1) {
        formattedData.push({
          ids: drug.ids!,
          name: rx.name,
          rxcui: rx.rxcui,
          tty: rx.tty,
        })
      } else {
        formattedData[findIndex].ids?.push(...drug.ids!)
      }
    })
  })

  let i = 0
  formattedData = _.orderBy(formattedData, ['name', 'asc']).map((e) => {
    i += 1
    return { localId: i, ...e, ids: _.uniq(e.ids).sort((a, b) => a - b) }
  })
  fs.writeFileSync(
    './src/Drugs/formatted/RxNawWithAlDrugsIds.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
  console.log('Prepared RxNav list done !!')
}
