import fs from 'fs'
import Papa from 'papaparse'
import {
  CIM10RAW_AlphabeticalIndexInterface,
  CIM10Formatted_AlphabeticalIndexInterface,
} from '../../interfaces/cim10SuisseInterface'

const generateAlphabeticalIndexJSON = () => {
  const file = fs.readFileSync(
    './src/cim10suisse/raws/CIM10/CIM-10-GM 2022 AI FR CSV.csv',
  )
  const { data } = Papa.parse<CIM10RAW_AlphabeticalIndexInterface>(
    file.toString(),
    {
      delimiter: ';',
      header: true,
      quoteChar: '"',
    },
  )

  const formattedData: CIM10Formatted_AlphabeticalIndexInterface[] = data.map(
    (entry) => {
      const parseRawTitle = entry.raw_title.split('¬')
      const parseCode = entry.primary_code.split(',')
      let DiagnosticSimple: string | null = null
      let DiagnosticEtiologique: string | null = null
      let ManifestationDeLaMaladie: string | null = null
      let DiagnosticFacultatif: string | null = null

      parseCode.forEach((code) => {
        if (code.includes('†')) {
          DiagnosticEtiologique = code.replace('†', '').trim()
        } else if (code.includes('*')) {
          ManifestationDeLaMaladie = code.replace('*', '').trim()
        } else if (code.includes('!')) {
          DiagnosticFacultatif = code.replace('!', '').trim()
        } else {
          DiagnosticSimple = code.trim()
        }
      })
      return {
        ...entry,
        RootTitle: parseRawTitle[0].trim(),
        FormattedTitle: (parseRawTitle[1] ?? '')
          .concat(parseRawTitle[0])
          .trim(),
        DiagnosticSimple,
        DiagnosticEtiologique,
        DiagnosticFacultatif,
        ManifestationDeLaMaladie,
      }
    },
  )

  fs.writeFileSync(
    './src/cim10suisse/formatted/formattedAlphabeticalIndexCIM10suisse.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
}

export default generateAlphabeticalIndexJSON
