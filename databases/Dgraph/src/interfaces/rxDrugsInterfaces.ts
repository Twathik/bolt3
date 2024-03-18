export type rx_classType =
  | 'ATC1-4'
  | 'MOA'
  | 'EPC'
  | 'CHEM'
  | 'PE'
  | 'DISEASE'
  | 'PK'
  | 'MESHPA'
  | 'VA'

export type RxConceptToClassRelationType =
  | ''
  | 'ATC4'
  | 'MESHPA'
  | 'ci_with'
  | 'has_ingredient'
  | 'has_moa'
  | 'has_pe'
  | 'may_prevent'
  | 'may_treat'
  | 'has_pk'
  | 'ci_chemclass'
  | 'ci_moa'
  | 'ci_pe'
  | 'may_diagnose'
  | 'has_active_metabolites'
  | 'site_of_metabolism'
  | 'induces'
  | 'has_VAClass_extended'
  | 'has_VAClass'
  | 'has_chemical_structure'
  | 'has_epc'

export interface rxNavDrugClassifications {
  rxcui: string
  name: string
  classes: {
    minConcept: { rxcui: string; name: string; tty: string }
    rxclassMinConceptItem: {
      classId: string
      className: string
      classType: rx_classType
    }
    rela: RxConceptToClassRelationType
    relaSource: 'ATC' | 'FDASPL' | 'MEDRT' | 'MESH' | 'VA'
    graph: {
      rxclassGraph: {
        rxclassMinConceptItem: {
          classId: string
          className: string
          classType: rx_classType
        }[]
        rxclassEdge?: { classId1: string; rela: 'isa'; classId2: string }[]
      }
    }
  }[]
}

export interface RxDrugsInteractions {
  nlmDisclaimer: string
  interactionTypeGroup?: {
    sourceDisclaimer: string
    sourceName: 'DrugBank' | 'ONCHigh'
    interactionType: {
      comment: string
      minConceptItem: {
        rxcui: string
        name: string
        tty: 'IN' | 'PIN'
      }
      interactionPair: {
        interactionConcept: {
          minConceptItem: {
            rxcui: string
            name: string
            tty: string
          }
          sourceConceptItem: {
            id: string
            name: string
            url: string
          }
        }[]
        severity: 'N/A' | 'high'
        description: string
      }[]
    }[]
  }[]
}

export interface formattedRxConcept {
  name: string
  rxcui: string
  tty?: string | null
}

export interface formattedRxClass {
  name: string
  classId: string
}

export interface formatDrugBank {
  DrugBankId: string
  DrugBankName: string
  DrugBankUrl: string
}

export interface RxConceptWithDrugBank {
  rxcui: string
  drugBank: formatDrugBank
}
