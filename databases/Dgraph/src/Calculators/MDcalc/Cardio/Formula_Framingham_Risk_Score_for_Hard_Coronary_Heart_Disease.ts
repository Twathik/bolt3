import { returnInterface, sex } from '../CommonInterface'

export interface Formula_Framingham_Risk_Score_for_Hard_Coronary_Heart_Disease_interface {
  formula: 'Framingham_Risk_Score_for_Hard_Coronary_Heart_Disease'
  params: {
    age: number
    sex: sex
    smoker: boolean
    // mg/dl
    totalCholesterol: number
    // mg/dl
    HDLcholesterol: number
    sBP: number
    bloodPressureBeingTreatedWithMedicines: boolean
  }
}

export interface Formula_Framingham_Risk_Score_for_Hard_Coronary_Heart_Disease_return_interface
  extends returnInterface {
  score: number
  interpretation: 'not applicable' | 'low' | 'moderate' | 'high'
  referenceRisk: {
    Average10yearsHardCHDRisk: string
    average10yearsLowCHDRisk: string
  }
}

interface riskInterface {
  sex: sex
  risk: {
    age: {
      min: number
      max: number
    }
    Average10yearsHardCHDRisk: string
    average10yearsLowCHDRisk: string
  }[]
}

const riskScores: riskInterface[] = [
  {
    sex: 'Female',
    risk: [
      {
        age: {
          min: 30,
          max: 34,
        },
        Average10yearsHardCHDRisk: '<1%',
        average10yearsLowCHDRisk: '<1%',
      },
      {
        age: {
          min: 35,
          max: 39,
        },
        Average10yearsHardCHDRisk: '<1%',
        average10yearsLowCHDRisk: '1%',
      },
      {
        age: {
          min: 40,
          max: 44,
        },
        Average10yearsHardCHDRisk: '1%',
        average10yearsLowCHDRisk: '	2%',
      },
      {
        age: {
          min: 45,
          max: 49,
        },
        Average10yearsHardCHDRisk: '2%',
        average10yearsLowCHDRisk: '	3%',
      },
      {
        age: {
          min: 50,
          max: 54,
        },
        Average10yearsHardCHDRisk: '3%',
        average10yearsLowCHDRisk: '5%',
      },
      {
        age: {
          min: 55,
          max: 59,
        },
        Average10yearsHardCHDRisk: '7%',
        average10yearsLowCHDRisk: '7%',
      },
      {
        age: {
          min: 60,
          max: 64,
        },
        Average10yearsHardCHDRisk: '8%',
        average10yearsLowCHDRisk: '8%',
      },
      {
        age: {
          min: 65,
          max: 69,
        },
        Average10yearsHardCHDRisk: '8%',
        average10yearsLowCHDRisk: '8%',
      },
      {
        age: {
          min: 70,
          max: 74,
        },
        Average10yearsHardCHDRisk: '11%',
        average10yearsLowCHDRisk: '8%',
      },
      {
        age: {
          min: 74,
          max: 79,
        },
        Average10yearsHardCHDRisk: 'Data not available',
        average10yearsLowCHDRisk: 'Data not available',
      },
    ],
  },
  {
    sex: 'Male',
    risk: [
      {
        age: {
          min: 30,
          max: 34,
        },
        Average10yearsHardCHDRisk: '1%',
        average10yearsLowCHDRisk: '2%',
      },
      {
        age: {
          min: 35,
          max: 39,
        },
        Average10yearsHardCHDRisk: '4%',
        average10yearsLowCHDRisk: '3%',
      },
      {
        age: {
          min: 40,
          max: 44,
        },
        Average10yearsHardCHDRisk: '4%',
        average10yearsLowCHDRisk: '4%',
      },
      {
        age: {
          min: 45,
          max: 49,
        },
        Average10yearsHardCHDRisk: '8%',
        average10yearsLowCHDRisk: '4%',
      },
      {
        age: {
          min: 50,
          max: 54,
        },
        Average10yearsHardCHDRisk: '10%',
        average10yearsLowCHDRisk: '6%',
      },
      {
        age: {
          min: 55,
          max: 59,
        },
        Average10yearsHardCHDRisk: '13%',
        average10yearsLowCHDRisk: '7%',
      },
      {
        age: {
          min: 60,
          max: 64,
        },
        Average10yearsHardCHDRisk: '20%',
        average10yearsLowCHDRisk: '9%',
      },
      {
        age: {
          min: 65,
          max: 69,
        },
        Average10yearsHardCHDRisk: '22%',
        average10yearsLowCHDRisk: '11%',
      },
      {
        age: {
          min: 70,
          max: 74,
        },
        Average10yearsHardCHDRisk: '25%',
        average10yearsLowCHDRisk: '14%',
      },
      {
        age: {
          min: 74,
          max: 79,
        },
        Average10yearsHardCHDRisk: 'Data not available',
        average10yearsLowCHDRisk: 'Data not available',
      },
    ],
  },
]

export const Formula_Framingham_Risk_Score_for_Hard_Coronary_Heart_Disease = ({
  params: {
    HDLcholesterol,
    age,
    bloodPressureBeingTreatedWithMedicines,
    sBP,
    sex,
    smoker,
    totalCholesterol,
  },
}: Formula_Framingham_Risk_Score_for_Hard_Coronary_Heart_Disease_interface): Formula_Framingham_Risk_Score_for_Hard_Coronary_Heart_Disease_return_interface => {
  const link =
    'https://www.mdcalc.com/calc/38/framingham-risk-score-hard-coronary-heart-disease'
  if (age > 79)
    return {
      link,
      score: 0,
      interpretation: 'not applicable',
      referenceRisk: {
        Average10yearsHardCHDRisk: 'Data not available',
        average10yearsLowCHDRisk: 'Data not available',
      },
    }

  const L =
    sex === 'Male'
      ? 52.00961 * Math.log(age) +
        20.014077 * Math.log(totalCholesterol) +
        -0.905964 * Math.log(HDLcholesterol) +
        1.305784 * Math.log(sBP) +
        0.241549 * +bloodPressureBeingTreatedWithMedicines +
        12.096316 * +smoker +
        -4.605038 * Math.log(age) * Math.log(totalCholesterol) +
        -2.84367 * Math.log(age > 70 ? 70 : age) * +smoker +
        -2.93323 * Math.log(age) * Math.log(age) -
        172.300168
      : 31.764001 * Math.log(age) +
        22.465206 * Math.log(totalCholesterol) +
        -1.187731 * Math.log(HDLcholesterol) +
        2.552905 * Math.log(sBP) +
        0.420251 * +bloodPressureBeingTreatedWithMedicines +
        13.07543 * +smoker +
        -5.060998 * Math.log(age) * Math.log(totalCholesterol) +
        -2.996945 * Math.log(age > 78 ? 78 : age) * +smoker -
        146.5933061

  const score = +(
    (sex === 'Male'
      ? 1 - Math.pow(0.9402, Math.exp(L))
      : 1 - Math.pow(0.98767, Math.exp(L))) * 100
  ).toFixed(1)
  const referenceRisk = riskScores
    .find((e) => e.sex === sex)!
    .risk.find((e) => e.age.min <= age && e.age.max >= age)!

  const interpretation: Formula_Framingham_Risk_Score_for_Hard_Coronary_Heart_Disease_return_interface['interpretation'] =
    score >= 20 ? 'high' : score >= 10 ? 'moderate' : 'low'
  return {
    link,
    score,
    interpretation,
    referenceRisk: {
      Average10yearsHardCHDRisk: referenceRisk.Average10yearsHardCHDRisk,
      average10yearsLowCHDRisk: referenceRisk.average10yearsLowCHDRisk,
    },
  }
}
