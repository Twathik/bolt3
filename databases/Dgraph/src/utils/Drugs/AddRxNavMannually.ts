import _ from 'lodash'
import dump from '../../pharmaNetDumps/manuel/dumpedDrugsNotFoundRx.json'
import dcirx from '../../pharmaNetDumps/manuel/NOTFoundDCI.json'
import final from '../../pharmaNetDumps/manuel/DrugList_final.json'
import fs from 'fs'
export interface DCIWITHRX {
  DCI: string
  rx:
    | {
        rxcui: string
        name: string
        tty?: string
      }[]
}

export function chainaddRxNavManually() {
  let result: typeof dump = []
  dump.forEach((e) => {
    const dci = dcirx.find((d) => d.DCI === e.vignette.DCI)
    if (dci)
      result.push({
        ...e,
        rx: dci.rx.map((l) => ({ rxcui: l.rxcui, name: l.name.toLowerCase() })),
      })
  })
  fs.writeFileSync(
    './src/pharmaNetDumps/formatted/dumpedDrugsNotFoundRx.json',
    JSON.stringify(result),
    'utf-8',
  )
}

export function getDCIWithRx() {
  const dci: { DCI: string; rx: { rxcui: string; name: string }[] }[] =
    dump.map((d) => ({ DCI: d.vignette.DCI, rx: d.rx }))

  fs.writeFileSync(
    './src/pharmaNetDumps/manuel/NOTFoundDCI.json',
    JSON.stringify(_.sortBy(_.uniqBy(dci, 'DCI'), 'DCI')),
    'utf-8',
  )
}

export function sortFinalPharmaList() {
  const result: any[] = (final as typeof dump).map((e) => {
    const {
      comercialisé,
      fullName,
      img,
      infos,
      link,
      miniatureImageLink,
      noticeLink,
      prodLocal,
      rx,
      type,
      vignette,
    } = e
    return {
      fullName,
      rx,
      type,
      vignette,
      infos,
      img,
      miniatureImageLink,
      link,
      noticeLink,
      prodLocal,
      comercialisé,
    }
  })
  fs.writeFileSync(
    './src/pharmaNetDumps/formatted/DrugList_final_sorted.json',
    JSON.stringify(_.sortBy(result, 'fullName')),
    'utf-8',
  )
}
