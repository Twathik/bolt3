export interface AlgerianDrugsWithRxInterface {
  N_ENREGISTREMENT: string
  CODE_DCI: string
  DCI: string
  NOM_COMMERCIALE: string
  FORME: string
  DOSAGE: string
  COND: string
  LISTE: string
  P1: string
  P2: string
  OBS: string
  LABORATOIRES_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT: string
  PAYS_DU_LABORATOIRE_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT: string
  DATE_D_ENREGISTREMENT_INITIAL: string
  DATE_D_ENREGISTREMENT_FINAL: string
  TYPE: string
  STATUT: string
  DUREE_DE_STABILITE: string
  DrugCategories: string[]
  availableInAlgeria: boolean
  InteractionIndexLink: string[]
  PregnancyIndexLink: string[]
  rx: {
    rxcui?: string
    name?: string
    tty?: string
  }[]
}
