import fs from 'fs'
import rxList from '../../Drugs/manual/RxNavToBFMapping.json'
import KidneyList from '../../Drugs/manual/KidneyAndDrugs.json'
import {
  KidneyAndDrugFormattedInterface,
  RxNavBFMapping,
  RxNavKidneyMapping,
} from '../../interfaces/drugsInterfaces'

const rx: RxNavBFMapping[] = rxList as RxNavBFMapping[]

const Kidney: KidneyAndDrugFormattedInterface[] =
  KidneyList as KidneyAndDrugFormattedInterface[]

const RxToKidneyDatabase = () => {
  const formattedData: RxNavKidneyMapping[] = rx.map((entry) => {
    const kidney_mapping =
      Kidney.find((e) => {
        try {
          return (
            e.name?.toLowerCase() ===
              entry.name?.toLowerCase().split(' ')[0]! ||
            e.name?.toLowerCase() === entry.name
          )
        } catch (error) {
          console.log({ e })
          return ''
        }
      })?.name ?? ''
    return {
      ...entry,
      kidney_mapping,
    }
  })

  fs.writeFileSync(
    './src/Drugs/formatted/RxNavToKidneyMapping.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
  console.log('Kidney done !!')
}

export default RxToKidneyDatabase
