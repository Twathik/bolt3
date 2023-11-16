import fs from 'fs'
import {
  DoseInPatientsUndergoingRenalReplacementTherapiesRDFinterface,
  DoseInRenalImpairmentGFRRangesRDFinterface,
  DrugKidneyRDFinterface,
  KidneyAndDrugFormattedInterface,
  PharmacokineticsRDFinterface,
  RenalDrugsAdministrationRDFinterface,
} from '../../interfaces/drugsInterfaces'
import _ from 'lodash'
import { createHash } from '../createHash'
import {
  generateRDFTemplate,
  transformObjectToRDF,
} from '../generateRDFTemplate'

export const GenerateKidneyDrugs = () => {
  console.log(`
  ######################
  ## Formatting Kidney files files
  ######################
  `)

  const BFdata = fs.readFileSync(
    './src/ReadyToUseDB/Drugs/KidneyAndDrugs.json',
    'utf-8',
  )
  let template = ''
  let relations = ''
  const data = JSON.parse(
    BFdata.toString(),
  ) as KidneyAndDrugFormattedInterface[]

  const DrugKidneyInput: DrugKidneyRDFinterface[] = []

  const PharmacokineticsInput: PharmacokineticsRDFinterface[] = []

  const DoseInRenalImpairmentGFRRangesRDFInput: DoseInRenalImpairmentGFRRangesRDFinterface[] =
    []

  const DoseInPatientsUndergoingRenalReplacementTherapiesRDFInput: DoseInPatientsUndergoingRenalReplacementTherapiesRDFinterface[] =
    []

  const RenalDrugsAdministrationInput: RenalDrugsAdministrationRDFinterface[] =
    []

  data.forEach((drug) => {
    const id = createHash({ data: drug.name, len: 8 })

    DrugKidneyInput.push({
      id,
      name: drug.name,
      page: parseInt(drug.page, 10),
      ClinicalUse: drug.ClinicalUse,
      Metabolism: drug.Metabolism,
      ImportantDrugInteractions: drug.ImportantDrugInteractions,
      OtherInformation: drug.OtherInformation,
      DoseInRenalImpairmentGFRObservation:
        drug.DoseInRenalImpairmentGFR.observation,
      DoseInNormalRenalFunction: drug.DoseInNormalRenalFunction,
    })

    let i = 1

    drug.Pharmacokinetics.forEach((p) => {
      const localId = `${id}_${i}`
      PharmacokineticsInput.push({
        id: localId,
        description: p.description,
        property: p.property,
      })

      relations = relations.concat(
        generateRDFTemplate({
          object: `_:KidneyDrugs${id}`,
          predicate: 'KidneyDrugs.Pharmacokinetics',
          value: `_:Pharmacokinetics${localId}`,
        }),
      )
      i++
    })
    i = 1

    drug.DoseInRenalImpairmentGFR.ranges.forEach((im) => {
      const localId = `${id}_${i}`
      DoseInRenalImpairmentGFRRangesRDFInput.push({
        id: localId,
        ...im,
      })
      relations = relations.concat(
        generateRDFTemplate({
          object: `_:KidneyDrugs${id}`,
          predicate: 'KidneyDrugs.DoseInRenalImpairmentGFRRanges',
          value: `_:DoseInRenalImpairmentGFRRanges${localId}`,
        }),
      )
      i++
    })
    i = 1

    drug.DoseInPatientsUndergoingRenalReplacementTherapies.forEach((d) => {
      const localId = `${id}_${i}`
      DoseInPatientsUndergoingRenalReplacementTherapiesRDFInput.push({
        id: localId,
        ...d,
      })
      relations = relations.concat(
        generateRDFTemplate({
          object: `_:KidneyDrugs${id}`,
          predicate:
            'KidneyDrugs.DoseInPatientsUndergoingRenalReplacementTherapies',
          value: `_:DoseInPatientsUndergoingRenalReplacementTherapies${localId}`,
        }),
      )
      i++
    })
    i = 1

    drug.Administration.forEach((a) => {
      const localId = `${id}_${i}`
      RenalDrugsAdministrationInput.push({
        id: localId,
        ...a,
      })
      relations = relations.concat(
        generateRDFTemplate({
          object: `_:KidneyDrugs${id}`,
          predicate: 'KidneyDrugs.RenalDrugsAdministration',
          value: `_:Administration${localId}`,
        }),
      )
      i++
    })
  })

  DrugKidneyInput.forEach((e) => {
    template = template.concat(
      transformObjectToRDF({
        object: e,
        type: 'KidneyDrugs',
        uid: e.id,
      }),
    )
  })
  PharmacokineticsInput.forEach((e) => {
    template = template.concat(
      transformObjectToRDF({
        object: e,
        type: 'Pharmacokinetics',
        uid: e.id,
      }),
    )
  })
  DoseInRenalImpairmentGFRRangesRDFInput.forEach((e) => {
    template = template.concat(
      transformObjectToRDF({
        object: e,
        type: 'DoseInRenalImpairmentGFRRanges',
        uid: e.id,
      }),
    )
  })
  DoseInPatientsUndergoingRenalReplacementTherapiesRDFInput.forEach((e) => {
    template = template.concat(
      transformObjectToRDF({
        object: e,
        type: 'DoseInPatientsUndergoingRenalReplacementTherapies',
        uid: e.id,
      }),
    )
  })
  RenalDrugsAdministrationInput.forEach((e) => {
    template = template.concat(
      transformObjectToRDF({
        object: e,
        type: 'RenalDrugsAdministration',
        uid: e.id,
      }),
    )
  })

  template = template.concat(relations)

  fs.writeFileSync('./src/generatedRDF/KidneyDrugs.rdf', template, 'utf-8')

  console.timeLog('processTimer')
}
