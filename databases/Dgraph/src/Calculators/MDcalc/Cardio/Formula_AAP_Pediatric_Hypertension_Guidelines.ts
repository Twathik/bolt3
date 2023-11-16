import { returnInterface, sex } from '../CommonInterface'

interface percentilesInterface {
  sex: sex
  limits: {
    age: number
    pression: {
      systolic: { normal: number; elevated: number; HTN1: number }
      diastolic: {
        normal: number
        elevated: number
        HTN1: number
      }
    }
  }[]
}

const percentiles: percentilesInterface[] = [
  {
    sex: 'Male',
    limits: [
      {
        age: 1,
        pression: {
          systolic: {
            normal: 105,
            elevated: 108,
            HTN1: 121,
          },
          diastolic: {
            normal: 57,
            elevated: 60,
            HTN1: 73,
          },
        },
      },
      {
        age: 2,
        pression: {
          systolic: {
            normal: 104,
            elevated: 108,
            HTN1: 121,
          },
          diastolic: {
            normal: 58,
            elevated: 61,
            HTN1: 74,
          },
        },
      },
      {
        age: 3,
        pression: {
          systolic: {
            normal: 103,
            elevated: 107,
            HTN1: 120,
          },
          diastolic: {
            normal: 59,
            elevated: 62,
            HTN1: 75,
          },
        },
      },
      {
        age: 4,
        pression: {
          systolic: {
            normal: 99,
            elevated: 104,
            HTN1: 117,
          },
          diastolic: {
            normal: 59,
            elevated: 60,
            HTN1: 73,
          },
        },
      },
      {
        age: 5,
        pression: {
          systolic: {
            normal: 98,
            elevated: 104,
            HTN1: 117,
          },
          diastolic: {
            normal: 59,
            elevated: 61,
            HTN1: 74,
          },
        },
      },
      {
        age: 6,
        pression: {
          systolic: {
            normal: 98,
            elevated: 103,
            HTN1: 116,
          },
          diastolic: {
            normal: 61,
            elevated: 62,
            HTN1: 75,
          },
        },
      },
      {
        age: 7,
        pression: {
          systolic: {
            normal: 97,
            elevated: 103,
            HTN1: 116,
          },
          diastolic: {
            normal: 61,
            elevated: 63,
            HTN1: 76,
          },
        },
      },
      {
        age: 8,
        pression: {
          systolic: {
            normal: 97,
            elevated: 103,
            HTN1: 116,
          },
          diastolic: {
            normal: 61,
            elevated: 62,
            HTN1: 74,
          },
        },
      },
      {
        age: 9,
        pression: {
          systolic: {
            normal: 96,
            elevated: 104,
            HTN1: 117,
          },
          diastolic: {
            normal: 60,
            elevated: 61,
            HTN1: 74,
          },
        },
      },
      {
        age: 10,
        pression: {
          systolic: {
            normal: 95,
            elevated: 105,
            HTN1: 118,
          },
          diastolic: {
            normal: 59,
            elevated: 60,
            HTN1: 73,
          },
        },
      },
      {
        age: 11,
        pression: {
          systolic: {
            normal: 96,
            elevated: 106,
            HTN1: 119,
          },
          diastolic: {
            normal: 62,
            elevated: 63,
            HTN1: 76,
          },
        },
      },
      {
        age: 12,
        pression: {
          systolic: {
            normal: 98,
            elevated: 108,
            HTN1: 121,
          },
          diastolic: {
            normal: 65,
            elevated: 65,
            HTN1: 78,
          },
        },
      },
      {
        age: 13,
        pression: {
          systolic: {
            normal: 120,
            elevated: 129,
            HTN1: 139,
          },
          diastolic: {
            normal: 79,
            elevated: 79,
            HTN1: 89,
          },
        },
      },
    ],
  },
  {
    sex: 'Female',
    limits: [
      {
        age: 1,
        pression: {
          systolic: {
            normal: 104,
            elevated: 106,
            HTN1: 119,
          },
          diastolic: {
            normal: 60,
            elevated: 63,
            HTN1: 76,
          },
        },
      },
      {
        age: 2,
        pression: {
          systolic: {
            normal: 102,
            elevated: 106,
            HTN1: 119,
          },
          diastolic: {
            normal: 60,
            elevated: 63,
            HTN1: 76,
          },
        },
      },
      {
        age: 3,
        pression: {
          systolic: {
            normal: 101,
            elevated: 105,
            HTN1: 118,
          },
          diastolic: {
            normal: 59,
            elevated: 63,
            HTN1: 76,
          },
        },
      },
      {
        age: 4,
        pression: {
          systolic: {
            normal: 100,
            elevated: 105,
            HTN1: 118,
          },
          diastolic: {
            normal: 60,
            elevated: 64,
            HTN1: 77,
          },
        },
      },
      {
        age: 5,
        pression: {
          systolic: {
            normal: 99,
            elevated: 104,
            HTN1: 117,
          },
          diastolic: {
            normal: 59,
            elevated: 65,
            HTN1: 77,
          },
        },
      },
      {
        age: 6,
        pression: {
          systolic: {
            normal: 98,
            elevated: 104,
            HTN1: 117,
          },
          diastolic: {
            normal: 59,
            elevated: 64,
            HTN1: 77,
          },
        },
      },
      {
        age: 7,
        pression: {
          systolic: {
            normal: 97,
            elevated: 104,
            HTN1: 117,
          },
          diastolic: {
            normal: 59,
            elevated: 64,
            HTN1: 77,
          },
        },
      },
      {
        age: 8,
        pression: {
          systolic: {
            normal: 97,
            elevated: 104,
            HTN1: 117,
          },
          diastolic: {
            normal: 59,
            elevated: 64,
            HTN1: 77,
          },
        },
      },
      {
        age: 9,
        pression: {
          systolic: {
            normal: 97,
            elevated: 105,
            HTN1: 118,
          },
          diastolic: {
            normal: 59,
            elevated: 64,
            HTN1: 77,
          },
        },
      },
      {
        age: 10,
        pression: {
          systolic: {
            normal: 99,
            elevated: 108,
            HTN1: 121,
          },
          diastolic: {
            normal: 60,
            elevated: 65,
            HTN1: 78,
          },
        },
      },
      {
        age: 11,
        pression: {
          systolic: {
            normal: 100,
            elevated: 110,
            HTN1: 123,
          },
          diastolic: {
            normal: 60,
            elevated: 65,
            HTN1: 78,
          },
        },
      },
      {
        age: 12,
        pression: {
          systolic: {
            normal: 102,
            elevated: 113,
            HTN1: 126,
          },
          diastolic: {
            normal: 61,
            elevated: 66,
            HTN1: 79,
          },
        },
      },
      {
        age: 13,
        pression: {
          systolic: {
            normal: 119,
            elevated: 129,
            HTN1: 139,
          },
          diastolic: {
            normal: 79,
            elevated: 79,
            HTN1: 89,
          },
        },
      },
    ],
  },
]

export interface Formula_AAP_Pediatric_Hypertension_Guidelines_interface {
  formula: 'AAP_Pediatric_Hypertension_Guidelines'
  // Use in children aged 1-17 years. Not for use in patients with low blood pressure. Recommendations are based on AAP's 2017 Clinical Practice Guideline (Table 3). Note that cutoffs reported in the calculator may vary slightly from the published tables, as the calculator accommodates for ages between whole numbers (e.g. 5.5 years), and the tables use simplified values to account for ages between whole numbers. For children ≥13 years of age, this calculator has been adjusted to meet definitions presented in the 2017 AHA/ACC hypertension guidelines for adults.
  params: {
    // Decimal values recommended (e.g. for a child who is 5 years and 6 months, enter 5.5)
    age: number
    sex: sex
    height: number
    // Normal values are age-dependent; do not use this calculator in patients with hypotension
    systolicBp: number
    // Normal values are age-dependent; do not use this calculator in patients with hypotension
    diastolicBp: number
  }
}

export interface Formula_AAP_Pediatric_Hypertension_Guidelines_return_interface
  extends returnInterface {
  interpretation:
    | 'Normal BP'
    | 'Elevated BP'
    | 'Stage 1 HTN'
    | 'Stage 2 HTN'
    | 'not applicable'
}

type HTNlevel = 0 | 1 | 2 | 3

export const Formula_AAP_Pediatric_Hypertension_Guidelines = ({
  params: { age, diastolicBp, sex, systolicBp },
}: Formula_AAP_Pediatric_Hypertension_Guidelines_interface): Formula_AAP_Pediatric_Hypertension_Guidelines_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/4052/aap-pediatric-hypertension-guidelines#evidence'
  if (age > 17) return { link, interpretation: 'not applicable' }

  const percentile = percentiles
    .filter((e) => e.sex === sex)[0]
    .limits.find((e) => (age <= 12 ? e.age === age : e.age === 13))
  console.dir({ percentile }, { depth: 5 })

  const estimatedSystolicLevel = percentile!.pression.systolic
  const estimatedDiastolicLevel = percentile!.pression.diastolic

  const systolicLevel: HTNlevel =
    systolicBp > estimatedSystolicLevel.HTN1
      ? 3
      : systolicBp <= estimatedSystolicLevel.normal
      ? 0
      : systolicBp <= estimatedSystolicLevel.elevated
      ? 1
      : 2
  const diastolicLevel: HTNlevel =
    diastolicBp > estimatedDiastolicLevel.HTN1
      ? 3
      : diastolicBp <= estimatedDiastolicLevel.normal
      ? 0
      : diastolicBp <= estimatedDiastolicLevel.elevated
      ? 1
      : 2
  const pressionLevel: HTNlevel = [systolicLevel, diastolicLevel].sort()[1]

  switch (pressionLevel) {
    case 0:
      return {
        link,
        interpretation: 'Normal BP',
      }
    case 1:
      return {
        link,
        interpretation: 'Elevated BP',
      }
    case 2:
      return {
        link,
        interpretation: 'Stage 1 HTN',
      }
    case 3:
      return {
        link,
        interpretation: 'Stage 2 HTN',
      }

    default:
      return {
        link,
        interpretation: 'not applicable',
      }
  }
}
