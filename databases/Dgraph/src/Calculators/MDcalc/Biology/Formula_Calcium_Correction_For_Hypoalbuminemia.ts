import { returnInterface } from '../CommonInterface'

export interface Formula_Calcium_Correction_For_Hypoalbuminemia_interface {
  formula: 'Calcium_Correction_For_Hypoalbuminemia'
  params: {
    // mg/l, 90 - 105
    calcium: number
    // g/l, norm 35 - 55
    albumin: number
    // g/l, norm 35 - 55
    normalAlbumin?: number
  }
}

export interface Formula_Calcium_Correction_For_Hypoalbuminemia_return_interface
  extends returnInterface {
  // mg/l
  CorrectedCalcium: number
}

export const Formula_Calcium_Correction_For_Hypoalbuminemia = ({
  params: { albumin, calcium, normalAlbumin = 40 },
}: Formula_Calcium_Correction_For_Hypoalbuminemia_interface): Formula_Calcium_Correction_For_Hypoalbuminemia_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/31/calcium-correction-hypoalbuminemia'

  const CorrectedCalcium = 0.8 * (normalAlbumin - albumin) + calcium

  return {
    link,
    CorrectedCalcium,
  }
}
