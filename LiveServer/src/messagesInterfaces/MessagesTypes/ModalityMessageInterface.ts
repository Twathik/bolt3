import type { RootMessageInterface } from "../MessageTypesInterface";

type ModalityMessagePayloadOperationType = "update" | "create" | "delete";

interface RootModalityMessagePayload {
  operation: ModalityMessagePayloadOperationType;
}

interface ModalityUpdateMessagePayload extends RootModalityMessagePayload {
  modality: {
    id: string;
    modalityAETitle: string;
    modalityIpAddress: string;
    modalityPseudo?: string;
    modalityPort: number;
    modalityType:
      | "AR"
      | "ASMT"
      | "AU"
      | "BDUS"
      | "BI"
      | "BMD"
      | "CR"
      | "CT"
      | "CTPROTOCOL"
      | "DG"
      | "DOC"
      | "DX"
      | "ECG"
      | "EPS"
      | "ES"
      | "FID"
      | "GM"
      | "HC"
      | "HD"
      | "IO"
      | "IOL"
      | "IVOCT"
      | "IVUS"
      | "KER"
      | "KO"
      | "LEN"
      | "LS"
      | "M3D"
      | "MG"
      | "MR"
      | "NM"
      | "OAM"
      | "OCT"
      | "OP"
      | "OPM"
      | "OPT"
      | "OPTBSV"
      | "OPTENF"
      | "OPV"
      | "OSS"
      | "OT"
      | "PLAN"
      | "PR"
      | "PT"
      | "PX"
      | "REG"
      | "RESP"
      | "RF"
      | "RG"
      | "RTDOSE"
      | "RTIMAGE"
      | "RTINTENT"
      | "RTPLAN"
      | "RTRAD"
      | "RTRECORD"
      | "RTSEGANN"
      | "RTSTRUCT"
      | "RWV"
      | "SEG"
      | "SM"
      | "SMR"
      | "SR"
      | "SRF"
      | "STAIN"
      | "TEXTUREMAP"
      | "TG"
      | "US"
      | "VA"
      | "XA"
      | "XC";
    enabled: boolean;
  };
}

type ModalityMessagePayload = ModalityUpdateMessagePayload;

export interface ModalityMessageInterface extends RootMessageInterface {
  type: "modality";
  payload: ModalityMessagePayload;
}
