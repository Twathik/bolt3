import { returnInterface } from '../CommonInterface'

export interface Formula_ISTH_Criteria_for_Disseminated_Intravascular_Coagulation_interface {
  formula: 'ISTH_Criteria_for_Disseminated_Intravascular_Coagulation'
  params: {
    plateletCountCellsX109L: number
    // (e.g. D-dimer, fibrin degradation products, Use lab-specific cutoff values
    elevatedLevelsOfAFibrinRelatedMarker:
      | 'No increase'
      | 'Moderate increase'
      | 'Severe increase'
    // seconds
    ProlongedProthrombineTime: '<3' | '3 to <6' | '≥6'
    fibrinogenLevel: '≥1' | '<1'
  }
}

export interface Formula_ISTH_Criteria_for_Disseminated_Intravascular_Coagulation_return_interface
  extends returnInterface {
  score: number
  Interpretation:
    | 'Not suggestive of overt DIC, may be non-overt DIC; repeat within next 1-2 days and manage clinically as appropriate'
    | 'Compatible with overt DIC; treat for DIC as appropriate and repeat scoring daily'
}

export const Formula_ISTH_Criteria_for_Disseminated_Intravascular_Coagulation =
  ({
    params: {
      ProlongedProthrombineTime,
      elevatedLevelsOfAFibrinRelatedMarker,
      fibrinogenLevel,
      plateletCountCellsX109L,
    },
  }: Formula_ISTH_Criteria_for_Disseminated_Intravascular_Coagulation_interface): Formula_ISTH_Criteria_for_Disseminated_Intravascular_Coagulation_return_interface => {
    const link =
      'https://www.mdcalc.com/calc/10203/isth-criteria-disseminated-intravascular-coagulation-dic'
    const score =
      (plateletCountCellsX109L >= 100
        ? 0
        : plateletCountCellsX109L >= 50
        ? 1
        : 2) +
      (elevatedLevelsOfAFibrinRelatedMarker === 'Severe increase'
        ? 3
        : elevatedLevelsOfAFibrinRelatedMarker === 'Moderate increase'
        ? 2
        : 0) +
      (ProlongedProthrombineTime === '≥6'
        ? 2
        : ProlongedProthrombineTime === '3 to <6'
        ? 1
        : 0) +
      +(fibrinogenLevel === '<1')
    const Interpretation: Formula_ISTH_Criteria_for_Disseminated_Intravascular_Coagulation_return_interface['Interpretation'] =
      score < 5
        ? 'Not suggestive of overt DIC, may be non-overt DIC; repeat within next 1-2 days and manage clinically as appropriate'
        : 'Compatible with overt DIC; treat for DIC as appropriate and repeat scoring daily'
    return {
      link,
      Interpretation,
      score,
    }
  }
