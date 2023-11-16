import { returnInterface } from '../CommonInterface'
import { Formula_Body_Mass_Index_Body_Surface_Area } from '../General/Formula_Body_Mass_Index_Body_Surface_Area'

export interface Formula_Geneva_Risk_Score_for_Venous_Thromboembolism_interface {
  formula: 'Geneva_Risk_Score_for_Venous_Thromboembolism'
  params: {
    age: number
    weight: number
    height: number
    cardiacFailure: boolean
    respiratoryFailure: boolean
    // <3 months ago
    recentStroke: boolean
    // <4 weeks ago
    recentMyocardialInfarction: boolean
    // Including sepsis
    acuteInfectiousDisease: boolean
    acuteRheumaticDisease: boolean
    activeMalignancy: boolean
    myeloProliferativeSyndrome: boolean
    nephroticSyndrome: boolean
    anyPriorVte: boolean
    knownHypercoagulableState: boolean
    // <30 min of walking per day
    immobilizationForMorThen3Days: boolean
    recentTravelForMoreThen6Hrs: boolean
    chronicVenousInsufficiency: boolean
    pregnancy: boolean
    hormonalTherapy: boolean
    dehydration: boolean
  }
}

export interface Formula_Geneva_Risk_Score_for_Venous_Thromboembolism_return_interface
  extends returnInterface {
  score: number
  interpretation:
    | 'Low, Risk of VTE 0.6%, No VTE prophylaxis indicated'
    | 'High, Risk of VTE 3.2%, VTE prophylaxis indicated'
}

export const Formula_Geneva_Risk_Score_for_Venous_Thromboembolism = ({
  params: {
    activeMalignancy,
    acuteInfectiousDisease,
    acuteRheumaticDisease,
    age,
    anyPriorVte,
    cardiacFailure,
    chronicVenousInsufficiency,
    dehydration,
    height,
    hormonalTherapy,
    immobilizationForMorThen3Days,
    knownHypercoagulableState,
    myeloProliferativeSyndrome,
    nephroticSyndrome,
    pregnancy,
    recentMyocardialInfarction,
    recentStroke,
    recentTravelForMoreThen6Hrs,
    respiratoryFailure,
    weight,
  },
}: Formula_Geneva_Risk_Score_for_Venous_Thromboembolism_interface): Formula_Geneva_Risk_Score_for_Venous_Thromboembolism_return_interface => {
  const link = ''
  const BMI = Formula_Body_Mass_Index_Body_Surface_Area({
    formula: 'Body_Mass_Index_Body_Surface_Area',
    params: { height, weight },
  }).BMI
  const score =
    +cardiacFailure * 2 +
    +respiratoryFailure * 2 +
    +recentStroke * 2 +
    +recentMyocardialInfarction * 2 +
    +acuteInfectiousDisease * 2 +
    +acuteRheumaticDisease * 2 +
    +activeMalignancy * 2 +
    +myeloProliferativeSyndrome * 2 +
    +nephroticSyndrome * 2 +
    +anyPriorVte * 2 +
    +(+knownHypercoagulableState) * 2 +
    +immobilizationForMorThen3Days +
    +recentTravelForMoreThen6Hrs +
    +(age > 60) +
    +(BMI > 30) +
    +chronicVenousInsufficiency +
    +pregnancy +
    +hormonalTherapy +
    +dehydration

  const interpretation: Formula_Geneva_Risk_Score_for_Venous_Thromboembolism_return_interface['interpretation'] =
    score >= 3
      ? 'High, Risk of VTE 3.2%, VTE prophylaxis indicated'
      : 'Low, Risk of VTE 0.6%, No VTE prophylaxis indicated'

  return {
    link,
    score,
    interpretation,
  }
}
