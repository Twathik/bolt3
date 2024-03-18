import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections'

const DrugsSchema: CollectionCreateSchema = {
  name: 'drugs',
  fields: [
    {
      name: 'id',
      type: 'string',
      facet: false,
    },
    {
      name: 'fullName',
      type: 'string',
      index: true,
    },
    {
      name: 'drugTemplate',
      type: 'string',
      index: true,
    },
    {
      name: 'rx',
      type: 'string',
    },
    {
      name: 'type',
      type: 'string',
      index: true,
      sort: true,
      facet: true,
    },
    {
      name: 'labo',
      type: 'string',
      index: true,
      sort: true,
    },
    {
      name: 'nomCommercial',
      type: 'string',
      index: true,
      sort: true,
    },
    {
      name: 'DCI',
      type: 'string',
      index: true,
      sort: true,
    },

    {
      name: 'PPA',
      type: 'string',
    },
    {
      name: 'TR',
      type: 'string',
    },

    {
      name: 'vignetteColor',
      type: 'string',
      index: true,
      sort: true,
      facet: true,
    },
    {
      name: 'classPharmaco',
      type: 'string',
      index: true,
      sort: true,
    },
    {
      name: 'classTherapeutique',
      type: 'string',
      index: true,
      sort: true,
    },
    {
      name: 'codeDCI',
      type: 'string',
    },
    {
      name: 'forme',
      type: 'string',
      sort: true,
      index: true,
    },
    {
      name: 'dosage',
      type: 'string',
      index: true,
    },
    {
      name: 'conditionnement',
      type: 'string',
      index: true,
    },
    {
      name: 'liste',
      type: 'string',
      index: true,
      facet: true,
    },
    {
      name: 'pays',
      type: 'string',
      index: true,
      facet: true,
    },
    {
      name: 'remboursable',
      type: 'bool',
      index: true,
      facet: true,
    },
    {
      name: 'NumEnregistrement',
      type: 'string',
    },
    {
      name: 'img',
      type: 'string',
    },
    {
      name: 'miniatureImageLink',
      type: 'string',
    },
    {
      name: 'link',
      type: 'string',
    },
    {
      name: 'noticeLink',
      type: 'string',
    },
    {
      name: 'prodLocal',
      type: 'bool',
      index: true,
      facet: true,
    },
    {
      name: 'comercialisé',
      type: 'bool',
      index: true,
      facet: true,
    },
  ],
  default_sorting_field: 'nomCommercial',
}

export default DrugsSchema
