// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/cluster/cluster.proto (package api.v1.cluster, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Cluster model.
 *
 * @generated from message api.v1.cluster.Cluster
 */
export class Cluster extends Message<Cluster> {
  /**
   * ID of the cluster.
   *
   * @generated from field: string cluster_id = 1;
   */
  clusterId = "";

  constructor(data?: PartialMessage<Cluster>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.cluster.Cluster";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cluster_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Cluster {
    return new Cluster().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Cluster {
    return new Cluster().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Cluster {
    return new Cluster().fromJsonString(jsonString, options);
  }

  static equals(a: Cluster | PlainMessage<Cluster> | undefined, b: Cluster | PlainMessage<Cluster> | undefined): boolean {
    return proto3.util.equals(Cluster, a, b);
  }
}

