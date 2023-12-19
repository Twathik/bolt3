export type ModalityType =
  | 'AR'
  | 'ASMT'
  | 'AU'
  | 'BDUS'
  | 'BI'
  | 'BMD'
  | 'CR'
  | 'CT'
  | 'CTPROTOCOL'
  | 'DG'
  | 'DOC'
  | 'DX'
  | 'ECG'
  | 'EPS'
  | 'ES'
  | 'FID'
  | 'GM'
  | 'HC'
  | 'HD'
  | 'IO'
  | 'IOL'
  | 'IVOCT'
  | 'IVUS'
  | 'KER'
  | 'KO'
  | 'LEN'
  | 'LS'
  | 'MG'
  | 'MR'
  | 'M3D'
  | 'NM'
  | 'OAM'
  | 'OCT'
  | 'OP'
  | 'OPM'
  | 'OPT'
  | 'OPTBSV'
  | 'OPTENF'
  | 'OPV'
  | 'OSS'
  | 'OT'
  | 'PLAN'
  | 'PR'
  | 'PT'
  | 'PX'
  | 'REG'
  | 'RESP'
  | 'RF'
  | 'RG'
  | 'RTDOSE'
  | 'RTIMAGE'
  | 'RTINTENT'
  | 'RTPLAN'
  | 'RTRAD'
  | 'RTRECORD'
  | 'RTSEGANN'
  | 'RTSTRUCT'
  | 'RWV'
  | 'SEG'
  | 'SM'
  | 'SMR'
  | 'SR'
  | 'SRF'
  | 'STAIN'
  | 'TEXTUREMAP'
  | 'TG'
  | 'US'
  | 'VA'
  | 'XA'
  | 'XC'

export interface WorkListInterface {
  /**
    Tag	(0008,0050)

    Type	Required, Empty if Unknown (2)

    Keyword	AccessionNumber

    Value Multiplicity	1

    Value Representation	Short String (SH)

    Example Values	
      - 2819497684894126
      - 2504966403753008

    A RIS generated number that identifies the order for the Study. 
  */
  AccessionNumber: string
  /**
    Tag	(0008,0090)

    Type	Required, Empty if Unknown (2)

    Keyword	ReferringPhysicianName

    Value Multiplicity	1

    Value Representation	Person Name (PN)

    Example Values REMOVED

    Name of the Patient's referring physician
   */
  ReferringPhysiciansName: string
  /**
  Tag	(0010,0010)

  Type	Required, Empty if Unknown (2)

  Keyword	PatientName

  Value Multiplicity	1

  Value Representation	Person Name (PN)

  Example Values	
  - 275930
  - PD-1-MELANOMA-00016

  Patient's full name. 
  */
  PatientsName: string
  /**
    Tag	(0010,0020)

    Type	Required, Empty if Unknown (2)

    Keyword	PatientID

    Value Multiplicity	1

    Value Representation	Long String (LO)

    Example Values	
    -HF1316
    -PD-1-MELANOMA-00016
    -PD-1-MELANOMA-00013

    Primary identifier for the Patient.

    Note : In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also Section C.7.1.4.1.1.
   */
  PatientID: string
  /**
   * Tag	(0010,0030)
   * 
Type	Required, Empty if Unknown (2)

Keyword	PatientBirthDate

Value Multiplicity	1

Value Representation	Date (DA)

Example Values	

Birth date of the Patient.
   */
  PatientsBirthDate: string
  /**
   Tag	(0010,0032)
    
  Type	Optional (3)

  Keyword	PatientBirthTime

  Value Multiplicity	1

  Value Representation	Time (TM)

  Birth time of the Patient. 
  */
  PatientsBirthTime?: string
  /**
   * Tag	(0010,0040)
   * 
Type	Required, Empty if Unknown (2)

Keyword	PatientSex

Value Multiplicity	1

Value Representation	Code String (CS)

Example Values: 
- F 
- M

Sex of the named Patient.

Enumerated Values:

- M: male
- F: female
- O: other
   */
  PatientsSex: 'M' | 'F' | 'O'
  /**
   * Tag (0010,1000)
   */
  OtherPatientIDs?: string
  /**
    Tag	(0010,1020)

    Type	Optional (3)

    Keyword	PatientSize

    Value Multiplicity	1

    Value Representation	Decimal String (DS)

    Example Values	
    - 1.6256032533333
    - 1.82880366
    - 1.7272034566667

    Length or size of the Patient, in meters.
   */
  PatientsSizeInMeters?: string
  /**
   * Tag	(0010,1030)
   * 
    Type	Optional (3)

    Keyword	PatientWeight

    Value Multiplicity	1

    Value Representation	Decimal String (DS)

    Example Values	
    - 68.039
    - 72.575
    - 70

    Weight of the Patient, in kilograms.
   */
  PatientsWeightInKg?: string
  /**
   * Tag (0010,1040)
   */
  PatientsAddress?: string
  /**
    Tag	(0010,2000)
    Type	Optional (3)
    Keyword	MedicalAlerts
    Value Multiplicity	1-n
    Value Representation	Long String (LO)
    Example Values	
    ACE Inhibitors; lisinopril
    Conditions to which medical staff should be alerted (e.g., contagious condition, drug allergies, etc.)
  */
  MedicalAlerts?: string
  /**
   * Tag	(0010,2110)
   * 
    Type	Optional (3)

    Keyword	Allergies

    Value Multiplicity	1-n

    Value Representation	Long String (LO)

    Example Values	
    - 0
    - O

    Description of prior reaction to contrast agents, or other patient allergies or adverse reactions.
   */
  Allergies?: string
  /**
   * Tag	(0010,2160)
   * 
  Type	Optional (3)
  
  Keyword	EthnicGroup

  Value Multiplicity	1

  Value Representation	Short String (SH)

  Example Values	

  - REMOVED
  - W

  Ethnic group or race of the Patient.
   */

  EthnicGroup?: string
  /**
   * Tag	(0010,21B0)
   * 
Type	Optional (3)

Keyword	AdditionalPatientHistory

Value Multiplicity	1

Value Representation	Long Text (LT)

Additional information about the Patient's medical history.
   */

  AdditionalPatientHistory?: string
  /**
   * Tag	(0010,21C0)
   * 
Type	Optional (3)

Keyword	PregnancyStatus

Value Multiplicity	1

Value Representation	Unsigned Short (US)

Describes pregnancy state of Patient.

Enumerated Values:

- 0001 : not pregnant
- 0002 : possibly pregnant
- 0003 : definitely pregnant
- 0004 : unknown
   */

  PregnancyStatus?: '0001' | '0002' | '0003' | '0004'
  /**
   * Tag	(0010,4000)
   * 
Type	Optional (3)

Keyword	PatientComments

Value Multiplicity	1

Value Representation	Long Text (LT)

Example Values	

LUNG MASS\HEMOPTYSIS

no volumetric

User-defined additional information about the Patient.
   */
  PatientComments?: string
  /**
   * Tag	(0020,000D)
   * 
Type	Conditionally Required (1C)

Keyword	StudyInstanceUID

Value Multiplicity	1

Value Representation	Unique Identifier (UI)

Unique identifier for the Study.


Required if Type of Instances (0040,E020) is DICOM and the Information Model of the referenced Instance contains the Study IE
   */
  StudyInstanceUID?: string
  /**
   * Tag (0032,1032)
   */
  RequestingPhysician?: string
  /**
   * Tag	(0032,1033)
   * 
Type	Optional (3)

Keyword	RequestingService

Value Multiplicity	1

Value Representation	Long String (LO)

Institutional department, unit or service where the request initiated.


See Note 1 and Note 2.
   */
  RequestingService?: string

  /**
  Tag	(0032,1060)

Type	Optional (3)

Keyword	RequestedProcedureDescription

Value Multiplicity	1

Value Representation	Long String (LO)

Example Values	

MRI Brain W/O&W Contrast

MRI BREAST, BILATERAL WITH T WITHOUT CONTRAST

F-18 FDG PET(Whole Body)

Institution-generated administrative description or classification of Requested Procedure.

  */
  RequestedProcedureDescription?: string
  /**
   * Tag	(0038,0010)
   * 
Type	Optional (3)

Keyword	AdmissionID

Value Multiplicity	1

Value Representation	Long String (LO)

Identifier of the Visit as assigned by the healthcare provider


Note: Visit and Admission are used interchangeably here. In the broader sense, an admission is a type of visit at an institution where there is an admission process for patients.
   */
  AdmissionID?: string
  /**
   * Tag (0038,0300)
   */
  CurrentPatientLocation?: string
  /**
   * Tag (0040,0100)
   */

  ScheduledProcedureStepSequence: {
    /**
     * Tag	(0008,0060)
     * 
Type	Required (1)

Keyword	Modality

Value Multiplicity	1

Value Representation	Code String (CS)

Example Values	
- MR
- CT
- PT

Type of equipment that originally acquired the data used to create the images in this Series. See Section C.7.3.1.1.1 for Defined Terms.

Note: 
- The XA modality incorporates the retired modality DS.

- The RF modality incorporates the retired modalities CF, DF, VF.

- The modality listed in the Modality Data Element (0008,0060) may not match the name of the IOD in which it appears. For example, a SOP Instance from XA IOD may list the RF modality when an RF implementation produces an XA object.

- The MR modality incorporates the retired modalities MA and MS.

- The US modality incorporates the retired modalities EC, CD, and DD.

- The NM modality incorporates the retired modality ST.
     */
    Modality: ModalityType
    /**
     * Tag (0040,0001)
     */
    ScheduledStationAETitle: string
    /**
     * Tag (0040,0002)
     */
    ScheduledProcedureStepStartDate: string
    /**
     * Tag (0040,0003)
     */
    ScheduledProcedureStepStartTime?: string
    /**
     * Tag (0040,0006)
     */
    ScheduledPerformingPhysiciansName?: string
    /**
     * Tag	(0040,0007)
     * 
Type	Optional (3)

Keyword	ScheduledProcedureStepDescription

Value Multiplicity	1

Value Representation	Long String (LO)

Example Values	
- 74178.10 CT ABDOMEN ADRENAL WWO PELVIS
- CT ABDOMEN W/WO CONTRAST

Institution-generated description or classification of the Scheduled Procedure Step to be performed.
     */
    ScheduledProcedureStepDescription?: string

    /**
     * Tag	(0040,0009)
     * 
Type	Conditionally Required (1C)

Keyword	ScheduledProcedureStepID

Value Multiplicity	1

Value Representation	Short String (SH)

Example Values	
-1
-ABSQMI

Identifier that identifies the Scheduled Procedure Step.

Required if procedure was scheduled.

Note : The condition is to allow the contents of this Macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value.
     */
    ScheduledProcedureStepID?: string
    /**
     * Tag (0040,0010)
     */
    ScheduledStationName?: string
    /**
     * Tag (0040,0011)
     */
    ScheduledProcedureStepLocation?: string
  }
  /**
   * Tag	(0040,1001)
   * 
Type	Conditionally Required (1C)

Keyword	RequestedProcedureID
Value Multiplicity	1

Value Representation	Short String (SH)

Identifier that identifies the Requested Procedure in the Imaging Service Request.

Required if procedure was scheduled. May be present otherwise.

Note: The condition is to allow the contents of this Macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value.
   */
  RequestedProcedureID?: string
  /**
   * Tag (0040,1010)
   */
  NamesOfIntendedRecipientsOfResults?: string
  /**
   * Tag (0040,1400)
   */
  RequestedProcedureComments?: string
  /**
   * Tag (0040,2400)
   */
  ImagingServiceRequestComments?: string
}
