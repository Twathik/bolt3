import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections'

const patientSchema: CollectionCreateSchema = {
  name: 'patients',
  fields: [
    {
      name: 'id',
      type: 'string',
      facet: false,
    },
    {
      name: 'lastName',
      type: 'string',
      facet: false,
      sort: true,
    },
    {
      name: 'firstName',
      type: 'string',
      facet: false,
    },
    {
      name: 'ddn_year',
      type: 'int32',
      facet: true,
    },
    {
      name: 'search_ddn_year',
      type: 'string',
      facet: false,
      index: true,
      sort: true,
    },
    {
      name: 'ddn',
      type: 'string',
      facet: true,
    },
    {
      name: 'sexe',
      type: 'string',
      facet: true,
      sort: true,
    },
  ],
  default_sorting_field: 'lastName',
}

export default patientSchema
