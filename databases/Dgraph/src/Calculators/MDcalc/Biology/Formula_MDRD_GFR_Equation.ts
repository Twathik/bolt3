import { returnInterface, sex } from '../CommonInterface'

export interface Formula_MDRD_GFR_Equation_interface {
  formula: 'MDRD_GFR_Equation'
  params: {
    sex: sex
    age: number
    // mg/dl
    creatinine: number
    // cm
    blackPerson: boolean
  }
}

export interface Formula_MDRD_GFR_Equation_Return_interface
  extends returnInterface {
  MDRD_GFR_Equation: number
  interpretation:
    | ''
    | 'G1, Normal or Height'
    | 'G2, Mildly decreased'
    | 'G3a, Mildly to Moderately decreased'
    | 'G3b, Moderately to Severely decreased'
    | 'G4, Severely decreased'
    | 'G5, Kidney Failure '
}

export const Formula_MDRD_GFR_Equation = ({
  params,
}: Formula_MDRD_GFR_Equation_interface): Formula_MDRD_GFR_Equation_Return_interface => {
  const MDRD_GFR_Equation =
    175 *
    Math.pow(params.creatinine, -1.154) *
    Math.pow(params.age, -0.203) *
    (params.blackPerson ? 1.212 : 1) *
    (params.sex === 'Female' ? 0.742 : 1)

  let interpretation: Formula_MDRD_GFR_Equation_Return_interface['interpretation'] =
    ''

  if (MDRD_GFR_Equation >= 90) {
    interpretation = 'G1, Normal or Height'
  } else if (MDRD_GFR_Equation >= 60 && MDRD_GFR_Equation <= 89) {
    interpretation = 'G2, Mildly decreased'
  } else if (MDRD_GFR_Equation >= 45 && MDRD_GFR_Equation <= 59) {
    interpretation = 'G3a, Mildly to Moderately decreased'
  } else if (MDRD_GFR_Equation >= 30 && MDRD_GFR_Equation <= 44) {
    interpretation = 'G3b, Moderately to Severely decreased'
  } else if (MDRD_GFR_Equation >= 15 && MDRD_GFR_Equation <= 29) {
    interpretation = 'G4, Severely decreased'
  } else if (MDRD_GFR_Equation < 15) {
    interpretation = 'G5, Kidney Failure '
  }
  return {
    MDRD_GFR_Equation,
    interpretation,
    link: 'https://www.mdcalc.com/calc/76/mdrd-gfr-equation',
  }
}
