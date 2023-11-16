import { returnInterface } from '../CommonInterface'

export interface Formula_Age_Adjusted_Ddimer_VTE_interface {
  formula: 'Age_Adjusted_Ddimer_VTE'
  params: {
    // Use in patients ≥50 years old
    age: number
    // Note that µg/L is mathematically equivalent to ng/mL
    patientDdimer: number
    patientDdimerUnit?: 'µg/L' | 'ng/mL'

    DdimerUnitType:
      | 'FEU (unadjusted cutoff typically ~500 or 0.50)'
      | 'DDU (unadjusted cutoff typically 230-250 or 0.23-0.25)'
  }
}

export interface Formula_Age_Adjusted_Ddimer_VTE_return_interface
  extends returnInterface {
  /* Patients ≥50 years old presenting to emergency department as outpatients who are being worked up for PE and have low to intermediate pretest probability. Do not use in high-risk patients (i.e., those who would proceed to imaging regardless of D-dimer result). */
  AgeAdjustedDdimer: number
  interpretation:
    | 'Not applicable'
    | 'VTE unlikely, Reported D-dimer is less than or equal to cutoff; consider alternative diagnosis'
    | 'VTE possible, Reported D-dimer is greater than cutoff; consider confirmatory testing with CTA or V/Q scan'
}

export const Formula_Age_Adjusted_Ddimer_VTE = ({
  params: { DdimerUnitType, age, patientDdimer, patientDdimerUnit = 'µg/L' },
}: Formula_Age_Adjusted_Ddimer_VTE_interface): Formula_Age_Adjusted_Ddimer_VTE_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/10138/age-adjusted-d-dimer-venous-thromboembolism-vte'
  if (age < 50)
    return { link, AgeAdjustedDdimer: 0, interpretation: 'Not applicable' }
  const AgeAdjustedDdimer =
    (age *
      (DdimerUnitType === 'FEU (unadjusted cutoff typically ~500 or 0.50)'
        ? 10
        : 5)) /
    (patientDdimerUnit === 'ng/mL' ? 1000 : 1)

  const interpretation: Formula_Age_Adjusted_Ddimer_VTE_return_interface['interpretation'] =
    patientDdimer < AgeAdjustedDdimer
      ? 'VTE unlikely, Reported D-dimer is less than or equal to cutoff; consider alternative diagnosis'
      : 'VTE possible, Reported D-dimer is greater than cutoff; consider confirmatory testing with CTA or V/Q scan'
  return {
    link,
    AgeAdjustedDdimer,
    interpretation,
  }
}
