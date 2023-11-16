import { returnInterface } from '../CommonInterface'

export interface Formula_Brugada_Criteria_for_Ventricular_Tachycardia_interface {
  formula: 'Brugada_Criteria_for_Ventricular_Tachycardia'
  params: {
    // All QRS complexes completely upright or completely downward in precordial leads
    AbsenceOfAnRSComplexInAllPrecordialLeads: boolean
    // Distance between R and S waves in each precordial lead
    RToSIntervalSup100msInOnePrecordialLead: boolean
    // P waves seen at different rates than QRS complex
    AtrioventricularDissociation: boolean
    // VT is frequently either in a right bundle branch block pattern (upright in V1) or a left bundle branch block pattern (downward in V1)
    MorphologyCriteriaForVTPresentInBothPrecordialLeadsV1_2AndV6: boolean
  }
}

export interface Formula_Brugada_Criteria_for_Ventricular_Tachycardia_return_interface
  extends returnInterface {
  specificity: 100 | 98.7 | 98 | 96.5
  interpretation:
    | 'Ventricular tachycardia, ACLS protocol recommends amiodarone and preparing for synchronized cardioversion'
    | 'Supra ventricular tachycardia, Refer to ACLS protocol for treatment options (see Next Steps)'
}

export const Formula_Brugada_Criteria_for_Ventricular_Tachycardia = ({
  params: {
    AbsenceOfAnRSComplexInAllPrecordialLeads,
    AtrioventricularDissociation,
    MorphologyCriteriaForVTPresentInBothPrecordialLeadsV1_2AndV6,
    RToSIntervalSup100msInOnePrecordialLead,
  },
}: Formula_Brugada_Criteria_for_Ventricular_Tachycardia_interface): Formula_Brugada_Criteria_for_Ventricular_Tachycardia_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/4045/brugada-criteria-ventricular-tachycardia'

  const result: Omit<
    Formula_Brugada_Criteria_for_Ventricular_Tachycardia_return_interface,
    'link'
  > = AbsenceOfAnRSComplexInAllPrecordialLeads
    ? {
        interpretation:
          'Ventricular tachycardia, ACLS protocol recommends amiodarone and preparing for synchronized cardioversion',
        specificity: 100,
      }
    : RToSIntervalSup100msInOnePrecordialLead
    ? {
        interpretation:
          'Ventricular tachycardia, ACLS protocol recommends amiodarone and preparing for synchronized cardioversion',
        specificity: 98,
      }
    : AtrioventricularDissociation
    ? {
        interpretation:
          'Ventricular tachycardia, ACLS protocol recommends amiodarone and preparing for synchronized cardioversion',
        specificity: 98,
      }
    : MorphologyCriteriaForVTPresentInBothPrecordialLeadsV1_2AndV6
    ? {
        interpretation:
          'Ventricular tachycardia, ACLS protocol recommends amiodarone and preparing for synchronized cardioversion',
        specificity: 96.5,
      }
    : {
        interpretation:
          'Supra ventricular tachycardia, Refer to ACLS protocol for treatment options (see Next Steps)',
        specificity: 98.7,
      }

  return {
    link,
    ...result,
  }
}
