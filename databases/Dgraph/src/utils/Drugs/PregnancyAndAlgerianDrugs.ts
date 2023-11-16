import fs from 'fs'
import {
  AlgerianDrugsLinkedToMedicalInteractionsInterface,
  AlgerianDrugsWithPregnancyInterface,
  DrugsAndPregnancyFormattedInterface,
} from '../../interfaces/drugsInterfaces'
import PregnancyDrugs from '../../ReadyToUseDB/Drugs/drugsDuringPregnancy.json'
import RootList from '../../ReadyToUseDB/Drugs/AlgerianDrugsLinkedToMedicalInteractions.json'
import _ from 'lodash'

const Drugs: DrugsAndPregnancyFormattedInterface[] =
  PregnancyDrugs as DrugsAndPregnancyFormattedInterface[]
const List: AlgerianDrugsLinkedToMedicalInteractionsInterface[] = RootList

console.log({ ListLength: List.length, DrugsLength: Drugs.length })

const PregnancyAndAlgerianDrugs = () => {
  const DrugsList: string[] = []
  const FoundDrugList: string[] = []
  let AssociatedAlgerianDrug = 0
  Drugs.forEach((drug) => drug.Drugs.forEach((d) => DrugsList.push(d.name)))

  const formattedData: AlgerianDrugsWithPregnancyInterface[] = List.map(
    (drug) => {
      const PregnancyIndexLink: string[] = []
      Drugs.forEach((d1) => {
        // console.log({ d1: d1.Drugs })
        d1.Drugs.forEach((d2) => {
          // console.log({ d2: d2.name })
          if (
            drug.DCI.toLocaleLowerCase()
              .replaceAll('é', 'e')
              .replaceAll('è', 'e')
              .replaceAll('ï', 'i')
              .includes(
                d2.name
                  .toLowerCase()
                  .split(' ')
                  .filter(
                    (e) =>
                      ![
                        'acide',
                        'sodium',
                        'phosphate',
                        'iron',
                        'methyl',
                      ].includes(e),
                  )[0],
              )
          ) {
            // console.log({ name: d2.name })
            PregnancyIndexLink.push(d2.name)
            FoundDrugList.push(d2.name)
          }
        })
      })
      /* console.log({
        AssociatedAlgerianDrug,
        length: PregnancyIndexLink.length,
        PregnancyIndexLink,
      }) */
      if (PregnancyIndexLink.length > 0) AssociatedAlgerianDrug += 1
      return {
        rx: { name: '', rxcui: '', tty: '' },
        PregnancyIndexLink: _.uniq(PregnancyIndexLink),
        ...drug,
      }
    },
  )
  console.log({ AssociatedAlgerianDrug, found: _.uniq(FoundDrugList).length })

  fs.writeFileSync(
    './src/Drugs/formatted/PregnancyWithAlgerianDrugsList.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
  console.log('PregnancyAndAlgerianDrugs done !!')
}

export default PregnancyAndAlgerianDrugs
