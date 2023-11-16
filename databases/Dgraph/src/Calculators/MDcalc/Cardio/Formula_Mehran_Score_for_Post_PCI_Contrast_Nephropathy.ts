import { Formula_MDRD_GFR_Equation } from '../Biology/Formula_MDRD_GFR_Equation'
import { returnInterface, sex } from '../CommonInterface'

export interface Formula_Mehran_Score_for_Post_PCI_Contrast_Nephropathy_interface {
  formula: 'Mehran_Score_for_Post_PCI_Contrast_Nephropathy'
  params: {
    age: number
    // SBP <80 for ≥1 hr requiring inotrope or balloon pump within 24 hrs of cath
    sBP: number
    intraAorticBalloonPump: boolean
    // CHF class III/IV by New York Heart Association Classification and/or history of pulmonary edema
    congestiveHeartFailure: boolean
    // Baseline hematocrit value <39% for men and <36% for women
    anemia: boolean
    diabetes: boolean
    // ml
    contrastMediaVolume: number
    sex: sex
    // mg/dl
    creatinine: number
    // cm
    blackPerson: boolean
  }
}

interface riskInterface {
  score: {
    min: number
    max: number
  }
  riskOfPostPciCIN: {
    anyCin: string
    cinRequiringDialysis: string
  }
}

export interface Formula_Mehran_Score_for_Post_PCI_Contrast_Nephropathy_return_interface
  extends returnInterface {
  score: number
  interpretation: riskInterface['riskOfPostPciCIN']
}

const risk: riskInterface[] = [
  {
    score: { min: 0, max: 5 },
    riskOfPostPciCIN: {
      anyCin: '7.5%',
      cinRequiringDialysis: '0.04%',
    },
  },
  {
    score: { min: 6, max: 10 },
    riskOfPostPciCIN: {
      anyCin: '14.0%',
      cinRequiringDialysis: '0.12%',
    },
  },
  {
    score: { min: 11, max: 15 },
    riskOfPostPciCIN: {
      anyCin: '26.1%',
      cinRequiringDialysis: '1.09%',
    },
  },
  {
    score: { min: 16, max: 100 },
    riskOfPostPciCIN: {
      anyCin: '57.3%',
      cinRequiringDialysis: '12.6%',
    },
  },
]

export const Formula_Mehran_Score_for_Post_PCI_Contrast_Nephropathy = ({
  params: {
    anemia,
    age,
    blackPerson,
    congestiveHeartFailure,
    contrastMediaVolume,
    creatinine,
    diabetes,
    intraAorticBalloonPump,
    sBP,
    sex,
  },
}: Formula_Mehran_Score_for_Post_PCI_Contrast_Nephropathy_interface): Formula_Mehran_Score_for_Post_PCI_Contrast_Nephropathy_return_interface => {
  // Use variables at the time of PCI.
  const link =
    'https://www.mdcalc.com/calc/10087/mehran-score-post-pci-contrast-nephropathy'
  const eGFR = Formula_MDRD_GFR_Equation({
    formula: 'MDRD_GFR_Equation',
    params: { age, blackPerson, creatinine, sex },
  }).MDRD_GFR_Equation

  const score =
    +(sBP < 80) * 5 +
    +intraAorticBalloonPump * 5 +
    +congestiveHeartFailure * 5 +
    +(age > 75) * 4 +
    +anemia * 3 +
    +diabetes * 3 +
    Math.floor(contrastMediaVolume / 100) +
    (eGFR >= 60 ? 0 : eGFR >= 40 ? 2 : eGFR >= 20 ? 4 : 6)

  const interpretation = risk.find(
    (e) => e.score.min <= score && e.score.max >= score,
  )!.riskOfPostPciCIN

  return {
    link,
    score,
    interpretation,
  }
}
