// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file api/v1/environment/service.proto (package api.v1.environment, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Environment, Update } from "./environment_pb.js";
import { Pagination } from "../../../model/common_pb.js";

/**
 * @generated from message api.v1.environment.CreateRequest
 */
export class CreateRequest extends Message<CreateRequest> {
  /**
   * @generated from field: string environment_id = 1;
   */
  environmentId = "";

  /**
   * @generated from field: repeated api.v1.environment.Update initializers = 2;
   */
  initializers: Update[] = [];

  /**
   * @generated from field: string cluster_id = 3;
   */
  clusterId = "";

  /**
   * Namespace template is used to generate the namespace name when configuring
   * resources. Default is to set the namespace equal to the project name.
   * Default value is: {{ .Project.Name }}
   * Valid template properties are:
   *  .Project.Name - name of the project
   *  .Environment.Name - name of the environment.
   *
   * @generated from field: string namespace_template = 4;
   */
  namespaceTemplate = "";

  constructor(data?: PartialMessage<CreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.CreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "initializers", kind: "message", T: Update, repeated: true },
    { no: 3, name: "cluster_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "namespace_template", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message api.v1.environment.CreateResponse
 */
export class CreateResponse extends Message<CreateResponse> {
  constructor(data?: PartialMessage<CreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.CreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
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
 * @generated from message api.v1.environment.UpdateRequest
 */
export class UpdateRequest extends Message<UpdateRequest> {
  /**
   * @generated from field: string environment_id = 1;
   */
  environmentId = "";

  /**
   * @generated from field: repeated api.v1.environment.Update updates = 2;
   */
  updates: Update[] = [];

  constructor(data?: PartialMessage<UpdateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.UpdateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message api.v1.environment.UpdateResponse
 */
export class UpdateResponse extends Message<UpdateResponse> {
  constructor(data?: PartialMessage<UpdateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.UpdateResponse";
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
 * @generated from message api.v1.environment.DeleteRequest
 */
export class DeleteRequest extends Message<DeleteRequest> {
  /**
   * @generated from field: string environment_id = 1;
   */
  environmentId = "";

  /**
   * Force delete all running capsules in the enviornment. If false,
   * the request will be aborted if any capsules is running in the
   * environment.
   *
   * @generated from field: bool force = 2;
   */
  force = false;

  constructor(data?: PartialMessage<DeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.DeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "force", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
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
 * @generated from message api.v1.environment.DeleteResponse
 */
export class DeleteResponse extends Message<DeleteResponse> {
  constructor(data?: PartialMessage<DeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.DeleteResponse";
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
 * Request for listing available environments.
 *
 * @generated from message api.v1.environment.ListRequest
 */
export class ListRequest extends Message<ListRequest> {
  /**
   * Pagination options.
   *
   * @generated from field: model.Pagination pagination = 2;
   */
  pagination?: Pagination;

  constructor(data?: PartialMessage<ListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.ListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "pagination", kind: "message", T: Pagination },
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
 * Response for listing available environments.
 *
 * @generated from message api.v1.environment.ListResponse
 */
export class ListResponse extends Message<ListResponse> {
  /**
   * List of environments.
   *
   * @generated from field: repeated api.v1.environment.Environment environments = 1;
   */
  environments: Environment[] = [];

  /**
   * The version of the Rig-platform.
   *
   * @generated from field: string platform_version = 2;
   */
  platformVersion = "";

  constructor(data?: PartialMessage<ListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.ListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "environments", kind: "message", T: Environment, repeated: true },
    { no: 2, name: "platform_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message api.v1.environment.ProjectEnvironment
 */
export class ProjectEnvironment extends Message<ProjectEnvironment> {
  /**
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * @generated from field: string environment_id = 2;
   */
  environmentId = "";

  constructor(data?: PartialMessage<ProjectEnvironment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.ProjectEnvironment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectEnvironment {
    return new ProjectEnvironment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectEnvironment {
    return new ProjectEnvironment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectEnvironment {
    return new ProjectEnvironment().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectEnvironment | PlainMessage<ProjectEnvironment> | undefined, b: ProjectEnvironment | PlainMessage<ProjectEnvironment> | undefined): boolean {
    return proto3.util.equals(ProjectEnvironment, a, b);
  }
}

/**
 * @generated from message api.v1.environment.ProjectEnvironmentNamespace
 */
export class ProjectEnvironmentNamespace extends Message<ProjectEnvironmentNamespace> {
  /**
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * @generated from field: string environment_id = 2;
   */
  environmentId = "";

  /**
   * @generated from field: string namespace = 3;
   */
  namespace = "";

  constructor(data?: PartialMessage<ProjectEnvironmentNamespace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.ProjectEnvironmentNamespace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectEnvironmentNamespace {
    return new ProjectEnvironmentNamespace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectEnvironmentNamespace {
    return new ProjectEnvironmentNamespace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectEnvironmentNamespace {
    return new ProjectEnvironmentNamespace().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectEnvironmentNamespace | PlainMessage<ProjectEnvironmentNamespace> | undefined, b: ProjectEnvironmentNamespace | PlainMessage<ProjectEnvironmentNamespace> | undefined): boolean {
    return proto3.util.equals(ProjectEnvironmentNamespace, a, b);
  }
}

/**
 * @generated from message api.v1.environment.GetNamespacesRequest
 */
export class GetNamespacesRequest extends Message<GetNamespacesRequest> {
  /**
   * @generated from field: repeated api.v1.environment.ProjectEnvironment project_envs = 1;
   */
  projectEnvs: ProjectEnvironment[] = [];

  constructor(data?: PartialMessage<GetNamespacesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.GetNamespacesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_envs", kind: "message", T: ProjectEnvironment, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNamespacesRequest {
    return new GetNamespacesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNamespacesRequest {
    return new GetNamespacesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNamespacesRequest {
    return new GetNamespacesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetNamespacesRequest | PlainMessage<GetNamespacesRequest> | undefined, b: GetNamespacesRequest | PlainMessage<GetNamespacesRequest> | undefined): boolean {
    return proto3.util.equals(GetNamespacesRequest, a, b);
  }
}

/**
 * @generated from message api.v1.environment.GetNamespacesResponse
 */
export class GetNamespacesResponse extends Message<GetNamespacesResponse> {
  /**
   * @generated from field: repeated api.v1.environment.ProjectEnvironmentNamespace namespaces = 2;
   */
  namespaces: ProjectEnvironmentNamespace[] = [];

  constructor(data?: PartialMessage<GetNamespacesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.GetNamespacesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "namespaces", kind: "message", T: ProjectEnvironmentNamespace, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNamespacesResponse {
    return new GetNamespacesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNamespacesResponse {
    return new GetNamespacesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNamespacesResponse {
    return new GetNamespacesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetNamespacesResponse | PlainMessage<GetNamespacesResponse> | undefined, b: GetNamespacesResponse | PlainMessage<GetNamespacesResponse> | undefined): boolean {
    return proto3.util.equals(GetNamespacesResponse, a, b);
  }
}

