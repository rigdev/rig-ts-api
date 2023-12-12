// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/project/settings/settings.proto (package api.v1.project.settings, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ProviderCredentials } from "../../../../model/credentials_pb.js";

/**
 * @generated from enum api.v1.project.settings.TemplateType
 */
export enum TemplateType {
  /**
   * @generated from enum value: TEMPLATE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TEMPLATE_TYPE_WELCOME_EMAIL = 1;
   */
  WELCOME_EMAIL = 1,

  /**
   * @generated from enum value: TEMPLATE_TYPE_EMAIL_VERIFICATION = 2;
   */
  EMAIL_VERIFICATION = 2,

  /**
   * @generated from enum value: TEMPLATE_TYPE_EMAIL_RESET_PASSWORD = 3;
   */
  EMAIL_RESET_PASSWORD = 3,

  /**
   * @generated from enum value: TEMPLATE_TYPE_WELCOME_TEXT = 4;
   */
  WELCOME_TEXT = 4,

  /**
   * @generated from enum value: TEMPLATE_TYPE_TEXT_VERIFICATION = 5;
   */
  TEXT_VERIFICATION = 5,

  /**
   * @generated from enum value: TEMPLATE_TYPE_TEXT_RESET_PASSWORD = 6;
   */
  TEXT_RESET_PASSWORD = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(TemplateType)
proto3.util.setEnumType(TemplateType, "api.v1.project.settings.TemplateType", [
  { no: 0, name: "TEMPLATE_TYPE_UNSPECIFIED" },
  { no: 1, name: "TEMPLATE_TYPE_WELCOME_EMAIL" },
  { no: 2, name: "TEMPLATE_TYPE_EMAIL_VERIFICATION" },
  { no: 3, name: "TEMPLATE_TYPE_EMAIL_RESET_PASSWORD" },
  { no: 4, name: "TEMPLATE_TYPE_WELCOME_TEXT" },
  { no: 5, name: "TEMPLATE_TYPE_TEXT_VERIFICATION" },
  { no: 6, name: "TEMPLATE_TYPE_TEXT_RESET_PASSWORD" },
]);

/**
 * @generated from message api.v1.project.settings.DefaultInstance
 */
export class DefaultInstance extends Message<DefaultInstance> {
  constructor(data?: PartialMessage<DefaultInstance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.DefaultInstance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DefaultInstance {
    return new DefaultInstance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DefaultInstance {
    return new DefaultInstance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DefaultInstance {
    return new DefaultInstance().fromJsonString(jsonString, options);
  }

  static equals(a: DefaultInstance | PlainMessage<DefaultInstance> | undefined, b: DefaultInstance | PlainMessage<DefaultInstance> | undefined): boolean {
    return proto3.util.equals(DefaultInstance, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.MailjetInstance
 */
export class MailjetInstance extends Message<MailjetInstance> {
  constructor(data?: PartialMessage<MailjetInstance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.MailjetInstance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MailjetInstance {
    return new MailjetInstance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MailjetInstance {
    return new MailjetInstance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MailjetInstance {
    return new MailjetInstance().fromJsonString(jsonString, options);
  }

  static equals(a: MailjetInstance | PlainMessage<MailjetInstance> | undefined, b: MailjetInstance | PlainMessage<MailjetInstance> | undefined): boolean {
    return proto3.util.equals(MailjetInstance, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.TwilioInstance
 */
export class TwilioInstance extends Message<TwilioInstance> {
  constructor(data?: PartialMessage<TwilioInstance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.TwilioInstance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TwilioInstance {
    return new TwilioInstance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TwilioInstance {
    return new TwilioInstance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TwilioInstance {
    return new TwilioInstance().fromJsonString(jsonString, options);
  }

  static equals(a: TwilioInstance | PlainMessage<TwilioInstance> | undefined, b: TwilioInstance | PlainMessage<TwilioInstance> | undefined): boolean {
    return proto3.util.equals(TwilioInstance, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.SmtpInstance
 */
export class SmtpInstance extends Message<SmtpInstance> {
  /**
   * @generated from field: string host = 1;
   */
  host = "";

  /**
   * @generated from field: int64 port = 2;
   */
  port = protoInt64.zero;

  constructor(data?: PartialMessage<SmtpInstance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.SmtpInstance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "port", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SmtpInstance {
    return new SmtpInstance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SmtpInstance {
    return new SmtpInstance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SmtpInstance {
    return new SmtpInstance().fromJsonString(jsonString, options);
  }

  static equals(a: SmtpInstance | PlainMessage<SmtpInstance> | undefined, b: SmtpInstance | PlainMessage<SmtpInstance> | undefined): boolean {
    return proto3.util.equals(SmtpInstance, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.EmailInstance
 */
export class EmailInstance extends Message<EmailInstance> {
  /**
   * @generated from oneof api.v1.project.settings.EmailInstance.instance
   */
  instance: {
    /**
     * @generated from field: api.v1.project.settings.DefaultInstance default = 1;
     */
    value: DefaultInstance;
    case: "default";
  } | {
    /**
     * @generated from field: api.v1.project.settings.MailjetInstance mailjet = 2;
     */
    value: MailjetInstance;
    case: "mailjet";
  } | {
    /**
     * @generated from field: api.v1.project.settings.SmtpInstance smtp = 3;
     */
    value: SmtpInstance;
    case: "smtp";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<EmailInstance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.EmailInstance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "default", kind: "message", T: DefaultInstance, oneof: "instance" },
    { no: 2, name: "mailjet", kind: "message", T: MailjetInstance, oneof: "instance" },
    { no: 3, name: "smtp", kind: "message", T: SmtpInstance, oneof: "instance" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmailInstance {
    return new EmailInstance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmailInstance {
    return new EmailInstance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmailInstance {
    return new EmailInstance().fromJsonString(jsonString, options);
  }

  static equals(a: EmailInstance | PlainMessage<EmailInstance> | undefined, b: EmailInstance | PlainMessage<EmailInstance> | undefined): boolean {
    return proto3.util.equals(EmailInstance, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.TextInstance
 */
export class TextInstance extends Message<TextInstance> {
  /**
   * @generated from oneof api.v1.project.settings.TextInstance.instance
   */
  instance: {
    /**
     * @generated from field: api.v1.project.settings.DefaultInstance default = 1;
     */
    value: DefaultInstance;
    case: "default";
  } | {
    /**
     * @generated from field: api.v1.project.settings.TwilioInstance twilio = 2;
     */
    value: TwilioInstance;
    case: "twilio";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<TextInstance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.TextInstance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "default", kind: "message", T: DefaultInstance, oneof: "instance" },
    { no: 2, name: "twilio", kind: "message", T: TwilioInstance, oneof: "instance" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TextInstance {
    return new TextInstance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TextInstance {
    return new TextInstance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TextInstance {
    return new TextInstance().fromJsonString(jsonString, options);
  }

  static equals(a: TextInstance | PlainMessage<TextInstance> | undefined, b: TextInstance | PlainMessage<TextInstance> | undefined): boolean {
    return proto3.util.equals(TextInstance, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.EmailProvider
 */
export class EmailProvider extends Message<EmailProvider> {
  /**
   * @generated from field: string from = 1;
   */
  from = "";

  /**
   * @generated from field: model.ProviderCredentials credentials = 2;
   */
  credentials?: ProviderCredentials;

  /**
   * @generated from field: api.v1.project.settings.EmailInstance instance = 3;
   */
  instance?: EmailInstance;

  constructor(data?: PartialMessage<EmailProvider>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.EmailProvider";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "credentials", kind: "message", T: ProviderCredentials },
    { no: 3, name: "instance", kind: "message", T: EmailInstance },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmailProvider {
    return new EmailProvider().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmailProvider {
    return new EmailProvider().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmailProvider {
    return new EmailProvider().fromJsonString(jsonString, options);
  }

  static equals(a: EmailProvider | PlainMessage<EmailProvider> | undefined, b: EmailProvider | PlainMessage<EmailProvider> | undefined): boolean {
    return proto3.util.equals(EmailProvider, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.EmailProviderEntry
 */
export class EmailProviderEntry extends Message<EmailProviderEntry> {
  /**
   * @generated from field: string from = 1;
   */
  from = "";

  /**
   * @generated from field: string client_id = 2;
   */
  clientId = "";

  /**
   * @generated from field: string secret_id = 3;
   */
  secretId = "";

  /**
   * @generated from field: api.v1.project.settings.EmailInstance instance = 4;
   */
  instance?: EmailInstance;

  constructor(data?: PartialMessage<EmailProviderEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.EmailProviderEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "secret_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "instance", kind: "message", T: EmailInstance },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmailProviderEntry {
    return new EmailProviderEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmailProviderEntry {
    return new EmailProviderEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmailProviderEntry {
    return new EmailProviderEntry().fromJsonString(jsonString, options);
  }

  static equals(a: EmailProviderEntry | PlainMessage<EmailProviderEntry> | undefined, b: EmailProviderEntry | PlainMessage<EmailProviderEntry> | undefined): boolean {
    return proto3.util.equals(EmailProviderEntry, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.TextProvider
 */
export class TextProvider extends Message<TextProvider> {
  /**
   * @generated from field: string from = 1;
   */
  from = "";

  /**
   * @generated from field: model.ProviderCredentials credentials = 2;
   */
  credentials?: ProviderCredentials;

  /**
   * @generated from field: api.v1.project.settings.TextInstance instance = 3;
   */
  instance?: TextInstance;

  constructor(data?: PartialMessage<TextProvider>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.TextProvider";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "credentials", kind: "message", T: ProviderCredentials },
    { no: 3, name: "instance", kind: "message", T: TextInstance },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TextProvider {
    return new TextProvider().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TextProvider {
    return new TextProvider().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TextProvider {
    return new TextProvider().fromJsonString(jsonString, options);
  }

  static equals(a: TextProvider | PlainMessage<TextProvider> | undefined, b: TextProvider | PlainMessage<TextProvider> | undefined): boolean {
    return proto3.util.equals(TextProvider, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.TextProviderEntry
 */
export class TextProviderEntry extends Message<TextProviderEntry> {
  /**
   * @generated from field: string from = 1;
   */
  from = "";

  /**
   * @generated from field: string client_id = 2;
   */
  clientId = "";

  /**
   * @generated from field: string secret_id = 3;
   */
  secretId = "";

  /**
   * @generated from field: api.v1.project.settings.TextInstance instance = 4;
   */
  instance?: TextInstance;

  constructor(data?: PartialMessage<TextProviderEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.TextProviderEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "secret_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "instance", kind: "message", T: TextInstance },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TextProviderEntry {
    return new TextProviderEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TextProviderEntry {
    return new TextProviderEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TextProviderEntry {
    return new TextProviderEntry().fromJsonString(jsonString, options);
  }

  static equals(a: TextProviderEntry | PlainMessage<TextProviderEntry> | undefined, b: TextProviderEntry | PlainMessage<TextProviderEntry> | undefined): boolean {
    return proto3.util.equals(TextProviderEntry, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.Template
 */
export class Template extends Message<Template> {
  /**
   * @generated from field: string body = 1;
   */
  body = "";

  /**
   * @generated from field: string subject = 2;
   */
  subject = "";

  /**
   * @generated from field: api.v1.project.settings.TemplateType type = 3;
   */
  type = TemplateType.UNSPECIFIED;

  /**
   * @generated from field: repeated string format = 4;
   */
  format: string[] = [];

  constructor(data?: PartialMessage<Template>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.Template";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subject", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(TemplateType) },
    { no: 4, name: "format", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Template {
    return new Template().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Template {
    return new Template().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Template {
    return new Template().fromJsonString(jsonString, options);
  }

  static equals(a: Template | PlainMessage<Template> | undefined, b: Template | PlainMessage<Template> | undefined): boolean {
    return proto3.util.equals(Template, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.Templates
 */
export class Templates extends Message<Templates> {
  /**
   * @generated from field: api.v1.project.settings.Template welcome_email = 1;
   */
  welcomeEmail?: Template;

  /**
   * @generated from field: api.v1.project.settings.Template welcome_text = 2;
   */
  welcomeText?: Template;

  /**
   * @generated from field: api.v1.project.settings.Template reset_password_email = 3;
   */
  resetPasswordEmail?: Template;

  /**
   * @generated from field: api.v1.project.settings.Template reset_password_text = 4;
   */
  resetPasswordText?: Template;

  /**
   * @generated from field: api.v1.project.settings.Template verify_email = 5;
   */
  verifyEmail?: Template;

  /**
   * @generated from field: api.v1.project.settings.Template verify_phone_number = 6;
   */
  verifyPhoneNumber?: Template;

  constructor(data?: PartialMessage<Templates>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.Templates";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "welcome_email", kind: "message", T: Template },
    { no: 2, name: "welcome_text", kind: "message", T: Template },
    { no: 3, name: "reset_password_email", kind: "message", T: Template },
    { no: 4, name: "reset_password_text", kind: "message", T: Template },
    { no: 5, name: "verify_email", kind: "message", T: Template },
    { no: 6, name: "verify_phone_number", kind: "message", T: Template },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Templates {
    return new Templates().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Templates {
    return new Templates().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Templates {
    return new Templates().fromJsonString(jsonString, options);
  }

  static equals(a: Templates | PlainMessage<Templates> | undefined, b: Templates | PlainMessage<Templates> | undefined): boolean {
    return proto3.util.equals(Templates, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.Settings
 */
export class Settings extends Message<Settings> {
  /**
   * @generated from field: api.v1.project.settings.EmailProviderEntry email_provider = 1;
   */
  emailProvider?: EmailProviderEntry;

  /**
   * @generated from field: api.v1.project.settings.TextProviderEntry text_provider = 2;
   */
  textProvider?: TextProviderEntry;

  /**
   * @generated from field: api.v1.project.settings.Templates templates = 3;
   */
  templates?: Templates;

  /**
   * @generated from field: repeated api.v1.project.settings.DockerRegistry docker_registries = 4;
   */
  dockerRegistries: DockerRegistry[] = [];

  constructor(data?: PartialMessage<Settings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.Settings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email_provider", kind: "message", T: EmailProviderEntry },
    { no: 2, name: "text_provider", kind: "message", T: TextProviderEntry },
    { no: 3, name: "templates", kind: "message", T: Templates },
    { no: 4, name: "docker_registries", kind: "message", T: DockerRegistry, repeated: true },
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
 * @generated from message api.v1.project.settings.DockerRegistry
 */
export class DockerRegistry extends Message<DockerRegistry> {
  /**
   * @generated from field: string secret_id = 1;
   */
  secretId = "";

  /**
   * @generated from field: string host = 2;
   */
  host = "";

  constructor(data?: PartialMessage<DockerRegistry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.DockerRegistry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "secret_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DockerRegistry {
    return new DockerRegistry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DockerRegistry {
    return new DockerRegistry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DockerRegistry {
    return new DockerRegistry().fromJsonString(jsonString, options);
  }

  static equals(a: DockerRegistry | PlainMessage<DockerRegistry> | undefined, b: DockerRegistry | PlainMessage<DockerRegistry> | undefined): boolean {
    return proto3.util.equals(DockerRegistry, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.AddDockerRegistry
 */
export class AddDockerRegistry extends Message<AddDockerRegistry> {
  /**
   * @generated from field: string host = 1;
   */
  host = "";

  /**
   * @generated from oneof api.v1.project.settings.AddDockerRegistry.field
   */
  field: {
    /**
     * @generated from field: string auth = 2;
     */
    value: string;
    case: "auth";
  } | {
    /**
     * @generated from field: api.v1.project.settings.DockerRegistryCredentials credentials = 3;
     */
    value: DockerRegistryCredentials;
    case: "credentials";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<AddDockerRegistry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.AddDockerRegistry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "auth", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
    { no: 3, name: "credentials", kind: "message", T: DockerRegistryCredentials, oneof: "field" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddDockerRegistry {
    return new AddDockerRegistry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddDockerRegistry {
    return new AddDockerRegistry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddDockerRegistry {
    return new AddDockerRegistry().fromJsonString(jsonString, options);
  }

  static equals(a: AddDockerRegistry | PlainMessage<AddDockerRegistry> | undefined, b: AddDockerRegistry | PlainMessage<AddDockerRegistry> | undefined): boolean {
    return proto3.util.equals(AddDockerRegistry, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.DockerRegistryCredentials
 */
export class DockerRegistryCredentials extends Message<DockerRegistryCredentials> {
  /**
   * @generated from field: string username = 1;
   */
  username = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  /**
   * @generated from field: string email = 3;
   */
  email = "";

  constructor(data?: PartialMessage<DockerRegistryCredentials>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.DockerRegistryCredentials";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DockerRegistryCredentials {
    return new DockerRegistryCredentials().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DockerRegistryCredentials {
    return new DockerRegistryCredentials().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DockerRegistryCredentials {
    return new DockerRegistryCredentials().fromJsonString(jsonString, options);
  }

  static equals(a: DockerRegistryCredentials | PlainMessage<DockerRegistryCredentials> | undefined, b: DockerRegistryCredentials | PlainMessage<DockerRegistryCredentials> | undefined): boolean {
    return proto3.util.equals(DockerRegistryCredentials, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.Update
 */
export class Update extends Message<Update> {
  /**
   * @generated from oneof api.v1.project.settings.Update.field
   */
  field: {
    /**
     * @generated from field: api.v1.project.settings.EmailProvider email_provider = 1;
     */
    value: EmailProvider;
    case: "emailProvider";
  } | {
    /**
     * @generated from field: api.v1.project.settings.TextProvider text_provider = 2;
     */
    value: TextProvider;
    case: "textProvider";
  } | {
    /**
     * @generated from field: api.v1.project.settings.Template template = 3;
     */
    value: Template;
    case: "template";
  } | {
    /**
     * @generated from field: api.v1.project.settings.AddDockerRegistry add_docker_registry = 4;
     */
    value: AddDockerRegistry;
    case: "addDockerRegistry";
  } | {
    /**
     * @generated from field: string delete_docker_registry = 5;
     */
    value: string;
    case: "deleteDockerRegistry";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Update>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.Update";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email_provider", kind: "message", T: EmailProvider, oneof: "field" },
    { no: 2, name: "text_provider", kind: "message", T: TextProvider, oneof: "field" },
    { no: 3, name: "template", kind: "message", T: Template, oneof: "field" },
    { no: 4, name: "add_docker_registry", kind: "message", T: AddDockerRegistry, oneof: "field" },
    { no: 5, name: "delete_docker_registry", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "field" },
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

