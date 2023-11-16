import fs from 'fs'
import Papa from 'papaparse'
import {
  CHOPItemType,
  CHOP_Formatted_SyntheticInterface,
  CHOP_RAW_SyntheticInterface,
} from '../../interfaces/cim10SuisseInterface'

const generateItemType = ({
  item_type,
}: Pick<CHOP_RAW_SyntheticInterface, 'item_type'>): CHOPItemType => {
  switch (item_type) {
    case 'B':
      return 'description complémentaire'
    case 'I':
      return 'inclusions'
    case 'N':
      return 'note'
    case 'S':
      return 'coder aussi'
    case 'T':
      return 'titre'
    case 'X':
      return 'exclusion'

    default:
      return 'titre'
  }
}

const generateSyntheticCHOPJson = () => {
  const file = fs.readFileSync(
    './src/cim10suisse/raws/CHOP/CHOP_2022_FR_Index_systematique_2021_10_22.csv',
  )
  const { data } = Papa.parse<CHOP_RAW_SyntheticInterface>(file.toString(), {
    delimiter: ';',
    header: true,
    quoteChar: '"',
  })

  const formattedData: CHOP_Formatted_SyntheticInterface[] = data.map(
    (entry) => {
      return {
        Nbchar: entry.nbchar,
        Zcode: entry.zcode,
        ItemType: generateItemType({ item_type: entry.item_type }),
        Text: entry.text,
        Codable: entry.codable,
        Emitter: entry.emitter,
        Status: entry.status,
        Modification_date: entry.modification_date,
        IndentLevel: entry.indent_level,
        Lateralite: entry.lateralite,
      }
    },
  )

  fs.writeFileSync(
    './src/cim10suisse/formatted/formattedSyntheticCHOPsuisse.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
}

export default generateSyntheticCHOPJson
