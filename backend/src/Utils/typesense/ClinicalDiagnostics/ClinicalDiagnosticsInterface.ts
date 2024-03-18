export interface ClinicalDiagnosticsInterface {
  FormattedTitle: string
  primary_code: string
  index_entry: string
  parsedCodes: string[]
  tags: string[]
  priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  id: string
}
