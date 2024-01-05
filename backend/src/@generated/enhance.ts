import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Setting: crudResolvers.SettingCrudResolver,
  MobileDevice: crudResolvers.MobileDeviceCrudResolver,
  Patient: crudResolvers.PatientCrudResolver,
  Consultation: crudResolvers.ConsultationCrudResolver,
  ConsultationList: crudResolvers.ConsultationListCrudResolver,
  ClinicalEvent: crudResolvers.ClinicalEventCrudResolver,
  Prescription: crudResolvers.PrescriptionCrudResolver,
  DocumentTemplate: crudResolvers.DocumentTemplateCrudResolver,
  Economizer: crudResolvers.EconomizerCrudResolver,
  Modality: crudResolvers.ModalityCrudResolver,
  WorkingList: crudResolvers.WorkingListCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Setting: {
    aggregateSetting: actionResolvers.AggregateSettingResolver,
    createManySetting: actionResolvers.CreateManySettingResolver,
    createOneSetting: actionResolvers.CreateOneSettingResolver,
    deleteManySetting: actionResolvers.DeleteManySettingResolver,
    deleteOneSetting: actionResolvers.DeleteOneSettingResolver,
    findFirstSetting: actionResolvers.FindFirstSettingResolver,
    findFirstSettingOrThrow: actionResolvers.FindFirstSettingOrThrowResolver,
    settings: actionResolvers.FindManySettingResolver,
    setting: actionResolvers.FindUniqueSettingResolver,
    getSetting: actionResolvers.FindUniqueSettingOrThrowResolver,
    groupBySetting: actionResolvers.GroupBySettingResolver,
    updateManySetting: actionResolvers.UpdateManySettingResolver,
    updateOneSetting: actionResolvers.UpdateOneSettingResolver,
    upsertOneSetting: actionResolvers.UpsertOneSettingResolver
  },
  MobileDevice: {
    aggregateMobileDevice: actionResolvers.AggregateMobileDeviceResolver,
    createManyMobileDevice: actionResolvers.CreateManyMobileDeviceResolver,
    createOneMobileDevice: actionResolvers.CreateOneMobileDeviceResolver,
    deleteManyMobileDevice: actionResolvers.DeleteManyMobileDeviceResolver,
    deleteOneMobileDevice: actionResolvers.DeleteOneMobileDeviceResolver,
    findFirstMobileDevice: actionResolvers.FindFirstMobileDeviceResolver,
    findFirstMobileDeviceOrThrow: actionResolvers.FindFirstMobileDeviceOrThrowResolver,
    mobileDevices: actionResolvers.FindManyMobileDeviceResolver,
    mobileDevice: actionResolvers.FindUniqueMobileDeviceResolver,
    getMobileDevice: actionResolvers.FindUniqueMobileDeviceOrThrowResolver,
    groupByMobileDevice: actionResolvers.GroupByMobileDeviceResolver,
    updateManyMobileDevice: actionResolvers.UpdateManyMobileDeviceResolver,
    updateOneMobileDevice: actionResolvers.UpdateOneMobileDeviceResolver,
    upsertOneMobileDevice: actionResolvers.UpsertOneMobileDeviceResolver
  },
  Patient: {
    aggregatePatient: actionResolvers.AggregatePatientResolver,
    createManyPatient: actionResolvers.CreateManyPatientResolver,
    createOnePatient: actionResolvers.CreateOnePatientResolver,
    deleteManyPatient: actionResolvers.DeleteManyPatientResolver,
    deleteOnePatient: actionResolvers.DeleteOnePatientResolver,
    findFirstPatient: actionResolvers.FindFirstPatientResolver,
    findFirstPatientOrThrow: actionResolvers.FindFirstPatientOrThrowResolver,
    patients: actionResolvers.FindManyPatientResolver,
    patient: actionResolvers.FindUniquePatientResolver,
    getPatient: actionResolvers.FindUniquePatientOrThrowResolver,
    groupByPatient: actionResolvers.GroupByPatientResolver,
    updateManyPatient: actionResolvers.UpdateManyPatientResolver,
    updateOnePatient: actionResolvers.UpdateOnePatientResolver,
    upsertOnePatient: actionResolvers.UpsertOnePatientResolver
  },
  Consultation: {
    aggregateConsultation: actionResolvers.AggregateConsultationResolver,
    createManyConsultation: actionResolvers.CreateManyConsultationResolver,
    createOneConsultation: actionResolvers.CreateOneConsultationResolver,
    deleteManyConsultation: actionResolvers.DeleteManyConsultationResolver,
    deleteOneConsultation: actionResolvers.DeleteOneConsultationResolver,
    findFirstConsultation: actionResolvers.FindFirstConsultationResolver,
    findFirstConsultationOrThrow: actionResolvers.FindFirstConsultationOrThrowResolver,
    consultations: actionResolvers.FindManyConsultationResolver,
    consultation: actionResolvers.FindUniqueConsultationResolver,
    getConsultation: actionResolvers.FindUniqueConsultationOrThrowResolver,
    groupByConsultation: actionResolvers.GroupByConsultationResolver,
    updateManyConsultation: actionResolvers.UpdateManyConsultationResolver,
    updateOneConsultation: actionResolvers.UpdateOneConsultationResolver,
    upsertOneConsultation: actionResolvers.UpsertOneConsultationResolver
  },
  ConsultationList: {
    aggregateConsultationList: actionResolvers.AggregateConsultationListResolver,
    createManyConsultationList: actionResolvers.CreateManyConsultationListResolver,
    createOneConsultationList: actionResolvers.CreateOneConsultationListResolver,
    deleteManyConsultationList: actionResolvers.DeleteManyConsultationListResolver,
    deleteOneConsultationList: actionResolvers.DeleteOneConsultationListResolver,
    findFirstConsultationList: actionResolvers.FindFirstConsultationListResolver,
    findFirstConsultationListOrThrow: actionResolvers.FindFirstConsultationListOrThrowResolver,
    consultationLists: actionResolvers.FindManyConsultationListResolver,
    consultationList: actionResolvers.FindUniqueConsultationListResolver,
    getConsultationList: actionResolvers.FindUniqueConsultationListOrThrowResolver,
    groupByConsultationList: actionResolvers.GroupByConsultationListResolver,
    updateManyConsultationList: actionResolvers.UpdateManyConsultationListResolver,
    updateOneConsultationList: actionResolvers.UpdateOneConsultationListResolver,
    upsertOneConsultationList: actionResolvers.UpsertOneConsultationListResolver
  },
  ClinicalEvent: {
    aggregateClinicalEvent: actionResolvers.AggregateClinicalEventResolver,
    createManyClinicalEvent: actionResolvers.CreateManyClinicalEventResolver,
    createOneClinicalEvent: actionResolvers.CreateOneClinicalEventResolver,
    deleteManyClinicalEvent: actionResolvers.DeleteManyClinicalEventResolver,
    deleteOneClinicalEvent: actionResolvers.DeleteOneClinicalEventResolver,
    findFirstClinicalEvent: actionResolvers.FindFirstClinicalEventResolver,
    findFirstClinicalEventOrThrow: actionResolvers.FindFirstClinicalEventOrThrowResolver,
    clinicalEvents: actionResolvers.FindManyClinicalEventResolver,
    clinicalEvent: actionResolvers.FindUniqueClinicalEventResolver,
    getClinicalEvent: actionResolvers.FindUniqueClinicalEventOrThrowResolver,
    groupByClinicalEvent: actionResolvers.GroupByClinicalEventResolver,
    updateManyClinicalEvent: actionResolvers.UpdateManyClinicalEventResolver,
    updateOneClinicalEvent: actionResolvers.UpdateOneClinicalEventResolver,
    upsertOneClinicalEvent: actionResolvers.UpsertOneClinicalEventResolver
  },
  Prescription: {
    aggregatePrescription: actionResolvers.AggregatePrescriptionResolver,
    createManyPrescription: actionResolvers.CreateManyPrescriptionResolver,
    createOnePrescription: actionResolvers.CreateOnePrescriptionResolver,
    deleteManyPrescription: actionResolvers.DeleteManyPrescriptionResolver,
    deleteOnePrescription: actionResolvers.DeleteOnePrescriptionResolver,
    findFirstPrescription: actionResolvers.FindFirstPrescriptionResolver,
    findFirstPrescriptionOrThrow: actionResolvers.FindFirstPrescriptionOrThrowResolver,
    prescriptions: actionResolvers.FindManyPrescriptionResolver,
    prescription: actionResolvers.FindUniquePrescriptionResolver,
    getPrescription: actionResolvers.FindUniquePrescriptionOrThrowResolver,
    groupByPrescription: actionResolvers.GroupByPrescriptionResolver,
    updateManyPrescription: actionResolvers.UpdateManyPrescriptionResolver,
    updateOnePrescription: actionResolvers.UpdateOnePrescriptionResolver,
    upsertOnePrescription: actionResolvers.UpsertOnePrescriptionResolver
  },
  DocumentTemplate: {
    aggregateDocumentTemplate: actionResolvers.AggregateDocumentTemplateResolver,
    createManyDocumentTemplate: actionResolvers.CreateManyDocumentTemplateResolver,
    createOneDocumentTemplate: actionResolvers.CreateOneDocumentTemplateResolver,
    deleteManyDocumentTemplate: actionResolvers.DeleteManyDocumentTemplateResolver,
    deleteOneDocumentTemplate: actionResolvers.DeleteOneDocumentTemplateResolver,
    findFirstDocumentTemplate: actionResolvers.FindFirstDocumentTemplateResolver,
    findFirstDocumentTemplateOrThrow: actionResolvers.FindFirstDocumentTemplateOrThrowResolver,
    documentTemplates: actionResolvers.FindManyDocumentTemplateResolver,
    documentTemplate: actionResolvers.FindUniqueDocumentTemplateResolver,
    getDocumentTemplate: actionResolvers.FindUniqueDocumentTemplateOrThrowResolver,
    groupByDocumentTemplate: actionResolvers.GroupByDocumentTemplateResolver,
    updateManyDocumentTemplate: actionResolvers.UpdateManyDocumentTemplateResolver,
    updateOneDocumentTemplate: actionResolvers.UpdateOneDocumentTemplateResolver,
    upsertOneDocumentTemplate: actionResolvers.UpsertOneDocumentTemplateResolver
  },
  Economizer: {
    aggregateEconomizer: actionResolvers.AggregateEconomizerResolver,
    createManyEconomizer: actionResolvers.CreateManyEconomizerResolver,
    createOneEconomizer: actionResolvers.CreateOneEconomizerResolver,
    deleteManyEconomizer: actionResolvers.DeleteManyEconomizerResolver,
    deleteOneEconomizer: actionResolvers.DeleteOneEconomizerResolver,
    findFirstEconomizer: actionResolvers.FindFirstEconomizerResolver,
    findFirstEconomizerOrThrow: actionResolvers.FindFirstEconomizerOrThrowResolver,
    economizers: actionResolvers.FindManyEconomizerResolver,
    economizer: actionResolvers.FindUniqueEconomizerResolver,
    getEconomizer: actionResolvers.FindUniqueEconomizerOrThrowResolver,
    groupByEconomizer: actionResolvers.GroupByEconomizerResolver,
    updateManyEconomizer: actionResolvers.UpdateManyEconomizerResolver,
    updateOneEconomizer: actionResolvers.UpdateOneEconomizerResolver,
    upsertOneEconomizer: actionResolvers.UpsertOneEconomizerResolver
  },
  Modality: {
    aggregateModality: actionResolvers.AggregateModalityResolver,
    createManyModality: actionResolvers.CreateManyModalityResolver,
    createOneModality: actionResolvers.CreateOneModalityResolver,
    deleteManyModality: actionResolvers.DeleteManyModalityResolver,
    deleteOneModality: actionResolvers.DeleteOneModalityResolver,
    findFirstModality: actionResolvers.FindFirstModalityResolver,
    findFirstModalityOrThrow: actionResolvers.FindFirstModalityOrThrowResolver,
    modalities: actionResolvers.FindManyModalityResolver,
    modality: actionResolvers.FindUniqueModalityResolver,
    getModality: actionResolvers.FindUniqueModalityOrThrowResolver,
    groupByModality: actionResolvers.GroupByModalityResolver,
    updateManyModality: actionResolvers.UpdateManyModalityResolver,
    updateOneModality: actionResolvers.UpdateOneModalityResolver,
    upsertOneModality: actionResolvers.UpsertOneModalityResolver
  },
  WorkingList: {
    aggregateWorkingList: actionResolvers.AggregateWorkingListResolver,
    createManyWorkingList: actionResolvers.CreateManyWorkingListResolver,
    createOneWorkingList: actionResolvers.CreateOneWorkingListResolver,
    deleteManyWorkingList: actionResolvers.DeleteManyWorkingListResolver,
    deleteOneWorkingList: actionResolvers.DeleteOneWorkingListResolver,
    findFirstWorkingList: actionResolvers.FindFirstWorkingListResolver,
    findFirstWorkingListOrThrow: actionResolvers.FindFirstWorkingListOrThrowResolver,
    workingLists: actionResolvers.FindManyWorkingListResolver,
    workingList: actionResolvers.FindUniqueWorkingListResolver,
    getWorkingList: actionResolvers.FindUniqueWorkingListOrThrowResolver,
    groupByWorkingList: actionResolvers.GroupByWorkingListResolver,
    updateManyWorkingList: actionResolvers.UpdateManyWorkingListResolver,
    updateOneWorkingList: actionResolvers.UpdateOneWorkingListResolver,
    upsertOneWorkingList: actionResolvers.UpsertOneWorkingListResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Setting: ["aggregateSetting", "createManySetting", "createOneSetting", "deleteManySetting", "deleteOneSetting", "findFirstSetting", "findFirstSettingOrThrow", "settings", "setting", "getSetting", "groupBySetting", "updateManySetting", "updateOneSetting", "upsertOneSetting"],
  MobileDevice: ["aggregateMobileDevice", "createManyMobileDevice", "createOneMobileDevice", "deleteManyMobileDevice", "deleteOneMobileDevice", "findFirstMobileDevice", "findFirstMobileDeviceOrThrow", "mobileDevices", "mobileDevice", "getMobileDevice", "groupByMobileDevice", "updateManyMobileDevice", "updateOneMobileDevice", "upsertOneMobileDevice"],
  Patient: ["aggregatePatient", "createManyPatient", "createOnePatient", "deleteManyPatient", "deleteOnePatient", "findFirstPatient", "findFirstPatientOrThrow", "patients", "patient", "getPatient", "groupByPatient", "updateManyPatient", "updateOnePatient", "upsertOnePatient"],
  Consultation: ["aggregateConsultation", "createManyConsultation", "createOneConsultation", "deleteManyConsultation", "deleteOneConsultation", "findFirstConsultation", "findFirstConsultationOrThrow", "consultations", "consultation", "getConsultation", "groupByConsultation", "updateManyConsultation", "updateOneConsultation", "upsertOneConsultation"],
  ConsultationList: ["aggregateConsultationList", "createManyConsultationList", "createOneConsultationList", "deleteManyConsultationList", "deleteOneConsultationList", "findFirstConsultationList", "findFirstConsultationListOrThrow", "consultationLists", "consultationList", "getConsultationList", "groupByConsultationList", "updateManyConsultationList", "updateOneConsultationList", "upsertOneConsultationList"],
  ClinicalEvent: ["aggregateClinicalEvent", "createManyClinicalEvent", "createOneClinicalEvent", "deleteManyClinicalEvent", "deleteOneClinicalEvent", "findFirstClinicalEvent", "findFirstClinicalEventOrThrow", "clinicalEvents", "clinicalEvent", "getClinicalEvent", "groupByClinicalEvent", "updateManyClinicalEvent", "updateOneClinicalEvent", "upsertOneClinicalEvent"],
  Prescription: ["aggregatePrescription", "createManyPrescription", "createOnePrescription", "deleteManyPrescription", "deleteOnePrescription", "findFirstPrescription", "findFirstPrescriptionOrThrow", "prescriptions", "prescription", "getPrescription", "groupByPrescription", "updateManyPrescription", "updateOnePrescription", "upsertOnePrescription"],
  DocumentTemplate: ["aggregateDocumentTemplate", "createManyDocumentTemplate", "createOneDocumentTemplate", "deleteManyDocumentTemplate", "deleteOneDocumentTemplate", "findFirstDocumentTemplate", "findFirstDocumentTemplateOrThrow", "documentTemplates", "documentTemplate", "getDocumentTemplate", "groupByDocumentTemplate", "updateManyDocumentTemplate", "updateOneDocumentTemplate", "upsertOneDocumentTemplate"],
  Economizer: ["aggregateEconomizer", "createManyEconomizer", "createOneEconomizer", "deleteManyEconomizer", "deleteOneEconomizer", "findFirstEconomizer", "findFirstEconomizerOrThrow", "economizers", "economizer", "getEconomizer", "groupByEconomizer", "updateManyEconomizer", "updateOneEconomizer", "upsertOneEconomizer"],
  Modality: ["aggregateModality", "createManyModality", "createOneModality", "deleteManyModality", "deleteOneModality", "findFirstModality", "findFirstModalityOrThrow", "modalities", "modality", "getModality", "groupByModality", "updateManyModality", "updateOneModality", "upsertOneModality"],
  WorkingList: ["aggregateWorkingList", "createManyWorkingList", "createOneWorkingList", "deleteManyWorkingList", "deleteOneWorkingList", "findFirstWorkingList", "findFirstWorkingListOrThrow", "workingLists", "workingList", "getWorkingList", "groupByWorkingList", "updateManyWorkingList", "updateOneWorkingList", "upsertOneWorkingList"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateSettingArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySettingArgs: ["data", "skipDuplicates"],
  CreateOneSettingArgs: ["data"],
  DeleteManySettingArgs: ["where"],
  DeleteOneSettingArgs: ["where"],
  FindFirstSettingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSettingOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySettingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSettingArgs: ["where"],
  FindUniqueSettingOrThrowArgs: ["where"],
  GroupBySettingArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySettingArgs: ["data", "where"],
  UpdateOneSettingArgs: ["data", "where"],
  UpsertOneSettingArgs: ["where", "create", "update"],
  AggregateMobileDeviceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMobileDeviceArgs: ["data", "skipDuplicates"],
  CreateOneMobileDeviceArgs: ["data"],
  DeleteManyMobileDeviceArgs: ["where"],
  DeleteOneMobileDeviceArgs: ["where"],
  FindFirstMobileDeviceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMobileDeviceOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMobileDeviceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMobileDeviceArgs: ["where"],
  FindUniqueMobileDeviceOrThrowArgs: ["where"],
  GroupByMobileDeviceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMobileDeviceArgs: ["data", "where"],
  UpdateOneMobileDeviceArgs: ["data", "where"],
  UpsertOneMobileDeviceArgs: ["where", "create", "update"],
  AggregatePatientArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPatientArgs: ["data", "skipDuplicates"],
  CreateOnePatientArgs: ["data"],
  DeleteManyPatientArgs: ["where"],
  DeleteOnePatientArgs: ["where"],
  FindFirstPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPatientOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePatientArgs: ["where"],
  FindUniquePatientOrThrowArgs: ["where"],
  GroupByPatientArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPatientArgs: ["data", "where"],
  UpdateOnePatientArgs: ["data", "where"],
  UpsertOnePatientArgs: ["where", "create", "update"],
  AggregateConsultationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyConsultationArgs: ["data", "skipDuplicates"],
  CreateOneConsultationArgs: ["data"],
  DeleteManyConsultationArgs: ["where"],
  DeleteOneConsultationArgs: ["where"],
  FindFirstConsultationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstConsultationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyConsultationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueConsultationArgs: ["where"],
  FindUniqueConsultationOrThrowArgs: ["where"],
  GroupByConsultationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyConsultationArgs: ["data", "where"],
  UpdateOneConsultationArgs: ["data", "where"],
  UpsertOneConsultationArgs: ["where", "create", "update"],
  AggregateConsultationListArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyConsultationListArgs: ["data", "skipDuplicates"],
  CreateOneConsultationListArgs: ["data"],
  DeleteManyConsultationListArgs: ["where"],
  DeleteOneConsultationListArgs: ["where"],
  FindFirstConsultationListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstConsultationListOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyConsultationListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueConsultationListArgs: ["where"],
  FindUniqueConsultationListOrThrowArgs: ["where"],
  GroupByConsultationListArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyConsultationListArgs: ["data", "where"],
  UpdateOneConsultationListArgs: ["data", "where"],
  UpsertOneConsultationListArgs: ["where", "create", "update"],
  AggregateClinicalEventArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyClinicalEventArgs: ["data", "skipDuplicates"],
  CreateOneClinicalEventArgs: ["data"],
  DeleteManyClinicalEventArgs: ["where"],
  DeleteOneClinicalEventArgs: ["where"],
  FindFirstClinicalEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstClinicalEventOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyClinicalEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueClinicalEventArgs: ["where"],
  FindUniqueClinicalEventOrThrowArgs: ["where"],
  GroupByClinicalEventArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyClinicalEventArgs: ["data", "where"],
  UpdateOneClinicalEventArgs: ["data", "where"],
  UpsertOneClinicalEventArgs: ["where", "create", "update"],
  AggregatePrescriptionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPrescriptionArgs: ["data", "skipDuplicates"],
  CreateOnePrescriptionArgs: ["data"],
  DeleteManyPrescriptionArgs: ["where"],
  DeleteOnePrescriptionArgs: ["where"],
  FindFirstPrescriptionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPrescriptionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPrescriptionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePrescriptionArgs: ["where"],
  FindUniquePrescriptionOrThrowArgs: ["where"],
  GroupByPrescriptionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPrescriptionArgs: ["data", "where"],
  UpdateOnePrescriptionArgs: ["data", "where"],
  UpsertOnePrescriptionArgs: ["where", "create", "update"],
  AggregateDocumentTemplateArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyDocumentTemplateArgs: ["data", "skipDuplicates"],
  CreateOneDocumentTemplateArgs: ["data"],
  DeleteManyDocumentTemplateArgs: ["where"],
  DeleteOneDocumentTemplateArgs: ["where"],
  FindFirstDocumentTemplateArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstDocumentTemplateOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDocumentTemplateArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueDocumentTemplateArgs: ["where"],
  FindUniqueDocumentTemplateOrThrowArgs: ["where"],
  GroupByDocumentTemplateArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyDocumentTemplateArgs: ["data", "where"],
  UpdateOneDocumentTemplateArgs: ["data", "where"],
  UpsertOneDocumentTemplateArgs: ["where", "create", "update"],
  AggregateEconomizerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEconomizerArgs: ["data", "skipDuplicates"],
  CreateOneEconomizerArgs: ["data"],
  DeleteManyEconomizerArgs: ["where"],
  DeleteOneEconomizerArgs: ["where"],
  FindFirstEconomizerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstEconomizerOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEconomizerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEconomizerArgs: ["where"],
  FindUniqueEconomizerOrThrowArgs: ["where"],
  GroupByEconomizerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEconomizerArgs: ["data", "where"],
  UpdateOneEconomizerArgs: ["data", "where"],
  UpsertOneEconomizerArgs: ["where", "create", "update"],
  AggregateModalityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyModalityArgs: ["data", "skipDuplicates"],
  CreateOneModalityArgs: ["data"],
  DeleteManyModalityArgs: ["where"],
  DeleteOneModalityArgs: ["where"],
  FindFirstModalityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstModalityOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyModalityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueModalityArgs: ["where"],
  FindUniqueModalityOrThrowArgs: ["where"],
  GroupByModalityArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyModalityArgs: ["data", "where"],
  UpdateOneModalityArgs: ["data", "where"],
  UpsertOneModalityArgs: ["where", "create", "update"],
  AggregateWorkingListArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWorkingListArgs: ["data", "skipDuplicates"],
  CreateOneWorkingListArgs: ["data"],
  DeleteManyWorkingListArgs: ["where"],
  DeleteOneWorkingListArgs: ["where"],
  FindFirstWorkingListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWorkingListOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWorkingListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWorkingListArgs: ["where"],
  FindUniqueWorkingListOrThrowArgs: ["where"],
  GroupByWorkingListArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWorkingListArgs: ["data", "where"],
  UpdateOneWorkingListArgs: ["data", "where"],
  UpsertOneWorkingListArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Patient: relationResolvers.PatientRelationsResolver,
  Consultation: relationResolvers.ConsultationRelationsResolver,
  ConsultationList: relationResolvers.ConsultationListRelationsResolver,
  ClinicalEvent: relationResolvers.ClinicalEventRelationsResolver,
  Prescription: relationResolvers.PrescriptionRelationsResolver,
  Modality: relationResolvers.ModalityRelationsResolver,
  WorkingList: relationResolvers.WorkingListRelationsResolver
};
const relationResolversInfo = {
  User: ["ClinicalEvent", "WorkingList"],
  Patient: ["ConsultationList", "ClinicalEvent", "WorkingList"],
  Consultation: ["ConsultationList"],
  ConsultationList: ["patient", "consultation"],
  ClinicalEvent: ["user", "patient", "Prescription", "WorkingList"],
  Prescription: ["clinicalEvent"],
  Modality: ["WorkingList"],
  WorkingList: ["patient", "modality", "user", "clinicalEvent"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt"],
  Setting: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes"],
  MobileDevice: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  Patient: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed"],
  Consultation: ["id", "day", "month", "year", "createdAt"],
  ConsultationList: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt"],
  ClinicalEvent: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  Prescription: ["id", "clinicalEventId", "savedPrescription", "createdAt", "updatedAt"],
  DocumentTemplate: ["id", "eventType", "template", "empty"],
  Economizer: ["id", "name", "eventType", "template"],
  Modality: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  WorkingList: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSetting: ["_count", "_avg", "_sum", "_min", "_max"],
  SettingGroupBy: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMobileDevice: ["_count", "_min", "_max"],
  MobileDeviceGroupBy: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected", "_count", "_min", "_max"],
  AggregatePatient: ["_count", "_avg", "_sum", "_min", "_max"],
  PatientGroupBy: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateConsultation: ["_count", "_avg", "_sum", "_min", "_max"],
  ConsultationGroupBy: ["id", "day", "month", "year", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateConsultationList: ["_count", "_min", "_max"],
  ConsultationListGroupBy: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateClinicalEvent: ["_count", "_min", "_max"],
  ClinicalEventGroupBy: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "_count", "_min", "_max"],
  AggregatePrescription: ["_count", "_min", "_max"],
  PrescriptionGroupBy: ["id", "clinicalEventId", "savedPrescription", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateDocumentTemplate: ["_count", "_min", "_max"],
  DocumentTemplateGroupBy: ["id", "eventType", "template", "empty", "_count", "_min", "_max"],
  AggregateEconomizer: ["_count", "_min", "_max"],
  EconomizerGroupBy: ["id", "name", "eventType", "template", "_count", "_min", "_max"],
  AggregateModality: ["_count", "_avg", "_sum", "_min", "_max"],
  ModalityGroupBy: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWorkingList: ["_count", "_min", "_max"],
  WorkingListGroupBy: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["ClinicalEvent", "WorkingList"],
  UserCountAggregate: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "_all"],
  UserAvgAggregate: ["searchApiKeyId"],
  UserSumAggregate: ["searchApiKeyId"],
  UserMinAggregate: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt"],
  UserMaxAggregate: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt"],
  SettingCountAggregate: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes", "_all"],
  SettingAvgAggregate: ["allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities"],
  SettingSumAggregate: ["allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities"],
  SettingMinAggregate: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities"],
  SettingMaxAggregate: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities"],
  MobileDeviceCountAggregate: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected", "_all"],
  MobileDeviceMinAggregate: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  MobileDeviceMaxAggregate: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  PatientCount: ["ConsultationList", "ClinicalEvent", "WorkingList"],
  PatientCountAggregate: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "_all"],
  PatientAvgAggregate: ["height", "weight"],
  PatientSumAggregate: ["height", "weight"],
  PatientMinAggregate: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed"],
  PatientMaxAggregate: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed"],
  ConsultationCount: ["ConsultationList"],
  ConsultationCountAggregate: ["id", "day", "month", "year", "createdAt", "_all"],
  ConsultationAvgAggregate: ["day", "month", "year"],
  ConsultationSumAggregate: ["day", "month", "year"],
  ConsultationMinAggregate: ["id", "day", "month", "year", "createdAt"],
  ConsultationMaxAggregate: ["id", "day", "month", "year", "createdAt"],
  ConsultationListCountAggregate: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt", "_all"],
  ConsultationListMinAggregate: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt"],
  ConsultationListMaxAggregate: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt"],
  ClinicalEventCount: ["WorkingList"],
  ClinicalEventCountAggregate: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "_all"],
  ClinicalEventMinAggregate: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  ClinicalEventMaxAggregate: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  PrescriptionCountAggregate: ["id", "clinicalEventId", "savedPrescription", "createdAt", "updatedAt", "_all"],
  PrescriptionMinAggregate: ["id", "clinicalEventId", "createdAt", "updatedAt"],
  PrescriptionMaxAggregate: ["id", "clinicalEventId", "createdAt", "updatedAt"],
  DocumentTemplateCountAggregate: ["id", "eventType", "template", "empty", "_all"],
  DocumentTemplateMinAggregate: ["id", "eventType", "template", "empty"],
  DocumentTemplateMaxAggregate: ["id", "eventType", "template", "empty"],
  EconomizerCountAggregate: ["id", "name", "eventType", "template", "_all"],
  EconomizerMinAggregate: ["id", "name", "eventType", "template"],
  EconomizerMaxAggregate: ["id", "name", "eventType", "template"],
  ModalityCount: ["WorkingList"],
  ModalityCountAggregate: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled", "_all"],
  ModalityAvgAggregate: ["modalityPort"],
  ModalitySumAggregate: ["modalityPort"],
  ModalityMinAggregate: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  ModalityMaxAggregate: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  WorkingListCountAggregate: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "_all"],
  WorkingListMinAggregate: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  WorkingListMaxAggregate: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "ClinicalEvent", "WorkingList"],
  UserOrderByWithRelationInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "ClinicalEvent", "WorkingList"],
  UserWhereUniqueInput: ["id", "email", "userId", "AND", "OR", "NOT", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "ClinicalEvent", "WorkingList"],
  UserOrderByWithAggregationInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt"],
  SettingWhereInput: ["AND", "OR", "NOT", "id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes"],
  SettingOrderByWithRelationInput: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes"],
  SettingWhereUniqueInput: ["id", "AND", "OR", "NOT", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes"],
  SettingOrderByWithAggregationInput: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes", "_count", "_avg", "_max", "_min", "_sum"],
  SettingScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes"],
  MobileDeviceWhereInput: ["AND", "OR", "NOT", "id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  MobileDeviceOrderByWithRelationInput: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  MobileDeviceWhereUniqueInput: ["id", "accessToken", "uuid_accessToken", "AND", "OR", "NOT", "uuid", "mobileDeviceType", "expireAt", "connected"],
  MobileDeviceOrderByWithAggregationInput: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected", "_count", "_max", "_min"],
  MobileDeviceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  PatientWhereInput: ["AND", "OR", "NOT", "id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ConsultationList", "ClinicalEvent", "WorkingList"],
  PatientOrderByWithRelationInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ConsultationList", "ClinicalEvent", "WorkingList"],
  PatientWhereUniqueInput: ["id", "AND", "OR", "NOT", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ConsultationList", "ClinicalEvent", "WorkingList"],
  PatientOrderByWithAggregationInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "_count", "_avg", "_max", "_min", "_sum"],
  PatientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed"],
  ConsultationWhereInput: ["AND", "OR", "NOT", "id", "day", "month", "year", "createdAt", "ConsultationList"],
  ConsultationOrderByWithRelationInput: ["id", "day", "month", "year", "createdAt", "ConsultationList"],
  ConsultationWhereUniqueInput: ["id", "day_month_year", "AND", "OR", "NOT", "day", "month", "year", "createdAt", "ConsultationList"],
  ConsultationOrderByWithAggregationInput: ["id", "day", "month", "year", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  ConsultationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "day", "month", "year", "createdAt"],
  ConsultationListWhereInput: ["AND", "OR", "NOT", "id", "patientId", "consultationId", "active", "createdAt", "updatedAt", "patient", "consultation"],
  ConsultationListOrderByWithRelationInput: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt", "patient", "consultation"],
  ConsultationListWhereUniqueInput: ["id", "patientId_consultationId", "AND", "OR", "NOT", "patientId", "consultationId", "active", "createdAt", "updatedAt", "patient", "consultation"],
  ConsultationListOrderByWithAggregationInput: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt", "_count", "_max", "_min"],
  ConsultationListScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "patientId", "consultationId", "active", "createdAt", "updatedAt"],
  ClinicalEventWhereInput: ["AND", "OR", "NOT", "id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "patient", "Prescription", "WorkingList"],
  ClinicalEventOrderByWithRelationInput: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "patient", "Prescription", "WorkingList"],
  ClinicalEventWhereUniqueInput: ["id", "AND", "OR", "NOT", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "patient", "Prescription", "WorkingList"],
  ClinicalEventOrderByWithAggregationInput: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "_count", "_max", "_min"],
  ClinicalEventScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  PrescriptionWhereInput: ["AND", "OR", "NOT", "id", "clinicalEventId", "savedPrescription", "createdAt", "updatedAt", "clinicalEvent"],
  PrescriptionOrderByWithRelationInput: ["id", "clinicalEventId", "savedPrescription", "createdAt", "updatedAt", "clinicalEvent"],
  PrescriptionWhereUniqueInput: ["id", "clinicalEventId", "AND", "OR", "NOT", "savedPrescription", "createdAt", "updatedAt", "clinicalEvent"],
  PrescriptionOrderByWithAggregationInput: ["id", "clinicalEventId", "savedPrescription", "createdAt", "updatedAt", "_count", "_max", "_min"],
  PrescriptionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "clinicalEventId", "savedPrescription", "createdAt", "updatedAt"],
  DocumentTemplateWhereInput: ["AND", "OR", "NOT", "id", "eventType", "template", "empty"],
  DocumentTemplateOrderByWithRelationInput: ["id", "eventType", "template", "empty"],
  DocumentTemplateWhereUniqueInput: ["id", "eventType", "AND", "OR", "NOT", "template", "empty"],
  DocumentTemplateOrderByWithAggregationInput: ["id", "eventType", "template", "empty", "_count", "_max", "_min"],
  DocumentTemplateScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "eventType", "template", "empty"],
  EconomizerWhereInput: ["AND", "OR", "NOT", "id", "name", "eventType", "template"],
  EconomizerOrderByWithRelationInput: ["id", "name", "eventType", "template"],
  EconomizerWhereUniqueInput: ["id", "eventType", "AND", "OR", "NOT", "name", "template"],
  EconomizerOrderByWithAggregationInput: ["id", "name", "eventType", "template", "_count", "_max", "_min"],
  EconomizerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "eventType", "template"],
  ModalityWhereInput: ["AND", "OR", "NOT", "id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled", "WorkingList"],
  ModalityOrderByWithRelationInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled", "WorkingList"],
  ModalityWhereUniqueInput: ["id", "modalityName", "AND", "OR", "NOT", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled", "WorkingList"],
  ModalityOrderByWithAggregationInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled", "_count", "_avg", "_max", "_min", "_sum"],
  ModalityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  WorkingListWhereInput: ["AND", "OR", "NOT", "id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "modality", "user", "clinicalEvent"],
  WorkingListOrderByWithRelationInput: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "modality", "user", "clinicalEvent"],
  WorkingListWhereUniqueInput: ["id", "AND", "OR", "NOT", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "modality", "user", "clinicalEvent"],
  WorkingListOrderByWithAggregationInput: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "_count", "_max", "_min"],
  WorkingListScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  UserCreateInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "ClinicalEvent", "WorkingList"],
  UserUpdateInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "ClinicalEvent", "WorkingList"],
  UserCreateManyInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt"],
  UserUpdateManyMutationInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt"],
  SettingCreateInput: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes"],
  SettingUpdateInput: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes"],
  SettingCreateManyInput: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes"],
  SettingUpdateManyMutationInput: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes"],
  MobileDeviceCreateInput: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  MobileDeviceUpdateInput: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  MobileDeviceCreateManyInput: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  MobileDeviceUpdateManyMutationInput: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  PatientCreateInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ConsultationList", "ClinicalEvent", "WorkingList"],
  PatientUpdateInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ConsultationList", "ClinicalEvent", "WorkingList"],
  PatientCreateManyInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed"],
  PatientUpdateManyMutationInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed"],
  ConsultationCreateInput: ["id", "day", "month", "year", "createdAt", "ConsultationList"],
  ConsultationUpdateInput: ["id", "day", "month", "year", "createdAt", "ConsultationList"],
  ConsultationCreateManyInput: ["id", "day", "month", "year", "createdAt"],
  ConsultationUpdateManyMutationInput: ["id", "day", "month", "year", "createdAt"],
  ConsultationListCreateInput: ["id", "active", "createdAt", "updatedAt", "patient", "consultation"],
  ConsultationListUpdateInput: ["id", "active", "createdAt", "updatedAt", "patient", "consultation"],
  ConsultationListCreateManyInput: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt"],
  ConsultationListUpdateManyMutationInput: ["id", "active", "createdAt", "updatedAt"],
  ClinicalEventCreateInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "patient", "Prescription", "WorkingList"],
  ClinicalEventUpdateInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "patient", "Prescription", "WorkingList"],
  ClinicalEventCreateManyInput: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  ClinicalEventUpdateManyMutationInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  PrescriptionCreateInput: ["id", "savedPrescription", "createdAt", "updatedAt", "clinicalEvent"],
  PrescriptionUpdateInput: ["id", "savedPrescription", "createdAt", "updatedAt", "clinicalEvent"],
  PrescriptionCreateManyInput: ["id", "clinicalEventId", "savedPrescription", "createdAt", "updatedAt"],
  PrescriptionUpdateManyMutationInput: ["id", "savedPrescription", "createdAt", "updatedAt"],
  DocumentTemplateCreateInput: ["id", "eventType", "template", "empty"],
  DocumentTemplateUpdateInput: ["id", "eventType", "template", "empty"],
  DocumentTemplateCreateManyInput: ["id", "eventType", "template", "empty"],
  DocumentTemplateUpdateManyMutationInput: ["id", "eventType", "template", "empty"],
  EconomizerCreateInput: ["id", "name", "eventType", "template"],
  EconomizerUpdateInput: ["id", "name", "eventType", "template"],
  EconomizerCreateManyInput: ["id", "name", "eventType", "template"],
  EconomizerUpdateManyMutationInput: ["id", "name", "eventType", "template"],
  ModalityCreateInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled", "WorkingList"],
  ModalityUpdateInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled", "WorkingList"],
  ModalityCreateManyInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  ModalityUpdateManyMutationInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  WorkingListCreateInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "modality", "user", "clinicalEvent"],
  WorkingListUpdateInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "modality", "user", "clinicalEvent"],
  WorkingListCreateManyInput: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  WorkingListUpdateManyMutationInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ClinicalEventListRelationFilter: ["every", "some", "none"],
  WorkingListListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  ClinicalEventOrderByRelationAggregateInput: ["_count"],
  WorkingListOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt"],
  UserAvgOrderByAggregateInput: ["searchApiKeyId"],
  UserMaxOrderByAggregateInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt"],
  UserMinOrderByAggregateInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt"],
  UserSumOrderByAggregateInput: ["searchApiKeyId"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumEventTypesNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  SettingCountOrderByAggregateInput: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities", "allowedEventTypes"],
  SettingAvgOrderByAggregateInput: ["allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities"],
  SettingMaxOrderByAggregateInput: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities"],
  SettingMinOrderByAggregateInput: ["id", "allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities"],
  SettingSumOrderByAggregateInput: ["allowedMobileDevices_doctors", "allowedMobileDevices_secretary", "allowedDICOMmodalities"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumMobileDeviceTypeFilter: ["equals", "in", "notIn", "not"],
  BoolFilter: ["equals", "not"],
  MobileDeviceUuidAccessTokenCompoundUniqueInput: ["uuid", "accessToken"],
  MobileDeviceCountOrderByAggregateInput: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  MobileDeviceMaxOrderByAggregateInput: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  MobileDeviceMinOrderByAggregateInput: ["id", "uuid", "accessToken", "mobileDeviceType", "expireAt", "connected"],
  EnumMobileDeviceTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumSexeFilter: ["equals", "in", "notIn", "not"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ConsultationListListRelationFilter: ["every", "some", "none"],
  ConsultationListOrderByRelationAggregateInput: ["_count"],
  PatientCountOrderByAggregateInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed"],
  PatientAvgOrderByAggregateInput: ["height", "weight"],
  PatientMaxOrderByAggregateInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed"],
  PatientMinOrderByAggregateInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed"],
  PatientSumOrderByAggregateInput: ["height", "weight"],
  EnumSexeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ConsultationDayMonthYearCompoundUniqueInput: ["day", "month", "year"],
  ConsultationCountOrderByAggregateInput: ["id", "day", "month", "year", "createdAt"],
  ConsultationAvgOrderByAggregateInput: ["day", "month", "year"],
  ConsultationMaxOrderByAggregateInput: ["id", "day", "month", "year", "createdAt"],
  ConsultationMinOrderByAggregateInput: ["id", "day", "month", "year", "createdAt"],
  ConsultationSumOrderByAggregateInput: ["day", "month", "year"],
  PatientRelationFilter: ["is", "isNot"],
  ConsultationRelationFilter: ["is", "isNot"],
  ConsultationListPatientIdConsultationIdCompoundUniqueInput: ["patientId", "consultationId"],
  ConsultationListCountOrderByAggregateInput: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt"],
  ConsultationListMaxOrderByAggregateInput: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt"],
  ConsultationListMinOrderByAggregateInput: ["id", "patientId", "consultationId", "active", "createdAt", "updatedAt"],
  EnumEventTypesFilter: ["equals", "in", "notIn", "not"],
  UserRelationFilter: ["is", "isNot"],
  PrescriptionNullableRelationFilter: ["is", "isNot"],
  ClinicalEventCountOrderByAggregateInput: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  ClinicalEventMaxOrderByAggregateInput: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  ClinicalEventMinOrderByAggregateInput: ["id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  EnumEventTypesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  JsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  ClinicalEventRelationFilter: ["is", "isNot"],
  PrescriptionCountOrderByAggregateInput: ["id", "clinicalEventId", "savedPrescription", "createdAt", "updatedAt"],
  PrescriptionMaxOrderByAggregateInput: ["id", "clinicalEventId", "createdAt", "updatedAt"],
  PrescriptionMinOrderByAggregateInput: ["id", "clinicalEventId", "createdAt", "updatedAt"],
  JsonWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DocumentTemplateCountOrderByAggregateInput: ["id", "eventType", "template", "empty"],
  DocumentTemplateMaxOrderByAggregateInput: ["id", "eventType", "template", "empty"],
  DocumentTemplateMinOrderByAggregateInput: ["id", "eventType", "template", "empty"],
  EconomizerCountOrderByAggregateInput: ["id", "name", "eventType", "template"],
  EconomizerMaxOrderByAggregateInput: ["id", "name", "eventType", "template"],
  EconomizerMinOrderByAggregateInput: ["id", "name", "eventType", "template"],
  EnumModalityTypeFilter: ["equals", "in", "notIn", "not"],
  ModalityCountOrderByAggregateInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  ModalityAvgOrderByAggregateInput: ["modalityPort"],
  ModalityMaxOrderByAggregateInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  ModalityMinOrderByAggregateInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  ModalitySumOrderByAggregateInput: ["modalityPort"],
  EnumModalityTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumModalityExamStatusFilter: ["equals", "in", "notIn", "not"],
  ModalityRelationFilter: ["is", "isNot"],
  WorkingListCountOrderByAggregateInput: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  WorkingListMaxOrderByAggregateInput: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  WorkingListMinOrderByAggregateInput: ["id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  EnumModalityExamStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserCreatephoneNumbersInput: ["set"],
  ClinicalEventCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  WorkingListCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  UserUpdatephoneNumbersInput: ["set", "push"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ClinicalEventUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WorkingListUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SettingCreateallowedEventTypesInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  SettingUpdateallowedEventTypesInput: ["set", "push"],
  EnumMobileDeviceTypeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  ConsultationListCreateNestedManyWithoutPatientInput: ["create", "connectOrCreate", "createMany", "connect"],
  ClinicalEventCreateNestedManyWithoutPatientInput: ["create", "connectOrCreate", "createMany", "connect"],
  WorkingListCreateNestedManyWithoutPatientInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumSexeFieldUpdateOperationsInput: ["set"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ConsultationListUpdateManyWithoutPatientNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ClinicalEventUpdateManyWithoutPatientNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WorkingListUpdateManyWithoutPatientNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ConsultationListCreateNestedManyWithoutConsultationInput: ["create", "connectOrCreate", "createMany", "connect"],
  ConsultationListUpdateManyWithoutConsultationNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PatientCreateNestedOneWithoutConsultationListInput: ["create", "connectOrCreate", "connect"],
  ConsultationCreateNestedOneWithoutConsultationListInput: ["create", "connectOrCreate", "connect"],
  PatientUpdateOneRequiredWithoutConsultationListNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ConsultationUpdateOneRequiredWithoutConsultationListNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutClinicalEventInput: ["create", "connectOrCreate", "connect"],
  PatientCreateNestedOneWithoutClinicalEventInput: ["create", "connectOrCreate", "connect"],
  PrescriptionCreateNestedOneWithoutClinicalEventInput: ["create", "connectOrCreate", "connect"],
  WorkingListCreateNestedManyWithoutClinicalEventInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumEventTypesFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutClinicalEventNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PatientUpdateOneRequiredWithoutClinicalEventNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PrescriptionUpdateOneWithoutClinicalEventNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  WorkingListUpdateManyWithoutClinicalEventNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ClinicalEventCreateNestedOneWithoutPrescriptionInput: ["create", "connectOrCreate", "connect"],
  ClinicalEventUpdateOneRequiredWithoutPrescriptionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  WorkingListCreateNestedManyWithoutModalityInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumModalityTypeFieldUpdateOperationsInput: ["set"],
  WorkingListUpdateManyWithoutModalityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PatientCreateNestedOneWithoutWorkingListInput: ["create", "connectOrCreate", "connect"],
  ModalityCreateNestedOneWithoutWorkingListInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutWorkingListInput: ["create", "connectOrCreate", "connect"],
  ClinicalEventCreateNestedOneWithoutWorkingListInput: ["create", "connectOrCreate", "connect"],
  EnumModalityExamStatusFieldUpdateOperationsInput: ["set"],
  PatientUpdateOneRequiredWithoutWorkingListNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ModalityUpdateOneRequiredWithoutWorkingListNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutWorkingListNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ClinicalEventUpdateOneRequiredWithoutWorkingListNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumMobileDeviceTypeFilter: ["equals", "in", "notIn", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumMobileDeviceTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumSexeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumSexeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedEnumEventTypesFilter: ["equals", "in", "notIn", "not"],
  NestedEnumEventTypesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedJsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  NestedEnumModalityTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumModalityTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumModalityExamStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumModalityExamStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ClinicalEventCreateWithoutUserInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "patient", "Prescription", "WorkingList"],
  ClinicalEventCreateOrConnectWithoutUserInput: ["where", "create"],
  ClinicalEventCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  WorkingListCreateWithoutUserInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "modality", "clinicalEvent"],
  WorkingListCreateOrConnectWithoutUserInput: ["where", "create"],
  WorkingListCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ClinicalEventUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ClinicalEventUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ClinicalEventUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ClinicalEventScalarWhereInput: ["AND", "OR", "NOT", "id", "eventType", "userId", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  WorkingListUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  WorkingListUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  WorkingListUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  WorkingListScalarWhereInput: ["AND", "OR", "NOT", "id", "patientId", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  ConsultationListCreateWithoutPatientInput: ["id", "active", "createdAt", "updatedAt", "consultation"],
  ConsultationListCreateOrConnectWithoutPatientInput: ["where", "create"],
  ConsultationListCreateManyPatientInputEnvelope: ["data", "skipDuplicates"],
  ClinicalEventCreateWithoutPatientInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "Prescription", "WorkingList"],
  ClinicalEventCreateOrConnectWithoutPatientInput: ["where", "create"],
  ClinicalEventCreateManyPatientInputEnvelope: ["data", "skipDuplicates"],
  WorkingListCreateWithoutPatientInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "modality", "user", "clinicalEvent"],
  WorkingListCreateOrConnectWithoutPatientInput: ["where", "create"],
  WorkingListCreateManyPatientInputEnvelope: ["data", "skipDuplicates"],
  ConsultationListUpsertWithWhereUniqueWithoutPatientInput: ["where", "update", "create"],
  ConsultationListUpdateWithWhereUniqueWithoutPatientInput: ["where", "data"],
  ConsultationListUpdateManyWithWhereWithoutPatientInput: ["where", "data"],
  ConsultationListScalarWhereInput: ["AND", "OR", "NOT", "id", "patientId", "consultationId", "active", "createdAt", "updatedAt"],
  ClinicalEventUpsertWithWhereUniqueWithoutPatientInput: ["where", "update", "create"],
  ClinicalEventUpdateWithWhereUniqueWithoutPatientInput: ["where", "data"],
  ClinicalEventUpdateManyWithWhereWithoutPatientInput: ["where", "data"],
  WorkingListUpsertWithWhereUniqueWithoutPatientInput: ["where", "update", "create"],
  WorkingListUpdateWithWhereUniqueWithoutPatientInput: ["where", "data"],
  WorkingListUpdateManyWithWhereWithoutPatientInput: ["where", "data"],
  ConsultationListCreateWithoutConsultationInput: ["id", "active", "createdAt", "updatedAt", "patient"],
  ConsultationListCreateOrConnectWithoutConsultationInput: ["where", "create"],
  ConsultationListCreateManyConsultationInputEnvelope: ["data", "skipDuplicates"],
  ConsultationListUpsertWithWhereUniqueWithoutConsultationInput: ["where", "update", "create"],
  ConsultationListUpdateWithWhereUniqueWithoutConsultationInput: ["where", "data"],
  ConsultationListUpdateManyWithWhereWithoutConsultationInput: ["where", "data"],
  PatientCreateWithoutConsultationListInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ClinicalEvent", "WorkingList"],
  PatientCreateOrConnectWithoutConsultationListInput: ["where", "create"],
  ConsultationCreateWithoutConsultationListInput: ["id", "day", "month", "year", "createdAt"],
  ConsultationCreateOrConnectWithoutConsultationListInput: ["where", "create"],
  PatientUpsertWithoutConsultationListInput: ["update", "create", "where"],
  PatientUpdateToOneWithWhereWithoutConsultationListInput: ["where", "data"],
  PatientUpdateWithoutConsultationListInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ClinicalEvent", "WorkingList"],
  ConsultationUpsertWithoutConsultationListInput: ["update", "create", "where"],
  ConsultationUpdateToOneWithWhereWithoutConsultationListInput: ["where", "data"],
  ConsultationUpdateWithoutConsultationListInput: ["id", "day", "month", "year", "createdAt"],
  UserCreateWithoutClinicalEventInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "WorkingList"],
  UserCreateOrConnectWithoutClinicalEventInput: ["where", "create"],
  PatientCreateWithoutClinicalEventInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ConsultationList", "WorkingList"],
  PatientCreateOrConnectWithoutClinicalEventInput: ["where", "create"],
  PrescriptionCreateWithoutClinicalEventInput: ["id", "savedPrescription", "createdAt", "updatedAt"],
  PrescriptionCreateOrConnectWithoutClinicalEventInput: ["where", "create"],
  WorkingListCreateWithoutClinicalEventInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "modality", "user"],
  WorkingListCreateOrConnectWithoutClinicalEventInput: ["where", "create"],
  WorkingListCreateManyClinicalEventInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutClinicalEventInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutClinicalEventInput: ["where", "data"],
  UserUpdateWithoutClinicalEventInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "WorkingList"],
  PatientUpsertWithoutClinicalEventInput: ["update", "create", "where"],
  PatientUpdateToOneWithWhereWithoutClinicalEventInput: ["where", "data"],
  PatientUpdateWithoutClinicalEventInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ConsultationList", "WorkingList"],
  PrescriptionUpsertWithoutClinicalEventInput: ["update", "create", "where"],
  PrescriptionUpdateToOneWithWhereWithoutClinicalEventInput: ["where", "data"],
  PrescriptionUpdateWithoutClinicalEventInput: ["id", "savedPrescription", "createdAt", "updatedAt"],
  WorkingListUpsertWithWhereUniqueWithoutClinicalEventInput: ["where", "update", "create"],
  WorkingListUpdateWithWhereUniqueWithoutClinicalEventInput: ["where", "data"],
  WorkingListUpdateManyWithWhereWithoutClinicalEventInput: ["where", "data"],
  ClinicalEventCreateWithoutPrescriptionInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "patient", "WorkingList"],
  ClinicalEventCreateOrConnectWithoutPrescriptionInput: ["where", "create"],
  ClinicalEventUpsertWithoutPrescriptionInput: ["update", "create", "where"],
  ClinicalEventUpdateToOneWithWhereWithoutPrescriptionInput: ["where", "data"],
  ClinicalEventUpdateWithoutPrescriptionInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "patient", "WorkingList"],
  WorkingListCreateWithoutModalityInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "user", "clinicalEvent"],
  WorkingListCreateOrConnectWithoutModalityInput: ["where", "create"],
  WorkingListCreateManyModalityInputEnvelope: ["data", "skipDuplicates"],
  WorkingListUpsertWithWhereUniqueWithoutModalityInput: ["where", "update", "create"],
  WorkingListUpdateWithWhereUniqueWithoutModalityInput: ["where", "data"],
  WorkingListUpdateManyWithWhereWithoutModalityInput: ["where", "data"],
  PatientCreateWithoutWorkingListInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ConsultationList", "ClinicalEvent"],
  PatientCreateOrConnectWithoutWorkingListInput: ["where", "create"],
  ModalityCreateWithoutWorkingListInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  ModalityCreateOrConnectWithoutWorkingListInput: ["where", "create"],
  UserCreateWithoutWorkingListInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "ClinicalEvent"],
  UserCreateOrConnectWithoutWorkingListInput: ["where", "create"],
  ClinicalEventCreateWithoutWorkingListInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "patient", "Prescription"],
  ClinicalEventCreateOrConnectWithoutWorkingListInput: ["where", "create"],
  PatientUpsertWithoutWorkingListInput: ["update", "create", "where"],
  PatientUpdateToOneWithWhereWithoutWorkingListInput: ["where", "data"],
  PatientUpdateWithoutWorkingListInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "address", "height", "weight", "createdAt", "updated", "deleted", "onTrash", "informationsConfirmed", "ConsultationList", "ClinicalEvent"],
  ModalityUpsertWithoutWorkingListInput: ["update", "create", "where"],
  ModalityUpdateToOneWithWhereWithoutWorkingListInput: ["where", "data"],
  ModalityUpdateWithoutWorkingListInput: ["id", "modalityName", "modalityPseudo", "modalityAETitle", "modalityIpAddress", "modalityType", "modalityPort", "deleted", "activated", "enabled"],
  UserUpsertWithoutWorkingListInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutWorkingListInput: ["where", "data"],
  UserUpdateWithoutWorkingListInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "searchApiKeyId", "searchApiKey", "createdAt", "ClinicalEvent"],
  ClinicalEventUpsertWithoutWorkingListInput: ["update", "create", "where"],
  ClinicalEventUpdateToOneWithWhereWithoutWorkingListInput: ["where", "data"],
  ClinicalEventUpdateWithoutWorkingListInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "patient", "Prescription"],
  ClinicalEventCreateManyUserInput: ["id", "eventType", "patientId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  WorkingListCreateManyUserInput: ["id", "patientId", "modalityId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  ClinicalEventUpdateWithoutUserInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "patient", "Prescription", "WorkingList"],
  WorkingListUpdateWithoutUserInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "modality", "clinicalEvent"],
  ConsultationListCreateManyPatientInput: ["id", "consultationId", "active", "createdAt", "updatedAt"],
  ClinicalEventCreateManyPatientInput: ["id", "eventType", "userId", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId"],
  WorkingListCreateManyPatientInput: ["id", "modalityId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  ConsultationListUpdateWithoutPatientInput: ["id", "active", "createdAt", "updatedAt", "consultation"],
  ClinicalEventUpdateWithoutPatientInput: ["id", "eventType", "createdAt", "updatedAt", "onTrash", "deleted", "empty", "createdReport", "report", "dicom", "dicomId", "clinicalDiagnosticId", "user", "Prescription", "WorkingList"],
  WorkingListUpdateWithoutPatientInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "modality", "user", "clinicalEvent"],
  ConsultationListCreateManyConsultationInput: ["id", "patientId", "active", "createdAt", "updatedAt"],
  ConsultationListUpdateWithoutConsultationInput: ["id", "active", "createdAt", "updatedAt", "patient"],
  WorkingListCreateManyClinicalEventInput: ["id", "patientId", "modalityId", "userId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  WorkingListUpdateWithoutClinicalEventInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "modality", "user"],
  WorkingListCreateManyModalityInput: ["id", "patientId", "userId", "clinicalEventId", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked"],
  WorkingListUpdateWithoutModalityInput: ["id", "modalityExamStatus", "createdAt", "updatedAt", "linked", "linkId", "locked", "patient", "user", "clinicalEvent"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

