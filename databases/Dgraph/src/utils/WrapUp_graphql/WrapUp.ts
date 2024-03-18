import { UploadANSMInteractions } from './UploadANSMinteractions'
import { UploadBFDrugsInteractions } from './UploadBFDrugsInteractions'
import { UploadG6PDinteractions } from './UploadG6PDinteractions'
import { UploadPregnancyAndDrugsInteractions } from './UploadPregnancyAndDrugsInteractions'
import { UploadRxNavDrugs } from './UploadRxNavDrugs'
import { UploadRxNavInteractions } from './UploadRxNavInteractions'

export const WrapUp = async () => {
  console.time('processTimer')
  //await UploadRxNavDrugs()
  // await UploadRxNavInteractions()
  // await UploadBFDrugsInteractions()
  // await UploadPregnancyAndDrugsInteractions()
  //  await UploadG6PDinteractions()
  await UploadANSMInteractions()
  console.timeEnd('processTimer')
}
