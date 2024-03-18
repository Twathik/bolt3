import { returnInterface } from '../CommonInterface'
import { Formula_Body_Mass_Index_Body_Surface_Area } from '../General/Formula_Body_Mass_Index_Body_Surface_Area'

export interface Formula_Cardiac_Output_FickFormula_interface {
  formula: 'Cardiac_Output_FickFormula'
  params: {
    weight: number
    height: number
    SaO2: number
    SvO2: number
    // g/dl
    hemoglobin: number
    heartRate: number
    age: number
  }
}

/*
When to use : 
   - In patients with suspected cardiogenic shock and a pulmonary artery catheter in place.
   - For patients undergoing right or left heart catheterization to determine cardiac output (CO), cardiac index (CI), and stroke volume (SV).
*/
export interface Formula_Cardiac_Output_FickFormula_return_interface
  extends returnInterface {
  CardiacOutput: number
  CardiacIndex: number
  StrokeVolume: number
  units?: {
    CardiacOutput: 'L/min'
    CardiacIndex: 'L/min/m2'
    StrokeVolume: 'mL/beat '
  }
}

export const Formula_Cardiac_Output_FickFormula = ({
  params: { SaO2, SvO2, age, heartRate, height, hemoglobin, weight },
}: Formula_Cardiac_Output_FickFormula_interface): Formula_Cardiac_Output_FickFormula_return_interface => {
  const link = 'https://www.mdcalc.com/calc/10095/cardiac-output-ficks-formula'
  const BSA = Formula_Body_Mass_Index_Body_Surface_Area({
    formula: 'Body_Mass_Index_Body_Surface_Area',
    params: { height, weight },
  }).BSA
  const VO2 = (age >= 70 ? 110 : 125) * BSA
  console.log({ VO2 })
  const CardiacOutput = VO2 / ((SaO2 / 100 - SvO2 / 100) * hemoglobin * 13.4)

  const CardiacIndex = CardiacOutput / BSA
  const StrokeVolume = (CardiacOutput * 1000) / heartRate
  return {
    link,
    CardiacOutput: +CardiacOutput.toFixed(1),
    CardiacIndex: +CardiacIndex.toFixed(1),
    StrokeVolume: +StrokeVolume.toFixed(0),
    units: {
      CardiacOutput: 'L/min',
      CardiacIndex: 'L/min/m2',
      StrokeVolume: 'mL/beat ',
    },
  }
}
