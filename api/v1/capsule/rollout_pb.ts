// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file api/v1/capsule/rollout.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Status } from "./rollout/status_pb.js";
import { Author } from "../../../model/author_pb.js";
import { Change, ContainerSettings, HorizontalScale, Network } from "./change_pb.js";
import { CronJob } from "./job_pb.js";

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
 * The rollout model.
 *
 * @generated from message api.v1.capsule.Rollout
 */
export class Rollout extends Message<Rollout> {
  /**
   * Unique indentifier for the rollout.
   *
   * @generated from field: uint64 rollout_id = 1;
   */
  rolloutId = protoInt64.zero;

  /**
   * The rollout config.
   *
   * @generated from field: api.v1.capsule.RolloutConfig config = 2;
   */
  config?: RolloutConfig;

  /**
   * The rollout status.
   *
   * @generated from field: api.v1.capsule.rollout.Status status = 4;
   */
  status?: Status;

  constructor(data?: PartialMessage<Rollout>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Rollout";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rollout_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "config", kind: "message", T: RolloutConfig },
    { no: 4, name: "status", kind: "message", T: Status },
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
   * @generated from field: string image_id = 5;
   */
  imageId = "";

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

  /**
   * @generated from field: repeated api.v1.capsule.ConfigFile config_files = 9;
   */
  configFiles: ConfigFile[] = [];

  /**
   * @generated from field: api.v1.capsule.HorizontalScale horizontal_scale = 10;
   */
  horizontalScale?: HorizontalScale;

  /**
   * @generated from field: repeated api.v1.capsule.CronJob cron_jobs = 11;
   */
  cronJobs: CronJob[] = [];

  /**
   * @generated from field: string environment_id = 12;
   */
  environmentId = "";

  /**
   * @generated from field: string message = 13;
   */
  message = "";

  /**
   * @generated from field: map<string, string> annotations = 14;
   */
  annotations: { [key: string]: string } = {};

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
    { no: 5, name: "image_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "network", kind: "message", T: Network },
    { no: 7, name: "container_settings", kind: "message", T: ContainerSettings },
    { no: 8, name: "auto_add_rig_service_accounts", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "config_files", kind: "message", T: ConfigFile, repeated: true },
    { no: 10, name: "horizontal_scale", kind: "message", T: HorizontalScale },
    { no: 11, name: "cron_jobs", kind: "message", T: CronJob, repeated: true },
    { no: 12, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "annotations", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
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
 * @generated from message api.v1.capsule.ConfigFile
 */
export class ConfigFile extends Message<ConfigFile> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: bytes content = 2;
   */
  content = new Uint8Array(0);

  /**
   * @generated from field: model.Author updated_by = 3;
   */
  updatedBy?: Author;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 4;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: bool is_secret = 5;
   */
  isSecret = false;

  constructor(data?: PartialMessage<ConfigFile>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.ConfigFile";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "updated_by", kind: "message", T: Author },
    { no: 4, name: "updated_at", kind: "message", T: Timestamp },
    { no: 5, name: "is_secret", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigFile {
    return new ConfigFile().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigFile {
    return new ConfigFile().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigFile {
    return new ConfigFile().fromJsonString(jsonString, options);
  }

  static equals(a: ConfigFile | PlainMessage<ConfigFile> | undefined, b: ConfigFile | PlainMessage<ConfigFile> | undefined): boolean {
    return proto3.util.equals(ConfigFile, a, b);
  }
}

