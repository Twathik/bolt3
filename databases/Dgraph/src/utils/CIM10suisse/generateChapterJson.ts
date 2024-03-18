import fs from 'fs'
import Papa from 'papaparse'
import { CIM10RAW_Synthetic_ChapterInterface } from '../../interfaces/cim10SuisseInterface'

const generateChapterJson = () => {
  const file = fs.readFileSync(
    './src/cim10suisse/raws/CIM10/CIM10GM2022_CSV_S_FR_versionmetadonnee_chapitres_20211215.csv',
  )
  const { data } = Papa.parse<CIM10RAW_Synthetic_ChapterInterface>(
    file.toString(),
    {
      delimiter: ';',
      header: true,
      quoteChar: '"',
    },
  )

  fs.writeFileSync(
    './src/cim10suisse/formatted/formattedChapterCIM10suisse.json',
    JSON.stringify(data),
    'utf-8',
  )
}

export default generateChapterJson
