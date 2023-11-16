import { returnInterface } from '../CommonInterface'

export interface Formula_HAS_BLED_Score_for_Major_Bleeding_Risk_interface {
  formula: 'HAS_BLED_Score_for_Major_Bleeding_Risk'
  params: {
    age: number
    // Uncontrolled, >160 mmHg systolic
    hypertension: boolean
    //  Dialysis, transplant, Cr >2.26 mg/dL or >200 µmol/L
    renalDisease: boolean
    // Cirrhosis or bilirubin >2x normal with AST/ALT/AP >3x normal
    liverDisease: boolean
    strokeHistory: boolean
    priorMajorBleedingOrPredispositionToBleeding: boolean
    // Unstable/high INRs, time in therapeutic range <60%
    labileINR: boolean
    // Aspirin, clopidogrel, NSAIDs
    medicationUsagePredisposingToBleeding: boolean
    // ≥8 drinks/week
    alcoholUse: boolean
  }
}
interface riskInterface {
  score: number
  riskGroup: 'Relatively low' | 'Moderate' | 'High' | 'Very high'
  riskOfMajorBleeding: string
  bleedsPer100PatientYears?: number
  recommendation:
    | 'Anticoagulation should be considered'
    | 'Anticoagulation can be considered'
    | 'Alternatives to anticoagulation should be considered'
}

export interface Formula_HAS_BLED_Score_for_Major_Bleeding_Risk_return_interface
  extends returnInterface {
  score: number
  interpretation: Omit<riskInterface, 'score'>
}

const risk: riskInterface[] = [
  {
    score: 0,
    riskGroup: 'Relatively low',
    riskOfMajorBleeding: '0.9%',
    bleedsPer100PatientYears: 1.13,
    recommendation: 'Anticoagulation should be considered',
  },
  {
    score: 1,
    riskGroup: 'Relatively low',
    riskOfMajorBleeding: '3.4%',
    bleedsPer100PatientYears: 1.02,
    recommendation: 'Anticoagulation should be considered',
  },
  {
    score: 2,
    riskGroup: 'Moderate',
    riskOfMajorBleeding: '4.1%',
    bleedsPer100PatientYears: 1.88,
    recommendation: 'Anticoagulation can be considered',
  },
  {
    score: 3,
    riskGroup: 'High',
    riskOfMajorBleeding: '5.8%',
    bleedsPer100PatientYears: 3.72,
    recommendation: 'Alternatives to anticoagulation should be considered',
  },
  {
    score: 4,
    riskGroup: 'High',
    riskOfMajorBleeding: '8.9%',
    bleedsPer100PatientYears: 8.7,
    recommendation: 'Alternatives to anticoagulation should be considered',
  },
  {
    score: 5,
    riskGroup: 'High',
    riskOfMajorBleeding: '9.1%',
    bleedsPer100PatientYears: 12.5,
    recommendation: 'Alternatives to anticoagulation should be considered',
  },
  {
    score: 6,
    riskGroup: 'Very high',
    riskOfMajorBleeding: 'over 10%',
    recommendation: 'Alternatives to anticoagulation should be considered',
  },
]

export const Formula_HAS_BLED_Score_for_Major_Bleeding_Risk = ({
  params: {
    age,
    alcoholUse,
    hypertension,
    labileINR,
    liverDisease,
    medicationUsagePredisposingToBleeding,
    priorMajorBleedingOrPredispositionToBleeding,
    renalDisease,
    strokeHistory,
  },
}: Formula_HAS_BLED_Score_for_Major_Bleeding_Risk_interface): Formula_HAS_BLED_Score_for_Major_Bleeding_Risk_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/807/has-bled-score-major-bleeding-risk'

  const score =
    +hypertension +
    +renalDisease +
    +liverDisease +
    +strokeHistory +
    +priorMajorBleedingOrPredispositionToBleeding +
    +labileINR +
    +(age > 65) +
    +medicationUsagePredisposingToBleeding +
    +alcoholUse

  const { score: riskScore, ...riskInterpretation } = risk.find((e) =>
    score <= 5 ? e.score === score : e.score === 6,
  )!
  return {
    link,
    score,
    interpretation: riskInterpretation,
  }
}
