import fs from 'fs'
import cliProgress from 'cli-progress'
import { RxDrugsInteractions } from '../../interfaces/rxDrugsInterfaces'
import { uniqueArray } from '../arrayUnique'
import { generateRDFTemplate } from '../generateRDFTemplate'
import _ from 'lodash'

const formatData = ({
  data,
}: {
  data: RxDrugsInteractions
}): { firstEdge: string; secondEdge: string; description: string }[] => {
  let doublet: {
    firstEdge: string
    secondEdge: string
    description: string
  }[] = []
  data.interactionTypeGroup?.forEach((interactionTypeGroup) => {
    interactionTypeGroup.interactionType.forEach((interactionType) => {
      interactionType.interactionPair.forEach((interactionPair) => {
        const pairs = _.orderBy(
          interactionPair.interactionConcept,
          'minConceptItem.rxcui',
        )
        doublet.push({
          firstEdge: pairs[0].minConceptItem.rxcui,
          secondEdge: pairs[1].minConceptItem.rxcui,
          description: interactionPair.description,
        })
      })
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
}): { firstEdge: string; secondEdge: string; description: string }[] => {
  let doublet: {
    firstEdge: string
    secondEdge: string
    description: string
  }[] = []
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
    const data = JSON.parse(rawData.toString()) as RxDrugsInteractions
    const formattedData = formatData({ data })
    doublet.push(...formattedData)
    progressBar.increment()
  }
  progressBar.stop()

  return doublet
}
export const GenerateRxConceptInteractions = () => {
  let template: string = ''
  let doublet: {
    firstEdge: string
    secondEdge: string
    description: string
  }[] = []
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )

  const RxNavDirs = ['Interactions']

  RxNavDirs.forEach((dir) => {
    const generated = ReadClassesFiles({ dir, progressBar })
    doublet = [...doublet, ...generated]
  })

  doublet = uniqueArray(doublet, ['firstEdge', 'secondEdge', 'description'])

  template = template.concat(`

 ################
 # RXNav concepts interactions
 ################
 `)

  doublet.forEach((d) => {
    template = template
      .concat(
        generateRDFTemplate({
          object: `_:RxConcept${d.firstEdge}`,
          predicate: `RxConcept.interaction`,
          value: `_:RxConcept${d.secondEdge}`,
          facet: [{ facetName: 'description', value: d.description }],
        }),
      )
      .concat(
        generateRDFTemplate({
          object: `_:RxConcept${d.secondEdge}`,
          predicate: `RxConcept.interaction`,
          value: `_:RxConcept${d.firstEdge}`,
          facet: [{ facetName: 'description', value: d.description }],
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
    './src/generatedRDF/RXconcepts_interactions.rdf',
    template,
    'utf-8',
  )

  console.timeLog('processTimer')
}
