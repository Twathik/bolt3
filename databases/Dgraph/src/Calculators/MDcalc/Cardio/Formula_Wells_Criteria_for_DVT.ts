import { returnInterface } from '../CommonInterface'

export interface Formula_Wells_Criteria_for_DVT_interface {
  formula: 'Wells_Criteria_for_DVT'
  params: {
    // Treatment or palliation within 6 months
    activeCancer: boolean
    bedriddenRecentlyMoreThen3DaysOrMajorSurgeryWithin12Weeks: boolean
    // Measured 10 cm below tibial tuberosity
    calfSwellingMoreThen3CmComparedToTheOtherLeg: boolean
    collateralNonvaricoseSuperficialVeinsPresent: boolean
    entireLegSwollen: boolean
    localizedTendernessAlongTheDeepVenousSystem: boolean
    pittingEdemaConfinedToSymptomaticLeg: boolean
    paralysisParesisOrRecentPlasterImmobilizationOfTheLowerExtremity: boolean
    previouslyDocumentedDvt: boolean
    alternativeDiagnosisToDvtAsLikelyOrMoreLikely: boolean
  }
}

export interface Formula_Wells_Criteria_for_DVT_return_interface
  extends returnInterface {
  score: number
  interpretation:
    | 'Risk group: Low/unlikely, Prevalence of DVT: 5%'
    | 'Risk group: Moderate, Prevalence of DVT: 17%'
    | 'Risk group: High/likely, Prevalence of DVT: 17-53%'
}

export const Formula_Wells_Criteria_for_DVT = ({
  params: {
    activeCancer,
    bedriddenRecentlyMoreThen3DaysOrMajorSurgeryWithin12Weeks,
    calfSwellingMoreThen3CmComparedToTheOtherLeg,
    collateralNonvaricoseSuperficialVeinsPresent,
    entireLegSwollen,
    localizedTendernessAlongTheDeepVenousSystem,
    pittingEdemaConfinedToSymptomaticLeg,
    paralysisParesisOrRecentPlasterImmobilizationOfTheLowerExtremity,
    previouslyDocumentedDvt,
    alternativeDiagnosisToDvtAsLikelyOrMoreLikely,
  },
}: Formula_Wells_Criteria_for_DVT_interface): Formula_Wells_Criteria_for_DVT_return_interface => {
  const link = 'https://www.mdcalc.com/calc/362/wells-criteria-dvt'

  const score =
    +activeCancer +
    +bedriddenRecentlyMoreThen3DaysOrMajorSurgeryWithin12Weeks +
    +calfSwellingMoreThen3CmComparedToTheOtherLeg +
    +collateralNonvaricoseSuperficialVeinsPresent +
    +entireLegSwollen +
    +localizedTendernessAlongTheDeepVenousSystem +
    +pittingEdemaConfinedToSymptomaticLeg +
    +paralysisParesisOrRecentPlasterImmobilizationOfTheLowerExtremity +
    +previouslyDocumentedDvt +
    +alternativeDiagnosisToDvtAsLikelyOrMoreLikely * -2

  const interpretation: Formula_Wells_Criteria_for_DVT_return_interface['interpretation'] =
    score >= 3
      ? 'Risk group: High/likely, Prevalence of DVT: 17-53%'
      : score >= 1
      ? 'Risk group: Moderate, Prevalence of DVT: 17%'
      : 'Risk group: Low/unlikely, Prevalence of DVT: 5%'

  return {
    link,
    score,
    interpretation,
  }
}
