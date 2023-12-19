import { EventTypes, ModalityType } from '@prisma/client'

export type modalitiesTypeMapping = {
  type: ModalityType
  description: string
  eventType: EventTypes | ''
}

export const modalitiesTypesMapping: modalitiesTypeMapping[] = [
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
