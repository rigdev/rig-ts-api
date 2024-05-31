// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/project/settings/settings.proto (package api.v1.project.settings, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Project wide settings.
 *
 * @generated from message api.v1.project.settings.Settings
 */
export class Settings extends Message<Settings> {
  /**
   * Docker registries for images.
   *
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
 * Docker registry.
 *
 * @generated from message api.v1.project.settings.DockerRegistry
 */
export class DockerRegistry extends Message<DockerRegistry> {
  /**
   * The secret id of the docker registry.
   *
   * @generated from field: string secret_id = 1;
   */
  secretId = "";

  /**
   * Host of the docker registry/
   *
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
 * Message for adding a docker registry
 *
 * @generated from message api.v1.project.settings.AddDockerRegistry
 */
export class AddDockerRegistry extends Message<AddDockerRegistry> {
  /**
   * The host of the docker registry.
   *
   * @generated from field: string host = 1;
   */
  host = "";

  /**
   * @generated from oneof api.v1.project.settings.AddDockerRegistry.field
   */
  field: {
    /**
     * authentication string to the docker registry.
     *
     * @generated from field: string auth = 2;
     */
    value: string;
    case: "auth";
  } | {
    /**
     * Credentials for the docker registry.
     *
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
 * Credentials for a docker registry.
 *
 * @generated from message api.v1.project.settings.DockerRegistryCredentials
 */
export class DockerRegistryCredentials extends Message<DockerRegistryCredentials> {
  /**
   * Username for the docker registry.
   *
   * @generated from field: string username = 1;
   */
  username = "";

  /**
   * Password for the docker registry.
   *
   * @generated from field: string password = 2;
   */
  password = "";

  /**
   * Email for the docker registry.
   *
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
 * Update message for project settings.
 *
 * @generated from message api.v1.project.settings.Update
 */
export class Update extends Message<Update> {
  /**
   * A number of updates to apply to the project settings.
   *
   * @generated from oneof api.v1.project.settings.Update.field
   */
  field: {
    /**
     * Add a docker registry.
     *
     * @generated from field: api.v1.project.settings.AddDockerRegistry add_docker_registry = 4;
     */
    value: AddDockerRegistry;
    case: "addDockerRegistry";
  } | {
    /**
     * Delete a docker registry.
     *
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

