import { WorkListInterface } from './WorklistInterface'

export const ModalityEmulatorTemplate = ({
  AccessionNumber,
  ReferringPhysiciansName,
  PatientsName,
  PatientsBirthDate,
  PatientsSex,
  OtherPatientIDs,
  PatientsSizeInMeters,
  PatientsWeightInKg,
  MedicalAlerts,
  Allergies,
  EthnicGroup,
  AdditionalPatientHistory,
  PregnancyStatus,
  PatientComments,
  StudyInstanceUID,
  RequestingPhysician,
  RequestedProcedureDescription,
  CurrentPatientLocation,
  ScheduledProcedureStepSequence: { Modality, ScheduledStationAETitle },
}: WorkListInterface) => `
  (0008,0050)  [${AccessionNumber}]
  (0008,0090)  [${ReferringPhysiciansName}]
  (0010,0010)  [${PatientsName}] 
  (0010,0020)  [${PatientsBirthDate}] 
  (0010,0030)  [${PatientsBirthDate}] 
  (0010,0040)  [${PatientsSex}]
  (0010,1000)  [${OtherPatientIDs ?? ''}]
  (0010,1020)  [${PatientsSizeInMeters ?? ''}]
  (0010,1030)  [${PatientsWeightInKg ?? ''}]
  (0010,2000)  [${MedicalAlerts ?? ''}]
  (0010,2110)  [${Allergies ?? ''}] 
  (0010,2160)  [${EthnicGroup ?? ''}]
  (0010,21b0)  [${AdditionalPatientHistory ?? ''}]
  (0010,21c0)  [${PregnancyStatus ?? ''}]
  (0010,4000)  [${PatientComments ?? ''}]
  (0020,000d)  [${StudyInstanceUID ?? ''}]
  (0032,1032)  [${RequestingPhysician ?? ''}]
  (0032,1033)  [${RequestedProcedureDescription ?? ''}]
  (0032,1060)  [${RequestedProcedureDescription ?? ''}]
  (0038,0300)  [${CurrentPatientLocation ?? ''}] 

  (0040,0100) (Sequence with explicit length #=1) 
        (fffe,e000) na (Item with explicit length #=12)  
            (0008,0060) [${Modality}]
            (0040,0001) : [${ScheduledStationAETitle}]
            (0040,0002) : '20240408',
            (0040,0003) : '',
            (0040,0004) : '',
            (0040,0005) : '',
            (0040,0006) : '',
            (0040,0007) : '',
            (0040,0008) (Sequence with explicit length #=1)   
                    (fffe,e000) na (Item with explicit length #=12)  
                        (0008,0100): '',
                        (0008,0102): '',
                        (0008,0103): '',
                        (0008,0104): '',
                    (fffe,e00d) na (ItemDelimitationItem for re-encoding)
                (fffe,e0dd) na (SequenceDelimitationItem for re-encod.)
            (0040,0009): '',
            (0040,0010): '',
            (0040,0011): '',
            (0040,0012): '',
            (0040,0020): '',
            (0040,0400): '',
        (fffe,e00d) na (ItemDelimitationItem for re-encoding)
    (fffe,e0dd) na (SequenceDelimitationItem for re-encod.)
  (0040,1001): '',
  (0040,1003): '',
  (0040,1004): '',
  (0040,1010): '',
  (0040,1400): '',
  (0040,2400): '',
  (0040,3001): '',
`

/*   (0032,1064) 
    (0040,0100) (Sequence with explicit length #=1)      
        (fffe,e000) na (Item with explicit length #=12)  
            (0008,0100): '',
            (0008,0102): '',
            (0008,0103): '',
            (0008,0104): '',
        (fffe,e00d) na (ItemDelimitationItem for re-encoding)
    (fffe,e0dd) na (SequenceDelimitationItem for re-encod.) */
