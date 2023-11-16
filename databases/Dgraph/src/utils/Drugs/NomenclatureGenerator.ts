import fs from 'fs'
import _ from 'lodash'
import Papa from 'papaparse'
import {
  AlgerianAvailableDrugsInterface,
  AlgerianDrugsFormattedInterface,
  AlgerianDrugsRawInterface,
} from '../../interfaces/drugsInterfaces'

const AlgerianDrugsGenerator = () => {
  const AlgerianDrugsFile = fs.readFileSync(
    './src/Drugs/raws/AlgerianDrugs/AlgerianDrugs.csv',
  )
  const AlgerianAvailableDrugsFile = fs.readFileSync(
    './src/Drugs/raws/AlgerianDrugs/AlgerianAvailableDrugs.csv',
  )
  const { data: AlgerianDrugs } = Papa.parse<AlgerianDrugsRawInterface>(
    AlgerianDrugsFile.toString(),
    {
      delimiter: ';',
      header: true,
      quoteChar: '"',
    },
  )

  const { data: AlgerianAvailableDrugs } =
    Papa.parse<AlgerianAvailableDrugsInterface>(
      AlgerianAvailableDrugsFile.toString(),
      {
        delimiter: ';',
        header: true,
        quoteChar: '"',
      },
    )
  console.warn({ initialLength: AlgerianAvailableDrugs.length })
  let formattedData: AlgerianDrugsFormattedInterface[] = AlgerianDrugs.map(
    (Drug) => {
      const findIndex = AlgerianAvailableDrugs.findIndex((e) => {
        return (
          e.CODE.trim().replaceAll(' ', '').toLowerCase() ===
            Drug.CODE_DCI.trim().replaceAll(' ', '').toLowerCase() &&
          e.FORME.trim().replaceAll(' ', '').toLowerCase() ===
            e.FORME.trim().replaceAll(' ', '').toLowerCase() &&
          Drug.DOSAGE.trim()
            .replaceAll(' ', '')
            .toLowerCase()
            .includes(e.DOSAGE.trim().replaceAll(' ', '').toLowerCase()) &&
          e.MARQUE.trim().replaceAll(' ', '').toLowerCase() ===
            Drug.NOM_COMMERCIALE.trim().replaceAll(' ', '').toLowerCase()
        )
      })

      if (findIndex !== -1) {
        AlgerianAvailableDrugs.splice(findIndex, 1)
      }
      return {
        N_ENREGISTREMENT: Drug.N_ENREGISTREMENT.trim(),
        CODE_DCI: Drug.CODE_DCI.trim(),
        DCI: Drug.DCI.trim(),
        NOM_COMMERCIALE: Drug.NOM_COMMERCIALE.trim(),
        FORME: Drug.FORME.trim(),
        DOSAGE: Drug.DOSAGE.trim(),
        COND: Drug.COND.trim(),
        LISTE: Drug.LISTE.trim(),
        P1: Drug.P1.trim(),
        P2: Drug.P2.trim(),
        OBS: Drug.OBS.trim(),
        LABORATOIRES_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT:
          Drug.LABORATOIRES_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT.trim(),
        PAYS_DU_LABORATOIRE_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT:
          Drug.PAYS_DU_LABORATOIRE_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT.trim(),
        DATE_D_ENREGISTREMENT_INITIAL:
          Drug.DATE_D_ENREGISTREMENT_INITIAL.trim(),
        DATE_D_ENREGISTREMENT_FINAL: Drug.DATE_D_ENREGISTREMENT_FINAL.trim(),
        TYPE: Drug.TYPE.trim(),
        STATUT: Drug.STATUT.trim(),
        DUREE_DE_STABILITE: Drug.DUREE_DE_STABILITE.trim(),
        availableInAlgeria: findIndex! == -1,
        DrugCategories: [],
      }
    },
  )
  AlgerianAvailableDrugs.forEach((e) => {
    formattedData.push({
      N_ENREGISTREMENT: '',
      CODE_DCI: e.CODE.trim(),
      DCI: e.DCI.trim(),
      NOM_COMMERCIALE: e.MARQUE.trim(),
      FORME: e.FORME.trim(),
      DOSAGE: e.DOSAGE.trim(),
      COND: e.COND.trim(),
      LISTE: '',
      P1: '',
      P2: '',
      OBS: '',
      LABORATOIRES_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT: '',
      PAYS_DU_LABORATOIRE_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT: '',
      DATE_D_ENREGISTREMENT_INITIAL: '',
      DATE_D_ENREGISTREMENT_FINAL: '',
      TYPE: '',
      STATUT: '',
      DUREE_DE_STABILITE: '',
      availableInAlgeria: true,
      DrugCategories: [],
    })
  })

  formattedData = _.orderBy(
    formattedData,
    ['CODE_DCI', 'NOM_COMMERCIALE'],
    ['asc', 'asc'],
  )
  console.log({ formattedDataLength: formattedData.length })
  console.warn('initial Drug Liste generated')
  const dirname = './src/Drugs/raws/AlgerianDrugs/Categories'
  const dirFiles = fs.readdirSync(dirname)
  dirFiles.forEach(function (filename) {
    const file = fs.readFileSync(dirname + '/' + filename, 'utf-8')

    const { data: categoryData } = Papa.parse<AlgerianAvailableDrugsInterface>(
      file.toString(),
      {
        delimiter: ';',
        header: true,
        quoteChar: '"',
      },
    )

    formattedData = formattedData.map((Drug) => {
      const index = categoryData.findIndex((e) => {
        return e[Object.keys(e)[0]] === Drug.CODE_DCI
      })

      return {
        ...Drug,
        DrugCategories:
          index !== -1
            ? [...Drug.DrugCategories, filename.replace('.csv', '')]
            : Drug.DrugCategories,
      }
    })
  })

  console.warn({ finalLength: AlgerianAvailableDrugs.length })
  fs.writeFileSync(
    './src/Drugs/formatted/AlgerianDrugs.json',
    JSON.stringify(formattedData),
    'utf-8',
  )

  console.log('Algerian Drugs all done !!')
}

export default AlgerianDrugsGenerator
