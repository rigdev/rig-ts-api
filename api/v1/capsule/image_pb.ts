// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file api/v1/capsule/image.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Author } from "../../../model/author_pb.js";

/**
 * Image is an cross-environment abstraction of an container image along with
 * metadata for a capsule.
 *
 * @generated from message api.v1.capsule.Image
 */
export class Image extends Message<Image> {
  /**
   * unique identifier for the image
   *
   * @generated from field: string image_id = 2;
   */
  imageId = "";

  /**
   * digest of the image
   *
   * @generated from field: string digest = 7;
   */
  digest = "";

  /**
   * repository of the image
   *
   * @generated from field: string repository = 8;
   */
  repository = "";

  /**
   * tag of the image
   *
   * @generated from field: string tag = 9;
   */
  tag = "";

  /**
   * user who created the image
   *
   * @generated from field: model.Author created_by = 3;
   */
  createdBy?: Author;

  /**
   * time the image was created
   *
   * @generated from field: google.protobuf.Timestamp created_at = 4;
   */
  createdAt?: Timestamp;

  /**
   * origin of the image
   *
   * @generated from field: api.v1.capsule.Origin origin = 5;
   */
  origin?: Origin;

  /**
   * labels of the image
   *
   * @generated from field: map<string, string> labels = 6;
   */
  labels: { [key: string]: string } = {};

  constructor(data?: PartialMessage<Image>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Image";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "image_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "digest", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_by", kind: "message", T: Author },
    { no: 4, name: "created_at", kind: "message", T: Timestamp },
    { no: 5, name: "origin", kind: "message", T: Origin },
    { no: 6, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Image {
    return new Image().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Image {
    return new Image().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Image {
    return new Image().fromJsonString(jsonString, options);
  }

  static equals(a: Image | PlainMessage<Image> | undefined, b: Image | PlainMessage<Image> | undefined): boolean {
    return proto3.util.equals(Image, a, b);
  }
}

/**
 * GitReference is an origin of a image.
 *
 * @generated from message api.v1.capsule.GitReference
 */
export class GitReference extends Message<GitReference> {
  /**
   * The url of the git repository
   *
   * @generated from field: string repository_url = 1;
   */
  repositoryUrl = "";

  /**
   * The commit sha of the git repository
   *
   * @generated from field: string commit_sha = 2;
   */
  commitSha = "";

  /**
   * The commit url of the git repository
   *
   * @generated from field: string commit_url = 3;
   */
  commitUrl = "";

  constructor(data?: PartialMessage<GitReference>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.GitReference";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repository_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "commit_sha", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "commit_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GitReference {
    return new GitReference().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GitReference {
    return new GitReference().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GitReference {
    return new GitReference().fromJsonString(jsonString, options);
  }

  static equals(a: GitReference | PlainMessage<GitReference> | undefined, b: GitReference | PlainMessage<GitReference> | undefined): boolean {
    return proto3.util.equals(GitReference, a, b);
  }
}

/**
 * Where the image came from
 *
 * @generated from message api.v1.capsule.Origin
 */
export class Origin extends Message<Origin> {
  /**
   * @generated from oneof api.v1.capsule.Origin.kind
   */
  kind: {
    /**
     * The image came from a git repository
     *
     * @generated from field: api.v1.capsule.GitReference git_reference = 1;
     */
    value: GitReference;
    case: "gitReference";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Origin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Origin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "git_reference", kind: "message", T: GitReference, oneof: "kind" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Origin {
    return new Origin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Origin {
    return new Origin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Origin {
    return new Origin().fromJsonString(jsonString, options);
  }

  static equals(a: Origin | PlainMessage<Origin> | undefined, b: Origin | PlainMessage<Origin> | undefined): boolean {
    return proto3.util.equals(Origin, a, b);
  }
}

