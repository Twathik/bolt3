import { returnInterface, sex } from '../CommonInterface'

export interface Formula_Pulmonary_Embolism_Severity_Index_PESI_interface {
  formula: 'Pulmonary_Embolism_Severity_Index_PESI'
  params: {
    age: number
    sex: sex
    historyOfCancer: boolean
    historyOfHeartFailure: boolean
    historyOfChronicLungDisease: boolean
    heartRate: number
    sBP: number
    respiratoryRate: number
    temperature: number
    // disorientation, lethargy, stupor, or coma
    alteredMentalStatus: boolean
    o2Saturation: number
  }
}

interface riskInterface {
  score: {
    min: number
    max: number
  }
  interpretation: {
    class: 'I' | 'II' | 'III' | 'IV' | 'V'
    risk30DayMortality: string
  }
}

export interface Formula_Pulmonary_Embolism_Severity_Index_PESI_return_interface
  extends returnInterface {
  score: number
  interpretation: riskInterface['interpretation']
}

const risk: riskInterface[] = [
  {
    score: {
      min: 0,
      max: 65,
    },
    interpretation: {
      class: 'I',
      risk30DayMortality: '0.0-1.6%',
    },
  },
  {
    score: {
      min: 66,
      max: 85,
    },
    interpretation: {
      class: 'II',
      risk30DayMortality: '1.7-3.5%',
    },
  },
  {
    score: {
      min: 86,
      max: 105,
    },
    interpretation: {
      class: 'III',
      risk30DayMortality: '3.2-7.1%',
    },
  },
  {
    score: {
      min: 106,
      max: 125,
    },
    interpretation: {
      class: 'IV',
      risk30DayMortality: '4.0-11.4%',
    },
  },
  {
    score: {
      min: 125,
      max: 300,
    },
    interpretation: {
      class: 'V',
      risk30DayMortality: '10-24.5%',
    },
  },
]

export const Formula_Pulmonary_Embolism_Severity_Index_PESI = ({
  params: {
    age,
    sex,
    historyOfCancer,
    historyOfHeartFailure,
    historyOfChronicLungDisease,
    heartRate,
    sBP,
    respiratoryRate,
    temperature,
    alteredMentalStatus,
    o2Saturation,
  },
}: Formula_Pulmonary_Embolism_Severity_Index_PESI_interface): Formula_Pulmonary_Embolism_Severity_Index_PESI_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/1304/pulmonary-embolism-severity-index-pesi'

  const score =
    age +
    +(sex === 'Male') * 10 +
    +historyOfCancer * 30 +
    +historyOfHeartFailure * 10 +
    +historyOfChronicLungDisease * 10 +
    +(heartRate >= 110) * 20 +
    +(sBP < 100) * 30 +
    +(respiratoryRate >= 30) * 20 +
    +(temperature < 36) * 20 +
    +alteredMentalStatus * 60 +
    +(o2Saturation < 90) * 20

  const interpretation = risk.find(
    (e) => e.score.min <= score && e.score.max >= score,
  )!.interpretation
  return {
    link,
    score,
    interpretation,
  }
}
