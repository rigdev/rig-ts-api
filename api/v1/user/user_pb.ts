// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/user/user.proto (package api.v1.user, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { HashingInstance } from "../../../model/common_pb.js";
import { RegisterInfo, UserInfo } from "../../../model/user_pb.js";
import { Metadata } from "../../../model/metadata_pb.js";
import { LoginType } from "../../../model/auth_pb.js";

/**
 * Type of verification code
 *
 * @generated from enum api.v1.user.VerificationType
 */
export enum VerificationType {
  /**
   * Default value
   *
   * @generated from enum value: VERIFICATION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Email verification code.
   *
   * @generated from enum value: VERIFICATION_TYPE_EMAIL = 1;
   */
  EMAIL = 1,

  /**
   * Deprecated: text is not supported - text verification code.
   *
   * @generated from enum value: VERIFICATION_TYPE_TEXT = 2;
   */
  TEXT = 2,

  /**
   * reset password verification code.
   *
   * @generated from enum value: VERIFICATION_TYPE_RESET_PASSWORD = 3;
   */
  RESET_PASSWORD = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(VerificationType)
proto3.util.setEnumType(VerificationType, "api.v1.user.VerificationType", [
  { no: 0, name: "VERIFICATION_TYPE_UNSPECIFIED" },
  { no: 1, name: "VERIFICATION_TYPE_EMAIL" },
  { no: 2, name: "VERIFICATION_TYPE_TEXT" },
  { no: 3, name: "VERIFICATION_TYPE_RESET_PASSWORD" },
]);

/**
 * short-lived verification code.
 *
 * @generated from message api.v1.user.VerificationCode
 */
export class VerificationCode extends Message<VerificationCode> {
  /**
   * Hashed verification code.
   *
   * @generated from field: model.HashingInstance code = 1;
   */
  code?: HashingInstance;

  /**
   * Timestamp when the verification code was sent.
   *
   * @generated from field: google.protobuf.Timestamp sent_at = 2;
   */
  sentAt?: Timestamp;

  /**
   * Timestamp when the verification code expires.
   *
   * @generated from field: google.protobuf.Timestamp expires_at = 3;
   */
  expiresAt?: Timestamp;

  /**
   * Number of attempts to verify the code.
   *
   * @generated from field: int32 attempts = 4;
   */
  attempts = 0;

  /**
   * Timestamp of the last attempt to verify the code.
   *
   * @generated from field: google.protobuf.Timestamp last_attempt = 5;
   */
  lastAttempt?: Timestamp;

  /**
   * Type of verification code.
   *
   * @generated from field: api.v1.user.VerificationType type = 6;
   */
  type = VerificationType.UNSPECIFIED;

  /**
   * User ID of the user who the code was sent to.
   *
   * @generated from field: string user_id = 7;
   */
  userId = "";

  constructor(data?: PartialMessage<VerificationCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.VerificationCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "message", T: HashingInstance },
    { no: 2, name: "sent_at", kind: "message", T: Timestamp },
    { no: 3, name: "expires_at", kind: "message", T: Timestamp },
    { no: 4, name: "attempts", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "last_attempt", kind: "message", T: Timestamp },
    { no: 6, name: "type", kind: "enum", T: proto3.getEnumType(VerificationType) },
    { no: 7, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerificationCode {
    return new VerificationCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerificationCode {
    return new VerificationCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerificationCode {
    return new VerificationCode().fromJsonString(jsonString, options);
  }

  static equals(a: VerificationCode | PlainMessage<VerificationCode> | undefined, b: VerificationCode | PlainMessage<VerificationCode> | undefined): boolean {
    return proto3.util.equals(VerificationCode, a, b);
  }
}

/**
 * User profile
 *
 * @generated from message api.v1.user.Profile
 */
export class Profile extends Message<Profile> {
  /**
   * First name of the user.
   *
   * @generated from field: string first_name = 1;
   */
  firstName = "";

  /**
   * Last name of the user.
   *
   * @generated from field: string last_name = 2;
   */
  lastName = "";

  constructor(data?: PartialMessage<Profile>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.Profile";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Profile {
    return new Profile().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Profile {
    return new Profile().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Profile {
    return new Profile().fromJsonString(jsonString, options);
  }

  static equals(a: Profile | PlainMessage<Profile> | undefined, b: Profile | PlainMessage<Profile> | undefined): boolean {
    return proto3.util.equals(Profile, a, b);
  }
}

/**
 * The user model.
 *
 * @generated from message api.v1.user.User
 */
export class User extends Message<User> {
  /**
   * User ID of the user.
   *
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * User info of the user.
   *
   * @generated from field: model.UserInfo user_info = 2;
   */
  userInfo?: UserInfo;

  /**
   * Profile of the user.
   *
   * @generated from field: api.v1.user.Profile profile = 3;
   */
  profile?: Profile;

  /**
   * Timestamp when the user was last updated.
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 4;
   */
  updatedAt?: Timestamp;

  /**
   * Register info of the user.
   *
   * @generated from field: model.RegisterInfo register_info = 5;
   */
  registerInfo?: RegisterInfo;

  /**
   * Deprecated: text is not supported - Whether the user's phone number is verified.
   *
   * @generated from field: bool is_phone_verified = 6;
   */
  isPhoneVerified = false;

  /**
   * Whether the user's email is verified.
   *
   * @generated from field: bool is_email_verified = 7;
   */
  isEmailVerified = false;

  /**
   * Timestamp when the user last created a new session.
   *
   * @generated from field: google.protobuf.Timestamp new_sessions_since = 8;
   */
  newSessionsSince?: Timestamp;

  /**
   * Metadata of the user.
   *
   * @generated from field: map<string, bytes> metadata = 9;
   */
  metadata: { [key: string]: Uint8Array } = {};

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_info", kind: "message", T: UserInfo },
    { no: 3, name: "profile", kind: "message", T: Profile },
    { no: 4, name: "updated_at", kind: "message", T: Timestamp },
    { no: 5, name: "register_info", kind: "message", T: RegisterInfo },
    { no: 6, name: "is_phone_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "is_email_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "new_sessions_since", kind: "message", T: Timestamp },
    { no: 9, name: "metadata", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}

/**
 * Update message to update a user.
 *
 * @generated from message api.v1.user.Update
 */
export class Update extends Message<Update> {
  /**
   * field of the user to update./
   *
   * @generated from oneof api.v1.user.Update.field
   */
  field: {
    /**
     * Email of the user.
     *
     * @generated from field: string email = 1;
     */
    value: string;
    case: "email";
  } | {
    /**
     * Username of the user.
     *
     * @generated from field: string username = 2;
     */
    value: string;
    case: "username";
  } | {
    /**
     * Deprecated: text is not supported - Phone number of the user.
     *
     * @generated from field: string phone_number = 3;
     */
    value: string;
    case: "phoneNumber";
  } | {
    /**
     * Password of the user.
     *
     * @generated from field: string password = 4;
     */
    value: string;
    case: "password";
  } | {
    /**
     * Profile of the user.
     *
     * @generated from field: api.v1.user.Profile profile = 5;
     */
    value: Profile;
    case: "profile";
  } | {
    /**
     * Whether the user's email is verified.
     *
     * @generated from field: bool is_email_verified = 6;
     */
    value: boolean;
    case: "isEmailVerified";
  } | {
    /**
     * Deprecated: text is not supported - Whether the user's phone number is verified.
     *
     * @generated from field: bool is_phone_verified = 7;
     */
    value: boolean;
    case: "isPhoneVerified";
  } | {
    /**
     * Reset sessions of the user.
     *
     * @generated from field: api.v1.user.Update.ResetSessions reset_sessions = 8;
     */
    value: Update_ResetSessions;
    case: "resetSessions";
  } | {
    /**
     * Set metadata of the user.
     *
     * @generated from field: model.Metadata set_metadata = 9;
     */
    value: Metadata;
    case: "setMetadata";
  } | {
    /**
     * Delete metadata of the user.
     *
     * @generated from field: string delete_metadata_key = 10;
     */
    value: string;
    case: "deleteMetadataKey";
  } | {
    /**
     * Hashed password of the user.
     *
     * @generated from field: model.HashingInstance hashed_password = 12;
     */
    value: HashingInstance;
    case: "hashedPassword";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Update>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.Update";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
    { no: 3, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
    { no: 4, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
    { no: 5, name: "profile", kind: "message", T: Profile, oneof: "field" },
    { no: 6, name: "is_email_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "field" },
    { no: 7, name: "is_phone_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "field" },
    { no: 8, name: "reset_sessions", kind: "message", T: Update_ResetSessions, oneof: "field" },
    { no: 9, name: "set_metadata", kind: "message", T: Metadata, oneof: "field" },
    { no: 10, name: "delete_metadata_key", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
    { no: 12, name: "hashed_password", kind: "message", T: HashingInstance, oneof: "field" },
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

/**
 * if sessions are reset, all sessions will be invalidated and a new session will be created.
 *
 * @generated from message api.v1.user.Update.ResetSessions
 */
export class Update_ResetSessions extends Message<Update_ResetSessions> {
  constructor(data?: PartialMessage<Update_ResetSessions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.Update.ResetSessions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Update_ResetSessions {
    return new Update_ResetSessions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Update_ResetSessions {
    return new Update_ResetSessions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Update_ResetSessions {
    return new Update_ResetSessions().fromJsonString(jsonString, options);
  }

  static equals(a: Update_ResetSessions | PlainMessage<Update_ResetSessions> | undefined, b: Update_ResetSessions | PlainMessage<Update_ResetSessions> | undefined): boolean {
    return proto3.util.equals(Update_ResetSessions, a, b);
  }
}

/**
 * how a user is authenticated.
 *
 * @generated from message api.v1.user.AuthMethod
 */
export class AuthMethod extends Message<AuthMethod> {
  /**
   * @generated from oneof api.v1.user.AuthMethod.method
   */
  method: {
    /**
     * Login type of the user.
     *
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
  static readonly typeName = "api.v1.user.AuthMethod";
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

/**
 * Session entry
 *
 * @generated from message api.v1.user.SessionEntry
 */
export class SessionEntry extends Message<SessionEntry> {
  /**
   * Session ID of the session.
   *
   * @generated from field: string session_id = 1;
   */
  sessionId = "";

  /**
   * Session of the session.
   *
   * @generated from field: api.v1.user.Session session = 2;
   */
  session?: Session;

  constructor(data?: PartialMessage<SessionEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.SessionEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "session", kind: "message", T: Session },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SessionEntry {
    return new SessionEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SessionEntry {
    return new SessionEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SessionEntry {
    return new SessionEntry().fromJsonString(jsonString, options);
  }

  static equals(a: SessionEntry | PlainMessage<SessionEntry> | undefined, b: SessionEntry | PlainMessage<SessionEntry> | undefined): boolean {
    return proto3.util.equals(SessionEntry, a, b);
  }
}

/**
 * A user's sessions.
 *
 * @generated from message api.v1.user.Session
 */
export class Session extends Message<Session> {
  /**
   * how the user is authenticated.
   *
   * @generated from field: api.v1.user.AuthMethod auth_method = 1;
   */
  authMethod?: AuthMethod;

  /**
   * if the session is invalidated
   *
   * @generated from field: bool is_invalidated = 2;
   */
  isInvalidated = false;

  /**
   * Timestamp when the session was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 3;
   */
  createdAt?: Timestamp;

  /**
   * Timestamp when the session was invalidated.
   *
   * @generated from field: google.protobuf.Timestamp invalidated_at = 4;
   */
  invalidatedAt?: Timestamp;

  /**
   * Timestamp when the session expires.
   *
   * @generated from field: google.protobuf.Timestamp expires_at = 5;
   */
  expiresAt?: Timestamp;

  /**
   * Timestamp when the session was renewed.
   *
   * @generated from field: google.protobuf.Timestamp renewed_at = 6;
   */
  renewedAt?: Timestamp;

  /**
   * Country of the session.
   *
   * @generated from field: string country = 7;
   */
  country = "";

  /**
   * Postal code of the session.
   *
   * @generated from field: int32 postal_code = 8;
   */
  postalCode = 0;

  constructor(data?: PartialMessage<Session>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.Session";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "auth_method", kind: "message", T: AuthMethod },
    { no: 2, name: "is_invalidated", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
    { no: 4, name: "invalidated_at", kind: "message", T: Timestamp },
    { no: 5, name: "expires_at", kind: "message", T: Timestamp },
    { no: 6, name: "renewed_at", kind: "message", T: Timestamp },
    { no: 7, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "postal_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Session {
    return new Session().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Session {
    return new Session().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Session {
    return new Session().fromJsonString(jsonString, options);
  }

  static equals(a: Session | PlainMessage<Session> | undefined, b: Session | PlainMessage<Session> | undefined): boolean {
    return proto3.util.equals(Session, a, b);
  }
}

