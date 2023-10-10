// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file api/v1/database/service.proto (package api.v1.database, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Database, Table, Type, Update } from "./database_pb.js";
import { Pagination } from "../../../model/common_pb.js";

/**
 * @generated from message api.v1.database.GetByNameRequest
 */
export class GetByNameRequest extends Message<GetByNameRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetByNameRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.GetByNameRequest";
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
 * @generated from message api.v1.database.GetByNameResponse
 */
export class GetByNameResponse extends Message<GetByNameResponse> {
  /**
   * @generated from field: api.v1.database.Database database = 2;
   */
  database?: Database;

  constructor(data?: PartialMessage<GetByNameResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.GetByNameResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "database", kind: "message", T: Database },
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
 * @generated from message api.v1.database.CreateCredentialRequest
 */
export class CreateCredentialRequest extends Message<CreateCredentialRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string database_id = 2;
   */
  databaseId = "";

  constructor(data?: PartialMessage<CreateCredentialRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.CreateCredentialRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "database_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCredentialRequest {
    return new CreateCredentialRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCredentialRequest {
    return new CreateCredentialRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCredentialRequest {
    return new CreateCredentialRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateCredentialRequest | PlainMessage<CreateCredentialRequest> | undefined, b: CreateCredentialRequest | PlainMessage<CreateCredentialRequest> | undefined): boolean {
    return proto3.util.equals(CreateCredentialRequest, a, b);
  }
}

/**
 * @generated from message api.v1.database.CreateCredentialResponse
 */
export class CreateCredentialResponse extends Message<CreateCredentialResponse> {
  /**
   * @generated from field: string client_id = 1;
   */
  clientId = "";

  /**
   * @generated from field: string client_secret = 2;
   */
  clientSecret = "";

  constructor(data?: PartialMessage<CreateCredentialResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.CreateCredentialResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCredentialResponse {
    return new CreateCredentialResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCredentialResponse {
    return new CreateCredentialResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCredentialResponse {
    return new CreateCredentialResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateCredentialResponse | PlainMessage<CreateCredentialResponse> | undefined, b: CreateCredentialResponse | PlainMessage<CreateCredentialResponse> | undefined): boolean {
    return proto3.util.equals(CreateCredentialResponse, a, b);
  }
}

/**
 * @generated from message api.v1.database.DeleteCredentialRequest
 */
export class DeleteCredentialRequest extends Message<DeleteCredentialRequest> {
  /**
   * @generated from field: string database_id = 1;
   */
  databaseId = "";

  /**
   * @generated from field: string credential_name = 2;
   */
  credentialName = "";

  constructor(data?: PartialMessage<DeleteCredentialRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.DeleteCredentialRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "database_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "credential_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCredentialRequest {
    return new DeleteCredentialRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCredentialRequest {
    return new DeleteCredentialRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCredentialRequest {
    return new DeleteCredentialRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteCredentialRequest | PlainMessage<DeleteCredentialRequest> | undefined, b: DeleteCredentialRequest | PlainMessage<DeleteCredentialRequest> | undefined): boolean {
    return proto3.util.equals(DeleteCredentialRequest, a, b);
  }
}

/**
 * @generated from message api.v1.database.DeleteCredentialResponse
 */
export class DeleteCredentialResponse extends Message<DeleteCredentialResponse> {
  constructor(data?: PartialMessage<DeleteCredentialResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.DeleteCredentialResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCredentialResponse {
    return new DeleteCredentialResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCredentialResponse {
    return new DeleteCredentialResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCredentialResponse {
    return new DeleteCredentialResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteCredentialResponse | PlainMessage<DeleteCredentialResponse> | undefined, b: DeleteCredentialResponse | PlainMessage<DeleteCredentialResponse> | undefined): boolean {
    return proto3.util.equals(DeleteCredentialResponse, a, b);
  }
}

/**
 * @generated from message api.v1.database.CreateRequest
 */
export class CreateRequest extends Message<CreateRequest> {
  /**
   * @generated from field: repeated api.v1.database.Update initializers = 1;
   */
  initializers: Update[] = [];

  /**
   * @generated from field: api.v1.database.Type type = 2;
   */
  type = Type.UNSPECIFIED;

  constructor(data?: PartialMessage<CreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.CreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "initializers", kind: "message", T: Update, repeated: true },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(Type) },
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
 * @generated from message api.v1.database.CreateResponse
 */
export class CreateResponse extends Message<CreateResponse> {
  /**
   * @generated from field: api.v1.database.Database database = 1;
   */
  database?: Database;

  /**
   * @generated from field: string client_id = 2;
   */
  clientId = "";

  /**
   * @generated from field: string client_secret = 3;
   */
  clientSecret = "";

  constructor(data?: PartialMessage<CreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.CreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "database", kind: "message", T: Database },
    { no: 2, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message api.v1.database.GetRequest
 */
export class GetRequest extends Message<GetRequest> {
  /**
   * @generated from field: string database_id = 1;
   */
  databaseId = "";

  constructor(data?: PartialMessage<GetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.GetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "database_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message api.v1.database.GetResponse
 */
export class GetResponse extends Message<GetResponse> {
  /**
   * @generated from field: api.v1.database.Database database = 1;
   */
  database?: Database;

  constructor(data?: PartialMessage<GetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.GetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "database", kind: "message", T: Database },
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
 * @generated from message api.v1.database.UpdateRequest
 */
export class UpdateRequest extends Message<UpdateRequest> {
  /**
   * @generated from field: string database_id = 1;
   */
  databaseId = "";

  /**
   * @generated from field: repeated api.v1.database.Update updates = 2;
   */
  updates: Update[] = [];

  constructor(data?: PartialMessage<UpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.UpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "database_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "updates", kind: "message", T: Update, repeated: true },
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
 * @generated from message api.v1.database.UpdateResponse
 */
export class UpdateResponse extends Message<UpdateResponse> {
  /**
   * @generated from field: api.v1.database.Database database = 1;
   */
  database?: Database;

  constructor(data?: PartialMessage<UpdateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.UpdateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "database", kind: "message", T: Database },
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
 * @generated from message api.v1.database.DeleteRequest
 */
export class DeleteRequest extends Message<DeleteRequest> {
  /**
   * @generated from field: string database_id = 1;
   */
  databaseId = "";

  constructor(data?: PartialMessage<DeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.DeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "database_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message api.v1.database.DeleteResponse
 */
export class DeleteResponse extends Message<DeleteResponse> {
  constructor(data?: PartialMessage<DeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.DeleteResponse";
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
 * @generated from message api.v1.database.ListRequest
 */
export class ListRequest extends Message<ListRequest> {
  /**
   * @generated from field: model.Pagination pagination = 1;
   */
  pagination?: Pagination;

  constructor(data?: PartialMessage<ListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.ListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: Pagination },
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
 * @generated from message api.v1.database.ListResponse
 */
export class ListResponse extends Message<ListResponse> {
  /**
   * @generated from field: repeated api.v1.database.Database databases = 1;
   */
  databases: Database[] = [];

  /**
   * @generated from field: uint64 total = 2;
   */
  total = protoInt64.zero;

  constructor(data?: PartialMessage<ListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.ListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "databases", kind: "message", T: Database, repeated: true },
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
 * @generated from message api.v1.database.GetEndpointRequest
 */
export class GetEndpointRequest extends Message<GetEndpointRequest> {
  /**
   * @generated from field: string database_id = 1;
   */
  databaseId = "";

  /**
   * @generated from field: string client_id = 2;
   */
  clientId = "";

  /**
   * @generated from field: string client_secret = 3;
   */
  clientSecret = "";

  constructor(data?: PartialMessage<GetEndpointRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.GetEndpointRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "database_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEndpointRequest {
    return new GetEndpointRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEndpointRequest {
    return new GetEndpointRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEndpointRequest {
    return new GetEndpointRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetEndpointRequest | PlainMessage<GetEndpointRequest> | undefined, b: GetEndpointRequest | PlainMessage<GetEndpointRequest> | undefined): boolean {
    return proto3.util.equals(GetEndpointRequest, a, b);
  }
}

/**
 * @generated from message api.v1.database.GetEndpointResponse
 */
export class GetEndpointResponse extends Message<GetEndpointResponse> {
  /**
   * @generated from field: string endpoint = 1;
   */
  endpoint = "";

  /**
   * @generated from field: string database_name = 2;
   */
  databaseName = "";

  constructor(data?: PartialMessage<GetEndpointResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.GetEndpointResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "endpoint", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "database_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEndpointResponse {
    return new GetEndpointResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEndpointResponse {
    return new GetEndpointResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEndpointResponse {
    return new GetEndpointResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetEndpointResponse | PlainMessage<GetEndpointResponse> | undefined, b: GetEndpointResponse | PlainMessage<GetEndpointResponse> | undefined): boolean {
    return proto3.util.equals(GetEndpointResponse, a, b);
  }
}

/**
 * @generated from message api.v1.database.CreateTableRequest
 */
export class CreateTableRequest extends Message<CreateTableRequest> {
  /**
   * @generated from field: string database_id = 1;
   */
  databaseId = "";

  /**
   * @generated from field: string table_name = 2;
   */
  tableName = "";

  constructor(data?: PartialMessage<CreateTableRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.CreateTableRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "database_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "table_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTableRequest {
    return new CreateTableRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTableRequest {
    return new CreateTableRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTableRequest {
    return new CreateTableRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateTableRequest | PlainMessage<CreateTableRequest> | undefined, b: CreateTableRequest | PlainMessage<CreateTableRequest> | undefined): boolean {
    return proto3.util.equals(CreateTableRequest, a, b);
  }
}

/**
 * @generated from message api.v1.database.CreateTableResponse
 */
export class CreateTableResponse extends Message<CreateTableResponse> {
  constructor(data?: PartialMessage<CreateTableResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.CreateTableResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTableResponse {
    return new CreateTableResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTableResponse {
    return new CreateTableResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTableResponse {
    return new CreateTableResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateTableResponse | PlainMessage<CreateTableResponse> | undefined, b: CreateTableResponse | PlainMessage<CreateTableResponse> | undefined): boolean {
    return proto3.util.equals(CreateTableResponse, a, b);
  }
}

/**
 * @generated from message api.v1.database.DeleteTableRequest
 */
export class DeleteTableRequest extends Message<DeleteTableRequest> {
  /**
   * @generated from field: string database_id = 1;
   */
  databaseId = "";

  /**
   * @generated from field: string table_name = 2;
   */
  tableName = "";

  constructor(data?: PartialMessage<DeleteTableRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.DeleteTableRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "database_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "table_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteTableRequest {
    return new DeleteTableRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteTableRequest {
    return new DeleteTableRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteTableRequest {
    return new DeleteTableRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteTableRequest | PlainMessage<DeleteTableRequest> | undefined, b: DeleteTableRequest | PlainMessage<DeleteTableRequest> | undefined): boolean {
    return proto3.util.equals(DeleteTableRequest, a, b);
  }
}

/**
 * @generated from message api.v1.database.DeleteTableResponse
 */
export class DeleteTableResponse extends Message<DeleteTableResponse> {
  constructor(data?: PartialMessage<DeleteTableResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.DeleteTableResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteTableResponse {
    return new DeleteTableResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteTableResponse {
    return new DeleteTableResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteTableResponse {
    return new DeleteTableResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteTableResponse | PlainMessage<DeleteTableResponse> | undefined, b: DeleteTableResponse | PlainMessage<DeleteTableResponse> | undefined): boolean {
    return proto3.util.equals(DeleteTableResponse, a, b);
  }
}

/**
 * @generated from message api.v1.database.ListTablesRequest
 */
export class ListTablesRequest extends Message<ListTablesRequest> {
  /**
   * @generated from field: model.Pagination pagination = 2;
   */
  pagination?: Pagination;

  /**
   * @generated from field: string database_id = 1;
   */
  databaseId = "";

  constructor(data?: PartialMessage<ListTablesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.ListTablesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "pagination", kind: "message", T: Pagination },
    { no: 1, name: "database_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTablesRequest {
    return new ListTablesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTablesRequest {
    return new ListTablesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTablesRequest {
    return new ListTablesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListTablesRequest | PlainMessage<ListTablesRequest> | undefined, b: ListTablesRequest | PlainMessage<ListTablesRequest> | undefined): boolean {
    return proto3.util.equals(ListTablesRequest, a, b);
  }
}

/**
 * @generated from message api.v1.database.ListTablesResponse
 */
export class ListTablesResponse extends Message<ListTablesResponse> {
  /**
   * @generated from field: repeated api.v1.database.Table tables = 1;
   */
  tables: Table[] = [];

  /**
   * @generated from field: uint64 total = 2;
   */
  total = protoInt64.zero;

  constructor(data?: PartialMessage<ListTablesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.database.ListTablesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tables", kind: "message", T: Table, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTablesResponse {
    return new ListTablesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTablesResponse {
    return new ListTablesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTablesResponse {
    return new ListTablesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListTablesResponse | PlainMessage<ListTablesResponse> | undefined, b: ListTablesResponse | PlainMessage<ListTablesResponse> | undefined): boolean {
    return proto3.util.equals(ListTablesResponse, a, b);
  }
}

