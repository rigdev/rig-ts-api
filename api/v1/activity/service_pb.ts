// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/activity/service.proto (package api.v1.activity, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Pagination } from "../../../model/common_pb.js";
import { Activity } from "./activity_pb.js";

/**
 * @generated from message api.v1.activity.GetActivitiesRequest
 */
export class GetActivitiesRequest extends Message<GetActivitiesRequest> {
  /**
   * @generated from field: google.protobuf.Timestamp from = 1;
   */
  from?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp to = 2;
   */
  to?: Timestamp;

  /**
   * @generated from field: model.Pagination pagination = 3;
   */
  pagination?: Pagination;

  /**
   * @generated from field: api.v1.activity.ActivityFilter filter = 4;
   */
  filter?: ActivityFilter;

  constructor(data?: PartialMessage<GetActivitiesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.activity.GetActivitiesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "message", T: Timestamp },
    { no: 2, name: "to", kind: "message", T: Timestamp },
    { no: 3, name: "pagination", kind: "message", T: Pagination },
    { no: 4, name: "filter", kind: "message", T: ActivityFilter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActivitiesRequest {
    return new GetActivitiesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActivitiesRequest {
    return new GetActivitiesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActivitiesRequest {
    return new GetActivitiesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetActivitiesRequest | PlainMessage<GetActivitiesRequest> | undefined, b: GetActivitiesRequest | PlainMessage<GetActivitiesRequest> | undefined): boolean {
    return proto3.util.equals(GetActivitiesRequest, a, b);
  }
}

/**
 * @generated from message api.v1.activity.ActivityFilter
 */
export class ActivityFilter extends Message<ActivityFilter> {
  /**
   * @generated from field: string project_filter = 1;
   */
  projectFilter = "";

  /**
   * @generated from field: string environment_filter = 2;
   */
  environmentFilter = "";

  /**
   * @generated from field: string capsule_filter = 3;
   */
  capsuleFilter = "";

  /**
   * @generated from field: string user_identifier_filter = 4;
   */
  userIdentifierFilter = "";

  constructor(data?: PartialMessage<ActivityFilter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.activity.ActivityFilter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "environment_filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "capsule_filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "user_identifier_filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivityFilter {
    return new ActivityFilter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivityFilter {
    return new ActivityFilter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivityFilter {
    return new ActivityFilter().fromJsonString(jsonString, options);
  }

  static equals(a: ActivityFilter | PlainMessage<ActivityFilter> | undefined, b: ActivityFilter | PlainMessage<ActivityFilter> | undefined): boolean {
    return proto3.util.equals(ActivityFilter, a, b);
  }
}

/**
 * @generated from message api.v1.activity.GetActivitiesResponse
 */
export class GetActivitiesResponse extends Message<GetActivitiesResponse> {
  /**
   * @generated from field: repeated api.v1.activity.Activity activities = 1;
   */
  activities: Activity[] = [];

  /**
   * @generated from field: uint64 total = 2;
   */
  total = protoInt64.zero;

  constructor(data?: PartialMessage<GetActivitiesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.activity.GetActivitiesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "activities", kind: "message", T: Activity, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActivitiesResponse {
    return new GetActivitiesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActivitiesResponse {
    return new GetActivitiesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActivitiesResponse {
    return new GetActivitiesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetActivitiesResponse | PlainMessage<GetActivitiesResponse> | undefined, b: GetActivitiesResponse | PlainMessage<GetActivitiesResponse> | undefined): boolean {
    return proto3.util.equals(GetActivitiesResponse, a, b);
  }
}

