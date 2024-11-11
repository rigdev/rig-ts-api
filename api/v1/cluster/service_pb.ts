// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/cluster/service.proto (package api.v1.cluster, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Pagination } from "../../../model/common_pb.js";
import { Cluster } from "./cluster_pb.js";
import { Node } from "../../../operator/api/v1/cluster/service_pb.js";

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

/**
 * Request for listing available clusters.
 *
 * @generated from message api.v1.cluster.ListRequest
 */
export class ListRequest extends Message<ListRequest> {
  /**
   * Pagination options.
   *
   * @generated from field: model.Pagination pagination = 1;
   */
  pagination?: Pagination;

  constructor(data?: PartialMessage<ListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.ListRequest";
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
 * Response for listing available clusters.
 *
 * @generated from message api.v1.cluster.ListResponse
 */
export class ListResponse extends Message<ListResponse> {
  /**
   * List of clusters.
   *
   * @generated from field: repeated api.v1.cluster.Cluster clusters = 1;
   */
  clusters: Cluster[] = [];

  constructor(data?: PartialMessage<ListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.ListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "clusters", kind: "message", T: Cluster, repeated: true },
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
 * @generated from message api.v1.cluster.ListNodesRequest
 */
export class ListNodesRequest extends Message<ListNodesRequest> {
  /**
   * @generated from field: string cluster_id = 1;
   */
  clusterId = "";

  constructor(data?: PartialMessage<ListNodesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.ListNodesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cluster_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListNodesRequest {
    return new ListNodesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListNodesRequest {
    return new ListNodesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListNodesRequest {
    return new ListNodesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListNodesRequest | PlainMessage<ListNodesRequest> | undefined, b: ListNodesRequest | PlainMessage<ListNodesRequest> | undefined): boolean {
    return proto3.util.equals(ListNodesRequest, a, b);
  }
}

/**
 * @generated from message api.v1.cluster.ListNodesResponse
 */
export class ListNodesResponse extends Message<ListNodesResponse> {
  /**
   * @generated from field: repeated api.v1.operator.cluster.Node nodes = 1;
   */
  nodes: Node[] = [];

  constructor(data?: PartialMessage<ListNodesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.ListNodesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "nodes", kind: "message", T: Node, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListNodesResponse {
    return new ListNodesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListNodesResponse {
    return new ListNodesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListNodesResponse {
    return new ListNodesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListNodesResponse | PlainMessage<ListNodesResponse> | undefined, b: ListNodesResponse | PlainMessage<ListNodesResponse> | undefined): boolean {
    return proto3.util.equals(ListNodesResponse, a, b);
  }
}

/**
 * @generated from message api.v1.cluster.ListNodePodsRequest
 */
export class ListNodePodsRequest extends Message<ListNodePodsRequest> {
  /**
   * @generated from field: string cluster_name = 1;
   */
  clusterName = "";

  /**
   * @generated from field: string node_name = 2;
   */
  nodeName = "";

  constructor(data?: PartialMessage<ListNodePodsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.ListNodePodsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cluster_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "node_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListNodePodsRequest {
    return new ListNodePodsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListNodePodsRequest {
    return new ListNodePodsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListNodePodsRequest {
    return new ListNodePodsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListNodePodsRequest | PlainMessage<ListNodePodsRequest> | undefined, b: ListNodePodsRequest | PlainMessage<ListNodePodsRequest> | undefined): boolean {
    return proto3.util.equals(ListNodePodsRequest, a, b);
  }
}

/**
 * @generated from message api.v1.cluster.ListNodePodsResponse
 */
export class ListNodePodsResponse extends Message<ListNodePodsResponse> {
  /**
   * @generated from field: repeated api.v1.cluster.Pod pods = 1;
   */
  pods: Pod[] = [];

  constructor(data?: PartialMessage<ListNodePodsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.ListNodePodsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pods", kind: "message", T: Pod, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListNodePodsResponse {
    return new ListNodePodsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListNodePodsResponse {
    return new ListNodePodsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListNodePodsResponse {
    return new ListNodePodsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListNodePodsResponse | PlainMessage<ListNodePodsResponse> | undefined, b: ListNodePodsResponse | PlainMessage<ListNodePodsResponse> | undefined): boolean {
    return proto3.util.equals(ListNodePodsResponse, a, b);
  }
}

/**
 * @generated from message api.v1.cluster.Pod
 */
export class Pod extends Message<Pod> {
  /**
   * @generated from field: string pod_name = 1;
   */
  podName = "";

  /**
   * @generated from field: string namespace = 2;
   */
  namespace = "";

  /**
   * @generated from field: string project_name = 3;
   */
  projectName = "";

  /**
   * @generated from field: string environment_name = 4;
   */
  environmentName = "";

  /**
   * @generated from field: string capsule_name = 5;
   */
  capsuleName = "";

  constructor(data?: PartialMessage<Pod>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.Pod";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pod_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "environment_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "capsule_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pod {
    return new Pod().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pod {
    return new Pod().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pod {
    return new Pod().fromJsonString(jsonString, options);
  }

  static equals(a: Pod | PlainMessage<Pod> | undefined, b: Pod | PlainMessage<Pod> | undefined): boolean {
    return proto3.util.equals(Pod, a, b);
  }
}

