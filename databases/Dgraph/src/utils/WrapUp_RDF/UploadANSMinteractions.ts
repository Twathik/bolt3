import fs from 'fs'
import {
  ANSMMoleculesInterface,
  ANSMMedicalInteractionsInterface,
  ANSMmoleculesRDFinterface,
  ANSMclassRDFinterface,
} from '../../interfaces/drugsInterfaces'
import _ from 'lodash'

import { createHash } from '../createHash'
import { uniqueArray } from '../arrayUnique'
import {
  generateRDFTemplate,
  transformObjectToRDF,
} from '../generateRDFTemplate'

export const UploadANSMInteractions = async () => {
  let template: string = `

 ################
 # ANSM classes an molecules
 ################
 `
  let relations: string = `

 ################
 # ANSM relations
 ################
 `
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

  let ANSMMolecules: ANSMmoleculesRDFinterface[] = []
  let ANSMClasses: ANSMclassRDFinterface[] = []
  const ANSMInvertRelation: {
    class: ANSMclassRDFinterface
    molecules: ANSMmoleculesRDFinterface[]
  }[] = []

  console.log(`
  #######################################
  Create ANSM classes with relation to molecules in progress ...
  #######################################
  `)

  ANSMClassesData.forEach((el) => {
    try {
      const moleculeId = createHash({ data: el.molecule.toLowerCase(), len: 8 })
      const ANSMolecule = {
        id: moleculeId,
        name: el.molecule.toLowerCase(),
      }

      ANSMMolecules.push(ANSMolecule)

      ANSMClasses.push(
        ...el.classes.map((e) => {
          const classId = createHash({
            data: e.name.toLowerCase(),
            len: 8,
          })
          const ANSMclass = { name: e.name, id: classId }
          const invertRelationIndex = ANSMInvertRelation.findIndex(
            (c) => c.class.name === e.name.toLowerCase(),
          )
          if (invertRelationIndex === -1) {
            ANSMInvertRelation.push({
              class: ANSMclass,
              molecules: [ANSMolecule],
            })
          } else {
            ANSMInvertRelation[invertRelationIndex].molecules.push(ANSMolecule)
          }
          relations = relations
            .concat(
              generateRDFTemplate({
                object: `_:ANSMmolecule${moleculeId}`,
                predicate: 'ANSMmolecule.class',
                value: `_:ANSMclass${classId}`,
              }),
            )
            .concat(
              generateRDFTemplate({
                object: `_:ANSMclass${classId}`,
                predicate: 'ANSMclass.molecules',
                value: `_:ANSMmolecule${moleculeId}`,
              }),
            )
          return ANSMclass
        }),
      )
    } catch (error) {
      console.dir({ BFerror: error, el }, { depth: 10 })
    }
  })

  ANSMMolecules = uniqueArray(ANSMMolecules, ['name', 'id'])
  ANSMClasses = uniqueArray(ANSMClasses, ['id', 'name'])

  ANSMMolecules.forEach((m) => {
    template = template.concat(
      transformObjectToRDF({
        object: m,
        type: 'ANSMmolecule',
        uid: m.id,
      }),
    )
  })

  ANSMClasses.forEach((m) => {
    template = template.concat(
      transformObjectToRDF({
        object: m,
        type: 'ANSMclass',
        uid: m.id,
      }),
    )
  })

  ANSMInteractionsData.forEach((molecule) => {
    const moleculeIndex = ANSMMolecules.findIndex(
      (e) => e.name === molecule.molecule,
    )
    const moleculeId = createHash({
      data: molecule.molecule.toLowerCase(),
      len: 8,
    })
    molecule.interactions.forEach((interaction) => {
      const relationIndex = ANSMMolecules.findIndex(
        (e) => e.name === interaction.class_ou_molecule.toLowerCase(),
      )
      const interactionId = createHash({
        data: interaction.class_ou_molecule.toLowerCase(),
        len: 8,
      })
      const object: string =
        moleculeIndex !== -1
          ? `_:ANSMmolecule${moleculeId}`
          : `_:ANSMclass${moleculeId}`
      const predicate: string = 'ANSMInteraction'
      const value: string =
        relationIndex !== -1
          ? `_:ANSMmolecule${interactionId}`
          : `_:ANSMclass${interactionId}`
      const facet: { facetName: string; value: any }[] = [
        {
          facetName: 'commentaire',
          value: interaction.commentaire,
        },
        {
          facetName: 'conduite',
          value: interaction.conduite,
        },
        {
          facetName: 'comentaire_conduite',
          value: interaction.commentaire_conduite,
        },
      ]
      relations = relations
        .concat(
          generateRDFTemplate({
            object,
            predicate,
            value,
            facet,
          }),
        )
        .concat(
          generateRDFTemplate({
            object: value,
            predicate,
            value: object,
            facet,
          }),
        )
    })
  })

  ANSMInteractionsData.forEach((molecule) => {
    const moleculeIndex = ANSMMolecules.findIndex(
      (e) => e.name === molecule.molecule,
    )
    const moleculeId = createHash({
      data: molecule.molecule.toLowerCase(),
      len: 8,
    })

    molecule.interactions.forEach((interaction) => {
      const relationIndex = ANSMMolecules.findIndex(
        (e) => e.name === interaction.class_ou_molecule.toLowerCase(),
      )
      const interactionId = createHash({
        data: interaction.class_ou_molecule.toLowerCase(),
        len: 8,
      })
      const facet: { facetName: string; value: any }[] = [
        {
          facetName: 'commentaire',
          value: interaction.commentaire,
        },
        {
          facetName: 'conduite',
          value: interaction.conduite,
        },
        {
          facetName: 'comentaire_conduite',
          value: interaction.commentaire_conduite,
        },
      ]

      if (moleculeIndex !== -1) {
        if (relationIndex !== -1) {
          relations = relations
            .concat(
              generateRDFTemplate({
                object: `_:ANSMmolecule${moleculeId}`,
                predicate: 'ANSMDirectInteraction',
                value: `_:ANSMmolecule${interactionId}`,
                facet,
              }),
            )
            .concat(
              generateRDFTemplate({
                object: `_:ANSMmolecule${interactionId}`,
                predicate: 'ANSMDirectInteraction',
                value: `_:ANSMmolecule${moleculeId}`,
                facet,
              }),
            )
        } else {
          ANSMInvertRelation.find(
            (f) => f.class.name === interaction.class_ou_molecule.toLowerCase(),
          )?.molecules.forEach((classMol) => {
            const classMolId = createHash({
              data: classMol.name.toLowerCase(),
              len: 8,
            })
            relations = relations
              .concat(
                generateRDFTemplate({
                  object: `_:ANSMmolecule${moleculeId}`,
                  predicate: 'ANSMDirectInteraction',
                  value: `_:ANSMmolecule${classMolId}`,
                  facet,
                }),
              )
              .concat(
                generateRDFTemplate({
                  object: `_:ANSMmolecule${classMolId}`,
                  predicate: 'ANSMDirectInteraction',
                  value: `_:ANSMmolecule${moleculeId}`,
                  facet,
                }),
              )
          })
        }
      } else {
        if (relationIndex !== -1) {
          ANSMInvertRelation.find(
            (f) => f.class.name === molecule.molecule.toLowerCase(),
          )?.molecules.forEach((classMol) => {
            const classMolId = createHash({
              data: classMol.name.toLowerCase(),
              len: 8,
            })
            relations = relations
              .concat(
                generateRDFTemplate({
                  object: `_:ANSMmolecule${classMolId}`,
                  predicate: 'ANSMDirectInteraction',
                  value: `_:ANSMmolecule${interactionId}`,
                  facet,
                }),
              )
              .concat(
                generateRDFTemplate({
                  object: `_:ANSMmolecule${moleculeId}`,
                  predicate: 'ANSMDirectInteraction',
                  value: `_:ANSMmolecule${interactionId}`,
                  facet,
                }),
              )
          })
        } else {
          ANSMInvertRelation.find(
            (f) => f.class.name === molecule.molecule.toLowerCase(),
          )?.molecules.forEach((classMol) => {
            const classMolId = createHash({
              data: classMol.name.toLowerCase(),
              len: 8,
            })

            ANSMInvertRelation.find(
              (sf) =>
                sf.class.name === interaction.class_ou_molecule.toLowerCase(),
            )?.molecules.forEach((subClassMol) => {
              const subClassMolId = createHash({
                data: subClassMol.name.toLowerCase(),
                len: 8,
              })
              relations = relations
                .concat(
                  generateRDFTemplate({
                    object: `_:ANSMmolecule${subClassMolId}`,
                    predicate: 'ANSMDirectInteraction',
                    value: `_:ANSMmolecule${classMolId}`,
                    facet,
                  }),
                )
                .concat(
                  generateRDFTemplate({
                    object: `_:ANSMmolecule${classMolId}`,
                    predicate: 'ANSMDirectInteraction',
                    value: `_:ANSMmolecule${subClassMolId}`,
                    facet,
                  }),
                )
            })
          })
        }
      }
      const object: string =
        moleculeIndex !== -1
          ? `_:ANSMmolecule${moleculeId}`
          : `_:ANSMclass${moleculeId}`
      const predicate: string = 'ANSMInteraction'
      const value: string =
        relationIndex !== -1
          ? `_:ANSMmolecule${interactionId}`
          : `_:ANSMclass${interactionId}`

      relations = relations
        .concat(
          generateRDFTemplate({
            object,
            predicate,
            value,
            facet,
          }),
        )
        .concat(
          generateRDFTemplate({
            object: value,
            predicate,
            value: object,
            facet,
          }),
        )
    })
  })

  template = template.concat(relations)

  fs.writeFileSync('./src/generatedRDF/ANSMRelations.rdf', template, 'utf-8')

  console.log(`
  #######################################
  Formatting ANSM classes with relation to molecules done!
  #######################################
  `)
  console.timeLog('processTimer')
}
