import { returnInterface } from '../CommonInterface'

export interface Formula_Duke_Treadmill_Score_interface {
  formula: 'Duke_Treadmill_Score'
  params: {
    // min
    DurationOfExercise: number
    // mm
    MaximalNetSTSegmentDeviation: number
    AnginaIndex:
      | 'No angina during exercise'
      | 'Non-limiting angina'
      | 'Patient stops exercising because of angina'
  }
}

export interface Formula_Duke_Treadmill_Score_return_interface
  extends returnInterface {
  score: number
  interpretation:
    | 'Low, Survival at 5 years 99%'
    | 'Medium, Survival at 5 years 95%'
    | 'High, Survival at 5 years 79%, Coronary angiography recommended'
}

export const Formula_Duke_Treadmill_Score = ({
  params: { AnginaIndex, DurationOfExercise, MaximalNetSTSegmentDeviation },
}: Formula_Duke_Treadmill_Score_interface): Formula_Duke_Treadmill_Score_return_interface => {
  const link = 'https://www.mdcalc.com/calc/3991/duke-treadmill-score'
  const score =
    DurationOfExercise -
    5 * MaximalNetSTSegmentDeviation -
    4 *
      (AnginaIndex === 'Patient stops exercising because of angina'
        ? 2
        : AnginaIndex === 'Non-limiting angina'
        ? 1
        : 0)
  const interpretation: Formula_Duke_Treadmill_Score_return_interface['interpretation'] =
    score >= 5
      ? 'Low, Survival at 5 years 99%'
      : score > -10
      ? 'Medium, Survival at 5 years 95%'
      : 'High, Survival at 5 years 79%, Coronary angiography recommended'
  return {
    link,
    score,
    interpretation,
  }
}
