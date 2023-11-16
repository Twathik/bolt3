import fs from 'fs'

export const GenerateFinalRDFFile = () => {
  try {
    let finalTemplate = ''
    const files: string[] = [
      './src/generatedRDF/ANSMRelations.rdf',
      './src/generatedRDF/KidneyDrugs.rdf',
      './src/generatedRDF/GenerateRxClassesAndConcepts.rdf',
      './src/generatedRDF/GenerateRxConceptDrugBank.rdf',
      './src/generatedRDF/RXclass_parentClass_childClass.rdf',
      './src/generatedRDF/RXclass_RXconcept_relation.rdf',
      './src/generatedRDF/RXconcepts_interactions.rdf',
      './src/generatedRDF/RXconcepts_minConcept_childConcept.rdf',
      './src/generatedRDF/PregnancyWithDrugs.rdf',
      './src/generatedRDF/BFDrugs.rdf',
      './src/generatedRDF/AlgerianNom.rdf',
    ]

    files.forEach((file) => {
      finalTemplate = finalTemplate.concat(
        fs.readFileSync(file, 'utf-8').toString(),
      )
    })
    console.log(
      `
  #######################################
  Write final template
  #######################################`,
    )

    fs.writeFileSync(
      '/Users/mac/Desktop/Projects/Bolt2.3/Dgraph/dgraph-docker/dgraph/FinalRDFFile.rdf',
      finalTemplate,
      'utf-8',
    )
  } catch (error) {
    console.log({ error })
  }
}
