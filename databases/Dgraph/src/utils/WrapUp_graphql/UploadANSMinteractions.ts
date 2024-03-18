import fs from 'fs'
import {
  ANSMMoleculesInterface,
  ANSMMedicalInteractionsInterface,
} from '../../interfaces/drugsInterfaces'
import { graphqlSdk } from '../graphQlRequestClient'
import cliProgress from 'cli-progress'
import _ from 'lodash'
import { AddAnsmInteractionsInput } from '../../graphql.sdk'

export const UploadANSMInteractions = async () => {
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  )

  const ANSMInteractionsRawData = fs.readFileSync(
    './src/ReadyToUseDB/Drugs/intéractions_médicamenteuse.json',
    'utf-8',
  )

  const ANSMInteractionsData = JSON.parse(
    ANSMInteractionsRawData.toString(),
  ) as ANSMMedicalInteractionsInterface[]

  const ANSMclasses = fs.readFileSync(
    './src/ReadyToUseDB/Drugs/substanceIndexFormatted.json',
    'utf-8',
  )

  const ANSMClassesData = JSON.parse(
    ANSMclasses.toString(),
  ) as ANSMMoleculesInterface[]

  let ANSMMolecules: string[] = []
  let ANSMClasses: string[] = []

  console.log(`
  #######################################
  Sending ANSM classes with relation to molecules in progress ...
  #######################################
  `)
  progressBar.start(ANSMClassesData.length, 0)

  for (const el of ANSMClassesData) {
    try {
      ANSMMolecules.push(el.molecule.toLowerCase())
      const classes = el.classes.map((e) => ({ name: e.name }))
      await graphqlSdk.addANSMMolecules({
        input: {
          name: el.molecule,
          classes,
        },
        upsert: true,
      })
      for (const c of classes) {
        ANSMClasses.push(c.name.toLowerCase())
        await graphqlSdk.addANSMClasses({
          upsert: true,
          input: { name: c.name, molecules: [{ name: el.molecule }] },
        })
      }
      progressBar.increment()
    } catch (error) {
      progressBar.stop()
      console.dir({ BFerror: error, el }, { depth: 10 })
    }
  }

  progressBar.start(ANSMInteractionsData.length, 0)

  for (const molecule of ANSMInteractionsData) {
    for (const interaction of molecule.interactions) {
      try {
        const input: AddAnsmInteractionsInput = {
          CAT: interaction.conduite,
          CAT_commentary: interaction.commentaire,
          commentary: interaction.comentaire_conduite,
        }
        const mainMolecule = molecule.molecule.toLowerCase()
        const secondaryMolecule = interaction.class_ou_molecule.toLowerCase()

        input['molecules'] = []
        input['classes'] = []

        if (ANSMMolecules.includes(mainMolecule)) {
          input['molecules'].push({ name: mainMolecule })
        } else if (ANSMClasses.includes(mainMolecule)) {
          input['classes'].push({ name: mainMolecule })
        } else {
          throw Error(`mainMolecule : ${mainMolecule} not found`)
        }

        if (ANSMMolecules.includes(secondaryMolecule)) {
          input['molecules'].push({ name: secondaryMolecule })
        } else if (ANSMClasses.includes(secondaryMolecule)) {
          input['classes'].push({ name: secondaryMolecule })
        } else {
          throw Error(`secondaryMolecule : ${secondaryMolecule} not found`)
        }

        const result = await graphqlSdk.addANSMInteractions({
          input,
        })
        if (result.addANSMInteractions?.aNSMInteractions)
          for (const interact of result.addANSMInteractions?.aNSMInteractions) {
            if (interact?.molecules)
              for (const mol of interact?.molecules) {
                await graphqlSdk.addANSMMolecules({
                  upsert: true,
                  input: {
                    name: mol?.name!,
                    interactions: [{ id: interact.id }],
                  },
                })
              }
            if (interact?.classes)
              for (const c of interact.classes) {
                await graphqlSdk.addANSMMolecules({
                  upsert: true,
                  input: {
                    name: c?.name!,
                    interactions: [{ id: interact.id }],
                  },
                })
              }
          }
        // console.dir({ result }, { depth: 8 })
      } catch (error) {
        console.dir({ error }, { depth: 5 })
      }
    }
    progressBar.increment()
  }
  progressBar.stop()

  console.log(`
  #######################################
  Sending ANSM classes with relation to molecules done!
  #######################################
  `)
  console.timeLog('processTimer')
}
