import { returnInterface } from '../CommonInterface'

export interface Formula_Canadian_Syncope_Risk_Score_interface {
  formula: 'Canadian_Syncope_Risk_Score'
  params: {
    // Triggered by being in a warm crowded place, prolonged standing, fear, emotion, or pain
    PredispositionToVasovagalSymptoms: boolean
    // CAD, atrial fibrillation or flutter, CHF, valvular disease
    HeartDiseaseHistory: boolean
    // On any reading
    sBp: number
    // >99th percentile of normal population
    ElevatedTroponin: boolean
    AbnormalQRSAxis: boolean
    QRSDurationSup130ms: boolean
    CorrectedQTIntervalSup480ms: boolean
    InitialDiagnostic: 'Vasovagal syncope' | 'Cardiac syncope' | 'Neither'
  }
}

interface riskScoreInterface {
  score: -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
  EstimatedRiskOfSeriousAdverseEvent:
    | '0.4%'
    | '0.7%'
    | '1.2%'
    | '1.9%'
    | '3.1%'
    | '5.1%'
    | '8.1%'
    | '12.9%'
    | '19.7%'
    | '28.9%'
    | '40.3%'
    | '52.8%'
    | '65.0%'
    | '75.5%'
    | '83.6%'
  RiskCategory: 'Very low' | 'Low' | 'Medium' | 'High' | 'Very high'
}

const riskScore: riskScoreInterface[] = [
  {
    score: -3,
    EstimatedRiskOfSeriousAdverseEvent: '0.4%',
    RiskCategory: 'Very low',
  },
  {
    score: -2,
    EstimatedRiskOfSeriousAdverseEvent: '0.7%',
    RiskCategory: 'Very low',
  },
  {
    score: -1,
    EstimatedRiskOfSeriousAdverseEvent: '1.2%',
    RiskCategory: 'Low',
  },
  {
    score: 0,
    EstimatedRiskOfSeriousAdverseEvent: '1.9%',
    RiskCategory: 'Low',
  },
  {
    score: 1,
    EstimatedRiskOfSeriousAdverseEvent: '3.1%',
    RiskCategory: 'Medium',
  },
  {
    score: 2,
    EstimatedRiskOfSeriousAdverseEvent: '5.1%',
    RiskCategory: 'Medium',
  },
  {
    score: 3,
    EstimatedRiskOfSeriousAdverseEvent: '8.1%',
    RiskCategory: 'Medium',
  },
  {
    score: 4,
    EstimatedRiskOfSeriousAdverseEvent: '12.9%',
    RiskCategory: 'High',
  },
  {
    score: 5,
    EstimatedRiskOfSeriousAdverseEvent: '19.7%',
    RiskCategory: 'High',
  },
  {
    score: 6,
    EstimatedRiskOfSeriousAdverseEvent: '28.9%',
    RiskCategory: 'Very high',
  },
  {
    score: 7,
    EstimatedRiskOfSeriousAdverseEvent: '40.3%',
    RiskCategory: 'Very high',
  },
  {
    score: 8,
    EstimatedRiskOfSeriousAdverseEvent: '52.8%',
    RiskCategory: 'Very high',
  },
  {
    score: 9,
    EstimatedRiskOfSeriousAdverseEvent: '65.0%',
    RiskCategory: 'Very high',
  },
  {
    score: 10,
    EstimatedRiskOfSeriousAdverseEvent: '75.5%',
    RiskCategory: 'Very high',
  },
  {
    score: 11,
    EstimatedRiskOfSeriousAdverseEvent: '83.6%',
    RiskCategory: 'Very high',
  },
]

export interface Formula_Canadian_Syncope_Risk_Score_return_interface
  extends returnInterface,
    riskScoreInterface {}

export const Formula_Canadian_Syncope_Risk_Score = ({
  params: {
    AbnormalQRSAxis,
    CorrectedQTIntervalSup480ms,
    ElevatedTroponin,
    HeartDiseaseHistory,
    InitialDiagnostic,
    PredispositionToVasovagalSymptoms,
    QRSDurationSup130ms,
    sBp,
  },
}: Formula_Canadian_Syncope_Risk_Score_interface): Formula_Canadian_Syncope_Risk_Score_return_interface => {
  const link = 'https://www.mdcalc.com/calc/3951/canadian-syncope-risk-score'
  const score =
    (PredispositionToVasovagalSymptoms ? -1 : 0) +
    (HeartDiseaseHistory ? 1 : 0) +
    (sBp < 90 || sBp > 180 ? 2 : 0) +
    (ElevatedTroponin ? 2 : 0) +
    (AbnormalQRSAxis ? 1 : 0) +
    (QRSDurationSup130ms ? 1 : 0) +
    (CorrectedQTIntervalSup480ms ? 2 : 0) +
    (InitialDiagnostic === 'Neither'
      ? 0
      : InitialDiagnostic === 'Cardiac syncope'
      ? 2
      : -2)

  const interpretation: riskScoreInterface = riskScore.find(
    (e) => e.score === score,
  )!
  return {
    link,
    ...interpretation,
  }
}
