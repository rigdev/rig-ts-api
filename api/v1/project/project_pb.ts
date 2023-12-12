// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/project/project.proto (package api.v1.project, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.v1.project.Plan
 */
export enum Plan {
  /**
   * @generated from enum value: PLAN_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PLAN_FREE = 1;
   */
  FREE = 1,

  /**
   * @generated from enum value: PLAN_TEAM = 2;
   */
  TEAM = 2,

  /**
   * @generated from enum value: PLAN_ENTERPRISE = 3;
   */
  ENTERPRISE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(Plan)
proto3.util.setEnumType(Plan, "api.v1.project.Plan", [
  { no: 0, name: "PLAN_UNSPECIFIED" },
  { no: 1, name: "PLAN_FREE" },
  { no: 2, name: "PLAN_TEAM" },
  { no: 3, name: "PLAN_ENTERPRISE" },
]);

/**
 * @generated from message api.v1.project.Project
 */
export class Project extends Message<Project> {
  /**
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 3;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 4;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: string installation_id = 5;
   */
  installationId = "";

  constructor(data?: PartialMessage<Project>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.Project";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
    { no: 4, name: "updated_at", kind: "message", T: Timestamp },
    { no: 5, name: "installation_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message api.v1.project.Update
 */
export class Update extends Message<Update> {
  /**
   * @generated from oneof api.v1.project.Update.field
   */
  field: {
    /**
     * @generated from field: string name = 1;
     */
    value: string;
    case: "name";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Update>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.Update";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
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

