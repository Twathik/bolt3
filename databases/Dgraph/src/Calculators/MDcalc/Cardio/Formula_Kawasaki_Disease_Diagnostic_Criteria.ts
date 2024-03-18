import { returnInterface } from '../CommonInterface'

export interface Formula_Kawasaki_Disease_Diagnostic_Criteria_interface {
  formula: 'Kawasaki_Disease_Diagnostic_Criteria'
  params: {
    feverForMorOrEqual5Days: boolean
    // Erythema of palms and soles, or edema of hands and feet
    acuteChangeInExtremities: boolean
    // Periungual peeling of fingers and toes in weeks 2 and 3
    subacuteChangeInExtremities: boolean
    polymorphousExanthem: boolean
    bilateralBulbarConjunctivalInjectionWithoutExudate: boolean
    // Erythema, lips cracking, strawberry tongue, diffuse injection of oral/pharyngeal mucosae
    changesInLipsAndOralCavity: boolean
    // >1.5 cm diameter, usually unilateral
    cervicalLymphadenopathy: boolean
    coronaryArteryDiseaseDetectedBy2DEchoOrCoronaryAngiogram: boolean
  }
}

export interface Formula_Kawasaki_Disease_Diagnostic_Criteria_return_interface
  extends returnInterface {
  interpretation:
    | 'Positive for Kawasaki Disease'
    | 'Negative for Kawasaki Disease'
}

export const Formula_Kawasaki_Disease_Diagnostic_Criteria = ({
  params: {
    acuteChangeInExtremities,
    bilateralBulbarConjunctivalInjectionWithoutExudate,
    cervicalLymphadenopathy,
    changesInLipsAndOralCavity,
    feverForMorOrEqual5Days,
    polymorphousExanthem,
    subacuteChangeInExtremities,
    coronaryArteryDiseaseDetectedBy2DEchoOrCoronaryAngiogram,
  },
}: Formula_Kawasaki_Disease_Diagnostic_Criteria_interface): Formula_Kawasaki_Disease_Diagnostic_Criteria_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/3819/kawasaki-disease-diagnostic-criteria'
  const principalFeaturesScore =
    +acuteChangeInExtremities +
    +subacuteChangeInExtremities +
    +polymorphousExanthem +
    +bilateralBulbarConjunctivalInjectionWithoutExudate +
    +changesInLipsAndOralCavity +
    +cervicalLymphadenopathy

  const interpretation: Formula_Kawasaki_Disease_Diagnostic_Criteria_return_interface['interpretation'] =
    (feverForMorOrEqual5Days && principalFeaturesScore >= 4) ||
    (feverForMorOrEqual5Days &&
      principalFeaturesScore < 4 &&
      coronaryArteryDiseaseDetectedBy2DEchoOrCoronaryAngiogram)
      ? 'Positive for Kawasaki Disease'
      : 'Negative for Kawasaki Disease'

  return {
    link,
    interpretation,
  }
}
