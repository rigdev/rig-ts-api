// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/capsule/status.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Issue } from "../issue/issue_pb.js";
import { ObjectState, ObjectStatus } from "../../../operator/api/v1/pipeline/object_status_pb.js";
import { HorizontalScale, HostRoute, Resources } from "./change_pb.js";

/**
 * @generated from enum api.v1.capsule.Transition
 */
export enum Transition {
  /**
   * @generated from enum value: TRANSITION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TRANSITION_BEING_CREATED = 1;
   */
  BEING_CREATED = 1,

  /**
   * @generated from enum value: TRANSITION_UP_TO_DATE = 2;
   */
  UP_TO_DATE = 2,

  /**
   * @generated from enum value: TRANSITION_BEING_DELETED = 3;
   */
  BEING_DELETED = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(Transition)
proto3.util.setEnumType(Transition, "api.v1.capsule.Transition", [
  { no: 0, name: "TRANSITION_UNSPECIFIED" },
  { no: 1, name: "TRANSITION_BEING_CREATED" },
  { no: 2, name: "TRANSITION_UP_TO_DATE" },
  { no: 3, name: "TRANSITION_BEING_DELETED" },
]);

/**
 * @generated from message api.v1.capsule.Status
 */
export class Status extends Message<Status> {
  /**
   * @generated from field: string namespace = 1;
   */
  namespace = "";

  /**
   * @generated from field: api.v1.capsule.CapsuleStatus capsule = 2;
   */
  capsule?: CapsuleStatus;

  /**
   * @generated from field: uint64 current_rollout_id = 3;
   */
  currentRolloutId = protoInt64.zero;

  /**
   * @generated from field: api.v1.capsule.ContainerConfig container_config = 4;
   */
  containerConfig?: ContainerConfig;

  /**
   * @generated from field: api.v1.capsule.InstancesStatus instances = 5;
   */
  instances?: InstancesStatus;

  /**
   * @generated from field: repeated api.v1.capsule.InterfaceStatus interfaces = 6;
   */
  interfaces: InterfaceStatus[] = [];

  /**
   * @generated from field: repeated api.v1.capsule.ConfigFileStatus config_files = 7;
   */
  configFiles: ConfigFileStatus[] = [];

  /**
   * @generated from field: repeated api.v1.capsule.CronJobStatus cron_jobs = 8;
   */
  cronJobs: CronJobStatus[] = [];

  /**
   * List of all issues associated to the Capsule, include those of the current
   * rollout. The list does not include instance-level issues.
   *
   * @generated from field: repeated api.v1.issue.Issue issues = 9;
   */
  issues: Issue[] = [];

  constructor(data?: PartialMessage<Status>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Status";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "capsule", kind: "message", T: CapsuleStatus },
    { no: 3, name: "current_rollout_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "container_config", kind: "message", T: ContainerConfig },
    { no: 5, name: "instances", kind: "message", T: InstancesStatus },
    { no: 6, name: "interfaces", kind: "message", T: InterfaceStatus, repeated: true },
    { no: 7, name: "config_files", kind: "message", T: ConfigFileStatus, repeated: true },
    { no: 8, name: "cron_jobs", kind: "message", T: CronJobStatus, repeated: true },
    { no: 9, name: "issues", kind: "message", T: Issue, repeated: true },
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
 * @generated from message api.v1.capsule.CapsuleStatus
 */
export class CapsuleStatus extends Message<CapsuleStatus> {
  /**
   * @generated from field: repeated api.v1.pipeline.ObjectStatus statuses = 1;
   */
  statuses: ObjectStatus[] = [];

  constructor(data?: PartialMessage<CapsuleStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.CapsuleStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "statuses", kind: "message", T: ObjectStatus, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CapsuleStatus {
    return new CapsuleStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CapsuleStatus {
    return new CapsuleStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CapsuleStatus {
    return new CapsuleStatus().fromJsonString(jsonString, options);
  }

  static equals(a: CapsuleStatus | PlainMessage<CapsuleStatus> | undefined, b: CapsuleStatus | PlainMessage<CapsuleStatus> | undefined): boolean {
    return proto3.util.equals(CapsuleStatus, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.InstancesStatus
 */
export class InstancesStatus extends Message<InstancesStatus> {
  /**
   * The number of updated instances.
   *
   * @generated from field: uint32 num_upgrading = 1;
   */
  numUpgrading = 0;

  /**
   * The number of ready instances.
   *
   * @generated from field: uint32 num_ready = 2;
   */
  numReady = 0;

  /**
   * The number of stuck instances.
   *
   * @generated from field: uint32 num_stuck = 3;
   */
  numStuck = 0;

  /**
   * The number of instances with the wrong version.
   *
   * @generated from field: uint32 num_wrong_version = 4;
   */
  numWrongVersion = 0;

  constructor(data?: PartialMessage<InstancesStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.InstancesStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "num_upgrading", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "num_ready", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "num_stuck", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "num_wrong_version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstancesStatus {
    return new InstancesStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstancesStatus {
    return new InstancesStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstancesStatus {
    return new InstancesStatus().fromJsonString(jsonString, options);
  }

  static equals(a: InstancesStatus | PlainMessage<InstancesStatus> | undefined, b: InstancesStatus | PlainMessage<InstancesStatus> | undefined): boolean {
    return proto3.util.equals(InstancesStatus, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.ContainerConfig
 */
export class ContainerConfig extends Message<ContainerConfig> {
  /**
   * @generated from field: string image = 1;
   */
  image = "";

  /**
   * @generated from field: string command = 2;
   */
  command = "";

  /**
   * @generated from field: repeated string args = 3;
   */
  args: string[] = [];

  /**
   * @generated from field: map<string, string> environment_variables = 4;
   */
  environmentVariables: { [key: string]: string } = {};

  /**
   * @generated from field: api.v1.capsule.HorizontalScale scale = 5;
   */
  scale?: HorizontalScale;

  /**
   * @generated from field: api.v1.capsule.Resources resources = 6;
   */
  resources?: Resources;

  constructor(data?: PartialMessage<ContainerConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.ContainerConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "command", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "args", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "environment_variables", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 5, name: "scale", kind: "message", T: HorizontalScale },
    { no: 6, name: "resources", kind: "message", T: Resources },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContainerConfig {
    return new ContainerConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContainerConfig {
    return new ContainerConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContainerConfig {
    return new ContainerConfig().fromJsonString(jsonString, options);
  }

  static equals(a: ContainerConfig | PlainMessage<ContainerConfig> | undefined, b: ContainerConfig | PlainMessage<ContainerConfig> | undefined): boolean {
    return proto3.util.equals(ContainerConfig, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.InterfaceStatus
 */
export class InterfaceStatus extends Message<InterfaceStatus> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: uint32 port = 2;
   */
  port = 0;

  /**
   * @generated from field: repeated api.v1.capsule.InterfaceStatus.Route routes = 3;
   */
  routes: InterfaceStatus_Route[] = [];

  /**
   * @generated from field: repeated api.v1.pipeline.ObjectStatus status = 4;
   */
  status: ObjectStatus[] = [];

  /**
   * @generated from field: api.v1.capsule.Transition transition = 5;
   */
  transition = Transition.UNSPECIFIED;

  constructor(data?: PartialMessage<InterfaceStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.InterfaceStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "port", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "routes", kind: "message", T: InterfaceStatus_Route, repeated: true },
    { no: 4, name: "status", kind: "message", T: ObjectStatus, repeated: true },
    { no: 5, name: "transition", kind: "enum", T: proto3.getEnumType(Transition) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InterfaceStatus {
    return new InterfaceStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InterfaceStatus {
    return new InterfaceStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InterfaceStatus {
    return new InterfaceStatus().fromJsonString(jsonString, options);
  }

  static equals(a: InterfaceStatus | PlainMessage<InterfaceStatus> | undefined, b: InterfaceStatus | PlainMessage<InterfaceStatus> | undefined): boolean {
    return proto3.util.equals(InterfaceStatus, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.InterfaceStatus.Route
 */
export class InterfaceStatus_Route extends Message<InterfaceStatus_Route> {
  /**
   * @generated from field: api.v1.capsule.HostRoute route = 1;
   */
  route?: HostRoute;

  /**
   * @generated from field: repeated api.v1.pipeline.ObjectStatus status = 2;
   */
  status: ObjectStatus[] = [];

  /**
   * @generated from field: api.v1.capsule.Transition transition = 3;
   */
  transition = Transition.UNSPECIFIED;

  constructor(data?: PartialMessage<InterfaceStatus_Route>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.InterfaceStatus.Route";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "route", kind: "message", T: HostRoute },
    { no: 2, name: "status", kind: "message", T: ObjectStatus, repeated: true },
    { no: 3, name: "transition", kind: "enum", T: proto3.getEnumType(Transition) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InterfaceStatus_Route {
    return new InterfaceStatus_Route().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InterfaceStatus_Route {
    return new InterfaceStatus_Route().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InterfaceStatus_Route {
    return new InterfaceStatus_Route().fromJsonString(jsonString, options);
  }

  static equals(a: InterfaceStatus_Route | PlainMessage<InterfaceStatus_Route> | undefined, b: InterfaceStatus_Route | PlainMessage<InterfaceStatus_Route> | undefined): boolean {
    return proto3.util.equals(InterfaceStatus_Route, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.ConfigFileStatus
 */
export class ConfigFileStatus extends Message<ConfigFileStatus> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: bool isSecret = 2;
   */
  isSecret = false;

  /**
   * @generated from field: repeated api.v1.pipeline.ObjectStatus status = 3;
   */
  status: ObjectStatus[] = [];

  /**
   * @generated from field: api.v1.capsule.Transition transition = 4;
   */
  transition = Transition.UNSPECIFIED;

  /**
   * @generated from field: bytes content = 5;
   */
  content = new Uint8Array(0);

  constructor(data?: PartialMessage<ConfigFileStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.ConfigFileStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "isSecret", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "status", kind: "message", T: ObjectStatus, repeated: true },
    { no: 4, name: "transition", kind: "enum", T: proto3.getEnumType(Transition) },
    { no: 5, name: "content", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigFileStatus {
    return new ConfigFileStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigFileStatus {
    return new ConfigFileStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigFileStatus {
    return new ConfigFileStatus().fromJsonString(jsonString, options);
  }

  static equals(a: ConfigFileStatus | PlainMessage<ConfigFileStatus> | undefined, b: ConfigFileStatus | PlainMessage<ConfigFileStatus> | undefined): boolean {
    return proto3.util.equals(ConfigFileStatus, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.CronJobStatus
 */
export class CronJobStatus extends Message<CronJobStatus> {
  /**
   * @generated from field: string job_name = 1;
   */
  jobName = "";

  /**
   * @generated from field: string schedule = 2;
   */
  schedule = "";

  /**
   * @generated from field: api.v1.pipeline.ObjectState last_execution = 3;
   */
  lastExecution = ObjectState.UNSPECIFIED;

  /**
   * @generated from field: api.v1.capsule.Transition transition = 4;
   */
  transition = Transition.UNSPECIFIED;

  constructor(data?: PartialMessage<CronJobStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.CronJobStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "job_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "schedule", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_execution", kind: "enum", T: proto3.getEnumType(ObjectState) },
    { no: 4, name: "transition", kind: "enum", T: proto3.getEnumType(Transition) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CronJobStatus {
    return new CronJobStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CronJobStatus {
    return new CronJobStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CronJobStatus {
    return new CronJobStatus().fromJsonString(jsonString, options);
  }

  static equals(a: CronJobStatus | PlainMessage<CronJobStatus> | undefined, b: CronJobStatus | PlainMessage<CronJobStatus> | undefined): boolean {
    return proto3.util.equals(CronJobStatus, a, b);
  }
}

