import fs from 'fs'
import {
  formattedRxClass,
  formattedRxConcept,
  RxDrugsInteractions,
  rxNavDrugClassifications,
} from '../../interfaces/rxDrugsInterfaces'
import cliProgress from 'cli-progress'
import _ from 'lodash'
import { transformObjectToRDF } from '../generateRDFTemplate'

const formatData = ({
  data,
}: {
  data: rxNavDrugClassifications
}): {
  addRxConceptInputs: formattedRxConcept[]
  addRxClassConceptInputs: formattedRxClass[]
} => {
  let addRxConceptInputs: formattedRxConcept[] = []
  let addRxClassConceptInputs: formattedRxClass[] = []

  addRxConceptInputs.push({ name: data.name, rxcui: data.rxcui })

  data.classes.forEach((cl) => {
    addRxConceptInputs.push(cl.minConcept)
    cl.graph.rxclassGraph.rxclassMinConceptItem.forEach((item) => {
      addRxClassConceptInputs.push({
        name: item.className,
        classId: item.classId,
      })
    })
  })

  return {
    addRxClassConceptInputs,
    addRxConceptInputs,
  }
}
const ReadClassesFiles = ({
  dir,
  progressBar,
}: {
  dir: string
  progressBar: cliProgress.SingleBar
}): {
  addRxConceptInputs: formattedRxConcept[]
  addRxClassConceptInputs: formattedRxClass[]
} => {
  let addRxConceptInputs: formattedRxConcept[] = []
  let addRxClassConceptInputs: formattedRxClass[] = []
  const classDir = `./src/ReadyToUseDB/RXnavDrugs/${dir}/`
  const rxClasses = fs.readdirSync(classDir)

  console.log(
    `
  #######################################
  Formatting Rx classes and concepts of ${dir} in progress ...
  #######################################`,
  )

  progressBar.start(rxClasses.length, 0)

  for (const file of rxClasses) {
    const rawData = fs.readFileSync(classDir.concat(file))
    const data = JSON.parse(rawData.toString()) as rxNavDrugClassifications
    const formattedData = formatData({ data })
    addRxConceptInputs.push(...formattedData.addRxConceptInputs)
    addRxClassConceptInputs.push(...formattedData.addRxClassConceptInputs)
    progressBar.increment()
  }
  progressBar.stop()
  console.timeLog('processTimer')

  return {
    addRxClassConceptInputs,
    addRxConceptInputs,
  }
}

export const GenerateRxClassesAndConcepts = () => {
  let template: string = ''
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )
  let addRxConceptInputs: formattedRxConcept[] = []
  let addRxClassConceptInputs: formattedRxClass[] = []
  const RxNavDirs = ['ATC', 'FDASPL', 'MEDRT', 'MESH', 'VA']

  RxNavDirs.forEach((dir) => {
    const generated = ReadClassesFiles({ dir, progressBar })
    addRxConceptInputs = [
      ...addRxConceptInputs,
      ...generated.addRxConceptInputs,
    ]
    addRxClassConceptInputs = [
      ...addRxClassConceptInputs,
      ...generated.addRxClassConceptInputs,
    ]
  })
  progressBar.stop()

  console.log(
    `
  #######################################
  Formatting Rx class and concepts in progress ...
  #######################################`,
  )
  const interactionDir = './src/ReadyToUseDB/RXnavDrugs/Interactions/'
  const interactionDataDir = fs.readdirSync(interactionDir, 'utf-8')

  progressBar.start(interactionDataDir.length, 0)

  interactionDataDir.forEach((file) => {
    const interactionDataRaw = fs.readFileSync(interactionDir.concat(file))
    const interaction = JSON.parse(
      interactionDataRaw.toString(),
    ) as RxDrugsInteractions

    interaction.interactionTypeGroup?.forEach((interactionGroup) => {
      interactionGroup.interactionType.forEach((interactionType) => {
        addRxConceptInputs.push(interactionType.minConceptItem)
        interactionType.interactionPair.forEach((interactionPair) => {
          interactionPair.interactionConcept.forEach((interactionConcept) => {
            addRxConceptInputs.push(interactionConcept.minConceptItem)
          })
        })
      })
    })

    progressBar.increment()
  })

  progressBar.stop()

  console.log(
    `
  #######################################
  Final formatting in progress ...
  #######################################`,
  )
  template = template.concat(`

 ################
 # RXNav concepts
 ################
 `)
  const GroupedAddRxConceptInputs = Object.entries(
    _.groupBy(addRxConceptInputs, 'rxcui'),
  )
  addRxConceptInputs = []
  for (const [key, value] of GroupedAddRxConceptInputs) {
    const tty = value.find((e) => e.tty)?.tty

    addRxConceptInputs.push({
      rxcui: key,
      name: value[0].name,
      tty: tty ? tty : '',
    })
  }

  addRxConceptInputs.forEach((concept) => {
    template = template.concat(
      transformObjectToRDF({
        object: concept,
        type: 'RxConcept',
        uid: concept.rxcui,
      }),
    )
  })

  template = template.concat(`

 ################
 # RXNav classes
 ################
 `)

  addRxClassConceptInputs = _.uniqBy(addRxClassConceptInputs, 'classId')
  addRxClassConceptInputs.forEach((cl) => {
    template = template.concat(
      transformObjectToRDF({ object: cl, type: 'RxClass', uid: cl.classId }),
    )
  })

  console.log(
    `
  #######################################
  Writing File in progress ...
  #######################################`,
  )

  fs.writeFileSync(
    './src/generatedRDF/GenerateRxClassesAndConcepts.rdf',
    template,
    'utf-8',
  )

  console.timeLog('processTimer')
}
