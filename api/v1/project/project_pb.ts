// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/project/project.proto (package api.v1.project, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { GitStore } from "../../../model/git_pb.js";
import { Pipeline } from "../../../model/pipeline_pb.js";
import { NotificationNotifier } from "../../../model/notification_pb.js";

/**
 * The top most model that capsules etc belong to.
 *
 * @generated from message api.v1.project.Project
 */
export class Project extends Message<Project> {
  /**
   * The unique id of the project.
   *
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * When the project was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 3;
   */
  createdAt?: Timestamp;

  /**
   * When the project was last updated.
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 4;
   */
  updatedAt?: Timestamp;

  /**
   * The installation id of the project.
   *
   * @generated from field: string installation_id = 5;
   */
  installationId = "";

  /**
   * @generated from field: model.GitStore git_store = 6;
   */
  gitStore?: GitStore;

  /**
   * The notifiers for the project.
   *
   * @generated from field: api.v1.project.NotificationNotifiers notifiers = 7;
   */
  notifiers?: NotificationNotifiers;

  /**
   * Environment pipelines for the project
   *
   * @generated from field: repeated model.Pipeline pipelines = 8;
   */
  pipelines: Pipeline[] = [];

  constructor(data?: PartialMessage<Project>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.Project";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
    { no: 4, name: "updated_at", kind: "message", T: Timestamp },
    { no: 5, name: "installation_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "git_store", kind: "message", T: GitStore },
    { no: 7, name: "notifiers", kind: "message", T: NotificationNotifiers },
    { no: 8, name: "pipelines", kind: "message", T: Pipeline, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Project {
    return new Project().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Project {
    return new Project().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Project {
    return new Project().fromJsonString(jsonString, options);
  }

  static equals(a: Project | PlainMessage<Project> | undefined, b: Project | PlainMessage<Project> | undefined): boolean {
    return proto3.util.equals(Project, a, b);
  }
}

/**
 * Update msg for a project.
 *
 * @generated from message api.v1.project.Update
 */
export class Update extends Message<Update> {
  /**
   * @generated from oneof api.v1.project.Update.field
   */
  field: {
    /**
     * Set the git store.
     *
     * @generated from field: model.GitStore set_git_store = 1;
     */
    value: GitStore;
    case: "setGitStore";
  } | {
    /**
     * Set the notifiers.
     *
     * @generated from field: api.v1.project.NotificationNotifiers notifiers = 2;
     */
    value: NotificationNotifiers;
    case: "notifiers";
  } | {
    /**
     * Set the pipelines
     *
     * @generated from field: api.v1.project.Update.Pipelines pipelines = 3;
     */
    value: Update_Pipelines;
    case: "pipelines";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Update>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.Update";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "set_git_store", kind: "message", T: GitStore, oneof: "field" },
    { no: 2, name: "notifiers", kind: "message", T: NotificationNotifiers, oneof: "field" },
    { no: 3, name: "pipelines", kind: "message", T: Update_Pipelines, oneof: "field" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Update {
    return new Update().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Update {
    return new Update().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Update {
    return new Update().fromJsonString(jsonString, options);
  }

  static equals(a: Update | PlainMessage<Update> | undefined, b: Update | PlainMessage<Update> | undefined): boolean {
    return proto3.util.equals(Update, a, b);
  }
}

/**
 * @generated from message api.v1.project.Update.Pipelines
 */
export class Update_Pipelines extends Message<Update_Pipelines> {
  /**
   * The pipelines to update.
   *
   * @generated from field: repeated model.Pipeline pipelines = 1;
   */
  pipelines: Pipeline[] = [];

  constructor(data?: PartialMessage<Update_Pipelines>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.Update.Pipelines";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pipelines", kind: "message", T: Pipeline, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Update_Pipelines {
    return new Update_Pipelines().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Update_Pipelines {
    return new Update_Pipelines().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Update_Pipelines {
    return new Update_Pipelines().fromJsonString(jsonString, options);
  }

  static equals(a: Update_Pipelines | PlainMessage<Update_Pipelines> | undefined, b: Update_Pipelines | PlainMessage<Update_Pipelines> | undefined): boolean {
    return proto3.util.equals(Update_Pipelines, a, b);
  }
}

/**
 * @generated from message api.v1.project.NotificationNotifiers
 */
export class NotificationNotifiers extends Message<NotificationNotifiers> {
  /**
   * If the notifiers are disabled, notifiers from parent are not inherited even
   * if these notifiers at this level are empty.
   *
   * @generated from field: bool disabled = 1;
   */
  disabled = false;

  /**
   * @generated from field: repeated model.NotificationNotifier notifiers = 2;
   */
  notifiers: NotificationNotifier[] = [];

  constructor(data?: PartialMessage<NotificationNotifiers>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.NotificationNotifiers";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "notifiers", kind: "message", T: NotificationNotifier, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NotificationNotifiers {
    return new NotificationNotifiers().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NotificationNotifiers {
    return new NotificationNotifiers().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NotificationNotifiers {
    return new NotificationNotifiers().fromJsonString(jsonString, options);
  }

  static equals(a: NotificationNotifiers | PlainMessage<NotificationNotifiers> | undefined, b: NotificationNotifiers | PlainMessage<NotificationNotifiers> | undefined): boolean {
    return proto3.util.equals(NotificationNotifiers, a, b);
  }
}

