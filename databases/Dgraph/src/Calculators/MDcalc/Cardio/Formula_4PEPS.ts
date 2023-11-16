import { returnInterface, sex } from '../CommonInterface'

export interface Formula_4PEPS_interface {
  formula: '4PEPS'
  params: {
    age: number
    sex: sex
    chronicRespiratoryDisease: boolean
    heartRate: number
    chestPainAndAcuteDyspnea: boolean
    currentEstrogenUse: boolean
    priorHistoryVTE: boolean
    syncope: boolean
    immobilityWithinLasFewWeeks: boolean
    O2saturation: number
    calfPain_UnilateralLowerLimbEdema: boolean
    PEisTheMostLikelyDiagnostic: boolean
  }
}

export interface Formula_4PEPS_return_interface extends returnInterface {
  score: number
  interpretation:
    | 'Very low Clinical pre test probability (<2%)_PE can be ruled out'
    | 'Low Clinical pre test probability (2-20%)_PE can be ruled out if D-dimer level <1.0 μg/mL'
    | 'Moderate Clinical pre test probability (20-65%)_PE can be ruled out if D-dimer level <0.5 μg/mL OR <(age x 0.01) μg/mL'
    | 'High Clinical pre test probability (>65%)_PE cannot be ruled out without imaging testing'
}

export const Formula_4PEPS = ({
  params: {
    O2saturation,
    PEisTheMostLikelyDiagnostic,
    age,
    calfPain_UnilateralLowerLimbEdema,
    chestPainAndAcuteDyspnea,
    chronicRespiratoryDisease,
    currentEstrogenUse,
    heartRate,
    immobilityWithinLasFewWeeks,
    priorHistoryVTE,
    sex,
    syncope,
  },
}: Formula_4PEPS_interface): Formula_4PEPS_return_interface => {
  let ageScore = age < 50 ? -2 : age > 64 ? 0 : -1
  let sexScore = sex === 'Female' ? 0 : 2
  let chronicRespiratoryDiseaseScore = chronicRespiratoryDisease ? -1 : 0
  let heartRateScore = heartRate < 80 ? -1 : 0
  let chestPainAndAcuteDyspneaScore = chestPainAndAcuteDyspnea ? 1 : 0
  let currentEstrogenUseScore = currentEstrogenUse ? 2 : 0
  let priorHistoryVTEScore = priorHistoryVTE ? 2 : 0
  let syncopeScore = syncope ? 2 : 0
  let immobilityWithinLasFewWeeksScore = immobilityWithinLasFewWeeks ? 2 : 0
  let O2saturationScore = O2saturation < 95 ? 3 : 0
  let calfPain_UnilateralLowerLimbEdemaScore = calfPain_UnilateralLowerLimbEdema
    ? 3
    : 0
  let PEisTheMostLikelyDiagnosticScore = PEisTheMostLikelyDiagnostic ? 5 : 0

  const score =
    ageScore +
    sexScore +
    chronicRespiratoryDiseaseScore +
    heartRateScore +
    chestPainAndAcuteDyspneaScore +
    currentEstrogenUseScore +
    priorHistoryVTEScore +
    syncopeScore +
    immobilityWithinLasFewWeeksScore +
    O2saturationScore +
    calfPain_UnilateralLowerLimbEdemaScore +
    PEisTheMostLikelyDiagnosticScore

  const interpretation: Formula_4PEPS_return_interface['interpretation'] =
    score < 0
      ? 'Very low Clinical pre test probability (<2%)_PE can be ruled out'
      : score >= 0 && score <= 5
      ? 'Low Clinical pre test probability (2-20%)_PE can be ruled out if D-dimer level <1.0 μg/mL'
      : score >= 6 && score <= 12
      ? 'Moderate Clinical pre test probability (20-65%)_PE can be ruled out if D-dimer level <0.5 μg/mL OR <(age x 0.01) μg/mL'
      : 'High Clinical pre test probability (>65%)_PE cannot be ruled out without imaging testing'

  return {
    link: 'https://www.mdcalc.com/calc/10370/4-level-pulmonary-embolism-clinical-probability-score-4peps',
    score,
    interpretation,
  }
}
