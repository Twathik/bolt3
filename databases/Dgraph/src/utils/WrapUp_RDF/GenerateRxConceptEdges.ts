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
    doublet.push({ firstEdge: data.rxcui, secondEdge: cl.minConcept.rxcui })
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
export const GenerateRxConceptEdges = () => {
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
 # RXNav concepts minConcept/childConcept relations
 ################
 `)

  doublet.forEach((d) => {
    template = template
      .concat(
        generateRDFTemplate({
          object: `_:RxConcept${d.firstEdge}`,
          predicate: `RxConcept.minConcept`,
          value: `_:RxConcept${d.secondEdge}`,
        }),
      )
      .concat(
        generateRDFTemplate({
          object: `_:RxConcept${d.secondEdge}`,
          predicate: `RxConcept.childConcept`,
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
    './src/generatedRDF/RXconcepts_minConcept_childConcept.rdf',
    template,
    'utf-8',
  )

  console.timeLog('processTimer')
}
