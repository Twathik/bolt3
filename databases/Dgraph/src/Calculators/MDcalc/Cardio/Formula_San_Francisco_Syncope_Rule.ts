import { returnInterface } from '../CommonInterface'

export interface Formula_San_Francisco_Syncope_Rule_interface {
  formula: 'San_Francisco_Syncope_Rule'
  params: {
    congestiveHeartFailureHistory: boolean
    hematocritLess30: boolean
    // (EKG changed, or any non-sinus rhythm on EKG or monitoring)
    EKGAbnormal: boolean
    shortnessOfBreathSymptoms: boolean
    systolicBPLess90mmHgAtTriage: boolean
  }
}

export interface Formula_San_Francisco_Syncope_Rule_return_interface
  extends returnInterface {
  interpretation:
    | 'Patient IS in the low-risk group for serious outcome.'
    | 'Patient is NOT in the low-risk group for serious outcome.'
}

// Use in adult patients presenting with syncope or near-syncope who are back to their neurologic baseline. Do not use in patients with persistent or new neurologic deficits, alcohol or drug-related loss of consciousness, definite seizure, or transient loss of consciousness from head trauma.
export const Formula_San_Francisco_Syncope_Rule = ({
  params: {
    EKGAbnormal,
    congestiveHeartFailureHistory,
    hematocritLess30,
    shortnessOfBreathSymptoms,
    systolicBPLess90mmHgAtTriage,
  },
}: Formula_San_Francisco_Syncope_Rule_interface): Formula_San_Francisco_Syncope_Rule_return_interface => {
  const link = 'https://www.mdcalc.com/calc/93/san-francisco-syncope-rule'
  const score =
    +EKGAbnormal +
    +congestiveHeartFailureHistory +
    +hematocritLess30 +
    +shortnessOfBreathSymptoms +
    +systolicBPLess90mmHgAtTriage

  const interpretation: Formula_San_Francisco_Syncope_Rule_return_interface['interpretation'] =
    score > 0
      ? 'Patient is NOT in the low-risk group for serious outcome.'
      : 'Patient IS in the low-risk group for serious outcome.'
  return {
    link,
    interpretation,
  }
}
