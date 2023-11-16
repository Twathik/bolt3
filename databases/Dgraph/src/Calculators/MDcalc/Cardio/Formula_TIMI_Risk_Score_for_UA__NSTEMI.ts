import { returnInterface } from '../CommonInterface'

export interface Formula_TIMI_Risk_Score_for_UA__NSTEMI_interface {
  formula: 'TIMI_Risk_Score_for_UA__NSTEMI'
  params: {
    age: number
    // Hypertension, hypercholesterolemia, diabetes, family history of CAD, or current smoker
    plus3CADRiskFactors: boolean
    // Known CAD (stenosis ≥50%)
    KnownCAD_Stenosis50: boolean
    // Aspirin use in past 7 days
    AspirinUse7days: boolean
    // Severe angina (≥2 episodes in 24 hrs)
    SevereAngina: boolean
    // EKG ST changes ≥0.5mm
    EKGSTchanges: boolean
    // Positive cardiac marker
    PositiveCardiacMarker: boolean
  }
}

export interface Formula_TIMI_Risk_Score_for_UA__NSTEMI_return_interface
  extends returnInterface {
  score: number
  interpretation:
    | ' 0-1 pts : 5% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
    | '2pts : 8% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
    | '3pts : 13% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
    | '4pts : 20% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
    | '5pts : 26% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
    | '6-7 pts : 41% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
}

const addOne = (condition: boolean): number => (condition ? 1 : 0)

export const Formula_TIMI_Risk_Score_for_UA__NSTEMI = ({
  params: {
    AspirinUse7days,
    EKGSTchanges,
    KnownCAD_Stenosis50,
    PositiveCardiacMarker,
    SevereAngina,
    age,
    plus3CADRiskFactors,
  },
}: Formula_TIMI_Risk_Score_for_UA__NSTEMI_interface): Formula_TIMI_Risk_Score_for_UA__NSTEMI_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/111/timi-risk-score-ua-nstemi#evidence'
  const score =
    addOne(age >= 65) +
    addOne(plus3CADRiskFactors) +
    addOne(KnownCAD_Stenosis50) +
    addOne(AspirinUse7days) +
    addOne(SevereAngina) +
    addOne(EKGSTchanges) +
    addOne(PositiveCardiacMarker)

  const interpretation: Formula_TIMI_Risk_Score_for_UA__NSTEMI_return_interface['interpretation'] =
    score >= 6
      ? '6-7 pts : 41% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
      : score === 5
      ? '5pts : 26% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
      : score === 4
      ? '4pts : 20% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
      : score === 3
      ? '3pts : 13% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
      : score === 2
      ? '2pts : 8% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'
      : ' 0-1 pts : 5% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.'

  return {
    link,
    score,
    interpretation,
  }
}
