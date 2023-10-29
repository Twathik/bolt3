import { Client } from 'typesense'
import { Patient } from '../../../@generated'
import { getYear } from 'date-fns'

const updatePatient_typesense = async ({
  typesense,
  document,
}: {
  typesense: Client
  document: Patient
}) => {
  const { ddn, firstName, lastName, sexe, id } = document
  await typesense
    .collections('patients')
    .documents(id)
    .update({
      id,
      lastName,
      firstName,
      sexe,
      ddn,
      ddn_year: getYear(ddn),
      search_ddn_year: getYear(ddn).toString(),
    })
}

export default updatePatient_typesense
