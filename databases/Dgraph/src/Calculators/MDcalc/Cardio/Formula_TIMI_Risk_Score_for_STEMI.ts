import { returnInterface } from '../CommonInterface'

export interface Formula_TIMI_Risk_Score_for_STEMI_interface {
  formula: 'TIMI_Risk_Score_for_STEMI'
  params: {
    age: number
    diabetesHypertensionOrAngina: boolean
    sBP: number
    heartRate: number
    // JVD or any pulmonary exam findings of CHF
    killipClassIItoIV: boolean
    weight: number
    anteriorSTElevationOrLBBB: boolean
    timeToTreatmentMoreThen4Hours: boolean
  }
}

interface riskScore {
  score: number
  risk: string
}

export interface Formula_TIMI_Risk_Score_for_STEMI_return_interface
  extends returnInterface {
  score: number
  interpretation: string
}

const risk: riskScore[] = [
  {
    score: 0,
    risk: '0.8% risk of all-cause mortality at 30 days.',
  },
  {
    score: 1,
    risk: '1.6% risk of all-cause mortality at 30 days.',
  },
  {
    score: 2,
    risk: '2.2% risk of all-cause mortality at 30 days.',
  },
  {
    score: 3,
    risk: '4.4% risk of all-cause mortality at 30 days.',
  },
  {
    score: 4,
    risk: '7.3% risk of all-cause mortality at 30 days.',
  },
  {
    score: 5,
    risk: '12.4% risk of all-cause mortality at 30 days.',
  },
  {
    score: 6,
    risk: '16.1% risk of all-cause mortality at 30 days.',
  },
  {
    score: 7,
    risk: '23.4% risk of all-cause mortality at 30 days.',
  },
  {
    score: 8,
    risk: '26.8% risk of all-cause mortality at 30 days.',
  },
  {
    score: 9,
    risk: '35.9% risk of all-cause mortality at 30 days.',
  },
  {
    score: 10,
    risk: '35.9% risk of all-cause mortality at 30 days.',
  },
  {
    score: 11,
    risk: '35.9% risk of all-cause mortality at 30 days.',
  },
  {
    score: 12,
    risk: '35.9% risk of all-cause mortality at 30 days.',
  },
  {
    score: 13,
    risk: '35.9% risk of all-cause mortality at 30 days.',
  },
  {
    score: 14,
    risk: '35.9% risk of all-cause mortality at 30 days.',
  },
]

export const Formula_TIMI_Risk_Score_for_STEMI = ({
  params: {
    age,
    diabetesHypertensionOrAngina,
    sBP,
    heartRate,
    killipClassIItoIV,
    weight,
    anteriorSTElevationOrLBBB,
    timeToTreatmentMoreThen4Hours,
  },
}: Formula_TIMI_Risk_Score_for_STEMI_interface): Formula_TIMI_Risk_Score_for_STEMI_return_interface => {
  const link = 'https://www.mdcalc.com/calc/99/timi-risk-score-stemi'

  const score =
    (age >= 75 ? 3 : age >= 65 ? 2 : 0) +
    +diabetesHypertensionOrAngina +
    +(sBP < 100) * 3 +
    +(heartRate > 100) * 2 +
    +killipClassIItoIV * 2 +
    +(weight < 67) +
    +anteriorSTElevationOrLBBB +
    +timeToTreatmentMoreThen4Hours
  const interpretation = risk.find((e) => e.score === score)!.risk

  return { link, score, interpretation }
}
