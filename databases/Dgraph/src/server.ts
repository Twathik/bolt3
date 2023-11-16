import { addRxNavManually, getDCIWithRx } from './utils/Drugs/AddRxNavMannually'

const main = async () => {
  // generateJSON_CIM10_and_CHOP_suisse()
  // await generateDrugs()
  /* const test = Formula_APGAR_Score({
    formula: 'APGAR_Score',
    params: {
      activityMuscleTone: 'Limp',
      heartRate: 0,
      Grimace: 'None',
      appearanceColor: 'Blue/pale',
      respirations: 'Absent',
    },
  }) */
  // removeNonNecessaryCodes()
  //generateAbbreviations()
  //DedupeDrugs()
  // DedupeDrugPropreties()
  getDCIWithRx()

  // await WrapUp()
  console.log('all done !!')
}

main()

export {}
