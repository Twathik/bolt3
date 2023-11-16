import { returnInterface } from '../CommonInterface'

export interface Formula_Wells_Criteria_for_Pulmonary_Embolism_interface {
  formula: 'Wells_Criteria_for_Pulmonary_Embolism'
  params: {
    clinicalSignsAndSymptomsOfDVT: boolean
    PEIsNbr1DiagnosisOrEquallyLikely: boolean
    heartRate: number
    immobilizationAtLeast3DaysOrSurgeryInThePrevious4Weeks: boolean
    previousObjectivelyDiagnosedPEOrDVT: boolean
    hemoptysis: boolean
    malignancyWithOrNotTreatmentWithin6MonthsOrPalliative: boolean
  }
}

export interface Formula_Wells_Criteria_for_Pulmonary_Embolism_return_interface
  extends returnInterface {
  score: number
  interpretation:
    | 'Low Risk, 1.3% chance of PE in an ED population'
    | 'Moderate Risk, 16.2% chance of PE in an ED population'
    | 'High Risk, 37.5% chance of PE in an ED population'
}

export const Formula_Wells_Criteria_for_Pulmonary_Embolism = ({
  params: {
    clinicalSignsAndSymptomsOfDVT,
    PEIsNbr1DiagnosisOrEquallyLikely,
    heartRate,
    immobilizationAtLeast3DaysOrSurgeryInThePrevious4Weeks,
    previousObjectivelyDiagnosedPEOrDVT,
    hemoptysis,
    malignancyWithOrNotTreatmentWithin6MonthsOrPalliative,
  },
}: Formula_Wells_Criteria_for_Pulmonary_Embolism_interface): Formula_Wells_Criteria_for_Pulmonary_Embolism_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/115/wells-criteria-pulmonary-embolism'

  const score =
    +clinicalSignsAndSymptomsOfDVT * 3 +
    +PEIsNbr1DiagnosisOrEquallyLikely * 3 +
    +(heartRate > 100) * 1.5 +
    +immobilizationAtLeast3DaysOrSurgeryInThePrevious4Weeks * 1.5 +
    +previousObjectivelyDiagnosedPEOrDVT * 1.5 +
    +hemoptysis +
    +malignancyWithOrNotTreatmentWithin6MonthsOrPalliative

  const interpretation: Formula_Wells_Criteria_for_Pulmonary_Embolism_return_interface['interpretation'] =
    score > 6
      ? 'High Risk, 37.5% chance of PE in an ED population'
      : score >= 2
      ? 'Moderate Risk, 16.2% chance of PE in an ED population'
      : 'Low Risk, 1.3% chance of PE in an ED population'
  return {
    link,
    score,
    interpretation,
  }
}
