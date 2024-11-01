// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file operator/api/v1/capabilities/service.proto (package api.v1.capabilities, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { OperatorConfig } from "../../../../config/v1alpha1/generated_pb.js";

/**
 * @generated from message api.v1.capabilities.GetRequest
 */
export class GetRequest extends Message<GetRequest> {
  constructor(data?: PartialMessage<GetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capabilities.GetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
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
 * @generated from message api.v1.capabilities.GetResponse
 */
export class GetResponse extends Message<GetResponse> {
  /**
   * @generated from field: bool ingress = 1;
   */
  ingress = false;

  /**
   * @generated from field: bool has_prometheus_service_monitor = 2;
   */
  hasPrometheusServiceMonitor = false;

  /**
   * @generated from field: bool has_custom_metrics = 3;
   */
  hasCustomMetrics = false;

  /**
   * @generated from field: bool has_vertical_pod_autoscaler = 4;
   */
  hasVerticalPodAutoscaler = false;

  constructor(data?: PartialMessage<GetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capabilities.GetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ingress", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "has_prometheus_service_monitor", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "has_custom_metrics", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "has_vertical_pod_autoscaler", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
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
 * @generated from message api.v1.capabilities.GetConfigRequest
 */
export class GetConfigRequest extends Message<GetConfigRequest> {
  constructor(data?: PartialMessage<GetConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capabilities.GetConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
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
 * @generated from message api.v1.capabilities.GetConfigResponse
 */
export class GetConfigResponse extends Message<GetConfigResponse> {
  /**
   * @generated from field: string yaml = 1;
   */
  yaml = "";

  /**
   * @generated from field: config.v1alpha1.OperatorConfig operator_config = 2;
   */
  operatorConfig?: OperatorConfig;

  constructor(data?: PartialMessage<GetConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capabilities.GetConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "yaml", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "operator_config", kind: "message", T: OperatorConfig },
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
 * @generated from message api.v1.capabilities.GetPluginsRequest
 */
export class GetPluginsRequest extends Message<GetPluginsRequest> {
  constructor(data?: PartialMessage<GetPluginsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capabilities.GetPluginsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPluginsRequest {
    return new GetPluginsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPluginsRequest {
    return new GetPluginsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPluginsRequest {
    return new GetPluginsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetPluginsRequest | PlainMessage<GetPluginsRequest> | undefined, b: GetPluginsRequest | PlainMessage<GetPluginsRequest> | undefined): boolean {
    return proto3.util.equals(GetPluginsRequest, a, b);
  }
}

/**
 * @generated from message api.v1.capabilities.GetPluginsResponse
 */
export class GetPluginsResponse extends Message<GetPluginsResponse> {
  /**
   * @generated from field: repeated api.v1.capabilities.GetPluginsResponse.Plugin plugins = 1;
   */
  plugins: GetPluginsResponse_Plugin[] = [];

  constructor(data?: PartialMessage<GetPluginsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capabilities.GetPluginsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "plugins", kind: "message", T: GetPluginsResponse_Plugin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPluginsResponse {
    return new GetPluginsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPluginsResponse {
    return new GetPluginsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPluginsResponse {
    return new GetPluginsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetPluginsResponse | PlainMessage<GetPluginsResponse> | undefined, b: GetPluginsResponse | PlainMessage<GetPluginsResponse> | undefined): boolean {
    return proto3.util.equals(GetPluginsResponse, a, b);
  }
}

/**
 * @generated from message api.v1.capabilities.GetPluginsResponse.Builtin
 */
export class GetPluginsResponse_Builtin extends Message<GetPluginsResponse_Builtin> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetPluginsResponse_Builtin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capabilities.GetPluginsResponse.Builtin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPluginsResponse_Builtin {
    return new GetPluginsResponse_Builtin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPluginsResponse_Builtin {
    return new GetPluginsResponse_Builtin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPluginsResponse_Builtin {
    return new GetPluginsResponse_Builtin().fromJsonString(jsonString, options);
  }

  static equals(a: GetPluginsResponse_Builtin | PlainMessage<GetPluginsResponse_Builtin> | undefined, b: GetPluginsResponse_Builtin | PlainMessage<GetPluginsResponse_Builtin> | undefined): boolean {
    return proto3.util.equals(GetPluginsResponse_Builtin, a, b);
  }
}

/**
 * @generated from message api.v1.capabilities.GetPluginsResponse.Thirdparty
 */
export class GetPluginsResponse_Thirdparty extends Message<GetPluginsResponse_Thirdparty> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string image = 2;
   */
  image = "";

  constructor(data?: PartialMessage<GetPluginsResponse_Thirdparty>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capabilities.GetPluginsResponse.Thirdparty";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPluginsResponse_Thirdparty {
    return new GetPluginsResponse_Thirdparty().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPluginsResponse_Thirdparty {
    return new GetPluginsResponse_Thirdparty().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPluginsResponse_Thirdparty {
    return new GetPluginsResponse_Thirdparty().fromJsonString(jsonString, options);
  }

  static equals(a: GetPluginsResponse_Thirdparty | PlainMessage<GetPluginsResponse_Thirdparty> | undefined, b: GetPluginsResponse_Thirdparty | PlainMessage<GetPluginsResponse_Thirdparty> | undefined): boolean {
    return proto3.util.equals(GetPluginsResponse_Thirdparty, a, b);
  }
}

/**
 * @generated from message api.v1.capabilities.GetPluginsResponse.Plugin
 */
export class GetPluginsResponse_Plugin extends Message<GetPluginsResponse_Plugin> {
  /**
   * @generated from oneof api.v1.capabilities.GetPluginsResponse.Plugin.plugin
   */
  plugin: {
    /**
     * @generated from field: api.v1.capabilities.GetPluginsResponse.Builtin builtin = 1;
     */
    value: GetPluginsResponse_Builtin;
    case: "builtin";
  } | {
    /**
     * @generated from field: api.v1.capabilities.GetPluginsResponse.Thirdparty third_party = 2;
     */
    value: GetPluginsResponse_Thirdparty;
    case: "thirdParty";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<GetPluginsResponse_Plugin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capabilities.GetPluginsResponse.Plugin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "builtin", kind: "message", T: GetPluginsResponse_Builtin, oneof: "plugin" },
    { no: 2, name: "third_party", kind: "message", T: GetPluginsResponse_Thirdparty, oneof: "plugin" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPluginsResponse_Plugin {
    return new GetPluginsResponse_Plugin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPluginsResponse_Plugin {
    return new GetPluginsResponse_Plugin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPluginsResponse_Plugin {
    return new GetPluginsResponse_Plugin().fromJsonString(jsonString, options);
  }

  static equals(a: GetPluginsResponse_Plugin | PlainMessage<GetPluginsResponse_Plugin> | undefined, b: GetPluginsResponse_Plugin | PlainMessage<GetPluginsResponse_Plugin> | undefined): boolean {
    return proto3.util.equals(GetPluginsResponse_Plugin, a, b);
  }
}

