// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file api/v1/capsule/rollout.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Author } from "../../../model/author_pb.js";

/**
 * @generated from enum api.v1.capsule.RolloutState
 */
export enum RolloutState {
  /**
   * @generated from enum value: ROLLOUT_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ROLLOUT_STATE_PENDING = 1;
   */
  PENDING = 1,

  /**
   * @generated from enum value: ROLLOUT_STATE_PREPARING = 6;
   */
  PREPARING = 6,

  /**
   * @generated from enum value: ROLLOUT_STATE_DEPLOYING = 2;
   */
  DEPLOYING = 2,

  /**
   * @generated from enum value: ROLLOUT_STATE_OBSERVING = 7;
   */
  OBSERVING = 7,

  /**
   * @generated from enum value: ROLLOUT_STATE_DONE = 3;
   */
  DONE = 3,

  /**
   * @generated from enum value: ROLLOUT_STATE_ABORTED = 4;
   */
  ABORTED = 4,

  /**
   * @generated from enum value: ROLLOUT_STATE_FAILED = 5;
   */
  FAILED = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(RolloutState)
proto3.util.setEnumType(RolloutState, "api.v1.capsule.RolloutState", [
  { no: 0, name: "ROLLOUT_STATE_UNSPECIFIED" },
  { no: 1, name: "ROLLOUT_STATE_PENDING" },
  { no: 6, name: "ROLLOUT_STATE_PREPARING" },
  { no: 2, name: "ROLLOUT_STATE_DEPLOYING" },
  { no: 7, name: "ROLLOUT_STATE_OBSERVING" },
  { no: 3, name: "ROLLOUT_STATE_DONE" },
  { no: 4, name: "ROLLOUT_STATE_ABORTED" },
  { no: 5, name: "ROLLOUT_STATE_FAILED" },
]);

/**
 * @generated from enum api.v1.capsule.EventType
 */
export enum EventType {
  /**
   * @generated from enum value: EVENT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: EVENT_TYPE_ABORT = 1;
   */
  ABORT = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(EventType)
proto3.util.setEnumType(EventType, "api.v1.capsule.EventType", [
  { no: 0, name: "EVENT_TYPE_UNSPECIFIED" },
  { no: 1, name: "EVENT_TYPE_ABORT" },
]);

/**
 * @generated from message api.v1.capsule.Change
 */
export class Change extends Message<Change> {
  /**
   * @generated from oneof api.v1.capsule.Change.field
   */
  field: {
    /**
     * @generated from field: uint32 replicas = 1;
     */
    value: number;
    case: "replicas";
  } | {
    /**
     * @generated from field: string build_id = 2;
     */
    value: string;
    case: "buildId";
  } | {
    /**
     * @generated from field: api.v1.capsule.Network network = 3;
     */
    value: Network;
    case: "network";
  } | {
    /**
     * @generated from field: api.v1.capsule.ContainerSettings container_settings = 4;
     */
    value: ContainerSettings;
    case: "containerSettings";
  } | {
    /**
     * @generated from field: bool auto_add_rig_service_accounts = 5;
     */
    value: boolean;
    case: "autoAddRigServiceAccounts";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Change>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Change";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "replicas", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "field" },
    { no: 2, name: "build_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
    { no: 3, name: "network", kind: "message", T: Network, oneof: "field" },
    { no: 4, name: "container_settings", kind: "message", T: ContainerSettings, oneof: "field" },
    { no: 5, name: "auto_add_rig_service_accounts", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "field" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Change {
    return new Change().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Change {
    return new Change().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Change {
    return new Change().fromJsonString(jsonString, options);
  }

  static equals(a: Change | PlainMessage<Change> | undefined, b: Change | PlainMessage<Change> | undefined): boolean {
    return proto3.util.equals(Change, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Rollout
 */
export class Rollout extends Message<Rollout> {
  /**
   * @generated from field: uint64 rollout_id = 1;
   */
  rolloutId = protoInt64.zero;

  /**
   * @generated from field: api.v1.capsule.RolloutConfig config = 2;
   */
  config?: RolloutConfig;

  /**
   * @generated from field: api.v1.capsule.RolloutStatus status = 3;
   */
  status?: RolloutStatus;

  constructor(data?: PartialMessage<Rollout>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Rollout";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rollout_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "config", kind: "message", T: RolloutConfig },
    { no: 3, name: "status", kind: "message", T: RolloutStatus },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Rollout {
    return new Rollout().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Rollout {
    return new Rollout().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Rollout {
    return new Rollout().fromJsonString(jsonString, options);
  }

  static equals(a: Rollout | PlainMessage<Rollout> | undefined, b: Rollout | PlainMessage<Rollout> | undefined): boolean {
    return proto3.util.equals(Rollout, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.RolloutConfig
 */
export class RolloutConfig extends Message<RolloutConfig> {
  /**
   * The user who initiated the rollout.
   *
   * @generated from field: model.Author created_by = 1;
   */
  createdBy?: Author;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 2;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: repeated api.v1.capsule.Change changes = 3;
   */
  changes: Change[] = [];

  /**
   * @generated from field: uint32 replicas = 4;
   */
  replicas = 0;

  /**
   * @generated from field: string build_id = 5;
   */
  buildId = "";

  /**
   * @generated from field: api.v1.capsule.Network network = 6;
   */
  network?: Network;

  /**
   * @generated from field: api.v1.capsule.ContainerSettings container_settings = 7;
   */
  containerSettings?: ContainerSettings;

  /**
   * @generated from field: bool auto_add_rig_service_accounts = 8;
   */
  autoAddRigServiceAccounts = false;

  constructor(data?: PartialMessage<RolloutConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.RolloutConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "created_by", kind: "message", T: Author },
    { no: 2, name: "created_at", kind: "message", T: Timestamp },
    { no: 3, name: "changes", kind: "message", T: Change, repeated: true },
    { no: 4, name: "replicas", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "build_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "network", kind: "message", T: Network },
    { no: 7, name: "container_settings", kind: "message", T: ContainerSettings },
    { no: 8, name: "auto_add_rig_service_accounts", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolloutConfig {
    return new RolloutConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolloutConfig {
    return new RolloutConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolloutConfig {
    return new RolloutConfig().fromJsonString(jsonString, options);
  }

  static equals(a: RolloutConfig | PlainMessage<RolloutConfig> | undefined, b: RolloutConfig | PlainMessage<RolloutConfig> | undefined): boolean {
    return proto3.util.equals(RolloutConfig, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.RolloutStatus
 */
export class RolloutStatus extends Message<RolloutStatus> {
  /**
   * @generated from field: api.v1.capsule.RolloutState state = 1;
   */
  state = RolloutState.UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 2;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: string message = 3;
   */
  message = "";

  constructor(data?: PartialMessage<RolloutStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.RolloutStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "state", kind: "enum", T: proto3.getEnumType(RolloutState) },
    { no: 2, name: "updated_at", kind: "message", T: Timestamp },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolloutStatus {
    return new RolloutStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolloutStatus {
    return new RolloutStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolloutStatus {
    return new RolloutStatus().fromJsonString(jsonString, options);
  }

  static equals(a: RolloutStatus | PlainMessage<RolloutStatus> | undefined, b: RolloutStatus | PlainMessage<RolloutStatus> | undefined): boolean {
    return proto3.util.equals(RolloutStatus, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.ContainerSettings
 */
export class ContainerSettings extends Message<ContainerSettings> {
  /**
   * @generated from field: map<string, string> environment_variables = 1;
   */
  environmentVariables: { [key: string]: string } = {};

  /**
   * @generated from field: string command = 2;
   */
  command = "";

  /**
   * @generated from field: repeated string args = 3;
   */
  args: string[] = [];

  /**
   * @generated from field: api.v1.capsule.Resources resources = 4;
   */
  resources?: Resources;

  constructor(data?: PartialMessage<ContainerSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.ContainerSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "environment_variables", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 2, name: "command", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "args", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "resources", kind: "message", T: Resources },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContainerSettings {
    return new ContainerSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContainerSettings {
    return new ContainerSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContainerSettings {
    return new ContainerSettings().fromJsonString(jsonString, options);
  }

  static equals(a: ContainerSettings | PlainMessage<ContainerSettings> | undefined, b: ContainerSettings | PlainMessage<ContainerSettings> | undefined): boolean {
    return proto3.util.equals(ContainerSettings, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Resources
 */
export class Resources extends Message<Resources> {
  /**
   * @generated from field: api.v1.capsule.ResourceList requests = 1;
   */
  requests?: ResourceList;

  /**
   * @generated from field: api.v1.capsule.ResourceList limits = 2;
   */
  limits?: ResourceList;

  constructor(data?: PartialMessage<Resources>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Resources";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "requests", kind: "message", T: ResourceList },
    { no: 2, name: "limits", kind: "message", T: ResourceList },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Resources {
    return new Resources().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Resources {
    return new Resources().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Resources {
    return new Resources().fromJsonString(jsonString, options);
  }

  static equals(a: Resources | PlainMessage<Resources> | undefined, b: Resources | PlainMessage<Resources> | undefined): boolean {
    return proto3.util.equals(Resources, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.ResourceList
 */
export class ResourceList extends Message<ResourceList> {
  /**
   * Unit: milli-CPUs
   *
   * @generated from field: uint32 cpu = 1;
   */
  cpu = 0;

  /**
   * Unit: Bytes
   *
   * @generated from field: uint64 memory = 2;
   */
  memory = protoInt64.zero;

  /**
   * Unit: Bytes
   *
   * @generated from field: uint64 ephemeral_storage = 3;
   */
  ephemeralStorage = protoInt64.zero;

  constructor(data?: PartialMessage<ResourceList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.ResourceList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cpu", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "memory", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "ephemeral_storage", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResourceList {
    return new ResourceList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResourceList {
    return new ResourceList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResourceList {
    return new ResourceList().fromJsonString(jsonString, options);
  }

  static equals(a: ResourceList | PlainMessage<ResourceList> | undefined, b: ResourceList | PlainMessage<ResourceList> | undefined): boolean {
    return proto3.util.equals(ResourceList, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Network
 */
export class Network extends Message<Network> {
  /**
   * @generated from field: repeated api.v1.capsule.Interface interfaces = 1;
   */
  interfaces: Interface[] = [];

  constructor(data?: PartialMessage<Network>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Network";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "interfaces", kind: "message", T: Interface, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Network {
    return new Network().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Network {
    return new Network().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Network {
    return new Network().fromJsonString(jsonString, options);
  }

  static equals(a: Network | PlainMessage<Network> | undefined, b: Network | PlainMessage<Network> | undefined): boolean {
    return proto3.util.equals(Network, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Interface
 */
export class Interface extends Message<Interface> {
  /**
   * @generated from field: uint32 port = 1;
   */
  port = 0;

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: api.v1.capsule.PublicInterface public = 4;
   */
  public?: PublicInterface;

  /**
   * @generated from field: api.v1.capsule.Logging logging = 5;
   */
  logging?: Logging;

  /**
   * @generated from field: api.v1.capsule.Authentication authentication = 6;
   */
  authentication?: Authentication;

  constructor(data?: PartialMessage<Interface>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Interface";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "port", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "public", kind: "message", T: PublicInterface },
    { no: 5, name: "logging", kind: "message", T: Logging },
    { no: 6, name: "authentication", kind: "message", T: Authentication },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Interface {
    return new Interface().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Interface {
    return new Interface().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Interface {
    return new Interface().fromJsonString(jsonString, options);
  }

  static equals(a: Interface | PlainMessage<Interface> | undefined, b: Interface | PlainMessage<Interface> | undefined): boolean {
    return proto3.util.equals(Interface, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.PublicInterface
 */
export class PublicInterface extends Message<PublicInterface> {
  /**
   * @generated from field: bool enabled = 1;
   */
  enabled = false;

  /**
   * @generated from field: api.v1.capsule.RoutingMethod method = 2;
   */
  method?: RoutingMethod;

  constructor(data?: PartialMessage<PublicInterface>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.PublicInterface";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "method", kind: "message", T: RoutingMethod },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublicInterface {
    return new PublicInterface().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublicInterface {
    return new PublicInterface().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublicInterface {
    return new PublicInterface().fromJsonString(jsonString, options);
  }

  static equals(a: PublicInterface | PlainMessage<PublicInterface> | undefined, b: PublicInterface | PlainMessage<PublicInterface> | undefined): boolean {
    return proto3.util.equals(PublicInterface, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.RoutingMethod
 */
export class RoutingMethod extends Message<RoutingMethod> {
  /**
   * @generated from oneof api.v1.capsule.RoutingMethod.kind
   */
  kind: {
    /**
     * @generated from field: api.v1.capsule.RoutingMethod.LoadBalancer load_balancer = 1;
     */
    value: RoutingMethod_LoadBalancer;
    case: "loadBalancer";
  } | {
    /**
     * @generated from field: api.v1.capsule.RoutingMethod.Ingress ingress = 2;
     */
    value: RoutingMethod_Ingress;
    case: "ingress";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<RoutingMethod>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.RoutingMethod";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "load_balancer", kind: "message", T: RoutingMethod_LoadBalancer, oneof: "kind" },
    { no: 2, name: "ingress", kind: "message", T: RoutingMethod_Ingress, oneof: "kind" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoutingMethod {
    return new RoutingMethod().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoutingMethod {
    return new RoutingMethod().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoutingMethod {
    return new RoutingMethod().fromJsonString(jsonString, options);
  }

  static equals(a: RoutingMethod | PlainMessage<RoutingMethod> | undefined, b: RoutingMethod | PlainMessage<RoutingMethod> | undefined): boolean {
    return proto3.util.equals(RoutingMethod, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.RoutingMethod.LoadBalancer
 */
export class RoutingMethod_LoadBalancer extends Message<RoutingMethod_LoadBalancer> {
  /**
   * @generated from field: uint32 port = 1;
   */
  port = 0;

  constructor(data?: PartialMessage<RoutingMethod_LoadBalancer>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.RoutingMethod.LoadBalancer";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "port", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoutingMethod_LoadBalancer {
    return new RoutingMethod_LoadBalancer().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoutingMethod_LoadBalancer {
    return new RoutingMethod_LoadBalancer().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoutingMethod_LoadBalancer {
    return new RoutingMethod_LoadBalancer().fromJsonString(jsonString, options);
  }

  static equals(a: RoutingMethod_LoadBalancer | PlainMessage<RoutingMethod_LoadBalancer> | undefined, b: RoutingMethod_LoadBalancer | PlainMessage<RoutingMethod_LoadBalancer> | undefined): boolean {
    return proto3.util.equals(RoutingMethod_LoadBalancer, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.RoutingMethod.Ingress
 */
export class RoutingMethod_Ingress extends Message<RoutingMethod_Ingress> {
  /**
   * @generated from field: string host = 1;
   */
  host = "";

  /**
   * @generated from field: bool tls = 2;
   */
  tls = false;

  /**
   * @generated from field: string path_prefix = 3;
   */
  pathPrefix = "";

  constructor(data?: PartialMessage<RoutingMethod_Ingress>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.RoutingMethod.Ingress";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "tls", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "path_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoutingMethod_Ingress {
    return new RoutingMethod_Ingress().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoutingMethod_Ingress {
    return new RoutingMethod_Ingress().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoutingMethod_Ingress {
    return new RoutingMethod_Ingress().fromJsonString(jsonString, options);
  }

  static equals(a: RoutingMethod_Ingress | PlainMessage<RoutingMethod_Ingress> | undefined, b: RoutingMethod_Ingress | PlainMessage<RoutingMethod_Ingress> | undefined): boolean {
    return proto3.util.equals(RoutingMethod_Ingress, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Middleware
 */
export class Middleware extends Message<Middleware> {
  /**
   * @generated from oneof api.v1.capsule.Middleware.kind
   */
  kind: {
    /**
     * @generated from field: api.v1.capsule.Logging logging = 1;
     */
    value: Logging;
    case: "logging";
  } | {
    /**
     * @generated from field: api.v1.capsule.Authentication authentication = 2;
     */
    value: Authentication;
    case: "authentication";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Middleware>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Middleware";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "logging", kind: "message", T: Logging, oneof: "kind" },
    { no: 2, name: "authentication", kind: "message", T: Authentication, oneof: "kind" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Middleware {
    return new Middleware().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Middleware {
    return new Middleware().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Middleware {
    return new Middleware().fromJsonString(jsonString, options);
  }

  static equals(a: Middleware | PlainMessage<Middleware> | undefined, b: Middleware | PlainMessage<Middleware> | undefined): boolean {
    return proto3.util.equals(Middleware, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Logging
 */
export class Logging extends Message<Logging> {
  /**
   * @generated from field: bool enabled = 1;
   */
  enabled = false;

  constructor(data?: PartialMessage<Logging>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Logging";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Logging {
    return new Logging().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Logging {
    return new Logging().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Logging {
    return new Logging().fromJsonString(jsonString, options);
  }

  static equals(a: Logging | PlainMessage<Logging> | undefined, b: Logging | PlainMessage<Logging> | undefined): boolean {
    return proto3.util.equals(Logging, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Authentication
 */
export class Authentication extends Message<Authentication> {
  /**
   * @generated from field: bool enabled = 1;
   */
  enabled = false;

  /**
   * @generated from field: api.v1.capsule.Auth default = 2;
   */
  default?: Auth;

  /**
   * @generated from field: repeated api.v1.capsule.HttpAuth http = 3;
   */
  http: HttpAuth[] = [];

  /**
   * @generated from field: api.v1.capsule.GRPC grpc = 4;
   */
  grpc?: GRPC;

  constructor(data?: PartialMessage<Authentication>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Authentication";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "default", kind: "message", T: Auth },
    { no: 3, name: "http", kind: "message", T: HttpAuth, repeated: true },
    { no: 4, name: "grpc", kind: "message", T: GRPC },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Authentication {
    return new Authentication().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Authentication {
    return new Authentication().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Authentication {
    return new Authentication().fromJsonString(jsonString, options);
  }

  static equals(a: Authentication | PlainMessage<Authentication> | undefined, b: Authentication | PlainMessage<Authentication> | undefined): boolean {
    return proto3.util.equals(Authentication, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.HttpAuth
 */
export class HttpAuth extends Message<HttpAuth> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: api.v1.capsule.Auth auth = 2;
   */
  auth?: Auth;

  /**
   * @generated from field: bool exact = 3;
   */
  exact = false;

  constructor(data?: PartialMessage<HttpAuth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.HttpAuth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "auth", kind: "message", T: Auth },
    { no: 3, name: "exact", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HttpAuth {
    return new HttpAuth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HttpAuth {
    return new HttpAuth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HttpAuth {
    return new HttpAuth().fromJsonString(jsonString, options);
  }

  static equals(a: HttpAuth | PlainMessage<HttpAuth> | undefined, b: HttpAuth | PlainMessage<HttpAuth> | undefined): boolean {
    return proto3.util.equals(HttpAuth, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.GRPC
 */
export class GRPC extends Message<GRPC> {
  /**
   * @generated from field: api.v1.capsule.Auth auth = 1;
   */
  auth?: Auth;

  /**
   * @generated from field: string path_prefix = 2;
   */
  pathPrefix = "";

  /**
   * @generated from field: map<string, api.v1.capsule.GRPCService> services = 3;
   */
  services: { [key: string]: GRPCService } = {};

  constructor(data?: PartialMessage<GRPC>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.GRPC";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "auth", kind: "message", T: Auth },
    { no: 2, name: "path_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "services", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: GRPCService} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GRPC {
    return new GRPC().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GRPC {
    return new GRPC().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GRPC {
    return new GRPC().fromJsonString(jsonString, options);
  }

  static equals(a: GRPC | PlainMessage<GRPC> | undefined, b: GRPC | PlainMessage<GRPC> | undefined): boolean {
    return proto3.util.equals(GRPC, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.GRPCService
 */
export class GRPCService extends Message<GRPCService> {
  /**
   * @generated from field: api.v1.capsule.Auth auth = 1;
   */
  auth?: Auth;

  /**
   * @generated from field: map<string, api.v1.capsule.GRPCMethod> methods = 2;
   */
  methods: { [key: string]: GRPCMethod } = {};

  constructor(data?: PartialMessage<GRPCService>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.GRPCService";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "auth", kind: "message", T: Auth },
    { no: 2, name: "methods", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: GRPCMethod} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GRPCService {
    return new GRPCService().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GRPCService {
    return new GRPCService().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GRPCService {
    return new GRPCService().fromJsonString(jsonString, options);
  }

  static equals(a: GRPCService | PlainMessage<GRPCService> | undefined, b: GRPCService | PlainMessage<GRPCService> | undefined): boolean {
    return proto3.util.equals(GRPCService, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.GRPCMethod
 */
export class GRPCMethod extends Message<GRPCMethod> {
  /**
   * @generated from field: api.v1.capsule.Auth auth = 1;
   */
  auth?: Auth;

  constructor(data?: PartialMessage<GRPCMethod>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.GRPCMethod";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "auth", kind: "message", T: Auth },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GRPCMethod {
    return new GRPCMethod().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GRPCMethod {
    return new GRPCMethod().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GRPCMethod {
    return new GRPCMethod().fromJsonString(jsonString, options);
  }

  static equals(a: GRPCMethod | PlainMessage<GRPCMethod> | undefined, b: GRPCMethod | PlainMessage<GRPCMethod> | undefined): boolean {
    return proto3.util.equals(GRPCMethod, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Auth
 */
export class Auth extends Message<Auth> {
  /**
   * @generated from oneof api.v1.capsule.Auth.method
   */
  method: {
    /**
     * @generated from field: api.v1.capsule.Auth.AllowAny allow_any = 1;
     */
    value: Auth_AllowAny;
    case: "allowAny";
  } | {
    /**
     * @generated from field: api.v1.capsule.Auth.AllowAuthorized allow_authorized = 2;
     */
    value: Auth_AllowAuthorized;
    case: "allowAuthorized";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Auth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Auth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allow_any", kind: "message", T: Auth_AllowAny, oneof: "method" },
    { no: 2, name: "allow_authorized", kind: "message", T: Auth_AllowAuthorized, oneof: "method" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Auth {
    return new Auth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Auth {
    return new Auth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Auth {
    return new Auth().fromJsonString(jsonString, options);
  }

  static equals(a: Auth | PlainMessage<Auth> | undefined, b: Auth | PlainMessage<Auth> | undefined): boolean {
    return proto3.util.equals(Auth, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Auth.AllowAny
 */
export class Auth_AllowAny extends Message<Auth_AllowAny> {
  constructor(data?: PartialMessage<Auth_AllowAny>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Auth.AllowAny";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Auth_AllowAny {
    return new Auth_AllowAny().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Auth_AllowAny {
    return new Auth_AllowAny().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Auth_AllowAny {
    return new Auth_AllowAny().fromJsonString(jsonString, options);
  }

  static equals(a: Auth_AllowAny | PlainMessage<Auth_AllowAny> | undefined, b: Auth_AllowAny | PlainMessage<Auth_AllowAny> | undefined): boolean {
    return proto3.util.equals(Auth_AllowAny, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.Auth.AllowAuthorized
 */
export class Auth_AllowAuthorized extends Message<Auth_AllowAuthorized> {
  /**
   * @generated from field: map<string, string> claims = 1;
   */
  claims: { [key: string]: string } = {};

  constructor(data?: PartialMessage<Auth_AllowAuthorized>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Auth.AllowAuthorized";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "claims", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Auth_AllowAuthorized {
    return new Auth_AllowAuthorized().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Auth_AllowAuthorized {
    return new Auth_AllowAuthorized().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Auth_AllowAuthorized {
    return new Auth_AllowAuthorized().fromJsonString(jsonString, options);
  }

  static equals(a: Auth_AllowAuthorized | PlainMessage<Auth_AllowAuthorized> | undefined, b: Auth_AllowAuthorized | PlainMessage<Auth_AllowAuthorized> | undefined): boolean {
    return proto3.util.equals(Auth_AllowAuthorized, a, b);
  }
}

