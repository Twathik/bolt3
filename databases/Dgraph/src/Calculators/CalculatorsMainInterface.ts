import {
  Formula_4PEPS_interface,
  Formula_6_Minute_Walk_Distance_interface,
  Formula_AAP_Pediatric_Hypertension_Guidelines_interface,
  Formula_Absolute_Reticulocyte_Count_Reticulocyte_Index_interface,
  Formula_ACEF_II_risk_score_cardiac_surgery_interface,
  Formula_Acute_Decompensated_Heart_Failure_National_Registry_Algorithm_interface,
  Formula_ADAPT_Protocol_for_Cardiac_Event_Risk_interface,
  Formula_Age_Adjusted_Ddimer_VTE_interface,
  Formula_Body_Mass_Index_Body_Surface_Area_interface,
  Formula_Brugada_Criteria_for_Ventricular_Tachycardia_interface,
  Formula_Calcium_Correction_For_Hypoalbuminemia_interface,
  Formula_Canadian_Syncope_Risk_Score_interface,
  Formula_Cardiac_Output_FickFormula_interface,
  Formula_CHA2DS2_VASc_Score_interface,
  Formula_Corrected_QT_Interval_interface,
  Formula_Creatinine_Clearance_Cockcroft_Gault_Equation_interface,
  Formula_CRUSADE_Score_for_Post_MI_Bleeding_Risk_interface,
  Formula_Dual_Antiplatelet_Therapy_DAPT_Score_interface,
  Formula_Duke_Criteria_for_Infective_Endocarditis_interface,
  Formula_Duke_Treadmill_Score_interface,
  Formula_EuroSCORE_II_interface,
  Formula_Framingham_Risk_Score_for_Hard_Coronary_Heart_Disease_interface,
  Formula_Geneva_Risk_Score_for_Venous_Thromboembolism_interface,
  Formula_Geneva_Score_for_Pulmonary_Embolism_interface,
  Formula_GRACE_ACS_Risk_and_Mortality_Calculator_interface,
  Formula_H2FPEF_Score_for_Heart_Failure_with_Preserved_Ejection_Fraction_interface,
  Formula_HAS_BLED_Score_for_Major_Bleeding_Risk_interface,
  Formula_Ideal_Body_Weight_Adjusted_Body_Weight_interface,
  Formula_Indian_Takayasu_Clinical_Activity_Score_interface,
  Formula_Infective_Endocarditis_Mortality_Risk_Score_interface,
  Formula_ISTH_Criteria_for_Disseminated_Intravascular_Coagulation_interface,
  Formula_Kawasaki_Disease_Diagnostic_Criteria_interface,
  Formula_LDL_Calculated_interface,
  Formula_MDRD_GFR_Equation_interface,
  Formula_Mehran_Score_for_Post_PCI_Contrast_Nephropathy_interface,
  Formula_Pulmonary_Embolism_Severity_Index_PESI_interface,
  Formula_Reynolds_Risk_Score_for_Cardiovascular_Risk_in_Women_interface,
  Formula_RiskE_Score_for_Cardiac_Surgery_in_Active_Infective_Endocarditis_interface,
  Formula_San_Francisco_Syncope_Rule_interface,
  Formula_Sgarbossa_Criteria_for_MI_in_Left_Bundle_Branch_Block_interface,
  Formula_Simplified_PESI_Pulmonary_Embolism_Severity_Index_interface,
  Formula_Subtle_Anterior_STEMI_Calculator_interface,
  Formula_TIMI_Risk_Score_for_STEMI_interface,
  Formula_TIMI_Risk_Score_for_UA__NSTEMI_interface,
  Formula_Wells_Criteria_for_DVT_interface,
  Formula_Wells_Criteria_for_Pulmonary_Embolism_interface,
  Formula_4_A_Formula_for_Delirium_Screening_interface,
  Formula_APGAR_Score_interface,
} from './MDcalc'
export type CalculatorsMainInterface =
  | Formula_Absolute_Reticulocyte_Count_Reticulocyte_Index_interface
  | Formula_Age_Adjusted_Ddimer_VTE_interface
  | Formula_Calcium_Correction_For_Hypoalbuminemia_interface
  | Formula_Creatinine_Clearance_Cockcroft_Gault_Equation_interface
  | Formula_ISTH_Criteria_for_Disseminated_Intravascular_Coagulation_interface
  | Formula_LDL_Calculated_interface
  | Formula_MDRD_GFR_Equation_interface
  | Formula_4PEPS_interface
  | Formula_6_Minute_Walk_Distance_interface
  | Formula_AAP_Pediatric_Hypertension_Guidelines_interface
  | Formula_ADAPT_Protocol_for_Cardiac_Event_Risk_interface
  | Formula_Acute_Decompensated_Heart_Failure_National_Registry_Algorithm_interface
  | Formula_Brugada_Criteria_for_Ventricular_Tachycardia_interface
  | Formula_CHA2DS2_VASc_Score_interface
  | Formula_CRUSADE_Score_for_Post_MI_Bleeding_Risk_interface
  | Formula_Canadian_Syncope_Risk_Score_interface
  | Formula_Cardiac_Output_FickFormula_interface
  | Formula_Corrected_QT_Interval_interface
  | Formula_Dual_Antiplatelet_Therapy_DAPT_Score_interface
  | Formula_Duke_Criteria_for_Infective_Endocarditis_interface
  | Formula_Duke_Treadmill_Score_interface
  | Formula_Framingham_Risk_Score_for_Hard_Coronary_Heart_Disease_interface
  | Formula_GRACE_ACS_Risk_and_Mortality_Calculator_interface
  | Formula_Geneva_Risk_Score_for_Venous_Thromboembolism_interface
  | Formula_Geneva_Score_for_Pulmonary_Embolism_interface
  | Formula_H2FPEF_Score_for_Heart_Failure_with_Preserved_Ejection_Fraction_interface
  | Formula_HAS_BLED_Score_for_Major_Bleeding_Risk_interface
  | Formula_Indian_Takayasu_Clinical_Activity_Score_interface
  | Formula_Infective_Endocarditis_Mortality_Risk_Score_interface
  | Formula_Kawasaki_Disease_Diagnostic_Criteria_interface
  | Formula_Mehran_Score_for_Post_PCI_Contrast_Nephropathy_interface
  | Formula_Pulmonary_Embolism_Severity_Index_PESI_interface
  | Formula_Reynolds_Risk_Score_for_Cardiovascular_Risk_in_Women_interface
  | Formula_RiskE_Score_for_Cardiac_Surgery_in_Active_Infective_Endocarditis_interface
  | Formula_San_Francisco_Syncope_Rule_interface
  | Formula_Sgarbossa_Criteria_for_MI_in_Left_Bundle_Branch_Block_interface
  | Formula_Simplified_PESI_Pulmonary_Embolism_Severity_Index_interface
  | Formula_Subtle_Anterior_STEMI_Calculator_interface
  | Formula_TIMI_Risk_Score_for_STEMI_interface
  | Formula_TIMI_Risk_Score_for_UA__NSTEMI_interface
  | Formula_Wells_Criteria_for_DVT_interface
  | Formula_Wells_Criteria_for_Pulmonary_Embolism_interface
  | Formula_Body_Mass_Index_Body_Surface_Area_interface
  | Formula_Ideal_Body_Weight_Adjusted_Body_Weight_interface
  | Formula_4_A_Formula_for_Delirium_Screening_interface
  | Formula_ACEF_II_risk_score_cardiac_surgery_interface
  | Formula_EuroSCORE_II_interface
  | Formula_APGAR_Score_interface