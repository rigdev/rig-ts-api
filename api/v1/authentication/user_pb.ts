// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file api/v1/authentication/user.proto (package api.v1.authentication, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { UserIdentifier } from "../../../model/user_pb.js";

/**
 * @generated from message api.v1.authentication.Token
 */
export class Token extends Message<Token> {
  /**
   * Access token
   *
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * Refresh token
   *
   * @generated from field: string refresh_token = 2;
   */
  refreshToken = "";

  constructor(data?: PartialMessage<Token>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.Token";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Token {
    return new Token().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Token {
    return new Token().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Token {
    return new Token().fromJsonString(jsonString, options);
  }

  static equals(a: Token | PlainMessage<Token> | undefined, b: Token | PlainMessage<Token> | undefined): boolean {
    return proto3.util.equals(Token, a, b);
  }
}

/**
 * @generated from message api.v1.authentication.ClientCredentials
 */
export class ClientCredentials extends Message<ClientCredentials> {
  /**
   * ID of the service account
   *
   * @generated from field: string client_id = 1;
   */
  clientId = "";

  /**
   * secret of the service account
   *
   * @generated from field: string client_secret = 2;
   */
  clientSecret = "";

  constructor(data?: PartialMessage<ClientCredentials>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.ClientCredentials";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientCredentials {
    return new ClientCredentials().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientCredentials {
    return new ClientCredentials().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientCredentials {
    return new ClientCredentials().fromJsonString(jsonString, options);
  }

  static equals(a: ClientCredentials | PlainMessage<ClientCredentials> | undefined, b: ClientCredentials | PlainMessage<ClientCredentials> | undefined): boolean {
    return proto3.util.equals(ClientCredentials, a, b);
  }
}

/**
 * @generated from message api.v1.authentication.UserPassword
 */
export class UserPassword extends Message<UserPassword> {
  /**
   * Identifier of user. This can be username, email etc.
   *
   * @generated from field: model.UserIdentifier identifier = 1;
   */
  identifier?: UserIdentifier;

  /**
   * Password of the user
   *
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<UserPassword>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.UserPassword";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "identifier", kind: "message", T: UserIdentifier },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserPassword {
    return new UserPassword().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserPassword {
    return new UserPassword().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserPassword {
    return new UserPassword().fromJsonString(jsonString, options);
  }

  static equals(a: UserPassword | PlainMessage<UserPassword> | undefined, b: UserPassword | PlainMessage<UserPassword> | undefined): boolean {
    return proto3.util.equals(UserPassword, a, b);
  }
}

