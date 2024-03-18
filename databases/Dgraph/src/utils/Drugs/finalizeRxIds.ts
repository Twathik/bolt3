import fs from 'fs'
import {
  AlgerianDrugsDciWithRxInterface,
  RxCentralMapping,
  RxNavKidneyMapping,
} from '../../interfaces/drugsInterfaces'

import DrugToRxList from '../../ReadyToUseDB/Drugs/PrepareDrugsToRx.json'
import mappingList from '../../ReadyToUseDB/Drugs/RxNavToKidneyMapping.json'

const DrugToRx: AlgerianDrugsDciWithRxInterface[] =
  DrugToRxList as AlgerianDrugsDciWithRxInterface[]
const mapping: RxNavKidneyMapping[] = mappingList as RxNavKidneyMapping[]

const finalizeRxIds = () => {
  const formattedData: RxCentralMapping[] = mapping.map((Rx) => {
    /* const ids: number[] = DrugToRx.reduce((previous, current) => {
      return current.rx.findIndex((e) => e.rxcui === Rx.rxcui) === -1
        ? previous
        : [current.id!, ...previous]
    }, [] as number[]) */
    return {
      ...Rx,
      ids: [],
    }
  })

  /* fs.writeFileSync(
    './src/ReadyToUseDB/Drugs/RxCentralMappin.json',
    JSON.stringify(formattedData),
    'utf-8',
  ) */
}

export default finalizeRxIds
