import fs from 'fs'
import Papa from 'papaparse'
import {
  DrugsAndPregnancyFormattedInterface,
  DrugsAndPregnancyRawInterface,
} from '../../interfaces/drugsInterfaces'

const generateDrugsDuringPregnancyJSON = () => {
  const file = fs.readFileSync(
    './src/Drugs/raws/australien_pregnacy_database.csv',
  )
  const { data } = Papa.parse<DrugsAndPregnancyRawInterface>(file.toString(), {
    delimiter: '|',
    header: true,
    quoteChar: '"',
  })

  const formattedData: DrugsAndPregnancyFormattedInterface[] = data.map(
    (entry) => {
      return {
        ...entry,
        Drugs: entry.Drugs.split(',').map((el) => ({ name: el.trim() })),
        Observation: '',
      }
    },
  )

  fs.writeFileSync(
    './src/Drugs/formatted/drugsDuringPregnancy.json',
    JSON.stringify(formattedData),
    'utf-8',
  )
}

export default generateDrugsDuringPregnancyJSON
