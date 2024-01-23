// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/capsule/sidecar.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Deprecated: sidecar configuration
 *
 * @generated from message api.v1.capsule.Sidecar
 */
export class Sidecar extends Message<Sidecar> {
  /**
   * @generated from field: repeated api.v1.capsule.SidecarInterface interfaces = 1;
   */
  interfaces: SidecarInterface[] = [];

  constructor(data?: PartialMessage<Sidecar>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Sidecar";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "interfaces", kind: "message", T: SidecarInterface, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sidecar {
    return new Sidecar().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sidecar {
    return new Sidecar().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sidecar {
    return new Sidecar().fromJsonString(jsonString, options);
  }

  static equals(a: Sidecar | PlainMessage<Sidecar> | undefined, b: Sidecar | PlainMessage<Sidecar> | undefined): boolean {
    return proto3.util.equals(Sidecar, a, b);
  }
}

/**
 * Deprecated: sidecar interface configuration
 *
 * @generated from message api.v1.capsule.SidecarInterface
 */
export class SidecarInterface extends Message<SidecarInterface> {
  /**
   * @generated from field: uint32 port = 1;
   */
  port = 0;

  /**
   * @generated from field: uint32 proxy_port = 2;
   */
  proxyPort = 0;

  constructor(data?: PartialMessage<SidecarInterface>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.SidecarInterface";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "port", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "proxy_port", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SidecarInterface {
    return new SidecarInterface().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SidecarInterface {
    return new SidecarInterface().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SidecarInterface {
    return new SidecarInterface().fromJsonString(jsonString, options);
  }

  static equals(a: SidecarInterface | PlainMessage<SidecarInterface> | undefined, b: SidecarInterface | PlainMessage<SidecarInterface> | undefined): boolean {
    return proto3.util.equals(SidecarInterface, a, b);
  }
}

