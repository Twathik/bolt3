import { returnInterface } from '../CommonInterface'

export interface Formula_Corrected_QT_Interval_interface {
  formula: 'Corrected_QT_Interval'
  params: {
    formula: 'Bazett' | 'Fridericia' | 'Framingham' | 'Hodges' | 'Rautaharju'
    heartRate: number
    paperSpeed?: 25 | 50
    QTintervalInSmallBoxes: number
  }
}

export interface Formula_Corrected_QT_Interval_return_interface
  extends returnInterface {
  QTc: number
}

export const Formula_Corrected_QT_Interval = ({
  params: { QTintervalInSmallBoxes, formula, heartRate, paperSpeed = 25 },
}: Formula_Corrected_QT_Interval_interface): Formula_Corrected_QT_Interval_return_interface => {
  const link = 'https://www.mdcalc.com/calc/48/corrected-qt-interval-qtc'

  const RRinterval = 60 / heartRate
  const QtInterval = (QTintervalInSmallBoxes * 40) / (paperSpeed === 50 ? 2 : 1)

  let QTc: number = 0
  switch (formula) {
    case 'Bazett':
      QTc = +(QtInterval / Math.sqrt(RRinterval)).toFixed(0)
      break
    case 'Fridericia':
      QTc = +(QtInterval / Math.pow(RRinterval, 1 / 3)).toFixed(0)
      break
    case 'Framingham':
      QTc = +(QtInterval + 154 * (1 - RRinterval)).toFixed(0)
      break
    case 'Hodges':
      QTc = +(QtInterval + 1.75 * (60 / RRinterval - 60)).toFixed(0)
      break
    case 'Rautaharju':
      QTc = +((QtInterval * (120 + heartRate)) / 180).toFixed(0)
      break

    default:
      break
  }
  return {
    link,
    QTc,
  }
}
