import { returnInterface } from '../CommonInterface'

export interface Formula_Reynolds_Risk_Score_for_Cardiovascular_Risk_in_Women_interface {
  formula: 'Reynolds_Risk_Score_for_Cardiovascular_Risk_in_Women'
  params: {
    age: number
    sBP: number
    Diabetes: boolean
    hemoglobinA1C: number
    currentSmoker: boolean
    // mg/dl
    HDLCholesterol: number
    // mg/dl
    totalCholesterol: number
    // mg/l
    hsCRP: number
    parentWithMiBeforeAge60Years: boolean
  }
}

export interface Formula_Reynolds_Risk_Score_for_Cardiovascular_Risk_in_Women_return_interface
  extends returnInterface {
  score: number
  recommandation:
    | 'Unclear evidence for statin therapy'
    | 'Minimal benefit of statin therapy compared to risk and cost of therapy in preventing a cardiovascular event in the next ten years'
    | '- Discussion of lifestyle modification and initiation of statin therapy\n - U.S. treatment guidelines recommend initiation of treatment with 10-year risk estimates >10%\n- Understanding patient preference and motivation and frank discussion with patients about the risks and benefits of statin therapy in reducing cardiovascular events such as stroke, MI, and CVA in female patients over the next ten years'
    | 'Strongly recommend statin therapy in conjunction with lifestyle modification'
}

export const Formula_Reynolds_Risk_Score_for_Cardiovascular_Risk_in_Women = ({
  params: {
    age,
    sBP,
    Diabetes,
    hemoglobinA1C,
    currentSmoker,
    HDLCholesterol,
    totalCholesterol,
    hsCRP,
    parentWithMiBeforeAge60Years,
  },
}: Formula_Reynolds_Risk_Score_for_Cardiovascular_Risk_in_Women_interface): Formula_Reynolds_Risk_Score_for_Cardiovascular_Risk_in_Women_return_interface => {
  // Estimates 10-year cardiovascular risk in women over age 45 years.
  const link =
    'https://www.mdcalc.com/calc/3932/reynolds-risk-score-cardiovascular-risk-women'

  const B =
    0.0799 * age +
    3.137 * Math.log(sBP) +
    0.18 * Math.log(hsCRP) +
    1.382 * Math.log(totalCholesterol) -
    1.172 * Math.log(HDLCholesterol) +
    0.134 * hemoglobinA1C * +Diabetes +
    0.818 * +currentSmoker +
    0.438 * +parentWithMiBeforeAge60Years

  const score = +((1 - Math.pow(0.98634, Math.exp(B - 22.325))) * 100).toFixed(
    1,
  )

  const recommandation: Formula_Reynolds_Risk_Score_for_Cardiovascular_Risk_in_Women_return_interface['recommandation'] =
    score >= 20
      ? 'Strongly recommend statin therapy in conjunction with lifestyle modification'
      : score >= 10
      ? '- Discussion of lifestyle modification and initiation of statin therapy\n - U.S. treatment guidelines recommend initiation of treatment with 10-year risk estimates >10%\n- Understanding patient preference and motivation and frank discussion with patients about the risks and benefits of statin therapy in reducing cardiovascular events such as stroke, MI, and CVA in female patients over the next ten years'
      : score >= 5
      ? 'Minimal benefit of statin therapy compared to risk and cost of therapy in preventing a cardiovascular event in the next ten years'
      : 'Unclear evidence for statin therapy'
  return {
    link,
    score,
    recommandation,
  }
}
