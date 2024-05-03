// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file operator/api/v1/pipeline/object_status.proto (package api.v1.pipeline, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.v1.pipeline.ObjectState
 */
export enum ObjectState {
  /**
   * @generated from enum value: OBJECT_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: OBJECT_STATE_HEALTHY = 1;
   */
  HEALTHY = 1,

  /**
   * @generated from enum value: OBJECT_STATE_PENDING = 2;
   */
  PENDING = 2,

  /**
   * @generated from enum value: OBJECT_STATE_ERROR = 3;
   */
  ERROR = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ObjectState)
proto3.util.setEnumType(ObjectState, "api.v1.pipeline.ObjectState", [
  { no: 0, name: "OBJECT_STATE_UNSPECIFIED" },
  { no: 1, name: "OBJECT_STATE_HEALTHY" },
  { no: 2, name: "OBJECT_STATE_PENDING" },
  { no: 3, name: "OBJECT_STATE_ERROR" },
]);

/**
 * @generated from message api.v1.pipeline.ObjectStatusChange
 */
export class ObjectStatusChange extends Message<ObjectStatusChange> {
  /**
   * @generated from field: string capsule = 1;
   */
  capsule = "";

  /**
   * @generated from oneof api.v1.pipeline.ObjectStatusChange.change
   */
  change: {
    /**
     * @generated from field: api.v1.pipeline.ObjectStatus updated = 2;
     */
    value: ObjectStatus;
    case: "updated";
  } | {
    /**
     * @generated from field: api.v1.pipeline.ObjectRef deleted = 3;
     */
    value: ObjectRef;
    case: "deleted";
  } | {
    /**
     * Checkpoint events indicates that all existing object statuses for
     * this namespace has been sent in the current "watch" session.
     *
     * @generated from field: api.v1.pipeline.ObjectStatusChange.Checkpoint checkpoint = 4;
     */
    value: ObjectStatusChange_Checkpoint;
    case: "checkpoint";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ObjectStatusChange>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.ObjectStatusChange";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "updated", kind: "message", T: ObjectStatus, oneof: "change" },
    { no: 3, name: "deleted", kind: "message", T: ObjectRef, oneof: "change" },
    { no: 4, name: "checkpoint", kind: "message", T: ObjectStatusChange_Checkpoint, oneof: "change" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectStatusChange {
    return new ObjectStatusChange().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectStatusChange {
    return new ObjectStatusChange().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectStatusChange {
    return new ObjectStatusChange().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectStatusChange | PlainMessage<ObjectStatusChange> | undefined, b: ObjectStatusChange | PlainMessage<ObjectStatusChange> | undefined): boolean {
    return proto3.util.equals(ObjectStatusChange, a, b);
  }
}

/**
 * @generated from message api.v1.pipeline.ObjectStatusChange.Checkpoint
 */
export class ObjectStatusChange_Checkpoint extends Message<ObjectStatusChange_Checkpoint> {
  constructor(data?: PartialMessage<ObjectStatusChange_Checkpoint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.ObjectStatusChange.Checkpoint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectStatusChange_Checkpoint {
    return new ObjectStatusChange_Checkpoint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectStatusChange_Checkpoint {
    return new ObjectStatusChange_Checkpoint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectStatusChange_Checkpoint {
    return new ObjectStatusChange_Checkpoint().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectStatusChange_Checkpoint | PlainMessage<ObjectStatusChange_Checkpoint> | undefined, b: ObjectStatusChange_Checkpoint | PlainMessage<ObjectStatusChange_Checkpoint> | undefined): boolean {
    return proto3.util.equals(ObjectStatusChange_Checkpoint, a, b);
  }
}

/**
 * @generated from message api.v1.pipeline.ObjectStatus
 */
export class ObjectStatus extends Message<ObjectStatus> {
  /**
   * @generated from field: api.v1.pipeline.ObjectRef object_ref = 1;
   */
  objectRef?: ObjectRef;

  /**
   * @generated from field: api.v1.pipeline.ObjectStatusInfo info = 2;
   */
  info?: ObjectStatusInfo;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 3;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: api.v1.pipeline.ObjectRef parent = 4;
   */
  parent?: ObjectRef;

  constructor(data?: PartialMessage<ObjectStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.ObjectStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "object_ref", kind: "message", T: ObjectRef },
    { no: 2, name: "info", kind: "message", T: ObjectStatusInfo },
    { no: 3, name: "updated_at", kind: "message", T: Timestamp },
    { no: 4, name: "parent", kind: "message", T: ObjectRef },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectStatus {
    return new ObjectStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectStatus {
    return new ObjectStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectStatus {
    return new ObjectStatus().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectStatus | PlainMessage<ObjectStatus> | undefined, b: ObjectStatus | PlainMessage<ObjectStatus> | undefined): boolean {
    return proto3.util.equals(ObjectStatus, a, b);
  }
}

/**
 * @generated from message api.v1.pipeline.ObjectStatusInfo
 */
export class ObjectStatusInfo extends Message<ObjectStatusInfo> {
  /**
   * @generated from field: repeated api.v1.pipeline.ObjectCondition conditions = 1;
   */
  conditions: ObjectCondition[] = [];

  /**
   * @generated from field: map<string, string> properties = 2;
   */
  properties: { [key: string]: string } = {};

  /**
   * @generated from field: repeated api.v1.pipeline.SubObjectStatus sub_objects = 3;
   */
  subObjects: SubObjectStatus[] = [];

  /**
   * @generated from field: repeated api.v1.pipeline.PlatformObjectStatus platform_status = 4;
   */
  platformStatus: PlatformObjectStatus[] = [];

  constructor(data?: PartialMessage<ObjectStatusInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.ObjectStatusInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conditions", kind: "message", T: ObjectCondition, repeated: true },
    { no: 2, name: "properties", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "sub_objects", kind: "message", T: SubObjectStatus, repeated: true },
    { no: 4, name: "platform_status", kind: "message", T: PlatformObjectStatus, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectStatusInfo {
    return new ObjectStatusInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectStatusInfo {
    return new ObjectStatusInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectStatusInfo {
    return new ObjectStatusInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectStatusInfo | PlainMessage<ObjectStatusInfo> | undefined, b: ObjectStatusInfo | PlainMessage<ObjectStatusInfo> | undefined): boolean {
    return proto3.util.equals(ObjectStatusInfo, a, b);
  }
}

/**
 * @generated from message api.v1.pipeline.RouteStatus
 */
export class RouteStatus extends Message<RouteStatus> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string host = 2;
   */
  host = "";

  constructor(data?: PartialMessage<RouteStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.RouteStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RouteStatus {
    return new RouteStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RouteStatus {
    return new RouteStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RouteStatus {
    return new RouteStatus().fromJsonString(jsonString, options);
  }

  static equals(a: RouteStatus | PlainMessage<RouteStatus> | undefined, b: RouteStatus | PlainMessage<RouteStatus> | undefined): boolean {
    return proto3.util.equals(RouteStatus, a, b);
  }
}

/**
 * @generated from message api.v1.pipeline.InstanceStatus
 */
export class InstanceStatus extends Message<InstanceStatus> {
  constructor(data?: PartialMessage<InstanceStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.InstanceStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
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
 * @generated from message api.v1.pipeline.ContainerStatus
 */
export class ContainerStatus extends Message<ContainerStatus> {
  /**
   * @generated from field: uint32 restart_count = 1;
   */
  restartCount = 0;

  /**
   * @generated from field: api.v1.pipeline.ContainerStatus.ContainerTermination last_termination = 2;
   */
  lastTermination?: ContainerStatus_ContainerTermination;

  /**
   * @generated from field: google.protobuf.Timestamp started_at = 3;
   */
  startedAt?: Timestamp;

  constructor(data?: PartialMessage<ContainerStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.ContainerStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "restart_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "last_termination", kind: "message", T: ContainerStatus_ContainerTermination },
    { no: 3, name: "started_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContainerStatus {
    return new ContainerStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContainerStatus {
    return new ContainerStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContainerStatus {
    return new ContainerStatus().fromJsonString(jsonString, options);
  }

  static equals(a: ContainerStatus | PlainMessage<ContainerStatus> | undefined, b: ContainerStatus | PlainMessage<ContainerStatus> | undefined): boolean {
    return proto3.util.equals(ContainerStatus, a, b);
  }
}

/**
 * Information about the last container termination.
 *
 * @generated from message api.v1.pipeline.ContainerStatus.ContainerTermination
 */
export class ContainerStatus_ContainerTermination extends Message<ContainerStatus_ContainerTermination> {
  /**
   * Exit status from the last termination of the container
   *
   * @generated from field: int32 exit_code = 1;
   */
  exitCode = 0;

  /**
   * Signal from the last termination of the container
   *
   * @generated from field: int32 signal = 2;
   */
  signal = 0;

  /**
   * (brief) reason from the last termination of the container
   *
   * @generated from field: string reason = 3;
   */
  reason = "";

  /**
   * Message regarding the last termination of the container
   *
   * @generated from field: string message = 4;
   */
  message = "";

  /**
   * Time at which previous execution of the container started
   *
   * @generated from field: google.protobuf.Timestamp started_at = 5;
   */
  startedAt?: Timestamp;

  /**
   * Time at which the container last terminated
   *
   * @generated from field: google.protobuf.Timestamp finished_at = 6;
   */
  finishedAt?: Timestamp;

  /**
   * Container's ID in the format 'type://container_id'
   *
   * @generated from field: string container_id = 7;
   */
  containerId = "";

  constructor(data?: PartialMessage<ContainerStatus_ContainerTermination>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.ContainerStatus.ContainerTermination";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exit_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "signal", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "started_at", kind: "message", T: Timestamp },
    { no: 6, name: "finished_at", kind: "message", T: Timestamp },
    { no: 7, name: "container_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContainerStatus_ContainerTermination {
    return new ContainerStatus_ContainerTermination().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContainerStatus_ContainerTermination {
    return new ContainerStatus_ContainerTermination().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContainerStatus_ContainerTermination {
    return new ContainerStatus_ContainerTermination().fromJsonString(jsonString, options);
  }

  static equals(a: ContainerStatus_ContainerTermination | PlainMessage<ContainerStatus_ContainerTermination> | undefined, b: ContainerStatus_ContainerTermination | PlainMessage<ContainerStatus_ContainerTermination> | undefined): boolean {
    return proto3.util.equals(ContainerStatus_ContainerTermination, a, b);
  }
}

/**
 * @generated from message api.v1.pipeline.PlatformObjectStatus
 */
export class PlatformObjectStatus extends Message<PlatformObjectStatus> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from oneof api.v1.pipeline.PlatformObjectStatus.kind
   */
  kind: {
    /**
     * @generated from field: api.v1.pipeline.RouteStatus route = 2;
     */
    value: RouteStatus;
    case: "route";
  } | {
    /**
     * @generated from field: api.v1.pipeline.InstanceStatus instance = 3;
     */
    value: InstanceStatus;
    case: "instance";
  } | {
    /**
     * @generated from field: api.v1.pipeline.ContainerStatus container = 4;
     */
    value: ContainerStatus;
    case: "container";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<PlatformObjectStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.PlatformObjectStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "route", kind: "message", T: RouteStatus, oneof: "kind" },
    { no: 3, name: "instance", kind: "message", T: InstanceStatus, oneof: "kind" },
    { no: 4, name: "container", kind: "message", T: ContainerStatus, oneof: "kind" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlatformObjectStatus {
    return new PlatformObjectStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlatformObjectStatus {
    return new PlatformObjectStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlatformObjectStatus {
    return new PlatformObjectStatus().fromJsonString(jsonString, options);
  }

  static equals(a: PlatformObjectStatus | PlainMessage<PlatformObjectStatus> | undefined, b: PlatformObjectStatus | PlainMessage<PlatformObjectStatus> | undefined): boolean {
    return proto3.util.equals(PlatformObjectStatus, a, b);
  }
}

/**
 * @generated from message api.v1.pipeline.SubObjectStatus
 */
export class SubObjectStatus extends Message<SubObjectStatus> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: repeated api.v1.pipeline.ObjectCondition conditions = 3;
   */
  conditions: ObjectCondition[] = [];

  /**
   * @generated from field: map<string, string> properties = 4;
   */
  properties: { [key: string]: string } = {};

  /**
   * @generated from field: repeated api.v1.pipeline.PlatformObjectStatus platform_status = 5;
   */
  platformStatus: PlatformObjectStatus[] = [];

  constructor(data?: PartialMessage<SubObjectStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.SubObjectStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "conditions", kind: "message", T: ObjectCondition, repeated: true },
    { no: 4, name: "properties", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 5, name: "platform_status", kind: "message", T: PlatformObjectStatus, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubObjectStatus {
    return new SubObjectStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubObjectStatus {
    return new SubObjectStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubObjectStatus {
    return new SubObjectStatus().fromJsonString(jsonString, options);
  }

  static equals(a: SubObjectStatus | PlainMessage<SubObjectStatus> | undefined, b: SubObjectStatus | PlainMessage<SubObjectStatus> | undefined): boolean {
    return proto3.util.equals(SubObjectStatus, a, b);
  }
}

/**
 * @generated from message api.v1.pipeline.ObjectCondition
 */
export class ObjectCondition extends Message<ObjectCondition> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 2;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: api.v1.pipeline.ObjectState state = 3;
   */
  state = ObjectState.UNSPECIFIED;

  /**
   * @generated from field: string message = 4;
   */
  message = "";

  constructor(data?: PartialMessage<ObjectCondition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.ObjectCondition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "updated_at", kind: "message", T: Timestamp },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(ObjectState) },
    { no: 4, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectCondition {
    return new ObjectCondition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectCondition {
    return new ObjectCondition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectCondition {
    return new ObjectCondition().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectCondition | PlainMessage<ObjectCondition> | undefined, b: ObjectCondition | PlainMessage<ObjectCondition> | undefined): boolean {
    return proto3.util.equals(ObjectCondition, a, b);
  }
}

/**
 * @generated from message api.v1.pipeline.GVK
 */
export class GVK extends Message<GVK> {
  /**
   * @generated from field: string group = 1;
   */
  group = "";

  /**
   * @generated from field: string version = 2;
   */
  version = "";

  /**
   * @generated from field: string kind = 3;
   */
  kind = "";

  constructor(data?: PartialMessage<GVK>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.GVK";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GVK {
    return new GVK().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GVK {
    return new GVK().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GVK {
    return new GVK().fromJsonString(jsonString, options);
  }

  static equals(a: GVK | PlainMessage<GVK> | undefined, b: GVK | PlainMessage<GVK> | undefined): boolean {
    return proto3.util.equals(GVK, a, b);
  }
}

/**
 * @generated from message api.v1.pipeline.ObjectRef
 */
export class ObjectRef extends Message<ObjectRef> {
  /**
   * @generated from field: api.v1.pipeline.GVK gvk = 1;
   */
  gvk?: GVK;

  /**
   * @generated from field: string namespace = 2;
   */
  namespace = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<ObjectRef>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.pipeline.ObjectRef";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "gvk", kind: "message", T: GVK },
    { no: 2, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectRef {
    return new ObjectRef().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectRef {
    return new ObjectRef().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectRef {
    return new ObjectRef().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectRef | PlainMessage<ObjectRef> | undefined, b: ObjectRef | PlainMessage<ObjectRef> | undefined): boolean {
    return proto3.util.equals(ObjectRef, a, b);
  }
}
