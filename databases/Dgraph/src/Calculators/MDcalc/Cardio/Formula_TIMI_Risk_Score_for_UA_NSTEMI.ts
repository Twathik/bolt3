import { returnInterface } from '../CommonInterface'

export interface Formula_TIMI_Risk_Score_for_UA_NSTEMI_interface {
  formula: 'TIMI_Risk_Score_for_UA_NSTEMI'
  params: {
    age: number
    // Hypertension, hypercholesterolemia, diabetes, family history of CAD, or current smoker
    moreThen3CadRiskFactors: boolean
    // stenosis ≥50%
    KnownCAD: boolean
    ASAUseInPast7Days: boolean
    severeAnginaMoreThen2EpisodesIn24Hrs: boolean
    EKGStChangesMoreThenHalfmm: boolean
    positiveCardiacMarker: boolean
  }
}
interface riskInterface {
  score: number
  risk: string
}

export interface Formula_TIMI_Risk_Score_for_UA_NSTEMI_return_interface
  extends returnInterface {
  score: number
  interpretation: string
}

const risk: riskInterface[] = [
  {
    score: 0,
    risk: '5% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.',
  },
  {
    score: 1,
    risk: '5% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.',
  },
  {
    score: 2,
    risk: '8% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.',
  },
  {
    score: 3,
    risk: '13% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.',
  },
  {
    score: 4,
    risk: '20% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.',
  },
  {
    score: 5,
    risk: '26% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.',
  },
  {
    score: 6,
    risk: '41% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.',
  },
  {
    score: 7,
    risk: '41% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization.',
  },
]

export const Formula_TIMI_Risk_Score_for_UA_NSTEMI = ({
  params: {
    age,
    moreThen3CadRiskFactors,
    KnownCAD,
    ASAUseInPast7Days,
    severeAnginaMoreThen2EpisodesIn24Hrs,
    EKGStChangesMoreThenHalfmm,
    positiveCardiacMarker,
  },
}: Formula_TIMI_Risk_Score_for_UA_NSTEMI_interface): Formula_TIMI_Risk_Score_for_UA_NSTEMI_return_interface => {
  const link = 'https://www.mdcalc.com/calc/111/timi-risk-score-ua-nstemi'
  const score =
    +(age >= 65) +
    +moreThen3CadRiskFactors +
    +KnownCAD +
    +ASAUseInPast7Days +
    +severeAnginaMoreThen2EpisodesIn24Hrs +
    +EKGStChangesMoreThenHalfmm +
    +positiveCardiacMarker

  const interpretation = risk.find((e) => e.score === score)!.risk

  return {
    link,
    score,
    interpretation,
  }
}
