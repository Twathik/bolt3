import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections'

const clinicalDiagnosticSchema: CollectionCreateSchema = {
  name: 'clinical-diagnostics',
  fields: [
    {
      name: 'id',
      type: 'string',
      facet: false,
    },
    {
      name: 'FormattedTitle',
      type: 'string',
      facet: false,
      sort: true,
    },
    {
      name: 'index_entry',
      type: 'string',
      facet: false,
    },
    {
      name: 'parsedCodes',
      type: 'string[]',
    },
    {
      name: 'tags',
      type: 'string[]',
    },
    {
      name: 'priority',
      type: 'int32',
      index: true,
    },
    {
      name: 'charCount',
      type: 'int32',
    },
  ],
  default_sorting_field: 'FormattedTitle',
}

export default clinicalDiagnosticSchema
