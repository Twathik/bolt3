import fs from 'fs'
import cliProgress from 'cli-progress'
import _ from 'lodash'
import { RxDrugsInteractions } from '../../interfaces/rxDrugsInterfaces'
import { graphqlSdk } from '../graphQlRequestClient'
import {
  AddRxConceptInput,
  AddRxNavMedicalInteractionInput,
  RxNavMedicalInteractionRef,
} from '../../graphql.sdk'
import { uniqueArray } from '../arrayUnique'

const getConcepts = async ({
  data,
}: {
  data: RxDrugsInteractions
}): Promise<{
  concepts: AddRxConceptInput[]
  interactionConcepts: AddRxConceptInput[]
  interactionDrugBankConcepts: AddRxConceptInput[]
  addRxNavMedicalInteractionInput: AddRxNavMedicalInteractionInput[]
}> => {
  let concepts: AddRxConceptInput[] = []
  let interactionConcepts: AddRxConceptInput[] = []
  let interactionDrugBankConcepts: AddRxConceptInput[] = []
  let addRxNavMedicalInteractionInput: AddRxNavMedicalInteractionInput[] = []
  try {
    if (data.interactionTypeGroup?.length > 0)
      for (const interaction of data.interactionTypeGroup) {
        if (interaction.interactionType?.length > 0)
          for (const interactionType of interaction.interactionType) {
            concepts.push({
              ...interactionType.minConceptItem,
            })

            if (interactionType.interactionPair?.length > 0)
              for (const interactionPair of interactionType.interactionPair) {
                if (interactionPair.interactionConcept?.length > 0)
                  for (const interactionConcept of interactionPair.interactionConcept) {
                    interaction.sourceName === 'DrugBank'
                      ? interactionDrugBankConcepts.push({
                          ...interactionConcept.minConceptItem,
                          drugBankLink: {
                            drugBankId: interactionConcept.sourceConceptItem.id,
                            name: interactionConcept.sourceConceptItem.name,
                            url: interactionConcept.sourceConceptItem.url,
                          },
                        })
                      : interactionConcepts.push(
                          interactionConcept.minConceptItem,
                        )
                  }

                addRxNavMedicalInteractionInput.push({
                  description: interactionPair.description,
                  severity: interactionPair.severity,
                  concepts: _.sortBy(
                    _.uniq(
                      interactionPair.interactionConcept.map(
                        (concept) => ({
                          rxcui: concept.minConceptItem.rxcui,
                        }),
                        'rxcui',
                      ),
                    ),
                    ['rxcui'],
                  ),
                })
              }
          }
      }
  } catch (error) {
    console.dir({ data }, { depth: 5 })
    console.dir({ error }, { depth: 10 })
  }
  return {
    concepts,
    interactionConcepts,
    interactionDrugBankConcepts,
    addRxNavMedicalInteractionInput,
  }
}
const createConceptMinRelations = async ({
  data,
}: {
  data: RxDrugsInteractions
}) => {
  try {
    if (data.interactionTypeGroup?.length > 0)
      for (const interaction of data.interactionTypeGroup) {
        if (interaction.interactionType?.length > 0)
          for (const interactionType of interaction.interactionType) {
            await graphqlSdk.updateRXConcept({
              input: {
                filter: {
                  rxcui: { eq: interactionType.minConceptItem.rxcui },
                },
                set: {
                  minConcept: [
                    {
                      ...interactionType.interactionPair[0]
                        .interactionConcept[0].minConceptItem,
                    },
                  ],
                },
              },
            })
          }
      }
  } catch (error) {
    console.dir({ data }, { depth: 5 })
    console.dir({ error }, { depth: 10 })
  }
}

export const UploadRxNavInteractions = async () => {
  const classDir = `./src/ReadyToUseDB/RXnavDrugs/interactions/`

  const rxClasses = fs.readdirSync(classDir)
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )
  progressBar.start(rxClasses.length, 0)
  let concepts: AddRxConceptInput[] = []
  let interactionConcepts: AddRxConceptInput[] = []
  let interactionDrugBankConcepts: AddRxConceptInput[] = []
  let updateRxConceptInputs: AddRxConceptInput[] = []
  let addRxNavMedicalInteractionInput: AddRxNavMedicalInteractionInput[] = []

  for (const file of rxClasses) {
    const rawData = fs.readFileSync(classDir.concat(file))
    const data = JSON.parse(rawData.toString()) as RxDrugsInteractions
    const formattedConcepts = await getConcepts({ data })
    concepts.push(...formattedConcepts.concepts)
    interactionConcepts.push(...formattedConcepts.interactionConcepts)
    interactionDrugBankConcepts.push(
      ...formattedConcepts.interactionDrugBankConcepts,
    )
    addRxNavMedicalInteractionInput.push(
      ...formattedConcepts.addRxNavMedicalInteractionInput,
    )

    progressBar.increment()
  }
  progressBar.stop()

  console.timeLog('processTimer')

  interactionConcepts = _.uniqBy(interactionConcepts, 'rxcui')
  concepts = _.uniqBy(concepts, 'rxcui')

  console.log(`

  #######################################
  Sending concepts in progress ...
  #######################################
  `)

  try {
    await graphqlSdk.addRXConcept({
      input: concepts,
      upsert: true,
    })
  } catch (error) {
    console.log({ error })
    console
  }

  console.log(`

  #######################################
  Sending concepts done!
  #######################################
  `)
  console.timeLog('processTimer')

  console.log(`

  #######################################
  Sending interaction concepts in progress ...
  #######################################
  `)

  if (interactionConcepts.length > 0)
    for (const concept of interactionConcepts) {
      await graphqlSdk.addRXConcept({
        input: [
          {
            ...concept,
          },
        ],
        upsert: true,
      })
    }
  console.log(`

  #######################################
  Sending interaction concepts done!
  #######################################
  `)

  console.timeLog('processTimer')

  console.log(`

  #######################################
  Sending interaction DrugBank concepts in progress ...
  #######################################
  `)

  const groupedInteractionDrugBankConcepts = _.groupBy(
    interactionDrugBankConcepts,
    'rxcui',
  )
  interactionDrugBankConcepts = []
  for (const [key, value] of Object.entries(
    groupedInteractionDrugBankConcepts,
  )) {
    const drugBankLink =
      value.find((e) => e.drugBankLink !== null || e.drugBankLink !== undefined)
        ?.drugBankLink ?? null
    interactionDrugBankConcepts.push({
      rxcui: key,
      tty: value[0].tty,
      name: value[0].name,
      drugBankLink,
    })
  }

  const interactionDrugBankConceptsChunks = _.chunk(
    interactionDrugBankConcepts,
    50,
  )
  progressBar.start(interactionDrugBankConceptsChunks.length, 0)
  try {
    for (const chunk of interactionDrugBankConceptsChunks) {
      await graphqlSdk.addRXConcept({
        input: chunk,
        upsert: true,
      })
      progressBar.increment()
    }
  } catch (error) {
    console.dir({ error }, { depth: 5 })
  }

  progressBar.stop()

  console.timeLog('processTimer')

  console.log(`

  #######################################
  Sending interaction DrugBank concepts done!
  #######################################
  `)

  console.log(`

  #######################################
  Link minConcepts in progress ...
  #######################################
  `)
  progressBar.start(rxClasses.length, 0)
  for (const file of rxClasses) {
    const rawData = fs.readFileSync(classDir.concat(file))
    const data = JSON.parse(rawData.toString()) as RxDrugsInteractions
    await createConceptMinRelations({ data })
    progressBar.increment()
  }
  progressBar.stop()
  console.timeLog('processTimer')

  console.log(`

  #######################################
  Link minConcepts done !
  #######################################
  `)

  console.log(`

  #######################################
  Create Medical interactions in progress ...
  #######################################
  `)

  addRxNavMedicalInteractionInput = uniqueArray(
    addRxNavMedicalInteractionInput,
    ['description', 'concepts.0.rxcui', 'concepts.1.rxcui'],
  )

  const addRxNavMedicalInteractionInputChunks = _.chunk(
    addRxNavMedicalInteractionInput,
    5000,
  )
  progressBar.start(addRxNavMedicalInteractionInputChunks.length, 0)
  for (const chunk of addRxNavMedicalInteractionInputChunks) {
    const interaction = await graphqlSdk.addRXNavMedicalInteraction({
      input: chunk,
    })

    interaction.addRXNavMedicalInteraction?.rXNavMedicalInteraction?.forEach(
      (c) => {
        c?.concepts?.forEach((el) => {
          updateRxConceptInputs.push({
            ...el!,
            interactions: [{ id: c!.id! }],
          })
        })
      },
    )
    progressBar.increment()
  }
  progressBar.stop()
  console.timeLog('processTimer')

  console.log(`

  #######################################
  Create Medical interactions done !
  #######################################
  `)

  console.log(`

  #######################################
  update interactions concepts in progress ...
  #######################################
  `)

  const updateRxConceptInputsGroups = _.groupBy(
    updateRxConceptInputs,
    (d) => d.rxcui,
  )
  updateRxConceptInputs = []
  for (const [key, value] of Object.entries(updateRxConceptInputsGroups)) {
    const interactions: RxNavMedicalInteractionRef[] = value.map(
      (v) => v!.interactions![0]!,
    )
    updateRxConceptInputs.push({
      rxcui: key,
      name: value[0].name,
      interactions,
    })
  }

  const updateRxConceptInputsChunks = _.chunk(updateRxConceptInputs, 50)

  progressBar.start(updateRxConceptInputsChunks.length, 0)
  try {
    for (const chunk of updateRxConceptInputsChunks) {
      await graphqlSdk.addRXConcept({
        input: chunk,
        upsert: true,
      })
      progressBar.increment()
    }
  } catch (error) {
    console.dir({ error }, { depth: 10 })
  }

  progressBar.stop()
  console.log(`

  #######################################
  update interactions concepts done !
  #######################################
  `)
}
