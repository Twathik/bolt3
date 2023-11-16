import fs from 'fs'
import _ from 'lodash'
import {
  AlgerianDrugsFormattedInterface,
  AlgerianDrugsLinkedToMedicalInteractionsInterface,
  SubstancesIndexFormattedInterface,
} from '../../interfaces/drugsInterfaces'
import AlgerianDrugs from '../../ReadyToUseDB/Drugs/AlgerianDrugs.json'
import InteractionIndex from '../../ReadyToUseDB/Drugs/substanceIndexFormatted.json'

const interactions: SubstancesIndexFormattedInterface[] = InteractionIndex
const Drugs: AlgerianDrugsFormattedInterface[] = AlgerianDrugs
// SubstancesIndexFormattedInterface
console.log({ DrugsLength: Drugs.length })
console.log({ interactionLength: interactions.length })
const LinkInteractionsToAlgerianDrugs = () => {
  const found: string[] = []
  let linked = 0
  const data: AlgerianDrugsLinkedToMedicalInteractionsInterface[] = Drugs.map(
    (drug) => {
      let InteractionIndexLink: string[] = []
      const linkIndex = interactions.filter((e) =>
        drug.DCI.toLowerCase()
          .replaceAll('é', 'e')
          .replaceAll('è', 'e')
          .replaceAll('ï', 'i')
          .replaceAll('/', ' ')
          .replaceAll("d'", '')
          .replaceAll(')', '')
          .replaceAll('(', '')
          .split(' ')
          .includes(
            e.molecule
              .toLowerCase()
              .replaceAll(')', '')
              .replaceAll('(', '')
              .split(' ')
              .filter(
                (e) =>
                  ![
                    'citrate',
                    'de',
                    'sodium',
                    'bicarbonate',
                    'chlorure',
                    'citrate',
                    'citrate diacide',
                    'docusate',
                    'nitroprussiate',
                    'oxybate',
                    'picosulfate',
                    'ricinoleate',
                    'acide',
                    'phosphate',
                    'oxyde',
                    'immunoglobuline',
                    'humain',
                  ].includes(e),
              )[0],
          ),
      )

      if (linkIndex.length > 0) {
        InteractionIndexLink = linkIndex
          .map((e) => e.molecule)
          .filter((e) => e.length > 0)
        linked += 1

        found.push(...InteractionIndexLink)
      }

      return { InteractionIndexLink, ...drug }
    },
  )
  console.log({ foundLength: _.uniq(found).length })
  console.log({ linked })

  fs.writeFileSync(
    './src/Drugs/formatted/AlgerianDrugsLinkedToMedicalInteractions.json',
    JSON.stringify(data),
    'utf-8',
  )
  console.log('LinkInteractionsToAlgerianDrugs done !!')
}

export default LinkInteractionsToAlgerianDrugs
