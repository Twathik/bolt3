import { ChapitresCIM10 } from '../cim10/formatted/cim10ClassificationsFlat'

export interface cim10RawInterface {
  code: string
  MCO_HAD: string
  SSR: string
  PSY: string
  shortTitle: string
  longTitle: string
  tags?: []
}
export type cim10Chapter = keyof typeof ChapitresCIM10

export interface cim10entries {
  parent: cim10RawInterface
  related: cim10entries[]
}

export interface cim10SelectedInterface {
  code: keyof typeof ChapitresCIM10
  label: string
  tags: string[]
  subchapters: {
    code: string
    label: string
    tags: string[]
    categories: {
      code: string
      label: string
      tags: string[]
      subCategories: {
        code: string
        label: string
        tags: string[]
        entries: cim10entries[]
      }[]
      entries: cim10entries[]
    }[]
    entries: cim10entries[]
  }[]
  entries: cim10entries[]
}

export interface cim10UnclassifiedInterface {
  code: 'unclassified'
  entries: cim10entries[]
}

export type cim10FormattedInterface =
  | cim10SelectedInterface
  | cim10UnclassifiedInterface

export type filterType =
  | 'subChapter'
  | 'category'
  | 'subCategory'
  | 'parentEntry'
  | 'entry'

export interface rawAbbreviations {
  abbreviation: string
  descriptions: string
}
export interface formattedRawAbbreviationsInterface {
  abbreviation: string
  description: string
}
