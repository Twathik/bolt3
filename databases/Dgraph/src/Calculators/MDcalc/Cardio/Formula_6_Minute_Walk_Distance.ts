import { returnInterface, sex } from '../CommonInterface'

export interface Formula_6_Minute_Walk_Distance_interface {
  formula: '6_Minute_Walk_Distance'
  params: {
    sex: sex
    // cm
    height: number
    age: number
    // kg
    weight: number
    // meter
    distanceWalked: number
  }
}

export interface Formula_6_Minute_Walk_Distance_return_interface
  extends returnInterface {
  SixMWDInMeters: number
  SixMWDInMetersLowerLimit: number
  SixMWDInMetersPourcentage: number
}

export const Formula_6_Minute_Walk_Distance = ({
  params: { age, distanceWalked, height, sex, weight },
}: Formula_6_Minute_Walk_Distance_interface): Formula_6_Minute_Walk_Distance_return_interface => {
  const SixMWDInMeters =
    sex === 'Male'
      ? 7.57 * height - 5.02 * age - 1.76 * weight - 309
      : 2.11 * height - 2.29 * weight - 5.78 * age + 667
  const SixMWDInMetersLowerLimit =
    sex === 'Male' ? SixMWDInMeters - 153 : SixMWDInMeters - 139

  const SixMWDInMetersPourcentage = +(
    (distanceWalked * 100) /
    SixMWDInMeters
  ).toFixed(2)

  return {
    link: 'https://www.mdcalc.com/calc/3983/6-minute-walk-distance',
    SixMWDInMeters,
    SixMWDInMetersLowerLimit,
    SixMWDInMetersPourcentage,
  }
}
