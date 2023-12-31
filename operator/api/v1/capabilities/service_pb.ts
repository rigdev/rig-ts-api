// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file operator/api/v1/capabilities/service.proto (package api.v1.capabilities, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

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

