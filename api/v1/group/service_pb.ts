// @generated by protoc-gen-es v1.4.1 with parameter "target=ts"
// @generated from file api/v1/group/service.proto (package api.v1.group, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Group, Update } from "./group_pb.js";
import { Pagination } from "../../../model/common_pb.js";
import { MemberEntry } from "../../../model/user_pb.js";

/**
 * The request of a Groups.Lookup RPC
 *
 * @generated from message api.v1.group.GetByNameRequest
 */
export class GetByNameRequest extends Message<GetByNameRequest> {
  /**
   * The group name
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetByNameRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.GetByNameRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetByNameRequest {
    return new GetByNameRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetByNameRequest {
    return new GetByNameRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetByNameRequest {
    return new GetByNameRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetByNameRequest | PlainMessage<GetByNameRequest> | undefined, b: GetByNameRequest | PlainMessage<GetByNameRequest> | undefined): boolean {
    return proto3.util.equals(GetByNameRequest, a, b);
  }
}

/**
 * The response of a Groups.Lookup RPC
 *
 * @generated from message api.v1.group.GetByNameResponse
 */
export class GetByNameResponse extends Message<GetByNameResponse> {
  /**
   * The group
   *
   * @generated from field: api.v1.group.Group group = 1;
   */
  group?: Group;

  constructor(data?: PartialMessage<GetByNameResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.GetByNameResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group", kind: "message", T: Group },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetByNameResponse {
    return new GetByNameResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetByNameResponse {
    return new GetByNameResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetByNameResponse {
    return new GetByNameResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetByNameResponse | PlainMessage<GetByNameResponse> | undefined, b: GetByNameResponse | PlainMessage<GetByNameResponse> | undefined): boolean {
    return proto3.util.equals(GetByNameResponse, a, b);
  }
}

/**
 * The request of a Groups.Create RPC
 *
 * @generated from message api.v1.group.CreateRequest
 */
export class CreateRequest extends Message<CreateRequest> {
  /**
   * @generated from field: repeated api.v1.group.Update initializers = 1;
   */
  initializers: Update[] = [];

  constructor(data?: PartialMessage<CreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.CreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "initializers", kind: "message", T: Update, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRequest {
    return new CreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRequest {
    return new CreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRequest {
    return new CreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateRequest | PlainMessage<CreateRequest> | undefined, b: CreateRequest | PlainMessage<CreateRequest> | undefined): boolean {
    return proto3.util.equals(CreateRequest, a, b);
  }
}

/**
 * The response of a Groups.Create RPC
 *
 * @generated from message api.v1.group.CreateResponse
 */
export class CreateResponse extends Message<CreateResponse> {
  /**
   * @generated from field: api.v1.group.Group group = 1;
   */
  group?: Group;

  constructor(data?: PartialMessage<CreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.CreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group", kind: "message", T: Group },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateResponse {
    return new CreateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateResponse {
    return new CreateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateResponse {
    return new CreateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateResponse | PlainMessage<CreateResponse> | undefined, b: CreateResponse | PlainMessage<CreateResponse> | undefined): boolean {
    return proto3.util.equals(CreateResponse, a, b);
  }
}

/**
 * The request of a Groups.List RPC
 *
 * @generated from message api.v1.group.ListRequest
 */
export class ListRequest extends Message<ListRequest> {
  /**
   * @generated from field: model.Pagination pagination = 1;
   */
  pagination?: Pagination;

  /**
   * @generated from field: string search = 2;
   */
  search = "";

  constructor(data?: PartialMessage<ListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.ListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: Pagination },
    { no: 2, name: "search", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest {
    return new ListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest {
    return new ListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest {
    return new ListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListRequest | PlainMessage<ListRequest> | undefined, b: ListRequest | PlainMessage<ListRequest> | undefined): boolean {
    return proto3.util.equals(ListRequest, a, b);
  }
}

/**
 * The response of a Groups.List RPC
 *
 * @generated from message api.v1.group.ListResponse
 */
export class ListResponse extends Message<ListResponse> {
  /**
   * list of groups
   *
   * @generated from field: repeated api.v1.group.Group groups = 1;
   */
  groups: Group[] = [];

  /**
   * count of total amount of groups
   *
   * @generated from field: uint64 total = 2;
   */
  total = protoInt64.zero;

  constructor(data?: PartialMessage<ListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.ListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "groups", kind: "message", T: Group, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListResponse {
    return new ListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListResponse {
    return new ListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListResponse {
    return new ListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListResponse | PlainMessage<ListResponse> | undefined, b: ListResponse | PlainMessage<ListResponse> | undefined): boolean {
    return proto3.util.equals(ListResponse, a, b);
  }
}

/**
 * The request of a Group.Delete RPC
 *
 * @generated from message api.v1.group.DeleteRequest
 */
export class DeleteRequest extends Message<DeleteRequest> {
  /**
   * The group to delete
   *
   * @generated from field: string group_id = 1;
   */
  groupId = "";

  constructor(data?: PartialMessage<DeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.DeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRequest {
    return new DeleteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRequest {
    return new DeleteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRequest {
    return new DeleteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteRequest | PlainMessage<DeleteRequest> | undefined, b: DeleteRequest | PlainMessage<DeleteRequest> | undefined): boolean {
    return proto3.util.equals(DeleteRequest, a, b);
  }
}

/**
 * The response of a Group.Delete RPC
 *
 * @generated from message api.v1.group.DeleteResponse
 */
export class DeleteResponse extends Message<DeleteResponse> {
  constructor(data?: PartialMessage<DeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.DeleteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteResponse {
    return new DeleteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteResponse {
    return new DeleteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteResponse {
    return new DeleteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteResponse | PlainMessage<DeleteResponse> | undefined, b: DeleteResponse | PlainMessage<DeleteResponse> | undefined): boolean {
    return proto3.util.equals(DeleteResponse, a, b);
  }
}

/**
 * The request of a Groups.Update RPC
 *
 * @generated from message api.v1.group.UpdateRequest
 */
export class UpdateRequest extends Message<UpdateRequest> {
  /**
   * @generated from field: repeated api.v1.group.Update updates = 1;
   */
  updates: Update[] = [];

  /**
   * The group id
   *
   * @generated from field: string group_id = 2;
   */
  groupId = "";

  constructor(data?: PartialMessage<UpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.UpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "updates", kind: "message", T: Update, repeated: true },
    { no: 2, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRequest {
    return new UpdateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRequest {
    return new UpdateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRequest {
    return new UpdateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateRequest | PlainMessage<UpdateRequest> | undefined, b: UpdateRequest | PlainMessage<UpdateRequest> | undefined): boolean {
    return proto3.util.equals(UpdateRequest, a, b);
  }
}

/**
 * The response of a Groups.Update RPC
 *
 * @generated from message api.v1.group.UpdateResponse
 */
export class UpdateResponse extends Message<UpdateResponse> {
  constructor(data?: PartialMessage<UpdateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.UpdateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateResponse {
    return new UpdateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateResponse {
    return new UpdateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateResponse {
    return new UpdateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateResponse | PlainMessage<UpdateResponse> | undefined, b: UpdateResponse | PlainMessage<UpdateResponse> | undefined): boolean {
    return proto3.util.equals(UpdateResponse, a, b);
  }
}

/**
 * The request of a Groups.Get RPC
 *
 * @generated from message api.v1.group.GetRequest
 */
export class GetRequest extends Message<GetRequest> {
  /**
   * The group id
   *
   * @generated from field: string group_id = 1;
   */
  groupId = "";

  constructor(data?: PartialMessage<GetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.GetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest {
    return new GetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean {
    return proto3.util.equals(GetRequest, a, b);
  }
}

/**
 * The response of a Groups.Get RPC
 *
 * @generated from message api.v1.group.GetResponse
 */
export class GetResponse extends Message<GetResponse> {
  /**
   * @generated from field: api.v1.group.Group group = 1;
   */
  group?: Group;

  constructor(data?: PartialMessage<GetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.GetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group", kind: "message", T: Group },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetResponse {
    return new GetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetResponse | PlainMessage<GetResponse> | undefined, b: GetResponse | PlainMessage<GetResponse> | undefined): boolean {
    return proto3.util.equals(GetResponse, a, b);
  }
}

/**
 * @generated from message api.v1.group.AddMemberRequest
 */
export class AddMemberRequest extends Message<AddMemberRequest> {
  /**
   * @generated from field: string group_id = 1;
   */
  groupId = "";

  /**
   * @generated from field: repeated string user_ids = 2;
   */
  userIds: string[] = [];

  constructor(data?: PartialMessage<AddMemberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.AddMemberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddMemberRequest {
    return new AddMemberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddMemberRequest {
    return new AddMemberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddMemberRequest {
    return new AddMemberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AddMemberRequest | PlainMessage<AddMemberRequest> | undefined, b: AddMemberRequest | PlainMessage<AddMemberRequest> | undefined): boolean {
    return proto3.util.equals(AddMemberRequest, a, b);
  }
}

/**
 * @generated from message api.v1.group.AddMemberResponse
 */
export class AddMemberResponse extends Message<AddMemberResponse> {
  constructor(data?: PartialMessage<AddMemberResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.AddMemberResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddMemberResponse {
    return new AddMemberResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddMemberResponse {
    return new AddMemberResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddMemberResponse {
    return new AddMemberResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AddMemberResponse | PlainMessage<AddMemberResponse> | undefined, b: AddMemberResponse | PlainMessage<AddMemberResponse> | undefined): boolean {
    return proto3.util.equals(AddMemberResponse, a, b);
  }
}

/**
 * @generated from message api.v1.group.RemoveMemberRequest
 */
export class RemoveMemberRequest extends Message<RemoveMemberRequest> {
  /**
   * @generated from field: string group_id = 1;
   */
  groupId = "";

  /**
   * @generated from field: string user_id = 2;
   */
  userId = "";

  constructor(data?: PartialMessage<RemoveMemberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.RemoveMemberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveMemberRequest {
    return new RemoveMemberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveMemberRequest {
    return new RemoveMemberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveMemberRequest {
    return new RemoveMemberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveMemberRequest | PlainMessage<RemoveMemberRequest> | undefined, b: RemoveMemberRequest | PlainMessage<RemoveMemberRequest> | undefined): boolean {
    return proto3.util.equals(RemoveMemberRequest, a, b);
  }
}

/**
 * @generated from message api.v1.group.RemoveMemberResponse
 */
export class RemoveMemberResponse extends Message<RemoveMemberResponse> {
  constructor(data?: PartialMessage<RemoveMemberResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.RemoveMemberResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveMemberResponse {
    return new RemoveMemberResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveMemberResponse {
    return new RemoveMemberResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveMemberResponse {
    return new RemoveMemberResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveMemberResponse | PlainMessage<RemoveMemberResponse> | undefined, b: RemoveMemberResponse | PlainMessage<RemoveMemberResponse> | undefined): boolean {
    return proto3.util.equals(RemoveMemberResponse, a, b);
  }
}

/**
 * @generated from message api.v1.group.ListMembersRequest
 */
export class ListMembersRequest extends Message<ListMembersRequest> {
  /**
   * @generated from field: string group_id = 1;
   */
  groupId = "";

  /**
   * @generated from field: model.Pagination pagination = 2;
   */
  pagination?: Pagination;

  constructor(data?: PartialMessage<ListMembersRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.ListMembersRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: Pagination },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListMembersRequest {
    return new ListMembersRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListMembersRequest {
    return new ListMembersRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListMembersRequest {
    return new ListMembersRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListMembersRequest | PlainMessage<ListMembersRequest> | undefined, b: ListMembersRequest | PlainMessage<ListMembersRequest> | undefined): boolean {
    return proto3.util.equals(ListMembersRequest, a, b);
  }
}

/**
 * @generated from message api.v1.group.ListMembersResponse
 */
export class ListMembersResponse extends Message<ListMembersResponse> {
  /**
   * @generated from field: repeated model.MemberEntry members = 1;
   */
  members: MemberEntry[] = [];

  /**
   * @generated from field: uint64 total = 2;
   */
  total = protoInt64.zero;

  constructor(data?: PartialMessage<ListMembersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.ListMembersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "members", kind: "message", T: MemberEntry, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListMembersResponse {
    return new ListMembersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListMembersResponse {
    return new ListMembersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListMembersResponse {
    return new ListMembersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListMembersResponse | PlainMessage<ListMembersResponse> | undefined, b: ListMembersResponse | PlainMessage<ListMembersResponse> | undefined): boolean {
    return proto3.util.equals(ListMembersResponse, a, b);
  }
}

/**
 * @generated from message api.v1.group.ListGroupsForUserRequest
 */
export class ListGroupsForUserRequest extends Message<ListGroupsForUserRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: model.Pagination pagination = 2;
   */
  pagination?: Pagination;

  constructor(data?: PartialMessage<ListGroupsForUserRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.ListGroupsForUserRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: Pagination },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGroupsForUserRequest {
    return new ListGroupsForUserRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGroupsForUserRequest {
    return new ListGroupsForUserRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGroupsForUserRequest {
    return new ListGroupsForUserRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListGroupsForUserRequest | PlainMessage<ListGroupsForUserRequest> | undefined, b: ListGroupsForUserRequest | PlainMessage<ListGroupsForUserRequest> | undefined): boolean {
    return proto3.util.equals(ListGroupsForUserRequest, a, b);
  }
}

/**
 * @generated from message api.v1.group.ListGroupsForUserResponse
 */
export class ListGroupsForUserResponse extends Message<ListGroupsForUserResponse> {
  /**
   * @generated from field: repeated api.v1.group.Group groups = 1;
   */
  groups: Group[] = [];

  /**
   * @generated from field: uint64 total = 2;
   */
  total = protoInt64.zero;

  constructor(data?: PartialMessage<ListGroupsForUserResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.group.ListGroupsForUserResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "groups", kind: "message", T: Group, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGroupsForUserResponse {
    return new ListGroupsForUserResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGroupsForUserResponse {
    return new ListGroupsForUserResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGroupsForUserResponse {
    return new ListGroupsForUserResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListGroupsForUserResponse | PlainMessage<ListGroupsForUserResponse> | undefined, b: ListGroupsForUserResponse | PlainMessage<ListGroupsForUserResponse> | undefined): boolean {
    return proto3.util.equals(ListGroupsForUserResponse, a, b);
  }
}

