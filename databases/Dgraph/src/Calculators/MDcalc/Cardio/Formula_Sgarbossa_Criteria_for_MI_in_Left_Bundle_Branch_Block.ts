import { returnInterface } from '../CommonInterface'

export interface Formula_Sgarbossa_Criteria_for_MI_in_Left_Bundle_Branch_Block_interface {
  formula: 'Sgarbossa_Criteria_for_MI_in_Left_Bundle_Branch_Block'
  params: {
    concordantStElevation1MmInLeadsWithAPositiveQrsComplex: boolean
    concordantStDepressionMoreThen1MmInV1V3: boolean
    // In proportion to the preceding S-wave (or R-wave) as determined by 1) at least 1 mm of ST elevation (or depression) AND 2) an ST/S ratio ≤-0.25
    excessivelyDiscordantStElevationOrDepressionInLeadsWithANegativeQrs: boolean
  }
}

export interface Formula_Sgarbossa_Criteria_for_MI_in_Left_Bundle_Branch_Block_return_interface
  extends returnInterface {
  score: number
  interpretation:
    | 'In the original Sgarbossa criteria, a score of <3 typically is not considered diagnostic of acute MI, but also does not rule out MI. In concerning patients, repeating EKGs and cardiac enzymes may be helpful, along with cardiology consultation. \nNOTE: the Modified Sgarbossa Criteria (which changes the third criteria) does not use the points system, it is positive if any criteria are met.'
    | 'A score of ≥ 3 has a specificity of 90% for diagnosing acute MI.\n Note: the Modified Sgarbossa Criteria (which changes the third criteria) does not use the points system, it is positive if any criteria are met.'
}

export const Formula_Sgarbossa_Criteria_for_MI_in_Left_Bundle_Branch_Block = ({
  params: {
    concordantStDepressionMoreThen1MmInV1V3,
    concordantStElevation1MmInLeadsWithAPositiveQrsComplex,
    excessivelyDiscordantStElevationOrDepressionInLeadsWithANegativeQrs,
  },
}: Formula_Sgarbossa_Criteria_for_MI_in_Left_Bundle_Branch_Block_interface): Formula_Sgarbossa_Criteria_for_MI_in_Left_Bundle_Branch_Block_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/1732/sgarbossas-criteria-mi-left-bundle-branch-block'
  const score =
    +concordantStDepressionMoreThen1MmInV1V3 * 5 +
    +concordantStElevation1MmInLeadsWithAPositiveQrsComplex * 3 +
    +excessivelyDiscordantStElevationOrDepressionInLeadsWithANegativeQrs * 2

  const interpretation: Formula_Sgarbossa_Criteria_for_MI_in_Left_Bundle_Branch_Block_return_interface['interpretation'] =
    score >= 3
      ? 'A score of ≥ 3 has a specificity of 90% for diagnosing acute MI.\n Note: the Modified Sgarbossa Criteria (which changes the third criteria) does not use the points system, it is positive if any criteria are met.'
      : 'In the original Sgarbossa criteria, a score of <3 typically is not considered diagnostic of acute MI, but also does not rule out MI. In concerning patients, repeating EKGs and cardiac enzymes may be helpful, along with cardiology consultation. \nNOTE: the Modified Sgarbossa Criteria (which changes the third criteria) does not use the points system, it is positive if any criteria are met.'
  return {
    link,
    score,
    interpretation,
  }
}
