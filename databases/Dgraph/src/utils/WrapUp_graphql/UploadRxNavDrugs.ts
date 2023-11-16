import fs from 'fs'
import {
  AddRxClassConceptInput,
  AddRxConceptInput,
  RxClassTypes,
} from '../../graphql.sdk'
import cliProgress from 'cli-progress'
import {
  RxConceptToClassRelationType,
  rxNavDrugClassifications,
  rx_classType,
} from '../../interfaces/rxDrugsInterfaces'
import { graphqlSdk } from '../graphQlRequestClient'
import _ from 'lodash'
// import { graphqlSdk } from '../graphQlRequestClient'

const getRxClassType = ({
  classType,
}: {
  classType: rx_classType
}): RxClassTypes => {
  switch (classType) {
    case 'ATC1-4':
      return RxClassTypes.Atc1_4
    case 'EPC':
      return RxClassTypes.Epc
    case 'MOA':
      return RxClassTypes.Moa
    case 'CHEM':
      return RxClassTypes.Chem
    case 'PE':
      return RxClassTypes.Pe
    case 'DISEASE':
      return RxClassTypes.Disease
    case 'PK':
      return RxClassTypes.Pk
    case 'MESHPA':
      return RxClassTypes.Meshpa
    case 'VA':
      return RxClassTypes.Meshpa
    default:
      console.log({ classType })
      throw Error('not recognized type')
  }
}

const linkToSpecificRxClass = ({
  relationType,
  minConcept,
  classId,
}: {
  relationType: RxConceptToClassRelationType
  minConcept: {
    rxcui: string
    name: string
    tty: string
  }
  classId: string
}): AddRxClassConceptInput[] => {
  switch (relationType) {
    case 'ATC4':
      return [
        {
          classId,
          class_ATC4: [{ ...minConcept }],
        },
      ]
    case 'MESHPA':
      return [
        {
          classId,
          class_MESHPA: [{ ...minConcept }],
        },
      ]
    case 'ci_chemclass':
      return [
        {
          classId,
          class_ci_chemclass: [{ ...minConcept }],
        },
      ]
    case 'ci_moa':
      return [
        {
          classId,
          class_ci_moa: [{ ...minConcept }],
        },
      ]
    case 'ci_pe':
      return [
        {
          classId,
          class_ci_pe: [{ ...minConcept }],
        },
      ]
    case 'ci_with':
      return [
        {
          classId,
          class_ci_with: [{ ...minConcept }],
        },
      ]
    case 'has_VAClass':
      return [
        {
          classId,
          class_has_VAClass: [{ ...minConcept }],
        },
      ]
    case 'has_VAClass_extended':
      return [
        {
          classId,
          class_has_VAClass_extended: [{ ...minConcept }],
        },
      ]
    case 'has_active_metabolites':
      return [
        {
          classId,
          class_has_active_metabolites: [{ ...minConcept }],
        },
      ]
    case 'has_chemical_structure':
      return [
        {
          classId,
          class_has_chemical_structure: [{ ...minConcept }],
        },
      ]
    case 'has_epc':
      return [
        {
          classId,
          class_has_epc: [{ ...minConcept }],
        },
      ]
    case 'has_ingredient':
      return [
        {
          classId,
          class_has_ingredient: [{ ...minConcept }],
        },
      ]
    case 'has_moa':
      return [
        {
          classId,
          class_has_moa: [{ ...minConcept }],
        },
      ]
    case 'has_pe':
      return [
        {
          classId,
          class_has_pe: [{ ...minConcept }],
        },
      ]
    case 'has_pk':
      return [
        {
          classId,
          class_has_pk: [{ ...minConcept }],
        },
      ]
    case 'induces':
      return [
        {
          classId,
          class_induces: [{ ...minConcept }],
        },
      ]
    case 'may_diagnose':
      return [
        {
          classId,
          class_may_diagnose: [{ ...minConcept }],
        },
      ]
    case 'may_prevent':
      return [
        {
          classId,
          class_may_prevent: [{ ...minConcept }],
        },
      ]
    case 'may_treat':
      return [
        {
          classId,
          class_may_treat: [{ ...minConcept }],
        },
      ]
    case 'site_of_metabolism':
      return [
        {
          classId,
          class_site_of_metabolism: [{ ...minConcept }],
        },
      ]

    default:
      console.log({ relationType })
      throw Error('not recognized type')
  }
}
const linkToSpecificRxConcept = ({
  classId,
  relationType,
  minConcept,
}: {
  classId: string
  relationType: RxConceptToClassRelationType
  minConcept: {
    rxcui: string
    name: string
    tty: string
  }
}): AddRxConceptInput[] => {
  switch (relationType) {
    case 'ATC4':
      return [
        {
          ...minConcept,
          concept_ATC4: [{ classId }],
        },
      ]
    case 'MESHPA':
      return [
        {
          ...minConcept,
          concept_MESHPA: [{ classId }],
        },
      ]
    case 'ci_chemclass':
      return [
        {
          ...minConcept,
          concept_ci_chemclass: [{ classId }],
        },
      ]
    case 'ci_moa':
      return [
        {
          ...minConcept,
          concept_ci_moa: [{ classId }],
        },
      ]
    case 'ci_pe':
      return [
        {
          ...minConcept,
          concept_ci_pe: [{ classId }],
        },
      ]
    case 'ci_with':
      return [
        {
          ...minConcept,
          concept_ci_with: [{ classId }],
        },
      ]
    case 'has_VAClass':
      return [
        {
          ...minConcept,
          concept_has_VAClass: [{ classId }],
        },
      ]
    case 'has_VAClass_extended':
      return [
        {
          ...minConcept,
          concept_has_VAClass_extended: [{ classId }],
        },
      ]
    case 'has_active_metabolites':
      return [
        {
          ...minConcept,
          concept_has_active_metabolites: [{ classId }],
        },
      ]
    case 'has_chemical_structure':
      return [
        {
          ...minConcept,
          concept_has_chemical_structure: [{ classId }],
        },
      ]
    case 'has_epc':
      return [
        {
          ...minConcept,

          concept_has_epc: [{ classId }],
        },
      ]
    case 'has_ingredient':
      return [
        {
          ...minConcept,
          concept_has_ingredient: [{ classId }],
        },
      ]
    case 'has_moa':
      return [
        {
          ...minConcept,
          concept_has_moa: [{ classId }],
        },
      ]
    case 'has_pe':
      return [
        {
          ...minConcept,
          concept_has_pe: [{ classId }],
        },
      ]
    case 'has_pk':
      return [
        {
          ...minConcept,
          concept_has_pk: [{ classId }],
        },
      ]
    case 'induces':
      return [
        {
          ...minConcept,
          concept_induces: [{ classId }],
        },
      ]
    case 'may_diagnose':
      return [
        {
          ...minConcept,
          concept_may_diagnose: [{ classId }],
        },
      ]
    case 'may_prevent':
      return [
        {
          ...minConcept,
          concept_may_prevent: [{ classId }],
        },
      ]
    case 'may_treat':
      return [
        {
          ...minConcept,
          concept_may_treat: [{ classId }],
        },
      ]
    case 'site_of_metabolism':
      return [
        {
          ...minConcept,
          concept_site_of_metabolism: [{ classId }],
        },
      ]

    default:
      console.log({ relationType })
      throw Error('not recognized type')
  }
}

const formatData = async ({
  data,
}: {
  data: rxNavDrugClassifications
}): Promise<{
  addRxConceptInput: AddRxConceptInput[]
  AddRxClassConceptInput: AddRxClassConceptInput[]
  relationsTypes: string[]
  RxClassesTypes: string[]
}> => {
  let addRxConceptInput: AddRxConceptInput[] = []
  let AddRxClassConceptInput: AddRxClassConceptInput[] = []
  let RxClassesTypes: string[] = []
  let relationsTypes: string[] = []
  try {
    addRxConceptInput.push({
      name: data.name,
      rxcui: data.rxcui,
      minConcept: _.uniqBy(
        data.classes
          .map((rxClass) => rxClass.minConcept)
          .filter((rx) => rx.rxcui !== data.rxcui),
        'rxcui',
      ),
    })

    if (data.classes.length > 0)
      for (const rxAllClass of data.classes) {
        relationsTypes.push(rxAllClass.rela)
        addRxConceptInput.push({
          rxcui: rxAllClass.minConcept.rxcui,
          name: rxAllClass.minConcept.name,
          concepts: [{ rxcui: data.rxcui, name: data.name }],
        })

        for (const rxClass of rxAllClass.graph.rxclassGraph
          .rxclassMinConceptItem) {
          AddRxClassConceptInput.push({
            classId: rxClass.classId,
            rxClassName: rxClass.className,
            rxClassType: getRxClassType({
              classType: rxClass.classType,
            }),
          })
          RxClassesTypes.push(rxClass.classType)
        }
        if (
          rxAllClass.graph.rxclassGraph.rxclassEdge &&
          rxAllClass.graph.rxclassGraph.rxclassEdge?.length > 0
        )
          for (const rxclassEdge of rxAllClass.graph.rxclassGraph.rxclassEdge) {
            AddRxClassConceptInput.push({
              classId: rxclassEdge.classId1,
              parentClass: [{ classId: rxclassEdge.classId2 }],
            })
            AddRxClassConceptInput.push({
              classId: rxclassEdge.classId2,
              childClasses: [{ classId: rxclassEdge.classId1 }],
            })
          }
      }

    if (data.classes.length > 0)
      for (const rxAllClass of data.classes) {
        relationsTypes.push(rxAllClass.rela)

        addRxConceptInput.push(
          ...linkToSpecificRxConcept({
            classId: rxAllClass.rxclassMinConceptItem.classId,
            relationType:
              rxAllClass.rela === ''
                ? rxAllClass.rxclassMinConceptItem.classType === 'ATC1-4'
                  ? 'ATC4'
                  : rxAllClass.rxclassMinConceptItem.classType === 'MESHPA'
                  ? 'MESHPA'
                  : rxAllClass.rela
                : rxAllClass.rela,
            minConcept: rxAllClass.minConcept,
          }),
        )

        AddRxClassConceptInput.push(
          ...linkToSpecificRxClass({
            minConcept: rxAllClass.minConcept,
            relationType:
              rxAllClass.rela === ''
                ? rxAllClass.rxclassMinConceptItem.classType === 'ATC1-4'
                  ? 'ATC4'
                  : rxAllClass.rxclassMinConceptItem.classType === 'MESHPA'
                  ? 'MESHPA'
                  : rxAllClass.rela
                : rxAllClass.rela,
            classId: rxAllClass.rxclassMinConceptItem.classId,
          }),
        )
      }

    RxClassesTypes = _.uniq(RxClassesTypes)
    relationsTypes = _.uniq(relationsTypes)
  } catch (error) {
    console.dir({ error, dataName: data.name }, { depth: 10 })
  }
  return {
    relationsTypes,
    RxClassesTypes,
    addRxConceptInput,
    AddRxClassConceptInput,
  }
}

export const RxNavClassGenerator = async ({
  className,
  progressBar,
}: {
  className: string
  progressBar: cliProgress.SingleBar
}): Promise<{
  addRxConceptInput: AddRxConceptInput[]
  AddRxClassConceptInput: AddRxClassConceptInput[]
}> => {
  console.log(
    `
  #######################################
  Rx classes ${className} in progress ...
  #######################################`,
  )
  const classDir = `./src/ReadyToUseDB/RXnavDrugs/${className}/`
  const rxClasses = fs.readdirSync(classDir)

  progressBar.start(rxClasses.length, 0)

  // let RxClassesTypes: string[] = []
  // let relationsTypes: string[] = []
  let addRxConceptInput: AddRxConceptInput[] = []
  let AddRxClassConceptInput: AddRxClassConceptInput[] = []

  for (const file of rxClasses) {
    const rawData = fs.readFileSync(classDir.concat(file))
    const data = JSON.parse(rawData.toString()) as rxNavDrugClassifications
    const formattedData = await formatData({ data })
    // RxClassesTypes = [...RxClassesTypes, ...formattedData.RxClassesTypes]
    // relationsTypes = [...relationsTypes, ...formattedData.relationsTypes]
    addRxConceptInput = [
      ...addRxConceptInput,
      ...formattedData.addRxConceptInput,
    ]
    AddRxClassConceptInput = [
      ...AddRxClassConceptInput,
      ...formattedData.AddRxClassConceptInput,
    ]
    progressBar.increment()
  }
  progressBar.stop()
  console.timeLog('processTimer')

  // RxClassesTypes = _.uniq(RxClassesTypes)
  // relationsTypes = _.uniq(relationsTypes)
  // console.log({ className, RxClassesTypes, relationsTypes })

  return { AddRxClassConceptInput, addRxConceptInput }
}

export const UploadRxNavDrugs = async () => {
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )
  let addRxConceptInput: AddRxConceptInput[] = []
  let AddRxClassConceptInput: AddRxClassConceptInput[] = []

  try {
    const ATCResult = await RxNavClassGenerator({
      className: 'ATC',
      progressBar,
    })
    const VAResult = await RxNavClassGenerator({ className: 'VA', progressBar })
    const MESHResult = await RxNavClassGenerator({
      className: 'MESH',
      progressBar,
    })
    const FDASPLResult = await RxNavClassGenerator({
      className: 'FDASPL',
      progressBar,
    })
    const MEDRTResult = await RxNavClassGenerator({
      className: 'MEDRT',
      progressBar,
    })
    addRxConceptInput.push(...ATCResult.addRxConceptInput)
    addRxConceptInput.push(...VAResult.addRxConceptInput)
    addRxConceptInput.push(...MESHResult.addRxConceptInput)
    addRxConceptInput.push(...FDASPLResult.addRxConceptInput)
    addRxConceptInput.push(...MEDRTResult.addRxConceptInput)

    AddRxClassConceptInput.push(...ATCResult.AddRxClassConceptInput)

    const VAResultChunks = _.chunk(VAResult.AddRxClassConceptInput, 5000)
    VAResultChunks.forEach((v) => {
      try {
        AddRxClassConceptInput.push(...v)
      } catch (error) {
        console.log({ error })
      }
    })

    AddRxClassConceptInput.push(...MESHResult.AddRxClassConceptInput)
    AddRxClassConceptInput.push(...FDASPLResult.AddRxClassConceptInput)
    const MEDRTResultChunks = _.chunk(MEDRTResult.AddRxClassConceptInput, 5000)
    MEDRTResultChunks.forEach((v) => AddRxClassConceptInput.push(...v))

    const groupedAddRxConceptInput = _.groupBy(addRxConceptInput, 'rxcui')
    addRxConceptInput = []

    console.log(
      `
  #######################################
  Formating Add concepts in progress ...
  #######################################`,
    )

    const groupedAddRxConceptInputEntries = Object.entries(
      groupedAddRxConceptInput,
    )
    progressBar.start(groupedAddRxConceptInputEntries.length, 0)

    for (const [key, value] of groupedAddRxConceptInputEntries) {
      const concepts: AddRxConceptInput['concepts'] = []
      const minConcept: AddRxConceptInput['minConcept'] = []
      const concept_ATC4: AddRxConceptInput['concept_ATC4'] = []
      const concept_MESHPA: AddRxConceptInput['concept_MESHPA'] = []
      const concept_ci_chemclass: AddRxConceptInput['concept_ci_chemclass'] = []
      const concept_ci_moa: AddRxConceptInput['concept_ci_moa'] = []
      const concept_ci_pe: AddRxConceptInput['concept_ci_pe'] = []
      const concept_ci_with: AddRxConceptInput['concept_ci_with'] = []
      const concept_has_VAClass: AddRxConceptInput['concept_has_VAClass'] = []
      const concept_has_VAClass_extended: AddRxConceptInput['concept_has_VAClass_extended'] =
        []
      const concept_has_active_metabolites: AddRxConceptInput['concept_has_active_metabolites'] =
        []
      const concept_has_chemical_structure: AddRxConceptInput['concept_has_chemical_structure'] =
        []
      const concept_has_epc: AddRxConceptInput['concept_has_epc'] = []
      const concept_has_ingredient: AddRxConceptInput['concept_has_ingredient'] =
        []
      const concept_has_moa: AddRxConceptInput['concept_has_moa'] = []
      const concept_has_pe: AddRxConceptInput['concept_has_pe'] = []
      const concept_has_pk: AddRxConceptInput['concept_has_pk'] = []
      const concept_induces: AddRxConceptInput['concept_induces'] = []
      const concept_may_diagnose: AddRxConceptInput['concept_may_diagnose'] = []
      const concept_may_prevent: AddRxConceptInput['concept_may_prevent'] = []
      const concept_may_treat: AddRxConceptInput['concept_may_treat'] = []
      const concept_site_of_metabolism: AddRxConceptInput['concept_site_of_metabolism'] =
        []

      value.forEach((e) => {
        if (e.concepts) concepts.push(...e.concepts)
        if (e.minConcept) minConcept.push(...e.minConcept)
        if (e.concept_ATC4) concept_ATC4.push(...e.concept_ATC4)
        if (e.concept_MESHPA) concept_MESHPA.push(...e.concept_MESHPA)
        if (e.concept_ci_chemclass)
          concept_ci_chemclass.push(...e.concept_ci_chemclass)
        if (e.concept_ci_moa) concept_ci_moa.push(...e.concept_ci_moa)
        if (e.concept_ci_pe) concept_ci_pe.push(...e.concept_ci_pe)
        if (e.concept_ci_with) concept_ci_with.push(...e.concept_ci_with)
        if (e.concept_has_VAClass)
          concept_has_VAClass.push(...e.concept_has_VAClass)
        if (e.concept_has_VAClass_extended)
          concept_has_VAClass_extended.push(...e.concept_has_VAClass_extended)
        if (e.concept_has_active_metabolites)
          concept_has_active_metabolites.push(
            ...e.concept_has_active_metabolites,
          )
        if (e.concept_has_chemical_structure)
          concept_has_chemical_structure.push(
            ...e.concept_has_chemical_structure,
          )
        if (e.concept_has_epc) concept_has_epc.push(...e.concept_has_epc)
        if (e.concept_has_ingredient)
          concept_has_ingredient.push(...e.concept_has_ingredient)
        if (e.concept_has_moa) concept_has_moa.push(...e.concept_has_moa)
        if (e.concept_has_pe) concept_has_pe.push(...e.concept_has_pe)
        if (e.concept_has_pk) concept_has_pk.push(...e.concept_has_pk)
        if (e.concept_induces) concept_induces.push(...e.concept_induces)
        if (e.concept_may_diagnose)
          concept_may_diagnose.push(...e.concept_may_diagnose)
        if (e.concept_may_prevent)
          concept_may_prevent.push(...e.concept_may_prevent)
        if (e.concept_may_treat) concept_may_treat.push(...e.concept_may_treat)
        if (e.concept_site_of_metabolism)
          concept_site_of_metabolism.push(...e.concept_site_of_metabolism)
      })

      const input: AddRxConceptInput = { rxcui: key, name: value[0].name }
      if (concepts.length > 0)
        input['concepts'] = _.uniqBy(
          concepts.filter((e) => e?.rxcui !== key),
          'rxcui',
        )
      if (minConcept.length > 0)
        input['minConcept'] = _.uniqBy(
          minConcept
            .filter((e) => e?.rxcui !== key)
            .filter((e) => !concepts.map((c) => c?.rxcui).includes(e?.rxcui)),
          'rxcui',
        )
      if (concept_ATC4.length) input['concept_ATC4'] = concept_ATC4
      if (concept_ATC4.length > 0) input['concept_ATC4'] = concept_ATC4
      if (concept_MESHPA.length > 0) input['concept_MESHPA'] = concept_MESHPA
      if (concept_ci_chemclass.length > 0)
        input['concept_ci_chemclass'] = concept_ci_chemclass
      if (concept_ci_moa.length > 0) input['concept_ci_moa'] = concept_ci_moa
      if (concept_ci_pe.length > 0) input['concept_ci_pe'] = concept_ci_pe
      if (concept_ci_with.length > 0) input['concept_ci_with'] = concept_ci_with
      if (concept_has_VAClass.length > 0)
        input['concept_has_VAClass'] = concept_has_VAClass
      if (concept_has_VAClass_extended.length > 0)
        input['concept_has_VAClass_extended'] = concept_has_VAClass_extended
      if (concept_has_active_metabolites.length > 0)
        input['concept_has_active_metabolites'] = concept_has_active_metabolites
      if (concept_has_chemical_structure.length > 0)
        input['concept_has_chemical_structure'] = concept_has_chemical_structure
      if (concept_has_epc.length > 0) input['concept_has_epc'] = concept_has_epc
      if (concept_has_ingredient.length > 0)
        input['concept_has_ingredient'] = concept_has_ingredient
      if (concept_has_moa.length > 0) input['concept_has_moa'] = concept_has_moa
      if (concept_has_pe.length > 0) input['concept_has_pe'] = concept_has_pe
      if (concept_has_pk.length > 0) input['concept_has_pk'] = concept_has_pk
      if (concept_induces.length > 0) input['concept_induces'] = concept_induces
      if (concept_may_diagnose.length > 0)
        input['concept_may_diagnose'] = concept_may_diagnose
      if (concept_may_prevent.length > 0)
        input['concept_may_prevent'] = concept_may_prevent
      if (concept_may_treat.length > 0)
        input['concept_may_treat'] = concept_may_treat
      if (concept_site_of_metabolism.length > 0)
        input['concept_site_of_metabolism'] = concept_site_of_metabolism

      addRxConceptInput.push(input)
      progressBar.increment()
    }

    progressBar.stop()
    console.timeLog('processTimer')

    console.log(
      `
  #######################################
  Formating Add concepts  done !
  #######################################`,
    )

    console.log(
      `
  #######################################
  Add concepts in progress ...
  #######################################`,
    )
    try {
      progressBar.start(addRxConceptInput.length, 0)
      for (const input of addRxConceptInput) {
        await graphqlSdk.addRXConcept({
          upsert: true,
          input,
        })
        progressBar.increment()
      }
    } catch (error) {
      console.dir({ error }, { depth: 8 })
    }

    progressBar.stop()
    console.timeLog('processTimer')

    console.log(
      `
  #######################################
  Add concepts done!
  #######################################`,
    )

    console.log(
      `
  #######################################
  Format to Add classes in progress ...
  #######################################`,
    )

    const groupedAddRxClassConceptInput = _.groupBy(
      AddRxClassConceptInput,
      'classId',
    )
    const groupedAddRxClassConceptInputEntries = Object.entries(
      groupedAddRxClassConceptInput,
    )

    AddRxClassConceptInput = []
    progressBar.start(groupedAddRxClassConceptInputEntries.length, 0)

    for (const [key, value] of groupedAddRxClassConceptInputEntries) {
      const parentClass: AddRxClassConceptInput['parentClass'] = []
      const childClasses: AddRxClassConceptInput['childClasses'] = []
      const class_ATC4: AddRxClassConceptInput['class_ATC4'] = []
      const class_MESHPA: AddRxClassConceptInput['class_MESHPA'] = []
      const class_ci_chemclass: AddRxClassConceptInput['class_ci_chemclass'] =
        []
      const class_ci_moa: AddRxClassConceptInput['class_ci_moa'] = []
      const class_ci_pe: AddRxClassConceptInput['class_ci_pe'] = []
      const class_ci_with: AddRxClassConceptInput['class_ci_with'] = []
      const class_has_VAClass: AddRxClassConceptInput['class_has_VAClass'] = []
      const class_has_VAClass_extended: AddRxClassConceptInput['class_has_VAClass_extended'] =
        []
      const class_has_active_metabolites: AddRxClassConceptInput['class_has_active_metabolites'] =
        []
      const class_has_chemical_structure: AddRxClassConceptInput['class_has_chemical_structure'] =
        []
      const class_has_epc: AddRxClassConceptInput['class_has_epc'] = []
      const class_has_ingredient: AddRxClassConceptInput['class_has_ingredient'] =
        []
      const class_has_moa: AddRxClassConceptInput['class_has_moa'] = []
      const class_has_pe: AddRxClassConceptInput['class_has_pe'] = []
      const class_has_pk: AddRxClassConceptInput['class_has_pk'] = []
      const class_induces: AddRxClassConceptInput['class_induces'] = []
      const class_may_diagnose: AddRxClassConceptInput['class_may_diagnose'] =
        []
      const class_may_prevent: AddRxClassConceptInput['class_may_prevent'] = []
      const class_may_treat: AddRxClassConceptInput['class_may_treat'] = []
      const class_site_of_metabolism: AddRxClassConceptInput['class_site_of_metabolism'] =
        []

      value.forEach((e) => {
        if (e.parentClass) parentClass.push(...e.parentClass)
        if (e.childClasses) childClasses.push(...e.childClasses)
        if (e.class_ATC4) class_ATC4.push(...e.class_ATC4)
        if (e.class_MESHPA) class_MESHPA.push(...e.class_MESHPA)
        if (e.class_ci_chemclass)
          class_ci_chemclass.push(...e.class_ci_chemclass)
        if (e.class_ci_moa) class_ci_moa.push(...e.class_ci_moa)
        if (e.class_ci_pe) class_ci_pe.push(...e.class_ci_pe)
        if (e.class_ci_with) class_ci_with.push(...e.class_ci_with)
        if (e.class_has_VAClass) class_has_VAClass.push(...e.class_has_VAClass)
        if (e.class_has_VAClass_extended)
          class_has_VAClass_extended.push(...e.class_has_VAClass_extended)
        if (e.class_has_active_metabolites)
          class_has_active_metabolites.push(...e.class_has_active_metabolites)
        if (e.class_has_chemical_structure)
          class_has_chemical_structure.push(...e.class_has_chemical_structure)
        if (e.class_has_epc) class_has_epc.push(...e.class_has_epc)
        if (e.class_has_ingredient)
          class_has_ingredient.push(...e.class_has_ingredient)
        if (e.class_has_moa) class_has_moa.push(...e.class_has_moa)
        if (e.class_has_pe) class_has_pe.push(...e.class_has_pe)
        if (e.class_has_pk) class_has_pk.push(...e.class_has_pk)
        if (e.class_induces) class_induces.push(...e.class_induces)
        if (e.class_may_diagnose)
          class_may_diagnose.push(...e.class_may_diagnose)
        if (e.class_may_prevent) class_may_prevent.push(...e.class_may_prevent)
        if (e.class_may_treat) class_may_treat.push(...e.class_may_treat)
        if (e.class_site_of_metabolism)
          class_site_of_metabolism.push(...e.class_site_of_metabolism)
      })
      const input: AddRxClassConceptInput = {
        classId: key,
        rxClassName: value[0].rxClassName,
        rxClassType: value[0].rxClassType,
      }
      if (parentClass.length > 0) input['parentClass'] = parentClass
      if (childClasses.length > 0) input['childClasses'] = childClasses
      if (class_ATC4.length > 0) input['class_ATC4'] = class_ATC4
      if (class_MESHPA.length > 0) input['class_MESHPA'] = class_MESHPA
      if (class_ci_chemclass.length > 0)
        input['class_ci_chemclass'] = class_ci_chemclass
      if (class_ci_moa.length > 0) input['class_ci_moa'] = class_ci_moa
      if (class_ci_pe.length > 0) input['class_ci_pe'] = class_ci_pe
      if (class_ci_with.length > 0) input['class_ci_with'] = class_ci_with
      if (class_has_VAClass.length > 0)
        input['class_has_VAClass'] = class_has_VAClass
      if (class_has_VAClass_extended.length > 0)
        input['class_has_VAClass_extended'] = class_has_VAClass_extended
      if (class_has_active_metabolites.length > 0)
        input['class_has_active_metabolites'] = class_has_active_metabolites
      if (class_has_chemical_structure.length > 0)
        input['class_has_chemical_structure'] = class_has_chemical_structure
      if (class_has_epc.length > 0) input['class_has_epc'] = class_has_epc
      if (class_has_ingredient.length > 0)
        input['class_has_ingredient'] = class_has_ingredient
      if (class_has_moa.length > 0) input['class_has_moa'] = class_has_moa
      if (class_has_pe.length > 0) input['class_has_pe'] = class_has_pe
      if (class_has_pk.length > 0) input['class_has_pk'] = class_has_pk
      if (class_induces.length > 0) input['class_induces'] = class_induces
      if (class_may_diagnose.length > 0)
        input['class_may_diagnose'] = class_may_diagnose
      if (class_may_prevent.length > 0)
        input['class_may_prevent'] = class_may_prevent
      if (class_may_treat.length > 0) input['class_may_treat'] = class_may_treat
      if (class_site_of_metabolism.length > 0)
        input['class_site_of_metabolism'] = class_site_of_metabolism

      AddRxClassConceptInput.push(input)
      progressBar.increment()
    }

    progressBar.stop()
    console.timeLog('processTimer')

    console.log(
      `
  #######################################
  Format to Add classes done!
  #######################################`,
    )

    console.log(
      `
  #######################################
  Add classes in progress ...
  #######################################`,
    )
    progressBar.start(AddRxClassConceptInput.length, 0)

    try {
      for (const input of AddRxClassConceptInput) {
        await graphqlSdk.addRXClassConcept({
          input,
          upsert: true,
        })
        progressBar.increment()
      }
    } catch (error) {
      console.dir({ error }, { depth: 10 })
    }

    progressBar.stop()

    console.log(
      `
  #######################################
  Add classes done!
  #######################################`,
    )
  } catch (error) {
    console.log({ mainError: error })
  }
  console.timeLog('processTimer')
}
