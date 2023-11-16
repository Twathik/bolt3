import {
  Formula_TIMI_Risk_Score_for_UA__NSTEMI,
  Formula_TIMI_Risk_Score_for_UA__NSTEMI_interface,
} from './Formula_TIMI_Risk_Score_for_UA__NSTEMI'
import { returnInterface } from '../CommonInterface'

export interface Formula_ADAPT_Protocol_for_Cardiac_Event_Risk_interface {
  formula: 'ADAPT_Protocol_for_Cardiac_Event_Risk'
  params: {
    TIMIScore: Formula_TIMI_Risk_Score_for_UA__NSTEMI_interface['params']
    // Abnormal troponin at 0 or 2 hours, cTnI level at 0 and 2 hours above institutional cutoff for elevated troponin.
    AbnormalTroponinAt0Or2Hours: boolean
    // Ischemic changes on EKG, ST-segment depression of at least 0.05 mV in ≥2 contiguous leads (including reciprocal changes), T-wave inversion of at least 0.1 mV, or Q waves ≥30 ms in width and ≥0.1 mV in depth in at least 2 contiguous leads.
    IschemicChangesOnEKG: boolean
  }
}

export interface Formula_ADAPT_Protocol_for_Cardiac_Event_Risk_return_interface
  extends returnInterface {
  interpretation:
    | 'Low risk, 0-0.3% risk of major cardiac event in 30 days.'
    | 'Intermediate risk, 0.8% risk of major cardiac event in 30 days.'
    | 'High risk, Evaluate through standard chest pain diagnostic pathway.'
}

export const Formula_ADAPT_Protocol_for_Cardiac_Event_Risk = ({
  params: {
    AbnormalTroponinAt0Or2Hours,
    IschemicChangesOnEKG,
    TIMIScore: {
      AspirinUse7days,
      KnownCAD_Stenosis50,
      SevereAngina,
      age,
      plus3CADRiskFactors,
    },
  },
}: Formula_ADAPT_Protocol_for_Cardiac_Event_Risk_interface): Formula_ADAPT_Protocol_for_Cardiac_Event_Risk_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/1857/adapt-protocol-cardiac-event-risk'
  const TIMIScore = Formula_TIMI_Risk_Score_for_UA__NSTEMI({
    formula: 'TIMI_Risk_Score_for_UA__NSTEMI',
    params: {
      age,
      AspirinUse7days,
      EKGSTchanges: IschemicChangesOnEKG,
      KnownCAD_Stenosis50,
      plus3CADRiskFactors,
      PositiveCardiacMarker: AbnormalTroponinAt0Or2Hours,
      SevereAngina,
    },
  })
  if (AbnormalTroponinAt0Or2Hours || IschemicChangesOnEKG)
    return {
      link,
      interpretation:
        'High risk, Evaluate through standard chest pain diagnostic pathway.',
    }
  if (TIMIScore.score === 0) {
    return {
      link,
      interpretation:
        'Low risk, 0-0.3% risk of major cardiac event in 30 days.',
    }
  } else {
    return {
      link,
      interpretation:
        'Intermediate risk, 0.8% risk of major cardiac event in 30 days.',
    }
  }
}
