import fs from 'fs'
import {
  AlgerianDrugsPrepareToRxIntegrationInterface,
  DedupedFinalaDrugInterface,
} from '../../interfaces/drugsInterfaces'
import _ from 'lodash'
import drugFile from '../../../src/Drugs/manual/AlgerianWithRx.json'
import dedupedDrugs from '../../../src/Drugs/manual/AlgerianWithRx.json'
export const DedupeDrugs = () => {
  const DrugForm: string[] = []
  let DedupedDrugs: DedupedFinalaDrugInterface[] = []

  drugFile.forEach((drug: AlgerianDrugsPrepareToRxIntegrationInterface) => {
    DrugForm.push(drug.FORME)
    const index = DedupedDrugs.findIndex(
      (d) => d.NOM_COMMERCIALE === drug.NOM_COMMERCIALE,
    )
    if (index === -1) {
      DedupedDrugs.push({
        DCI: drug.DCI,
        DOSAGE: [drug.DOSAGE.replaceAll(' ', '')],
        FORME: [drug.FORME.trim()],
        DrugCategories: drug.DrugCategories,
        NOM_COMMERCIALE: drug.NOM_COMMERCIALE,
        PregnancyIndexLink: drug.PregnancyIndexLink,
        rx: drug.rx,
      })
    } else {
      DedupedDrugs[index].FORME.push(drug.FORME)
      DedupedDrugs[index].DOSAGE.push(drug.DOSAGE)
    }
  })
  DedupedDrugs = DedupedDrugs.map((drug) => ({
    ...drug,
    FORME: _.uniq(drug.FORME),
    DOSAGE: _.uniq(drug.DOSAGE),
  }))

  fs.writeFileSync(
    './src/Drugs/formatted/DedupedDrugs.json',
    JSON.stringify(DedupedDrugs),
    'utf-8',
  )
  fs.writeFileSync(
    './src/Drugs/formatted/DrugForms.json',
    JSON.stringify(_.uniq(DrugForm)),
    'utf-8',
  )
}

export const DedupeDrugPropreties = () => {
  const DrugForm: string[] = []

  dedupedDrugs.forEach((drug: AlgerianDrugsPrepareToRxIntegrationInterface) => {
    const { FORME } = drug

    DrugForm.push(FORME)
  })

  fs.writeFileSync(
    './src/Drugs/formatted/DrugForms.json',
    JSON.stringify(_.uniq(_.sortBy(DrugForm))),
    'utf-8',
  )
}
