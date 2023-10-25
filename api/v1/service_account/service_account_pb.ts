// @generated by protoc-gen-es v1.4.0 with parameter "target=ts"
// @generated from file api/v1/service_account/service_account.proto (package api.v1.service_account, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Author } from "../../../model/author_pb.js";

/**
 * @generated from message api.v1.service_account.Entry
 */
export class Entry extends Message<Entry> {
  /**
   * @generated from field: string service_account_id = 1;
   */
  serviceAccountId = "";

  /**
   * @generated from field: api.v1.service_account.ServiceAccount service_account = 2;
   */
  serviceAccount?: ServiceAccount;

  /**
   * @generated from field: string client_id = 3;
   */
  clientId = "";

  constructor(data?: PartialMessage<Entry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.service_account.Entry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "service_account_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "service_account", kind: "message", T: ServiceAccount },
    { no: 3, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Entry {
    return new Entry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Entry {
    return new Entry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Entry {
    return new Entry().fromJsonString(jsonString, options);
  }

  static equals(a: Entry | PlainMessage<Entry> | undefined, b: Entry | PlainMessage<Entry> | undefined): boolean {
    return proto3.util.equals(Entry, a, b);
  }
}

/**
 * @generated from message api.v1.service_account.ServiceAccount
 */
export class ServiceAccount extends Message<ServiceAccount> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 2;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: model.Author created_by = 3;
   */
  createdBy?: Author;

  /**
   * @generated from field: bool managed = 4;
   */
  managed = false;

  constructor(data?: PartialMessage<ServiceAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.service_account.ServiceAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "created_at", kind: "message", T: Timestamp },
    { no: 3, name: "created_by", kind: "message", T: Author },
    { no: 4, name: "managed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceAccount {
    return new ServiceAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceAccount {
    return new ServiceAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceAccount {
    return new ServiceAccount().fromJsonString(jsonString, options);
  }

  static equals(a: ServiceAccount | PlainMessage<ServiceAccount> | undefined, b: ServiceAccount | PlainMessage<ServiceAccount> | undefined): boolean {
    return proto3.util.equals(ServiceAccount, a, b);
  }
}

