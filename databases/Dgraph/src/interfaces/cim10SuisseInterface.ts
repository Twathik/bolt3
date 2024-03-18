export interface CIM10RAW_AlphabeticalIndexInterface {
  index_entry: string
  primary_code: string
  raw_title: string
}
export interface CIM10Formatted_AlphabeticalIndexInterface
  extends CIM10RAW_AlphabeticalIndexInterface {
  RootTitle: string
  FormattedTitle: string
  DiagnosticSimple: string | null
  DiagnosticEtiologique: string | null
  ManifestationDeLaMaladie: string | null
  DiagnosticFacultatif: string | null
}

type chapter =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'

export interface CIM10RAW_Synthetic_ChapterInterface {
  chapter: chapter
  title: string
}

export interface CIM10RAW_Synthetic_GroupeInterface {
  starting_code: string
  ending_code: string
  chapter: string
  title: string
}

export interface CIM10Formatted_Synthetic_GroupeInterface
  extends CIM10RAW_Synthetic_GroupeInterface {
  StartingNumericCode: number
  EndingNumericCode: number
}

export interface CIM10RAW_Synthetic_CodesInterface {
  hierarchical_level: '3' | '4' | '5'
  final_code: 'T' | 'N'
  explicit_classification: 'X' | 'S'
  chapter: chapter
  root_code: string
  codeWithoutDague: string
  codeWithoutDash: string
  plainCode: string
  classTitle: string
  rootTitle: string
  position4Title: string
  position5title: string
  sexe: '9' | 'M' | 'W'
  sexeAccuracy: '9' | 'K'
  lowerAgeLimit: '9999' | string
  higherAgeLimit: '9999' | string
  ageAccuracy: '9' | 'M' | 'K'
  uncommonDisease: 'J' | 'N'
  additionalInformation: 'J' | 'N'
}

export interface ageLimit {
  unit: 'jour' | 'année'
  limit: number
}
export interface CIM10FORMATTED_Synthetic_CodesInterface {
  Hierarchical_level: '3' | '4' | '5'
  Codable: boolean
  Explicit_classification: boolean
  Chapter: chapter
  RootCode: string
  CodeWithoutDague: string
  CodeWithoutDash: string
  PlainCode: string
  ClassTitle: string
  RootTitle: string
  Position4Title: string
  Position5title: string
  Sexe: 'Pas de lien avec le sexe' | 'Masculin' | 'Féminin'
  SexeAccuracy: 'non pertinent' | 'Peut être une erreur'
  LowerAgeLimit: null | ageLimit
  HigherAgeLimit: null | ageLimit
  AgeAccuracy: 'non pertinent' | 'Est une erreur' | 'Peut être une erreur'
  UncommonDisease: boolean
  AdditionalInformation: boolean
  NumericCode: number
}

export interface CHOP_RAW_SyntheticInterface {
  nbchar: '1' | '2' | '3' | '4' | '5' | '6'
  zcode: string
  item_type: 'B' | 'I' | 'N' | 'S' | 'T' | 'X'
  text: string
  codable: 'oui' | 'complement' | 'non'
  emitter: string
  status: '0' | '1' | '2'
  modification_date: string
  indent_level: '1' | '2' | '3' | '4' | '5' | '6'
  lateralite: 'Lateral' | null
}

export type CHOPItemType =
  | 'description complémentaire'
  | 'inclusions'
  | 'note'
  | 'coder aussi'
  | 'titre'
  | 'exclusion'

export interface CHOP_Formatted_SyntheticInterface {
  Nbchar: '1' | '2' | '3' | '4' | '5' | '6'
  Zcode: string
  ItemType: CHOPItemType
  Text: string
  Codable: 'oui' | 'complement' | 'non'
  Emitter: string
  Status: '0' | '1' | '2'
  Modification_date: string
  IndentLevel: '1' | '2' | '3' | '4' | '5' | '6'
  Lateralite: 'Lateral' | null
}

export interface CHOP_RAW_AlphabeticalIndexInterface {
  indexEntry: string
  Zcode: string
  raw_title: string
}

export interface CHOP_Formatted_AlphabeticalIndexInterface {
  IndexEntry: string
  Zcode: string
  RootTitle: string
  FormattedTitle: string
}

export interface FormattedNumericCodes {
  PlainCode: string
  NumericCode: number
}
