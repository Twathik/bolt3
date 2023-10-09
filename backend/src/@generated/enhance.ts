import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Patient: crudResolvers.PatientCrudResolver
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
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Patient: ["aggregatePatient", "createManyPatient", "createOnePatient", "deleteManyPatient", "deleteOnePatient", "findFirstPatient", "findFirstPatientOrThrow", "patients", "patient", "getPatient", "groupByPatient", "updateManyPatient", "updateOnePatient", "upsertOnePatient"]
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
  UpsertOnePatientArgs: ["where", "create", "update"]
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
  User: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey"],
  Patient: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted"]
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
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey", "_count", "_min", "_max"],
  AggregatePatient: ["_count", "_min", "_max"],
  PatientGroupBy: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey", "_all"],
  UserMinAggregate: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "lastConnection", "typesenseApiKey"],
  UserMaxAggregate: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "lastConnection", "typesenseApiKey"],
  PatientCountAggregate: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted", "_all"],
  PatientMinAggregate: ["id", "lastName", "firstName", "ddn", "sexe", "created", "updated", "deleted"],
  PatientMaxAggregate: ["id", "lastName", "firstName", "ddn", "sexe", "created", "updated", "deleted"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey"],
  UserOrderByWithRelationInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey"],
  UserWhereUniqueInput: ["id", "email", "userId", "AND", "OR", "NOT", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey"],
  UserOrderByWithAggregationInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey"],
  PatientWhereInput: ["AND", "OR", "NOT", "id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted"],
  PatientOrderByWithRelationInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted"],
  PatientWhereUniqueInput: ["id", "AND", "OR", "NOT", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted"],
  PatientOrderByWithAggregationInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted", "_count", "_max", "_min"],
  PatientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted"],
  UserCreateInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey"],
  UserUpdateInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey"],
  UserCreateManyInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey"],
  UserUpdateManyMutationInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey"],
  PatientCreateInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted"],
  PatientUpdateInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted"],
  PatientCreateManyInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted"],
  PatientUpdateManyMutationInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SortOrderInput: ["sort", "nulls"],
  UserCountOrderByAggregateInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "phoneNumbers", "lastConnection", "typesenseApiKey"],
  UserMaxOrderByAggregateInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "lastConnection", "typesenseApiKey"],
  UserMinOrderByAggregateInput: ["id", "email", "userId", "lastName", "firstName", "fullName", "avatarUrl", "role", "lastConnection", "typesenseApiKey"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumSexeFilter: ["equals", "in", "notIn", "not"],
  BoolFilter: ["equals", "not"],
  PatientCountOrderByAggregateInput: ["id", "lastName", "firstName", "ddn", "sexe", "nTel", "created", "updated", "deleted"],
  PatientMaxOrderByAggregateInput: ["id", "lastName", "firstName", "ddn", "sexe", "created", "updated", "deleted"],
  PatientMinOrderByAggregateInput: ["id", "lastName", "firstName", "ddn", "sexe", "created", "updated", "deleted"],
  EnumSexeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserCreatephoneNumbersInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  UserUpdatephoneNumbersInput: ["set", "push"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  PatientCreatenTelInput: ["set"],
  EnumSexeFieldUpdateOperationsInput: ["set"],
  PatientUpdatenTelInput: ["set", "push"],
  BoolFieldUpdateOperationsInput: ["set"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumSexeFilter: ["equals", "in", "notIn", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumSexeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"]
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

