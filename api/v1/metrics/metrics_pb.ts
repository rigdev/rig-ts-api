// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/metrics/metrics.proto (package api.v1.metrics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message api.v1.metrics.Metric
 */
export class Metric extends Message<Metric> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: double value = 2;
   */
  value = 0;

  /**
   * Metadata is only populated when metrics are aggregated.
   *
   * @generated from field: api.v1.metrics.Metadata metadata = 4;
   */
  metadata?: Metadata;

  constructor(data?: PartialMessage<Metric>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.metrics.Metric";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "metadata", kind: "message", T: Metadata },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metric {
    return new Metric().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metric {
    return new Metric().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metric {
    return new Metric().fromJsonString(jsonString, options);
  }

  static equals(a: Metric | PlainMessage<Metric> | undefined, b: Metric | PlainMessage<Metric> | undefined): boolean {
    return proto3.util.equals(Metric, a, b);
  }
}

/**
 * @generated from message api.v1.metrics.Metadata
 */
export class Metadata extends Message<Metadata> {
  /**
   * @generated from field: string project = 1;
   */
  project = "";

  /**
   * @generated from field: string environment = 2;
   */
  environment = "";

  /**
   * @generated from field: string capsule = 3;
   */
  capsule = "";

  constructor(data?: PartialMessage<Metadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.metrics.Metadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "environment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "capsule", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata {
    return new Metadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJsonString(jsonString, options);
  }

  static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean {
    return proto3.util.equals(Metadata, a, b);
  }
}

