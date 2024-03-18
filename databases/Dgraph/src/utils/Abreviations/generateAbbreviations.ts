import fs from 'fs'
import papa from 'papaparse'
import {
  formattedRawAbbreviationsInterface,
  rawAbbreviations,
} from '../../interfaces/cim10RawInterface'

export const generateAbbreviations = () => {
  const file = fs.readFileSync('./src/Abbreviations/abbreviations.csv')
  const { data: rawAbbreviations } = papa.parse<rawAbbreviations>(
    file.toString(),
    {
      delimiter: '|',
      header: true,
      quoteChar: '"',
    },
  )
  const formattedRawAbbreviations: formattedRawAbbreviationsInterface[] = []

  rawAbbreviations.forEach((raw) => {
    const descriptions = raw.descriptions.split(',').map((e) => e.trim())
    descriptions.forEach((d) => {
      formattedRawAbbreviations.push({
        abbreviation: raw.abbreviation,
        description: d,
      })
    })
  })
  fs.writeFileSync(
    './src/Abbreviations/generated/formattedAbbreviations.json',
    JSON.stringify(formattedRawAbbreviations),
    'utf-8',
  )
}
