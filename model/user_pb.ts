// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file model/user.proto (package model, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Author } from "./author_pb.js";
import { LoginType } from "./auth_pb.js";

/**
 * different fields that can identify a user.
 *
 * @generated from message model.UserIdentifier
 */
export class UserIdentifier extends Message<UserIdentifier> {
  /**
   * @generated from oneof model.UserIdentifier.identifier
   */
  identifier: {
    /**
     * username is unique.
     *
     * @generated from field: string username = 1;
     */
    value: string;
    case: "username";
  } | {
    /**
     * email is unique.
     *
     * @generated from field: string email = 2;
     */
    value: string;
    case: "email";
  } | {
    /**
     * Deprecated: text is not supported - phone number is unique.
     *
     * @generated from field: string phone_number = 3;
     */
    value: string;
    case: "phoneNumber";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<UserIdentifier>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.UserIdentifier";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "identifier" },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "identifier" },
    { no: 3, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "identifier" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserIdentifier {
    return new UserIdentifier().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserIdentifier {
    return new UserIdentifier().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserIdentifier {
    return new UserIdentifier().fromJsonString(jsonString, options);
  }

  static equals(a: UserIdentifier | PlainMessage<UserIdentifier> | undefined, b: UserIdentifier | PlainMessage<UserIdentifier> | undefined): boolean {
    return proto3.util.equals(UserIdentifier, a, b);
  }
}

/**
 * Userinfo - placed in models to prevent cyclic imports.
 *
 * @generated from message model.UserInfo
 */
export class UserInfo extends Message<UserInfo> {
  /**
   * email of the user.
   *
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * username of the user.
   *
   * @generated from field: string username = 2;
   */
  username = "";

  /**
   * Deprecated: text is not supported - phone number of the user.
   *
   * @generated from field: string phone_number = 3;
   */
  phoneNumber = "";

  /**
   * when the user was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;

  /**
   * groups the user belongs to.
   *
   * @generated from field: repeated string group_ids = 6;
   */
  groupIds: string[] = [];

  constructor(data?: PartialMessage<UserInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.UserInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "created_at", kind: "message", T: Timestamp },
    { no: 6, name: "group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserInfo {
    return new UserInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserInfo {
    return new UserInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserInfo {
    return new UserInfo().fromJsonString(jsonString, options);
  }

  static equals(a: UserInfo | PlainMessage<UserInfo> | undefined, b: UserInfo | PlainMessage<UserInfo> | undefined): boolean {
    return proto3.util.equals(UserInfo, a, b);
  }
}

/**
 * Entry model of a user - placed in models to prevent cyclic imports.
 *
 * @generated from message model.UserEntry
 */
export class UserEntry extends Message<UserEntry> {
  /**
   * unique id of the user.
   *
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * pretty printable name of a user.
   *
   * @generated from field: string printable_name = 2;
   */
  printableName = "";

  /**
   * how the user was registered.
   *
   * @generated from field: model.RegisterInfo register_info = 3;
   */
  registerInfo?: RegisterInfo;

  /**
   * whether the user is verified.
   *
   * @generated from field: bool verified = 4;
   */
  verified = false;

  /**
   * groups the user belongs to.
   *
   * @generated from field: repeated string group_ids = 5;
   */
  groupIds: string[] = [];

  /**
   * when the user was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 6;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<UserEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.UserEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "printable_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "register_info", kind: "message", T: RegisterInfo },
    { no: 4, name: "verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserEntry {
    return new UserEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserEntry {
    return new UserEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserEntry {
    return new UserEntry().fromJsonString(jsonString, options);
  }

  static equals(a: UserEntry | PlainMessage<UserEntry> | undefined, b: UserEntry | PlainMessage<UserEntry> | undefined): boolean {
    return proto3.util.equals(UserEntry, a, b);
  }
}

/**
 * Entry model of a service account - placed in models to prevent cyclic imports.
 *
 * @generated from message model.ServiceAccountEntry
 */
export class ServiceAccountEntry extends Message<ServiceAccountEntry> {
  /**
   * unique id of the service account.
   *
   * @generated from field: string service_account_id = 1;
   */
  serviceAccountId = "";

  /**
   * name of the service account.
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * client id of the service account.
   *
   * @generated from field: string client_id = 3;
   */
  clientId = "";

  /**
   * groups the service account belongs to.
   *
   * @generated from field: repeated string group_ids = 4;
   */
  groupIds: string[] = [];

  /**
   * when the service account was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;

  /**
   * who created the service account.
   *
   * @generated from field: model.Author created_by = 6;
   */
  createdBy?: Author;

  constructor(data?: PartialMessage<ServiceAccountEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.ServiceAccountEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "service_account_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "created_at", kind: "message", T: Timestamp },
    { no: 6, name: "created_by", kind: "message", T: Author },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceAccountEntry {
    return new ServiceAccountEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceAccountEntry {
    return new ServiceAccountEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceAccountEntry {
    return new ServiceAccountEntry().fromJsonString(jsonString, options);
  }

  static equals(a: ServiceAccountEntry | PlainMessage<ServiceAccountEntry> | undefined, b: ServiceAccountEntry | PlainMessage<ServiceAccountEntry> | undefined): boolean {
    return proto3.util.equals(ServiceAccountEntry, a, b);
  }
}

/**
 * Entry model of a group member - placed in models to prevent cyclic imports.
 *
 * @generated from message model.MemberEntry
 */
export class MemberEntry extends Message<MemberEntry> {
  /**
   * The user or service account.
   *
   * @generated from oneof model.MemberEntry.entry
   */
  entry: {
    /**
     * if the member is a user.
     *
     * @generated from field: model.UserEntry user = 1;
     */
    value: UserEntry;
    case: "user";
  } | {
    /**
     * if the member is a service account.
     *
     * @generated from field: model.ServiceAccountEntry service_account = 2;
     */
    value: ServiceAccountEntry;
    case: "serviceAccount";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * when the member joined the group.
   *
   * @generated from field: google.protobuf.Timestamp joined_at = 5;
   */
  joinedAt?: Timestamp;

  constructor(data?: PartialMessage<MemberEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.MemberEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: UserEntry, oneof: "entry" },
    { no: 2, name: "service_account", kind: "message", T: ServiceAccountEntry, oneof: "entry" },
    { no: 5, name: "joined_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MemberEntry {
    return new MemberEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MemberEntry {
    return new MemberEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MemberEntry {
    return new MemberEntry().fromJsonString(jsonString, options);
  }

  static equals(a: MemberEntry | PlainMessage<MemberEntry> | undefined, b: MemberEntry | PlainMessage<MemberEntry> | undefined): boolean {
    return proto3.util.equals(MemberEntry, a, b);
  }
}

/**
 * Registering information of a user.
 *
 * @generated from message model.RegisterInfo
 */
export class RegisterInfo extends Message<RegisterInfo> {
  /**
   * Who created the user.
   *
   * @generated from field: string creater_id = 1;
   */
  createrId = "";

  /**
   * How the user was registered.
   *
   * @generated from field: model.RegisterMethod method = 2;
   */
  method?: RegisterMethod;

  constructor(data?: PartialMessage<RegisterInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.RegisterInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creater_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "method", kind: "message", T: RegisterMethod },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterInfo {
    return new RegisterInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterInfo {
    return new RegisterInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterInfo {
    return new RegisterInfo().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterInfo | PlainMessage<RegisterInfo> | undefined, b: RegisterInfo | PlainMessage<RegisterInfo> | undefined): boolean {
    return proto3.util.equals(RegisterInfo, a, b);
  }
}

/**
 * Method used to register a user.
 *
 * @generated from message model.RegisterMethod
 */
export class RegisterMethod extends Message<RegisterMethod> {
  /**
   * @generated from oneof model.RegisterMethod.method
   */
  method: {
    /**
     * system created the user.
     *
     * @generated from field: model.RegisterMethod.System system = 1;
     */
    value: RegisterMethod_System;
    case: "system";
  } | {
    /**
     * user signed up.
     *
     * @generated from field: model.RegisterMethod.Signup signup = 2;
     */
    value: RegisterMethod_Signup;
    case: "signup";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<RegisterMethod>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.RegisterMethod";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "system", kind: "message", T: RegisterMethod_System, oneof: "method" },
    { no: 2, name: "signup", kind: "message", T: RegisterMethod_Signup, oneof: "method" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterMethod {
    return new RegisterMethod().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterMethod {
    return new RegisterMethod().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterMethod {
    return new RegisterMethod().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterMethod | PlainMessage<RegisterMethod> | undefined, b: RegisterMethod | PlainMessage<RegisterMethod> | undefined): boolean {
    return proto3.util.equals(RegisterMethod, a, b);
  }
}

/**
 * if the user was created by the system.
 *
 * @generated from message model.RegisterMethod.System
 */
export class RegisterMethod_System extends Message<RegisterMethod_System> {
  constructor(data?: PartialMessage<RegisterMethod_System>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.RegisterMethod.System";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterMethod_System {
    return new RegisterMethod_System().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterMethod_System {
    return new RegisterMethod_System().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterMethod_System {
    return new RegisterMethod_System().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterMethod_System | PlainMessage<RegisterMethod_System> | undefined, b: RegisterMethod_System | PlainMessage<RegisterMethod_System> | undefined): boolean {
    return proto3.util.equals(RegisterMethod_System, a, b);
  }
}

/**
 * if the user was created by signing up.
 *
 * @generated from message model.RegisterMethod.Signup
 */
export class RegisterMethod_Signup extends Message<RegisterMethod_Signup> {
  /**
   * The login type used to sign up.
   *
   * @generated from field: model.LoginType login_type = 1;
   */
  loginType = LoginType.UNSPECIFIED;

  constructor(data?: PartialMessage<RegisterMethod_Signup>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.RegisterMethod.Signup";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login_type", kind: "enum", T: proto3.getEnumType(LoginType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterMethod_Signup {
    return new RegisterMethod_Signup().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterMethod_Signup {
    return new RegisterMethod_Signup().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterMethod_Signup {
    return new RegisterMethod_Signup().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterMethod_Signup | PlainMessage<RegisterMethod_Signup> | undefined, b: RegisterMethod_Signup | PlainMessage<RegisterMethod_Signup> | undefined): boolean {
    return proto3.util.equals(RegisterMethod_Signup, a, b);
  }
}

