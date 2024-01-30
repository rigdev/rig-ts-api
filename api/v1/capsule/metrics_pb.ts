// @generated by protoc-gen-es v1.7.1 with parameter "target=ts"
// @generated from file api/v1/capsule/metrics.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * Metrics for a container.
 *
 * @generated from message api.v1.capsule.ContainerMetrics
 */
export class ContainerMetrics extends Message<ContainerMetrics> {
  /**
   * Timestamp of the metrics.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * Memory usage in bytes.
   *
   * @generated from field: uint64 memory_bytes = 2;
   */
  memoryBytes = protoInt64.zero;

  /**
   * CPU usage in milliseconds.
   *
   * @generated from field: uint64 cpu_ms = 3;
   */
  cpuMs = protoInt64.zero;

  /**
   * Storage usage in bytes.
   *
   * @generated from field: uint64 storage_bytes = 4;
   */
  storageBytes = protoInt64.zero;

  constructor(data?: PartialMessage<ContainerMetrics>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.ContainerMetrics";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "memory_bytes", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "cpu_ms", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "storage_bytes", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContainerMetrics {
    return new ContainerMetrics().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContainerMetrics {
    return new ContainerMetrics().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContainerMetrics {
    return new ContainerMetrics().fromJsonString(jsonString, options);
  }

  static equals(a: ContainerMetrics | PlainMessage<ContainerMetrics> | undefined, b: ContainerMetrics | PlainMessage<ContainerMetrics> | undefined): boolean {
    return proto3.util.equals(ContainerMetrics, a, b);
  }
}

/**
 * Metrics for an instance
 *
 * @generated from message api.v1.capsule.InstanceMetrics
 */
export class InstanceMetrics extends Message<InstanceMetrics> {
  /**
   * Capsule of the instance.
   *
   * @generated from field: string capsule_id = 1;
   */
  capsuleId = "";

  /**
   * Instance ID.
   *
   * @generated from field: string instance_id = 2;
   */
  instanceId = "";

  /**
   * Main container metrics.
   *
   * @generated from field: api.v1.capsule.ContainerMetrics main_container = 3;
   */
  mainContainer?: ContainerMetrics;

  /**
   * Proxy container metrics.
   *
   * @generated from field: api.v1.capsule.ContainerMetrics proxy_container = 4;
   */
  proxyContainer?: ContainerMetrics;

  constructor(data?: PartialMessage<InstanceMetrics>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.InstanceMetrics";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "main_container", kind: "message", T: ContainerMetrics },
    { no: 4, name: "proxy_container", kind: "message", T: ContainerMetrics },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstanceMetrics {
    return new InstanceMetrics().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstanceMetrics {
    return new InstanceMetrics().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstanceMetrics {
    return new InstanceMetrics().fromJsonString(jsonString, options);
  }

  static equals(a: InstanceMetrics | PlainMessage<InstanceMetrics> | undefined, b: InstanceMetrics | PlainMessage<InstanceMetrics> | undefined): boolean {
    return proto3.util.equals(InstanceMetrics, a, b);
  }
}

