/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Int64: any;
};

export type AnsmClasses = {
  __typename?: 'ANSMClasses';
  id: Scalars['ID'];
  interactions?: Maybe<Array<Maybe<AnsmInteractions>>>;
  interactionsAggregate?: Maybe<AnsmInteractionsAggregateResult>;
  molecules?: Maybe<Array<Maybe<AnsmMolecules>>>;
  moleculesAggregate?: Maybe<AnsmMoleculesAggregateResult>;
  name: Scalars['String'];
};


export type AnsmClassesInteractionsArgs = {
  filter?: InputMaybe<AnsmInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmInteractionsOrder>;
};


export type AnsmClassesInteractionsAggregateArgs = {
  filter?: InputMaybe<AnsmInteractionsFilter>;
};


export type AnsmClassesMoleculesArgs = {
  filter?: InputMaybe<AnsmMoleculesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmMoleculesOrder>;
};


export type AnsmClassesMoleculesAggregateArgs = {
  filter?: InputMaybe<AnsmMoleculesFilter>;
};

export type AnsmClassesAggregateResult = {
  __typename?: 'ANSMClassesAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type AnsmClassesFilter = {
  and?: InputMaybe<Array<InputMaybe<AnsmClassesFilter>>>;
  has?: InputMaybe<Array<InputMaybe<AnsmClassesHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringHashFilter_StringTermFilter>;
  not?: InputMaybe<AnsmClassesFilter>;
  or?: InputMaybe<Array<InputMaybe<AnsmClassesFilter>>>;
};

export enum AnsmClassesHasFilter {
  Interactions = 'interactions',
  Molecules = 'molecules',
  Name = 'name'
}

export type AnsmClassesOrder = {
  asc?: InputMaybe<AnsmClassesOrderable>;
  desc?: InputMaybe<AnsmClassesOrderable>;
  then?: InputMaybe<AnsmClassesOrder>;
};

export enum AnsmClassesOrderable {
  Name = 'name'
}

export type AnsmClassesPatch = {
  interactions?: InputMaybe<Array<InputMaybe<AnsmInteractionsRef>>>;
  molecules?: InputMaybe<Array<InputMaybe<AnsmMoleculesRef>>>;
};

export type AnsmClassesRef = {
  id?: InputMaybe<Scalars['ID']>;
  interactions?: InputMaybe<Array<InputMaybe<AnsmInteractionsRef>>>;
  molecules?: InputMaybe<Array<InputMaybe<AnsmMoleculesRef>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type AnsmInteractions = {
  __typename?: 'ANSMInteractions';
  CAT?: Maybe<Scalars['String']>;
  CAT_commentary?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<AnsmClasses>>>;
  classesAggregate?: Maybe<AnsmClassesAggregateResult>;
  commentary?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  molecules?: Maybe<Array<Maybe<AnsmMolecules>>>;
  moleculesAggregate?: Maybe<AnsmMoleculesAggregateResult>;
};


export type AnsmInteractionsClassesArgs = {
  filter?: InputMaybe<AnsmClassesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmClassesOrder>;
};


export type AnsmInteractionsClassesAggregateArgs = {
  filter?: InputMaybe<AnsmClassesFilter>;
};


export type AnsmInteractionsMoleculesArgs = {
  filter?: InputMaybe<AnsmMoleculesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmMoleculesOrder>;
};


export type AnsmInteractionsMoleculesAggregateArgs = {
  filter?: InputMaybe<AnsmMoleculesFilter>;
};

export type AnsmInteractionsAggregateResult = {
  __typename?: 'ANSMInteractionsAggregateResult';
  CATMax?: Maybe<Scalars['String']>;
  CATMin?: Maybe<Scalars['String']>;
  CAT_commentaryMax?: Maybe<Scalars['String']>;
  CAT_commentaryMin?: Maybe<Scalars['String']>;
  commentaryMax?: Maybe<Scalars['String']>;
  commentaryMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
};

export type AnsmInteractionsFilter = {
  and?: InputMaybe<Array<InputMaybe<AnsmInteractionsFilter>>>;
  has?: InputMaybe<Array<InputMaybe<AnsmInteractionsHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<AnsmInteractionsFilter>;
  or?: InputMaybe<Array<InputMaybe<AnsmInteractionsFilter>>>;
};

export enum AnsmInteractionsHasFilter {
  Cat = 'CAT',
  CatCommentary = 'CAT_commentary',
  Classes = 'classes',
  Commentary = 'commentary',
  Molecules = 'molecules'
}

export type AnsmInteractionsOrder = {
  asc?: InputMaybe<AnsmInteractionsOrderable>;
  desc?: InputMaybe<AnsmInteractionsOrderable>;
  then?: InputMaybe<AnsmInteractionsOrder>;
};

export enum AnsmInteractionsOrderable {
  Cat = 'CAT',
  CatCommentary = 'CAT_commentary',
  Commentary = 'commentary'
}

export type AnsmInteractionsPatch = {
  CAT?: InputMaybe<Scalars['String']>;
  CAT_commentary?: InputMaybe<Scalars['String']>;
  classes?: InputMaybe<Array<InputMaybe<AnsmClassesRef>>>;
  commentary?: InputMaybe<Scalars['String']>;
  molecules?: InputMaybe<Array<InputMaybe<AnsmMoleculesRef>>>;
};

export type AnsmInteractionsRef = {
  CAT?: InputMaybe<Scalars['String']>;
  CAT_commentary?: InputMaybe<Scalars['String']>;
  classes?: InputMaybe<Array<InputMaybe<AnsmClassesRef>>>;
  commentary?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  molecules?: InputMaybe<Array<InputMaybe<AnsmMoleculesRef>>>;
};

export type AnsmMolecules = {
  __typename?: 'ANSMMolecules';
  classes?: Maybe<Array<Maybe<AnsmClasses>>>;
  classesAggregate?: Maybe<AnsmClassesAggregateResult>;
  id: Scalars['ID'];
  interactions?: Maybe<Array<Maybe<AnsmInteractions>>>;
  interactionsAggregate?: Maybe<AnsmInteractionsAggregateResult>;
  name: Scalars['String'];
};


export type AnsmMoleculesClassesArgs = {
  filter?: InputMaybe<AnsmClassesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmClassesOrder>;
};


export type AnsmMoleculesClassesAggregateArgs = {
  filter?: InputMaybe<AnsmClassesFilter>;
};


export type AnsmMoleculesInteractionsArgs = {
  filter?: InputMaybe<AnsmInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmInteractionsOrder>;
};


export type AnsmMoleculesInteractionsAggregateArgs = {
  filter?: InputMaybe<AnsmInteractionsFilter>;
};

export type AnsmMoleculesAggregateResult = {
  __typename?: 'ANSMMoleculesAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type AnsmMoleculesFilter = {
  and?: InputMaybe<Array<InputMaybe<AnsmMoleculesFilter>>>;
  has?: InputMaybe<Array<InputMaybe<AnsmMoleculesHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringHashFilter_StringTermFilter>;
  not?: InputMaybe<AnsmMoleculesFilter>;
  or?: InputMaybe<Array<InputMaybe<AnsmMoleculesFilter>>>;
};

export enum AnsmMoleculesHasFilter {
  Classes = 'classes',
  Interactions = 'interactions',
  Name = 'name'
}

export type AnsmMoleculesOrder = {
  asc?: InputMaybe<AnsmMoleculesOrderable>;
  desc?: InputMaybe<AnsmMoleculesOrderable>;
  then?: InputMaybe<AnsmMoleculesOrder>;
};

export enum AnsmMoleculesOrderable {
  Name = 'name'
}

export type AnsmMoleculesPatch = {
  classes?: InputMaybe<Array<InputMaybe<AnsmClassesRef>>>;
  interactions?: InputMaybe<Array<InputMaybe<AnsmInteractionsRef>>>;
};

export type AnsmMoleculesRef = {
  classes?: InputMaybe<Array<InputMaybe<AnsmClassesRef>>>;
  id?: InputMaybe<Scalars['ID']>;
  interactions?: InputMaybe<Array<InputMaybe<AnsmInteractionsRef>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type AddAnsmClassesInput = {
  interactions?: InputMaybe<Array<InputMaybe<AnsmInteractionsRef>>>;
  molecules?: InputMaybe<Array<InputMaybe<AnsmMoleculesRef>>>;
  name: Scalars['String'];
};

export type AddAnsmClassesPayload = {
  __typename?: 'AddANSMClassesPayload';
  aNSMClasses?: Maybe<Array<Maybe<AnsmClasses>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddAnsmClassesPayloadANsmClassesArgs = {
  filter?: InputMaybe<AnsmClassesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmClassesOrder>;
};

export type AddAnsmInteractionsInput = {
  CAT?: InputMaybe<Scalars['String']>;
  CAT_commentary?: InputMaybe<Scalars['String']>;
  classes?: InputMaybe<Array<InputMaybe<AnsmClassesRef>>>;
  commentary?: InputMaybe<Scalars['String']>;
  molecules?: InputMaybe<Array<InputMaybe<AnsmMoleculesRef>>>;
};

export type AddAnsmInteractionsPayload = {
  __typename?: 'AddANSMInteractionsPayload';
  aNSMInteractions?: Maybe<Array<Maybe<AnsmInteractions>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddAnsmInteractionsPayloadANsmInteractionsArgs = {
  filter?: InputMaybe<AnsmInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmInteractionsOrder>;
};

export type AddAnsmMoleculesInput = {
  classes?: InputMaybe<Array<InputMaybe<AnsmClassesRef>>>;
  interactions?: InputMaybe<Array<InputMaybe<AnsmInteractionsRef>>>;
  name: Scalars['String'];
};

export type AddAnsmMoleculesPayload = {
  __typename?: 'AddANSMMoleculesPayload';
  aNSMMolecules?: Maybe<Array<Maybe<AnsmMolecules>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddAnsmMoleculesPayloadANsmMoleculesArgs = {
  filter?: InputMaybe<AnsmMoleculesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmMoleculesOrder>;
};

export type AddBfDrugsInteractionsInput = {
  DrugLevelAndEffect?: InputMaybe<Scalars['String']>;
  LastModificationDate?: InputMaybe<Scalars['String']>;
  LastModificationType?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  references?: InputMaybe<Scalars['String']>;
  relatedDrugs?: InputMaybe<Array<InputMaybe<BfDrugsInteractionsRef>>>;
};

export type AddBfDrugsInteractionsPayload = {
  __typename?: 'AddBFDrugsInteractionsPayload';
  bFDrugsInteractions?: Maybe<Array<Maybe<BfDrugsInteractions>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddBfDrugsInteractionsPayloadBfDrugsInteractionsArgs = {
  filter?: InputMaybe<BfDrugsInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<BfDrugsInteractionsOrder>;
};

export type AddDrugBankLinkInput = {
  drugBankId: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type AddDrugBankLinkPayload = {
  __typename?: 'AddDrugBankLinkPayload';
  drugBankLink?: Maybe<Array<Maybe<DrugBankLink>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddDrugBankLinkPayloadDrugBankLinkArgs = {
  filter?: InputMaybe<DrugBankLinkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DrugBankLinkOrder>;
};

export type AddG6PDinteractionsInput = {
  CAT?: InputMaybe<Scalars['String']>;
  commentary?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type AddG6PDinteractionsPayload = {
  __typename?: 'AddG6PDinteractionsPayload';
  g6PDinteractions?: Maybe<Array<Maybe<G6PDinteractions>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddG6PDinteractionsPayloadG6PDinteractionsArgs = {
  filter?: InputMaybe<G6PDinteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<G6PDinteractionsOrder>;
};

export type AddPregnancyInteractionsInput = {
  Category?: InputMaybe<PregnancyInteractionsCategories>;
  Observation?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type AddPregnancyInteractionsPayload = {
  __typename?: 'AddPregnancyInteractionsPayload';
  numUids?: Maybe<Scalars['Int']>;
  pregnancyInteractions?: Maybe<Array<Maybe<PregnancyInteractions>>>;
};


export type AddPregnancyInteractionsPayloadPregnancyInteractionsArgs = {
  filter?: InputMaybe<PregnancyInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PregnancyInteractionsOrder>;
};

export type AddRxClassConceptInput = {
  childClasses?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  classId: Scalars['String'];
  class_ATC4?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_MESHPA?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_chemclass?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_moa?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_pe?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_with?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_VAClass?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_VAClass_extended?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_active_metabolites?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_chemical_structure?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_epc?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_ingredient?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_moa?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_pe?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_pk?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_induces?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_may_diagnose?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_may_prevent?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_may_treat?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_site_of_metabolism?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  minClass?: InputMaybe<Scalars['Boolean']>;
  parentClass?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  rxClassName?: InputMaybe<Scalars['String']>;
  rxClassType?: InputMaybe<RxClassTypes>;
};

export type AddRxClassConceptPayload = {
  __typename?: 'AddRXClassConceptPayload';
  numUids?: Maybe<Scalars['Int']>;
  rXClassConcept?: Maybe<Array<Maybe<RxClassConcept>>>;
};


export type AddRxClassConceptPayloadRxClassConceptArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};

export type AddRxConceptInput = {
  concept_ATC4?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_MESHPA?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_chemclass?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_moa?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_pe?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_with?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_VAClass?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_VAClass_extended?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_active_metabolites?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_chemical_structure?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_epc?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_ingredient?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_moa?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_pe?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_pk?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_induces?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_may_diagnose?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_may_prevent?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_may_treat?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_site_of_metabolism?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concepts?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  drugBankLink?: InputMaybe<DrugBankLinkRef>;
  interactions?: InputMaybe<Array<InputMaybe<RxNavMedicalInteractionRef>>>;
  minConcept?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  name: Scalars['String'];
  rxcui: Scalars['String'];
  tty?: InputMaybe<Scalars['String']>;
};

export type AddRxConceptPayload = {
  __typename?: 'AddRXConceptPayload';
  numUids?: Maybe<Scalars['Int']>;
  rXConcept?: Maybe<Array<Maybe<RxConcept>>>;
};


export type AddRxConceptPayloadRxConceptArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};

export type AddRxNavMedicalInteractionInput = {
  concepts?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  description?: InputMaybe<Scalars['String']>;
  severity?: InputMaybe<Scalars['String']>;
};

export type AddRxNavMedicalInteractionPayload = {
  __typename?: 'AddRXNavMedicalInteractionPayload';
  numUids?: Maybe<Scalars['Int']>;
  rXNavMedicalInteraction?: Maybe<Array<Maybe<RxNavMedicalInteraction>>>;
};


export type AddRxNavMedicalInteractionPayloadRxNavMedicalInteractionArgs = {
  filter?: InputMaybe<RxNavMedicalInteractionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxNavMedicalInteractionOrder>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']>;
};

export type BfDrugsInteractions = {
  __typename?: 'BFDrugsInteractions';
  DrugLevelAndEffect?: Maybe<Scalars['String']>;
  LastModificationDate?: Maybe<Scalars['String']>;
  LastModificationType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  references?: Maybe<Scalars['String']>;
  relatedDrugs?: Maybe<Array<Maybe<BfDrugsInteractions>>>;
  relatedDrugsAggregate?: Maybe<BfDrugsInteractionsAggregateResult>;
};


export type BfDrugsInteractionsRelatedDrugsArgs = {
  filter?: InputMaybe<BfDrugsInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<BfDrugsInteractionsOrder>;
};


export type BfDrugsInteractionsRelatedDrugsAggregateArgs = {
  filter?: InputMaybe<BfDrugsInteractionsFilter>;
};

export type BfDrugsInteractionsAggregateResult = {
  __typename?: 'BFDrugsInteractionsAggregateResult';
  DrugLevelAndEffectMax?: Maybe<Scalars['String']>;
  DrugLevelAndEffectMin?: Maybe<Scalars['String']>;
  LastModificationDateMax?: Maybe<Scalars['String']>;
  LastModificationDateMin?: Maybe<Scalars['String']>;
  LastModificationTypeMax?: Maybe<Scalars['String']>;
  LastModificationTypeMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
  referencesMax?: Maybe<Scalars['String']>;
  referencesMin?: Maybe<Scalars['String']>;
};

export type BfDrugsInteractionsFilter = {
  and?: InputMaybe<Array<InputMaybe<BfDrugsInteractionsFilter>>>;
  has?: InputMaybe<Array<InputMaybe<BfDrugsInteractionsHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringHashFilter_StringTermFilter>;
  not?: InputMaybe<BfDrugsInteractionsFilter>;
  or?: InputMaybe<Array<InputMaybe<BfDrugsInteractionsFilter>>>;
};

export enum BfDrugsInteractionsHasFilter {
  DrugLevelAndEffect = 'DrugLevelAndEffect',
  LastModificationDate = 'LastModificationDate',
  LastModificationType = 'LastModificationType',
  Keywords = 'keywords',
  Name = 'name',
  References = 'references',
  RelatedDrugs = 'relatedDrugs'
}

export type BfDrugsInteractionsOrder = {
  asc?: InputMaybe<BfDrugsInteractionsOrderable>;
  desc?: InputMaybe<BfDrugsInteractionsOrderable>;
  then?: InputMaybe<BfDrugsInteractionsOrder>;
};

export enum BfDrugsInteractionsOrderable {
  DrugLevelAndEffect = 'DrugLevelAndEffect',
  LastModificationDate = 'LastModificationDate',
  LastModificationType = 'LastModificationType',
  Name = 'name',
  References = 'references'
}

export type BfDrugsInteractionsPatch = {
  DrugLevelAndEffect?: InputMaybe<Scalars['String']>;
  LastModificationDate?: InputMaybe<Scalars['String']>;
  LastModificationType?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  references?: InputMaybe<Scalars['String']>;
  relatedDrugs?: InputMaybe<Array<InputMaybe<BfDrugsInteractionsRef>>>;
};

export type BfDrugsInteractionsRef = {
  DrugLevelAndEffect?: InputMaybe<Scalars['String']>;
  LastModificationDate?: InputMaybe<Scalars['String']>;
  LastModificationType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  references?: InputMaybe<Scalars['String']>;
  relatedDrugs?: InputMaybe<Array<InputMaybe<BfDrugsInteractionsRef>>>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']>>;
  graphql?: InputMaybe<Scalars['String']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
  ge?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  le?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteAnsmClassesPayload = {
  __typename?: 'DeleteANSMClassesPayload';
  aNSMClasses?: Maybe<Array<Maybe<AnsmClasses>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteAnsmClassesPayloadANsmClassesArgs = {
  filter?: InputMaybe<AnsmClassesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmClassesOrder>;
};

export type DeleteAnsmInteractionsPayload = {
  __typename?: 'DeleteANSMInteractionsPayload';
  aNSMInteractions?: Maybe<Array<Maybe<AnsmInteractions>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteAnsmInteractionsPayloadANsmInteractionsArgs = {
  filter?: InputMaybe<AnsmInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmInteractionsOrder>;
};

export type DeleteAnsmMoleculesPayload = {
  __typename?: 'DeleteANSMMoleculesPayload';
  aNSMMolecules?: Maybe<Array<Maybe<AnsmMolecules>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteAnsmMoleculesPayloadANsmMoleculesArgs = {
  filter?: InputMaybe<AnsmMoleculesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmMoleculesOrder>;
};

export type DeleteBfDrugsInteractionsPayload = {
  __typename?: 'DeleteBFDrugsInteractionsPayload';
  bFDrugsInteractions?: Maybe<Array<Maybe<BfDrugsInteractions>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteBfDrugsInteractionsPayloadBfDrugsInteractionsArgs = {
  filter?: InputMaybe<BfDrugsInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<BfDrugsInteractionsOrder>;
};

export type DeleteDrugBankLinkPayload = {
  __typename?: 'DeleteDrugBankLinkPayload';
  drugBankLink?: Maybe<Array<Maybe<DrugBankLink>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteDrugBankLinkPayloadDrugBankLinkArgs = {
  filter?: InputMaybe<DrugBankLinkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DrugBankLinkOrder>;
};

export type DeleteG6PDinteractionsPayload = {
  __typename?: 'DeleteG6PDinteractionsPayload';
  g6PDinteractions?: Maybe<Array<Maybe<G6PDinteractions>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteG6PDinteractionsPayloadG6PDinteractionsArgs = {
  filter?: InputMaybe<G6PDinteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<G6PDinteractionsOrder>;
};

export type DeletePregnancyInteractionsPayload = {
  __typename?: 'DeletePregnancyInteractionsPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  pregnancyInteractions?: Maybe<Array<Maybe<PregnancyInteractions>>>;
};


export type DeletePregnancyInteractionsPayloadPregnancyInteractionsArgs = {
  filter?: InputMaybe<PregnancyInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PregnancyInteractionsOrder>;
};

export type DeleteRxClassConceptPayload = {
  __typename?: 'DeleteRXClassConceptPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  rXClassConcept?: Maybe<Array<Maybe<RxClassConcept>>>;
};


export type DeleteRxClassConceptPayloadRxClassConceptArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};

export type DeleteRxConceptPayload = {
  __typename?: 'DeleteRXConceptPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  rXConcept?: Maybe<Array<Maybe<RxConcept>>>;
};


export type DeleteRxConceptPayloadRxConceptArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};

export type DeleteRxNavMedicalInteractionPayload = {
  __typename?: 'DeleteRXNavMedicalInteractionPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  rXNavMedicalInteraction?: Maybe<Array<Maybe<RxNavMedicalInteraction>>>;
};


export type DeleteRxNavMedicalInteractionPayloadRxNavMedicalInteractionArgs = {
  filter?: InputMaybe<RxNavMedicalInteractionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxNavMedicalInteractionOrder>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

/** DrugBank link to RxConcepts */
export type DrugBankLink = {
  __typename?: 'DrugBankLink';
  drugBankId: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DrugBankLinkAggregateResult = {
  __typename?: 'DrugBankLinkAggregateResult';
  count?: Maybe<Scalars['Int']>;
  drugBankIdMax?: Maybe<Scalars['String']>;
  drugBankIdMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
  urlMax?: Maybe<Scalars['String']>;
  urlMin?: Maybe<Scalars['String']>;
};

export type DrugBankLinkFilter = {
  and?: InputMaybe<Array<InputMaybe<DrugBankLinkFilter>>>;
  drugBankId?: InputMaybe<StringHashFilter_StringTermFilter>;
  has?: InputMaybe<Array<InputMaybe<DrugBankLinkHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<DrugBankLinkFilter>;
  or?: InputMaybe<Array<InputMaybe<DrugBankLinkFilter>>>;
};

export enum DrugBankLinkHasFilter {
  DrugBankId = 'drugBankId',
  Name = 'name',
  Url = 'url'
}

export type DrugBankLinkOrder = {
  asc?: InputMaybe<DrugBankLinkOrderable>;
  desc?: InputMaybe<DrugBankLinkOrderable>;
  then?: InputMaybe<DrugBankLinkOrder>;
};

export enum DrugBankLinkOrderable {
  DrugBankId = 'drugBankId',
  Name = 'name',
  Url = 'url'
}

export type DrugBankLinkPatch = {
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type DrugBankLinkRef = {
  drugBankId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type G6PDinteractions = {
  __typename?: 'G6PDinteractions';
  CAT?: Maybe<Scalars['String']>;
  commentary?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type G6PDinteractionsAggregateResult = {
  __typename?: 'G6PDinteractionsAggregateResult';
  CATMax?: Maybe<Scalars['String']>;
  CATMin?: Maybe<Scalars['String']>;
  commentaryMax?: Maybe<Scalars['String']>;
  commentaryMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type G6PDinteractionsFilter = {
  and?: InputMaybe<Array<InputMaybe<G6PDinteractionsFilter>>>;
  has?: InputMaybe<Array<InputMaybe<G6PDinteractionsHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringHashFilter_StringTermFilter>;
  not?: InputMaybe<G6PDinteractionsFilter>;
  or?: InputMaybe<Array<InputMaybe<G6PDinteractionsFilter>>>;
};

export enum G6PDinteractionsHasFilter {
  Cat = 'CAT',
  Commentary = 'commentary',
  Name = 'name'
}

export type G6PDinteractionsOrder = {
  asc?: InputMaybe<G6PDinteractionsOrderable>;
  desc?: InputMaybe<G6PDinteractionsOrderable>;
  then?: InputMaybe<G6PDinteractionsOrder>;
};

export enum G6PDinteractionsOrderable {
  Cat = 'CAT',
  Commentary = 'commentary',
  Name = 'name'
}

export type G6PDinteractionsPatch = {
  CAT?: InputMaybe<Scalars['String']>;
  commentary?: InputMaybe<Scalars['String']>;
};

export type G6PDinteractionsRef = {
  CAT?: InputMaybe<Scalars['String']>;
  commentary?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']>;
  delete?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']>;
  get?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']>;
  ge?: InputMaybe<Scalars['Int64']>;
  gt?: InputMaybe<Scalars['Int64']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']>>>;
  le?: InputMaybe<Scalars['Int64']>;
  lt?: InputMaybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
};

export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addANSMClasses?: Maybe<AddAnsmClassesPayload>;
  addANSMInteractions?: Maybe<AddAnsmInteractionsPayload>;
  addANSMMolecules?: Maybe<AddAnsmMoleculesPayload>;
  addBFDrugsInteractions?: Maybe<AddBfDrugsInteractionsPayload>;
  addDrugBankLink?: Maybe<AddDrugBankLinkPayload>;
  addG6PDinteractions?: Maybe<AddG6PDinteractionsPayload>;
  addPregnancyInteractions?: Maybe<AddPregnancyInteractionsPayload>;
  addRXClassConcept?: Maybe<AddRxClassConceptPayload>;
  addRXConcept?: Maybe<AddRxConceptPayload>;
  addRXNavMedicalInteraction?: Maybe<AddRxNavMedicalInteractionPayload>;
  deleteANSMClasses?: Maybe<DeleteAnsmClassesPayload>;
  deleteANSMInteractions?: Maybe<DeleteAnsmInteractionsPayload>;
  deleteANSMMolecules?: Maybe<DeleteAnsmMoleculesPayload>;
  deleteBFDrugsInteractions?: Maybe<DeleteBfDrugsInteractionsPayload>;
  deleteDrugBankLink?: Maybe<DeleteDrugBankLinkPayload>;
  deleteG6PDinteractions?: Maybe<DeleteG6PDinteractionsPayload>;
  deletePregnancyInteractions?: Maybe<DeletePregnancyInteractionsPayload>;
  deleteRXClassConcept?: Maybe<DeleteRxClassConceptPayload>;
  deleteRXConcept?: Maybe<DeleteRxConceptPayload>;
  deleteRXNavMedicalInteraction?: Maybe<DeleteRxNavMedicalInteractionPayload>;
  updateANSMClasses?: Maybe<UpdateAnsmClassesPayload>;
  updateANSMInteractions?: Maybe<UpdateAnsmInteractionsPayload>;
  updateANSMMolecules?: Maybe<UpdateAnsmMoleculesPayload>;
  updateBFDrugsInteractions?: Maybe<UpdateBfDrugsInteractionsPayload>;
  updateDrugBankLink?: Maybe<UpdateDrugBankLinkPayload>;
  updateG6PDinteractions?: Maybe<UpdateG6PDinteractionsPayload>;
  updatePregnancyInteractions?: Maybe<UpdatePregnancyInteractionsPayload>;
  updateRXClassConcept?: Maybe<UpdateRxClassConceptPayload>;
  updateRXConcept?: Maybe<UpdateRxConceptPayload>;
  updateRXNavMedicalInteraction?: Maybe<UpdateRxNavMedicalInteractionPayload>;
};


export type MutationAddAnsmClassesArgs = {
  input: Array<AddAnsmClassesInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddAnsmInteractionsArgs = {
  input: Array<AddAnsmInteractionsInput>;
};


export type MutationAddAnsmMoleculesArgs = {
  input: Array<AddAnsmMoleculesInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddBfDrugsInteractionsArgs = {
  input: Array<AddBfDrugsInteractionsInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddDrugBankLinkArgs = {
  input: Array<AddDrugBankLinkInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddG6PDinteractionsArgs = {
  input: Array<AddG6PDinteractionsInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddPregnancyInteractionsArgs = {
  input: Array<AddPregnancyInteractionsInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddRxClassConceptArgs = {
  input: Array<AddRxClassConceptInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddRxConceptArgs = {
  input: Array<AddRxConceptInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddRxNavMedicalInteractionArgs = {
  input: Array<AddRxNavMedicalInteractionInput>;
};


export type MutationDeleteAnsmClassesArgs = {
  filter: AnsmClassesFilter;
};


export type MutationDeleteAnsmInteractionsArgs = {
  filter: AnsmInteractionsFilter;
};


export type MutationDeleteAnsmMoleculesArgs = {
  filter: AnsmMoleculesFilter;
};


export type MutationDeleteBfDrugsInteractionsArgs = {
  filter: BfDrugsInteractionsFilter;
};


export type MutationDeleteDrugBankLinkArgs = {
  filter: DrugBankLinkFilter;
};


export type MutationDeleteG6PDinteractionsArgs = {
  filter: G6PDinteractionsFilter;
};


export type MutationDeletePregnancyInteractionsArgs = {
  filter: PregnancyInteractionsFilter;
};


export type MutationDeleteRxClassConceptArgs = {
  filter: RxClassConceptFilter;
};


export type MutationDeleteRxConceptArgs = {
  filter: RxConceptFilter;
};


export type MutationDeleteRxNavMedicalInteractionArgs = {
  filter: RxNavMedicalInteractionFilter;
};


export type MutationUpdateAnsmClassesArgs = {
  input: UpdateAnsmClassesInput;
};


export type MutationUpdateAnsmInteractionsArgs = {
  input: UpdateAnsmInteractionsInput;
};


export type MutationUpdateAnsmMoleculesArgs = {
  input: UpdateAnsmMoleculesInput;
};


export type MutationUpdateBfDrugsInteractionsArgs = {
  input: UpdateBfDrugsInteractionsInput;
};


export type MutationUpdateDrugBankLinkArgs = {
  input: UpdateDrugBankLinkInput;
};


export type MutationUpdateG6PDinteractionsArgs = {
  input: UpdateG6PDinteractionsInput;
};


export type MutationUpdatePregnancyInteractionsArgs = {
  input: UpdatePregnancyInteractionsInput;
};


export type MutationUpdateRxClassConceptArgs = {
  input: UpdateRxClassConceptInput;
};


export type MutationUpdateRxConceptArgs = {
  input: UpdateRxConceptInput;
};


export type MutationUpdateRxNavMedicalInteractionArgs = {
  input: UpdateRxNavMedicalInteractionInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type PregnancyInteractions = {
  __typename?: 'PregnancyInteractions';
  Category?: Maybe<PregnancyInteractionsCategories>;
  Observation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PregnancyInteractionsAggregateResult = {
  __typename?: 'PregnancyInteractionsAggregateResult';
  ObservationMax?: Maybe<Scalars['String']>;
  ObservationMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export enum PregnancyInteractionsCategories {
  A = 'A',
  B1 = 'B1',
  B2 = 'B2',
  B3 = 'B3',
  C = 'C',
  D = 'D',
  X = 'X'
}

export type PregnancyInteractionsFilter = {
  and?: InputMaybe<Array<InputMaybe<PregnancyInteractionsFilter>>>;
  has?: InputMaybe<Array<InputMaybe<PregnancyInteractionsHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringHashFilter_StringTermFilter>;
  not?: InputMaybe<PregnancyInteractionsFilter>;
  or?: InputMaybe<Array<InputMaybe<PregnancyInteractionsFilter>>>;
};

export enum PregnancyInteractionsHasFilter {
  Category = 'Category',
  Observation = 'Observation',
  Name = 'name'
}

export type PregnancyInteractionsOrder = {
  asc?: InputMaybe<PregnancyInteractionsOrderable>;
  desc?: InputMaybe<PregnancyInteractionsOrderable>;
  then?: InputMaybe<PregnancyInteractionsOrder>;
};

export enum PregnancyInteractionsOrderable {
  Observation = 'Observation',
  Name = 'name'
}

export type PregnancyInteractionsPatch = {
  Category?: InputMaybe<PregnancyInteractionsCategories>;
  Observation?: InputMaybe<Scalars['String']>;
};

export type PregnancyInteractionsRef = {
  Category?: InputMaybe<PregnancyInteractionsCategories>;
  Observation?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateANSMClasses?: Maybe<AnsmClassesAggregateResult>;
  aggregateANSMInteractions?: Maybe<AnsmInteractionsAggregateResult>;
  aggregateANSMMolecules?: Maybe<AnsmMoleculesAggregateResult>;
  aggregateBFDrugsInteractions?: Maybe<BfDrugsInteractionsAggregateResult>;
  aggregateDrugBankLink?: Maybe<DrugBankLinkAggregateResult>;
  aggregateG6PDinteractions?: Maybe<G6PDinteractionsAggregateResult>;
  aggregatePregnancyInteractions?: Maybe<PregnancyInteractionsAggregateResult>;
  aggregateRXClassConcept?: Maybe<RxClassConceptAggregateResult>;
  aggregateRXConcept?: Maybe<RxConceptAggregateResult>;
  aggregateRXNavMedicalInteraction?: Maybe<RxNavMedicalInteractionAggregateResult>;
  getANSMClasses?: Maybe<AnsmClasses>;
  getANSMInteractions?: Maybe<AnsmInteractions>;
  getANSMMolecules?: Maybe<AnsmMolecules>;
  getBFDrugsInteractions?: Maybe<BfDrugsInteractions>;
  getDrugBankLink?: Maybe<DrugBankLink>;
  getG6PDinteractions?: Maybe<G6PDinteractions>;
  getPregnancyInteractions?: Maybe<PregnancyInteractions>;
  getRXClassConcept?: Maybe<RxClassConcept>;
  getRXConcept?: Maybe<RxConcept>;
  getRXNavMedicalInteraction?: Maybe<RxNavMedicalInteraction>;
  queryANSMClasses?: Maybe<Array<Maybe<AnsmClasses>>>;
  queryANSMInteractions?: Maybe<Array<Maybe<AnsmInteractions>>>;
  queryANSMMolecules?: Maybe<Array<Maybe<AnsmMolecules>>>;
  queryBFDrugsInteractions?: Maybe<Array<Maybe<BfDrugsInteractions>>>;
  queryDrugBankLink?: Maybe<Array<Maybe<DrugBankLink>>>;
  queryG6PDinteractions?: Maybe<Array<Maybe<G6PDinteractions>>>;
  queryPregnancyInteractions?: Maybe<Array<Maybe<PregnancyInteractions>>>;
  queryRXClassConcept?: Maybe<Array<Maybe<RxClassConcept>>>;
  queryRXConcept?: Maybe<Array<Maybe<RxConcept>>>;
  queryRXNavMedicalInteraction?: Maybe<Array<Maybe<RxNavMedicalInteraction>>>;
};


export type QueryAggregateAnsmClassesArgs = {
  filter?: InputMaybe<AnsmClassesFilter>;
};


export type QueryAggregateAnsmInteractionsArgs = {
  filter?: InputMaybe<AnsmInteractionsFilter>;
};


export type QueryAggregateAnsmMoleculesArgs = {
  filter?: InputMaybe<AnsmMoleculesFilter>;
};


export type QueryAggregateBfDrugsInteractionsArgs = {
  filter?: InputMaybe<BfDrugsInteractionsFilter>;
};


export type QueryAggregateDrugBankLinkArgs = {
  filter?: InputMaybe<DrugBankLinkFilter>;
};


export type QueryAggregateG6PDinteractionsArgs = {
  filter?: InputMaybe<G6PDinteractionsFilter>;
};


export type QueryAggregatePregnancyInteractionsArgs = {
  filter?: InputMaybe<PregnancyInteractionsFilter>;
};


export type QueryAggregateRxClassConceptArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


export type QueryAggregateRxConceptArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


export type QueryAggregateRxNavMedicalInteractionArgs = {
  filter?: InputMaybe<RxNavMedicalInteractionFilter>;
};


export type QueryGetAnsmClassesArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetAnsmInteractionsArgs = {
  id: Scalars['ID'];
};


export type QueryGetAnsmMoleculesArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetBfDrugsInteractionsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetDrugBankLinkArgs = {
  drugBankId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetG6PDinteractionsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetPregnancyInteractionsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetRxClassConceptArgs = {
  classId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetRxConceptArgs = {
  id?: InputMaybe<Scalars['ID']>;
  rxcui?: InputMaybe<Scalars['String']>;
};


export type QueryGetRxNavMedicalInteractionArgs = {
  id: Scalars['ID'];
};


export type QueryQueryAnsmClassesArgs = {
  filter?: InputMaybe<AnsmClassesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmClassesOrder>;
};


export type QueryQueryAnsmInteractionsArgs = {
  filter?: InputMaybe<AnsmInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmInteractionsOrder>;
};


export type QueryQueryAnsmMoleculesArgs = {
  filter?: InputMaybe<AnsmMoleculesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmMoleculesOrder>;
};


export type QueryQueryBfDrugsInteractionsArgs = {
  filter?: InputMaybe<BfDrugsInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<BfDrugsInteractionsOrder>;
};


export type QueryQueryDrugBankLinkArgs = {
  filter?: InputMaybe<DrugBankLinkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DrugBankLinkOrder>;
};


export type QueryQueryG6PDinteractionsArgs = {
  filter?: InputMaybe<G6PDinteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<G6PDinteractionsOrder>;
};


export type QueryQueryPregnancyInteractionsArgs = {
  filter?: InputMaybe<PregnancyInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PregnancyInteractionsOrder>;
};


export type QueryQueryRxClassConceptArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


export type QueryQueryRxConceptArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


export type QueryQueryRxNavMedicalInteractionArgs = {
  filter?: InputMaybe<RxNavMedicalInteractionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxNavMedicalInteractionOrder>;
};

/** Main RxNav Class concept type */
export type RxClassConcept = {
  __typename?: 'RXClassConcept';
  childClasses?: Maybe<Array<Maybe<RxClassConcept>>>;
  childClassesAggregate?: Maybe<RxClassConceptAggregateResult>;
  classId: Scalars['String'];
  class_ATC4?: Maybe<Array<Maybe<RxConcept>>>;
  class_ATC4Aggregate?: Maybe<RxConceptAggregateResult>;
  class_MESHPA?: Maybe<Array<Maybe<RxConcept>>>;
  class_MESHPAAggregate?: Maybe<RxConceptAggregateResult>;
  class_ci_chemclass?: Maybe<Array<Maybe<RxConcept>>>;
  class_ci_chemclassAggregate?: Maybe<RxConceptAggregateResult>;
  class_ci_moa?: Maybe<Array<Maybe<RxConcept>>>;
  class_ci_moaAggregate?: Maybe<RxConceptAggregateResult>;
  class_ci_pe?: Maybe<Array<Maybe<RxConcept>>>;
  class_ci_peAggregate?: Maybe<RxConceptAggregateResult>;
  class_ci_with?: Maybe<Array<Maybe<RxConcept>>>;
  class_ci_withAggregate?: Maybe<RxConceptAggregateResult>;
  class_has_VAClass?: Maybe<Array<Maybe<RxConcept>>>;
  class_has_VAClassAggregate?: Maybe<RxConceptAggregateResult>;
  class_has_VAClass_extended?: Maybe<Array<Maybe<RxConcept>>>;
  class_has_VAClass_extendedAggregate?: Maybe<RxConceptAggregateResult>;
  class_has_active_metabolites?: Maybe<Array<Maybe<RxConcept>>>;
  class_has_active_metabolitesAggregate?: Maybe<RxConceptAggregateResult>;
  class_has_chemical_structure?: Maybe<Array<Maybe<RxConcept>>>;
  class_has_chemical_structureAggregate?: Maybe<RxConceptAggregateResult>;
  class_has_epc?: Maybe<Array<Maybe<RxConcept>>>;
  class_has_epcAggregate?: Maybe<RxConceptAggregateResult>;
  class_has_ingredient?: Maybe<Array<Maybe<RxConcept>>>;
  class_has_ingredientAggregate?: Maybe<RxConceptAggregateResult>;
  class_has_moa?: Maybe<Array<Maybe<RxConcept>>>;
  class_has_moaAggregate?: Maybe<RxConceptAggregateResult>;
  class_has_pe?: Maybe<Array<Maybe<RxConcept>>>;
  class_has_peAggregate?: Maybe<RxConceptAggregateResult>;
  class_has_pk?: Maybe<Array<Maybe<RxConcept>>>;
  class_has_pkAggregate?: Maybe<RxConceptAggregateResult>;
  class_induces?: Maybe<Array<Maybe<RxConcept>>>;
  class_inducesAggregate?: Maybe<RxConceptAggregateResult>;
  class_may_diagnose?: Maybe<Array<Maybe<RxConcept>>>;
  class_may_diagnoseAggregate?: Maybe<RxConceptAggregateResult>;
  class_may_prevent?: Maybe<Array<Maybe<RxConcept>>>;
  class_may_preventAggregate?: Maybe<RxConceptAggregateResult>;
  class_may_treat?: Maybe<Array<Maybe<RxConcept>>>;
  class_may_treatAggregate?: Maybe<RxConceptAggregateResult>;
  class_site_of_metabolism?: Maybe<Array<Maybe<RxConcept>>>;
  class_site_of_metabolismAggregate?: Maybe<RxConceptAggregateResult>;
  id: Scalars['ID'];
  minClass?: Maybe<Scalars['Boolean']>;
  parentClass?: Maybe<Array<Maybe<RxClassConcept>>>;
  parentClassAggregate?: Maybe<RxClassConceptAggregateResult>;
  rxClassName?: Maybe<Scalars['String']>;
  rxClassType?: Maybe<RxClassTypes>;
};


/** Main RxNav Class concept type */
export type RxClassConceptChildClassesArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptChildClassesAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Atc4Args = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Atc4AggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_MeshpaArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_MeshpaAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Ci_ChemclassArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Ci_ChemclassAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Ci_MoaArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Ci_MoaAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Ci_PeArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Ci_PeAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Ci_WithArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Ci_WithAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_VaClassArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_VaClassAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_VaClass_ExtendedArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_VaClass_ExtendedAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_Active_MetabolitesArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_Active_MetabolitesAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_Chemical_StructureArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_Chemical_StructureAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_EpcArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_EpcAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_IngredientArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_IngredientAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_MoaArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_MoaAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_PeArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_PeAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_PkArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Has_PkAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_InducesArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_InducesAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_May_DiagnoseArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_May_DiagnoseAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_May_PreventArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_May_PreventAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_May_TreatArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_May_TreatAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Site_Of_MetabolismArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptClass_Site_Of_MetabolismAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav Class concept type */
export type RxClassConceptParentClassArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav Class concept type */
export type RxClassConceptParentClassAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};

export type RxClassConceptAggregateResult = {
  __typename?: 'RXClassConceptAggregateResult';
  classIdMax?: Maybe<Scalars['String']>;
  classIdMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  rxClassNameMax?: Maybe<Scalars['String']>;
  rxClassNameMin?: Maybe<Scalars['String']>;
};

export type RxClassConceptFilter = {
  and?: InputMaybe<Array<InputMaybe<RxClassConceptFilter>>>;
  classId?: InputMaybe<StringHashFilter_StringTermFilter>;
  has?: InputMaybe<Array<InputMaybe<RxClassConceptHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<RxClassConceptFilter>;
  or?: InputMaybe<Array<InputMaybe<RxClassConceptFilter>>>;
  rxClassName?: InputMaybe<StringFullTextFilter_StringHashFilter_StringTermFilter>;
};

export enum RxClassConceptHasFilter {
  ChildClasses = 'childClasses',
  ClassId = 'classId',
  ClassAtc4 = 'class_ATC4',
  ClassMeshpa = 'class_MESHPA',
  ClassCiChemclass = 'class_ci_chemclass',
  ClassCiMoa = 'class_ci_moa',
  ClassCiPe = 'class_ci_pe',
  ClassCiWith = 'class_ci_with',
  ClassHasVaClass = 'class_has_VAClass',
  ClassHasVaClassExtended = 'class_has_VAClass_extended',
  ClassHasActiveMetabolites = 'class_has_active_metabolites',
  ClassHasChemicalStructure = 'class_has_chemical_structure',
  ClassHasEpc = 'class_has_epc',
  ClassHasIngredient = 'class_has_ingredient',
  ClassHasMoa = 'class_has_moa',
  ClassHasPe = 'class_has_pe',
  ClassHasPk = 'class_has_pk',
  ClassInduces = 'class_induces',
  ClassMayDiagnose = 'class_may_diagnose',
  ClassMayPrevent = 'class_may_prevent',
  ClassMayTreat = 'class_may_treat',
  ClassSiteOfMetabolism = 'class_site_of_metabolism',
  MinClass = 'minClass',
  ParentClass = 'parentClass',
  RxClassName = 'rxClassName',
  RxClassType = 'rxClassType'
}

export type RxClassConceptOrder = {
  asc?: InputMaybe<RxClassConceptOrderable>;
  desc?: InputMaybe<RxClassConceptOrderable>;
  then?: InputMaybe<RxClassConceptOrder>;
};

export enum RxClassConceptOrderable {
  ClassId = 'classId',
  RxClassName = 'rxClassName'
}

export type RxClassConceptPatch = {
  childClasses?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  class_ATC4?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_MESHPA?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_chemclass?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_moa?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_pe?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_with?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_VAClass?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_VAClass_extended?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_active_metabolites?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_chemical_structure?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_epc?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_ingredient?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_moa?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_pe?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_pk?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_induces?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_may_diagnose?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_may_prevent?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_may_treat?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_site_of_metabolism?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  minClass?: InputMaybe<Scalars['Boolean']>;
  parentClass?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  rxClassName?: InputMaybe<Scalars['String']>;
  rxClassType?: InputMaybe<RxClassTypes>;
};

export type RxClassConceptRef = {
  childClasses?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  classId?: InputMaybe<Scalars['String']>;
  class_ATC4?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_MESHPA?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_chemclass?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_moa?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_pe?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_ci_with?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_VAClass?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_VAClass_extended?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_active_metabolites?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_chemical_structure?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_epc?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_ingredient?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_moa?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_pe?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_has_pk?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_induces?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_may_diagnose?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_may_prevent?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_may_treat?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  class_site_of_metabolism?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  id?: InputMaybe<Scalars['ID']>;
  minClass?: InputMaybe<Scalars['Boolean']>;
  parentClass?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  rxClassName?: InputMaybe<Scalars['String']>;
  rxClassType?: InputMaybe<RxClassTypes>;
};

export enum RxClassTypes {
  Atc1_4 = 'ATC1_4',
  Chem = 'CHEM',
  Disease = 'DISEASE',
  Epc = 'EPC',
  Meshpa = 'MESHPA',
  Moa = 'MOA',
  Pe = 'PE',
  Pk = 'PK',
  Va = 'VA'
}

/** Main RxNav concept type */
export type RxConcept = {
  __typename?: 'RXConcept';
  concept_ATC4?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_ATC4Aggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_MESHPA?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_MESHPAAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_ci_chemclass?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_ci_chemclassAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_ci_moa?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_ci_moaAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_ci_pe?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_ci_peAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_ci_with?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_ci_withAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_has_VAClass?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_has_VAClassAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_has_VAClass_extended?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_has_VAClass_extendedAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_has_active_metabolites?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_has_active_metabolitesAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_has_chemical_structure?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_has_chemical_structureAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_has_epc?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_has_epcAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_has_ingredient?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_has_ingredientAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_has_moa?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_has_moaAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_has_pe?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_has_peAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_has_pk?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_has_pkAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_induces?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_inducesAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_may_diagnose?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_may_diagnoseAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_may_prevent?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_may_preventAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_may_treat?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_may_treatAggregate?: Maybe<RxClassConceptAggregateResult>;
  concept_site_of_metabolism?: Maybe<Array<Maybe<RxClassConcept>>>;
  concept_site_of_metabolismAggregate?: Maybe<RxClassConceptAggregateResult>;
  concepts?: Maybe<Array<Maybe<RxConcept>>>;
  conceptsAggregate?: Maybe<RxConceptAggregateResult>;
  drugBankLink?: Maybe<DrugBankLink>;
  id: Scalars['ID'];
  interactions?: Maybe<Array<Maybe<RxNavMedicalInteraction>>>;
  interactionsAggregate?: Maybe<RxNavMedicalInteractionAggregateResult>;
  minConcept?: Maybe<Array<Maybe<RxConcept>>>;
  minConceptAggregate?: Maybe<RxConceptAggregateResult>;
  name: Scalars['String'];
  rxcui: Scalars['String'];
  tty?: Maybe<Scalars['String']>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Atc4Args = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Atc4AggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_MeshpaArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_MeshpaAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Ci_ChemclassArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Ci_ChemclassAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Ci_MoaArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Ci_MoaAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Ci_PeArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Ci_PeAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Ci_WithArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Ci_WithAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_VaClassArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_VaClassAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_VaClass_ExtendedArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_VaClass_ExtendedAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_Active_MetabolitesArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_Active_MetabolitesAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_Chemical_StructureArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_Chemical_StructureAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_EpcArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_EpcAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_IngredientArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_IngredientAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_MoaArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_MoaAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_PeArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_PeAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_PkArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Has_PkAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_InducesArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_InducesAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_May_DiagnoseArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_May_DiagnoseAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_May_PreventArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_May_PreventAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_May_TreatArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_May_TreatAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Site_Of_MetabolismArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConcept_Site_Of_MetabolismAggregateArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptConceptsArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptConceptsAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};


/** Main RxNav concept type */
export type RxConceptDrugBankLinkArgs = {
  filter?: InputMaybe<DrugBankLinkFilter>;
};


/** Main RxNav concept type */
export type RxConceptInteractionsArgs = {
  filter?: InputMaybe<RxNavMedicalInteractionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxNavMedicalInteractionOrder>;
};


/** Main RxNav concept type */
export type RxConceptInteractionsAggregateArgs = {
  filter?: InputMaybe<RxNavMedicalInteractionFilter>;
};


/** Main RxNav concept type */
export type RxConceptMinConceptArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


/** Main RxNav concept type */
export type RxConceptMinConceptAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};

export type RxConceptAggregateResult = {
  __typename?: 'RXConceptAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
  rxcuiMax?: Maybe<Scalars['String']>;
  rxcuiMin?: Maybe<Scalars['String']>;
  ttyMax?: Maybe<Scalars['String']>;
  ttyMin?: Maybe<Scalars['String']>;
};

export type RxConceptFilter = {
  and?: InputMaybe<Array<InputMaybe<RxConceptFilter>>>;
  has?: InputMaybe<Array<InputMaybe<RxConceptHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringHashFilter_StringTermFilter>;
  not?: InputMaybe<RxConceptFilter>;
  or?: InputMaybe<Array<InputMaybe<RxConceptFilter>>>;
  rxcui?: InputMaybe<StringHashFilter_StringTermFilter>;
  tty?: InputMaybe<StringTermFilter>;
};

export enum RxConceptHasFilter {
  ConceptAtc4 = 'concept_ATC4',
  ConceptMeshpa = 'concept_MESHPA',
  ConceptCiChemclass = 'concept_ci_chemclass',
  ConceptCiMoa = 'concept_ci_moa',
  ConceptCiPe = 'concept_ci_pe',
  ConceptCiWith = 'concept_ci_with',
  ConceptHasVaClass = 'concept_has_VAClass',
  ConceptHasVaClassExtended = 'concept_has_VAClass_extended',
  ConceptHasActiveMetabolites = 'concept_has_active_metabolites',
  ConceptHasChemicalStructure = 'concept_has_chemical_structure',
  ConceptHasEpc = 'concept_has_epc',
  ConceptHasIngredient = 'concept_has_ingredient',
  ConceptHasMoa = 'concept_has_moa',
  ConceptHasPe = 'concept_has_pe',
  ConceptHasPk = 'concept_has_pk',
  ConceptInduces = 'concept_induces',
  ConceptMayDiagnose = 'concept_may_diagnose',
  ConceptMayPrevent = 'concept_may_prevent',
  ConceptMayTreat = 'concept_may_treat',
  ConceptSiteOfMetabolism = 'concept_site_of_metabolism',
  Concepts = 'concepts',
  DrugBankLink = 'drugBankLink',
  Interactions = 'interactions',
  MinConcept = 'minConcept',
  Name = 'name',
  Rxcui = 'rxcui',
  Tty = 'tty'
}

export type RxConceptOrder = {
  asc?: InputMaybe<RxConceptOrderable>;
  desc?: InputMaybe<RxConceptOrderable>;
  then?: InputMaybe<RxConceptOrder>;
};

export enum RxConceptOrderable {
  Name = 'name',
  Rxcui = 'rxcui',
  Tty = 'tty'
}

export type RxConceptPatch = {
  concept_ATC4?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_MESHPA?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_chemclass?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_moa?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_pe?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_with?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_VAClass?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_VAClass_extended?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_active_metabolites?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_chemical_structure?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_epc?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_ingredient?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_moa?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_pe?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_pk?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_induces?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_may_diagnose?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_may_prevent?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_may_treat?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_site_of_metabolism?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concepts?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  drugBankLink?: InputMaybe<DrugBankLinkRef>;
  interactions?: InputMaybe<Array<InputMaybe<RxNavMedicalInteractionRef>>>;
  minConcept?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  name?: InputMaybe<Scalars['String']>;
  tty?: InputMaybe<Scalars['String']>;
};

export type RxConceptRef = {
  concept_ATC4?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_MESHPA?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_chemclass?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_moa?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_pe?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_ci_with?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_VAClass?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_VAClass_extended?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_active_metabolites?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_chemical_structure?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_epc?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_ingredient?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_moa?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_pe?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_has_pk?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_induces?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_may_diagnose?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_may_prevent?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_may_treat?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concept_site_of_metabolism?: InputMaybe<Array<InputMaybe<RxClassConceptRef>>>;
  concepts?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  drugBankLink?: InputMaybe<DrugBankLinkRef>;
  id?: InputMaybe<Scalars['ID']>;
  interactions?: InputMaybe<Array<InputMaybe<RxNavMedicalInteractionRef>>>;
  minConcept?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  name?: InputMaybe<Scalars['String']>;
  rxcui?: InputMaybe<Scalars['String']>;
  tty?: InputMaybe<Scalars['String']>;
};

export type RxNavMedicalInteraction = {
  __typename?: 'RXNavMedicalInteraction';
  concepts?: Maybe<Array<Maybe<RxConcept>>>;
  conceptsAggregate?: Maybe<RxConceptAggregateResult>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  severity?: Maybe<Scalars['String']>;
};


export type RxNavMedicalInteractionConceptsArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};


export type RxNavMedicalInteractionConceptsAggregateArgs = {
  filter?: InputMaybe<RxConceptFilter>;
};

export type RxNavMedicalInteractionAggregateResult = {
  __typename?: 'RXNavMedicalInteractionAggregateResult';
  count?: Maybe<Scalars['Int']>;
  descriptionMax?: Maybe<Scalars['String']>;
  descriptionMin?: Maybe<Scalars['String']>;
  severityMax?: Maybe<Scalars['String']>;
  severityMin?: Maybe<Scalars['String']>;
};

export type RxNavMedicalInteractionFilter = {
  and?: InputMaybe<Array<InputMaybe<RxNavMedicalInteractionFilter>>>;
  has?: InputMaybe<Array<InputMaybe<RxNavMedicalInteractionHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<RxNavMedicalInteractionFilter>;
  or?: InputMaybe<Array<InputMaybe<RxNavMedicalInteractionFilter>>>;
};

export enum RxNavMedicalInteractionHasFilter {
  Concepts = 'concepts',
  Description = 'description',
  Severity = 'severity'
}

export type RxNavMedicalInteractionOrder = {
  asc?: InputMaybe<RxNavMedicalInteractionOrderable>;
  desc?: InputMaybe<RxNavMedicalInteractionOrderable>;
  then?: InputMaybe<RxNavMedicalInteractionOrder>;
};

export enum RxNavMedicalInteractionOrderable {
  Description = 'description',
  Severity = 'severity'
}

export type RxNavMedicalInteractionPatch = {
  concepts?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  description?: InputMaybe<Scalars['String']>;
  severity?: InputMaybe<Scalars['String']>;
};

export type RxNavMedicalInteractionRef = {
  concepts?: InputMaybe<Array<InputMaybe<RxConceptRef>>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  severity?: InputMaybe<Scalars['String']>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']>;
  anyoftext?: InputMaybe<Scalars['String']>;
};

export type StringFullTextFilter_StringHashFilter_StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']>;
  alloftext?: InputMaybe<Scalars['String']>;
  anyofterms?: InputMaybe<Scalars['String']>;
  anyoftext?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringHashFilter_StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']>;
  anyofterms?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']>;
  anyofterms?: InputMaybe<Scalars['String']>;
};

export type UpdateAnsmClassesInput = {
  filter: AnsmClassesFilter;
  remove?: InputMaybe<AnsmClassesPatch>;
  set?: InputMaybe<AnsmClassesPatch>;
};

export type UpdateAnsmClassesPayload = {
  __typename?: 'UpdateANSMClassesPayload';
  aNSMClasses?: Maybe<Array<Maybe<AnsmClasses>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateAnsmClassesPayloadANsmClassesArgs = {
  filter?: InputMaybe<AnsmClassesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmClassesOrder>;
};

export type UpdateAnsmInteractionsInput = {
  filter: AnsmInteractionsFilter;
  remove?: InputMaybe<AnsmInteractionsPatch>;
  set?: InputMaybe<AnsmInteractionsPatch>;
};

export type UpdateAnsmInteractionsPayload = {
  __typename?: 'UpdateANSMInteractionsPayload';
  aNSMInteractions?: Maybe<Array<Maybe<AnsmInteractions>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateAnsmInteractionsPayloadANsmInteractionsArgs = {
  filter?: InputMaybe<AnsmInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmInteractionsOrder>;
};

export type UpdateAnsmMoleculesInput = {
  filter: AnsmMoleculesFilter;
  remove?: InputMaybe<AnsmMoleculesPatch>;
  set?: InputMaybe<AnsmMoleculesPatch>;
};

export type UpdateAnsmMoleculesPayload = {
  __typename?: 'UpdateANSMMoleculesPayload';
  aNSMMolecules?: Maybe<Array<Maybe<AnsmMolecules>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateAnsmMoleculesPayloadANsmMoleculesArgs = {
  filter?: InputMaybe<AnsmMoleculesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AnsmMoleculesOrder>;
};

export type UpdateBfDrugsInteractionsInput = {
  filter: BfDrugsInteractionsFilter;
  remove?: InputMaybe<BfDrugsInteractionsPatch>;
  set?: InputMaybe<BfDrugsInteractionsPatch>;
};

export type UpdateBfDrugsInteractionsPayload = {
  __typename?: 'UpdateBFDrugsInteractionsPayload';
  bFDrugsInteractions?: Maybe<Array<Maybe<BfDrugsInteractions>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateBfDrugsInteractionsPayloadBfDrugsInteractionsArgs = {
  filter?: InputMaybe<BfDrugsInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<BfDrugsInteractionsOrder>;
};

export type UpdateDrugBankLinkInput = {
  filter: DrugBankLinkFilter;
  remove?: InputMaybe<DrugBankLinkPatch>;
  set?: InputMaybe<DrugBankLinkPatch>;
};

export type UpdateDrugBankLinkPayload = {
  __typename?: 'UpdateDrugBankLinkPayload';
  drugBankLink?: Maybe<Array<Maybe<DrugBankLink>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateDrugBankLinkPayloadDrugBankLinkArgs = {
  filter?: InputMaybe<DrugBankLinkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DrugBankLinkOrder>;
};

export type UpdateG6PDinteractionsInput = {
  filter: G6PDinteractionsFilter;
  remove?: InputMaybe<G6PDinteractionsPatch>;
  set?: InputMaybe<G6PDinteractionsPatch>;
};

export type UpdateG6PDinteractionsPayload = {
  __typename?: 'UpdateG6PDinteractionsPayload';
  g6PDinteractions?: Maybe<Array<Maybe<G6PDinteractions>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateG6PDinteractionsPayloadG6PDinteractionsArgs = {
  filter?: InputMaybe<G6PDinteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<G6PDinteractionsOrder>;
};

export type UpdatePregnancyInteractionsInput = {
  filter: PregnancyInteractionsFilter;
  remove?: InputMaybe<PregnancyInteractionsPatch>;
  set?: InputMaybe<PregnancyInteractionsPatch>;
};

export type UpdatePregnancyInteractionsPayload = {
  __typename?: 'UpdatePregnancyInteractionsPayload';
  numUids?: Maybe<Scalars['Int']>;
  pregnancyInteractions?: Maybe<Array<Maybe<PregnancyInteractions>>>;
};


export type UpdatePregnancyInteractionsPayloadPregnancyInteractionsArgs = {
  filter?: InputMaybe<PregnancyInteractionsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PregnancyInteractionsOrder>;
};

export type UpdateRxClassConceptInput = {
  filter: RxClassConceptFilter;
  remove?: InputMaybe<RxClassConceptPatch>;
  set?: InputMaybe<RxClassConceptPatch>;
};

export type UpdateRxClassConceptPayload = {
  __typename?: 'UpdateRXClassConceptPayload';
  numUids?: Maybe<Scalars['Int']>;
  rXClassConcept?: Maybe<Array<Maybe<RxClassConcept>>>;
};


export type UpdateRxClassConceptPayloadRxClassConceptArgs = {
  filter?: InputMaybe<RxClassConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxClassConceptOrder>;
};

export type UpdateRxConceptInput = {
  filter: RxConceptFilter;
  remove?: InputMaybe<RxConceptPatch>;
  set?: InputMaybe<RxConceptPatch>;
};

export type UpdateRxConceptPayload = {
  __typename?: 'UpdateRXConceptPayload';
  numUids?: Maybe<Scalars['Int']>;
  rXConcept?: Maybe<Array<Maybe<RxConcept>>>;
};


export type UpdateRxConceptPayloadRxConceptArgs = {
  filter?: InputMaybe<RxConceptFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxConceptOrder>;
};

export type UpdateRxNavMedicalInteractionInput = {
  filter: RxNavMedicalInteractionFilter;
  remove?: InputMaybe<RxNavMedicalInteractionPatch>;
  set?: InputMaybe<RxNavMedicalInteractionPatch>;
};

export type UpdateRxNavMedicalInteractionPayload = {
  __typename?: 'UpdateRXNavMedicalInteractionPayload';
  numUids?: Maybe<Scalars['Int']>;
  rXNavMedicalInteraction?: Maybe<Array<Maybe<RxNavMedicalInteraction>>>;
};


export type UpdateRxNavMedicalInteractionPayloadRxNavMedicalInteractionArgs = {
  filter?: InputMaybe<RxNavMedicalInteractionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RxNavMedicalInteractionOrder>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type AddAnsmClassesMutationVariables = Exact<{
  input: Array<AddAnsmClassesInput> | AddAnsmClassesInput;
  upsert?: InputMaybe<Scalars['Boolean']>;
}>;


export type AddAnsmClassesMutation = { __typename?: 'Mutation', addANSMClasses?: { __typename?: 'AddANSMClassesPayload', numUids?: number | null, aNSMClasses?: Array<{ __typename?: 'ANSMClasses', id: string } | null> | null } | null };

export type AddAnsmInteractionsMutationVariables = Exact<{
  input: Array<AddAnsmInteractionsInput> | AddAnsmInteractionsInput;
}>;


export type AddAnsmInteractionsMutation = { __typename?: 'Mutation', addANSMInteractions?: { __typename?: 'AddANSMInteractionsPayload', numUids?: number | null, aNSMInteractions?: Array<{ __typename?: 'ANSMInteractions', id: string, molecules?: Array<{ __typename?: 'ANSMMolecules', name: string } | null> | null, classes?: Array<{ __typename?: 'ANSMClasses', name: string } | null> | null } | null> | null } | null };

export type AddAnsmMoleculesMutationVariables = Exact<{
  input: Array<AddAnsmMoleculesInput> | AddAnsmMoleculesInput;
  upsert?: InputMaybe<Scalars['Boolean']>;
}>;


export type AddAnsmMoleculesMutation = { __typename?: 'Mutation', addANSMMolecules?: { __typename?: 'AddANSMMoleculesPayload', numUids?: number | null, aNSMMolecules?: Array<{ __typename?: 'ANSMMolecules', id: string } | null> | null } | null };

export type AddBfDrugsInteractionsMutationVariables = Exact<{
  input: Array<AddBfDrugsInteractionsInput> | AddBfDrugsInteractionsInput;
  upsert?: InputMaybe<Scalars['Boolean']>;
}>;


export type AddBfDrugsInteractionsMutation = { __typename?: 'Mutation', addBFDrugsInteractions?: { __typename?: 'AddBFDrugsInteractionsPayload', numUids?: number | null, bFDrugsInteractions?: Array<{ __typename?: 'BFDrugsInteractions', id: string } | null> | null } | null };

export type AddG6PDinteractionsMutationVariables = Exact<{
  input: Array<AddG6PDinteractionsInput> | AddG6PDinteractionsInput;
  upsert?: InputMaybe<Scalars['Boolean']>;
}>;


export type AddG6PDinteractionsMutation = { __typename?: 'Mutation', addG6PDinteractions?: { __typename?: 'AddG6PDinteractionsPayload', numUids?: number | null, g6PDinteractions?: Array<{ __typename?: 'G6PDinteractions', id: string } | null> | null } | null };

export type AddPregnancyInteractionsMutationVariables = Exact<{
  input: Array<AddPregnancyInteractionsInput> | AddPregnancyInteractionsInput;
  upsert?: InputMaybe<Scalars['Boolean']>;
}>;


export type AddPregnancyInteractionsMutation = { __typename?: 'Mutation', addPregnancyInteractions?: { __typename?: 'AddPregnancyInteractionsPayload', numUids?: number | null, pregnancyInteractions?: Array<{ __typename?: 'PregnancyInteractions', id: string } | null> | null } | null };

export type AddRxNavMedicalInteractionMutationVariables = Exact<{
  input: Array<AddRxNavMedicalInteractionInput> | AddRxNavMedicalInteractionInput;
}>;


export type AddRxNavMedicalInteractionMutation = { __typename?: 'Mutation', addRXNavMedicalInteraction?: { __typename?: 'AddRXNavMedicalInteractionPayload', numUids?: number | null, rXNavMedicalInteraction?: Array<{ __typename?: 'RXNavMedicalInteraction', id: string, concepts?: Array<{ __typename?: 'RXConcept', name: string, rxcui: string } | null> | null } | null> | null } | null };

export type AddRxClassConceptMutationVariables = Exact<{
  input: Array<AddRxClassConceptInput> | AddRxClassConceptInput;
  upsert?: InputMaybe<Scalars['Boolean']>;
}>;


export type AddRxClassConceptMutation = { __typename?: 'Mutation', addRXClassConcept?: { __typename?: 'AddRXClassConceptPayload', numUids?: number | null, rXClassConcept?: Array<{ __typename?: 'RXClassConcept', id: string } | null> | null } | null };

export type AddRxConceptMutationVariables = Exact<{
  input: Array<AddRxConceptInput> | AddRxConceptInput;
  upsert?: InputMaybe<Scalars['Boolean']>;
}>;


export type AddRxConceptMutation = { __typename?: 'Mutation', addRXConcept?: { __typename?: 'AddRXConceptPayload', numUids?: number | null, rXConcept?: Array<{ __typename?: 'RXConcept', id: string } | null> | null } | null };

export type UpdateRxClassConceptMutationVariables = Exact<{
  input: UpdateRxClassConceptInput;
}>;


export type UpdateRxClassConceptMutation = { __typename?: 'Mutation', updateRXClassConcept?: { __typename?: 'UpdateRXClassConceptPayload', numUids?: number | null, rXClassConcept?: Array<{ __typename?: 'RXClassConcept', id: string } | null> | null } | null };

export type UpdateRxConceptMutationVariables = Exact<{
  input: UpdateRxConceptInput;
}>;


export type UpdateRxConceptMutation = { __typename?: 'Mutation', updateRXConcept?: { __typename?: 'UpdateRXConceptPayload', numUids?: number | null, rXConcept?: Array<{ __typename?: 'RXConcept', id: string, rxcui: string } | null> | null } | null };


export const AddAnsmClassesDocument = gql`
    mutation addANSMClasses($input: [AddANSMClassesInput!]!, $upsert: Boolean) {
  addANSMClasses(input: $input, upsert: $upsert) {
    aNSMClasses {
      id
    }
    numUids
  }
}
    `;
export const AddAnsmInteractionsDocument = gql`
    mutation addANSMInteractions($input: [AddANSMInteractionsInput!]!) {
  addANSMInteractions(input: $input) {
    aNSMInteractions {
      id
      molecules {
        name
      }
      classes {
        name
      }
    }
    numUids
  }
}
    `;
export const AddAnsmMoleculesDocument = gql`
    mutation addANSMMolecules($input: [AddANSMMoleculesInput!]!, $upsert: Boolean) {
  addANSMMolecules(input: $input, upsert: $upsert) {
    aNSMMolecules {
      id
    }
    numUids
  }
}
    `;
export const AddBfDrugsInteractionsDocument = gql`
    mutation addBFDrugsInteractions($input: [AddBFDrugsInteractionsInput!]!, $upsert: Boolean) {
  addBFDrugsInteractions(input: $input, upsert: $upsert) {
    bFDrugsInteractions {
      id
    }
    numUids
  }
}
    `;
export const AddG6PDinteractionsDocument = gql`
    mutation addG6PDinteractions($input: [AddG6PDinteractionsInput!]!, $upsert: Boolean) {
  addG6PDinteractions(input: $input, upsert: $upsert) {
    g6PDinteractions {
      id
    }
    numUids
  }
}
    `;
export const AddPregnancyInteractionsDocument = gql`
    mutation addPregnancyInteractions($input: [AddPregnancyInteractionsInput!]!, $upsert: Boolean) {
  addPregnancyInteractions(input: $input, upsert: $upsert) {
    pregnancyInteractions {
      id
    }
    numUids
  }
}
    `;
export const AddRxNavMedicalInteractionDocument = gql`
    mutation addRXNavMedicalInteraction($input: [AddRXNavMedicalInteractionInput!]!) {
  addRXNavMedicalInteraction(input: $input) {
    rXNavMedicalInteraction {
      id
      concepts {
        name
        rxcui
      }
    }
    numUids
  }
}
    `;
export const AddRxClassConceptDocument = gql`
    mutation addRXClassConcept($input: [AddRXClassConceptInput!]!, $upsert: Boolean) {
  addRXClassConcept(input: $input, upsert: $upsert) {
    rXClassConcept {
      id
    }
    numUids
  }
}
    `;
export const AddRxConceptDocument = gql`
    mutation addRXConcept($input: [AddRXConceptInput!]!, $upsert: Boolean) {
  addRXConcept(input: $input, upsert: $upsert) {
    rXConcept {
      id
    }
    numUids
  }
}
    `;
export const UpdateRxClassConceptDocument = gql`
    mutation updateRXClassConcept($input: UpdateRXClassConceptInput!) {
  updateRXClassConcept(input: $input) {
    rXClassConcept {
      id
    }
    numUids
  }
}
    `;
export const UpdateRxConceptDocument = gql`
    mutation updateRXConcept($input: UpdateRXConceptInput!) {
  updateRXConcept(input: $input) {
    rXConcept {
      id
      rxcui
    }
    numUids
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addANSMClasses(variables: AddAnsmClassesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddAnsmClassesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddAnsmClassesMutation>(AddAnsmClassesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addANSMClasses', 'mutation');
    },
    addANSMInteractions(variables: AddAnsmInteractionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddAnsmInteractionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddAnsmInteractionsMutation>(AddAnsmInteractionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addANSMInteractions', 'mutation');
    },
    addANSMMolecules(variables: AddAnsmMoleculesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddAnsmMoleculesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddAnsmMoleculesMutation>(AddAnsmMoleculesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addANSMMolecules', 'mutation');
    },
    addBFDrugsInteractions(variables: AddBfDrugsInteractionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddBfDrugsInteractionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddBfDrugsInteractionsMutation>(AddBfDrugsInteractionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addBFDrugsInteractions', 'mutation');
    },
    addG6PDinteractions(variables: AddG6PDinteractionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddG6PDinteractionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddG6PDinteractionsMutation>(AddG6PDinteractionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addG6PDinteractions', 'mutation');
    },
    addPregnancyInteractions(variables: AddPregnancyInteractionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddPregnancyInteractionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddPregnancyInteractionsMutation>(AddPregnancyInteractionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addPregnancyInteractions', 'mutation');
    },
    addRXNavMedicalInteraction(variables: AddRxNavMedicalInteractionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddRxNavMedicalInteractionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddRxNavMedicalInteractionMutation>(AddRxNavMedicalInteractionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addRXNavMedicalInteraction', 'mutation');
    },
    addRXClassConcept(variables: AddRxClassConceptMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddRxClassConceptMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddRxClassConceptMutation>(AddRxClassConceptDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addRXClassConcept', 'mutation');
    },
    addRXConcept(variables: AddRxConceptMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddRxConceptMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddRxConceptMutation>(AddRxConceptDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addRXConcept', 'mutation');
    },
    updateRXClassConcept(variables: UpdateRxClassConceptMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateRxClassConceptMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateRxClassConceptMutation>(UpdateRxClassConceptDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateRXClassConcept', 'mutation');
    },
    updateRXConcept(variables: UpdateRxConceptMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateRxConceptMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateRxConceptMutation>(UpdateRxConceptDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateRXConcept', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;