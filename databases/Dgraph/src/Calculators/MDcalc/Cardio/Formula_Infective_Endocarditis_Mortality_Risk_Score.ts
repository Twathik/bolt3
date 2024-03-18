import { returnInterface } from '../CommonInterface'

export interface Formula_Infective_Endocarditis_Mortality_Risk_Score_interface {
  formula: 'Infective_Endocarditis_Mortality_Risk_Score'
  params: {
    age: number
    historyOfDialysis: boolean
    nosocomialIE: boolean
    prostheticIE: boolean
    symptomsMore1MonthBeforeAdmission: boolean
    staphylococcusAureus: boolean
    viridansGroupStreptococci: boolean
    aorticVegetation: boolean
    mitralVegetation: boolean
    NYHAClass3Or4HeartFailure: boolean
    stroke: boolean
    paravalvularComplication: boolean
    persistentBacteremia: boolean
    surgicalTreatment: boolean
  }
}

export interface Formula_Infective_Endocarditis_Mortality_Risk_Score_return_interface
  extends returnInterface {
  score: number
  probabilityOfDeath: number
}

export const Formula_Infective_Endocarditis_Mortality_Risk_Score = ({
  params: {
    age,
    historyOfDialysis,
    nosocomialIE,
    prostheticIE,
    symptomsMore1MonthBeforeAdmission,
    staphylococcusAureus,
    viridansGroupStreptococci,
    aorticVegetation,
    mitralVegetation,
    NYHAClass3Or4HeartFailure,
    stroke,
    paravalvularComplication,
    persistentBacteremia,
    surgicalTreatment,
  },
}: Formula_Infective_Endocarditis_Mortality_Risk_Score_interface): Formula_Infective_Endocarditis_Mortality_Risk_Score_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/3121/infective-endocarditis-ie-mortality-risk-score'

  const score =
    4 +
    +(age > 70 ? 4 : age >= 61 ? 3 : age >= 46 ? 2 : 0) +
    +historyOfDialysis * 3 +
    +nosocomialIE * 2 +
    +prostheticIE +
    +symptomsMore1MonthBeforeAdmission * -1 +
    +staphylococcusAureus +
    +viridansGroupStreptococci * -2 +
    +aorticVegetation +
    +mitralVegetation +
    +NYHAClass3Or4HeartFailure * 3 +
    +stroke * 2 +
    +paravalvularComplication * 2 +
    +persistentBacteremia * 2 +
    +surgicalTreatment * -2
  const probabilityOfDeath = +(
    2.416 * score +
    0.109 * Math.pow(score, 2) -
    4.849
  ).toFixed(1)
  return {
    link,
    score,
    probabilityOfDeath: probabilityOfDeath > 100 ? 100 : probabilityOfDeath,
  }
}
