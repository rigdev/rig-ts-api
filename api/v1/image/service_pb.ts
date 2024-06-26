// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/image/service.proto (package api.v1.image, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Image, Origin } from "../capsule/image_pb.js";
import { Pagination } from "../../../model/common_pb.js";

/**
 * Request to get information about an image.
 *
 * @generated from message api.v1.image.GetImageInfoRequest
 */
export class GetImageInfoRequest extends Message<GetImageInfoRequest> {
  /**
   * The image to get information about.
   *
   * @generated from field: string image = 1;
   */
  image = "";

  constructor(data?: PartialMessage<GetImageInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.GetImageInfoRequest";
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
 * Reponse to GetImageInfo request, containing information about an image.
 *
 * @generated from message api.v1.image.GetImageInfoResponse
 */
export class GetImageInfoResponse extends Message<GetImageInfoResponse> {
  /**
   * Image ID.
   *
   * @generated from field: api.v1.image.ImageId image_id = 1;
   */
  imageId?: ImageId;

  /**
   * Image from the request.
   *
   * @generated from field: string image_string = 2;
   */
  imageString = "";

  /**
   * When the image was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 3;
   */
  createdAt?: Timestamp;

  /**
   * Origin of the image.
   *
   * @generated from field: api.v1.capsule.Origin origin = 4;
   */
  origin?: Origin;

  constructor(data?: PartialMessage<GetImageInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.GetImageInfoResponse";
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
 * A collection of image properties that uniquely identifies an image.
 *
 * @generated from message api.v1.image.ImageId
 */
export class ImageId extends Message<ImageId> {
  /**
   * Docker Registry.
   *
   * @generated from field: string registry = 1;
   */
  registry = "";

  /**
   * Docker Repository.
   *
   * @generated from field: string repository = 2;
   */
  repository = "";

  /**
   * Tag of the image.
   *
   * @generated from field: string tag = 3;
   */
  tag = "";

  /**
   * Digest of the image.
   *
   * @generated from field: string digest = 4;
   */
  digest = "";

  constructor(data?: PartialMessage<ImageId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.ImageId";
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
 * Get repository information request.
 *
 * @generated from message api.v1.image.GetRepositoryInfoRequest
 */
export class GetRepositoryInfoRequest extends Message<GetRepositoryInfoRequest> {
  /**
   * Docker Registry
   *
   * @generated from field: string registry = 1;
   */
  registry = "";

  /**
   * Docker Repository
   *
   * @generated from field: string repository = 2;
   */
  repository = "";

  constructor(data?: PartialMessage<GetRepositoryInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.GetRepositoryInfoRequest";
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
 * Get repository information response.
 *
 * @generated from message api.v1.image.GetRepositoryInfoResponse
 */
export class GetRepositoryInfoResponse extends Message<GetRepositoryInfoResponse> {
  /**
   * Image Tags in the repository.
   *
   * @generated from field: repeated api.v1.image.Tag tags = 1;
   */
  tags: Tag[] = [];

  constructor(data?: PartialMessage<GetRepositoryInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.GetRepositoryInfoResponse";
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
 * A docker image tag.
 *
 * @generated from message api.v1.image.Tag
 */
export class Tag extends Message<Tag> {
  /**
   * Tag of the image.
   *
   * @generated from field: string tag = 1;
   */
  tag = "";

  /**
   * When the image was created.
   *
   * @generated from field: google.protobuf.Timestamp image_created_at = 2;
   */
  imageCreatedAt?: Timestamp;

  constructor(data?: PartialMessage<Tag>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.Tag";
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
 * Request to add a new image in a capsule.
 *
 * @generated from message api.v1.image.AddRequest
 */
export class AddRequest extends Message<AddRequest> {
  /**
   * Capsule to add the image in.
   *
   * @generated from field: string capsule_id = 1;
   */
  capsuleId = "";

  /**
   * Container image to add the image from.
   *
   * @generated from field: string image = 2;
   */
  image = "";

  /**
   * Digest of the image.
   *
   * @generated from field: string digest = 3;
   */
  digest = "";

  /**
   * Origin of the image
   *
   * @generated from field: api.v1.capsule.Origin origin = 4;
   */
  origin?: Origin;

  /**
   * Meta data to attach to the image.
   *
   * @generated from field: map<string, string> labels = 5;
   */
  labels: { [key: string]: string } = {};

  /**
   * if true skip check if image exists.
   *
   * @generated from field: bool skip_image_check = 6;
   */
  skipImageCheck = false;

  /**
   * Project ID.
   *
   * @generated from field: string project_id = 7;
   */
  projectId = "";

  constructor(data?: PartialMessage<AddRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.AddRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "digest", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "origin", kind: "message", T: Origin },
    { no: 5, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 6, name: "skip_image_check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddRequest {
    return new AddRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddRequest {
    return new AddRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddRequest {
    return new AddRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AddRequest | PlainMessage<AddRequest> | undefined, b: AddRequest | PlainMessage<AddRequest> | undefined): boolean {
    return proto3.util.equals(AddRequest, a, b);
  }
}

/**
 * Response to add a new image in a capsule.
 *
 * @generated from message api.v1.image.AddResponse
 */
export class AddResponse extends Message<AddResponse> {
  /**
   * ID of the image.
   *
   * @generated from field: string image_id = 1;
   */
  imageId = "";

  /**
   * True if a new image was added, false if the image already existed.
   *
   * @generated from field: bool added_new_image = 2;
   */
  addedNewImage = false;

  constructor(data?: PartialMessage<AddResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.AddResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "image_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "added_new_image", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddResponse {
    return new AddResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddResponse {
    return new AddResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddResponse {
    return new AddResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AddResponse | PlainMessage<AddResponse> | undefined, b: AddResponse | PlainMessage<AddResponse> | undefined): boolean {
    return proto3.util.equals(AddResponse, a, b);
  }
}

/**
 * Request to list images.
 *
 * @generated from message api.v1.image.ListRequest
 */
export class ListRequest extends Message<ListRequest> {
  /**
   * Capsule to list images in.
   *
   * @generated from field: string capsule_id = 1;
   */
  capsuleId = "";

  /**
   * Pagination options.
   *
   * @generated from field: model.Pagination pagination = 2;
   */
  pagination?: Pagination;

  /**
   * Project ID.
   *
   * @generated from field: string project_id = 3;
   */
  projectId = "";

  constructor(data?: PartialMessage<ListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.ListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: Pagination },
    { no: 3, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest {
    return new ListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest {
    return new ListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest {
    return new ListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListRequest | PlainMessage<ListRequest> | undefined, b: ListRequest | PlainMessage<ListRequest> | undefined): boolean {
    return proto3.util.equals(ListRequest, a, b);
  }
}

/**
 * Reponse to list images.
 *
 * @generated from message api.v1.image.ListResponse
 */
export class ListResponse extends Message<ListResponse> {
  /**
   * Images in the capsule.
   *
   * @generated from field: repeated api.v1.capsule.Image images = 1;
   */
  images: Image[] = [];

  /**
   * Total number of images in the capsule.
   *
   * @generated from field: uint64 total = 2;
   */
  total = protoInt64.zero;

  constructor(data?: PartialMessage<ListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.ListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "images", kind: "message", T: Image, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListResponse {
    return new ListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListResponse {
    return new ListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListResponse {
    return new ListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListResponse | PlainMessage<ListResponse> | undefined, b: ListResponse | PlainMessage<ListResponse> | undefined): boolean {
    return proto3.util.equals(ListResponse, a, b);
  }
}

/**
 * Request to delete a image.
 *
 * @generated from message api.v1.image.DeleteRequest
 */
export class DeleteRequest extends Message<DeleteRequest> {
  /**
   * Capsule to delete the image from.
   *
   * @generated from field: string capsule_id = 1;
   */
  capsuleId = "";

  /**
   * Image to delete.
   *
   * @generated from field: string image_id = 2;
   */
  imageId = "";

  /**
   * Project ID.
   *
   * @generated from field: string project_id = 3;
   */
  projectId = "";

  constructor(data?: PartialMessage<DeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.DeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "image_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * Empty response to delete a image.
 *
 * @generated from message api.v1.image.DeleteResponse
 */
export class DeleteResponse extends Message<DeleteResponse> {
  constructor(data?: PartialMessage<DeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.DeleteResponse";
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
 * Request to get a image.
 *
 * @generated from message api.v1.image.GetRequest
 */
export class GetRequest extends Message<GetRequest> {
  /**
   * Capsule to get the image from.
   *
   * @generated from field: string capsule_id = 1;
   */
  capsuleId = "";

  /**
   * Image to get.
   *
   * @generated from field: string image_id = 2;
   */
  imageId = "";

  /**
   * Project ID.
   *
   * @generated from field: string project_id = 3;
   */
  projectId = "";

  constructor(data?: PartialMessage<GetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.GetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "image_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * Response to get a image.
 *
 * @generated from message api.v1.image.GetResponse
 */
export class GetResponse extends Message<GetResponse> {
  /**
   * The image to retrieve
   *
   * @generated from field: api.v1.capsule.Image image = 1;
   */
  image?: Image;

  constructor(data?: PartialMessage<GetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.image.GetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "image", kind: "message", T: Image },
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

