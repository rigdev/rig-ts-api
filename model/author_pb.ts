// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file model/author.proto (package model, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message model.Author
 */
export class Author extends Message<Author> {
  /**
   * Cached identifier of the author, e.g. email or username at the time of
   * change.
   *
   * @generated from field: string identifier = 1;
   */
  identifier = "";

  /**
   * Cached pretty-printed name of the author at the time of
   * change.
   *
   * @generated from field: string printable_name = 2;
   */
  printableName = "";

  /**
   * User ID of the author. This should be used to get current information
   * about the author.
   *
   * @generated from oneof model.Author.account
   */
  account: {
    /**
     * @generated from field: string user_id = 3;
     */
    value: string;
    case: "userId";
  } | {
    /**
     * @generated from field: string service_account_id = 4;
     */
    value: string;
    case: "serviceAccountId";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Author>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.Author";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "printable_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "account" },
    { no: 4, name: "service_account_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "account" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Author {
    return new Author().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Author {
    return new Author().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Author {
    return new Author().fromJsonString(jsonString, options);
  }

  static equals(a: Author | PlainMessage<Author> | undefined, b: Author | PlainMessage<Author> | undefined): boolean {
    return proto3.util.equals(Author, a, b);
  }
}

