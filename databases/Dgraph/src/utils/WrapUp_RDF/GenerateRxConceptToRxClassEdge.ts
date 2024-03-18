import fs from 'fs'
import cliProgress from 'cli-progress'
import {
  RxConceptToClassRelationType,
  rxNavDrugClassifications,
} from '../../interfaces/rxDrugsInterfaces'
import { uniqueArray } from '../arrayUnique'
import { generateRDFTemplate } from '../generateRDFTemplate'

const formatData = ({
  data,
}: {
  data: rxNavDrugClassifications
}): {
  firstEdge: string
  secondEdge: string
  rela: RxConceptToClassRelationType
}[] => {
  let doublet: {
    firstEdge: string
    secondEdge: string
    rela: RxConceptToClassRelationType
  }[] = []
  data.classes.forEach((cl) => {
    doublet.push({
      firstEdge: cl.minConcept.rxcui,
      secondEdge: cl.rxclassMinConceptItem.classId,
      rela:
        cl.rela === ''
          ? cl.rxclassMinConceptItem.classType === 'ATC1-4'
            ? 'ATC4'
            : cl.rxclassMinConceptItem.classType === 'MESHPA'
            ? 'MESHPA'
            : cl.rela
          : cl.rela,
    })
  })
  return doublet
}

const ReadClassesFiles = ({
  dir,
  progressBar,
}: {
  dir: string
  progressBar: cliProgress.SingleBar
}): {
  firstEdge: string
  secondEdge: string
  rela: RxConceptToClassRelationType
}[] => {
  let doublet: {
    firstEdge: string
    secondEdge: string
    rela: RxConceptToClassRelationType
  }[] = []
  const classDir = `./src/ReadyToUseDB/RXnavDrugs/${dir}/`
  const rxClasses = fs.readdirSync(classDir)
  console.log(
    `
  #######################################
  Linking  ${dir} in progress ...
  #######################################`,
  )

  progressBar.start(rxClasses.length, 0)
  for (const file of rxClasses) {
    const rawData = fs.readFileSync(classDir.concat(file))
    const data = JSON.parse(rawData.toString()) as rxNavDrugClassifications
    const formattedData = formatData({ data })
    doublet.push(...formattedData)
    progressBar.increment()
  }
  progressBar.stop()

  return doublet
}
export const GenerateRxConceptToRxClassEdge = () => {
  let template: string = ''
  let doublet: {
    firstEdge: string
    secondEdge: string
    rela: RxConceptToClassRelationType
  }[] = []
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )

  const RxNavDirs = ['ATC', 'FDASPL', 'MEDRT', 'MESH', 'VA']

  RxNavDirs.forEach((dir) => {
    const generated = ReadClassesFiles({ dir, progressBar })
    doublet = [...doublet, ...generated]
  })

  doublet = uniqueArray(doublet, ['firstEdge', 'secondEdge', 'rela'])
  template = template.concat(`

 ################
 # RXNav concepts and class relations
 ################
 `)

  doublet.forEach((d) => {
    template = template
      .concat(
        generateRDFTemplate({
          object: `_:RxConcept${d.firstEdge}`,
          predicate: `RxConcept.class_${d.rela}`,
          value: `_:RxClass${d.secondEdge}`,
        }),
      )
      .concat(
        generateRDFTemplate({
          object: `_:RxClass${d.secondEdge}`,
          predicate: `RxClass.concept_${d.rela}`,
          value: `_:RxConcept${d.firstEdge}`,
        }),
      )
  })
  console.log(
    `
  #######################################
  Writing File in progress ...
  #######################################`,
  )

  fs.writeFileSync(
    './src/generatedRDF/RXclass_RXconcept_relation.rdf',
    template,
    'utf-8',
  )

  console.timeLog('processTimer')
}
