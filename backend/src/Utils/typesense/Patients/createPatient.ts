import { Client } from 'typesense'
import { Patient } from '../../../@generated'
import { getYear } from 'date-fns'

const createPatient_typesense = async ({
  typesense,
  documents,
}: {
  typesense: Client
  documents: Patient[]
}) => {
  const test = await typesense
    .collections('patients')
    .documents()
    .import(
      documents.map((doc) => {
        const { ddn, firstName, lastName, sexe, id } = doc

        const d = {
          id,
          lastName,
          firstName,
          sexe,
          ddn,
          ddn_year: getYear(ddn),
          search_ddn_year: getYear(ddn).toString(),
        }
        return d
      }),
      { action: 'create' },
    )
  console.log({ test })
}

export default createPatient_typesense
