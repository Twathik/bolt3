import fs from 'fs'
import Papa from 'papaparse'
import {
  CHOP_RAW_AlphabeticalIndexInterface,
  CHOP_Formatted_AlphabeticalIndexInterface,
} from '../../interfaces/cim10SuisseInterface'

const generateAlphabeticalIndexCHOP_JSON = () => {
  const file = fs.readFileSync(
    './src/cim10suisse/raws/CHOP/CHOP2022_AI_FR_A-Z_CSV_2021_11_02.csv',
  )
  const { data } = Papa.parse<CHOP_RAW_AlphabeticalIndexInterface>(
    file.toString(),
    {
      delimiter: ',',
      header: true,
      quoteChar: '"',
    },
  )

  const formattedData: CHOP_Formatted_AlphabeticalIndexInterface[] = data.map(
    (entry) => {
      if (!entry.raw_title) console.log({ entry })
      const parseRawTitle = entry.raw_title.split('¬')
      return {
        IndexEntry: entry.indexEntry,
        Zcode: entry.Zcode,
        RootTitle: parseRawTitle[0].trim(),
        FormattedTitle: (parseRawTitle[1] ?? '')
          .concat(parseRawTitle[0])
          .trim(),
      }
    },
  )

  fs.writeFileSync(
    './src/cim10suisse/formatted/formattedAlphabeticalIndexCHOPsuisse.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
}

export default generateAlphabeticalIndexCHOP_JSON
