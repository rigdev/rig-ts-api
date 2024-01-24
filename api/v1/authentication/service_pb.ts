// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/authentication/service.proto (package api.v1.authentication, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ClientCredentials, Token, UserPassword } from "./user_pb.js";
import { UserIdentifier, UserInfo } from "../../../model/user_pb.js";
import { LoginType } from "../../../model/auth_pb.js";

/**
 * The type of SSO. Currently only OIDC is supported.
 *
 * @generated from enum api.v1.authentication.SSOType
 */
export enum SSOType {
  /**
   * @generated from enum value: SSO_TYPE_UNSPECIFIED = 0;
   */
  SSO_TYPE_UNSPECIFIED = 0,

  /**
   * @generated from enum value: SSO_TYPE_OIDC = 1;
   */
  SSO_TYPE_OIDC = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(SSOType)
proto3.util.setEnumType(SSOType, "api.v1.authentication.SSOType", [
  { no: 0, name: "SSO_TYPE_UNSPECIFIED" },
  { no: 1, name: "SSO_TYPE_OIDC" },
]);

/**
 * Request to verify the email of a user with a verification code sent to the email.
 *
 * @generated from message api.v1.authentication.VerifyEmailRequest
 */
export class VerifyEmailRequest extends Message<VerifyEmailRequest> {
  /**
   * The verification code.
   *
   * @generated from field: string code = 1;
   */
  code = "";

  /**
   * The email of the user.
   *
   * @generated from field: string email = 2;
   */
  email = "";

  constructor(data?: PartialMessage<VerifyEmailRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.VerifyEmailRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyEmailRequest {
    return new VerifyEmailRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyEmailRequest {
    return new VerifyEmailRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyEmailRequest {
    return new VerifyEmailRequest().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyEmailRequest | PlainMessage<VerifyEmailRequest> | undefined, b: VerifyEmailRequest | PlainMessage<VerifyEmailRequest> | undefined): boolean {
    return proto3.util.equals(VerifyEmailRequest, a, b);
  }
}

/**
 * Empty response to the Verify Email Request.
 *
 * @generated from message api.v1.authentication.VerifyEmailResponse
 */
export class VerifyEmailResponse extends Message<VerifyEmailResponse> {
  constructor(data?: PartialMessage<VerifyEmailResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.VerifyEmailResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyEmailResponse {
    return new VerifyEmailResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyEmailResponse {
    return new VerifyEmailResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyEmailResponse {
    return new VerifyEmailResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyEmailResponse | PlainMessage<VerifyEmailResponse> | undefined, b: VerifyEmailResponse | PlainMessage<VerifyEmailResponse> | undefined): boolean {
    return proto3.util.equals(VerifyEmailResponse, a, b);
  }
}

/**
 * Request to verify the phone number of a user with a verification code sent to the phone number.
 *
 * @generated from message api.v1.authentication.VerifyPhoneNumberRequest
 */
export class VerifyPhoneNumberRequest extends Message<VerifyPhoneNumberRequest> {
  /**
   * @generated from field: string code = 1;
   */
  code = "";

  /**
   * @generated from field: string phone_number = 2;
   */
  phoneNumber = "";

  constructor(data?: PartialMessage<VerifyPhoneNumberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.VerifyPhoneNumberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyPhoneNumberRequest {
    return new VerifyPhoneNumberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyPhoneNumberRequest {
    return new VerifyPhoneNumberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyPhoneNumberRequest {
    return new VerifyPhoneNumberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyPhoneNumberRequest | PlainMessage<VerifyPhoneNumberRequest> | undefined, b: VerifyPhoneNumberRequest | PlainMessage<VerifyPhoneNumberRequest> | undefined): boolean {
    return proto3.util.equals(VerifyPhoneNumberRequest, a, b);
  }
}

/**
 * Empty response to the Verify Phone Number Request.
 *
 * @generated from message api.v1.authentication.VerifyPhoneNumberResponse
 */
export class VerifyPhoneNumberResponse extends Message<VerifyPhoneNumberResponse> {
  constructor(data?: PartialMessage<VerifyPhoneNumberResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.VerifyPhoneNumberResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyPhoneNumberResponse {
    return new VerifyPhoneNumberResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyPhoneNumberResponse {
    return new VerifyPhoneNumberResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyPhoneNumberResponse {
    return new VerifyPhoneNumberResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyPhoneNumberResponse | PlainMessage<VerifyPhoneNumberResponse> | undefined, b: VerifyPhoneNumberResponse | PlainMessage<VerifyPhoneNumberResponse> | undefined): boolean {
    return proto3.util.equals(VerifyPhoneNumberResponse, a, b);
  }
}

/**
 * Login request with either user identifier & email or client credentials.
 *
 * @generated from message api.v1.authentication.LoginRequest
 */
export class LoginRequest extends Message<LoginRequest> {
  /**
   * @generated from oneof api.v1.authentication.LoginRequest.method
   */
  method: {
    /**
     * User identifier & password.
     *
     * @generated from field: api.v1.authentication.UserPassword user_password = 1;
     */
    value: UserPassword;
    case: "userPassword";
  } | {
    /**
     * Client credentials from service account.
     *
     * @generated from field: api.v1.authentication.ClientCredentials client_credentials = 3;
     */
    value: ClientCredentials;
    case: "clientCredentials";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<LoginRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.LoginRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_password", kind: "message", T: UserPassword, oneof: "method" },
    { no: 3, name: "client_credentials", kind: "message", T: ClientCredentials, oneof: "method" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginRequest {
    return new LoginRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginRequest {
    return new LoginRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginRequest {
    return new LoginRequest().fromJsonString(jsonString, options);
  }

  static equals(a: LoginRequest | PlainMessage<LoginRequest> | undefined, b: LoginRequest | PlainMessage<LoginRequest> | undefined): boolean {
    return proto3.util.equals(LoginRequest, a, b);
  }
}

/**
 * Login response with tokens and user information.
 *
 * @generated from message api.v1.authentication.LoginResponse
 */
export class LoginResponse extends Message<LoginResponse> {
  /**
   * The access token and refresh token.
   *
   * @generated from field: api.v1.authentication.Token token = 1;
   */
  token?: Token;

  /**
   * ID of the user.
   *
   * @generated from field: string user_id = 2;
   */
  userId = "";

  /**
   * User information.
   *
   * @generated from field: model.UserInfo user_info = 3;
   */
  userInfo?: UserInfo;

  constructor(data?: PartialMessage<LoginResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.LoginResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "message", T: Token },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_info", kind: "message", T: UserInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginResponse {
    return new LoginResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginResponse {
    return new LoginResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginResponse {
    return new LoginResponse().fromJsonString(jsonString, options);
  }

  static equals(a: LoginResponse | PlainMessage<LoginResponse> | undefined, b: LoginResponse | PlainMessage<LoginResponse> | undefined): boolean {
    return proto3.util.equals(LoginResponse, a, b);
  }
}

/**
 * Empty logout request. The user ID etc. is taken from the token.
 *
 * @generated from message api.v1.authentication.LogoutRequest
 */
export class LogoutRequest extends Message<LogoutRequest> {
  constructor(data?: PartialMessage<LogoutRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.LogoutRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogoutRequest {
    return new LogoutRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogoutRequest {
    return new LogoutRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogoutRequest {
    return new LogoutRequest().fromJsonString(jsonString, options);
  }

  static equals(a: LogoutRequest | PlainMessage<LogoutRequest> | undefined, b: LogoutRequest | PlainMessage<LogoutRequest> | undefined): boolean {
    return proto3.util.equals(LogoutRequest, a, b);
  }
}

/**
 * Empty response to the logout request.
 *
 * @generated from message api.v1.authentication.LogoutResponse
 */
export class LogoutResponse extends Message<LogoutResponse> {
  constructor(data?: PartialMessage<LogoutResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.LogoutResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogoutResponse {
    return new LogoutResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogoutResponse {
    return new LogoutResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogoutResponse {
    return new LogoutResponse().fromJsonString(jsonString, options);
  }

  static equals(a: LogoutResponse | PlainMessage<LogoutResponse> | undefined, b: LogoutResponse | PlainMessage<LogoutResponse> | undefined): boolean {
    return proto3.util.equals(LogoutResponse, a, b);
  }
}

/**
 * Get request to get the logged in user. The user ID etc. is taken from the token.
 *
 * @generated from message api.v1.authentication.GetRequest
 */
export class GetRequest extends Message<GetRequest> {
  constructor(data?: PartialMessage<GetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.GetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest {
    return new GetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean {
    return proto3.util.equals(GetRequest, a, b);
  }
}

/**
 * Response with user information to the get request.
 *
 * @generated from message api.v1.authentication.GetResponse
 */
export class GetResponse extends Message<GetResponse> {
  /**
   * Information about the user.
   *
   * @generated from field: model.UserInfo user_info = 1;
   */
  userInfo?: UserInfo;

  /**
   * ID of the user
   *
   * @generated from field: string user_id = 2;
   */
  userId = "";

  constructor(data?: PartialMessage<GetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.GetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_info", kind: "message", T: UserInfo },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetResponse {
    return new GetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetResponse | PlainMessage<GetResponse> | undefined, b: GetResponse | PlainMessage<GetResponse> | undefined): boolean {
    return proto3.util.equals(GetResponse, a, b);
  }
}

/**
 * Register request for users to self-register. This is only possible with the register bool set in users settings.
 *
 * @generated from message api.v1.authentication.RegisterRequest
 */
export class RegisterRequest extends Message<RegisterRequest> {
  /**
   * @generated from oneof api.v1.authentication.RegisterRequest.method
   */
  method: {
    /**
     * User identifier & password for the new user.
     *
     * @generated from field: api.v1.authentication.UserPassword user_password = 1;
     */
    value: UserPassword;
    case: "userPassword";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<RegisterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.RegisterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_password", kind: "message", T: UserPassword, oneof: "method" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterRequest {
    return new RegisterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterRequest {
    return new RegisterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterRequest {
    return new RegisterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterRequest | PlainMessage<RegisterRequest> | undefined, b: RegisterRequest | PlainMessage<RegisterRequest> | undefined): boolean {
    return proto3.util.equals(RegisterRequest, a, b);
  }
}

/**
 * Register response with tokens and user information.
 *
 * @generated from message api.v1.authentication.RegisterResponse
 */
export class RegisterResponse extends Message<RegisterResponse> {
  /**
   * Access and refresh token for the new logged in user.
   *
   * @generated from field: api.v1.authentication.Token token = 1;
   */
  token?: Token;

  /**
   * User ID of the new user.
   *
   * @generated from field: string user_id = 2;
   */
  userId = "";

  /**
   * Information about the new user.
   *
   * @generated from field: model.UserInfo user_info = 3;
   */
  userInfo?: UserInfo;

  constructor(data?: PartialMessage<RegisterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.RegisterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "message", T: Token },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_info", kind: "message", T: UserInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterResponse {
    return new RegisterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterResponse {
    return new RegisterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterResponse {
    return new RegisterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterResponse | PlainMessage<RegisterResponse> | undefined, b: RegisterResponse | PlainMessage<RegisterResponse> | undefined): boolean {
    return proto3.util.equals(RegisterResponse, a, b);
  }
}

/**
 * Request to send a reset password email to the user. This is only possible if an email provider is configured, and the user has an email.
 *
 * @generated from message api.v1.authentication.SendPasswordResetRequest
 */
export class SendPasswordResetRequest extends Message<SendPasswordResetRequest> {
  /**
   * User identifier of the user.
   *
   * @generated from field: model.UserIdentifier identifier = 1;
   */
  identifier?: UserIdentifier;

  constructor(data?: PartialMessage<SendPasswordResetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.SendPasswordResetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "identifier", kind: "message", T: UserIdentifier },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendPasswordResetRequest {
    return new SendPasswordResetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendPasswordResetRequest {
    return new SendPasswordResetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendPasswordResetRequest {
    return new SendPasswordResetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SendPasswordResetRequest | PlainMessage<SendPasswordResetRequest> | undefined, b: SendPasswordResetRequest | PlainMessage<SendPasswordResetRequest> | undefined): boolean {
    return proto3.util.equals(SendPasswordResetRequest, a, b);
  }
}

/**
 * Empty response to the send password reset request
 *
 * @generated from message api.v1.authentication.SendPasswordResetResponse
 */
export class SendPasswordResetResponse extends Message<SendPasswordResetResponse> {
  constructor(data?: PartialMessage<SendPasswordResetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.SendPasswordResetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendPasswordResetResponse {
    return new SendPasswordResetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendPasswordResetResponse {
    return new SendPasswordResetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendPasswordResetResponse {
    return new SendPasswordResetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SendPasswordResetResponse | PlainMessage<SendPasswordResetResponse> | undefined, b: SendPasswordResetResponse | PlainMessage<SendPasswordResetResponse> | undefined): boolean {
    return proto3.util.equals(SendPasswordResetResponse, a, b);
  }
}

/**
 * Request to reset the password of a user with a verification code sent to the email.
 *
 * @generated from message api.v1.authentication.ResetPasswordRequest
 */
export class ResetPasswordRequest extends Message<ResetPasswordRequest> {
  /**
   * The 6 digit verification code
   *
   * @generated from field: string code = 1;
   */
  code = "";

  /**
   * The new password
   *
   * @generated from field: string new_password = 2;
   */
  newPassword = "";

  /**
   * Identifier of the user
   *
   * @generated from field: model.UserIdentifier identifier = 3;
   */
  identifier?: UserIdentifier;

  constructor(data?: PartialMessage<ResetPasswordRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.ResetPasswordRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "identifier", kind: "message", T: UserIdentifier },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetPasswordRequest {
    return new ResetPasswordRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetPasswordRequest {
    return new ResetPasswordRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetPasswordRequest {
    return new ResetPasswordRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ResetPasswordRequest | PlainMessage<ResetPasswordRequest> | undefined, b: ResetPasswordRequest | PlainMessage<ResetPasswordRequest> | undefined): boolean {
    return proto3.util.equals(ResetPasswordRequest, a, b);
  }
}

/**
 * Empty response to the reset password request
 *
 * @generated from message api.v1.authentication.ResetPasswordResponse
 */
export class ResetPasswordResponse extends Message<ResetPasswordResponse> {
  constructor(data?: PartialMessage<ResetPasswordResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.ResetPasswordResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetPasswordResponse {
    return new ResetPasswordResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetPasswordResponse {
    return new ResetPasswordResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetPasswordResponse {
    return new ResetPasswordResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ResetPasswordResponse | PlainMessage<ResetPasswordResponse> | undefined, b: ResetPasswordResponse | PlainMessage<ResetPasswordResponse> | undefined): boolean {
    return proto3.util.equals(ResetPasswordResponse, a, b);
  }
}

/**
 * Request to delete the logged in user. The user ID etc. is taken from the token.
 *
 * @generated from message api.v1.authentication.DeleteRequest
 */
export class DeleteRequest extends Message<DeleteRequest> {
  constructor(data?: PartialMessage<DeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.DeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRequest {
    return new DeleteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRequest {
    return new DeleteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRequest {
    return new DeleteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteRequest | PlainMessage<DeleteRequest> | undefined, b: DeleteRequest | PlainMessage<DeleteRequest> | undefined): boolean {
    return proto3.util.equals(DeleteRequest, a, b);
  }
}

/**
 * Empty response to the delete request.
 *
 * @generated from message api.v1.authentication.DeleteResponse
 */
export class DeleteResponse extends Message<DeleteResponse> {
  constructor(data?: PartialMessage<DeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.DeleteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteResponse {
    return new DeleteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteResponse {
    return new DeleteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteResponse {
    return new DeleteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteResponse | PlainMessage<DeleteResponse> | undefined, b: DeleteResponse | PlainMessage<DeleteResponse> | undefined): boolean {
    return proto3.util.equals(DeleteResponse, a, b);
  }
}

/**
 * Request to refresh the access and refresh token of the logged in user.
 *
 * @generated from message api.v1.authentication.RefreshTokenRequest
 */
export class RefreshTokenRequest extends Message<RefreshTokenRequest> {
  /**
   * The access token of the user
   *
   * Refresh token matching the access token.
   *
   * @generated from field: string refresh_token = 1;
   */
  refreshToken = "";

  constructor(data?: PartialMessage<RefreshTokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.RefreshTokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshTokenRequest {
    return new RefreshTokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshTokenRequest {
    return new RefreshTokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshTokenRequest {
    return new RefreshTokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RefreshTokenRequest | PlainMessage<RefreshTokenRequest> | undefined, b: RefreshTokenRequest | PlainMessage<RefreshTokenRequest> | undefined): boolean {
    return proto3.util.equals(RefreshTokenRequest, a, b);
  }
}

/**
 * Response with new access and refresh token.
 *
 * @generated from message api.v1.authentication.RefreshTokenResponse
 */
export class RefreshTokenResponse extends Message<RefreshTokenResponse> {
  /**
   * New refresh and access tokens
   *
   * @generated from field: api.v1.authentication.Token token = 1;
   */
  token?: Token;

  constructor(data?: PartialMessage<RefreshTokenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.RefreshTokenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "message", T: Token },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshTokenResponse {
    return new RefreshTokenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshTokenResponse {
    return new RefreshTokenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshTokenResponse {
    return new RefreshTokenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RefreshTokenResponse | PlainMessage<RefreshTokenResponse> | undefined, b: RefreshTokenResponse | PlainMessage<RefreshTokenResponse> | undefined): boolean {
    return proto3.util.equals(RefreshTokenResponse, a, b);
  }
}

/**
 * Empty Request to get the auth config containing the available login mechanisms and if self-registering is enabled.
 *
 * @generated from message api.v1.authentication.GetAuthConfigRequest
 */
export class GetAuthConfigRequest extends Message<GetAuthConfigRequest> {
  constructor(data?: PartialMessage<GetAuthConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.GetAuthConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthConfigRequest {
    return new GetAuthConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthConfigRequest {
    return new GetAuthConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthConfigRequest {
    return new GetAuthConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetAuthConfigRequest | PlainMessage<GetAuthConfigRequest> | undefined, b: GetAuthConfigRequest | PlainMessage<GetAuthConfigRequest> | undefined): boolean {
    return proto3.util.equals(GetAuthConfigRequest, a, b);
  }
}

/**
 * Response with the auth config containing the available login mechanisms and if self-registering is enabled.
 *
 * @generated from message api.v1.authentication.GetAuthConfigResponse
 */
export class GetAuthConfigResponse extends Message<GetAuthConfigResponse> {
  /**
   * The name of the project
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The logo of the project
   *
   * @generated from field: string logo_url = 2;
   */
  logoUrl = "";

  /**
   * If to validate password
   *
   * @generated from field: bool validate_password = 3;
   */
  validatePassword = false;

  /**
   * Array of supported login methods.
   *
   * @generated from field: repeated model.LoginType login_types = 4;
   */
  loginTypes: LoginType[] = [];

  /**
   * True if new users can sign up.
   *
   * @generated from field: bool allows_register = 7;
   */
  allowsRegister = false;

  /**
   * SSO login options
   *
   * @generated from field: repeated api.v1.authentication.SSOOption sso_options = 8;
   */
  ssoOptions: SSOOption[] = [];

  constructor(data?: PartialMessage<GetAuthConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.GetAuthConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "logo_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "validate_password", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "login_types", kind: "enum", T: proto3.getEnumType(LoginType), repeated: true },
    { no: 7, name: "allows_register", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "sso_options", kind: "message", T: SSOOption, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthConfigResponse {
    return new GetAuthConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthConfigResponse {
    return new GetAuthConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthConfigResponse {
    return new GetAuthConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetAuthConfigResponse | PlainMessage<GetAuthConfigResponse> | undefined, b: GetAuthConfigResponse | PlainMessage<GetAuthConfigResponse> | undefined): boolean {
    return proto3.util.equals(GetAuthConfigResponse, a, b);
  }
}

/**
 * A login option for using SSO. This might be merged into
 * GetAuthConfigResponse.login_types, but is introduced as a separate field, to
 * maintain backwards compatibility.
 *
 * @generated from message api.v1.authentication.SSOOption
 */
export class SSOOption extends Message<SSOOption> {
  /**
   * Type of SSO. Currently only OIDC is supported.
   *
   * @generated from field: api.v1.authentication.SSOType type = 1;
   */
  type = SSOType.SSO_TYPE_UNSPECIFIED;

  /**
   * ID of the SSO provider as given in the platform configuration.
   *
   * @generated from field: string provider_id = 2;
   */
  providerId = "";

  /**
   * Name of SSO provider. This is an optional human readable version of the provider ID.
   *
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * URL of the underlying issuer. This can be used in the frontend for
   * showing specific items for certain known issuers.
   *
   * @generated from field: string issuer_url = 4;
   */
  issuerUrl = "";

  constructor(data?: PartialMessage<SSOOption>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.SSOOption";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SSOType) },
    { no: 2, name: "provider_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "issuer_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SSOOption {
    return new SSOOption().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SSOOption {
    return new SSOOption().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SSOOption {
    return new SSOOption().fromJsonString(jsonString, options);
  }

  static equals(a: SSOOption | PlainMessage<SSOOption> | undefined, b: SSOOption | PlainMessage<SSOOption> | undefined): boolean {
    return proto3.util.equals(SSOOption, a, b);
  }
}

/**
 * Represents an SSO provided ID of a user
 *
 * @generated from message api.v1.authentication.SSOID
 */
export class SSOID extends Message<SSOID> {
  /**
   * What type of SSO this ID is from
   *
   * @generated from field: api.v1.authentication.SSOType type = 1;
   */
  type = SSOType.SSO_TYPE_UNSPECIFIED;

  /**
   * The ID of the SSO provider
   *
   * @generated from field: string provider_id = 2;
   */
  providerId = "";

  /**
   * The ID provided by SSO
   *
   * @generated from field: string sso_id = 3;
   */
  ssoId = "";

  /**
   * The internal user ID
   *
   * @generated from field: string user_id = 4;
   */
  userId = "";

  constructor(data?: PartialMessage<SSOID>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.authentication.SSOID";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SSOType) },
    { no: 2, name: "provider_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sso_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SSOID {
    return new SSOID().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SSOID {
    return new SSOID().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SSOID {
    return new SSOID().fromJsonString(jsonString, options);
  }

  static equals(a: SSOID | PlainMessage<SSOID> | undefined, b: SSOID | PlainMessage<SSOID> | undefined): boolean {
    return proto3.util.equals(SSOID, a, b);
  }
}

