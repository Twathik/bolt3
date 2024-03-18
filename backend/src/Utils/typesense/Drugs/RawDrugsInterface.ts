export interface RawDruGInterface {
  fullName: string
  rx: [{ rxcui: string; name: string; tty: string }]
  type: 'Générique' | 'Princeps' | ''
  vignette: {
    labo: string
    nomCommercial: string
    DCI: string
    PPA: string
    TR: string
    background: 'lineGreen' | 'lineEmpty' | 'lineRed' | ''
  }
  infos: {
    labo: string
    classPharmaco: string
    classTherapeutique: string
    nomCommercial: string
    codeDCI: string
    forme: string
    dosage: string
    conditionnement: string
    liste: string
    pays: string
    remboursable: 'oui' | 'non'
    TTR: string
    PPA: string
    NumEnregistrement: string
  }
  img: string
  miniatureImageLink: string
  link: string
  noticeLink: string
  prodLocal: 'Non' | 'Oui'
  comercialisé: 'Oui' | 'Non'
}
