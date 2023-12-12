// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/capsule/instance/status.proto (package api.v1.capsule.instance, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.v1.capsule.instance.StageState
 */
export enum StageState {
  /**
   * @generated from enum value: STAGE_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STAGE_STATE_ONGOING = 1;
   */
  ONGOING = 1,

  /**
   * @generated from enum value: STAGE_STATE_FAILED = 2;
   */
  FAILED = 2,

  /**
   * @generated from enum value: STAGE_STATE_DONE = 3;
   */
  DONE = 3,

  /**
   * @generated from enum value: STAGE_STATE_RUNNING = 4;
   */
  RUNNING = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(StageState)
proto3.util.setEnumType(StageState, "api.v1.capsule.instance.StageState", [
  { no: 0, name: "STAGE_STATE_UNSPECIFIED" },
  { no: 1, name: "STAGE_STATE_ONGOING" },
  { no: 2, name: "STAGE_STATE_FAILED" },
  { no: 3, name: "STAGE_STATE_DONE" },
  { no: 4, name: "STAGE_STATE_RUNNING" },
]);

/**
 * @generated from enum api.v1.capsule.instance.StepState
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

  /**
   * @generated from enum value: STEP_STATE_RUNNING = 4;
   */
  RUNNING = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(StepState)
proto3.util.setEnumType(StepState, "api.v1.capsule.instance.StepState", [
  { no: 0, name: "STEP_STATE_UNSPECIFIED" },
  { no: 1, name: "STEP_STATE_ONGOING" },
  { no: 2, name: "STEP_STATE_FAILED" },
  { no: 3, name: "STEP_STATE_DONE" },
  { no: 4, name: "STEP_STATE_RUNNING" },
]);

/**
 * @generated from enum api.v1.capsule.instance.PlacementState
 */
export enum PlacementState {
  /**
   * @generated from enum value: SCHEDULING_STATE_UNSPECIFIED = 0;
   */
  SCHEDULING_STATE_UNSPECIFIED = 0,

  /**
   * @generated from enum value: SCHEDULING_STATE_UNSCHEDULEABLE = 1;
   */
  SCHEDULING_STATE_UNSCHEDULEABLE = 1,

  /**
   * @generated from enum value: SCHEDULING_STATE_DONE = 2;
   */
  SCHEDULING_STATE_DONE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PlacementState)
proto3.util.setEnumType(PlacementState, "api.v1.capsule.instance.PlacementState", [
  { no: 0, name: "SCHEDULING_STATE_UNSPECIFIED" },
  { no: 1, name: "SCHEDULING_STATE_UNSCHEDULEABLE" },
  { no: 2, name: "SCHEDULING_STATE_DONE" },
]);

/**
 * @generated from enum api.v1.capsule.instance.ImagePullingState
 */
export enum ImagePullingState {
  /**
   * @generated from enum value: IMAGE_PULLING_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: IMAGE_PULLING_STATE_PULLING = 1;
   */
  PULLING = 1,

  /**
   * @generated from enum value: IMAGE_PULLING_STATE_ERROR = 2;
   */
  ERROR = 2,

  /**
   * @generated from enum value: IMAGE_PULLING_STATE_BACK_OFF = 3;
   */
  BACK_OFF = 3,

  /**
   * @generated from enum value: IMAGE_PULLING_STATE_DONE = 4;
   */
  DONE = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(ImagePullingState)
proto3.util.setEnumType(ImagePullingState, "api.v1.capsule.instance.ImagePullingState", [
  { no: 0, name: "IMAGE_PULLING_STATE_UNSPECIFIED" },
  { no: 1, name: "IMAGE_PULLING_STATE_PULLING" },
  { no: 2, name: "IMAGE_PULLING_STATE_ERROR" },
  { no: 3, name: "IMAGE_PULLING_STATE_BACK_OFF" },
  { no: 4, name: "IMAGE_PULLING_STATE_DONE" },
]);

/**
 * @generated from enum api.v1.capsule.instance.ReadyState
 */
export enum ReadyState {
  /**
   * @generated from enum value: READY_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: READY_STATE_CRASH_LOOP_BACKOFF = 1;
   */
  CRASH_LOOP_BACKOFF = 1,

  /**
   * @generated from enum value: READY_STATE_NOT_READY = 2;
   */
  NOT_READY = 2,

  /**
   * @generated from enum value: READY_STATE_READY = 3;
   */
  READY = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ReadyState)
proto3.util.setEnumType(ReadyState, "api.v1.capsule.instance.ReadyState", [
  { no: 0, name: "READY_STATE_UNSPECIFIED" },
  { no: 1, name: "READY_STATE_CRASH_LOOP_BACKOFF" },
  { no: 2, name: "READY_STATE_NOT_READY" },
  { no: 3, name: "READY_STATE_READY" },
]);

/**
 * Status is a representation of the current state of an instance
 *
 * @generated from message api.v1.capsule.instance.Status
 */
export class Status extends Message<Status> {
  /**
   * @generated from field: string instance_id = 1;
   */
  instanceId = "";

  /**
   * @generated from field: api.v1.capsule.instance.Stages stages = 2;
   */
  stages?: Stages;

  /**
   * @generated from field: uint64 rollout_id = 3;
   */
  rolloutId = protoInt64.zero;

  /**
   * @generated from field: string image = 4;
   */
  image = "";

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 6;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<Status>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.Status";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "stages", kind: "message", T: Stages },
    { no: 3, name: "rollout_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "created_at", kind: "message", T: Timestamp },
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
 * @generated from message api.v1.capsule.instance.Stages
 */
export class Stages extends Message<Stages> {
  /**
   * @generated from field: api.v1.capsule.instance.SchedulingStage schedule = 1;
   */
  schedule?: SchedulingStage;

  /**
   * @generated from field: api.v1.capsule.instance.PreparingStage preparing = 2;
   */
  preparing?: PreparingStage;

  /**
   * @generated from field: api.v1.capsule.instance.RunningStage running = 3;
   */
  running?: RunningStage;

  constructor(data?: PartialMessage<Stages>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.Stages";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "schedule", kind: "message", T: SchedulingStage },
    { no: 2, name: "preparing", kind: "message", T: PreparingStage },
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
 * @generated from message api.v1.capsule.instance.StageInfo
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
   * @generated from field: api.v1.capsule.instance.StageState state = 3;
   */
  state = StageState.UNSPECIFIED;

  constructor(data?: PartialMessage<StageInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.StageInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "updated_at", kind: "message", T: Timestamp },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(StageState) },
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
 * @generated from message api.v1.capsule.instance.SchedulingStage
 */
export class SchedulingStage extends Message<SchedulingStage> {
  /**
   * @generated from field: api.v1.capsule.instance.StageInfo info = 1;
   */
  info?: StageInfo;

  /**
   * @generated from field: repeated api.v1.capsule.instance.SchedulingStep steps = 2;
   */
  steps: SchedulingStep[] = [];

  constructor(data?: PartialMessage<SchedulingStage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.SchedulingStage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StageInfo },
    { no: 2, name: "steps", kind: "message", T: SchedulingStep, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SchedulingStage {
    return new SchedulingStage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SchedulingStage {
    return new SchedulingStage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SchedulingStage {
    return new SchedulingStage().fromJsonString(jsonString, options);
  }

  static equals(a: SchedulingStage | PlainMessage<SchedulingStage> | undefined, b: SchedulingStage | PlainMessage<SchedulingStage> | undefined): boolean {
    return proto3.util.equals(SchedulingStage, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.SchedulingStep
 */
export class SchedulingStep extends Message<SchedulingStep> {
  /**
   * @generated from oneof api.v1.capsule.instance.SchedulingStep.step
   */
  step: {
    /**
     * @generated from field: api.v1.capsule.instance.GenericStep generic = 1;
     */
    value: GenericStep;
    case: "generic";
  } | {
    /**
     * @generated from field: api.v1.capsule.instance.PlacementStep placement = 2;
     */
    value: PlacementStep;
    case: "placement";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<SchedulingStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.SchedulingStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "generic", kind: "message", T: GenericStep, oneof: "step" },
    { no: 2, name: "placement", kind: "message", T: PlacementStep, oneof: "step" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SchedulingStep {
    return new SchedulingStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SchedulingStep {
    return new SchedulingStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SchedulingStep {
    return new SchedulingStep().fromJsonString(jsonString, options);
  }

  static equals(a: SchedulingStep | PlainMessage<SchedulingStep> | undefined, b: SchedulingStep | PlainMessage<SchedulingStep> | undefined): boolean {
    return proto3.util.equals(SchedulingStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.PlacementStep
 */
export class PlacementStep extends Message<PlacementStep> {
  /**
   * @generated from field: api.v1.capsule.instance.StepInfo info = 1;
   */
  info?: StepInfo;

  /**
   * @generated from field: string node = 2;
   */
  node = "";

  constructor(data?: PartialMessage<PlacementStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.PlacementStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StepInfo },
    { no: 2, name: "node", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlacementStep {
    return new PlacementStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlacementStep {
    return new PlacementStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlacementStep {
    return new PlacementStep().fromJsonString(jsonString, options);
  }

  static equals(a: PlacementStep | PlainMessage<PlacementStep> | undefined, b: PlacementStep | PlainMessage<PlacementStep> | undefined): boolean {
    return proto3.util.equals(PlacementStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.GenericStep
 */
export class GenericStep extends Message<GenericStep> {
  /**
   * @generated from field: api.v1.capsule.instance.StepInfo info = 1;
   */
  info?: StepInfo;

  constructor(data?: PartialMessage<GenericStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.GenericStep";
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
 * @generated from message api.v1.capsule.instance.StepInfo
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
   * @generated from field: api.v1.capsule.instance.StepState state = 4;
   */
  state = StepState.UNSPECIFIED;

  constructor(data?: PartialMessage<StepInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.StepInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "updated_at", kind: "message", T: Timestamp },
    { no: 4, name: "state", kind: "enum", T: proto3.getEnumType(StepState) },
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
 * @generated from message api.v1.capsule.instance.PreparingStage
 */
export class PreparingStage extends Message<PreparingStage> {
  /**
   * @generated from field: api.v1.capsule.instance.StageInfo info = 1;
   */
  info?: StageInfo;

  /**
   * @generated from field: repeated api.v1.capsule.instance.PreparingStep steps = 2;
   */
  steps: PreparingStep[] = [];

  constructor(data?: PartialMessage<PreparingStage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.PreparingStage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StageInfo },
    { no: 2, name: "steps", kind: "message", T: PreparingStep, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PreparingStage {
    return new PreparingStage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PreparingStage {
    return new PreparingStage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PreparingStage {
    return new PreparingStage().fromJsonString(jsonString, options);
  }

  static equals(a: PreparingStage | PlainMessage<PreparingStage> | undefined, b: PreparingStage | PlainMessage<PreparingStage> | undefined): boolean {
    return proto3.util.equals(PreparingStage, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.PreparingStep
 */
export class PreparingStep extends Message<PreparingStep> {
  /**
   * @generated from oneof api.v1.capsule.instance.PreparingStep.step
   */
  step: {
    /**
     * @generated from field: api.v1.capsule.instance.GenericStep generic = 1;
     */
    value: GenericStep;
    case: "generic";
  } | {
    /**
     * @generated from field: api.v1.capsule.instance.ImagePullingStep image_pulling = 2;
     */
    value: ImagePullingStep;
    case: "imagePulling";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<PreparingStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.PreparingStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "generic", kind: "message", T: GenericStep, oneof: "step" },
    { no: 2, name: "image_pulling", kind: "message", T: ImagePullingStep, oneof: "step" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PreparingStep {
    return new PreparingStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PreparingStep {
    return new PreparingStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PreparingStep {
    return new PreparingStep().fromJsonString(jsonString, options);
  }

  static equals(a: PreparingStep | PlainMessage<PreparingStep> | undefined, b: PreparingStep | PlainMessage<PreparingStep> | undefined): boolean {
    return proto3.util.equals(PreparingStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.ImagePullingStep
 */
export class ImagePullingStep extends Message<ImagePullingStep> {
  /**
   * @generated from field: api.v1.capsule.instance.StepInfo info = 1;
   */
  info?: StepInfo;

  /**
   * @generated from field: api.v1.capsule.instance.ImagePullingState state = 2;
   */
  state = ImagePullingState.UNSPECIFIED;

  /**
   * @generated from field: string image = 3;
   */
  image = "";

  constructor(data?: PartialMessage<ImagePullingStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.ImagePullingStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StepInfo },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(ImagePullingState) },
    { no: 3, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImagePullingStep {
    return new ImagePullingStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImagePullingStep {
    return new ImagePullingStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImagePullingStep {
    return new ImagePullingStep().fromJsonString(jsonString, options);
  }

  static equals(a: ImagePullingStep | PlainMessage<ImagePullingStep> | undefined, b: ImagePullingStep | PlainMessage<ImagePullingStep> | undefined): boolean {
    return proto3.util.equals(ImagePullingStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.RunningStage
 */
export class RunningStage extends Message<RunningStage> {
  /**
   * @generated from field: api.v1.capsule.instance.StageInfo info = 1;
   */
  info?: StageInfo;

  /**
   * @generated from field: repeated api.v1.capsule.instance.RunningStep steps = 2;
   */
  steps: RunningStep[] = [];

  /**
   * @generated from field: uint32 restarts = 3;
   */
  restarts = 0;

  /**
   * @generated from field: api.v1.capsule.instance.ContainerTermination last_container_termination = 4;
   */
  lastContainerTermination?: ContainerTermination;

  constructor(data?: PartialMessage<RunningStage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.RunningStage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StageInfo },
    { no: 2, name: "steps", kind: "message", T: RunningStep, repeated: true },
    { no: 3, name: "restarts", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "last_container_termination", kind: "message", T: ContainerTermination },
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
 * @generated from message api.v1.capsule.instance.RunningStep
 */
export class RunningStep extends Message<RunningStep> {
  /**
   * @generated from oneof api.v1.capsule.instance.RunningStep.step
   */
  step: {
    /**
     * @generated from field: api.v1.capsule.instance.GenericStep generic = 1;
     */
    value: GenericStep;
    case: "generic";
  } | {
    /**
     * @generated from field: api.v1.capsule.instance.ReadyStep ready = 2;
     */
    value: ReadyStep;
    case: "ready";
  } | {
    /**
     * @generated from field: api.v1.capsule.instance.ExecutingStep executing = 3;
     */
    value: ExecutingStep;
    case: "executing";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<RunningStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.RunningStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "generic", kind: "message", T: GenericStep, oneof: "step" },
    { no: 2, name: "ready", kind: "message", T: ReadyStep, oneof: "step" },
    { no: 3, name: "executing", kind: "message", T: ExecutingStep, oneof: "step" },
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
 * @generated from message api.v1.capsule.instance.ReadyStep
 */
export class ReadyStep extends Message<ReadyStep> {
  /**
   * @generated from field: api.v1.capsule.instance.StepInfo info = 1;
   */
  info?: StepInfo;

  /**
   * @generated from field: api.v1.capsule.instance.ReadyState state = 2;
   */
  state = ReadyState.UNSPECIFIED;

  constructor(data?: PartialMessage<ReadyStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.ReadyStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StepInfo },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(ReadyState) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadyStep {
    return new ReadyStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadyStep {
    return new ReadyStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadyStep {
    return new ReadyStep().fromJsonString(jsonString, options);
  }

  static equals(a: ReadyStep | PlainMessage<ReadyStep> | undefined, b: ReadyStep | PlainMessage<ReadyStep> | undefined): boolean {
    return proto3.util.equals(ReadyStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.ExecutingStep
 */
export class ExecutingStep extends Message<ExecutingStep> {
  /**
   * @generated from field: api.v1.capsule.instance.StepInfo info = 1;
   */
  info?: StepInfo;

  /**
   * @generated from field: google.protobuf.Timestamp started_at = 2;
   */
  startedAt?: Timestamp;

  constructor(data?: PartialMessage<ExecutingStep>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.ExecutingStep";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: StepInfo },
    { no: 2, name: "started_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecutingStep {
    return new ExecutingStep().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecutingStep {
    return new ExecutingStep().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecutingStep {
    return new ExecutingStep().fromJsonString(jsonString, options);
  }

  static equals(a: ExecutingStep | PlainMessage<ExecutingStep> | undefined, b: ExecutingStep | PlainMessage<ExecutingStep> | undefined): boolean {
    return proto3.util.equals(ExecutingStep, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.ContainerTermination
 */
export class ContainerTermination extends Message<ContainerTermination> {
  /**
   * Exit status from the last termination of the container
   *
   * @generated from field: int32 exit_code = 1;
   */
  exitCode = 0;

  /**
   * Signal from the last termination of the container
   * +optional
   *
   * @generated from field: int32 signal = 2;
   */
  signal = 0;

  /**
   * (brief) reason from the last termination of the container
   * +optional
   *
   * @generated from field: string reason = 3;
   */
  reason = "";

  /**
   * Message regarding the last termination of the container
   * +optional
   *
   * @generated from field: string message = 4;
   */
  message = "";

  /**
   * Time at which previous execution of the container started
   * +optional
   *
   * @generated from field: google.protobuf.Timestamp started_at = 5;
   */
  startedAt?: Timestamp;

  /**
   * Time at which the container last terminated
   * +optional
   *
   * @generated from field: google.protobuf.Timestamp finished_at = 6;
   */
  finishedAt?: Timestamp;

  /**
   * Container's ID in the format '<type>://<container_id>'
   * +optional
   *
   * @generated from field: string container_id = 7;
   */
  containerId = "";

  constructor(data?: PartialMessage<ContainerTermination>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.ContainerTermination";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exit_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "signal", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "started_at", kind: "message", T: Timestamp },
    { no: 6, name: "finished_at", kind: "message", T: Timestamp },
    { no: 7, name: "container_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContainerTermination {
    return new ContainerTermination().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContainerTermination {
    return new ContainerTermination().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContainerTermination {
    return new ContainerTermination().fromJsonString(jsonString, options);
  }

  static equals(a: ContainerTermination | PlainMessage<ContainerTermination> | undefined, b: ContainerTermination | PlainMessage<ContainerTermination> | undefined): boolean {
    return proto3.util.equals(ContainerTermination, a, b);
  }
}

