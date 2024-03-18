import { returnInterface } from '../CommonInterface'

export interface Formula_Dual_Antiplatelet_Therapy_DAPT_Score_interface {
  formula: 'Dual_Antiplatelet_Therapy_DAPT_Score'
  params: {
    age: number
    // Smoking within 1 year prior to index procedure
    cigaretteSmoking: boolean
    diabetesMellitus: boolean
    MIatPresentation: boolean
    PriorPCIorPriorMI: boolean
    PaclitaxelElutingStent: boolean
    StentDiameterInf3mm: boolean
    CHForLVEFInf30: boolean
    VeinGraftStent: boolean
  }
}

export interface Formula_Dual_Antiplatelet_Therapy_DAPT_Score_return_interface
  extends returnInterface {
  score: number
  interpretation:
    | 'Low, Prolonged DAPT not recommended'
    | 'High, Prolonged DAPT recommended'
}

export const Formula_Dual_Antiplatelet_Therapy_DAPT_Score = ({
  params: {
    CHForLVEFInf30,
    MIatPresentation,
    PaclitaxelElutingStent,
    PriorPCIorPriorMI,
    StentDiameterInf3mm,
    VeinGraftStent,
    age,
    cigaretteSmoking,
    diabetesMellitus,
  },
}: Formula_Dual_Antiplatelet_Therapy_DAPT_Score_interface): Formula_Dual_Antiplatelet_Therapy_DAPT_Score_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/10016/dual-antiplatelet-therapy-dapt-score'
  const score =
    (age >= 75 ? -2 : age >= 65 ? -1 : 0) +
    (cigaretteSmoking ? 1 : 0) +
    (diabetesMellitus ? 1 : 0) +
    (MIatPresentation ? 1 : 0) +
    (PriorPCIorPriorMI ? 1 : 0) +
    (PaclitaxelElutingStent ? 1 : 0) +
    (StentDiameterInf3mm ? 1 : 0) +
    (CHForLVEFInf30 ? 2 : 0) +
    (VeinGraftStent ? 2 : 0)

  const interpretation: Formula_Dual_Antiplatelet_Therapy_DAPT_Score_return_interface['interpretation'] =
    score >= 2
      ? 'High, Prolonged DAPT recommended'
      : 'Low, Prolonged DAPT not recommended'

  return {
    link,
    score,
    interpretation,
  }
}
