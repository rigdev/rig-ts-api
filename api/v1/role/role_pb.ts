// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file api/v1/role/role.proto (package api.v1.role, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Metadata } from "../../../model/metadata_pb.js";

/**
 * Role model for Role based access control.
 *
 * @generated from message api.v1.role.Role
 */
export class Role extends Message<Role> {
  /**
   * Unique ID of the role.
   *
   * @generated from field: string role_id = 1;
   */
  roleId = "";

  /**
   * The permissions granted to the role.
   *
   * @generated from field: repeated api.v1.role.Permission permissions = 2;
   */
  permissions: Permission[] = [];

  /**
   * Metadata associated with the role.
   *
   * @generated from field: map<string, bytes> metadata = 3;
   */
  metadata: { [key: string]: Uint8Array } = {};

  /**
   * Timestamp when the role was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 4;
   */
  createdAt?: Timestamp;

  /**
   * Timestamp when the role was last updated.
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 5;
   */
  updatedAt?: Timestamp;

  constructor(data?: PartialMessage<Role>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.role.Role";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "role_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permissions", kind: "message", T: Permission, repeated: true },
    { no: 3, name: "metadata", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 4, name: "created_at", kind: "message", T: Timestamp },
    { no: 5, name: "updated_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role {
    return new Role().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role {
    return new Role().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role {
    return new Role().fromJsonString(jsonString, options);
  }

  static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean {
    return proto3.util.equals(Role, a, b);
  }
}

/**
 * EntityID is a oneof type that can be used to represent a user, service
 * account or group.
 *
 * @generated from message api.v1.role.EntityID
 */
export class EntityID extends Message<EntityID> {
  /**
   * The type of entity that has a role.
   *
   * @generated from oneof api.v1.role.EntityID.kind
   */
  kind: {
    /**
     * User entity.
     *
     * @generated from field: string user_id = 1;
     */
    value: string;
    case: "userId";
  } | {
    /**
     * Service account entity.
     *
     * @generated from field: string service_account_id = 2;
     */
    value: string;
    case: "serviceAccountId";
  } | {
    /**
     * Group entity.
     *
     * @generated from field: string group_id = 3;
     */
    value: string;
    case: "groupId";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<EntityID>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.role.EntityID";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
    { no: 2, name: "service_account_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
    { no: 3, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityID {
    return new EntityID().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityID {
    return new EntityID().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityID {
    return new EntityID().fromJsonString(jsonString, options);
  }

  static equals(a: EntityID | PlainMessage<EntityID> | undefined, b: EntityID | PlainMessage<EntityID> | undefined): boolean {
    return proto3.util.equals(EntityID, a, b);
  }
}

/**
 * A permission that is granted to a role.
 *
 * @generated from message api.v1.role.Permission
 */
export class Permission extends Message<Permission> {
  /**
   * The action that is action permission to perform.
   *
   * @generated from field: string action = 1;
   */
  action = "";

  /**
   * The scope in which the action can be performed.
   *
   * @generated from field: api.v1.role.Scope scope = 2;
   */
  scope?: Scope;

  constructor(data?: PartialMessage<Permission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.role.Permission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "action", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "scope", kind: "message", T: Scope },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Permission {
    return new Permission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Permission {
    return new Permission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Permission {
    return new Permission().fromJsonString(jsonString, options);
  }

  static equals(a: Permission | PlainMessage<Permission> | undefined, b: Permission | PlainMessage<Permission> | undefined): boolean {
    return proto3.util.equals(Permission, a, b);
  }
}

/**
 * Scope for permissions.
 *
 * @generated from message api.v1.role.Scope
 */
export class Scope extends Message<Scope> {
  /**
   * The resource on which the action can be performed. This consists of a type,
   * and an optional ID. fx. "user/*", "group/admin"
   *
   * @generated from field: string resource = 1;
   */
  resource = "";

  /**
   * The environment in which the action can be performed. This can be a
   * wildcard.
   *
   * @generated from field: string environment = 2;
   */
  environment = "";

  /**
   * The project in which the action can be performed. This can be a wildcard.
   *
   * @generated from field: string project = 3;
   */
  project = "";

  constructor(data?: PartialMessage<Scope>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.role.Scope";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "environment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Scope {
    return new Scope().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Scope {
    return new Scope().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Scope {
    return new Scope().fromJsonString(jsonString, options);
  }

  static equals(a: Scope | PlainMessage<Scope> | undefined, b: Scope | PlainMessage<Scope> | undefined): boolean {
    return proto3.util.equals(Scope, a, b);
  }
}

/**
 * Update message to update a field of a role.
 *
 * @generated from message api.v1.role.Update
 */
export class Update extends Message<Update> {
  /**
   * @generated from oneof api.v1.role.Update.update
   */
  update: {
    /**
     * Adding a permission to the role.
     *
     * @generated from field: api.v1.role.Permission add_permission = 1;
     */
    value: Permission;
    case: "addPermission";
  } | {
    /**
     * Removing a permission from the role.
     *
     * @generated from field: api.v1.role.Permission remove_permission = 2;
     */
    value: Permission;
    case: "removePermission";
  } | {
    /**
     * Update or create a metadata field on the role.
     *
     * @generated from field: model.Metadata set_metadata = 3;
     */
    value: Metadata;
    case: "setMetadata";
  } | {
    /**
     * Delete a metadata field on the role.
     *
     * @generated from field: string delete_metadata_key = 4;
     */
    value: string;
    case: "deleteMetadataKey";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Update>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.role.Update";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "add_permission", kind: "message", T: Permission, oneof: "update" },
    { no: 2, name: "remove_permission", kind: "message", T: Permission, oneof: "update" },
    { no: 3, name: "set_metadata", kind: "message", T: Metadata, oneof: "update" },
    { no: 4, name: "delete_metadata_key", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "update" },
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

