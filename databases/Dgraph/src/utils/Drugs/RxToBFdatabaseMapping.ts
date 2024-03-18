import fs from 'fs'
import rxList from '../../Drugs/formatted/RxNawWithAlDrugsIds.json'
import BFList from '../../Drugs/formatted/BFDrugsInteractions.json'
import {
  BFDrugFormattedInterface,
  RxNavBFMapping,
  RxNAvIdswithAlDrugsIdsInterface,
} from '../../interfaces/drugsInterfaces'

const rx: RxNAvIdswithAlDrugsIdsInterface[] =
  rxList as RxNAvIdswithAlDrugsIdsInterface[]

const BF: BFDrugFormattedInterface[] = BFList as BFDrugFormattedInterface[]

const RxToBFdatabaseMapping = () => {
  const formattedData: RxNavBFMapping[] = rx.map((entry) => {
    const BF_mapping =
      BF.find((e) => {
        try {
          return e.name
            ?.toLowerCase()
            .includes(entry.name?.toLowerCase().split(' ')[0]!)
        } catch (error) {
          console.log({ e })
        }
      })?.name ?? ''
    return {
      ...entry,
      BF_mapping,
    }
  })

  fs.writeFileSync(
    './src/Drugs/formatted/RxNavToBFMapping.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
}

export default RxToBFdatabaseMapping
