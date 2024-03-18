import { returnInterface } from '../CommonInterface'

export interface Formula_Indian_Takayasu_Clinical_Activity_Score_interface {
  formula: 'Indian_Takayasu_Clinical_Activity_Score'
  params: {
    malaiseOrWeightLossMore2Kg: boolean
    myalgiaArthralgiaOrArthritis: boolean
    headache: boolean
    // pain presenting as an emergency with features of bowel ischemia, best confirmed by imaging or surgery
    severeAbdominalPain: boolean
    // spontaneous fetal loss within 12 weeks
    recentHistoryOfSpontaneousAbortion: boolean
    systolicBpMore140: boolean
    diastolicBpLess90: boolean
    stroke: boolean
    // not hypertensive
    seizures: boolean
    syncope: boolean
    vertigoDizziness: boolean
    // heart bruits
    bruits: boolean
    pulseInequality: boolean
    newLossOfPulses: boolean
    claudication: boolean
    carotidynia: boolean
    aorticIncompetence: boolean
    myocardialInfarctOrAngina: boolean
    cardiomyopathyCardiacFailure: boolean
    carotidBruitsRight: boolean
    carotidBruitsLeft: boolean
    subclavianBruitsRight: boolean
    subclavianBruitsLeft: boolean
    renalBruitsRight: boolean
    renalBruitsLeft: boolean
    pulseAndBpInequality: boolean
    carotidPulseLossRight: boolean
    carotidPulseLossLeft: boolean
    subclavianPulseLossRight: boolean
    subclavianPulseLoss: boolean
    brachialPulseLossRight: boolean
    brachialPulseLossLeft: boolean
    radialPulseLossRight: boolean
    radialPulseLossLeft: boolean
    femoralPulseLossRight: boolean
    femoralPulseLossLeft: boolean
    poplitealPulseLossRight: boolean
    poplitealPulseLossLeft: boolean
    posteriorTibialPulseLossRight: boolean
    posteriorTibialPulseLossLeft: boolean
    dorsalisPedisPulseLossRight: boolean
    dorsalisPedisPulseLossLeft: boolean
    claudicationArm: boolean
    claudicationLeg: boolean
  }
}

export interface Formula_Indian_Takayasu_Clinical_Activity_Score_return_interface
  extends returnInterface {
  score: number
  interpretation: 'Inactive' | 'Active'
}

export const Formula_Indian_Takayasu_Clinical_Activity_Score = ({
  params: {
    malaiseOrWeightLossMore2Kg,
    myalgiaArthralgiaOrArthritis,
    headache,
    severeAbdominalPain,
    recentHistoryOfSpontaneousAbortion,
    systolicBpMore140,
    diastolicBpLess90,
    stroke,
    seizures,
    syncope,
    vertigoDizziness,
    bruits,
    pulseInequality,
    newLossOfPulses,
    claudication,
    carotidynia,
    aorticIncompetence,
    myocardialInfarctOrAngina,
    cardiomyopathyCardiacFailure,
    carotidBruitsRight,
    carotidBruitsLeft,
    subclavianBruitsRight,
    subclavianBruitsLeft,
    renalBruitsRight,
    renalBruitsLeft,
    pulseAndBpInequality,
    carotidPulseLossRight,
    carotidPulseLossLeft,
    subclavianPulseLossRight,
    subclavianPulseLoss,
    brachialPulseLossRight,
    brachialPulseLossLeft,
    radialPulseLossRight,
    radialPulseLossLeft,
    femoralPulseLossRight,
    femoralPulseLossLeft,
    poplitealPulseLossRight,
    poplitealPulseLossLeft,
    posteriorTibialPulseLossRight,
    posteriorTibialPulseLossLeft,
    dorsalisPedisPulseLossRight,
    dorsalisPedisPulseLossLeft,
    claudicationArm,
    claudicationLeg,
  },
}: Formula_Indian_Takayasu_Clinical_Activity_Score_interface): Formula_Indian_Takayasu_Clinical_Activity_Score_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/10100/indian-takayasu-clinical-activity-score-itas2010'

  const score =
    +malaiseOrWeightLossMore2Kg +
    +myalgiaArthralgiaOrArthritis +
    +headache +
    +severeAbdominalPain +
    +recentHistoryOfSpontaneousAbortion +
    +systolicBpMore140 +
    +diastolicBpLess90 * 2 +
    +stroke * 2 +
    +seizures +
    +syncope +
    +vertigoDizziness +
    (bruits
      ? 2 +
        +carotidBruitsRight +
        +carotidBruitsLeft +
        +subclavianBruitsRight +
        +subclavianBruitsLeft +
        +renalBruitsRight +
        +renalBruitsLeft
      : 0) +
    (pulseInequality ? 2 + +pulseAndBpInequality : 0) +
    (newLossOfPulses
      ? 2 +
        +carotidPulseLossRight +
        +carotidPulseLossLeft +
        +subclavianPulseLossRight +
        +subclavianPulseLoss +
        +brachialPulseLossRight +
        +brachialPulseLossLeft +
        +radialPulseLossRight +
        +radialPulseLossLeft +
        +femoralPulseLossRight +
        +femoralPulseLossLeft +
        +poplitealPulseLossRight +
        +poplitealPulseLossLeft +
        +posteriorTibialPulseLossRight +
        +posteriorTibialPulseLossLeft +
        +dorsalisPedisPulseLossRight +
        +dorsalisPedisPulseLossLeft
      : 0) +
    (claudication ? 2 + +claudicationArm + +claudicationLeg : 0) +
    +carotidynia * 2 +
    +aorticIncompetence +
    +myocardialInfarctOrAngina +
    +cardiomyopathyCardiacFailure

  const interpretation: Formula_Indian_Takayasu_Clinical_Activity_Score_return_interface['interpretation'] =
    score < 2 ? 'Inactive' : 'Active'

  return {
    link,
    score,
    interpretation,
  }
}
