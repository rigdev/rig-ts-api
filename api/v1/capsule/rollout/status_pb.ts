// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file api/v1/capsule/rollout/status.proto (package api.v1.capsule.rollout, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.v1.capsule.rollout.StageState
 */
export enum StageState {
  /**
   * @generated from enum value: STAGE_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STAGE_STATE_DEPLOYING = 1;
   */
  DEPLOYING = 1,

  /**
   * @generated from enum value: STAGE_STATE_RUNNING = 2;
   */
  RUNNING = 2,

  /**
   * @generated from enum value: STAGE_STATE_STOPPED = 3;
   */
  STOPPED = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(StageState)
proto3.util.setEnumType(StageState, "api.v1.capsule.rollout.StageState", [
  { no: 0, name: "STAGE_STATE_UNSPECIFIED" },
  { no: 1, name: "STAGE_STATE_DEPLOYING" },
  { no: 2, name: "STAGE_STATE_RUNNING" },
  { no: 3, name: "STAGE_STATE_STOPPED" },
]);

/**
 * @generated from enum api.v1.capsule.rollout.StepState
 */
export enum StepState {
  /**
   * @generated from enum value: STEP_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STEP_STATE_ONGOING = 1;
   */
  ONGOING = 1,

  /**
   * @generated from enum value: STEP_STATE_FAILED = 2;
   */
  FAILED = 2,

  /**
   * @generated from enum value: STEP_STATE_DONE = 3;
   */
  DONE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(StepState)
proto3.util.setEnumType(StepState, "api.v1.capsule.rollout.StepState", [
  { no: 0, name: "STEP_STATE_UNSPECIFIED" },
  { no: 1, name: "STEP_STATE_ONGOING" },
  { no: 2, name: "STEP_STATE_FAILED" },
  { no: 3, name: "STEP_STATE_DONE" },
]);

/**
 * @generated from enum api.v1.capsule.rollout.State
 */
export enum State {
  /**
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATE_PREPARING = 1;
   */
  PREPARING = 1,

  /**
   * @generated from enum value: STATE_CONFIGURE = 2;
   */
  CONFIGURE = 2,

  /**
   * @generated from enum value: STATE_RESOURCE_CREATION = 3;
   */
  RESOURCE_CREATION = 3,

  /**
   * @generated from enum value: STATE_RUNNING = 4;
   */
  RUNNING = 4,

  /**
   * @generated from enum value: STATE_STOPPED = 5;
   */
  STOPPED = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(State)
proto3.util.setEnumType(State, "api.v1.capsule.rollout.State", [
  { no: 0, name: "STATE_UNSPECIFIED" },
  { no: 1, name: "STATE_PREPARING" },
  { no: 2, name: "STATE_CONFIGURE" },
  { no: 3, name: "STATE_RESOURCE_CREATION" },
  { no: 4, name: "STATE_RUNNING" },
  { no: 5, name: "STATE_STOPPED" },
]);

/**
 * @generated from enum api.v1.capsule.rollout.Result
 */
export enum Result {
  /**
   * @generated from enum value: RESULT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: RESULT_REPLACED = 1;
   */
  REPLACED = 1,

  /**
   * @generated from enum value: RESULT_FAILED = 2;
   */
  FAILED = 2,

  /**
   * @generated from enum value: RESULT_ABORTED = 3;
   */
  ABORTED = 3,

  /**
   * @generated from enum value: RESULT_ROLLBACK = 4;
   */
  ROLLBACK = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(Result)
proto3.util.setEnumType(Result, "api.v1.capsule.rollout.Result", [
  { no: 0, name: "RESULT_UNSPECIFIED" },
  { no: 1, name: "RESULT_REPLACED" },
  { no: 2, name: "RESULT_FAILED" },
  { no: 3, name: "RESULT_ABORTED" },
  { no: 4, name: "RESULT_ROLLBACK" },
]);

/**
 * @generated from enum api.v1.capsule.rollout.ConfigureResult
 */
export enum ConfigureResult {
  /**
   * @generated from enum value: CONFIGURE_RESULT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CONFIGURE_RESULT_CREATED = 1;
   */
  CREATED = 1,

  /**
   * @generated from enum value: CONFIGURE_RESULT_UPDATED = 2;
   */
  UPDATED = 2,

  /**
   * @generated from enum value: CONFIGURE_RESULT_NO_CHANGE = 3;
   */
  NO_CHANGE = 3,

  /**
   * @generated from enum value: CONFIGURE_RESULT_DELETED = 4;
   */
  DELETED = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(ConfigureResult)
proto3.util.setEnumType(ConfigureResult, "api.v1.capsule.rollout.ConfigureResult", [
  { no: 0, name: "CONFIGURE_RESULT_UNSPECIFIED" },
  { no: 1, name: "CONFIGURE_RESULT_CREATED" },
  { no: 2, name: "CONFIGURE_RESULT_UPDATED" },
  { no: 3, name: "CONFIGURE_RESULT_NO_CHANGE" },
  { no: 4, name: "CONFIGURE_RESULT_DELETED" },
]);

/**
 * Status is a representation of the current state of a rollout
 *
 * @generated from message api.v1.capsule.rollout.Status
 */
export class Status extends Message<Status> {
  /**
   * @generated from field: uint64 rollout_id = 1;
   */
  rolloutId = protoInt64.zero;

  /**
   * @generated from field: api.v1.capsule.rollout.State state = 2;
   */
  state = State.UNSPECIFIED;

  /**
   * @generated from field: api.v1.capsule.rollout.Stages stages = 3;
   */
  stages?: Stages;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 4;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: api.v1.capsule.rollout.Result result = 5;
   */
  result = Result.UNSPECIFIED;

  constructor(data?: PartialMessage<Status>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.Status";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rollout_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(State) },
    { no: 3, name: "stages", kind: "message", T: Stages },
    { no: 4, name: "updated_at", kind: "message", T: Timestamp },
    { no: 5, name: "result", kind: "enum", T: proto3.getEnumType(Result) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Status {
    return new Status().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Status {
    return new Status().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Status {
    return new Status().fromJsonString(jsonString, options);
  }

  static equals(a: Status | PlainMessage<Status> | undefined, b: Status | PlainMessage<Status> | undefined): boolean {
    return proto3.util.equals(Status, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.StageInfo
 */
export class StageInfo extends Message<StageInfo> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 2;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: api.v1.capsule.rollout.StageState state = 3;
   */
  state = StageState.UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.Timestamp started_at = 4;
   */
  startedAt?: Timestamp;

  constructor(data?: PartialMessage<StageInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.StageInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "updated_at", kind: "message", T: Timestamp },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(StageState) },
    { no: 4, name: "started_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StageInfo {
    return new StageInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StageInfo {
    return new StageInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StageInfo {
    return new StageInfo().fromJsonString(jsonString, options);
  }

  static equals(a: StageInfo | PlainMessage<StageInfo> | undefined, b: StageInfo | PlainMessage<StageInfo> | undefined): boolean {
    return proto3.util.equals(StageInfo, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.GenericStep
 */
export class GenericStep extends Message<GenericStep> {
  /**
   * @generated from field: api.v1.capsule.rollout.StepInfo info = 1;
   */
  info?: StepInfo;

  constructor(data?: PartialMessage<GenericStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.GenericStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StepInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenericStep {
    return new GenericStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenericStep {
    return new GenericStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenericStep {
    return new GenericStep().fromJsonString(jsonString, options);
  }

  static equals(a: GenericStep | PlainMessage<GenericStep> | undefined, b: GenericStep | PlainMessage<GenericStep> | undefined): boolean {
    return proto3.util.equals(GenericStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.StepInfo
 */
export class StepInfo extends Message<StepInfo> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string message = 2;
   */
  message = "";

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 3;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: api.v1.capsule.rollout.StepState state = 4;
   */
  state = StepState.UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.Timestamp started_at = 5;
   */
  startedAt?: Timestamp;

  constructor(data?: PartialMessage<StepInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.StepInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "updated_at", kind: "message", T: Timestamp },
    { no: 4, name: "state", kind: "enum", T: proto3.getEnumType(StepState) },
    { no: 5, name: "started_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StepInfo {
    return new StepInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StepInfo {
    return new StepInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StepInfo {
    return new StepInfo().fromJsonString(jsonString, options);
  }

  static equals(a: StepInfo | PlainMessage<StepInfo> | undefined, b: StepInfo | PlainMessage<StepInfo> | undefined): boolean {
    return proto3.util.equals(StepInfo, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.Stages
 */
export class Stages extends Message<Stages> {
  /**
   * @generated from field: api.v1.capsule.rollout.ConfigureStage configure = 1;
   */
  configure?: ConfigureStage;

  /**
   * @generated from field: api.v1.capsule.rollout.ResourceCreationStage resource_creation = 2;
   */
  resourceCreation?: ResourceCreationStage;

  /**
   * @generated from field: api.v1.capsule.rollout.RunningStage running = 3;
   */
  running?: RunningStage;

  constructor(data?: PartialMessage<Stages>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.Stages";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "configure", kind: "message", T: ConfigureStage },
    { no: 2, name: "resource_creation", kind: "message", T: ResourceCreationStage },
    { no: 3, name: "running", kind: "message", T: RunningStage },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Stages {
    return new Stages().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Stages {
    return new Stages().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Stages {
    return new Stages().fromJsonString(jsonString, options);
  }

  static equals(a: Stages | PlainMessage<Stages> | undefined, b: Stages | PlainMessage<Stages> | undefined): boolean {
    return proto3.util.equals(Stages, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.ConfigureStage
 */
export class ConfigureStage extends Message<ConfigureStage> {
  /**
   * @generated from field: api.v1.capsule.rollout.StageInfo info = 1;
   */
  info?: StageInfo;

  /**
   * @generated from field: repeated api.v1.capsule.rollout.ConfigureStep steps = 2;
   */
  steps: ConfigureStep[] = [];

  constructor(data?: PartialMessage<ConfigureStage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.ConfigureStage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StageInfo },
    { no: 2, name: "steps", kind: "message", T: ConfigureStep, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigureStage {
    return new ConfigureStage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigureStage {
    return new ConfigureStage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigureStage {
    return new ConfigureStage().fromJsonString(jsonString, options);
  }

  static equals(a: ConfigureStage | PlainMessage<ConfigureStage> | undefined, b: ConfigureStage | PlainMessage<ConfigureStage> | undefined): boolean {
    return proto3.util.equals(ConfigureStage, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.ConfigureStep
 */
export class ConfigureStep extends Message<ConfigureStep> {
  /**
   * @generated from oneof api.v1.capsule.rollout.ConfigureStep.step
   */
  step: {
    /**
     * @generated from field: api.v1.capsule.rollout.GenericStep generic = 1;
     */
    value: GenericStep;
    case: "generic";
  } | {
    /**
     * @generated from field: api.v1.capsule.rollout.ConfigureCapsuleStep configure_capsule = 2;
     */
    value: ConfigureCapsuleStep;
    case: "configureCapsule";
  } | {
    /**
     * @generated from field: api.v1.capsule.rollout.ConfigureFileStep configure_file = 3;
     */
    value: ConfigureFileStep;
    case: "configureFile";
  } | {
    /**
     * @generated from field: api.v1.capsule.rollout.ConfigureEnvStep configure_env = 4;
     */
    value: ConfigureEnvStep;
    case: "configureEnv";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ConfigureStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.ConfigureStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "generic", kind: "message", T: GenericStep, oneof: "step" },
    { no: 2, name: "configure_capsule", kind: "message", T: ConfigureCapsuleStep, oneof: "step" },
    { no: 3, name: "configure_file", kind: "message", T: ConfigureFileStep, oneof: "step" },
    { no: 4, name: "configure_env", kind: "message", T: ConfigureEnvStep, oneof: "step" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigureStep {
    return new ConfigureStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigureStep {
    return new ConfigureStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigureStep {
    return new ConfigureStep().fromJsonString(jsonString, options);
  }

  static equals(a: ConfigureStep | PlainMessage<ConfigureStep> | undefined, b: ConfigureStep | PlainMessage<ConfigureStep> | undefined): boolean {
    return proto3.util.equals(ConfigureStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.ConfigureCapsuleStep
 */
export class ConfigureCapsuleStep extends Message<ConfigureCapsuleStep> {
  /**
   * @generated from field: api.v1.capsule.rollout.StepInfo info = 1;
   */
  info?: StepInfo;

  /**
   * @generated from field: api.v1.capsule.rollout.ConfigureResult state = 2;
   */
  state = ConfigureResult.UNSPECIFIED;

  constructor(data?: PartialMessage<ConfigureCapsuleStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.ConfigureCapsuleStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StepInfo },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(ConfigureResult) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigureCapsuleStep {
    return new ConfigureCapsuleStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigureCapsuleStep {
    return new ConfigureCapsuleStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigureCapsuleStep {
    return new ConfigureCapsuleStep().fromJsonString(jsonString, options);
  }

  static equals(a: ConfigureCapsuleStep | PlainMessage<ConfigureCapsuleStep> | undefined, b: ConfigureCapsuleStep | PlainMessage<ConfigureCapsuleStep> | undefined): boolean {
    return proto3.util.equals(ConfigureCapsuleStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.ConfigureFileStep
 */
export class ConfigureFileStep extends Message<ConfigureFileStep> {
  /**
   * @generated from field: api.v1.capsule.rollout.StepInfo info = 1;
   */
  info?: StepInfo;

  /**
   * @generated from field: api.v1.capsule.rollout.ConfigureResult state = 2;
   */
  state = ConfigureResult.UNSPECIFIED;

  /**
   * @generated from field: string path = 3;
   */
  path = "";

  /**
   * @generated from field: bool is_secret = 4;
   */
  isSecret = false;

  constructor(data?: PartialMessage<ConfigureFileStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.ConfigureFileStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StepInfo },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(ConfigureResult) },
    { no: 3, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_secret", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigureFileStep {
    return new ConfigureFileStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigureFileStep {
    return new ConfigureFileStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigureFileStep {
    return new ConfigureFileStep().fromJsonString(jsonString, options);
  }

  static equals(a: ConfigureFileStep | PlainMessage<ConfigureFileStep> | undefined, b: ConfigureFileStep | PlainMessage<ConfigureFileStep> | undefined): boolean {
    return proto3.util.equals(ConfigureFileStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.ConfigureEnvStep
 */
export class ConfigureEnvStep extends Message<ConfigureEnvStep> {
  /**
   * @generated from field: api.v1.capsule.rollout.StepInfo info = 1;
   */
  info?: StepInfo;

  /**
   * @generated from field: api.v1.capsule.rollout.ConfigureResult state = 2;
   */
  state = ConfigureResult.UNSPECIFIED;

  /**
   * @generated from field: bool is_secret = 3;
   */
  isSecret = false;

  constructor(data?: PartialMessage<ConfigureEnvStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.ConfigureEnvStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StepInfo },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(ConfigureResult) },
    { no: 3, name: "is_secret", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigureEnvStep {
    return new ConfigureEnvStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigureEnvStep {
    return new ConfigureEnvStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigureEnvStep {
    return new ConfigureEnvStep().fromJsonString(jsonString, options);
  }

  static equals(a: ConfigureEnvStep | PlainMessage<ConfigureEnvStep> | undefined, b: ConfigureEnvStep | PlainMessage<ConfigureEnvStep> | undefined): boolean {
    return proto3.util.equals(ConfigureEnvStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.ResourceCreationStage
 */
export class ResourceCreationStage extends Message<ResourceCreationStage> {
  /**
   * @generated from field: api.v1.capsule.rollout.StageInfo info = 1;
   */
  info?: StageInfo;

  /**
   * @generated from field: repeated api.v1.capsule.rollout.ResourceCreationStep steps = 2;
   */
  steps: ResourceCreationStep[] = [];

  constructor(data?: PartialMessage<ResourceCreationStage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.ResourceCreationStage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StageInfo },
    { no: 2, name: "steps", kind: "message", T: ResourceCreationStep, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResourceCreationStage {
    return new ResourceCreationStage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResourceCreationStage {
    return new ResourceCreationStage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResourceCreationStage {
    return new ResourceCreationStage().fromJsonString(jsonString, options);
  }

  static equals(a: ResourceCreationStage | PlainMessage<ResourceCreationStage> | undefined, b: ResourceCreationStage | PlainMessage<ResourceCreationStage> | undefined): boolean {
    return proto3.util.equals(ResourceCreationStage, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.ResourceCreationStep
 */
export class ResourceCreationStep extends Message<ResourceCreationStep> {
  /**
   * @generated from oneof api.v1.capsule.rollout.ResourceCreationStep.step
   */
  step: {
    /**
     * @generated from field: api.v1.capsule.rollout.GenericStep generic = 1;
     */
    value: GenericStep;
    case: "generic";
  } | {
    /**
     * @generated from field: api.v1.capsule.rollout.CreateResourceStep create_resource = 2;
     */
    value: CreateResourceStep;
    case: "createResource";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ResourceCreationStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.ResourceCreationStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "generic", kind: "message", T: GenericStep, oneof: "step" },
    { no: 2, name: "create_resource", kind: "message", T: CreateResourceStep, oneof: "step" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResourceCreationStep {
    return new ResourceCreationStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResourceCreationStep {
    return new ResourceCreationStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResourceCreationStep {
    return new ResourceCreationStep().fromJsonString(jsonString, options);
  }

  static equals(a: ResourceCreationStep | PlainMessage<ResourceCreationStep> | undefined, b: ResourceCreationStep | PlainMessage<ResourceCreationStep> | undefined): boolean {
    return proto3.util.equals(ResourceCreationStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.CreateResourceStep
 */
export class CreateResourceStep extends Message<CreateResourceStep> {
  /**
   * @generated from field: api.v1.capsule.rollout.StepInfo info = 1;
   */
  info?: StepInfo;

  /**
   * @generated from field: string kind = 2;
   */
  kind = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<CreateResourceStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.CreateResourceStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StepInfo },
    { no: 2, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateResourceStep {
    return new CreateResourceStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateResourceStep {
    return new CreateResourceStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateResourceStep {
    return new CreateResourceStep().fromJsonString(jsonString, options);
  }

  static equals(a: CreateResourceStep | PlainMessage<CreateResourceStep> | undefined, b: CreateResourceStep | PlainMessage<CreateResourceStep> | undefined): boolean {
    return proto3.util.equals(CreateResourceStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.RunningStage
 */
export class RunningStage extends Message<RunningStage> {
  /**
   * @generated from field: api.v1.capsule.rollout.StageInfo info = 1;
   */
  info?: StageInfo;

  /**
   * @generated from field: repeated api.v1.capsule.rollout.RunningStep steps = 2;
   */
  steps: RunningStep[] = [];

  constructor(data?: PartialMessage<RunningStage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.RunningStage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StageInfo },
    { no: 2, name: "steps", kind: "message", T: RunningStep, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunningStage {
    return new RunningStage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunningStage {
    return new RunningStage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunningStage {
    return new RunningStage().fromJsonString(jsonString, options);
  }

  static equals(a: RunningStage | PlainMessage<RunningStage> | undefined, b: RunningStage | PlainMessage<RunningStage> | undefined): boolean {
    return proto3.util.equals(RunningStage, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.RunningStep
 */
export class RunningStep extends Message<RunningStep> {
  /**
   * @generated from oneof api.v1.capsule.rollout.RunningStep.step
   */
  step: {
    /**
     * @generated from field: api.v1.capsule.rollout.GenericStep generic = 1;
     */
    value: GenericStep;
    case: "generic";
  } | {
    /**
     * @generated from field: api.v1.capsule.rollout.InstancesStep instances = 2;
     */
    value: InstancesStep;
    case: "instances";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<RunningStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.RunningStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "generic", kind: "message", T: GenericStep, oneof: "step" },
    { no: 2, name: "instances", kind: "message", T: InstancesStep, oneof: "step" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunningStep {
    return new RunningStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunningStep {
    return new RunningStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunningStep {
    return new RunningStep().fromJsonString(jsonString, options);
  }

  static equals(a: RunningStep | PlainMessage<RunningStep> | undefined, b: RunningStep | PlainMessage<RunningStep> | undefined): boolean {
    return proto3.util.equals(RunningStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.rollout.InstancesStep
 */
export class InstancesStep extends Message<InstancesStep> {
  /**
   * @generated from field: api.v1.capsule.rollout.StepInfo info = 1;
   */
  info?: StepInfo;

  /**
   * @generated from field: uint32 num_updated = 2;
   */
  numUpdated = 0;

  /**
   * @generated from field: uint32 num_ready = 3;
   */
  numReady = 0;

  /**
   * @generated from field: uint32 num_stuck = 4;
   */
  numStuck = 0;

  /**
   * @generated from field: uint32 num_wrong_version = 5;
   */
  numWrongVersion = 0;

  constructor(data?: PartialMessage<InstancesStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.rollout.InstancesStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StepInfo },
    { no: 2, name: "num_updated", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "num_ready", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "num_stuck", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "num_wrong_version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstancesStep {
    return new InstancesStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstancesStep {
    return new InstancesStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstancesStep {
    return new InstancesStep().fromJsonString(jsonString, options);
  }

  static equals(a: InstancesStep | PlainMessage<InstancesStep> | undefined, b: InstancesStep | PlainMessage<InstancesStep> | undefined): boolean {
    return proto3.util.equals(InstancesStep, a, b);
  }
}

