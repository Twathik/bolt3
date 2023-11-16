import { returnInterface } from '../CommonInterface'

export interface Formula_Absolute_Reticulocyte_Count_Reticulocyte_Index_interface {
  formula: 'Absolute_Reticulocyte_Count_Reticulocyte_Index'
  params: {
    // norm 0.5 - 2.5
    pourcentOfReticulocyte: number
    // norm : 36 - 51
    hematocrit: number
    // based on age/gender -> norm : 36 - 51
    normalHematocrit?: number
  }
}

export interface Formula_Absolute_Reticulocyte_Count_Reticulocyte_Index_return_interface
  extends returnInterface {
  AbsoluteReticulocyteCount: number
  ReticulocyteIndex: number
  interpretation:
    | 'Adequate response, Reticulocyte index ≥2'
    | 'Hypoproliferation, Reticulocyte index <2'
}

export const Formula_Absolute_Reticulocyte_Count_Reticulocyte_Index = ({
  params: { hematocrit, normalHematocrit = 42, pourcentOfReticulocyte },
}: Formula_Absolute_Reticulocyte_Count_Reticulocyte_Index_interface): Formula_Absolute_Reticulocyte_Count_Reticulocyte_Index_return_interface => {
  const maturationFactor =
    hematocrit >= 35 ? 1 : hematocrit >= 25 ? 1.5 : hematocrit >= 20 ? 2 : 2.5

  const AbsoluteReticulocyteCount =
    pourcentOfReticulocyte * (hematocrit / normalHematocrit)

  const ReticulocyteIndex = +(
    AbsoluteReticulocyteCount / maturationFactor
  ).toFixed(2)

  const interpretation: Formula_Absolute_Reticulocyte_Count_Reticulocyte_Index_return_interface['interpretation'] =
    ReticulocyteIndex >= 2
      ? 'Adequate response, Reticulocyte index ≥2'
      : 'Hypoproliferation, Reticulocyte index <2'
  return {
    link: 'https://www.mdcalc.com/calc/1667/absolute-reticulocyte-count-reticulocyte-index',
    AbsoluteReticulocyteCount: +AbsoluteReticulocyteCount.toFixed(1),
    ReticulocyteIndex,
    interpretation,
  }
}
