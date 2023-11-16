import _ from 'lodash'
import formattedIndex from '../../cim10suisse/formatted/formattedAlphabeticalIndexCIM10suisse.json'
import raw from '../../cim10suisse/manuel/FilteredDedupedAlphabeticalIndexCIMsuisse.json'

import fs from 'fs'

interface formattedAlphabeticalIndexCHOPsuisseInterface {
  index_entry: string
  primary_code: string
  raw_title: string
  RootTitle: string
  FormattedTitle: string
  DiagnosticSimple: string
  DiagnosticEtiologique: string
  DiagnosticFacultatif: string
  ManifestationDeLaMaladie: string
}

interface DedupedAlphabeticalIndexInterface {
  id?: number | string
  index_entry: string
  primary_code: string
  parsedCodes: string[]
  FormattedTitle: string
  tags: string[]
  priority: number
  charCount?: number
}

export default function generateDedupedAlphabeticalIndexCIM10() {
  let DedupedAlphabeticalIndexCIMsuisse: DedupedAlphabeticalIndexInterface[] =
    _.uniqBy(
      (formattedIndex as formattedAlphabeticalIndexCHOPsuisseInterface[]).map(
        (e) => ({
          FormattedTitle: e.FormattedTitle,
          primary_code: e.primary_code,
          index_entry: e.index_entry,
          parsedCodes: e.primary_code
            .split(',')
            .map((v) =>
              _.trim(v)
                .replaceAll('*', '')
                .replaceAll('†', '')
                .replaceAll('!', ''),
            ),
          tags: [],
          priority: 0,
        }),
      ),
      'primary_code',
    )

  DedupedAlphabeticalIndexCIMsuisse = DedupedAlphabeticalIndexCIMsuisse.map(
    (e, i) => ({ ...e, id: i.toString() }),
  )

  fs.writeFileSync(
    './src/cim10suisse/formatted/DedupedAlphabeticalIndexCIMsuisse.json',
    JSON.stringify(DedupedAlphabeticalIndexCIMsuisse),
    'utf-8',
  )
}

export function removeNonNecessaryCodes() {
  const filtered = (raw as DedupedAlphabeticalIndexInterface[])
    .filter((e) => !e.FormattedTitle.includes('classées ailleurs'))
    .map((e, i) => ({
      ...e,
      id: i.toString(),
      charCount: e.FormattedTitle.length,
    }))
  fs.writeFileSync(
    './src/cim10suisse/formatted/FilteredDedupedAlphabeticalIndexCIMsuisse.json',
    JSON.stringify(filtered),
    'utf-8',
  )
}
/* 
export function Level3CIM10suicesFiltrated() {
  const filtered = (
    FilteredDedupedAlphabeticalIndexCIMsuisse as DedupedAlphabeticalIndexInterface[]
  )
    .filter(
      (e) => !e.primary_code.includes(',') && !e.primary_code.includes('.'),
    )
    .map((e, i) => ({ ...e, id: i }))

  fs.writeFileSync(
    './src/cim10suisse/formatted/Level3DedupedAlphabeticalIndexCIMsuisse.json',
    JSON.stringify(filtered),
    'utf-8',
  )
} */
