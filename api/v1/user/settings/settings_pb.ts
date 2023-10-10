// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file api/v1/user/settings/settings.proto (package api.v1.user.settings, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { HashingConfig } from "../../../../model/common_pb.js";
import { LoginType, OauthProvider } from "../../../../model/auth_pb.js";
import { ProviderCredentials } from "../../../../model/credentials_pb.js";

/**
 * @generated from message api.v1.user.settings.Update
 */
export class Update extends Message<Update> {
  /**
   * @generated from oneof api.v1.user.settings.Update.field
   */
  field: {
    /**
     * @generated from field: bool allow_register = 1;
     */
    value: boolean;
    case: "allowRegister";
  } | {
    /**
     * @generated from field: bool is_verified_email_required = 2;
     */
    value: boolean;
    case: "isVerifiedEmailRequired";
  } | {
    /**
     * @generated from field: bool is_verified_phone_required = 3;
     */
    value: boolean;
    case: "isVerifiedPhoneRequired";
  } | {
    /**
     * @generated from field: google.protobuf.Duration access_token_ttl = 4;
     */
    value: Duration;
    case: "accessTokenTtl";
  } | {
    /**
     * @generated from field: google.protobuf.Duration refresh_token_ttl = 5;
     */
    value: Duration;
    case: "refreshTokenTtl";
  } | {
    /**
     * @generated from field: google.protobuf.Duration verification_code_ttl = 6;
     */
    value: Duration;
    case: "verificationCodeTtl";
  } | {
    /**
     * @generated from field: model.HashingConfig password_hashing = 7;
     */
    value: HashingConfig;
    case: "passwordHashing";
  } | {
    /**
     * @generated from field: api.v1.user.settings.Update.LoginMechanisms login_mechanisms = 8;
     */
    value: Update_LoginMechanisms;
    case: "loginMechanisms";
  } | {
    /**
     * @generated from field: api.v1.user.settings.Update.CallbackUrls callback_urls = 9;
     */
    value: Update_CallbackUrls;
    case: "callbackUrls";
  } | {
    /**
     * @generated from field: api.v1.user.settings.OauthProviderUpdate oauth_provider = 10;
     */
    value: OauthProviderUpdate;
    case: "oauthProvider";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Update>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.Update";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allow_register", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "field" },
    { no: 2, name: "is_verified_email_required", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "field" },
    { no: 3, name: "is_verified_phone_required", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "field" },
    { no: 4, name: "access_token_ttl", kind: "message", T: Duration, oneof: "field" },
    { no: 5, name: "refresh_token_ttl", kind: "message", T: Duration, oneof: "field" },
    { no: 6, name: "verification_code_ttl", kind: "message", T: Duration, oneof: "field" },
    { no: 7, name: "password_hashing", kind: "message", T: HashingConfig, oneof: "field" },
    { no: 8, name: "login_mechanisms", kind: "message", T: Update_LoginMechanisms, oneof: "field" },
    { no: 9, name: "callback_urls", kind: "message", T: Update_CallbackUrls, oneof: "field" },
    { no: 10, name: "oauth_provider", kind: "message", T: OauthProviderUpdate, oneof: "field" },
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
 * @generated from message api.v1.user.settings.Update.LoginMechanisms
 */
export class Update_LoginMechanisms extends Message<Update_LoginMechanisms> {
  /**
   * @generated from field: repeated model.LoginType login_mechanisms = 1;
   */
  loginMechanisms: LoginType[] = [];

  constructor(data?: PartialMessage<Update_LoginMechanisms>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.Update.LoginMechanisms";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login_mechanisms", kind: "enum", T: proto3.getEnumType(LoginType), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Update_LoginMechanisms {
    return new Update_LoginMechanisms().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Update_LoginMechanisms {
    return new Update_LoginMechanisms().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Update_LoginMechanisms {
    return new Update_LoginMechanisms().fromJsonString(jsonString, options);
  }

  static equals(a: Update_LoginMechanisms | PlainMessage<Update_LoginMechanisms> | undefined, b: Update_LoginMechanisms | PlainMessage<Update_LoginMechanisms> | undefined): boolean {
    return proto3.util.equals(Update_LoginMechanisms, a, b);
  }
}

/**
 * @generated from message api.v1.user.settings.Update.CallbackUrls
 */
export class Update_CallbackUrls extends Message<Update_CallbackUrls> {
  /**
   * @generated from field: repeated string callback_urls = 1;
   */
  callbackUrls: string[] = [];

  constructor(data?: PartialMessage<Update_CallbackUrls>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.Update.CallbackUrls";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "callback_urls", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Update_CallbackUrls {
    return new Update_CallbackUrls().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Update_CallbackUrls {
    return new Update_CallbackUrls().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Update_CallbackUrls {
    return new Update_CallbackUrls().fromJsonString(jsonString, options);
  }

  static equals(a: Update_CallbackUrls | PlainMessage<Update_CallbackUrls> | undefined, b: Update_CallbackUrls | PlainMessage<Update_CallbackUrls> | undefined): boolean {
    return proto3.util.equals(Update_CallbackUrls, a, b);
  }
}

/**
 * @generated from message api.v1.user.settings.RegisterMethod
 */
export class RegisterMethod extends Message<RegisterMethod> {
  /**
   * @generated from oneof api.v1.user.settings.RegisterMethod.method
   */
  method: {
    /**
     * @generated from field: api.v1.user.settings.RegisterMethod.System system = 1;
     */
    value: RegisterMethod_System;
    case: "system";
  } | {
    /**
     * @generated from field: api.v1.user.settings.RegisterMethod.Signup signup = 2;
     */
    value: RegisterMethod_Signup;
    case: "signup";
  } | {
    /**
     * @generated from field: model.OauthProvider oauth_provider = 3;
     */
    value: OauthProvider;
    case: "oauthProvider";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<RegisterMethod>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.RegisterMethod";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "system", kind: "message", T: RegisterMethod_System, oneof: "method" },
    { no: 2, name: "signup", kind: "message", T: RegisterMethod_Signup, oneof: "method" },
    { no: 3, name: "oauth_provider", kind: "enum", T: proto3.getEnumType(OauthProvider), oneof: "method" },
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
 * @generated from message api.v1.user.settings.RegisterMethod.System
 */
export class RegisterMethod_System extends Message<RegisterMethod_System> {
  constructor(data?: PartialMessage<RegisterMethod_System>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.RegisterMethod.System";
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
 * @generated from message api.v1.user.settings.RegisterMethod.Signup
 */
export class RegisterMethod_Signup extends Message<RegisterMethod_Signup> {
  /**
   * @generated from field: model.LoginType login_type = 1;
   */
  loginType = LoginType.UNSPECIFIED;

  constructor(data?: PartialMessage<RegisterMethod_Signup>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.RegisterMethod.Signup";
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

/**
 * @generated from message api.v1.user.settings.AuthMethod
 */
export class AuthMethod extends Message<AuthMethod> {
  /**
   * @generated from oneof api.v1.user.settings.AuthMethod.method
   */
  method: {
    /**
     * @generated from field: model.LoginType login_type = 1;
     */
    value: LoginType;
    case: "loginType";
  } | {
    /**
     * @generated from field: model.OauthProvider oauth_provider = 2;
     */
    value: OauthProvider;
    case: "oauthProvider";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<AuthMethod>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.AuthMethod";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login_type", kind: "enum", T: proto3.getEnumType(LoginType), oneof: "method" },
    { no: 2, name: "oauth_provider", kind: "enum", T: proto3.getEnumType(OauthProvider), oneof: "method" },
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
 * @generated from message api.v1.user.settings.Settings
 */
export class Settings extends Message<Settings> {
  /**
   * @generated from field: bool allow_register = 1;
   */
  allowRegister = false;

  /**
   * @generated from field: bool is_verified_email_required = 2;
   */
  isVerifiedEmailRequired = false;

  /**
   * @generated from field: bool is_verified_phone_required = 3;
   */
  isVerifiedPhoneRequired = false;

  /**
   * @generated from field: google.protobuf.Duration access_token_ttl = 4;
   */
  accessTokenTtl?: Duration;

  /**
   * @generated from field: google.protobuf.Duration refresh_token_ttl = 5;
   */
  refreshTokenTtl?: Duration;

  /**
   * @generated from field: google.protobuf.Duration verification_code_ttl = 6;
   */
  verificationCodeTtl?: Duration;

  /**
   * @generated from field: model.HashingConfig password_hashing = 7;
   */
  passwordHashing?: HashingConfig;

  /**
   * @generated from field: repeated model.LoginType login_mechanisms = 8;
   */
  loginMechanisms: LoginType[] = [];

  /**
   * @generated from field: api.v1.user.settings.OauthSettings oauth_settings = 9;
   */
  oauthSettings?: OauthSettings;

  /**
   * @generated from field: bool send_welcome_mail = 10;
   */
  sendWelcomeMail = false;

  constructor(data?: PartialMessage<Settings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.Settings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allow_register", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "is_verified_email_required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "is_verified_phone_required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "access_token_ttl", kind: "message", T: Duration },
    { no: 5, name: "refresh_token_ttl", kind: "message", T: Duration },
    { no: 6, name: "verification_code_ttl", kind: "message", T: Duration },
    { no: 7, name: "password_hashing", kind: "message", T: HashingConfig },
    { no: 8, name: "login_mechanisms", kind: "enum", T: proto3.getEnumType(LoginType), repeated: true },
    { no: 9, name: "oauth_settings", kind: "message", T: OauthSettings },
    { no: 10, name: "send_welcome_mail", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Settings {
    return new Settings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Settings {
    return new Settings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Settings {
    return new Settings().fromJsonString(jsonString, options);
  }

  static equals(a: Settings | PlainMessage<Settings> | undefined, b: Settings | PlainMessage<Settings> | undefined): boolean {
    return proto3.util.equals(Settings, a, b);
  }
}

/**
 * @generated from message api.v1.user.settings.OauthProviderSettings
 */
export class OauthProviderSettings extends Message<OauthProviderSettings> {
  /**
   * @generated from field: string secret_id = 1;
   */
  secretId = "";

  /**
   * @generated from field: string client_id = 2;
   */
  clientId = "";

  /**
   * @generated from field: string issuer = 3;
   */
  issuer = "";

  /**
   * @generated from field: bool allow_login = 4;
   */
  allowLogin = false;

  /**
   * @generated from field: bool allow_register = 5;
   */
  allowRegister = false;

  constructor(data?: PartialMessage<OauthProviderSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.OauthProviderSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "secret_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "issuer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "allow_login", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "allow_register", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OauthProviderSettings {
    return new OauthProviderSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OauthProviderSettings {
    return new OauthProviderSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OauthProviderSettings {
    return new OauthProviderSettings().fromJsonString(jsonString, options);
  }

  static equals(a: OauthProviderSettings | PlainMessage<OauthProviderSettings> | undefined, b: OauthProviderSettings | PlainMessage<OauthProviderSettings> | undefined): boolean {
    return proto3.util.equals(OauthProviderSettings, a, b);
  }
}

/**
 * @generated from message api.v1.user.settings.OauthProviderUpdate
 */
export class OauthProviderUpdate extends Message<OauthProviderUpdate> {
  /**
   * @generated from field: model.OauthProvider provider = 1;
   */
  provider = OauthProvider.UNSPECIFIED;

  /**
   * @generated from field: model.ProviderCredentials credentials = 2;
   */
  credentials?: ProviderCredentials;

  /**
   * @generated from field: bool allow_login = 3;
   */
  allowLogin = false;

  /**
   * @generated from field: bool allow_register = 4;
   */
  allowRegister = false;

  constructor(data?: PartialMessage<OauthProviderUpdate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.OauthProviderUpdate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "provider", kind: "enum", T: proto3.getEnumType(OauthProvider) },
    { no: 2, name: "credentials", kind: "message", T: ProviderCredentials },
    { no: 3, name: "allow_login", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "allow_register", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OauthProviderUpdate {
    return new OauthProviderUpdate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OauthProviderUpdate {
    return new OauthProviderUpdate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OauthProviderUpdate {
    return new OauthProviderUpdate().fromJsonString(jsonString, options);
  }

  static equals(a: OauthProviderUpdate | PlainMessage<OauthProviderUpdate> | undefined, b: OauthProviderUpdate | PlainMessage<OauthProviderUpdate> | undefined): boolean {
    return proto3.util.equals(OauthProviderUpdate, a, b);
  }
}

/**
 * @generated from message api.v1.user.settings.OauthSettings
 */
export class OauthSettings extends Message<OauthSettings> {
  /**
   * @generated from field: repeated string callback_urls = 2;
   */
  callbackUrls: string[] = [];

  /**
   * @generated from field: api.v1.user.settings.OauthProviderSettings google = 3;
   */
  google?: OauthProviderSettings;

  /**
   * @generated from field: api.v1.user.settings.OauthProviderSettings github = 4;
   */
  github?: OauthProviderSettings;

  /**
   * @generated from field: api.v1.user.settings.OauthProviderSettings facebook = 5;
   */
  facebook?: OauthProviderSettings;

  constructor(data?: PartialMessage<OauthSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.user.settings.OauthSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "callback_urls", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "google", kind: "message", T: OauthProviderSettings },
    { no: 4, name: "github", kind: "message", T: OauthProviderSettings },
    { no: 5, name: "facebook", kind: "message", T: OauthProviderSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OauthSettings {
    return new OauthSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OauthSettings {
    return new OauthSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OauthSettings {
    return new OauthSettings().fromJsonString(jsonString, options);
  }

  static equals(a: OauthSettings | PlainMessage<OauthSettings> | undefined, b: OauthSettings | PlainMessage<OauthSettings> | undefined): boolean {
    return proto3.util.equals(OauthSettings, a, b);
  }
}

