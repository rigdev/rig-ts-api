// @generated by protoc-gen-es v1.5.1 with parameter "target=ts"
// @generated from file api/v1/build/service.proto (package api.v1.build, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Build, Origin } from "../capsule/build_pb.js";
import { Pagination } from "../../../model/common_pb.js";

/**
 * @generated from message api.v1.build.GetImageInfoRequest
 */
export class GetImageInfoRequest extends Message<GetImageInfoRequest> {
  /**
   * @generated from field: string image = 1;
   */
  image = "";

  constructor(data?: PartialMessage<GetImageInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.GetImageInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetImageInfoRequest {
    return new GetImageInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetImageInfoRequest {
    return new GetImageInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetImageInfoRequest {
    return new GetImageInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetImageInfoRequest | PlainMessage<GetImageInfoRequest> | undefined, b: GetImageInfoRequest | PlainMessage<GetImageInfoRequest> | undefined): boolean {
    return proto3.util.equals(GetImageInfoRequest, a, b);
  }
}

/**
 * @generated from message api.v1.build.GetImageInfoResponse
 */
export class GetImageInfoResponse extends Message<GetImageInfoResponse> {
  /**
   * @generated from field: api.v1.build.ImageId image_id = 1;
   */
  imageId?: ImageId;

  /**
   * @generated from field: string image_string = 2;
   */
  imageString = "";

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 3;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: api.v1.capsule.Origin origin = 4;
   */
  origin?: Origin;

  constructor(data?: PartialMessage<GetImageInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.GetImageInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "image_id", kind: "message", T: ImageId },
    { no: 2, name: "image_string", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
    { no: 4, name: "origin", kind: "message", T: Origin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetImageInfoResponse {
    return new GetImageInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetImageInfoResponse {
    return new GetImageInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetImageInfoResponse {
    return new GetImageInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetImageInfoResponse | PlainMessage<GetImageInfoResponse> | undefined, b: GetImageInfoResponse | PlainMessage<GetImageInfoResponse> | undefined): boolean {
    return proto3.util.equals(GetImageInfoResponse, a, b);
  }
}

/**
 * @generated from message api.v1.build.ImageId
 */
export class ImageId extends Message<ImageId> {
  /**
   * @generated from field: string registry = 1;
   */
  registry = "";

  /**
   * @generated from field: string repository = 2;
   */
  repository = "";

  /**
   * @generated from field: string tag = 3;
   */
  tag = "";

  /**
   * @generated from field: string digest = 4;
   */
  digest = "";

  constructor(data?: PartialMessage<ImageId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.ImageId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "registry", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "digest", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageId {
    return new ImageId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageId {
    return new ImageId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageId {
    return new ImageId().fromJsonString(jsonString, options);
  }

  static equals(a: ImageId | PlainMessage<ImageId> | undefined, b: ImageId | PlainMessage<ImageId> | undefined): boolean {
    return proto3.util.equals(ImageId, a, b);
  }
}

/**
 * @generated from message api.v1.build.GetRepositoryInfoRequest
 */
export class GetRepositoryInfoRequest extends Message<GetRepositoryInfoRequest> {
  /**
   * @generated from field: string registry = 1;
   */
  registry = "";

  /**
   * @generated from field: string repository = 2;
   */
  repository = "";

  constructor(data?: PartialMessage<GetRepositoryInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.GetRepositoryInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "registry", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRepositoryInfoRequest {
    return new GetRepositoryInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRepositoryInfoRequest {
    return new GetRepositoryInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRepositoryInfoRequest {
    return new GetRepositoryInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetRepositoryInfoRequest | PlainMessage<GetRepositoryInfoRequest> | undefined, b: GetRepositoryInfoRequest | PlainMessage<GetRepositoryInfoRequest> | undefined): boolean {
    return proto3.util.equals(GetRepositoryInfoRequest, a, b);
  }
}

/**
 * @generated from message api.v1.build.GetRepositoryInfoResponse
 */
export class GetRepositoryInfoResponse extends Message<GetRepositoryInfoResponse> {
  /**
   * @generated from field: repeated api.v1.build.Tag tags = 1;
   */
  tags: Tag[] = [];

  constructor(data?: PartialMessage<GetRepositoryInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.GetRepositoryInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tags", kind: "message", T: Tag, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRepositoryInfoResponse {
    return new GetRepositoryInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRepositoryInfoResponse {
    return new GetRepositoryInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRepositoryInfoResponse {
    return new GetRepositoryInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetRepositoryInfoResponse | PlainMessage<GetRepositoryInfoResponse> | undefined, b: GetRepositoryInfoResponse | PlainMessage<GetRepositoryInfoResponse> | undefined): boolean {
    return proto3.util.equals(GetRepositoryInfoResponse, a, b);
  }
}

/**
 * @generated from message api.v1.build.Tag
 */
export class Tag extends Message<Tag> {
  /**
   * @generated from field: string tag = 1;
   */
  tag = "";

  /**
   * @generated from field: google.protobuf.Timestamp image_created_at = 2;
   */
  imageCreatedAt?: Timestamp;

  constructor(data?: PartialMessage<Tag>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.Tag";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "image_created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tag {
    return new Tag().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tag {
    return new Tag().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tag {
    return new Tag().fromJsonString(jsonString, options);
  }

  static equals(a: Tag | PlainMessage<Tag> | undefined, b: Tag | PlainMessage<Tag> | undefined): boolean {
    return proto3.util.equals(Tag, a, b);
  }
}

/**
 * @generated from message api.v1.build.CreateBuildRequest
 */
export class CreateBuildRequest extends Message<CreateBuildRequest> {
  /**
   * @generated from field: string capsule_id = 1;
   */
  capsuleId = "";

  /**
   * @generated from field: string image = 2;
   */
  image = "";

  /**
   * @generated from field: string digest = 3;
   */
  digest = "";

  /**
   * @generated from field: api.v1.capsule.Origin origin = 4;
   */
  origin?: Origin;

  /**
   * @generated from field: map<string, string> labels = 5;
   */
  labels: { [key: string]: string } = {};

  /**
   * @generated from field: bool skip_image_check = 6;
   */
  skipImageCheck = false;

  constructor(data?: PartialMessage<CreateBuildRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.CreateBuildRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "digest", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "origin", kind: "message", T: Origin },
    { no: 5, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 6, name: "skip_image_check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateBuildRequest {
    return new CreateBuildRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateBuildRequest {
    return new CreateBuildRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateBuildRequest {
    return new CreateBuildRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateBuildRequest | PlainMessage<CreateBuildRequest> | undefined, b: CreateBuildRequest | PlainMessage<CreateBuildRequest> | undefined): boolean {
    return proto3.util.equals(CreateBuildRequest, a, b);
  }
}

/**
 * @generated from message api.v1.build.CreateBuildResponse
 */
export class CreateBuildResponse extends Message<CreateBuildResponse> {
  /**
   * @generated from field: string build_id = 1;
   */
  buildId = "";

  /**
   * @generated from field: bool created_new_build = 2;
   */
  createdNewBuild = false;

  constructor(data?: PartialMessage<CreateBuildResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.CreateBuildResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "build_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "created_new_build", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateBuildResponse {
    return new CreateBuildResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateBuildResponse {
    return new CreateBuildResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateBuildResponse {
    return new CreateBuildResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateBuildResponse | PlainMessage<CreateBuildResponse> | undefined, b: CreateBuildResponse | PlainMessage<CreateBuildResponse> | undefined): boolean {
    return proto3.util.equals(CreateBuildResponse, a, b);
  }
}

/**
 * @generated from message api.v1.build.ListBuildsRequest
 */
export class ListBuildsRequest extends Message<ListBuildsRequest> {
  /**
   * @generated from field: string capsule_id = 1;
   */
  capsuleId = "";

  /**
   * @generated from field: model.Pagination pagination = 2;
   */
  pagination?: Pagination;

  constructor(data?: PartialMessage<ListBuildsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.ListBuildsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: Pagination },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBuildsRequest {
    return new ListBuildsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBuildsRequest {
    return new ListBuildsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBuildsRequest {
    return new ListBuildsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListBuildsRequest | PlainMessage<ListBuildsRequest> | undefined, b: ListBuildsRequest | PlainMessage<ListBuildsRequest> | undefined): boolean {
    return proto3.util.equals(ListBuildsRequest, a, b);
  }
}

/**
 * @generated from message api.v1.build.ListBuildsResponse
 */
export class ListBuildsResponse extends Message<ListBuildsResponse> {
  /**
   * @generated from field: repeated api.v1.capsule.Build builds = 1;
   */
  builds: Build[] = [];

  /**
   * @generated from field: uint64 total = 2;
   */
  total = protoInt64.zero;

  constructor(data?: PartialMessage<ListBuildsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.ListBuildsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "builds", kind: "message", T: Build, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBuildsResponse {
    return new ListBuildsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBuildsResponse {
    return new ListBuildsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBuildsResponse {
    return new ListBuildsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListBuildsResponse | PlainMessage<ListBuildsResponse> | undefined, b: ListBuildsResponse | PlainMessage<ListBuildsResponse> | undefined): boolean {
    return proto3.util.equals(ListBuildsResponse, a, b);
  }
}

/**
 * @generated from message api.v1.build.DeleteBuildRequest
 */
export class DeleteBuildRequest extends Message<DeleteBuildRequest> {
  /**
   * @generated from field: string capsule_id = 1;
   */
  capsuleId = "";

  /**
   * @generated from field: string build_id = 2;
   */
  buildId = "";

  constructor(data?: PartialMessage<DeleteBuildRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.DeleteBuildRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "build_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteBuildRequest {
    return new DeleteBuildRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteBuildRequest {
    return new DeleteBuildRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteBuildRequest {
    return new DeleteBuildRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteBuildRequest | PlainMessage<DeleteBuildRequest> | undefined, b: DeleteBuildRequest | PlainMessage<DeleteBuildRequest> | undefined): boolean {
    return proto3.util.equals(DeleteBuildRequest, a, b);
  }
}

/**
 * @generated from message api.v1.build.DeleteBuildResponse
 */
export class DeleteBuildResponse extends Message<DeleteBuildResponse> {
  constructor(data?: PartialMessage<DeleteBuildResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.DeleteBuildResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteBuildResponse {
    return new DeleteBuildResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteBuildResponse {
    return new DeleteBuildResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteBuildResponse {
    return new DeleteBuildResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteBuildResponse | PlainMessage<DeleteBuildResponse> | undefined, b: DeleteBuildResponse | PlainMessage<DeleteBuildResponse> | undefined): boolean {
    return proto3.util.equals(DeleteBuildResponse, a, b);
  }
}

/**
 * @generated from message api.v1.build.GetBuildRequest
 */
export class GetBuildRequest extends Message<GetBuildRequest> {
  /**
   * @generated from field: string capsule_id = 1;
   */
  capsuleId = "";

  /**
   * @generated from field: string build_id = 2;
   */
  buildId = "";

  constructor(data?: PartialMessage<GetBuildRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.GetBuildRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "build_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBuildRequest {
    return new GetBuildRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBuildRequest {
    return new GetBuildRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBuildRequest {
    return new GetBuildRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetBuildRequest | PlainMessage<GetBuildRequest> | undefined, b: GetBuildRequest | PlainMessage<GetBuildRequest> | undefined): boolean {
    return proto3.util.equals(GetBuildRequest, a, b);
  }
}

/**
 * @generated from message api.v1.build.GetBuildResponse
 */
export class GetBuildResponse extends Message<GetBuildResponse> {
  /**
   * @generated from field: api.v1.capsule.Build build = 1;
   */
  build?: Build;

  constructor(data?: PartialMessage<GetBuildResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.build.GetBuildResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "build", kind: "message", T: Build },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBuildResponse {
    return new GetBuildResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBuildResponse {
    return new GetBuildResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBuildResponse {
    return new GetBuildResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetBuildResponse | PlainMessage<GetBuildResponse> | undefined, b: GetBuildResponse | PlainMessage<GetBuildResponse> | undefined): boolean {
    return proto3.util.equals(GetBuildResponse, a, b);
  }
}

