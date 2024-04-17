// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file operator/api/v1/plugin/service.proto (package api.v1.plugin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.v1.plugin.InitializeRequest
 */
export class InitializeRequest extends Message<InitializeRequest> {
  /**
   * @generated from field: string plugin_config = 1;
   */
  pluginConfig = "";

  /**
   * @generated from field: bytes operator_config = 2;
   */
  operatorConfig = new Uint8Array(0);

  /**
   * @generated from field: string tag = 3;
   */
  tag = "";

  constructor(data?: PartialMessage<InitializeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.InitializeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "plugin_config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "operator_config", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InitializeRequest {
    return new InitializeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InitializeRequest {
    return new InitializeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InitializeRequest {
    return new InitializeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: InitializeRequest | PlainMessage<InitializeRequest> | undefined, b: InitializeRequest | PlainMessage<InitializeRequest> | undefined): boolean {
    return proto3.util.equals(InitializeRequest, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.InitializeResponse
 */
export class InitializeResponse extends Message<InitializeResponse> {
  constructor(data?: PartialMessage<InitializeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.InitializeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InitializeResponse {
    return new InitializeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InitializeResponse {
    return new InitializeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InitializeResponse {
    return new InitializeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: InitializeResponse | PlainMessage<InitializeResponse> | undefined, b: InitializeResponse | PlainMessage<InitializeResponse> | undefined): boolean {
    return proto3.util.equals(InitializeResponse, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.RunCapsuleRequest
 */
export class RunCapsuleRequest extends Message<RunCapsuleRequest> {
  /**
   * @generated from field: uint32 run_server = 1;
   */
  runServer = 0;

  /**
   * @generated from field: bytes capsule_object = 2;
   */
  capsuleObject = new Uint8Array(0);

  constructor(data?: PartialMessage<RunCapsuleRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.RunCapsuleRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "run_server", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "capsule_object", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunCapsuleRequest {
    return new RunCapsuleRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunCapsuleRequest {
    return new RunCapsuleRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunCapsuleRequest {
    return new RunCapsuleRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RunCapsuleRequest | PlainMessage<RunCapsuleRequest> | undefined, b: RunCapsuleRequest | PlainMessage<RunCapsuleRequest> | undefined): boolean {
    return proto3.util.equals(RunCapsuleRequest, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.RunCapsuleResponse
 */
export class RunCapsuleResponse extends Message<RunCapsuleResponse> {
  constructor(data?: PartialMessage<RunCapsuleResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.RunCapsuleResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunCapsuleResponse {
    return new RunCapsuleResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunCapsuleResponse {
    return new RunCapsuleResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunCapsuleResponse {
    return new RunCapsuleResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RunCapsuleResponse | PlainMessage<RunCapsuleResponse> | undefined, b: RunCapsuleResponse | PlainMessage<RunCapsuleResponse> | undefined): boolean {
    return proto3.util.equals(RunCapsuleResponse, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.GetObjectRequest
 */
export class GetObjectRequest extends Message<GetObjectRequest> {
  /**
   * @generated from field: api.v1.plugin.GVK gvk = 1;
   */
  gvk?: GVK;

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: bool current = 3;
   */
  current = false;

  constructor(data?: PartialMessage<GetObjectRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.GetObjectRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "gvk", kind: "message", T: GVK },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "current", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectRequest {
    return new GetObjectRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectRequest {
    return new GetObjectRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectRequest {
    return new GetObjectRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetObjectRequest | PlainMessage<GetObjectRequest> | undefined, b: GetObjectRequest | PlainMessage<GetObjectRequest> | undefined): boolean {
    return proto3.util.equals(GetObjectRequest, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.GetObjectResponse
 */
export class GetObjectResponse extends Message<GetObjectResponse> {
  /**
   * @generated from field: bytes object = 3;
   */
  object = new Uint8Array(0);

  constructor(data?: PartialMessage<GetObjectResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.GetObjectResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "object", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectResponse {
    return new GetObjectResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectResponse {
    return new GetObjectResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectResponse {
    return new GetObjectResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetObjectResponse | PlainMessage<GetObjectResponse> | undefined, b: GetObjectResponse | PlainMessage<GetObjectResponse> | undefined): boolean {
    return proto3.util.equals(GetObjectResponse, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.SetObjectRequest
 */
export class SetObjectRequest extends Message<SetObjectRequest> {
  /**
   * @generated from field: api.v1.plugin.GVK gvk = 1;
   */
  gvk?: GVK;

  /**
   * @generated from field: bytes object = 3;
   */
  object = new Uint8Array(0);

  constructor(data?: PartialMessage<SetObjectRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.SetObjectRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "gvk", kind: "message", T: GVK },
    { no: 3, name: "object", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetObjectRequest {
    return new SetObjectRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetObjectRequest {
    return new SetObjectRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetObjectRequest {
    return new SetObjectRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SetObjectRequest | PlainMessage<SetObjectRequest> | undefined, b: SetObjectRequest | PlainMessage<SetObjectRequest> | undefined): boolean {
    return proto3.util.equals(SetObjectRequest, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.SetObjectResponse
 */
export class SetObjectResponse extends Message<SetObjectResponse> {
  constructor(data?: PartialMessage<SetObjectResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.SetObjectResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetObjectResponse {
    return new SetObjectResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetObjectResponse {
    return new SetObjectResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetObjectResponse {
    return new SetObjectResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SetObjectResponse | PlainMessage<SetObjectResponse> | undefined, b: SetObjectResponse | PlainMessage<SetObjectResponse> | undefined): boolean {
    return proto3.util.equals(SetObjectResponse, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.GVK
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
  static readonly typeName = "api.v1.plugin.GVK";
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
 * @generated from message api.v1.plugin.DeleteObjectRequest
 */
export class DeleteObjectRequest extends Message<DeleteObjectRequest> {
  /**
   * @generated from field: api.v1.plugin.GVK gvk = 1;
   */
  gvk?: GVK;

  /**
   * @generated from field: bytes object = 2;
   */
  object = new Uint8Array(0);

  constructor(data?: PartialMessage<DeleteObjectRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.DeleteObjectRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "gvk", kind: "message", T: GVK },
    { no: 2, name: "object", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteObjectRequest {
    return new DeleteObjectRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteObjectRequest {
    return new DeleteObjectRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteObjectRequest {
    return new DeleteObjectRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteObjectRequest | PlainMessage<DeleteObjectRequest> | undefined, b: DeleteObjectRequest | PlainMessage<DeleteObjectRequest> | undefined): boolean {
    return proto3.util.equals(DeleteObjectRequest, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.DeleteObjectResponse
 */
export class DeleteObjectResponse extends Message<DeleteObjectResponse> {
  constructor(data?: PartialMessage<DeleteObjectResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.DeleteObjectResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteObjectResponse {
    return new DeleteObjectResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteObjectResponse {
    return new DeleteObjectResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteObjectResponse {
    return new DeleteObjectResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteObjectResponse | PlainMessage<DeleteObjectResponse> | undefined, b: DeleteObjectResponse | PlainMessage<DeleteObjectResponse> | undefined): boolean {
    return proto3.util.equals(DeleteObjectResponse, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.MarkUsedObjectRequest
 */
export class MarkUsedObjectRequest extends Message<MarkUsedObjectRequest> {
  /**
   * @generated from field: api.v1.plugin.GVK gvk = 1;
   */
  gvk?: GVK;

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string state = 3;
   */
  state = "";

  /**
   * @generated from field: string message = 4;
   */
  message = "";

  constructor(data?: PartialMessage<MarkUsedObjectRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.MarkUsedObjectRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "gvk", kind: "message", T: GVK },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarkUsedObjectRequest {
    return new MarkUsedObjectRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarkUsedObjectRequest {
    return new MarkUsedObjectRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarkUsedObjectRequest {
    return new MarkUsedObjectRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MarkUsedObjectRequest | PlainMessage<MarkUsedObjectRequest> | undefined, b: MarkUsedObjectRequest | PlainMessage<MarkUsedObjectRequest> | undefined): boolean {
    return proto3.util.equals(MarkUsedObjectRequest, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.MarkUsedObjectResponse
 */
export class MarkUsedObjectResponse extends Message<MarkUsedObjectResponse> {
  constructor(data?: PartialMessage<MarkUsedObjectResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.MarkUsedObjectResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarkUsedObjectResponse {
    return new MarkUsedObjectResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarkUsedObjectResponse {
    return new MarkUsedObjectResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarkUsedObjectResponse {
    return new MarkUsedObjectResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MarkUsedObjectResponse | PlainMessage<MarkUsedObjectResponse> | undefined, b: MarkUsedObjectResponse | PlainMessage<MarkUsedObjectResponse> | undefined): boolean {
    return proto3.util.equals(MarkUsedObjectResponse, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.ListObjectsRequest
 */
export class ListObjectsRequest extends Message<ListObjectsRequest> {
  /**
   * @generated from field: api.v1.plugin.GVK gvk = 1;
   */
  gvk?: GVK;

  /**
   * @generated from field: bool current = 2;
   */
  current = false;

  constructor(data?: PartialMessage<ListObjectsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.ListObjectsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "gvk", kind: "message", T: GVK },
    { no: 2, name: "current", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListObjectsRequest {
    return new ListObjectsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListObjectsRequest {
    return new ListObjectsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListObjectsRequest {
    return new ListObjectsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListObjectsRequest | PlainMessage<ListObjectsRequest> | undefined, b: ListObjectsRequest | PlainMessage<ListObjectsRequest> | undefined): boolean {
    return proto3.util.equals(ListObjectsRequest, a, b);
  }
}

/**
 * @generated from message api.v1.plugin.ListObjectsResponse
 */
export class ListObjectsResponse extends Message<ListObjectsResponse> {
  /**
   * @generated from field: repeated bytes objects = 1;
   */
  objects: Uint8Array[] = [];

  constructor(data?: PartialMessage<ListObjectsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.plugin.ListObjectsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "objects", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListObjectsResponse {
    return new ListObjectsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListObjectsResponse {
    return new ListObjectsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListObjectsResponse {
    return new ListObjectsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListObjectsResponse | PlainMessage<ListObjectsResponse> | undefined, b: ListObjectsResponse | PlainMessage<ListObjectsResponse> | undefined): boolean {
    return proto3.util.equals(ListObjectsResponse, a, b);
  }
}

