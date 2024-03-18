import { returnInterface } from '../CommonInterface'

export interface Formula_LDL_Calculated_interface {
  formula: 'LDL_Calculated'
  params: {
    // mg/dl
    totalCholesterol: number
    // mg/dl
    HDLCholesterol: number
    // mg/dl
    triglycerides: number
  }
}

export interface Formula_LDL_Calculated_return_interface
  extends returnInterface {
  LDLcholesterol: number
}

export const Formula_LDL_Calculated = ({
  params: { HDLCholesterol, totalCholesterol, triglycerides },
}: Formula_LDL_Calculated_interface): Formula_LDL_Calculated_return_interface => {
  // TODO: Objectif LDL selon les FDR
  const link = 'https://www.mdcalc.com/calc/70/ldl-calculated'
  const LDLcholesterol = totalCholesterol - HDLCholesterol - triglycerides / 5
  return {
    link,
    LDLcholesterol,
  }
}
