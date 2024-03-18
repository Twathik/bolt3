import { returnInterface } from '../CommonInterface'

export interface Formula_Geneva_Score_for_Pulmonary_Embolism_interface {
  formula: 'Geneva_Score_for_Pulmonary_Embolism'
  params: {
    age: number
    previousDvtOrPE: boolean
    surgeryUnderGeneralAnesthesiaOrLowerLimbFractureInPastMonth: number
    // Solid or hematologic malignant condition, currently active or considered cured < 1 year
    activeMalignantCondition: boolean
    unilateralLowerLimbPain: boolean
    hemoptysis: boolean
    heartRate: number
    painOnLowerLimbPalpationAndUnilateralEdema: boolean
  }
}

export interface Formula_Geneva_Score_for_Pulmonary_Embolism_return_interface
  extends returnInterface {
  score: number
  interpretation:
    | 'Low risk group: 7-9% incidence of PE from several studies.'
    | 'Moderate risk group: ~20-30% incidence of PE from several studies.'
    | 'High risk group: > 60% incidence of PE from several studies.'
}

export const Formula_Geneva_Score_for_Pulmonary_Embolism = ({
  params: {
    age,
    previousDvtOrPE,
    surgeryUnderGeneralAnesthesiaOrLowerLimbFractureInPastMonth,
    activeMalignantCondition,
    unilateralLowerLimbPain,
    hemoptysis,
    heartRate,
    painOnLowerLimbPalpationAndUnilateralEdema,
  },
}: Formula_Geneva_Score_for_Pulmonary_Embolism_interface): Formula_Geneva_Score_for_Pulmonary_Embolism_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/1750/geneva-score-revised-pulmonary-embolism'

  const score =
    +(age > 65) +
    +previousDvtOrPE * 3 +
    +surgeryUnderGeneralAnesthesiaOrLowerLimbFractureInPastMonth * 2 +
    +activeMalignantCondition * 2 +
    +unilateralLowerLimbPain * 3 +
    +hemoptysis * 2 +
    (heartRate >= 95 ? 5 : heartRate >= 75 ? 3 : 0) +
    +painOnLowerLimbPalpationAndUnilateralEdema * 4

  const interpretation: Formula_Geneva_Score_for_Pulmonary_Embolism_return_interface['interpretation'] =
    score >= 11
      ? 'High risk group: > 60% incidence of PE from several studies.'
      : score >= 4
      ? 'Moderate risk group: ~20-30% incidence of PE from several studies.'
      : 'Low risk group: 7-9% incidence of PE from several studies.'
  return {
    link,
    score,
    interpretation,
  }
}
