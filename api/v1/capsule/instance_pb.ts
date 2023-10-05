// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file api/v1/capsule/instance.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.v1.capsule.State
 */
export enum State {
  /**
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATE_PENDING = 1;
   */
  PENDING = 1,

  /**
   * @generated from enum value: STATE_RUNNING = 2;
   */
  RUNNING = 2,

  /**
   * @generated from enum value: STATE_SUCCEEDED = 3;
   */
  SUCCEEDED = 3,

  /**
   * @generated from enum value: STATE_FAILED = 4;
   */
  FAILED = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(State)
proto3.util.setEnumType(State, "api.v1.capsule.State", [
  { no: 0, name: "STATE_UNSPECIFIED" },
  { no: 1, name: "STATE_PENDING" },
  { no: 2, name: "STATE_RUNNING" },
  { no: 3, name: "STATE_SUCCEEDED" },
  { no: 4, name: "STATE_FAILED" },
]);

/**
 * @generated from enum api.v1.capsule.ScheduleState
 */
export enum ScheduleState {
  /**
   * @generated from enum value: SCHEDULE_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SCHEDULE_STATE_CURRENTLY_UNSCHEDULEABLE = 1;
   */
  CURRENTLY_UNSCHEDULEABLE = 1,

  /**
   * @generated from enum value: SCHEDULE_STATE_DONE = 2;
   */
  DONE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ScheduleState)
proto3.util.setEnumType(ScheduleState, "api.v1.capsule.ScheduleState", [
  { no: 0, name: "SCHEDULE_STATE_UNSPECIFIED" },
  { no: 1, name: "SCHEDULE_STATE_CURRENTLY_UNSCHEDULEABLE" },
  { no: 2, name: "SCHEDULE_STATE_DONE" },
]);

/**
 * @generated from enum api.v1.capsule.ImagePullingState
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
   * @generated from enum value: IMAGE_PULLING_STATE_PULL_BACKOFF = 3;
   */
  PULL_BACKOFF = 3,

  /**
   * @generated from enum value: IMAGE_PULLING_STATE_DONE = 4;
   */
  DONE = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(ImagePullingState)
proto3.util.setEnumType(ImagePullingState, "api.v1.capsule.ImagePullingState", [
  { no: 0, name: "IMAGE_PULLING_STATE_UNSPECIFIED" },
  { no: 1, name: "IMAGE_PULLING_STATE_PULLING" },
  { no: 2, name: "IMAGE_PULLING_STATE_ERROR" },
  { no: 3, name: "IMAGE_PULLING_STATE_PULL_BACKOFF" },
  { no: 4, name: "IMAGE_PULLING_STATE_DONE" },
]);

/**
 * @generated from enum api.v1.capsule.InstanceRunningReadyState
 */
export enum InstanceRunningReadyState {
  /**
   * @generated from enum value: INSTANCE_RUNNING_READY_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: INSTANCE_RUNNING_READY_STATE_NOT_READY = 1;
   */
  NOT_READY = 1,

  /**
   * @generated from enum value: INSTANCE_RUNNING_READY_STATE_READY = 2;
   */
  READY = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(InstanceRunningReadyState)
proto3.util.setEnumType(InstanceRunningReadyState, "api.v1.capsule.InstanceRunningReadyState", [
  { no: 0, name: "INSTANCE_RUNNING_READY_STATE_UNSPECIFIED" },
  { no: 1, name: "INSTANCE_RUNNING_READY_STATE_NOT_READY" },
  { no: 2, name: "INSTANCE_RUNNING_READY_STATE_READY" },
]);

/**
 * @generated from message api.v1.capsule.Instance
 */
export class Instance extends Message<Instance> {
  /**
   * @generated from field: string instance_id = 1;
   */
  instanceId = "";

  /**
   * @generated from field: string build_id = 2;
   */
  buildId = "";

  /**
   * @generated from field: api.v1.capsule.State state = 3;
   */
  state = State.UNSPECIFIED;

  /**
   * @generated from field: uint32 restart_count = 4;
   */
  restartCount = 0;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp started_at = 6;
   */
  startedAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp finished_at = 7;
   */
  finishedAt?: Timestamp;

  /**
   * @generated from field: string message = 8;
   */
  message = "";

  /**
   * @generated from field: uint64 rollout_id = 9;
   */
  rolloutId = protoInt64.zero;

  constructor(data?: PartialMessage<Instance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Instance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "build_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(State) },
    { no: 4, name: "restart_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "created_at", kind: "message", T: Timestamp },
    { no: 6, name: "started_at", kind: "message", T: Timestamp },
    { no: 7, name: "finished_at", kind: "message", T: Timestamp },
    { no: 8, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "rollout_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Instance {
    return new Instance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Instance {
    return new Instance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Instance {
    return new Instance().fromJsonString(jsonString, options);
  }

  static equals(a: Instance | PlainMessage<Instance> | undefined, b: Instance | PlainMessage<Instance> | undefined): boolean {
    return proto3.util.equals(Instance, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.InstanceStatus
 */
export class InstanceStatus extends Message<InstanceStatus> {
  /**
   * @generated from field: string instance_id = 1;
   */
  instanceId = "";

  /**
   * @generated from field: string message = 2;
   */
  message = "";

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: api.v1.capsule.InstanceStatusScheduling schedule = 4;
   */
  schedule?: InstanceStatusScheduling;

  /**
   * @generated from field: api.v1.capsule.InstanceStatusPreparing preparing = 5;
   */
  preparing?: InstanceStatusPreparing;

  /**
   * @generated from field: api.v1.capsule.InstanceStatusRunning running = 6;
   */
  running?: InstanceStatusRunning;

  constructor(data?: PartialMessage<InstanceStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.InstanceStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
    { no: 4, name: "schedule", kind: "message", T: InstanceStatusScheduling },
    { no: 5, name: "preparing", kind: "message", T: InstanceStatusPreparing },
    { no: 6, name: "running", kind: "message", T: InstanceStatusRunning },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstanceStatus {
    return new InstanceStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstanceStatus {
    return new InstanceStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstanceStatus {
    return new InstanceStatus().fromJsonString(jsonString, options);
  }

  static equals(a: InstanceStatus | PlainMessage<InstanceStatus> | undefined, b: InstanceStatus | PlainMessage<InstanceStatus> | undefined): boolean {
    return proto3.util.equals(InstanceStatus, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.InstanceStatusScheduling
 */
export class InstanceStatusScheduling extends Message<InstanceStatusScheduling> {
  /**
   * @generated from field: string message = 1;
   */
  message = "";

  /**
   * @generated from field: api.v1.capsule.StatusTimestamps timestamps = 2;
   */
  timestamps?: StatusTimestamps;

  /**
   * @generated from field: api.v1.capsule.ScheduleState state = 3;
   */
  state = ScheduleState.UNSPECIFIED;

  constructor(data?: PartialMessage<InstanceStatusScheduling>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.InstanceStatusScheduling";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timestamps", kind: "message", T: StatusTimestamps },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(ScheduleState) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstanceStatusScheduling {
    return new InstanceStatusScheduling().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstanceStatusScheduling {
    return new InstanceStatusScheduling().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstanceStatusScheduling {
    return new InstanceStatusScheduling().fromJsonString(jsonString, options);
  }

  static equals(a: InstanceStatusScheduling | PlainMessage<InstanceStatusScheduling> | undefined, b: InstanceStatusScheduling | PlainMessage<InstanceStatusScheduling> | undefined): boolean {
    return proto3.util.equals(InstanceStatusScheduling, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.InstanceStatusPreparing
 */
export class InstanceStatusPreparing extends Message<InstanceStatusPreparing> {
  /**
   * @generated from field: string message = 1;
   */
  message = "";

  /**
   * @generated from field: api.v1.capsule.StatusTimestamps timestamps = 2;
   */
  timestamps?: StatusTimestamps;

  /**
   * @generated from field: api.v1.capsule.ImagePulling pulling = 3;
   */
  pulling?: ImagePulling;

  constructor(data?: PartialMessage<InstanceStatusPreparing>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.InstanceStatusPreparing";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timestamps", kind: "message", T: StatusTimestamps },
    { no: 3, name: "pulling", kind: "message", T: ImagePulling },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstanceStatusPreparing {
    return new InstanceStatusPreparing().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstanceStatusPreparing {
    return new InstanceStatusPreparing().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstanceStatusPreparing {
    return new InstanceStatusPreparing().fromJsonString(jsonString, options);
  }

  static equals(a: InstanceStatusPreparing | PlainMessage<InstanceStatusPreparing> | undefined, b: InstanceStatusPreparing | PlainMessage<InstanceStatusPreparing> | undefined): boolean {
    return proto3.util.equals(InstanceStatusPreparing, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.ImagePulling
 */
export class ImagePulling extends Message<ImagePulling> {
  /**
   * @generated from field: string message = 1;
   */
  message = "";

  /**
   * @generated from field: api.v1.capsule.StatusTimestamps timestamps = 2;
   */
  timestamps?: StatusTimestamps;

  /**
   * @generated from field: api.v1.capsule.ImagePullingState state = 3;
   */
  state = ImagePullingState.UNSPECIFIED;

  constructor(data?: PartialMessage<ImagePulling>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.ImagePulling";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timestamps", kind: "message", T: StatusTimestamps },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(ImagePullingState) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImagePulling {
    return new ImagePulling().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImagePulling {
    return new ImagePulling().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImagePulling {
    return new ImagePulling().fromJsonString(jsonString, options);
  }

  static equals(a: ImagePulling | PlainMessage<ImagePulling> | undefined, b: ImagePulling | PlainMessage<ImagePulling> | undefined): boolean {
    return proto3.util.equals(ImagePulling, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.CrashLoopBackoff
 */
export class CrashLoopBackoff extends Message<CrashLoopBackoff> {
  /**
   * @generated from field: string message = 1;
   */
  message = "";

  /**
   * @generated from field: api.v1.capsule.StatusTimestamps timestamps = 2;
   */
  timestamps?: StatusTimestamps;

  /**
   * @generated from field: api.v1.capsule.ContainerStateTerminated terminated = 3;
   */
  terminated?: ContainerStateTerminated;

  /**
   * @generated from field: uint32 restarts = 4;
   */
  restarts = 0;

  constructor(data?: PartialMessage<CrashLoopBackoff>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.CrashLoopBackoff";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timestamps", kind: "message", T: StatusTimestamps },
    { no: 3, name: "terminated", kind: "message", T: ContainerStateTerminated },
    { no: 4, name: "restarts", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CrashLoopBackoff {
    return new CrashLoopBackoff().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CrashLoopBackoff {
    return new CrashLoopBackoff().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CrashLoopBackoff {
    return new CrashLoopBackoff().fromJsonString(jsonString, options);
  }

  static equals(a: CrashLoopBackoff | PlainMessage<CrashLoopBackoff> | undefined, b: CrashLoopBackoff | PlainMessage<CrashLoopBackoff> | undefined): boolean {
    return proto3.util.equals(CrashLoopBackoff, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.InstanceStatusRunning
 */
export class InstanceStatusRunning extends Message<InstanceStatusRunning> {
  /**
   * @generated from field: string message = 1;
   */
  message = "";

  /**
   * @generated from field: api.v1.capsule.StatusTimestamps timestamps = 2;
   */
  timestamps?: StatusTimestamps;

  /**
   * @generated from field: api.v1.capsule.CrashLoopBackoff crash_loop_backoff = 3;
   */
  crashLoopBackoff?: CrashLoopBackoff;

  /**
   * @generated from field: api.v1.capsule.InstanceRunningReady ready = 4;
   */
  ready?: InstanceRunningReady;

  /**
   * @generated from field: api.v1.capsule.Running running = 5;
   */
  running?: Running;

  constructor(data?: PartialMessage<InstanceStatusRunning>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.InstanceStatusRunning";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timestamps", kind: "message", T: StatusTimestamps },
    { no: 3, name: "crash_loop_backoff", kind: "message", T: CrashLoopBackoff },
    { no: 4, name: "ready", kind: "message", T: InstanceRunningReady },
    { no: 5, name: "running", kind: "message", T: Running },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstanceStatusRunning {
    return new InstanceStatusRunning().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstanceStatusRunning {
    return new InstanceStatusRunning().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstanceStatusRunning {
    return new InstanceStatusRunning().fromJsonString(jsonString, options);
  }

  static equals(a: InstanceStatusRunning | PlainMessage<InstanceStatusRunning> | undefined, b: InstanceStatusRunning | PlainMessage<InstanceStatusRunning> | undefined): boolean {
    return proto3.util.equals(InstanceStatusRunning, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Running
 */
export class Running extends Message<Running> {
  /**
   * @generated from field: api.v1.capsule.StatusTimestamps timestamps = 1;
   */
  timestamps?: StatusTimestamps;

  constructor(data?: PartialMessage<Running>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Running";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timestamps", kind: "message", T: StatusTimestamps },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Running {
    return new Running().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Running {
    return new Running().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Running {
    return new Running().fromJsonString(jsonString, options);
  }

  static equals(a: Running | PlainMessage<Running> | undefined, b: Running | PlainMessage<Running> | undefined): boolean {
    return proto3.util.equals(Running, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.InstanceRunningReady
 */
export class InstanceRunningReady extends Message<InstanceRunningReady> {
  /**
   * @generated from field: api.v1.capsule.StatusTimestamps timestamps = 1;
   */
  timestamps?: StatusTimestamps;

  /**
   * @generated from field: api.v1.capsule.InstanceRunningReadyState state = 2;
   */
  state = InstanceRunningReadyState.UNSPECIFIED;

  constructor(data?: PartialMessage<InstanceRunningReady>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.InstanceRunningReady";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timestamps", kind: "message", T: StatusTimestamps },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(InstanceRunningReadyState) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstanceRunningReady {
    return new InstanceRunningReady().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstanceRunningReady {
    return new InstanceRunningReady().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstanceRunningReady {
    return new InstanceRunningReady().fromJsonString(jsonString, options);
  }

  static equals(a: InstanceRunningReady | PlainMessage<InstanceRunningReady> | undefined, b: InstanceRunningReady | PlainMessage<InstanceRunningReady> | undefined): boolean {
    return proto3.util.equals(InstanceRunningReady, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.ContainerStateTerminated
 */
export class ContainerStateTerminated extends Message<ContainerStateTerminated> {
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

  constructor(data?: PartialMessage<ContainerStateTerminated>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.ContainerStateTerminated";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exit_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "signal", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "started_at", kind: "message", T: Timestamp },
    { no: 6, name: "finished_at", kind: "message", T: Timestamp },
    { no: 7, name: "container_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContainerStateTerminated {
    return new ContainerStateTerminated().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContainerStateTerminated {
    return new ContainerStateTerminated().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContainerStateTerminated {
    return new ContainerStateTerminated().fromJsonString(jsonString, options);
  }

  static equals(a: ContainerStateTerminated | PlainMessage<ContainerStateTerminated> | undefined, b: ContainerStateTerminated | PlainMessage<ContainerStateTerminated> | undefined): boolean {
    return proto3.util.equals(ContainerStateTerminated, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.StatusTimestamps
 */
export class StatusTimestamps extends Message<StatusTimestamps> {
  /**
   * @generated from field: google.protobuf.Timestamp entered = 1;
   */
  entered?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated = 2;
   */
  updated?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp exited = 3;
   */
  exited?: Timestamp;

  constructor(data?: PartialMessage<StatusTimestamps>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.StatusTimestamps";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entered", kind: "message", T: Timestamp },
    { no: 2, name: "updated", kind: "message", T: Timestamp },
    { no: 3, name: "exited", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StatusTimestamps {
    return new StatusTimestamps().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StatusTimestamps {
    return new StatusTimestamps().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StatusTimestamps {
    return new StatusTimestamps().fromJsonString(jsonString, options);
  }

  static equals(a: StatusTimestamps | PlainMessage<StatusTimestamps> | undefined, b: StatusTimestamps | PlainMessage<StatusTimestamps> | undefined): boolean {
    return proto3.util.equals(StatusTimestamps, a, b);
  }
}

