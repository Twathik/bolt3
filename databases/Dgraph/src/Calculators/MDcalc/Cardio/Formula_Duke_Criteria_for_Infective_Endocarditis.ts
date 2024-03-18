import { returnInterface } from '../CommonInterface'

export interface Formula_Duke_Criteria_for_Infective_Endocarditis_interface {
  formula: 'Duke_Criteria_for_Infective_Endocarditis'
  params: {
    // Demonstrated by culture or histologic examination of a vegetation, a vegetation that has embolized, or an intracardiac abscess specimen.
    microorganismsInAVegetation: boolean
    // Vegetation or intracardiac abscess confirmed by histologic examination showing active endocarditis.
    pathologicLesions: boolean
    // Typical microorganisms consistent with IE from 2 separate blood cultures, microorganisms consistent with IE from persistently positive blood cultures, single positive blood culture for Coxiella burnetii or antiphase I IgG antibody titer >1:800.
    bloodCulturesPositiveForEndocarditis: boolean
    // Echocardiogram positive for IE, abscess, new partial dehiscence of prosthetic valve, new valvular regurgitation. Note: Worsening or changing of pre-existing murmur NOT sufficient.
    evidenceOfEndocardialInvolvement: boolean
    predisposingHeartConditionOrInjectionDrugUse: boolean
    fever: boolean
    // Major arterial emboli, septic pulmonary infarcts, mycotic aneurysm, intracranial hemorrhage, conjunctival hemorrhages, and Janeway’s lesions.
    vascularPhenomena: boolean
    // Glomerulonephritis, Osler’s nodes, Roth’s spots, and rheumatoid factor.
    immunologicPhenomena: boolean
    // Positive blood culture but does not meet a major criterion as noted above or serological evidence of active infection with organism consistent with IE.
    microbiologicalEvidence: boolean
  }
}

export interface Formula_Duke_Criteria_for_Infective_Endocarditis_return_interface
  extends returnInterface {
  interpretation: 'definite' | 'possible' | 'rejected'
}

export const Formula_Duke_Criteria_for_Infective_Endocarditis = ({
  params: {
    bloodCulturesPositiveForEndocarditis,
    evidenceOfEndocardialInvolvement,
    fever,
    immunologicPhenomena,
    microbiologicalEvidence,
    microorganismsInAVegetation,
    pathologicLesions,
    predisposingHeartConditionOrInjectionDrugUse,
    vascularPhenomena,
  },
}: Formula_Duke_Criteria_for_Infective_Endocarditis_interface): Formula_Duke_Criteria_for_Infective_Endocarditis_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/1731/duke-criteria-infective-endocarditis'
  const definiteScore = +microorganismsInAVegetation + +pathologicLesions
  const majorScore =
    +bloodCulturesPositiveForEndocarditis + +evidenceOfEndocardialInvolvement
  const minorScore =
    +fever +
    +immunologicPhenomena +
    +microbiologicalEvidence +
    +predisposingHeartConditionOrInjectionDrugUse +
    +vascularPhenomena
  const interpretation: Formula_Duke_Criteria_for_Infective_Endocarditis_return_interface['interpretation'] =
    definiteScore > 0 || majorScore === 2
      ? 'definite'
      : majorScore === 1 && minorScore >= 3
      ? 'definite'
      : majorScore === 1 && minorScore > 0
      ? 'possible'
      : minorScore === 5
      ? 'definite'
      : minorScore > 2
      ? 'possible'
      : 'rejected'

  return {
    link,
    interpretation,
  }
}
