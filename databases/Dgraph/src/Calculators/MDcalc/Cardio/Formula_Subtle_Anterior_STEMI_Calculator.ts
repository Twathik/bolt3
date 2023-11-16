import { Formula_Corrected_QT_Interval } from './Formula_Corrected_QT_Interval'
import { returnInterface } from '../CommonInterface'

export interface Formula_Subtle_Anterior_STEMI_Calculator_interface {
  formula: 'Subtle_Anterior_STEMI_Calculator'
  params: {
    heartRate: number
    paperSpeed?: 25 | 50
    QTintervalInSmallBoxes: number
    // mm
    QRSAmplitudeInLeadV2: number
    // mm
    RWaveAmplitudeInLeadV4: number
    stSegmentElevation60MsAfterTheJPointInLeadV3: number
  }
}

export interface Formula_Subtle_Anterior_STEMI_Calculator_return_interface
  extends returnInterface {
  score: number
  interpretation:
    | 'Likely to be anterior STEMI (83.3% sensitivity, 87.7% specificity, and 85.9% diagnostic accuracy).'
    | 'Likely to be benign early repolarization.'
}

export const Formula_Subtle_Anterior_STEMI_Calculator = ({
  params: {
    heartRate,
    paperSpeed,
    QTintervalInSmallBoxes,
    QRSAmplitudeInLeadV2,
    RWaveAmplitudeInLeadV4,
    stSegmentElevation60MsAfterTheJPointInLeadV3,
  },
}: Formula_Subtle_Anterior_STEMI_Calculator_interface): Formula_Subtle_Anterior_STEMI_Calculator_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/10079/subtle-anterior-stemi-calculator-4-variable'
  const score = +(
    0.052 *
      Formula_Corrected_QT_Interval({
        formula: 'Corrected_QT_Interval',
        params: {
          formula: 'Bazett',
          heartRate,
          QTintervalInSmallBoxes,
          paperSpeed,
        },
      }).QTc -
    0.151 * QRSAmplitudeInLeadV2 -
    0.268 * RWaveAmplitudeInLeadV4 +
    1.062 * stSegmentElevation60MsAfterTheJPointInLeadV3
  ).toFixed(1)

  const interpretation: Formula_Subtle_Anterior_STEMI_Calculator_return_interface['interpretation'] =
    score >= 18.2
      ? 'Likely to be anterior STEMI (83.3% sensitivity, 87.7% specificity, and 85.9% diagnostic accuracy).'
      : 'Likely to be benign early repolarization.'
  return {
    link,
    score,
    interpretation,
  }
}
