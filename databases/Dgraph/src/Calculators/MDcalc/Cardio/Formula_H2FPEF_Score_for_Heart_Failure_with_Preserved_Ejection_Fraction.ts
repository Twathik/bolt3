import { returnInterface } from '../CommonInterface'
import { Formula_Body_Mass_Index_Body_Surface_Area } from '../General/Formula_Body_Mass_Index_Body_Surface_Area'

export interface Formula_H2FPEF_Score_for_Heart_Failure_with_Preserved_Ejection_Fraction_interface {
  formula: 'H2FPEF_Score_for_Heart_Failure_with_Preserved_Ejection_Fraction'
  params: {
    age: number
    weight: number
    height: number
    E_e_prim_ratio: number
    pulmonaryArterySystolicPressure: number
    atrialFibrillation: boolean
  }
}

export interface Formula_H2FPEF_Score_for_Heart_Failure_with_Preserved_Ejection_Fraction_return_interface
  extends returnInterface {
  probability: number
}

export const Formula_H2FPEF_Score_for_Heart_Failure_with_Preserved_Ejection_Fraction =
  ({
    params: {
      E_e_prim_ratio,
      age,
      atrialFibrillation,
      height,
      pulmonaryArterySystolicPressure,
      weight,
    },
  }: Formula_H2FPEF_Score_for_Heart_Failure_with_Preserved_Ejection_Fraction_interface): Formula_H2FPEF_Score_for_Heart_Failure_with_Preserved_Ejection_Fraction_return_interface => {
    const link =
      'https://www.mdcalc.com/calc/10105/h2fpef-score-for-heart-failure-with-preserved-ejection-fraction'

    const y =
      -9.1917 +
      0.0451 * age +
      0.1307 *
        Formula_Body_Mass_Index_Body_Surface_Area({
          formula: 'Body_Mass_Index_Body_Surface_Area',
          params: { height, weight },
        }).BMI +
      0.0859 * E_e_prim_ratio +
      0.052 * pulmonaryArterySystolicPressure +
      1.6997 * +atrialFibrillation
    const Z = Math.exp(y)
    const probability = +((Z / (1 + Z)) * 100).toFixed(1)
    return {
      link,
      probability,
    }
  }
