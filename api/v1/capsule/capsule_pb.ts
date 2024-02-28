// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file api/v1/capsule/capsule.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Author } from "../../../model/author_pb.js";

/**
 * Environment wide capsule abstraction.
 *
 * @generated from message api.v1.capsule.Capsule
 */
export class Capsule extends Message<Capsule> {
  /**
   * ID of the capsule.
   *
   * @generated from field: string capsule_id = 1;
   */
  capsuleId = "";

  /**
   * Last time the capsule was updated.
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 6;
   */
  updatedAt?: Timestamp;

  /**
   * Author of the last update.
   *
   * @generated from field: model.Author updated_by = 7;
   */
  updatedBy?: Author;

  constructor(data?: PartialMessage<Capsule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Capsule";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "updated_at", kind: "message", T: Timestamp },
    { no: 7, name: "updated_by", kind: "message", T: Author },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Capsule {
    return new Capsule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Capsule {
    return new Capsule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Capsule {
    return new Capsule().fromJsonString(jsonString, options);
  }

  static equals(a: Capsule | PlainMessage<Capsule> | undefined, b: Capsule | PlainMessage<Capsule> | undefined): boolean {
    return proto3.util.equals(Capsule, a, b);
  }
}

/**
 * Legacy update message
 *
 * @generated from message api.v1.capsule.Update
 */
export class Update extends Message<Update> {
  constructor(data?: PartialMessage<Update>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Update";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Update {
    return new Update().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Update {
    return new Update().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Update {
    return new Update().fromJsonString(jsonString, options);
  }

  static equals(a: Update | PlainMessage<Update> | undefined, b: Update | PlainMessage<Update> | undefined): boolean {
    return proto3.util.equals(Update, a, b);
  }
}

