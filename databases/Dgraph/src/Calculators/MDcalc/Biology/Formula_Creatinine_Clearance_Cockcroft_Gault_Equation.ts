import { returnInterface, sex } from '../CommonInterface'
import { Formula_Ideal_Body_Weight_Adjusted_Body_Weight } from '../General/Formula_Ideal_Body_Weight_Adjusted_Body_Weight'

export interface Formula_Creatinine_Clearance_Cockcroft_Gault_Equation_interface {
  formula: 'Creatinine_Clearance_Cockcroft_Gault_Equation'
  params: {
    sex: sex
    age: number
    // kg
    weight: number
    // mg/dl
    creatinine: number
    // cm
    height: number
  }
}

export interface Formula_Creatinine_Clearance_Cockcroft_Gault_Equation_Return_interface
  extends returnInterface {
  Cockcroft_Gault_CrCl: number
  Cockcroft_Gault_CrCl_Ideal_body_Weight: number
  Cockcroft_Gault_CrCl_Adjusted: {
    min: number
    max: number
  }
  interpretation:
    | ''
    | 'G1, Normal or Height'
    | 'G2, Mildly decreased'
    | 'G3a, Mildly to Moderately decreased'
    | 'G3b, Moderately to Severely decreased'
    | 'G4, Severely decreased'
    | 'G5, Kidney Failure '
}

export const Formula_Creatinine_Clearance_Cockcroft_Gault_Equation = ({
  params,
}: Formula_Creatinine_Clearance_Cockcroft_Gault_Equation_interface): Formula_Creatinine_Clearance_Cockcroft_Gault_Equation_Return_interface => {
  const Cockcroft_Gault_CrCl = +(
    ((140 - params.age) *
      params.weight *
      (params.sex === 'Female' ? 0.85 : 1)) /
    (72 * params.creatinine)
  ).toFixed(0)

  const { Adjusted_body_weight, Ideal_body_Weight } =
    Formula_Ideal_Body_Weight_Adjusted_Body_Weight({
      formula: 'Ideal_Body_Weight_Adjusted_Body_Weight',
      params: { height: params.height, sex: params.sex, weight: params.weight },
    })

  const Cockcroft_Gault_CrCl_Ideal_body_Weight = +(
    ((140 - params.age) *
      Ideal_body_Weight *
      (params.sex === 'Female' ? 0.85 : 1)) /
    (72 * params.creatinine)
  ).toFixed(0)

  const Cockcroft_Gault_CrCl_Adjusted_body_weight =
    ((140 - params.age) *
      Adjusted_body_weight *
      (params.sex === 'Female' ? 0.85 : 1)) /
    (72 * params.creatinine)
  let Cockcroft_Gault_CrCl_Adjusted: { min: number; max: number }

  const BMI = Math.pow(params.weight / params.height, 2)

  if (BMI < 18.5) {
    Cockcroft_Gault_CrCl_Adjusted = {
      min: Cockcroft_Gault_CrCl,
      max: Cockcroft_Gault_CrCl,
    }
  } else if (BMI >= 25) {
    Cockcroft_Gault_CrCl_Adjusted = {
      min: Cockcroft_Gault_CrCl_Adjusted_body_weight,
      max: Cockcroft_Gault_CrCl_Ideal_body_Weight,
    }
  } else {
    Cockcroft_Gault_CrCl_Adjusted = {
      min: +Cockcroft_Gault_CrCl_Ideal_body_Weight.toFixed(0),
      max: +Cockcroft_Gault_CrCl.toFixed(0),
    }
  }

  let interpretation: Formula_Creatinine_Clearance_Cockcroft_Gault_Equation_Return_interface['interpretation'] =
    ''

  if (Cockcroft_Gault_CrCl >= 90) {
    interpretation = 'G1, Normal or Height'
  } else if (Cockcroft_Gault_CrCl >= 60 && Cockcroft_Gault_CrCl <= 89) {
    interpretation = 'G2, Mildly decreased'
  } else if (Cockcroft_Gault_CrCl >= 45 && Cockcroft_Gault_CrCl <= 59) {
    interpretation = 'G3a, Mildly to Moderately decreased'
  } else if (Cockcroft_Gault_CrCl >= 30 && Cockcroft_Gault_CrCl <= 44) {
    interpretation = 'G3b, Moderately to Severely decreased'
  } else if (Cockcroft_Gault_CrCl >= 15 && Cockcroft_Gault_CrCl <= 29) {
    interpretation = 'G4, Severely decreased'
  } else if (Cockcroft_Gault_CrCl < 15) {
    interpretation = 'G5, Kidney Failure '
  }
  return {
    Cockcroft_Gault_CrCl,
    Cockcroft_Gault_CrCl_Ideal_body_Weight,
    Cockcroft_Gault_CrCl_Adjusted,
    interpretation,
    link: 'https://www.mdcalc.com/calc/43/creatinine-clearance-cockcroft-gault-equation',
  }
}
