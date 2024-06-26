// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/group/group.proto (package api.v1.group, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Metadata } from "../../../model/metadata_pb.js";

/**
 * Group is a named collection of users and service accounts with optional
 * metadata.
 *
 * @generated from message api.v1.group.Group
 */
export class Group extends Message<Group> {
  /**
   * Unique name of the group.
   *
   * @generated from field: string group_id = 1;
   */
  groupId = "";

  /**
   * Number of members.
   *
   * @generated from field: uint64 num_members = 5;
   */
  numMembers = protoInt64.zero;

  /**
   * Metadata of the group.
   *
   * @generated from field: map<string, bytes> metadata = 6;
   */
  metadata: { [key: string]: Uint8Array } = {};

  /**
   * Creation time of the group.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 7;
   */
  createdAt?: Timestamp;

  /**
   * Last update time of the group.
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 8;
   */
  updatedAt?: Timestamp;

  constructor(data?: PartialMessage<Group>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.Group";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "num_members", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "metadata", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 7, name: "created_at", kind: "message", T: Timestamp },
    { no: 8, name: "updated_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Group {
    return new Group().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Group {
    return new Group().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Group {
    return new Group().fromJsonString(jsonString, options);
  }

  static equals(a: Group | PlainMessage<Group> | undefined, b: Group | PlainMessage<Group> | undefined): boolean {
    return proto3.util.equals(Group, a, b);
  }
}

/**
 * An update msg for a group.
 *
 * @generated from message api.v1.group.Update
 */
export class Update extends Message<Update> {
  /**
   * @generated from oneof api.v1.group.Update.field
   */
  field: {
    /**
     * Update the unique group name.
     *
     * @generated from field: string group_id = 1;
     */
    value: string;
    case: "groupId";
  } | {
    /**
     * Update or create a metadata entry.
     *
     * @generated from field: model.Metadata set_metadata = 2;
     */
    value: Metadata;
    case: "setMetadata";
  } | {
    /**
     * Delete a metadata entry.
     *
     * @generated from field: string delete_metadata_key = 3;
     */
    value: string;
    case: "deleteMetadataKey";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Update>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.Update";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
    { no: 2, name: "set_metadata", kind: "message", T: Metadata, oneof: "field" },
    { no: 3, name: "delete_metadata_key", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
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
 * MemberID is a union of service account id and user id.
 *
 * @generated from message api.v1.group.MemberID
 */
export class MemberID extends Message<MemberID> {
  /**
   * @generated from oneof api.v1.group.MemberID.kind
   */
  kind: {
    /**
     * ID of a service account.
     *
     * @generated from field: string service_account_id = 1;
     */
    value: string;
    case: "serviceAccountId";
  } | {
    /**
     * ID of a user.
     *
     * @generated from field: string user_id = 2;
     */
    value: string;
    case: "userId";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<MemberID>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.MemberID";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "service_account_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MemberID {
    return new MemberID().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MemberID {
    return new MemberID().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MemberID {
    return new MemberID().fromJsonString(jsonString, options);
  }

  static equals(a: MemberID | PlainMessage<MemberID> | undefined, b: MemberID | PlainMessage<MemberID> | undefined): boolean {
    return proto3.util.equals(MemberID, a, b);
  }
}

