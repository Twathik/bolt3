import { Formula_Creatinine_Clearance_Cockcroft_Gault_Equation } from '../Biology/Formula_Creatinine_Clearance_Cockcroft_Gault_Equation'
import { returnInterface, sex } from '../CommonInterface'

export interface Formula_CRUSADE_Score_for_Post_MI_Bleeding_Risk_interface {
  formula: 'CRUSADE_Score_for_Post_MI_Bleeding_Risk'
  params: {
    sex: sex
    age: number
    // kg
    weight: number
    // mg/dl
    creatinine: number
    // cm
    height: number
    heartRate: number
    sBP: number
    hematocrit: number
    SignsOfCHFAtPresentation: boolean
    HistoryOfVascularDisease: boolean
    HistoryOfDiabetesMellitus: boolean
  }
}

export interface Formula_CRUSADE_Score_for_Post_MI_Bleeding_Risk_return_interface
  extends returnInterface {
  score: number
  interpretation:
    | 'very low risk'
    | 'low risk'
    | 'moderate risk'
    | 'high risk'
    | 'very high risk'
}

export const Formula_CRUSADE_Score_for_Post_MI_Bleeding_Risk = ({
  params: {
    HistoryOfDiabetesMellitus,
    HistoryOfVascularDisease,
    SignsOfCHFAtPresentation,
    age,
    creatinine,
    heartRate,
    height,
    hematocrit,
    sBP,
    sex,
    weight,
  },
}: Formula_CRUSADE_Score_for_Post_MI_Bleeding_Risk_interface): Formula_CRUSADE_Score_for_Post_MI_Bleeding_Risk_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/1784/crusade-score-post-mi-bleeding-risk'

  const HematocritScore =
    hematocrit >= 40
      ? 0
      : hematocrit >= 37
      ? 2
      : hematocrit >= 34
      ? 3
      : hematocrit >= 31
      ? 7
      : 9

  const Cockcroft_Gault_CrCl =
    Formula_Creatinine_Clearance_Cockcroft_Gault_Equation({
      formula: 'Creatinine_Clearance_Cockcroft_Gault_Equation',
      params: { age, creatinine, height, sex, weight },
    }).Cockcroft_Gault_CrCl

  console.log({ Cockcroft_Gault_CrCl })

  const ClearanceScore =
    Cockcroft_Gault_CrCl > 120
      ? 0
      : Cockcroft_Gault_CrCl > 90
      ? 7
      : Cockcroft_Gault_CrCl > 60
      ? 17
      : Cockcroft_Gault_CrCl > 30
      ? 28
      : Cockcroft_Gault_CrCl > 15
      ? 35
      : 39

  const HeartRateScore =
    heartRate >= 121
      ? 11
      : heartRate >= 111
      ? 10
      : heartRate >= 101
      ? 8
      : heartRate >= 91
      ? 6
      : heartRate >= 81
      ? 3
      : heartRate >= 71
      ? 1
      : 0

  const SexScore = sex === 'Female' ? 8 : 0

  const SignsOfCHFAtPresentationScore = SignsOfCHFAtPresentation ? 7 : 0

  const HistoryOfDiabetesMellitusScore = HistoryOfDiabetesMellitus ? 6 : 0

  const HistoryOfVascularDiseaseScore = HistoryOfVascularDisease ? 6 : 0

  const sBPScore =
    sBP >= 201
      ? 5
      : sBP >= 181
      ? 3
      : sBP >= 121
      ? 1
      : sBP >= 101
      ? 5
      : sBP >= 91
      ? 8
      : 10

  const score =
    HematocritScore +
    ClearanceScore +
    HeartRateScore +
    SexScore +
    SignsOfCHFAtPresentationScore +
    HistoryOfDiabetesMellitusScore +
    HistoryOfVascularDiseaseScore +
    sBPScore

  const interpretation: Formula_CRUSADE_Score_for_Post_MI_Bleeding_Risk_return_interface['interpretation'] =
    score > 50
      ? 'very high risk'
      : score >= 41
      ? 'high risk'
      : score >= 31
      ? 'moderate risk'
      : score >= 21
      ? 'low risk'
      : 'very low risk'

  return {
    link,
    score,
    interpretation,
  }
}
