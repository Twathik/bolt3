import { EventTypes } from '@prisma/client'
import { ModalityType, WorkListInterface } from './WorklistInterface'
import { writeFileSync } from 'fs'

type modalitiesType = {
  type: ModalityType
  description: string
  eventType: EventTypes | ''
}

export const modalitiesTypes: modalitiesType[] = [
  {
    type: 'AR',
    description: 'Autorefraction',
    eventType: '',
  },

  {
    type: 'ASMT',
    description: 'Content Assessment Results',
    eventType: '',
  },

  {
    type: 'AU',
    description: 'Audio',
    eventType: '',
  },

  {
    type: 'BDUS',
    description: 'Bone Densitometry (ultrasound)',
    eventType: '',
  },

  {
    type: 'BI',
    description: 'Biomagnetic imaging',
    eventType: '',
  },

  {
    type: 'BMD',
    description: 'Bone Densitometry (X-Ray)',
    eventType: '',
  },

  {
    type: 'CR',
    description: 'Computed Radiography',
    eventType: '',
  },

  {
    type: 'CT',
    description: 'Computed Tomography',
    eventType: '',
  },
  {
    type: 'CTPROTOCOL',
    description: 'CT Protocol (Performed)',
    eventType: '',
  },

  {
    type: 'DG',
    description: 'Diaphanography',
    eventType: '',
  },

  {
    type: 'DOC',
    description: 'Document',
    eventType: '',
  },

  {
    type: 'DX',
    description: 'Digital Radiography',
    eventType: '',
  },

  {
    type: 'ECG',
    description: 'Electrocardiography',
    eventType: '',
  },

  {
    type: 'EPS',
    description: 'Cardiac Electrophysiology',
    eventType: '',
  },

  {
    type: 'ES',
    description: 'Endoscopy',
    eventType: '',
  },

  {
    type: 'FID',
    description: 'Fiducials',
    eventType: '',
  },

  {
    type: 'GM',
    description: 'General Microscopy',
    eventType: '',
  },

  {
    type: 'HC',
    description: 'Hard Copy',
    eventType: '',
  },

  {
    type: 'HD',
    description: 'Hemodynamic Waveform',
    eventType: '',
  },

  {
    type: 'IO',
    description: 'Intra-Oral Radiography',
    eventType: '',
  },

  {
    type: 'IOL',
    description: 'Intraocular Lens Data',
    eventType: '',
  },

  {
    type: 'IVOCT',
    description: 'Intravascular Optical Coherence Tomography',
    eventType: '',
  },

  {
    type: 'IVUS',
    description: 'Intravascular Ultrasound',
    eventType: '',
  },

  {
    type: 'KER',
    description: 'Keratometry',
    eventType: '',
  },

  {
    type: 'KO',
    description: 'Key Object Selection',
    eventType: '',
  },

  {
    type: 'LEN',
    description: 'Lensometry',
    eventType: '',
  },

  {
    type: 'LS',
    description: 'Laser surface scan',
    eventType: '',
  },

  {
    type: 'MG',
    description: 'Mammography',
    eventType: '',
  },

  {
    type: 'MR',
    description: 'Magnetic Resonance',
    eventType: '',
  },

  {
    type: 'M3D',
    description: 'Model for 3D Manufacturing',
    eventType: '',
  },

  {
    type: 'NM',
    description: 'Nuclear Medicine',
    eventType: '',
  },

  {
    type: 'OAM',
    description: 'Ophthalmic Axial Measurements',
    eventType: '',
  },

  {
    type: 'OCT',
    description: 'Optical Coherence Tomography (non-Ophthalmic)',
    eventType: '',
  },

  {
    type: 'OP',
    description: 'Ophthalmic Photography',
    eventType: '',
  },

  {
    type: 'OPM',
    description: 'Ophthalmic Mapping',
    eventType: '',
  },

  {
    type: 'OPT',
    description: 'Ophthalmic Tomography',
    eventType: '',
  },

  {
    type: 'OPTBSV',
    description: 'Ophthalmic Tomography B-scan Volume Analysis',
    eventType: '',
  },

  {
    type: 'OPTENF',
    description: 'Ophthalmic Tomography En Face',
    eventType: '',
  },

  {
    type: 'OPV',
    description: 'Ophthalmic Visual Field',
    eventType: '',
  },

  {
    type: 'OSS',
    description: 'Optical Surface Scan',
    eventType: '',
  },

  {
    type: 'OT',
    description: 'Other',
    eventType: '',
  },

  {
    type: 'PLAN',
    description: 'Plan',
    eventType: '',
  },

  {
    type: 'PR',
    description: 'Presentation State',
    eventType: '',
  },

  {
    type: 'PT',
    description: 'Positron emission tomography (PET)',
    eventType: '',
  },

  {
    type: 'PX',
    description: 'Panoramic X-Ray',
    eventType: '',
  },

  {
    type: 'REG',
    description: 'Registration',
    eventType: '',
  },

  {
    type: 'RESP',
    description: 'Respiratory Waveform',
    eventType: '',
  },

  {
    type: 'RF',
    description: 'Radio Fluoroscopy',
    eventType: '',
  },

  {
    type: 'RG',
    description: 'Radiographic imaging (conventional film/screen)',
    eventType: '',
  },

  {
    type: 'RTDOSE',
    description: 'Radiotherapy Dose',
    eventType: '',
  },

  {
    type: 'RTIMAGE',
    description: 'Radiotherapy Image',
    eventType: '',
  },

  {
    type: 'RTPLAN',
    description: 'Radiotherapy Plan',
    eventType: '',
  },

  {
    type: 'RTRECORD',
    description: 'RT Treatment Record',
    eventType: '',
  },

  {
    type: 'RTSTRUCT',
    description: 'Radiotherapy Structure Set',
    eventType: '',
  },

  {
    type: 'RWV',
    description: 'Real World Value Map',
    eventType: '',
  },

  {
    type: 'SEG',
    description: 'Segmentation',
    eventType: '',
  },

  {
    type: 'SM',
    description: 'Slide Microscopy',
    eventType: '',
  },

  {
    type: 'SMR',
    description: 'Stereometric Relationship',
    eventType: '',
  },

  {
    type: 'SR',
    description: 'SR Document',
    eventType: '',
  },

  {
    type: 'SRF',
    description: 'Subjective Refraction',
    eventType: '',
  },

  {
    type: 'STAIN',
    description: 'Automated Slide Stainer',
    eventType: '',
  },

  {
    type: 'TG',
    description: 'Thermography',
    eventType: '',
  },

  {
    type: 'US',
    description: 'Ultrasound',
    eventType: 'GENERAL_SONO',
  },

  {
    type: 'VA',
    description: 'Visual Acuity',
    eventType: '',
  },

  {
    type: 'XA',
    description: 'X-Ray Angiography',
    eventType: '',
  },

  {
    type: 'XC',
    description: 'External-camera Photography',
    eventType: '',
  },
]

export const generateWorkList = ({
  id,
  data,
}: {
  id: string
  data: WorkListInterface
}) => {
  const {
    AccessionNumber,
    AdditionalPatientHistory,
    AdmissionID,
    Allergies,
    CurrentPatientLocation,
    EthnicGroup,
    ImagingServiceRequestComments,
    MedicalAlerts,
    NamesOfIntendedRecipientsOfResults,
    PatientComments,
    PatientID,
    PatientsAddress,
    PatientsBirthDate,
    PatientsBirthTime,
    PatientsName,
    PatientsSex,
    OtherPatientIDs,
    PatientsSizeInMeters,
    PatientsWeightInKg,
    PregnancyStatus,
    ReferringPhysiciansName,
    RequestedProcedureComments,
    RequestedProcedureDescription,
    RequestedProcedureID,
    RequestingPhysician,
    RequestingService,
    ScheduledProcedureStepSequence: {
      Modality,
      ScheduledPerformingPhysiciansName,
      ScheduledProcedureStepDescription,
      ScheduledProcedureStepID,
      ScheduledProcedureStepLocation,
      ScheduledProcedureStepStartDate,
      ScheduledProcedureStepStartTime,
      ScheduledStationAETitle,
      ScheduledStationName,
    },
    StudyInstanceUID,
  } = data
  const template = `
(0008,0050) [${AccessionNumber}] 
(0008,0090) [${ReferringPhysiciansName}] 
(0010,0010) [${PatientsName}] 
(0010,0020) [${PatientID}] 
(0010,0030) [${PatientsBirthDate}] 
(0010,0032) [${PatientsBirthTime ?? ''}] 
(0010,0040) [${PatientsSex}] 
(0010,1000) [${OtherPatientIDs ?? ''}] 
(0010,1020) [${PatientsSizeInMeters ?? ''}] 
(0010,1030) [${PatientsWeightInKg ?? ''}] 
(0010,1040) [${PatientsAddress ?? ''}] 
(0010,2000) [${MedicalAlerts ?? ''}] 
(0010,2110) [${Allergies ?? ''}] 
(0010,2160) [${EthnicGroup ?? ''}] 
(0010,21b0) [${AdditionalPatientHistory ?? ''}] 
(0010,21c0) [${PregnancyStatus ?? ''}]
(0010,4000) [${PatientComments ?? ''}] 
(0020,000d) [${StudyInstanceUID ?? ''}] 
(0032,1032) [${RequestingPhysician ?? ''}] 
(0032,1033) [${RequestingService ?? ''}] 
(0032,1060) [${RequestedProcedureDescription ?? ''}] 
(0038,0010) [${AdmissionID ?? ''}] 
(0038,0300) [${CurrentPatientLocation ?? ''}] 
(0040,0100) (Sequence with explicit length #=1)      
  (fffe,e000) na (Item with explicit length #=12)   
                (0008,0060) [${Modality}] 
                (0040,0001) [${ScheduledStationAETitle}] 
                (0040,0002) [${ScheduledProcedureStepStartDate}]
                (0040,0003) [${ScheduledProcedureStepStartTime ?? ''}] 
                (0040,0006) [${ScheduledPerformingPhysiciansName ?? ''}] 
                (0040,0007) [${ScheduledProcedureStepDescription ?? ''}] 
                (0040,0009) [${ScheduledProcedureStepID ?? ''}] 
                (0040,0010) [${ScheduledStationName ?? ''}] 
                (0040,0011) [${ScheduledProcedureStepLocation ?? ''}]
        (fffe,e00d) na (ItemDelimitationItem for re-encoding)
(fffe,e0dd) na (SequenceDelimitationItem for re-encod.)
(0040,1001) [${RequestedProcedureID ?? ''}] 
(0040,1010) [${NamesOfIntendedRecipientsOfResults ?? ''}] 
(0040,1400) [${RequestedProcedureComments ?? ''}] 
(0040,2400) [${ImagingServiceRequestComments ?? ''}] 
`

  writeFileSync(`./worklists/${id}.txt`, template, 'utf-8')
}
