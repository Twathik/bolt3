import { returnInterface } from '../CommonInterface'

export interface Formula_4_A_Formula_for_Delirium_Screening_interface {
  formula: '4 A’s Test for Delirium Screening'
  params: {
    Alertness:
      | 'Normal'
      | 'Mild sleepiness for <10 seconds after waking, then normal'
      | 'Clearly abnormal'
    // Age, date of birth, place (name of hospital or building), current year
    AMT_4: 'No mistakes' | '1 mistake' | '≥2 mistakes or untestable'
    // Instruct patient to list months in reverse order, starting at December.
    Attention:
      | 'Lists ≥7 months correctly'
      | 'Starts but lists <7 months, or refuses to start'
      | 'Untestable (cannot start because unwell, drowsy, inattentive)'
    //Evidence of significant change or fluctuation in mental status within the last 2 weeks and still persisting in the last 24 hours.
    Acute_change_or_fluctuating_course: 'No' | 'Yes'
  }
}

export interface Formula_4_A_Formula_for_Delirium_Screening_Return_interface
  extends returnInterface {
  score: number
  Level_of_impairment:
    | 'Possible delirium and/or cognitive impairment'
    | 'Possible cognitive impairment'
    | 'Delirium or severe cognitive impairment unlikely (but delirium still possible if “acute change or fluctuating course” information is incomplete)'
}

export const Formula_4_A_Formula_for_Delirium_Screening = ({
  params,
}: Formula_4_A_Formula_for_Delirium_Screening_interface): Formula_4_A_Formula_for_Delirium_Screening_Return_interface => {
  let Alertness: number = 0
  let AMT_4: number = 0
  let Attention: number = 0
  let Acute_change_or_fluctuating_course: number = 0
  const link = 'https://www.mdcalc.com/calc/3982/4-test-delirium-assessment'

  switch (params.Alertness) {
    case 'Clearly abnormal':
      Alertness = 4
      break
    case 'Mild sleepiness for <10 seconds after waking, then normal':
      Alertness = 0
      break
    case 'Normal':
      Alertness = 0
      break
    default:
      break
  }

  switch (params.AMT_4) {
    case 'No mistakes':
      Attention = 0
      break
    case '1 mistake':
      Attention = 1
      break
    case '≥2 mistakes or untestable':
      Attention = 2
      break
    default:
      break
  }

  switch (params.Attention) {
    case 'Lists ≥7 months correctly':
      Attention = 0
      break
    case 'Starts but lists <7 months, or refuses to start':
      Attention = 1
      break
    case 'Untestable (cannot start because unwell, drowsy, inattentive)':
      Attention = 2
      break
    default:
      break
  }

  switch (params.Acute_change_or_fluctuating_course) {
    case 'No':
      Attention = 0
      break
    case 'Yes':
      Attention = 4
      break
    default:
      break
  }

  const score =
    Alertness + AMT_4 + Attention + Acute_change_or_fluctuating_course

  if (score >= 4) {
    return {
      Level_of_impairment: 'Possible delirium and/or cognitive impairment',
      link,
      score,
    }
  } else if (score === 0) {
    return {
      Level_of_impairment:
        'Delirium or severe cognitive impairment unlikely (but delirium still possible if “acute change or fluctuating course” information is incomplete)',
      link,
      score,
    }
  } else {
    return {
      Level_of_impairment: 'Possible cognitive impairment',
      link,
      score,
    }
  }
}
