// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/cluster/service.proto (package api.v1.cluster, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Cluster type - Docker or kubernetes.
 *
 * @generated from enum api.v1.cluster.ClusterType
 */
export enum ClusterType {
  /**
   * @generated from enum value: CLUSTER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CLUSTER_TYPE_DOCKER = 1;
   */
  DOCKER = 1,

  /**
   * @generated from enum value: CLUSTER_TYPE_KUBERNETES = 2;
   */
  KUBERNETES = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ClusterType)
proto3.util.setEnumType(ClusterType, "api.v1.cluster.ClusterType", [
  { no: 0, name: "CLUSTER_TYPE_UNSPECIFIED" },
  { no: 1, name: "CLUSTER_TYPE_DOCKER" },
  { no: 2, name: "CLUSTER_TYPE_KUBERNETES" },
]);

/**
 * request for getting cluster config for an environment.
 *
 * @generated from message api.v1.cluster.GetConfigRequest
 */
export class GetConfigRequest extends Message<GetConfigRequest> {
  /**
   * The environment to get cluster config for.
   *
   * @generated from field: string environment_id = 1;
   */
  environmentId = "";

  constructor(data?: PartialMessage<GetConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.GetConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConfigRequest {
    return new GetConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConfigRequest {
    return new GetConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConfigRequest {
    return new GetConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetConfigRequest | PlainMessage<GetConfigRequest> | undefined, b: GetConfigRequest | PlainMessage<GetConfigRequest> | undefined): boolean {
    return proto3.util.equals(GetConfigRequest, a, b);
  }
}

/**
 * response for getting cluster config for an environment.
 *
 * @generated from message api.v1.cluster.GetConfigResponse
 */
export class GetConfigResponse extends Message<GetConfigResponse> {
  /**
   * Type of the cluster.
   *
   * @generated from field: api.v1.cluster.ClusterType cluster_type = 1;
   */
  clusterType = ClusterType.UNSPECIFIED;

  /**
   * dev registry of the cluster. This is either a Docker daemon or a registry.
   *
   * @generated from oneof api.v1.cluster.GetConfigResponse.dev_registry
   */
  devRegistry: {
    /**
     * Docker.
     *
     * @generated from field: api.v1.cluster.DockerDaemon docker = 2;
     */
    value: DockerDaemon;
    case: "docker";
  } | {
    /**
     * Registry.
     *
     * @generated from field: api.v1.cluster.Registry registry = 3;
     */
    value: Registry;
    case: "registry";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * if true, the cluster has an ingress controller.
   *
   * @generated from field: bool ingress = 4;
   */
  ingress = false;

  constructor(data?: PartialMessage<GetConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.GetConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cluster_type", kind: "enum", T: proto3.getEnumType(ClusterType) },
    { no: 2, name: "docker", kind: "message", T: DockerDaemon, oneof: "dev_registry" },
    { no: 3, name: "registry", kind: "message", T: Registry, oneof: "dev_registry" },
    { no: 4, name: "ingress", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConfigResponse {
    return new GetConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConfigResponse {
    return new GetConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConfigResponse {
    return new GetConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetConfigResponse | PlainMessage<GetConfigResponse> | undefined, b: GetConfigResponse | PlainMessage<GetConfigResponse> | undefined): boolean {
    return proto3.util.equals(GetConfigResponse, a, b);
  }
}

/**
 * Empty Request for getting the configs of all clusters.
 *
 * @generated from message api.v1.cluster.GetConfigsRequest
 */
export class GetConfigsRequest extends Message<GetConfigsRequest> {
  constructor(data?: PartialMessage<GetConfigsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.GetConfigsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConfigsRequest {
    return new GetConfigsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConfigsRequest {
    return new GetConfigsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConfigsRequest {
    return new GetConfigsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetConfigsRequest | PlainMessage<GetConfigsRequest> | undefined, b: GetConfigsRequest | PlainMessage<GetConfigsRequest> | undefined): boolean {
    return proto3.util.equals(GetConfigsRequest, a, b);
  }
}

/**
 * Empty Response for getting the configs of all clusters.
 *
 * @generated from message api.v1.cluster.GetConfigsResponse
 */
export class GetConfigsResponse extends Message<GetConfigsResponse> {
  /**
   * @generated from field: repeated api.v1.cluster.GetConfigResponse clusters = 1;
   */
  clusters: GetConfigResponse[] = [];

  constructor(data?: PartialMessage<GetConfigsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.GetConfigsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "clusters", kind: "message", T: GetConfigResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConfigsResponse {
    return new GetConfigsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConfigsResponse {
    return new GetConfigsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConfigsResponse {
    return new GetConfigsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetConfigsResponse | PlainMessage<GetConfigsResponse> | undefined, b: GetConfigsResponse | PlainMessage<GetConfigsResponse> | undefined): boolean {
    return proto3.util.equals(GetConfigsResponse, a, b);
  }
}

/**
 * Docker daemon dev registry
 *
 * @generated from message api.v1.cluster.DockerDaemon
 */
export class DockerDaemon extends Message<DockerDaemon> {
  constructor(data?: PartialMessage<DockerDaemon>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.DockerDaemon";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DockerDaemon {
    return new DockerDaemon().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DockerDaemon {
    return new DockerDaemon().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DockerDaemon {
    return new DockerDaemon().fromJsonString(jsonString, options);
  }

  static equals(a: DockerDaemon | PlainMessage<DockerDaemon> | undefined, b: DockerDaemon | PlainMessage<DockerDaemon> | undefined): boolean {
    return proto3.util.equals(DockerDaemon, a, b);
  }
}

/**
 * Registry dev registry
 *
 * @generated from message api.v1.cluster.Registry
 */
export class Registry extends Message<Registry> {
  /**
   * @generated from field: string host = 1;
   */
  host = "";

  constructor(data?: PartialMessage<Registry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.Registry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Registry {
    return new Registry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Registry {
    return new Registry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Registry {
    return new Registry().fromJsonString(jsonString, options);
  }

  static equals(a: Registry | PlainMessage<Registry> | undefined, b: Registry | PlainMessage<Registry> | undefined): boolean {
    return proto3.util.equals(Registry, a, b);
  }
}

