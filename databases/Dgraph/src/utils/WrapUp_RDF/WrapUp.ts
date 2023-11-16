import { GenerateAlgerianNomRDF } from './GenerateAlgerianNomRDF'
import { GenerateBFdrugsRDF } from './GenerateBFdrugsRDF'
import { GenerateDrugWithPregnancyRDF } from './GenerateDrugWithPregnancyRDF'
import { GenerateFinalRDFFile } from './GenerateFinalRDFFile'
import { GenerateKidneyDrugs } from './GenerateKidneyDrugs'
import { GenerateRxClassEdges } from './GenerateRxClassEdges'
import { GenerateRxClassesAndConcepts } from './GenerateRxClassesAndConcepts'
import { GenerateRxConceptEdges } from './GenerateRxConceptEdges'
import { GenerateRxConceptInteractions } from './GenerateRxConceptInteractions'
import { GenerateRxConceptToDrugBankEdge } from './GenerateRxConceptToDrugBankEdge'
import { GenerateRxConceptToRxClassEdge } from './GenerateRxConceptToRxClassEdge'
import { UploadANSMInteractions } from './UploadANSMinteractions'

export const WrapUp = async () => {
  console.time('processTimer')
  /* GenerateRxClassesAndConcepts()
  GenerateRxConceptEdges()
  GenerateRxClassEdges()
  GenerateRxConceptToRxClassEdge()
  GenerateRxConceptInteractions()
  GenerateRxConceptToDrugBankEdge() */
  // GenerateBFdrugsRDF()
  // GenerateDrugWithPregnancyRDF()
  // GenerateKidneyDrugs()
  // UploadANSMInteractions()
  GenerateAlgerianNomRDF()
  GenerateFinalRDFFile()
  console.timeEnd('processTimer')
}
