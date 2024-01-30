// @generated by protoc-gen-es v1.7.1 with parameter "target=ts"
// @generated from file api/v1/environment/environment.proto (package api.v1.environment, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Environment model.
 *
 * @generated from message api.v1.environment.Environment
 */
export class Environment extends Message<Environment> {
  /**
   * ID of the environment.
   *
   * @generated from field: string environment_id = 1;
   */
  environmentId = "";

  /**
   * If true, this is the default environment.
   *
   * @generated from field: bool default = 2;
   */
  default = false;

  /**
   * The version of the Rig-operator CRD for this environment.
   *
   * @generated from field: string operator_version = 3;
   */
  operatorVersion = "";

  constructor(data?: PartialMessage<Environment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.environment.Environment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "operator_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Environment {
    return new Environment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Environment {
    return new Environment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Environment {
    return new Environment().fromJsonString(jsonString, options);
  }

  static equals(a: Environment | PlainMessage<Environment> | undefined, b: Environment | PlainMessage<Environment> | undefined): boolean {
    return proto3.util.equals(Environment, a, b);
  }
}

