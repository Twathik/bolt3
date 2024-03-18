import fs from 'fs'
import cliProgress from 'cli-progress'
import { rxNavDrugClassifications } from '../../interfaces/rxDrugsInterfaces'
import { uniqueArray } from '../arrayUnique'
import { generateRDFTemplate } from '../generateRDFTemplate'

const formatData = ({
  data,
}: {
  data: rxNavDrugClassifications
}): { firstEdge: string; secondEdge: string }[] => {
  let doublet: { firstEdge: string; secondEdge: string }[] = []
  data.classes.forEach((cl) => {
    cl.graph.rxclassGraph.rxclassEdge?.forEach((edge) => {
      doublet.push({ firstEdge: edge.classId1, secondEdge: edge.classId2 })
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
}): { firstEdge: string; secondEdge: string }[] => {
  let doublet: { firstEdge: string; secondEdge: string }[] = []
  const classDir = `./src/ReadyToUseDB/RXnavDrugs/${dir}/`
  const rxClasses = fs.readdirSync(classDir)
  console.log(
    `
  #######################################
  Linking Rx concepts of ${dir} in progress ...
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
export const GenerateRxClassEdges = () => {
  let template: string = ''
  let doublet: { firstEdge: string; secondEdge: string }[] = []
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )

  const RxNavDirs = ['ATC', 'FDASPL', 'MEDRT', 'MESH', 'VA']

  RxNavDirs.forEach((dir) => {
    const generated = ReadClassesFiles({ dir, progressBar })
    doublet = [...doublet, ...generated]
  })

  doublet = uniqueArray(doublet, ['firstEdge', 'secondEdge'])
  template = template.concat(`

 ################
 # RXNav concepts parentClass/childClass relations
 ################
 `)

  doublet.forEach((d) => {
    template = template
      .concat(
        generateRDFTemplate({
          object: `_:RxClass${d.firstEdge}`,
          predicate: `RxClass.parentClass`,
          value: `_:RxClass${d.secondEdge}`,
        }),
      )
      .concat(
        generateRDFTemplate({
          object: `_:RxClass${d.secondEdge}`,
          predicate: `RxClass.childClass`,
          value: `_:RxClass${d.firstEdge}`,
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
    './src/generatedRDF/RXclass_parentClass_childClass.rdf',
    template,
    'utf-8',
  )

  console.timeLog('processTimer')
}
