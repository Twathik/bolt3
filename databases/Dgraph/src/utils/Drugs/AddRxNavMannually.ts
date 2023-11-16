import _ from 'lodash'
import dump from '../../pharmaNetDumps/manuel/dumpedDrugsNotFoundRx.json'
import fs from 'fs'

export function addRxNavManually(
  DCI: string,
  rx: {
    rxcui: string
    name: string
    tty?: string
  },
) {
  let i = 0
  const ajusted = dump.map((e) => {
    const { rx: old, vignette, ...rest } = e
    if (e.vignette.DCI.includes(DCI)) {
      const rx_ajusted = old
      rx_ajusted.push(rx)
      i++

      return { ...rest, vignette, rx: _.uniqBy(rx_ajusted, 'rxcui') }
    }
    return { ...rest, vignette, rx: old }
  })

  fs.writeFileSync(
    './src/pharmaNetDumps/manuel/dumpedDrugsNotFoundRx.json',
    JSON.stringify(ajusted),
    'utf-8',
  )
  console.log({ i })
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
