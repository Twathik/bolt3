import { returnInterface } from '../CommonInterface'

export interface Formula_Acute_Decompensated_Heart_Failure_National_Registry_Algorithm_interface {
  formula: 'Acute_Decompensated_Heart_Failure_National_Registry_Algorithm'
  params: {
    // BUN ≥ 43 mg/dL (15.35 mmol/L) => true
    highBUN: boolean
    // sBP < 115 mmHg => true
    highSBP: boolean
    // Creatinine ≥2.75 mg/dl (243.1 mmol/L)
    highCreatinine: boolean
  }
}

export interface Formula_Acute_Decompensated_Heart_Failure_National_Registry_Algorithm_return_interface
  extends returnInterface {
  interpretation:
    | 'High Risk, 19.8-21.9% Mortality Risk from ADHF'
    | 'Intermediate Risk, 5.5-13.2% Mortality Risk from ADHF'
    | 'Low Risk, 2.1-2.3% Mortality Risk from ADHF'
}

export const Formula_Acute_Decompensated_Heart_Failure_National_Registry_Algorithm =
  ({
    params: { highBUN, highCreatinine, highSBP },
  }: Formula_Acute_Decompensated_Heart_Failure_National_Registry_Algorithm_interface): Formula_Acute_Decompensated_Heart_Failure_National_Registry_Algorithm_return_interface => {
    const link =
      'https://www.mdcalc.com/calc/3828/acute-decompensated-heart-failure-national-registry-adhere-algorithm'

    const interpretation: Formula_Acute_Decompensated_Heart_Failure_National_Registry_Algorithm_return_interface['interpretation'] =
      highBUN
        ? highSBP
          ? highCreatinine
            ? 'High Risk, 19.8-21.9% Mortality Risk from ADHF'
            : 'Intermediate Risk, 5.5-13.2% Mortality Risk from ADHF'
          : 'Intermediate Risk, 5.5-13.2% Mortality Risk from ADHF'
        : highSBP
        ? 'Intermediate Risk, 5.5-13.2% Mortality Risk from ADHF'
        : 'Low Risk, 2.1-2.3% Mortality Risk from ADHF'
    return {
      link,
      interpretation,
    }
  }
