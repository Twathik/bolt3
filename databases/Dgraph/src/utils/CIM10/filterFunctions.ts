import {
  cim10Chapter,
  cim10entries,
  cim10RawInterface,
  filterType,
} from '../../interfaces/cim10RawInterface'
import { ChapitresCIM10 } from '../../cim10/formatted/cim10ClassificationsFlat'
import cliProgress from 'cli-progress'

export const checkLimitsForACode = (
  code: string,
  limits: string[],
  _type: filterType,
): boolean => {
  return code >= limits[0] && code <= limits[1]
}
export const checkLimitsForAnInterval = (
  interval: string[],
  limits: string[],
  _type: filterType,
): boolean => {
  return interval[0] >= limits[0] && interval[1] <= limits[1]
}

export const filterCondition = ({
  entry,
  parentKey,
  type,
}: {
  entry: [string, string]
  parentKey: string
  type: filterType
}) => {
  const [entryKey] = entry
  // if (type === 'subChapter') console.log({ entryKey, parentKey })
  return entryKey.split('_')[1]
    ? checkLimitsForAnInterval(
        entryKey.split('_'),
        parentKey.split('_')[1] ? parentKey.split('_') : [parentKey, parentKey],
        type,
      )
    : checkLimitsForACode(
        entryKey,
        parentKey.split('_')[1] ? parentKey.split('_') : [parentKey, parentKey],
        type,
      )
}

export const generateEntriesHierarchy = ({
  checked,
  progressBar,
  selectedEntries,
  level = 3,
  forTags = false,
}: {
  checked: cim10RawInterface[]
  progressBar: cliProgress.SingleBar
  selectedEntries: cim10RawInterface[]
  level?: number
  forTags?: boolean
  increment?: boolean
}): cim10entries[] => {
  if (checked.length === 0) return []
  if (forTags && level > 3) return []
  let roots = checked.filter(
    (el) => el.code.trim().replace('+', '').length === level,
  )
  let i = level
  while (roots.length === 0) {
    i++
    roots = checked.filter((el) => el.code.trim().replace('+', '').length === i)
  }
  // if (roots.length === 0) console.log({ checked })

  return roots.map((el) => {
    selectedEntries.push(el)
    progressBar.increment()

    const checkRelated = checked.filter(
      (c) =>
        c.code
          .trim()
          .slice(0, i + 1)
          .includes(el.code.trim()) && c.code.trim() !== el.code.trim(),
    )
    // console.log({ level, el, checkRelated })

    return {
      parent: { ...el, code: el.code.trim(), tags: [] },
      related:
        checkRelated.length > 0
          ? generateEntriesHierarchy({
              checked: checkRelated,
              increment: false,
              level: i + 1,
              progressBar,
              selectedEntries,
            })
          : [],
    }
  })
}
export const filterCIM10Data = ({
  data,
  limits,
  progressBar,
  selectedEntries,
  forTags = false,
}: {
  data: cim10RawInterface[]
  limits: string
  progressBar: cliProgress.SingleBar
  selectedEntries: cim10RawInterface[]
  forTags?: boolean
}): cim10entries[] => {
  const checked = data.filter((el) => {
    return checkLimitsForACode(
      el.code.slice(0, 3).trim(),
      limits.split('_')[1] ? limits.split('_') : [limits, limits],
      'entry',
    )
  })

  return generateEntriesHierarchy({
    checked,
    progressBar,
    selectedEntries,
    forTags,
  })
}

export const getChapter = ({
  el,
}: {
  el: cim10RawInterface
}): cim10Chapter | null => {
  let chapter: cim10Chapter | null = null
  let found = false
  Object.keys(ChapitresCIM10).every((k) => {
    if (checkLimitsForACode(el.code, k.split('_'), 'subChapter')) {
      chapter = k as cim10Chapter
      found = true
    }
    return !found
  })

  return chapter
}
