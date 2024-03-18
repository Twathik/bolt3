import { returnInterface, sex } from '../CommonInterface'

export interface Formula_Ideal_Body_Weight_Adjusted_Body_Weight_interface {
  formula: 'Ideal_Body_Weight_Adjusted_Body_Weight'
  params: {
    sex: sex
    // kg
    weight: number
    // cm
    height: number
  }
}

export interface Formula_Ideal_Body_Weight_Adjusted_Body_Weight_return_interface
  extends returnInterface {
  Ideal_body_Weight: number
  Adjusted_body_weight: number
}

export const Formula_Ideal_Body_Weight_Adjusted_Body_Weight = ({
  params: { height, sex, weight },
}: Formula_Ideal_Body_Weight_Adjusted_Body_Weight_interface): Formula_Ideal_Body_Weight_Adjusted_Body_Weight_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/68/ideal-body-weight-adjusted-body-weight'
  const Ideal_body_Weight =
    sex === 'Male'
      ? 50 + 2.3 * (height * 2.54 - 60)
      : 45.5 + 2.3 * (height * 2.54 - 60)
  const Adjusted_body_weight =
    Ideal_body_Weight + 0.4 * (weight - Ideal_body_Weight)
  return {
    link,
    Ideal_body_Weight,
    Adjusted_body_weight,
  }
}
