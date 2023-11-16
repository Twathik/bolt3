import { returnInterface } from '../CommonInterface'

export interface Formula_Simplified_PESI_Pulmonary_Embolism_Severity_Index_interface {
  formula: 'Simplified_PESI_Pulmonary_Embolism_Severity_Index'
  params: {
    age: number
    historyOfCancer: boolean
    historyOfChronicCardiopulmonaryDisease: boolean
    heartRate: number
    sBp: number
    o2Saturation: number
  }
}

export interface Formula_Simplified_PESI_Pulmonary_Embolism_Severity_Index_return_interface
  extends returnInterface {
  score: number
  interpretation: {
    riskGroup: 'Low' | 'High'
    riskInterpreation:
      | '1.1% risk of death, with 1.5% having recurrent thromboembolism or non-fatal bleeding'
      | '8.9% risk of death'
  }
}

export const Formula_Simplified_PESI_Pulmonary_Embolism_Severity_Index = ({
  params: {
    age,
    historyOfCancer,
    historyOfChronicCardiopulmonaryDisease,
    heartRate,
    sBp,
    o2Saturation,
  },
}: Formula_Simplified_PESI_Pulmonary_Embolism_Severity_Index_interface): Formula_Simplified_PESI_Pulmonary_Embolism_Severity_Index_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/1247/simplified-pesi-pulmonary-embolism-severity-index'

  const score =
    +(age > 80) +
    +historyOfCancer +
    +historyOfChronicCardiopulmonaryDisease +
    +(heartRate >= 110) +
    +(sBp < 100) +
    +(o2Saturation < 90)

  const interpretation: Formula_Simplified_PESI_Pulmonary_Embolism_Severity_Index_return_interface['interpretation'] =
    score >= 1
      ? { riskGroup: 'High', riskInterpreation: '8.9% risk of death' }
      : {
          riskGroup: 'Low',
          riskInterpreation:
            '1.1% risk of death, with 1.5% having recurrent thromboembolism or non-fatal bleeding',
        }

  return {
    link,
    score,
    interpretation,
  }
}
