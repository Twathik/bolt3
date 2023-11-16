import { returnInterface } from '../CommonInterface'

export interface Formula_Body_Mass_Index_Body_Surface_Area_interface {
  formula: 'Body_Mass_Index_Body_Surface_Area'
  params: {
    // kg
    weight: number
    // cm
    height: number
  }
}

export interface Formula_Body_Mass_Index_Body_Surface_Area_return_interface
  extends returnInterface {
  BSA: number
  BMI: number
}

export const Formula_Body_Mass_Index_Body_Surface_Area = ({
  params: { height, weight },
}: Formula_Body_Mass_Index_Body_Surface_Area_interface): Formula_Body_Mass_Index_Body_Surface_Area_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/29/body-mass-index-bmi-body-surface-area-bsa'
  const BSA = Math.pow((height * weight) / 3600, 0.5)
  const BMI = weight / Math.pow(height / 100, 2)
  return {
    link,
    BMI: +BMI.toFixed(1),
    BSA,
  }
}
