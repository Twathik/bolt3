export interface SubstancesIndexRawInterface {
  molecule: string
  classe: string
}

export interface SubstancesIndexFormattedInterface {
  molecule: string
  classes: {
    name: string
  }[]
}

export type DrugAnPregnancyCategory = 'A' | 'B1' | 'B2' | 'B3' | 'C' | 'D' | 'X'

export interface DrugsAndPregnancyRawInterface {
  Drugs: string
  Category: DrugAnPregnancyCategory
  ClassificationLevel1: string
  ClassificationLevel2: string
  ClassificationLevel3: string
}

export interface DrugsAndPregnancyFormattedInterface {
  Drugs: { name: string }[]
  Category: DrugAnPregnancyCategory
  ClassificationLevel1: string
  ClassificationLevel2: string
  ClassificationLevel3: string
  Observation: string
}

export interface DrugWithPregnancyInterface {
  id: string
  name: string
  category: string
  observation: string
}

export interface BFDrugFormattedInterface {
  id?: string
  name: string
  LastModificationType?: string
  LastModificationDate?: string
  relatedDrugs?: string[]
  keywords?: string[]
  DrugLevelAndEffect?: { title: string[]; content: string[] }[]
  references?: {
    title: string
    content: { articleTitle: string; pubId?: { id: string; type: string }[] }[]
  }
}

export interface BFDrugFormattedRDFinterface {
  BFId: string
  name: string
  LastModificationDate: string | null
  LastModificationType: string
}

export interface BFDrugLevelAndEffectInterface {
  id: string
  title: string
  content: string
}

export interface BFReferencesInterface {
  id: string
  articleTitle: string
  pubId: string
}

export interface PharmacokineticsPropertiesInterface {
  property: string
  description: string
}

export interface KidneyAndDrugIndexInterface {
  name: string
  page: number
}

export interface DoseInterpretationInterface {
  NormalUse: boolean
  NormalUseWithInstruction: boolean
  Avoid: boolean
  AvoidWithInstruction: boolean
  Adjust: boolean
}

export interface DoseInRenalImpairmentGFRRangeInterface
  extends DoseInterpretationInterface {
  range: string
  Dose: string
}

export interface RenalReplacementTherapiesInterface
  extends DoseInterpretationInterface {
  technique: string
  Dose: string
}

export interface AdministrationDetailsInterface {
  detail: string
  comment: string
}
export interface KidneyAndDrugFormattedInterface {
  name: string
  page: string
  ClinicalUse: string
  DoseInNormalRenalFunction: string
  Pharmacokinetics: PharmacokineticsPropertiesInterface[]
  Metabolism: string
  DoseInRenalImpairmentGFR: {
    observation: string
    ranges: DoseInRenalImpairmentGFRRangeInterface[]
  }
  DoseInPatientsUndergoingRenalReplacementTherapies: RenalReplacementTherapiesInterface[]
  ImportantDrugInteractions: string
  Administration: AdministrationDetailsInterface[]
  OtherInformation: string
}

export interface AlgerianDrugsRawInterface {
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
}

export interface AlgerianAvailableDrugsInterface {
  CODE: string
  DCI: string
  FORME: string
  DOSAGE: string
  COND: string
  MARQUE: string
}

export interface AlgerianDrugsFormattedInterface
  extends AlgerianDrugsRawInterface {
  availableInAlgeria: boolean
}

export interface AlgerianDrugsLinkedToMedicalInteractionsInterface
  extends AlgerianDrugsFormattedInterface {
  InteractionIndexLink: string[]
}
export interface AlgerianDrugsWithPregnancyInterface
  extends AlgerianDrugsLinkedToMedicalInteractionsInterface {
  PregnancyIndexLink: string[]
}

export interface AlgerianDrugsPrepareToRxIntegrationInterface
  extends AlgerianDrugsWithPregnancyInterface {
  PregnancyIndexLink: string[]
  rx: {
    rxcui?: string
    name?: string
    tty?: string
  }[]
}

export interface AlgerianDrugsWithPregnancyInterfaceWithId
  extends AlgerianDrugsPrepareToRxIntegrationInterface {
  id: number
}

export interface DedupedFinalaDrugInterface {
  rx: {
    rxcui?: string
    name?: string
    tty?: string
  }[]
  PregnancyIndexLink: string[]
  DCI: string
  NOM_COMMERCIALE: string
  DOSAGE: string[]
  FORME: string[]
  DrugCategories: string[]
}

export interface AlgerianDrugsDciWithRxInterface {
  id?: number
  DCI: string
  rx: {
    rxcui?: string
    name?: string
    tty?: string
  }[]
}

export interface DciWithRxConcatIdsInterface {
  ids?: number[]
  DCI: string
  rx: {
    rxcui?: string
    name?: string
    tty?: string
  }[]
}

export interface RxNAvIdswithAlDrugsIdsInterface {
  localId?: number
  ids?: number[]
  rxcui?: string
  name?: string
  tty?: string
}

export interface AlgerianNomFormattedRDFinterface {
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
  availableInAlgeria: boolean
}

export interface RxNavBFMapping extends RxNAvIdswithAlDrugsIdsInterface {
  BF_mapping: string
}
export interface RxNavKidneyMapping extends RxNavBFMapping {
  kidney_mapping: string | string[]
}

export interface RxCentralMapping extends RxNavKidneyMapping {}

export interface G6PDinteractionsInterface {
  name: string
  CAT: string
  commentary: string
}

export interface ANSMMedicalInteractionsInterface {
  molecule: string
  classe: string[]
  interactions: {
    class_ou_molecule: string
    commentaire: string
    conduite: string
    commentaire_conduite: string
  }[]
}
export interface ANSMMoleculesInterface {
  molecule: string
  classes: { name: string }[]
}

export interface DrugKidneyRDFinterface {
  id: string
  name: string
  page: number
  ClinicalUse: string
  DoseInNormalRenalFunction: string
  Pharmacokinetics?: PharmacokineticsRDFinterface[]
  Metabolism: string
  DoseInRenalImpairmentGFRObservation: string
  DoseInRenalImpairmentGFRRanges?: DoseInRenalImpairmentGFRRangesRDFinterface[]
  DoseInPatientsUndergoingRenalReplacementTherapies?: DoseInPatientsUndergoingRenalReplacementTherapiesRDFinterface[]
  ImportantDrugInteractions: string
  Administration?: RenalDrugsAdministrationRDFinterface[]
  OtherInformation: string
}

export interface PharmacokineticsRDFinterface {
  id: string
  property: string
  description: string
}

export interface DoseInRenalImpairmentGFRRangesRDFinterface {
  id: string
  range: string
  Dose: string
  NormalUse: boolean
  NormalUseWithInstruction: boolean
  Avoid: boolean
  AvoidWithInstruction: boolean
  Adjust: boolean
}

export interface DoseInPatientsUndergoingRenalReplacementTherapiesRDFinterface {
  id: string
  technique: string
  Dose: string
  NormalUse: boolean
  NormalUseWithInstruction: boolean
  Avoid: boolean
  AvoidWithInstruction: boolean
  Adjust: boolean
}

export interface RenalDrugsAdministrationRDFinterface {
  id: string
  detail: string
  comment: string
}

export interface ANSMmoleculesRDFinterface {
  id: string
  name: string
}

export interface ANSMclassRDFinterface {
  id: string
  name: string
}
