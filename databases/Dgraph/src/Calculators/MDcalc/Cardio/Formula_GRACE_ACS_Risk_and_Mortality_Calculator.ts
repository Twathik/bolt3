import { returnInterface } from '../CommonInterface'

export interface Formula_GRACE_ACS_Risk_and_Mortality_Calculator_interface {
  formula: 'GRACE_ACS_Risk_and_Mortality_Calculator'
  params: {
    age: number
    heartRate: number
    sBP: number
    creatinine: number
    cardiacArrestAtAdmission: boolean
    STsegmentDeviationOnEKG: boolean
    abnormalCardiacEnzymes: boolean
    killipClass:
      | 'No CHF'
      | 'Rales and/or JVD'
      | 'Pulmonary edema'
      | 'Cardiogenic shock'
  }
}

export interface Formula_GRACE_ACS_Risk_and_Mortality_Calculator_return_interface
  extends returnInterface {
  score: number
  interpretation: string
}

interface riskInterface {
  graceScoreRange: {
    min: number
    max: number
  }
  mortalityRisk: string
}

const riskScore: riskInterface[] = [
  {
    graceScoreRange: {
      min: 0,
      max: 87,
    },
    mortalityRisk: '0-2%',
  },
  {
    graceScoreRange: {
      min: 88,
      max: 128,
    },
    mortalityRisk: '3-10%',
  },
  {
    graceScoreRange: {
      min: 129,
      max: 149,
    },
    mortalityRisk: '10-20%',
  },
  {
    graceScoreRange: {
      min: 150,
      max: 173,
    },
    mortalityRisk: '20-30%',
  },
  {
    graceScoreRange: {
      min: 174,
      max: 182,
    },
    mortalityRisk: '40%',
  },
  {
    graceScoreRange: {
      min: 183,
      max: 190,
    },
    mortalityRisk: '50%',
  },
  {
    graceScoreRange: {
      min: 191,
      max: 199,
    },
    mortalityRisk: '60%',
  },
  {
    graceScoreRange: {
      min: 200,
      max: 207,
    },
    mortalityRisk: '70%',
  },
  {
    graceScoreRange: {
      min: 208,
      max: 218,
    },
    mortalityRisk: '80%',
  },
  {
    graceScoreRange: {
      min: 219,
      max: 284,
    },
    mortalityRisk: '90%',
  },
  {
    graceScoreRange: {
      min: 284,
      max: 1000,
    },
    mortalityRisk: '99%',
  },
]

export const Formula_GRACE_ACS_Risk_and_Mortality_Calculator = ({
  params: {
    STsegmentDeviationOnEKG,
    abnormalCardiacEnzymes,
    age,
    cardiacArrestAtAdmission,
    creatinine,
    heartRate,
    killipClass,
    sBP,
  },
}: Formula_GRACE_ACS_Risk_and_Mortality_Calculator_interface): Formula_GRACE_ACS_Risk_and_Mortality_Calculator_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/1099/grace-acs-risk-mortality-calculator'
  const ageScore =
    age < 35
      ? 0
      : age < 45
      ? 0 + (age - 35) * 1.8
      : age < 55
      ? 18 + (age - 45) * 1.8
      : age < 65
      ? 36 + (age - 55) * 1.8
      : age < 75
      ? 54 + (age - 65) * 1.9
      : age < 85
      ? 73 + (age - 75) * 1.8
      : age < 90
      ? 91 + (age - 85) * 1.8
      : 100

  const heartBeatScore =
    heartRate < 70
      ? 0
      : heartRate < 80
      ? 0 + (heartRate - 70) * 0.3
      : heartRate < 90
      ? 3 + (heartRate - 80) * 0.2
      : heartRate < 100
      ? 5 + (heartRate - 90) * 0.3
      : heartRate < 110
      ? 8 + (heartRate - 100) * 0.2
      : heartRate < 150
      ? 10 + (heartRate - 110) * 0.3
      : heartRate < 200
      ? 22 + (heartRate - 150) * 0.3
      : 34
  const sBpScore =
    sBP < 80
      ? 40
      : sBP < 100
      ? 40 - (sBP - 80) * 0.3
      : sBP < 110
      ? 34 - (sBP - 100) * 0.3
      : sBP < 120
      ? 31 - (sBP - 110) * 0.4
      : sBP < 130
      ? 27 - (sBP - 120) * 0.3
      : sBP < 140
      ? 24 - (sBP - 130) * 0.3
      : sBP < 150
      ? 20 - (sBP - 140) * 0.4
      : sBP < 160
      ? 17 - (sBP - 150) * 0.3
      : sBP < 180
      ? 14 - (sBP - 160) * 0.3
      : sBP < 200
      ? 8 - (sBP - 180) * 0.4
      : 0

  const creatinineScore =
    creatinine < 0.2
      ? 0 + (creatinine - 0) * (1 / 0.2)
      : creatinine < 0.4
      ? 1 + (creatinine - 0.2) * (2 / 0.2)
      : creatinine < 0.6
      ? 3 + (creatinine - 0.4) * (1 / 0.2)
      : creatinine < 0.8
      ? 4 + (creatinine - 0.6) * (2 / 0.2)
      : creatinine < 1.0
      ? 6 + (creatinine - 0.8) * (1 / 0.2)
      : creatinine < 1.2
      ? 7 + (creatinine - 1.0) * (1 / 0.2)
      : creatinine < 1.4
      ? 8 + (creatinine - 1.2) * (2 / 0.2)
      : creatinine < 1.6
      ? 10 + (creatinine - 1.4) * (1 / 0.2)
      : creatinine < 1.8
      ? 11 + (creatinine - 1.6) * (2 / 0.2)
      : creatinine < 2.0
      ? 13 + (creatinine - 1.8) * (1 / 0.2)
      : creatinine < 3.0
      ? 14 + (creatinine - 2.0) * (7 / 1)
      : creatinine < 4.0
      ? 21 + (creatinine - 3.0) * (7 / 1)
      : 28

  const killipScore =
    killipClass === 'No CHF'
      ? 0
      : killipClass === 'Rales and/or JVD'
      ? 15
      : killipClass === 'Pulmonary edema'
      ? 29
      : 44

  const score = +(
    ageScore +
    heartBeatScore +
    sBpScore +
    creatinineScore +
    killipScore +
    +cardiacArrestAtAdmission * 30 +
    +STsegmentDeviationOnEKG * 17 +
    +abnormalCardiacEnzymes * 13
  ).toFixed(0)

  const interpretation: string = riskScore.find(
    (e) => e.graceScoreRange.min <= score && e.graceScoreRange.max >= score,
  )!.mortalityRisk

  return {
    link,
    score,
    interpretation,
  }
}
