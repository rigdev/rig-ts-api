// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file model/auth.proto (package model, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The LoginType enum defines the type of login.
 *
 * @generated from enum model.LoginType
 */
export enum LoginType {
  /**
   * Default value.
   *
   * @generated from enum value: LOGIN_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Email and password login.
   *
   * @generated from enum value: LOGIN_TYPE_EMAIL_PASSWORD = 1;
   */
  EMAIL_PASSWORD = 1,

  /**
   * deprecated: text is not supported - Phone number and password login.
   *
   * @generated from enum value: LOGIN_TYPE_PHONE_PASSWORD = 2;
   */
  PHONE_PASSWORD = 2,

  /**
   * Username and password login.
   *
   * @generated from enum value: LOGIN_TYPE_USERNAME_PASSWORD = 3;
   */
  USERNAME_PASSWORD = 3,

  /**
   * SSO Login
   *
   * @generated from enum value: LOGIN_TYPE_SSO = 4;
   */
  SSO = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(LoginType)
proto3.util.setEnumType(LoginType, "model.LoginType", [
  { no: 0, name: "LOGIN_TYPE_UNSPECIFIED" },
  { no: 1, name: "LOGIN_TYPE_EMAIL_PASSWORD" },
  { no: 2, name: "LOGIN_TYPE_PHONE_PASSWORD" },
  { no: 3, name: "LOGIN_TYPE_USERNAME_PASSWORD" },
  { no: 4, name: "LOGIN_TYPE_SSO" },
]);

/**
 * Message that tells how the user was authenticated.
 *
 * @generated from message model.AuthMethod
 */
export class AuthMethod extends Message<AuthMethod> {
  /**
   * @generated from oneof model.AuthMethod.method
   */
  method: {
    /**
     * @generated from field: model.LoginType login_type = 1;
     */
    value: LoginType;
    case: "loginType";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<AuthMethod>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.AuthMethod";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login_type", kind: "enum", T: proto3.getEnumType(LoginType), oneof: "method" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthMethod {
    return new AuthMethod().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthMethod {
    return new AuthMethod().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthMethod {
    return new AuthMethod().fromJsonString(jsonString, options);
  }

  static equals(a: AuthMethod | PlainMessage<AuthMethod> | undefined, b: AuthMethod | PlainMessage<AuthMethod> | undefined): boolean {
    return proto3.util.equals(AuthMethod, a, b);
  }
}

