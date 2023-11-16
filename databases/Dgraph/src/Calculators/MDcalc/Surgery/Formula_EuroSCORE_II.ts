import { returnInterface, sex } from '../CommonInterface'
import { Formula_Creatinine_Clearance_Cockcroft_Gault_Equation } from '../Biology/Formula_Creatinine_Clearance_Cockcroft_Gault_Equation'

export interface Formula_EuroSCORE_II_interface {
  formula: 'EuroSCORE_II'
  params: {
    age: number
    sex: sex
    insulinDependentDiabetesMellitus: boolean
    chronicPulmonaryDysfunction: boolean
    neurologicalOrMusculoskeletalDysfunctionSeverelyAffectingMobility: boolean
    // kg
    weight: number
    // mg/dl
    creatinine: number
    // cm
    height: number
    onDialysis: boolean
    // ≥1 of the following in the same hospital admission as the operation: ventricular tachycardia or fibrillation or aborted sudden death; cardiac massage; ventilation before arrival to OR; inotropes; IABP or VAD before arrival to OR; acute renal failure, defined as anuria or oliguria <10 mL/hr
    criticalPreopState: boolean
    NYHAClass:
      | 'Class I: no symptoms on moderate exertion'
      | 'Class II: symptoms on moderate exertion'
      | 'Class III: symptoms on light exertion'
      | 'Class IV: symptoms at rest'
    // Inability to perform any activity without angina or angina at rest
    CCSclass4: boolean
    // ≥1 of the following: claudication; carotid occlusion or >50% stenosis (NASCET criteria); amputation for arterial disease; previous or planned intervention on abdominal aorta, limb arteries, or carotids
    extraCardiacArteriopathy: boolean

    // ≥1 previous major cardiac operation involving opening the pericardium
    previousCardiacSurgery: boolean
    activeEndocarditis: boolean
    LVfunctionOrLVEF: number
    recentMI: boolean
    // mmHg
    pulmonaryArterySystolicPressure: number
    urgency:
      | 'Elective: routine admission for operation'
      | 'Urgent: not electively admitted for operation but require surgery on current admission for medical reasons and cannot be discharged without definitive procedure'
      | 'Emergency: operation before the beginning of the next working day after the decision to operate'
      | 'Salvage: patients requiring CPR (external) en route to the OR or before induction of anesthesia (excludes CPR after induction of anesthesia)'
    weightOfProcedure:
      | 'Isolated CABG'
      | 'Isolated non-CABG major procedure (e.g. single valve procedure, replacement of ascending aorta, correction of septal defect, etc)'
      | '2 major procedures (e.g. CABG and AVR), or CABG and mitral valve repair (MVR), or AVR and replacement of ascending aorta, or CABG and maze procedure, or AVR and MVR, etc'
      | '≥3 major procedures (e.g. AVR, MVR, and CABG, or MVR, CABG, and tricuspid annuloplasty, etc), or aortic root replacement when it includes AVR or repair, coronary reimplantation, and root and ascending replacement'

    thoracicAortaSurgery: boolean
  }
}

export interface Formula_EuroSCORE_II_return_interface extends returnInterface {
  score: number
}

export const Formula_EuroSCORE_II = ({
  params: {
    activeEndocarditis,
    CCSclass4,
    chronicPulmonaryDysfunction,
    criticalPreopState,
    extraCardiacArteriopathy,
    insulinDependentDiabetesMellitus,
    LVfunctionOrLVEF,
    NYHAClass,
    neurologicalOrMusculoskeletalDysfunctionSeverelyAffectingMobility,
    onDialysis,
    previousCardiacSurgery,
    pulmonaryArterySystolicPressure,
    recentMI,
    thoracicAortaSurgery,
    urgency,
    weightOfProcedure,
    age,
    creatinine,
    height,
    sex,
    weight,
  },
}: Formula_EuroSCORE_II_interface): Formula_EuroSCORE_II_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/10179/european-system-cardiac-operative-risk-evaluation-euroscore-ii'

  const ageScore = (age <= 60 ? 1 : age - 59) * 0.0285181
  const sexScore = sex === 'Female' ? 0.2196434 : 0
  const insulinDependentDiabetesMellitusScore =
    +insulinDependentDiabetesMellitus * 0.3542749
  const chronicPulmonaryDysfunctionScore =
    +chronicPulmonaryDysfunction * 0.1886564
  const neurologicalOrMusculoskeletalDysfunctionSeverelyAffectingMobilityScore =
    +neurologicalOrMusculoskeletalDysfunctionSeverelyAffectingMobility *
    0.2407181
  const { Cockcroft_Gault_CrCl } =
    Formula_Creatinine_Clearance_Cockcroft_Gault_Equation({
      formula: 'Creatinine_Clearance_Cockcroft_Gault_Equation',
      params: { age, creatinine, height, sex, weight },
    })
  const Cockcroft_Gault_CrClScore =
    Cockcroft_Gault_CrCl > 85
      ? 0
      : Cockcroft_Gault_CrCl >= 51
      ? 0.303553
      : 0.8592256
  const creatClearanceScore = onDialysis ? 0.6421508 : Cockcroft_Gault_CrClScore

  const criticalPreopStateScore = +criticalPreopState * 1.086517

  const NYHAClassScore =
    NYHAClass === 'Class I: no symptoms on moderate exertion'
      ? 0
      : NYHAClass === 'Class II: symptoms on moderate exertion'
      ? 0.1070545
      : NYHAClass === 'Class III: symptoms on light exertion'
      ? 0.2958358
      : 0.5597929

  const CCSclass4Score = +CCSclass4 * 0.2226147

  const extraCardiacArteriopathyScore = +extraCardiacArteriopathy * 0.5360268
  const previousCardiacSurgeryScore = +previousCardiacSurgery * 1.118599
  const activeEndocarditisScore = +activeEndocarditis * 0.6194522
  const LVfunctionOrLVEFScore =
    LVfunctionOrLVEF >= 51
      ? 0
      : LVfunctionOrLVEF >= 31
      ? 0.3150652
      : LVfunctionOrLVEF >= 21
      ? 0.8084096
      : 0.9346919
  const recentMIScore = +recentMI * 0.1528943
  const pulmonaryArterySystolicPressureScore =
    pulmonaryArterySystolicPressure >= 55
      ? 0.3491475
      : pulmonaryArterySystolicPressure >= 31
      ? 0.1788899
      : 0

  const urgencyScore =
    urgency ===
    'Salvage: patients requiring CPR (external) en route to the OR or before induction of anesthesia (excludes CPR after induction of anesthesia)'
      ? 1.362947
      : urgency ===
        'Emergency: operation before the beginning of the next working day after the decision to operate'
      ? 0.7039121
      : urgency ===
        'Urgent: not electively admitted for operation but require surgery on current admission for medical reasons and cannot be discharged without definitive procedure'
      ? 0.3174673
      : 0

  const weightOfProcedureScore =
    weightOfProcedure ===
    '≥3 major procedures (e.g. AVR, MVR, and CABG, or MVR, CABG, and tricuspid annuloplasty, etc), or aortic root replacement when it includes AVR or repair, coronary reimplantation, and root and ascending replacement'
      ? 0.9724533
      : weightOfProcedure ===
        '2 major procedures (e.g. CABG and AVR), or CABG and mitral valve repair (MVR), or AVR and replacement of ascending aorta, or CABG and maze procedure, or AVR and MVR, etc'
      ? 0.5521478
      : weightOfProcedure ===
        'Isolated non-CABG major procedure (e.g. single valve procedure, replacement of ascending aorta, correction of septal defect, etc)'
      ? 0.0062118
      : 0

  const thoracicAortaSurgeryScore = +thoracicAortaSurgery * 0.6527205

  const y =
    -5.324537 +
    ageScore +
    sexScore +
    insulinDependentDiabetesMellitusScore +
    chronicPulmonaryDysfunctionScore +
    neurologicalOrMusculoskeletalDysfunctionSeverelyAffectingMobilityScore +
    creatClearanceScore +
    criticalPreopStateScore +
    NYHAClassScore +
    CCSclass4Score +
    extraCardiacArteriopathyScore +
    previousCardiacSurgeryScore +
    activeEndocarditisScore +
    LVfunctionOrLVEFScore +
    recentMIScore +
    pulmonaryArterySystolicPressureScore +
    urgencyScore +
    weightOfProcedureScore +
    thoracicAortaSurgeryScore

  const score = +((Math.exp(y) / (1 + Math.exp(y))) * 100).toFixed(2)

  return {
    link,
    score,
  }
}
