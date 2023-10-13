// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file api/v1/capsule/instance/status.proto (package api.v1.capsule.instance, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.v1.capsule.instance.StateStatus
 */
export enum StateStatus {
  /**
   * @generated from enum value: STATE_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATE_STATUS_ONGOING = 1;
   */
  ONGOING = 1,

  /**
   * @generated from enum value: STATE_STATUS_FAILED = 2;
   */
  FAILED = 2,

  /**
   * @generated from enum value: STATE_STATUS_DONE = 3;
   */
  DONE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(StateStatus)
proto3.util.setEnumType(StateStatus, "api.v1.capsule.instance.StateStatus", [
  { no: 0, name: "STATE_STATUS_UNSPECIFIED" },
  { no: 1, name: "STATE_STATUS_ONGOING" },
  { no: 2, name: "STATE_STATUS_FAILED" },
  { no: 3, name: "STATE_STATUS_DONE" },
]);

/**
 * @generated from enum api.v1.capsule.instance.StateID
 */
export enum StateID {
  /**
   * @generated from enum value: STATE_ID_UNSPECIFIED = 0;
   */
  STATE_ID_UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATE_ID_SCHEDULING = 1;
   */
  STATE_ID_SCHEDULING = 1,

  /**
   * @generated from enum value: STATE_ID_PREPARING = 2;
   */
  STATE_ID_PREPARING = 2,

  /**
   * @generated from enum value: STATE_ID_RUNNING = 3;
   */
  STATE_ID_RUNNING = 3,

  /**
   * @generated from enum value: STATE_ID_UNSCHEDULEABLE = 4;
   */
  STATE_ID_UNSCHEDULEABLE = 4,

  /**
   * @generated from enum value: STATE_ID_SCHEDULING_DONE = 5;
   */
  STATE_ID_SCHEDULING_DONE = 5,

  /**
   * @generated from enum value: STATE_ID_IMAGE_PULLING = 6;
   */
  STATE_ID_IMAGE_PULLING = 6,

  /**
   * @generated from enum value: STATE_ID_IMAGE_PULLING_ERROR = 7;
   */
  STATE_ID_IMAGE_PULLING_ERROR = 7,

  /**
   * @generated from enum value: STATE_ID_IMAGE_PULLING_BACK_OFF = 8;
   */
  STATE_ID_IMAGE_PULLING_BACK_OFF = 8,

  /**
   * @generated from enum value: STATE_ID_IMAGE_PULLING_DONE = 9;
   */
  STATE_ID_IMAGE_PULLING_DONE = 9,

  /**
   * @generated from enum value: STATE_ID_CRASH_LOOP_BACK_OFF = 10;
   */
  STATE_ID_CRASH_LOOP_BACK_OFF = 10,

  /**
   * @generated from enum value: STATE_ID_WAITING = 11;
   */
  STATE_ID_WAITING = 11,

  /**
   * @generated from enum value: STATE_ID_RUNNING_RUNNING = 12;
   */
  STATE_ID_RUNNING_RUNNING = 12,
}
// Retrieve enum metadata with: proto3.getEnumType(StateID)
proto3.util.setEnumType(StateID, "api.v1.capsule.instance.StateID", [
  { no: 0, name: "STATE_ID_UNSPECIFIED" },
  { no: 1, name: "STATE_ID_SCHEDULING" },
  { no: 2, name: "STATE_ID_PREPARING" },
  { no: 3, name: "STATE_ID_RUNNING" },
  { no: 4, name: "STATE_ID_UNSCHEDULEABLE" },
  { no: 5, name: "STATE_ID_SCHEDULING_DONE" },
  { no: 6, name: "STATE_ID_IMAGE_PULLING" },
  { no: 7, name: "STATE_ID_IMAGE_PULLING_ERROR" },
  { no: 8, name: "STATE_ID_IMAGE_PULLING_BACK_OFF" },
  { no: 9, name: "STATE_ID_IMAGE_PULLING_DONE" },
  { no: 10, name: "STATE_ID_CRASH_LOOP_BACK_OFF" },
  { no: 11, name: "STATE_ID_WAITING" },
  { no: 12, name: "STATE_ID_RUNNING_RUNNING" },
]);

/**
 * @generated from enum api.v1.capsule.instance.StateMachineID
 */
export enum StateMachineID {
  /**
   * @generated from enum value: STATE_MACHINE_ID_UNSPECIFIED = 0;
   */
  STATE_MACHINE_ID_UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATE_MACHINE_ID_BASE = 1;
   */
  STATE_MACHINE_ID_BASE = 1,

  /**
   * @generated from enum value: STATE_MACHINE_ID_SCHEDULING = 2;
   */
  STATE_MACHINE_ID_SCHEDULING = 2,

  /**
   * @generated from enum value: STATE_MACHINE_ID_IMAGE_PULLING = 3;
   */
  STATE_MACHINE_ID_IMAGE_PULLING = 3,

  /**
   * @generated from enum value: STATE_MACHINE_ID_RUNNING = 4;
   */
  STATE_MACHINE_ID_RUNNING = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(StateMachineID)
proto3.util.setEnumType(StateMachineID, "api.v1.capsule.instance.StateMachineID", [
  { no: 0, name: "STATE_MACHINE_ID_UNSPECIFIED" },
  { no: 1, name: "STATE_MACHINE_ID_BASE" },
  { no: 2, name: "STATE_MACHINE_ID_SCHEDULING" },
  { no: 3, name: "STATE_MACHINE_ID_IMAGE_PULLING" },
  { no: 4, name: "STATE_MACHINE_ID_RUNNING" },
]);

/**
 * @generated from message api.v1.capsule.instance.Status
 */
export class Status extends Message<Status> {
  /**
   * @generated from field: string instance_id = 1;
   */
  instanceId = "";

  /**
   * @generated from field: api.v1.capsule.instance.StateMachine state_machine = 2;
   */
  stateMachine?: StateMachine;

  /**
   * @generated from field: api.v1.capsule.instance.Data data = 3;
   */
  data?: Data;

  constructor(data?: PartialMessage<Status>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.Status";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "state_machine", kind: "message", T: StateMachine },
    { no: 3, name: "data", kind: "message", T: Data },
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
 * @generated from message api.v1.capsule.instance.State
 */
export class State extends Message<State> {
  /**
   * @generated from field: api.v1.capsule.instance.StateID id = 1;
   */
  id = StateID.STATE_ID_UNSPECIFIED;

  /**
   * @generated from field: api.v1.capsule.instance.StateStatus status = 2;
   */
  status = StateStatus.UNSPECIFIED;

  /**
   * @generated from field: string message = 3;
   */
  message = "";

  /**
   * @generated from field: api.v1.capsule.instance.Timestamps timestamps = 4;
   */
  timestamps?: Timestamps;

  /**
   * @generated from field: repeated api.v1.capsule.instance.StateMachine sub_state_machines = 5;
   */
  subStateMachines: StateMachine[] = [];

  constructor(data?: PartialMessage<State>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.State";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "enum", T: proto3.getEnumType(StateID) },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(StateStatus) },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "timestamps", kind: "message", T: Timestamps },
    { no: 5, name: "sub_state_machines", kind: "message", T: StateMachine, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): State {
    return new State().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): State {
    return new State().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): State {
    return new State().fromJsonString(jsonString, options);
  }

  static equals(a: State | PlainMessage<State> | undefined, b: State | PlainMessage<State> | undefined): boolean {
    return proto3.util.equals(State, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.StateMachine
 */
export class StateMachine extends Message<StateMachine> {
  /**
   * @generated from field: api.v1.capsule.instance.StateMachineID id = 1;
   */
  id = StateMachineID.STATE_MACHINE_ID_UNSPECIFIED;

  /**
   * @generated from field: api.v1.capsule.instance.StateStatus status = 2;
   */
  status = StateStatus.UNSPECIFIED;

  /**
   * @generated from field: repeated api.v1.capsule.instance.State states = 3;
   */
  states: State[] = [];

  constructor(data?: PartialMessage<StateMachine>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.StateMachine";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "enum", T: proto3.getEnumType(StateMachineID) },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(StateStatus) },
    { no: 3, name: "states", kind: "message", T: State, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StateMachine {
    return new StateMachine().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StateMachine {
    return new StateMachine().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StateMachine {
    return new StateMachine().fromJsonString(jsonString, options);
  }

  static equals(a: StateMachine | PlainMessage<StateMachine> | undefined, b: StateMachine | PlainMessage<StateMachine> | undefined): boolean {
    return proto3.util.equals(StateMachine, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.Timestamps
 */
export class Timestamps extends Message<Timestamps> {
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

  constructor(data?: PartialMessage<Timestamps>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.Timestamps";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entered", kind: "message", T: Timestamp },
    { no: 2, name: "updated", kind: "message", T: Timestamp },
    { no: 3, name: "exited", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Timestamps {
    return new Timestamps().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Timestamps {
    return new Timestamps().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Timestamps {
    return new Timestamps().fromJsonString(jsonString, options);
  }

  static equals(a: Timestamps | PlainMessage<Timestamps> | undefined, b: Timestamps | PlainMessage<Timestamps> | undefined): boolean {
    return proto3.util.equals(Timestamps, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.Data
 */
export class Data extends Message<Data> {
  /**
   * @generated from field: api.v1.capsule.instance.TopLevelData top_level = 1;
   */
  topLevel?: TopLevelData;

  /**
   * @generated from field: api.v1.capsule.instance.RunningData running = 2;
   */
  running?: RunningData;

  /**
   * @generated from field: api.v1.capsule.instance.CrashLoopBackOffData crash_loop_back_off = 3;
   */
  crashLoopBackOff?: CrashLoopBackOffData;

  constructor(data?: PartialMessage<Data>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.Data";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "top_level", kind: "message", T: TopLevelData },
    { no: 2, name: "running", kind: "message", T: RunningData },
    { no: 3, name: "crash_loop_back_off", kind: "message", T: CrashLoopBackOffData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Data {
    return new Data().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Data {
    return new Data().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Data {
    return new Data().fromJsonString(jsonString, options);
  }

  static equals(a: Data | PlainMessage<Data> | undefined, b: Data | PlainMessage<Data> | undefined): boolean {
    return proto3.util.equals(Data, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.TopLevelData
 */
export class TopLevelData extends Message<TopLevelData> {
  /**
   * @generated from field: uint64 rollout_id = 1;
   */
  rolloutId = protoInt64.zero;

  /**
   * @generated from field: string image = 2;
   */
  image = "";

  /**
   * @generated from field: string node = 3;
   */
  node = "";

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 4;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<TopLevelData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.TopLevelData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rollout_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "node", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TopLevelData {
    return new TopLevelData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TopLevelData {
    return new TopLevelData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TopLevelData {
    return new TopLevelData().fromJsonString(jsonString, options);
  }

  static equals(a: TopLevelData | PlainMessage<TopLevelData> | undefined, b: TopLevelData | PlainMessage<TopLevelData> | undefined): boolean {
    return proto3.util.equals(TopLevelData, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.RunningData
 */
export class RunningData extends Message<RunningData> {
  /**
   * @generated from field: uint32 restarts = 1;
   */
  restarts = 0;

  constructor(data?: PartialMessage<RunningData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.RunningData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "restarts", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunningData {
    return new RunningData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunningData {
    return new RunningData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunningData {
    return new RunningData().fromJsonString(jsonString, options);
  }

  static equals(a: RunningData | PlainMessage<RunningData> | undefined, b: RunningData | PlainMessage<RunningData> | undefined): boolean {
    return proto3.util.equals(RunningData, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.instance.CrashLoopBackOffData
 */
export class CrashLoopBackOffData extends Message<CrashLoopBackOffData> {
  /**
   * @generated from field: api.v1.capsule.instance.ContainerTermination termination = 1;
   */
  termination?: ContainerTermination;

  constructor(data?: PartialMessage<CrashLoopBackOffData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.instance.CrashLoopBackOffData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "termination", kind: "message", T: ContainerTermination },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CrashLoopBackOffData {
    return new CrashLoopBackOffData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CrashLoopBackOffData {
    return new CrashLoopBackOffData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CrashLoopBackOffData {
    return new CrashLoopBackOffData().fromJsonString(jsonString, options);
  }

  static equals(a: CrashLoopBackOffData | PlainMessage<CrashLoopBackOffData> | undefined, b: CrashLoopBackOffData | PlainMessage<CrashLoopBackOffData> | undefined): boolean {
    return proto3.util.equals(CrashLoopBackOffData, a, b);
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
