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
      name: 'rx',
      type: 'string',
      facet: false,
    },
    {
      name: 'PregnancyIndexLink',
      type: 'string[]',
      facet: false,
    },
    {
      name: 'InteractionIndexLink',
      type: 'string[]',
      facet: false,
    },

    {
      name: 'N_ENREGISTREMENT',
      type: 'string',
      facet: false,
    },
    {
      name: 'CODE_DCI',
      type: 'string',
      facet: false,
    },
    {
      name: 'DCI',
      type: 'string',
      facet: false,
    },
    {
      name: 'NOM_COMMERCIALE',
      type: 'string',
      sort: true,
    },
    {
      name: 'FORME',
      type: 'string',
      index: true,
    },
    {
      name: 'DOSAGE',
      type: 'string',
      index: true,
      sort: true,
    },
    {
      name: 'COND',
      type: 'string',
      facet: false,
    },
    {
      name: 'LISTE',
      type: 'string',
      facet: false,
    },
    {
      name: 'P1',
      type: 'string',
      facet: false,
    },
    {
      name: 'P2',
      type: 'string',
      facet: false,
    },
    {
      name: 'OBS',
      type: 'string',
      facet: false,
    },
    {
      name: 'LABORATOIRES_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT',
      type: 'string',
      sort: true,
    },
    {
      name: 'PAYS_DU_LABORATOIRE_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT',
      type: 'string',
      facet: false,
    },
    {
      name: 'DATE_D_ENREGISTREMENT_INITIAL',
      type: 'string',
      facet: false,
    },
    {
      name: 'DATE_D_ENREGISTREMENT_FINAL',
      type: 'string',
      facet: false,
    },
    {
      name: 'TYPE',
      type: 'string',
      index: true,
      sort: true,
    },
    {
      name: 'STATUT',
      type: 'string',
      facet: false,
    },
    {
      name: 'DUREE_DE_STABILITE',
      type: 'string',
      facet: false,
    },
    {
      name: 'availableInAlgeria',
      type: 'bool',
      facet: false,
    },
    {
      name: 'DrugCategories',
      type: 'string[]',
      facet: false,
    },
    {
      name: 'drugTemplate',
      type: 'string',
      index: true,
    },
  ],
  default_sorting_field: 'NOM_COMMERCIALE',
}

export default DrugsSchema
