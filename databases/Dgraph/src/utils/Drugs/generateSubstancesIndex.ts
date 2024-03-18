import fs from 'fs'
import Papa from 'papaparse'
import {
  SubstancesIndexFormattedInterface,
  SubstancesIndexRawInterface,
} from '../../interfaces/drugsInterfaces'

const generateSubstancesIndexJSON = () => {
  const file = fs.readFileSync('./src/Drugs/raws/index_substances.csv')
  const { data } = Papa.parse<SubstancesIndexRawInterface>(file.toString(), {
    delimiter: '|',
    header: true,
    quoteChar: '"',
  })

  const formattedData: SubstancesIndexFormattedInterface[] = data.map(
    (entry) => {
      return {
        molecule: entry.molecule,
        classes:
          entry.classe?.length > 0
            ? entry.classe.split(';').map((el) => ({ name: el }))
            : [],
      }
    },
  )

  fs.writeFileSync(
    './src/Drugs/formatted/substanceIndexFormatted.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
}

export default generateSubstancesIndexJSON
