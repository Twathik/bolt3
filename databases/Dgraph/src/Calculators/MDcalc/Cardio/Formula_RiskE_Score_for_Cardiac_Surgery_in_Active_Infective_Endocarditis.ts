import { returnInterface } from '../CommonInterface'

export interface Formula_RiskE_Score_for_Cardiac_Surgery_in_Active_Infective_Endocarditis_interface {
  formula: 'RiskE_Score_for_Cardiac_Surgery_in_Active_Infective_Endocarditis'
  params: {
    age: number
    prostheticEndocarditis: boolean
    // Staphylococcus aureus or fungi
    virulentMicroorganism: boolean
    septicShock: boolean
    // <150,000 platelets/mm3
    thrombocytopenia: boolean
    acuteRenalInsufficiency: boolean
    cardiogenicShock: boolean
    // Abscess, pseudoaneurysm, fistula, or prosthetic dehiscence
    periannularComplications: boolean
  }
}

export interface Formula_RiskE_Score_for_Cardiac_Surgery_in_Active_Infective_Endocarditis_return_interface
  extends returnInterface {
  score: number
  predictedMortality: number
}

const risk: { score: number; predictedMortality: number }[] = [
  { score: 0, predictedMortality: 3.36 },
  { score: 5, predictedMortality: 5.64 },
  { score: 6, predictedMortality: 6.22 },
  { score: 7, predictedMortality: 6.42 },
  { score: 9, predictedMortality: 7.96 },
  { score: 10, predictedMortality: 9.33 },
  { score: 11, predictedMortality: 10.24 },
  { score: 12, predictedMortality: 10.56 },
  { score: 13, predictedMortality: 11.61 },
  { score: 14, predictedMortality: 12.61 },
  { score: 15, predictedMortality: 13.87 },
  { score: 16, predictedMortality: 14.93 },
  { score: 17, predictedMortality: 16.87 },
  { score: 18, predictedMortality: 18.32 },
  { score: 19, predictedMortality: 19.5 },
  { score: 20, predictedMortality: 21.26 },
  { score: 21, predictedMortality: 22.38 },
  { score: 22, predictedMortality: 24.17 },
  { score: 23, predictedMortality: 26.66 },
  { score: 24, predictedMortality: 28.87 },
  { score: 25, predictedMortality: 31.02 },
  { score: 26, predictedMortality: 32.8 },
  { score: 27, predictedMortality: 35.13 },
  { score: 28, predictedMortality: 36.79 },
  { score: 29, predictedMortality: 39.59 },
  { score: 30, predictedMortality: 42.17 },
  { score: 31, predictedMortality: 44.64 },
  { score: 32, predictedMortality: 47.57 },
  { score: 33, predictedMortality: 49.73 },
  { score: 34, predictedMortality: 52.17 },
  { score: 35, predictedMortality: 54.39 },
  { score: 36, predictedMortality: 56.77 },
  { score: 37, predictedMortality: 59.08 },
  { score: 38, predictedMortality: 61.96 },
  { score: 39, predictedMortality: 64.82 },
  { score: 40, predictedMortality: 66.75 },
  { score: 41, predictedMortality: 68.52 },
  { score: 42, predictedMortality: 70.59 },
  { score: 43, predictedMortality: 72.32 },
  { score: 44, predictedMortality: 74.72 },
  { score: 45, predictedMortality: 76.65 },
  { score: 46, predictedMortality: 78.61 },
  { score: 47, predictedMortality: 80.09 },
  { score: 48, predictedMortality: 81.39 },
  { score: 49, predictedMortality: 82.97 },
  { score: 50, predictedMortality: 83.98 },
  { score: 51, predictedMortality: 85.74 },
  { score: 52, predictedMortality: 86.67 },
  { score: 53, predictedMortality: 88.05 },
  { score: 54, predictedMortality: 89.08 },
  { score: 55, predictedMortality: 90.09 },
  { score: 56, predictedMortality: 90.76 },
  { score: 57, predictedMortality: 91.18 },
  { score: 58, predictedMortality: 92.28 },
  { score: 59, predictedMortality: 92.93 },
  { score: 60, predictedMortality: 94.13 },
  { score: 61, predictedMortality: 94.29 },
  { score: 62, predictedMortality: 94.71 },
  { score: 63, predictedMortality: 95.11 },
  { score: 67, predictedMortality: 96.94 },
  { score: 68, predictedMortality: 97.01 },
]

export const Formula_RiskE_Score_for_Cardiac_Surgery_in_Active_Infective_Endocarditis =
  ({
    params: {
      age,
      prostheticEndocarditis,
      virulentMicroorganism,
      septicShock,
      thrombocytopenia,
      acuteRenalInsufficiency,
      cardiogenicShock,
      periannularComplications,
    },
  }: Formula_RiskE_Score_for_Cardiac_Surgery_in_Active_Infective_Endocarditis_interface): Formula_RiskE_Score_for_Cardiac_Surgery_in_Active_Infective_Endocarditis_return_interface => {
    const link =
      'https://www.mdcalc.com/calc/10209/riske-score-cardiac-surgery-active-infective-endocarditis'

    const score =
      (age >= 73 ? 14 : age >= 64 ? 13 : age >= 52 ? 9 : 0) +
      +prostheticEndocarditis * 6 +
      +virulentMicroorganism * 9 +
      +septicShock * 7 +
      +thrombocytopenia * 7 +
      +acuteRenalInsufficiency * 5 +
      +cardiogenicShock * 15 +
      +periannularComplications * 5

    const predictedMortality: number = risk.find(
      (e) => e.score === score,
    )!.predictedMortality

    return {
      link,
      score,
      predictedMortality,
    }
  }
