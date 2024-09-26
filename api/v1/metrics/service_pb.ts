// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/metrics/service.proto (package api.v1.metrics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Metric } from "./metrics_pb.js";

/**
 * @generated from enum api.v1.metrics.Aggregator
 */
export enum Aggregator {
  /**
   * @generated from enum value: AGGREGATOR_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: AGGREGATOR_AVG = 1;
   */
  AVG = 1,

  /**
   * @generated from enum value: AGGREGATOR_MIN = 2;
   */
  MIN = 2,

  /**
   * @generated from enum value: AGGREGATOR_MAX = 3;
   */
  MAX = 3,

  /**
   * @generated from enum value: AGGREGATOR_SUM = 4;
   */
  SUM = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(Aggregator)
proto3.util.setEnumType(Aggregator, "api.v1.metrics.Aggregator", [
  { no: 0, name: "AGGREGATOR_UNSPECIFIED" },
  { no: 1, name: "AGGREGATOR_AVG" },
  { no: 2, name: "AGGREGATOR_MIN" },
  { no: 3, name: "AGGREGATOR_MAX" },
  { no: 4, name: "AGGREGATOR_SUM" },
]);

/**
 * @generated from message api.v1.metrics.GetMetricsRequest
 */
export class GetMetricsRequest extends Message<GetMetricsRequest> {
  /**
   * @generated from field: string metric_type = 1;
   */
  metricType = "";

  /**
   * @generated from field: string project = 2;
   */
  project = "";

  /**
   * @generated from field: string environment = 3;
   */
  environment = "";

  /**
   * @generated from field: string capsule = 4;
   */
  capsule = "";

  /**
   * @generated from field: google.protobuf.Timestamp from = 5;
   */
  from?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp to = 6;
   */
  to?: Timestamp;

  /**
   * @generated from field: api.v1.metrics.Aggregation aggregation = 7;
   */
  aggregation?: Aggregation;

  constructor(data?: PartialMessage<GetMetricsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.metrics.GetMetricsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metric_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "environment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "capsule", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "from", kind: "message", T: Timestamp },
    { no: 6, name: "to", kind: "message", T: Timestamp },
    { no: 7, name: "aggregation", kind: "message", T: Aggregation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMetricsRequest {
    return new GetMetricsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMetricsRequest {
    return new GetMetricsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMetricsRequest {
    return new GetMetricsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMetricsRequest | PlainMessage<GetMetricsRequest> | undefined, b: GetMetricsRequest | PlainMessage<GetMetricsRequest> | undefined): boolean {
    return proto3.util.equals(GetMetricsRequest, a, b);
  }
}

/**
 * @generated from message api.v1.metrics.GetMetricsResponse
 */
export class GetMetricsResponse extends Message<GetMetricsResponse> {
  /**
   * @generated from field: repeated api.v1.metrics.Metric metrics = 1;
   */
  metrics: Metric[] = [];

  constructor(data?: PartialMessage<GetMetricsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.metrics.GetMetricsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metrics", kind: "message", T: Metric, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMetricsResponse {
    return new GetMetricsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMetricsResponse {
    return new GetMetricsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMetricsResponse {
    return new GetMetricsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetMetricsResponse | PlainMessage<GetMetricsResponse> | undefined, b: GetMetricsResponse | PlainMessage<GetMetricsResponse> | undefined): boolean {
    return proto3.util.equals(GetMetricsResponse, a, b);
  }
}

/**
 * @generated from message api.v1.metrics.Aggregation
 */
export class Aggregation extends Message<Aggregation> {
  /**
   * @generated from field: api.v1.metrics.Aggregator aggregator = 1;
   */
  aggregator = Aggregator.UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.Duration bucket_size = 2;
   */
  bucketSize?: Duration;

  constructor(data?: PartialMessage<Aggregation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.metrics.Aggregation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "aggregator", kind: "enum", T: proto3.getEnumType(Aggregator) },
    { no: 2, name: "bucket_size", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Aggregation {
    return new Aggregation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Aggregation {
    return new Aggregation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Aggregation {
    return new Aggregation().fromJsonString(jsonString, options);
  }

  static equals(a: Aggregation | PlainMessage<Aggregation> | undefined, b: Aggregation | PlainMessage<Aggregation> | undefined): boolean {
    return proto3.util.equals(Aggregation, a, b);
  }
}

