import type { SearchResponseInterface } from "@/lib/typesense/typesense";

export interface DrugHitInterface {
  id: string;
  prescriptionId: string;
  drugTemplate: string;
  labo: string;
  DCI: string;
  nomCommercial: string;
  PPA: string;
  TR: string;
  vignetteColor: string;
  classPharmaco: string;
  classTherapeutique: string;
  conditionnement: string;
  liste: string;
  pays: string;
  remboursable: boolean;
  prodLocal: boolean;
  comercialisé: boolean;
  img: string;
  miniatureImageLink: string;
  dosage: string;
  forme: string;
}

export interface DrugsInterface {
  id: string;
  fullName: string;
  drugTemplate: string;
  rx: string;
  type: "Générique" | "Princeps" | "";
  labo: string;
  nomCommercial: string;
  DCI: string;
  PPA: string;
  TR: string;
  vignetteColor: "lineGreen" | "lineEmpty" | "lineRed" | "";
  classPharmaco: string;
  classTherapeutique: string;
  codeDCI: string;
  forme: string;
  dosage: string;
  conditionnement: string;
  liste: string;
  pays: string;
  remboursable: boolean;
  NumEnregistrement: string;
  img: string;
  miniatureImageLink: string;
  link: string;
  noticeLink: string;
  prodLocal: boolean;
  comercialisé: boolean;
}
export interface DrugsSearchResponseInterface extends SearchResponseInterface {
  hits: DrugHitInterface[];
}
