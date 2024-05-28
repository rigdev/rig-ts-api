// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file model/revision.proto (package model, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Author } from "./author_pb.js";

/**
 * @generated from message model.RevisionMetadata
 */
export class RevisionMetadata extends Message<RevisionMetadata> {
  /**
   * @generated from field: google.protobuf.Timestamp created_at = 1;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 2;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: model.Author updated_by = 3;
   */
  updatedBy?: Author;

  /**
   * @generated from field: model.Fingerprint fingerprint = 4;
   */
  fingerprint?: Fingerprint;

  constructor(data?: PartialMessage<RevisionMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.RevisionMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "created_at", kind: "message", T: Timestamp },
    { no: 2, name: "updated_at", kind: "message", T: Timestamp },
    { no: 3, name: "updated_by", kind: "message", T: Author },
    { no: 4, name: "fingerprint", kind: "message", T: Fingerprint },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevisionMetadata {
    return new RevisionMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevisionMetadata {
    return new RevisionMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevisionMetadata {
    return new RevisionMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: RevisionMetadata | PlainMessage<RevisionMetadata> | undefined, b: RevisionMetadata | PlainMessage<RevisionMetadata> | undefined): boolean {
    return proto3.util.equals(RevisionMetadata, a, b);
  }
}

/**
 * @generated from message model.Fingerprint
 */
export class Fingerprint extends Message<Fingerprint> {
  /**
   * @generated from field: bytes bytes = 1;
   */
  bytes = new Uint8Array(0);

  constructor(data?: PartialMessage<Fingerprint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.Fingerprint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fingerprint {
    return new Fingerprint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fingerprint {
    return new Fingerprint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fingerprint {
    return new Fingerprint().fromJsonString(jsonString, options);
  }

  static equals(a: Fingerprint | PlainMessage<Fingerprint> | undefined, b: Fingerprint | PlainMessage<Fingerprint> | undefined): boolean {
    return proto3.util.equals(Fingerprint, a, b);
  }
}
