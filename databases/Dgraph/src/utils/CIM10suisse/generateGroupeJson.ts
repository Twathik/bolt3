import fs from 'fs'
import Papa from 'papaparse'
import {
  CIM10Formatted_Synthetic_GroupeInterface,
  CIM10RAW_Synthetic_GroupeInterface,
} from '../../interfaces/cim10SuisseInterface'
import generateCodesJson from './generateCodesJson'

const generateGroupeJson = () => {
  const file = fs.readFileSync(
    './src/cim10suisse/raws/CIM10/CIM10GM2022_CSV_S_FR_versionmetadonnee_groupes_20211215.csv',
  )
  const numericCodes = generateCodesJson()

  const { data } = Papa.parse<CIM10RAW_Synthetic_GroupeInterface>(
    file.toString(),
    {
      delimiter: ';',
      header: true,
      quoteChar: '"',
    },
  )

  const formattedData: CIM10Formatted_Synthetic_GroupeInterface[] = data.map(
    (entry) => {
      const startingNumericCode = numericCodes.find(
        (el) => el.PlainCode === entry.starting_code,
      )
      const endingNumericCode = numericCodes.find(
        (el) => el.PlainCode === entry.ending_code,
      )
      return {
        ...entry,
        StartingNumericCode: startingNumericCode?.NumericCode!,
        EndingNumericCode: endingNumericCode?.NumericCode!,
      }
    },
  )

  fs.writeFileSync(
    './src/cim10suisse/formatted/formattedGroupeCIM10suisse.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
}

export default generateGroupeJson
