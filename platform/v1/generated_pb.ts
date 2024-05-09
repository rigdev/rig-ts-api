// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file platform/v1/generated.proto (package platform.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { CapsuleInterface, CapsuleScale, CronJob } from "../../v1alpha2/generated_pb.js";

/**
 * @generated from message platform.v1.CapsuleSet
 */
export class CapsuleSet extends Message<CapsuleSet> {
  /**
   * @generated from field: string kind = 1;
   */
  kind = "";

  /**
   * @generated from field: string apiVersion = 2;
   */
  apiVersion = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * @generated from field: string project = 4;
   */
  project = "";

  /**
   * @generated from field: platform.v1.CapsuleSpec spec = 5;
   */
  spec?: CapsuleSpec;

  /**
   * @generated from field: map<string, platform.v1.CapsuleSpec> environments = 6;
   */
  environments: { [key: string]: CapsuleSpec } = {};

  /**
   * @generated from field: repeated string environmentRefs = 7;
   */
  environmentRefs: string[] = [];

  constructor(data?: PartialMessage<CapsuleSet>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.v1.CapsuleSet";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apiVersion", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "spec", kind: "message", T: CapsuleSpec },
    { no: 6, name: "environments", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: CapsuleSpec} },
    { no: 7, name: "environmentRefs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CapsuleSet {
    return new CapsuleSet().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CapsuleSet {
    return new CapsuleSet().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CapsuleSet {
    return new CapsuleSet().fromJsonString(jsonString, options);
  }

  static equals(a: CapsuleSet | PlainMessage<CapsuleSet> | undefined, b: CapsuleSet | PlainMessage<CapsuleSet> | undefined): boolean {
    return proto3.util.equals(CapsuleSet, a, b);
  }
}

/**
 * @generated from message platform.v1.CapsuleSpec
 */
export class CapsuleSpec extends Message<CapsuleSpec> {
  /**
   * @generated from field: string kind = 1;
   */
  kind = "";

  /**
   * @generated from field: string apiVersion = 2;
   */
  apiVersion = "";

  /**
   * @generated from field: map<string, string> annotations = 11;
   */
  annotations: { [key: string]: string } = {};

  /**
   * @generated from field: string image = 3;
   */
  image = "";

  /**
   * @generated from field: string command = 4;
   */
  command = "";

  /**
   * @generated from field: repeated string args = 5;
   */
  args: string[] = [];

  /**
   * @generated from field: repeated v1alpha2.CapsuleInterface interfaces = 6;
   */
  interfaces: CapsuleInterface[] = [];

  /**
   * @generated from field: repeated platform.v1.File files = 7;
   */
  files: File[] = [];

  /**
   * @generated from field: platform.v1.EnvironmentVariables env = 12;
   */
  env?: EnvironmentVariables;

  /**
   * @generated from field: v1alpha2.CapsuleScale scale = 8;
   */
  scale?: CapsuleScale;

  /**
   * @generated from field: repeated v1alpha2.CronJob cronJobs = 10;
   */
  cronJobs: CronJob[] = [];

  /**
   * @generated from field: bool autoAddRigServiceAccounts = 13;
   */
  autoAddRigServiceAccounts = false;

  constructor(data?: PartialMessage<CapsuleSpec>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.v1.CapsuleSpec";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apiVersion", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "annotations", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "command", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "args", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "interfaces", kind: "message", T: CapsuleInterface, repeated: true },
    { no: 7, name: "files", kind: "message", T: File, repeated: true },
    { no: 12, name: "env", kind: "message", T: EnvironmentVariables },
    { no: 8, name: "scale", kind: "message", T: CapsuleScale },
    { no: 10, name: "cronJobs", kind: "message", T: CronJob, repeated: true },
    { no: 13, name: "autoAddRigServiceAccounts", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CapsuleSpec {
    return new CapsuleSpec().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CapsuleSpec {
    return new CapsuleSpec().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CapsuleSpec {
    return new CapsuleSpec().fromJsonString(jsonString, options);
  }

  static equals(a: CapsuleSpec | PlainMessage<CapsuleSpec> | undefined, b: CapsuleSpec | PlainMessage<CapsuleSpec> | undefined): boolean {
    return proto3.util.equals(CapsuleSpec, a, b);
  }
}

/**
 * @generated from message platform.v1.File
 */
export class File extends Message<File> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: bool asSecret = 3;
   */
  asSecret = false;

  /**
   * @generated from field: bytes bytes = 4;
   */
  bytes = new Uint8Array(0);

  /**
   * @generated from field: string string = 5;
   */
  string = "";

  constructor(data?: PartialMessage<File>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.v1.File";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "asSecret", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "string", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): File {
    return new File().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): File {
    return new File().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): File {
    return new File().fromJsonString(jsonString, options);
  }

  static equals(a: File | PlainMessage<File> | undefined, b: File | PlainMessage<File> | undefined): boolean {
    return proto3.util.equals(File, a, b);
  }
}

/**
 * @generated from message platform.v1.EnvironmentVariables
 */
export class EnvironmentVariables extends Message<EnvironmentVariables> {
  /**
   * @generated from field: map<string, string> direct = 1;
   */
  direct: { [key: string]: string } = {};

  /**
   * @generated from field: repeated platform.v1.EnvironmentSource sources = 2;
   */
  sources: EnvironmentSource[] = [];

  constructor(data?: PartialMessage<EnvironmentVariables>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.v1.EnvironmentVariables";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "direct", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 2, name: "sources", kind: "message", T: EnvironmentSource, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnvironmentVariables {
    return new EnvironmentVariables().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnvironmentVariables {
    return new EnvironmentVariables().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnvironmentVariables {
    return new EnvironmentVariables().fromJsonString(jsonString, options);
  }

  static equals(a: EnvironmentVariables | PlainMessage<EnvironmentVariables> | undefined, b: EnvironmentVariables | PlainMessage<EnvironmentVariables> | undefined): boolean {
    return proto3.util.equals(EnvironmentVariables, a, b);
  }
}

/**
 * @generated from message platform.v1.EnvironmentSource
 */
export class EnvironmentSource extends Message<EnvironmentSource> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string kind = 2;
   */
  kind = "";

  constructor(data?: PartialMessage<EnvironmentSource>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.v1.EnvironmentSource";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnvironmentSource {
    return new EnvironmentSource().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnvironmentSource {
    return new EnvironmentSource().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnvironmentSource {
    return new EnvironmentSource().fromJsonString(jsonString, options);
  }

  static equals(a: EnvironmentSource | PlainMessage<EnvironmentSource> | undefined, b: EnvironmentSource | PlainMessage<EnvironmentSource> | undefined): boolean {
    return proto3.util.equals(EnvironmentSource, a, b);
  }
}

/**
 * @generated from message platform.v1.Capsule
 */
export class Capsule extends Message<Capsule> {
  /**
   * @generated from field: string kind = 1;
   */
  kind = "";

  /**
   * @generated from field: string apiVersion = 2;
   */
  apiVersion = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * @generated from field: string project = 4;
   */
  project = "";

  /**
   * @generated from field: string environment = 5;
   */
  environment = "";

  /**
   * @generated from field: platform.v1.CapsuleSpec spec = 6;
   */
  spec?: CapsuleSpec;

  constructor(data?: PartialMessage<Capsule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.v1.Capsule";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apiVersion", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "environment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "spec", kind: "message", T: CapsuleSpec },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Capsule {
    return new Capsule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Capsule {
    return new Capsule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Capsule {
    return new Capsule().fromJsonString(jsonString, options);
  }

  static equals(a: Capsule | PlainMessage<Capsule> | undefined, b: Capsule | PlainMessage<Capsule> | undefined): boolean {
    return proto3.util.equals(Capsule, a, b);
  }
}

/**
 * @generated from message platform.v1.Environment
 */
export class Environment extends Message<Environment> {
  /**
   * @generated from field: string kind = 1;
   */
  kind = "";

  /**
   * @generated from field: string apiVersion = 2;
   */
  apiVersion = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * @generated from field: string namespaceTemplate = 4;
   */
  namespaceTemplate = "";

  /**
   * @generated from field: string operatorVersion = 5;
   */
  operatorVersion = "";

  /**
   * @generated from field: string cluster = 6;
   */
  cluster = "";

  /**
   * @generated from field: platform.v1.ProjEnvCapsuleBase spec = 7;
   */
  spec?: ProjEnvCapsuleBase;

  constructor(data?: PartialMessage<Environment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.v1.Environment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apiVersion", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "namespaceTemplate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "operatorVersion", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "cluster", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "spec", kind: "message", T: ProjEnvCapsuleBase },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Environment {
    return new Environment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Environment {
    return new Environment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Environment {
    return new Environment().fromJsonString(jsonString, options);
  }

  static equals(a: Environment | PlainMessage<Environment> | undefined, b: Environment | PlainMessage<Environment> | undefined): boolean {
    return proto3.util.equals(Environment, a, b);
  }
}

/**
 * @generated from message platform.v1.ProjEnvCapsuleBase
 */
export class ProjEnvCapsuleBase extends Message<ProjEnvCapsuleBase> {
  /**
   * @generated from field: repeated platform.v1.File files = 1;
   */
  files: File[] = [];

  /**
   * @generated from field: platform.v1.EnvironmentVariables env = 2;
   */
  env?: EnvironmentVariables;

  constructor(data?: PartialMessage<ProjEnvCapsuleBase>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.v1.ProjEnvCapsuleBase";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "files", kind: "message", T: File, repeated: true },
    { no: 2, name: "env", kind: "message", T: EnvironmentVariables },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjEnvCapsuleBase {
    return new ProjEnvCapsuleBase().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjEnvCapsuleBase {
    return new ProjEnvCapsuleBase().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjEnvCapsuleBase {
    return new ProjEnvCapsuleBase().fromJsonString(jsonString, options);
  }

  static equals(a: ProjEnvCapsuleBase | PlainMessage<ProjEnvCapsuleBase> | undefined, b: ProjEnvCapsuleBase | PlainMessage<ProjEnvCapsuleBase> | undefined): boolean {
    return proto3.util.equals(ProjEnvCapsuleBase, a, b);
  }
}

/**
 * @generated from message platform.v1.Project
 */
export class Project extends Message<Project> {
  /**
   * @generated from field: string kind = 1;
   */
  kind = "";

  /**
   * @generated from field: string apiVersion = 2;
   */
  apiVersion = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * @generated from field: platform.v1.ProjEnvCapsuleBase spec = 4;
   */
  spec?: ProjEnvCapsuleBase;

  constructor(data?: PartialMessage<Project>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.v1.Project";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "apiVersion", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "spec", kind: "message", T: ProjEnvCapsuleBase },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Project {
    return new Project().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Project {
    return new Project().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Project {
    return new Project().fromJsonString(jsonString, options);
  }

  static equals(a: Project | PlainMessage<Project> | undefined, b: Project | PlainMessage<Project> | undefined): boolean {
    return proto3.util.equals(Project, a, b);
  }
}

