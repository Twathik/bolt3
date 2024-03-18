import {
  integratedPharmaNetDumpInterface,
  pharmaNetDumpInterface,
} from '../../interfaces/pharmaNetDumpInterface'
import dumps from '../../pharmaNetDumps/dumpedDrugs.json'
import algerian from '../../Drugs/manual/AlgerianWithRx.json'
import rx from '../../Drugs/manual/PrepareDrugsToRx.json'
import fs from 'fs'

import _ from 'lodash'
import { AlgerianDrugsPrepareToRxIntegrationInterface } from '../../interfaces/drugsInterfaces'

export function importPharmaNetDumps() {
  const drugs = dumps as pharmaNetDumpInterface[]
  let old = algerian as AlgerianDrugsPrepareToRxIntegrationInterface[]
  const found: integratedPharmaNetDumpInterface[] = []
  const notFound: integratedPharmaNetDumpInterface[] = []

  old = old.map((o) => {
    const rxMatchIndex = rx.findIndex((r) => r.DCI === o.DCI)
    if (rxMatchIndex != -1) return { ...o, rx: rx[rxMatchIndex].rx }
    return o
  })

  drugs.forEach((drug) => {
    const index = old.findIndex(
      (o) =>
        o.NOM_COMMERCIALE.toLowerCase().trim() ===
        drug.infos.nomCommercial.toLowerCase().trim(),
    )
    if (index !== -1) {
      const {
        availableInAlgeria,
        PregnancyIndexLink,
        rx,
        InteractionIndexLink,
      } = old[index]
      found.push({
        ...drug,
        availableInAlgeria,
        PregnancyIndexLink,
        InteractionIndexLink,
        rx,
      })
    } else {
      notFound.push({
        ...drug,
        availableInAlgeria: null,
        PregnancyIndexLink: [],
        InteractionIndexLink: [],
        rx: [],
      })
    }
  })

  fs.writeFileSync(
    './src/pharmaNetDumps/formatted/dumpedDrugsWithRx.json',
    JSON.stringify(found),
    'utf-8',
  )

  fs.writeFileSync(
    './src/pharmaNetDumps/formatted/dumpedDrugsNotFoundRx.json',
    JSON.stringify(notFound),
    'utf-8',
  )

  fs.writeFileSync(
    './src/pharmaNetDumps/formatted/algerianWithIntegratedRx.json',
    JSON.stringify(old),
    'utf-8',
  )
}
