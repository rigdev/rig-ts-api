// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/project/service.proto (package api.v1.project, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Plan, Project, Update } from "./project_pb.js";
import { Pagination } from "../../../model/common_pb.js";
import { ObjectReference } from "../capsule/change_pb.js";
import { Metric } from "../capsule/service_pb.js";

/**
 * The request of a Namespace.Create RPC
 *
 * @generated from message api.v1.project.CreateRequest
 */
export class CreateRequest extends Message<CreateRequest> {
  /**
   * @generated from field: repeated api.v1.project.Update initializers = 1;
   */
  initializers: Update[] = [];

  /**
   * @generated from field: string project_id = 2;
   */
  projectId = "";

  constructor(data?: PartialMessage<CreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.CreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "initializers", kind: "message", T: Update, repeated: true },
    { no: 2, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * The response of a Namespace.Create RPC
 *
 * @generated from message api.v1.project.CreateResponse
 */
export class CreateResponse extends Message<CreateResponse> {
  /**
   * @generated from field: api.v1.project.Project project = 1;
   */
  project?: Project;

  constructor(data?: PartialMessage<CreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.CreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Project },
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
 * The request of a Namespace.Delete RPC
 *
 * @generated from message api.v1.project.DeleteRequest
 */
export class DeleteRequest extends Message<DeleteRequest> {
  /**
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  constructor(data?: PartialMessage<DeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.DeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * The response of a Namespace.Delete RPC
 *
 * @generated from message api.v1.project.DeleteResponse
 */
export class DeleteResponse extends Message<DeleteResponse> {
  constructor(data?: PartialMessage<DeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.DeleteResponse";
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
 * The request of a Namespace.Update RPC
 *
 * @generated from message api.v1.project.UpdateRequest
 */
export class UpdateRequest extends Message<UpdateRequest> {
  /**
   * @generated from field: repeated api.v1.project.Update updates = 1;
   */
  updates: Update[] = [];

  /**
   * @generated from field: string project_id = 2;
   */
  projectId = "";

  constructor(data?: PartialMessage<UpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.UpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "updates", kind: "message", T: Update, repeated: true },
    { no: 2, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * The response of a Namespace.Update RPC
 *
 * @generated from message api.v1.project.UpdateResponse
 */
export class UpdateResponse extends Message<UpdateResponse> {
  constructor(data?: PartialMessage<UpdateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.UpdateResponse";
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
 * The request of a Namespace.Get RPC
 *
 * @generated from message api.v1.project.GetRequest
 */
export class GetRequest extends Message<GetRequest> {
  /**
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  constructor(data?: PartialMessage<GetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.GetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * The response of a Namespace.Get RPC
 *
 * @generated from message api.v1.project.GetResponse
 */
export class GetResponse extends Message<GetResponse> {
  /**
   * @generated from field: api.v1.project.Project project = 1;
   */
  project?: Project;

  constructor(data?: PartialMessage<GetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.GetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Project },
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
 * The request of a Namespace.List RPC
 *
 * @generated from message api.v1.project.ListRequest
 */
export class ListRequest extends Message<ListRequest> {
  /**
   * @generated from field: model.Pagination pagination = 1;
   */
  pagination?: Pagination;

  /**
   * @generated from field: string project_id = 2;
   */
  projectId = "";

  constructor(data?: PartialMessage<ListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.ListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: Pagination },
    { no: 2, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message api.v1.project.ListResponse
 */
export class ListResponse extends Message<ListResponse> {
  /**
   * @generated from field: repeated api.v1.project.Project projects = 1;
   */
  projects: Project[] = [];

  /**
   * @generated from field: int64 total = 2;
   */
  total = protoInt64.zero;

  constructor(data?: PartialMessage<ListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.ListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "projects", kind: "message", T: Project, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
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
 * The request of a Namespace.PublicKey RPC
 *
 * @generated from message api.v1.project.PublicKeyRequest
 */
export class PublicKeyRequest extends Message<PublicKeyRequest> {
  /**
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  constructor(data?: PartialMessage<PublicKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.PublicKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublicKeyRequest {
    return new PublicKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublicKeyRequest {
    return new PublicKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublicKeyRequest {
    return new PublicKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PublicKeyRequest | PlainMessage<PublicKeyRequest> | undefined, b: PublicKeyRequest | PlainMessage<PublicKeyRequest> | undefined): boolean {
    return proto3.util.equals(PublicKeyRequest, a, b);
  }
}

/**
 * The response of a Namespace.PublicKey RPC
 *
 * @generated from message api.v1.project.PublicKeyResponse
 */
export class PublicKeyResponse extends Message<PublicKeyResponse> {
  /**
   * The id of the project
   *
   * @generated from field: string public_key = 1;
   */
  publicKey = "";

  constructor(data?: PartialMessage<PublicKeyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.PublicKeyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "public_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublicKeyResponse {
    return new PublicKeyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublicKeyResponse {
    return new PublicKeyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublicKeyResponse {
    return new PublicKeyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PublicKeyResponse | PlainMessage<PublicKeyResponse> | undefined, b: PublicKeyResponse | PlainMessage<PublicKeyResponse> | undefined): boolean {
    return proto3.util.equals(PublicKeyResponse, a, b);
  }
}

/**
 * @generated from message api.v1.project.GetLicenseInfoRequest
 */
export class GetLicenseInfoRequest extends Message<GetLicenseInfoRequest> {
  /**
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  constructor(data?: PartialMessage<GetLicenseInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.GetLicenseInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLicenseInfoRequest {
    return new GetLicenseInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLicenseInfoRequest {
    return new GetLicenseInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLicenseInfoRequest {
    return new GetLicenseInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetLicenseInfoRequest | PlainMessage<GetLicenseInfoRequest> | undefined, b: GetLicenseInfoRequest | PlainMessage<GetLicenseInfoRequest> | undefined): boolean {
    return proto3.util.equals(GetLicenseInfoRequest, a, b);
  }
}

/**
 * @generated from message api.v1.project.GetLicenseInfoResponse
 */
export class GetLicenseInfoResponse extends Message<GetLicenseInfoResponse> {
  /**
   * @generated from field: api.v1.project.Plan plan = 1;
   */
  plan = Plan.UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.Timestamp expires_at = 2;
   */
  expiresAt?: Timestamp;

  constructor(data?: PartialMessage<GetLicenseInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.GetLicenseInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "plan", kind: "enum", T: proto3.getEnumType(Plan) },
    { no: 2, name: "expires_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLicenseInfoResponse {
    return new GetLicenseInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLicenseInfoResponse {
    return new GetLicenseInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLicenseInfoResponse {
    return new GetLicenseInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetLicenseInfoResponse | PlainMessage<GetLicenseInfoResponse> | undefined, b: GetLicenseInfoResponse | PlainMessage<GetLicenseInfoResponse> | undefined): boolean {
    return proto3.util.equals(GetLicenseInfoResponse, a, b);
  }
}

/**
 * @generated from message api.v1.project.GetCustomObjectMetricsRequest
 */
export class GetCustomObjectMetricsRequest extends Message<GetCustomObjectMetricsRequest> {
  /**
   * @generated from field: api.v1.capsule.ObjectReference object_reference = 1;
   */
  objectReference?: ObjectReference;

  /**
   * @generated from field: string project_id = 2;
   */
  projectId = "";

  /**
   * @generated from field: string environment_id = 3;
   */
  environmentId = "";

  constructor(data?: PartialMessage<GetCustomObjectMetricsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.GetCustomObjectMetricsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "object_reference", kind: "message", T: ObjectReference },
    { no: 2, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCustomObjectMetricsRequest {
    return new GetCustomObjectMetricsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCustomObjectMetricsRequest {
    return new GetCustomObjectMetricsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCustomObjectMetricsRequest {
    return new GetCustomObjectMetricsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetCustomObjectMetricsRequest | PlainMessage<GetCustomObjectMetricsRequest> | undefined, b: GetCustomObjectMetricsRequest | PlainMessage<GetCustomObjectMetricsRequest> | undefined): boolean {
    return proto3.util.equals(GetCustomObjectMetricsRequest, a, b);
  }
}

/**
 * @generated from message api.v1.project.GetCustomObjectMetricsResponse
 */
export class GetCustomObjectMetricsResponse extends Message<GetCustomObjectMetricsResponse> {
  /**
   * @generated from field: repeated api.v1.capsule.Metric metrics = 1;
   */
  metrics: Metric[] = [];

  /**
   * @generated from field: string project_id = 2;
   */
  projectId = "";

  /**
   * @generated from field: string environment_id = 3;
   */
  environmentId = "";

  constructor(data?: PartialMessage<GetCustomObjectMetricsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.GetCustomObjectMetricsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metrics", kind: "message", T: Metric, repeated: true },
    { no: 2, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCustomObjectMetricsResponse {
    return new GetCustomObjectMetricsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCustomObjectMetricsResponse {
    return new GetCustomObjectMetricsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCustomObjectMetricsResponse {
    return new GetCustomObjectMetricsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetCustomObjectMetricsResponse | PlainMessage<GetCustomObjectMetricsResponse> | undefined, b: GetCustomObjectMetricsResponse | PlainMessage<GetCustomObjectMetricsResponse> | undefined): boolean {
    return proto3.util.equals(GetCustomObjectMetricsResponse, a, b);
  }
}

/**
 * @generated from message api.v1.project.KubernetesObject
 */
export class KubernetesObject extends Message<KubernetesObject> {
  /**
   * @generated from field: string kind = 1;
   */
  kind = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  constructor(data?: PartialMessage<KubernetesObject>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.KubernetesObject";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KubernetesObject {
    return new KubernetesObject().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KubernetesObject {
    return new KubernetesObject().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KubernetesObject {
    return new KubernetesObject().fromJsonString(jsonString, options);
  }

  static equals(a: KubernetesObject | PlainMessage<KubernetesObject> | undefined, b: KubernetesObject | PlainMessage<KubernetesObject> | undefined): boolean {
    return proto3.util.equals(KubernetesObject, a, b);
  }
}

/**
 * @generated from message api.v1.project.GetObjectsByKindRequest
 */
export class GetObjectsByKindRequest extends Message<GetObjectsByKindRequest> {
  /**
   * @generated from field: string kind = 1;
   */
  kind = "";

  /**
   * @generated from field: string api_version = 2;
   */
  apiVersion = "";

  /**
   * @generated from field: string project_id = 3;
   */
  projectId = "";

  /**
   * @generated from field: string environment_id = 4;
   */
  environmentId = "";

  constructor(data?: PartialMessage<GetObjectsByKindRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.GetObjectsByKindRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "api_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectsByKindRequest {
    return new GetObjectsByKindRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectsByKindRequest {
    return new GetObjectsByKindRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectsByKindRequest {
    return new GetObjectsByKindRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetObjectsByKindRequest | PlainMessage<GetObjectsByKindRequest> | undefined, b: GetObjectsByKindRequest | PlainMessage<GetObjectsByKindRequest> | undefined): boolean {
    return proto3.util.equals(GetObjectsByKindRequest, a, b);
  }
}

/**
 * @generated from message api.v1.project.GetObjectsByKindResponse
 */
export class GetObjectsByKindResponse extends Message<GetObjectsByKindResponse> {
  /**
   * @generated from field: repeated api.v1.project.KubernetesObject objects = 1;
   */
  objects: KubernetesObject[] = [];

  constructor(data?: PartialMessage<GetObjectsByKindResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.GetObjectsByKindResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "objects", kind: "message", T: KubernetesObject, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetObjectsByKindResponse {
    return new GetObjectsByKindResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetObjectsByKindResponse {
    return new GetObjectsByKindResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetObjectsByKindResponse {
    return new GetObjectsByKindResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetObjectsByKindResponse | PlainMessage<GetObjectsByKindResponse> | undefined, b: GetObjectsByKindResponse | PlainMessage<GetObjectsByKindResponse> | undefined): boolean {
    return proto3.util.equals(GetObjectsByKindResponse, a, b);
  }
}

