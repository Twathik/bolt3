import { returnInterface } from '../CommonInterface'

export interface Formula_APGAR_Score_interface {
  formula: 'APGAR_Score'
  params: {
    activityMuscleTone: 'Active' | 'Some extremity flexion' | 'Limp'
    heartRate: number
    Grimace: 'Sneeze/cough' | 'Grimace' | 'None'
    appearanceColor: 'All pink' | 'Blue extremities, pink body' | 'Blue/pale'
    respirations: 'Good/crying' | 'Irregular/slow' | 'Absent'
  }
}

export interface Formula_APGAR_Score_return_interface extends returnInterface {
  score: number
  interpretation: 'normal' | 'fairly low' | 'critically low'
}

export const Formula_APGAR_Score = ({
  params: {
    activityMuscleTone,
    heartRate,
    Grimace,
    appearanceColor,
    respirations,
  },
}: Formula_APGAR_Score_interface): Formula_APGAR_Score_return_interface => {
  const link = 'https://www.mdcalc.com/calc/23/apgar-score'

  const score =
    +(activityMuscleTone === 'Active'
      ? 2
      : activityMuscleTone === 'Some extremity flexion'
      ? 1
      : 0) +
    +(heartRate >= 100 ? 2 : heartRate > 0 ? 1 : 0) +
    +(Grimace === 'Sneeze/cough' ? 2 : Grimace === 'Grimace' ? 1 : 0) +
    +(appearanceColor === 'All pink'
      ? 2
      : appearanceColor === 'Blue extremities, pink body'
      ? 1
      : 0) +
    +(respirations === 'Good/crying'
      ? 2
      : respirations === 'Irregular/slow'
      ? 1
      : 0)

  const interpretation: Formula_APGAR_Score_return_interface['interpretation'] =
    score >= 7 ? 'normal' : score >= 4 ? 'fairly low' : 'critically low'
  return {
    link,
    score,
    interpretation,
  }
}
