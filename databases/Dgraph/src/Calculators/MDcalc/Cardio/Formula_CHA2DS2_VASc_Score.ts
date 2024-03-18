import { returnInterface, sex } from '../CommonInterface'

export interface Formula_CHA2DS2_VASc_Score_interface {
  formula: 'CHA2DS2_VASc_Score'
  params: {
    age: number
    sex: sex
    CHFHistory: boolean
    HTN: boolean
    ThromboEmbolismHistory: boolean
    VascularDiseaseHistory: boolean
    Diabetes: boolean
  }
}

export interface Formula_CHA2DS2_VASc_Score_return_interface
  extends returnInterface {
  score: number
  riskOfIschemicStroke: string
  RiskOfStrokeTIASystemicEmbolism: string
  comment: string
}

interface riskEvaluationInterface {
  score: number
  riskOfIschemicStroke: string
  RiskOfStrokeTIASystemicEmbolism: string
}

const riskEvaluation: riskEvaluationInterface[] = [
  {
    score: 0,
    riskOfIschemicStroke: '0.2%',
    RiskOfStrokeTIASystemicEmbolism: '0.3%',
  },
  {
    score: 1,
    riskOfIschemicStroke: '0.6%',
    RiskOfStrokeTIASystemicEmbolism: '0.9%',
  },
  {
    score: 2,
    riskOfIschemicStroke: '2.2%',
    RiskOfStrokeTIASystemicEmbolism: '2.9%',
  },
  {
    score: 3,
    riskOfIschemicStroke: '3.2%',
    RiskOfStrokeTIASystemicEmbolism: '4.6%',
  },
  {
    score: 4,
    riskOfIschemicStroke: '4.8%',
    RiskOfStrokeTIASystemicEmbolism: '6.7%',
  },
  {
    score: 5,
    riskOfIschemicStroke: '7.2%',
    RiskOfStrokeTIASystemicEmbolism: '10.0%',
  },
  {
    score: 6,
    riskOfIschemicStroke: '9.7%',
    RiskOfStrokeTIASystemicEmbolism: '13.6%',
  },
  {
    score: 7,
    riskOfIschemicStroke: '11.2%',
    RiskOfStrokeTIASystemicEmbolism: '15.7%',
  },
  {
    score: 8,
    riskOfIschemicStroke: '10.8%',
    RiskOfStrokeTIASystemicEmbolism: '15.2%',
  },
  {
    score: 9,
    riskOfIschemicStroke: '12.2%',
    RiskOfStrokeTIASystemicEmbolism: '17.4%',
  },
]

export const Formula_CHA2DS2_VASc_Score = ({
  params: {
    CHFHistory,
    HTN,
    ThromboEmbolismHistory,
    VascularDiseaseHistory,
    age,
    sex,
    Diabetes,
  },
}: Formula_CHA2DS2_VASc_Score_interface): Formula_CHA2DS2_VASc_Score_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/801/cha2ds2-vasc-score-atrial-fibrillation-stroke-risk'
  const score =
    (age < 65 ? 0 : age >= 75 ? 2 : 1) +
    (sex === 'Female' ? 1 : 0) +
    (HTN ? 1 : 0) +
    (CHFHistory ? 1 : 0) +
    (VascularDiseaseHistory ? 1 : 0) +
    (ThromboEmbolismHistory ? 2 : 0) +
    (Diabetes ? 1 : 0)
  const risk = riskEvaluation.find((e) => e.score === score)!

  let comment = ''

  if (sex === 'Female') {
    comment =
      score === 1
        ? ' no clinical risk factors, low risk, patient may not require anticoagulation'
        : score === 2
        ? 'low-moderate risk, you should consider antiplatelet or anticoagulation;'
        : 'moderate-high risk, you should otherwise be an anticoagulation candidate'
  } else {
    comment =
      score === 0
        ? ' no clinical risk factors, low risk, patient may not require anticoagulation'
        : score === 1
        ? 'low-moderate risk, you should consider antiplatelet or anticoagulation;'
        : 'moderate-high risk, you should otherwise be an anticoagulation candidate'
  }

  return {
    link,
    ...risk,
    comment,
  }
}
