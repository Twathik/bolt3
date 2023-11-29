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
