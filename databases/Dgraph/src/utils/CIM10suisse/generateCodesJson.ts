import fs from 'fs'
import Papa from 'papaparse'
import {
  CIM10FORMATTED_Synthetic_CodesInterface,
  CIM10RAW_Synthetic_CodesInterface,
  FormattedNumericCodes,
} from '../../interfaces/cim10SuisseInterface'

const generateCodesJson = (): FormattedNumericCodes[] => {
  const file = fs.readFileSync(
    './src/cim10suisse/raws/CIM10/CIM10GM2022_CSV_S_FR_versionmetadonnee_codes_20211215.csv',
  )
  const { data } = Papa.parse<CIM10RAW_Synthetic_CodesInterface>(
    file.toString(),
    {
      delimiter: ';',
      header: true,
      quoteChar: '"',
    },
  )

  let i = 0
  const numericCodes = data.reduce<FormattedNumericCodes[]>(
    (previous, current) => {
      if (current.hierarchical_level === '3') {
        if (
          previous.find(
            (el) => el.PlainCode === current.codeWithoutDash.split('.')[0],
          ) === undefined
        ) {
          i += 1
          return [
            ...previous,
            {
              PlainCode: current.codeWithoutDash.split('.')[0],
              NumericCode: i,
            },
          ]
        }
      }

      return previous
    },
    [],
  )
  const formattedData: CIM10FORMATTED_Synthetic_CodesInterface[] = data.map(
    (entry) => {
      const numericCode = numericCodes.find(
        (el) => el.PlainCode === entry.codeWithoutDash.split('.')[0],
      )
      return {
        Hierarchical_level: entry.hierarchical_level,
        Codable: entry.final_code === 'T',
        Explicit_classification: entry.explicit_classification === 'X',
        Chapter: entry.chapter,
        RootCode: entry.root_code,
        CodeWithoutDague: entry.codeWithoutDague,
        CodeWithoutDash: entry.codeWithoutDash,
        PlainCode: entry.plainCode,
        ClassTitle: entry.classTitle,
        RootTitle: entry.rootTitle,
        Position4Title: entry.position4Title,
        Position5title: entry.position5title,
        Sexe:
          entry.sexe === '9'
            ? 'Pas de lien avec le sexe'
            : entry.sexe === 'M'
            ? 'Masculin'
            : 'Féminin',
        SexeAccuracy:
          entry.sexeAccuracy === '9' ? 'non pertinent' : 'Peut être une erreur',
        LowerAgeLimit:
          entry.lowerAgeLimit === '9999'
            ? null
            : entry.lowerAgeLimit.trim()[0] === 't'
            ? {
                unit: 'jour',
                limit: parseInt(entry.lowerAgeLimit.trim().substring(1), 10),
              }
            : {
                unit: 'année',
                limit: parseInt(entry.lowerAgeLimit.trim().substring(1), 10),
              },
        HigherAgeLimit:
          entry.higherAgeLimit === '9999'
            ? null
            : entry.higherAgeLimit.trim()[0] === 't'
            ? {
                unit: 'jour',
                limit: parseInt(entry.higherAgeLimit.trim().substring(1), 10),
              }
            : {
                unit: 'année',
                limit: parseInt(entry.higherAgeLimit.trim().substring(1), 10),
              },
        AgeAccuracy:
          entry.ageAccuracy === '9'
            ? 'non pertinent'
            : entry.ageAccuracy === 'M'
            ? 'Est une erreur'
            : 'Peut être une erreur',
        UncommonDisease: entry.uncommonDisease === 'J',
        AdditionalInformation: entry.additionalInformation === 'J',
        NumericCode: numericCode?.NumericCode!,
      }
    },
  )

  fs.writeFileSync(
    './src/cim10suisse/formatted/formattedCodesCIM10suisse.json',
    JSON.stringify(formattedData),
    'utf-8',
  )

  return numericCodes
}

export default generateCodesJson
