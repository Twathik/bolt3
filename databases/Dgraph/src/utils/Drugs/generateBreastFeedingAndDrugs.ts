import fs from 'fs'
import { parseString } from 'xml2js'
import { BFDrugFormattedInterface } from '../../interfaces/drugsInterfaces'

const generateBreastFeedingAndDrug = ({
  chapterId,
}: {
  chapterId: string
}): BFDrugFormattedInterface => {
  const chapter = fs.readFileSync(`./src/Drugs/raws/lactmed/${chapterId}.nxml`)
  let Drug: BFDrugFormattedInterface = {}
  parseString(chapter, function (err, result) {
    if (err) return console.dir(err, { depth: 5 })
    const DrugId = result['book-part-wrapper']['$']['id']

    const book = result['book-part-wrapper']['book-part'][0]
    const DrugName = book['book-part-meta'][0]['title-group'][0]['title'][0]

    const LastModification =
      book['book-part-meta'][0]['pub-history'][0]['date'][0]
    const LastModificationType = LastModification['$']['date-type']
    const LastModificationDate = `${LastModification['year']}-${LastModification['month']}-${LastModification['day']}`

    book['book-part-meta'][0]['related-object'].shift()
    const relatedDrugs = book['book-part-meta'][0]['related-object']

    Drug.id = DrugId
    Drug.name = DrugName
    Drug.LastModificationDate = LastModificationDate
    Drug.LastModificationType = LastModificationType
    Drug.relatedDrugs = relatedDrugs.map((e) => e['_'])

    const kwdGroupe = book['book-part-meta'][0]['kwd-group']

    if (kwdGroupe) {
      Drug.keywords = book['book-part-meta'][0]['kwd-group'][0]['kwd']
    }

    const body = book['body'][0]['sec'][0]
    const ref = body['sec'].pop()
    Drug.DrugLevelAndEffect = body['sec'].map((e) => ({
      title: e['title'],
      content: e['p'].map((e) => e['_']),
    }))
    if (!ref.hasOwnProperty('ref-list')) {
      Drug.DrugLevelAndEffect?.push({
        title: ref['title'],
        content: ref['p'].map((e) => e['_']),
      })
    } else {
      Drug.references = {
        title: ref['title'],
        content: ref['ref-list'][0]['ref'].map((e) => {
          if (e.hasOwnProperty('element-citation')) {
            const citation = e['element-citation'][0]
            return {
              articleTitle: `${citation['article-title']} -- ${citation['source']} -- ${citation['year']}`,
              pubId: citation?.['pub-id']?.map((c) => ({
                id: c['_'],
                type: c['$']['pub-id-type'],
              })),
            }
          } else if (e.hasOwnProperty('mixed-citation')) {
            const citation = e['mixed-citation'][0]
            return {
              articleTitle: `${citation['_']}`,
              pubId: citation?.['pub-id']?.map((c) => ({
                id: c['_'],
                type: c['$']['pub-id-type'],
              })),
            }
          }
          return
        }),
      }
    }
  })

  return Drug
}

const generateBreastFeedingAndDrugs = () => {
  const file = fs.readFileSync('./src/Drugs/raws/lactmed/TOC.nxml')

  parseString(file, function (err, result) {
    if (err) return console.dir(err, { depth: 5 })
    /* fs.writeFileSync(
      './src/Drugs/formatted/BFDrugsList.json',
      JSON.stringify(result),
      'utf-8',
    ) */
    const Drugs: BFDrugFormattedInterface[] = []
    result['book-part-wrapper']['toc'][0]['toc-entry'].map((entry) => {
      const chapterId: string =
        entry['nav-pointer'][0]['related-object'][0]['$']['document-id']
      Drugs.push(generateBreastFeedingAndDrug({ chapterId }))
    })
    fs.writeFileSync(
      `./src/Drugs/formatted/BFDrugsInteractions.json`,
      JSON.stringify(Drugs),
      'utf-8',
    )
    console.log('BF Drugs All done !!')
  })
}

export default generateBreastFeedingAndDrugs
