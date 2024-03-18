import { Sexe } from '@prisma/client'

export interface RawPatientDocumentResultInterface {
  ddn: number
  ddn_year: number
  firstName: string
  id: string
  lastName: string
  search_ddn_year: string
  sexe: Sexe
}
