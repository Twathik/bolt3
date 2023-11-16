import { returnInterface } from '../CommonInterface'

export interface Formula_ACEF_II_risk_score_cardiac_surgery_interface {
  formula: 'ACEF_II_risk_score_cardiac_surgery'
  params: {
    age: number
    // On most recent assessment
    ejectionFraction: number
    // Last recorded value before surgery
    creatinine: '≤2.0 mg/dL (177 µmol/L)' | '>2.0 mg/dL (177 µmol/L)'
    // Emergency = operation required before the beginning of the next working day after decision to operate
    emergencySurgery: boolean
    // Last recorded value before surgery
    hematocrit: number
  }
}

export interface Formula_ACEF_II_risk_score_cardiac_surgery_return_interface
  extends returnInterface {
  ACEF_II_Risk_Score: number
  Predicted30day_operative_mortality: number
}

export const Formula_ACEF_II_risk_score_cardiac_surgery = ({
  params: { age, creatinine, ejectionFraction, emergencySurgery, hematocrit },
}: Formula_ACEF_II_risk_score_cardiac_surgery_interface): Formula_ACEF_II_risk_score_cardiac_surgery_return_interface => {
  const ACEF_II_Risk_Score =
    age / ejectionFraction +
    (creatinine === '>2.0 mg/dL (177 µmol/L)' ? 2 : 0) +
    (emergencySurgery ? 3 : 0) +
    (hematocrit >= 36 ? 0 : 0.2 * (36 - hematocrit))

  const x = -4.86 + 0.75 * ACEF_II_Risk_Score

  const Predicted30day_operative_mortality = +(
    (Math.exp(x) / (1 + Math.exp(x))) *
    100
  ).toFixed(1)
  return {
    link: 'https://www.mdcalc.com/calc/10075/acef-ii-risk-score-cardiac-surgery',
    ACEF_II_Risk_Score,
    Predicted30day_operative_mortality,
  }
}
