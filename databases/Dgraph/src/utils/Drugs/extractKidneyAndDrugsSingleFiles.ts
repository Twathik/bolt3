import fs from 'fs'
import Papa from 'papaparse'
import {
  AdministrationDetailsInterface,
  DoseInRenalImpairmentGFRRangeInterface,
  KidneyAndDrugFormattedInterface,
  KidneyAndDrugIndexInterface,
  PharmacokineticsPropertiesInterface,
  RenalReplacementTherapiesInterface,
} from '../../interfaces/drugsInterfaces'
import {
  DrugAdministration,
  HDtechniques,
  PharmacokineticsLimits,
} from './KidneyDrugsConst'

const parseArrayWithLimits = ({
  limits,
  originalArray,
  element,
  index,
}: {
  limits: string[]
  originalArray: string[]
  element: string
  index: number
}): string => {
  return limits[index + 1]
    ? originalArray
        .slice(
          originalArray.findIndex((el) => el === element) + 1,
          originalArray.findIndex((el) => el === limits[index + 1]),
        )
        .join('')
        .replaceAll('•', '\n-')
    : originalArray
        .slice(originalArray.findIndex((el) => el === element) + 1)
        .join('')
        .replaceAll('•', '\n-')
}

const DoseInterpretation = ({ Dose }: { Dose: string }) => {
  const NormalUse = Dose === 'Dose as in normal renal function.'
  const NormalUseWithInstruction =
    Dose.includes('Dose as in normal renal function') && !NormalUse
  const Avoid = Dose === 'Avoid.'
  const AvoidWithInstruction = Dose.includes('Avoid') && !Avoid
  const Adjust =
    !NormalUse && !NormalUseWithInstruction && !Avoid && !AvoidWithInstruction

  return {
    NormalUse,
    NormalUseWithInstruction,
    Avoid,
    AvoidWithInstruction,
    Adjust,
  }
}

const checkSectionsForClean = ({
  DrugArray,
  currentDrug,
  section,
  sectionsToClean,
}: {
  DrugArray: string[]
  currentDrug: string
  section: string
  sectionsToClean: string
}): string => {
  let LocalSectionsToClean = sectionsToClean
  let captured = false
  DrugArray.forEach((line) => {
    if (line.includes(currentDrug)) captured = true
  })
  if (captured)
    LocalSectionsToClean = LocalSectionsToClean.concat(' - ').concat(section)
  return LocalSectionsToClean
}

const extractKidneyAndDrugsSingleFiles = () => {
  const file = fs.readFileSync('./src/Drugs/raws/DrugsAndKidneys.csv')
  const pdf = fs.readFileSync(
    './src/Drugs/formatted/KidneyAndDrugsFormattedJSON.txt',
  )
  const { data } = Papa.parse<KidneyAndDrugIndexInterface>(file.toString(), {
    delimiter: '',
    header: true,
    // quoteChar: '"',
  })
  const pdfLines = pdf.toString().split(/\r?\n/)

  const formattedData: KidneyAndDrugFormattedInterface[] = []
  const DrugsToClean: { drug: string; sections: string }[] = []

  data.forEach((drug, drugIndex) => {
    const currentDrug = drug[Object.keys(drug)[0]]
    let sectionsToClean = ''
    const nextDrug = data[drugIndex + 1]?.[Object.keys(data[drugIndex + 1])[0]]

    const currentDrugIndexLigne = pdfLines.findIndex((e) => e === currentDrug)
    const nextDrugIndexLine = pdfLines.findIndex((e) => e === nextDrug)
    const targetLines = pdfLines.slice(currentDrugIndexLigne, nextDrugIndexLine)

    const ClinicalUseIndex = targetLines.findIndex((e) => e === 'Clinical use')

    const DoseInNormalRenalFunctionIndex = targetLines.findIndex(
      (e) => e === 'Dose in normal renal function',
    )
    const PharmacokineticsIndex = targetLines.findIndex(
      (e) => e === 'Pharmacokinetics',
    )
    const MetabolismIndex = targetLines.findIndex((e) => e === 'Metabolism')

    const DoseInRenalImpairmentGFRIndex = targetLines.findIndex(
      (e) => e === 'Dose in renal impairment GFR (mL/min)',
    )

    const DoseInPatientsUndergoingRenalReplacementTherapiesIndex =
      targetLines.findIndex((e) => e === 'Dose in patients undergoing renal ')
    const ImportantDrugInteractionsIndex = targetLines.findIndex(
      (e) => e === 'Important drug interactions',
    )
    const AdministrationIndex = targetLines.findIndex(
      (e) => e === 'Administration',
    )
    const OtherInformationIndex = targetLines.findIndex(
      (e) => e === 'Other information',
    )

    const ClinicalUseLines = targetLines.slice(
      ClinicalUseIndex + 1,
      DoseInNormalRenalFunctionIndex,
    )
    sectionsToClean = checkSectionsForClean({
      currentDrug,
      DrugArray: ClinicalUseLines,
      section: 'ClinicalUse',
      sectionsToClean,
    })
    const ClinicalUse = ClinicalUseLines.map((e) => e.trim())
      .join(' ')
      .replaceAll('•', '\n-')

    const DoseInNormalRenalFunctionLines = targetLines.slice(
      DoseInNormalRenalFunctionIndex + 1,
      PharmacokineticsIndex,
    )
    sectionsToClean = checkSectionsForClean({
      currentDrug,
      DrugArray: DoseInNormalRenalFunctionLines,
      section: 'DoseInNormalRenalFunction',
      sectionsToClean,
    })

    const DoseInNormalRenalFunction = DoseInNormalRenalFunctionLines.map((e) =>
      e.trim(),
    )
      .join(' ')
      .replaceAll('•', '\n-')

    const PharmacokineticsLines = targetLines.slice(
      PharmacokineticsIndex + 1,
      MetabolismIndex,
    )

    sectionsToClean = checkSectionsForClean({
      currentDrug,
      DrugArray: PharmacokineticsLines,
      section: 'PharmacokineticsLines',
      sectionsToClean,
    })

    const PharmacokineticsProperties: PharmacokineticsPropertiesInterface[] =
      PharmacokineticsLimits.map((property, index) => {
        return {
          property,
          description: parseArrayWithLimits({
            limits: PharmacokineticsLimits,
            originalArray: PharmacokineticsLines,
            element: property,
            index,
          }),
        }
      })
    const metabolismeLines = targetLines.slice(
      MetabolismIndex + 1,
      DoseInRenalImpairmentGFRIndex,
    )

    sectionsToClean = checkSectionsForClean({
      currentDrug,
      DrugArray: metabolismeLines,
      section: 'metabolismeLines',
      sectionsToClean,
    })

    const Metabolism = metabolismeLines
      .map((e) => e.trim())
      .join(' ')
      .replaceAll('•', '\n-')

    const DoseInRenalImpairmentGFRLines = targetLines.slice(
      DoseInRenalImpairmentGFRIndex + 1,
      DoseInPatientsUndergoingRenalReplacementTherapiesIndex,
    )

    sectionsToClean = checkSectionsForClean({
      currentDrug,
      DrugArray: DoseInRenalImpairmentGFRLines,
      section: 'DoseInRenalImpairmentGFRLines',
      sectionsToClean,
    })

    const ImpairmentLimits: string[] = DoseInRenalImpairmentGFRLines.filter(
      (e) => e.length < 6,
    )
      .filter((e) => e.length > 1)
      .filter((e) => !e.includes(' '))
      .filter((e) => /\d/.test(e))

    const ranges: DoseInRenalImpairmentGFRRangeInterface[] =
      ImpairmentLimits.map((e, i) => {
        const Dose = parseArrayWithLimits({
          limits: ImpairmentLimits,
          originalArray: DoseInRenalImpairmentGFRLines,
          element: e,
          index: i,
        })
        const DoseInRenalImpairmentGFRInterpretation = DoseInterpretation({
          Dose,
        })

        return {
          range: e,
          Dose,
          ...DoseInRenalImpairmentGFRInterpretation,
        }
      })

    const DoseInRenalImpairmentGFRFormatted = {
      observation: DoseInRenalImpairmentGFRLines.slice(
        0,
        DoseInRenalImpairmentGFRLines.findIndex(
          (e) => e === ImpairmentLimits[0],
        ),
      )
        .map((e) => e.trim())
        .join(' ')
        .replaceAll('•', '\n-'),
      ranges,
    }

    const DoseInPatientsUndergoingRenalReplacementTherapiesLines =
      targetLines.slice(
        DoseInPatientsUndergoingRenalReplacementTherapiesIndex + 2,
        ImportantDrugInteractionsIndex,
      )

    sectionsToClean = checkSectionsForClean({
      currentDrug,
      DrugArray: DoseInPatientsUndergoingRenalReplacementTherapiesLines,
      section: 'DoseInPatientsUndergoingRenalReplacementTherapiesLines',
      sectionsToClean,
    })

    const FiltrationTechniques =
      DoseInPatientsUndergoingRenalReplacementTherapiesLines.filter((e) =>
        HDtechniques.includes(e),
      )
    const DoseFunctionTechnique: RenalReplacementTherapiesInterface[] =
      FiltrationTechniques.map((technique, index) => {
        const Dose = parseArrayWithLimits({
          limits: FiltrationTechniques,
          originalArray: DoseInPatientsUndergoingRenalReplacementTherapiesLines,
          element: technique,
          index,
        })
        const DoseInPatientsUndergoingRenalReplacementTherapiesInterpretation =
          DoseInterpretation({ Dose })
        return {
          technique: technique,
          Dose,
          ...DoseInPatientsUndergoingRenalReplacementTherapiesInterpretation,
        }
      })

    const ImportantDrugInteractionsLines = targetLines.slice(
      ImportantDrugInteractionsIndex + 1,
      AdministrationIndex,
    )

    sectionsToClean = checkSectionsForClean({
      currentDrug,
      DrugArray: ImportantDrugInteractionsLines,
      section: 'ImportantDrugInteractionsLines',
      sectionsToClean,
    })

    const ImportantDrugInteractions = ImportantDrugInteractionsLines.map((e) =>
      e.trim(),
    )
      .join(' ')
      .replaceAll('•', '\n-')

    const AdministrationLines = targetLines.slice(
      AdministrationIndex + 1,
      OtherInformationIndex,
    )

    sectionsToClean = checkSectionsForClean({
      currentDrug,
      DrugArray: AdministrationLines,
      section: 'AdministrationLines',
      sectionsToClean,
    })

    const DrugAdministrationDetails = AdministrationLines.filter((e) =>
      DrugAdministration.includes(e),
    )
    const AdministrationDetails: AdministrationDetailsInterface[] =
      DrugAdministrationDetails.map((detail, index) => {
        return {
          detail,
          comment: parseArrayWithLimits({
            limits: DrugAdministrationDetails,
            originalArray: AdministrationLines,
            element: detail,
            index,
          }),
        }
      })
    const OtherInformationLines = targetLines.slice(OtherInformationIndex + 1)

    sectionsToClean = checkSectionsForClean({
      currentDrug,
      DrugArray: OtherInformationLines,
      section: 'OtherInformationLines',
      sectionsToClean,
    })

    const OtherInformation =
      OtherInformationIndex !== -1
        ? targetLines
            .slice(OtherInformationIndex + 1)
            .map((e) => e.trim())
            .join(' ')
            .replaceAll('•', '\n-')
        : ''

    formattedData.push({
      name: currentDrug,
      page: drug.page,
      ClinicalUse,
      DoseInNormalRenalFunction,
      Pharmacokinetics: PharmacokineticsProperties,
      Metabolism,
      DoseInRenalImpairmentGFR: DoseInRenalImpairmentGFRFormatted,
      DoseInPatientsUndergoingRenalReplacementTherapies: DoseFunctionTechnique,
      ImportantDrugInteractions,
      Administration: AdministrationDetails,
      OtherInformation,
    })
    if (sectionsToClean.length > 0)
      DrugsToClean.push({ drug: currentDrug, sections: sectionsToClean })
  })

  fs.writeFileSync(
    './src/Drugs/formatted/KidneyAndDrugs.json',
    JSON.stringify(formattedData),
    'utf-8',
  )

  fs.writeFileSync(
    './src/Drugs/formatted/KidneyAndDrugsSectionsToClean.json',
    JSON.stringify(DrugsToClean),
    'utf-8',
  )

  console.log('Kidney and drugs all donne !!')
}

export default extractKidneyAndDrugsSingleFiles
