// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/issue/service.proto (package api.v1.issue, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Pagination } from "../../../model/common_pb.js";
import { Issue, Level } from "./issue_pb.js";

/**
 * @generated from message api.v1.issue.GetIssuesRequest
 */
export class GetIssuesRequest extends Message<GetIssuesRequest> {
  /**
   * @generated from field: model.Pagination pagination = 1;
   */
  pagination?: Pagination;

  /**
   * @generated from field: api.v1.issue.Filter filter = 2;
   */
  filter?: Filter;

  constructor(data?: PartialMessage<GetIssuesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.issue.GetIssuesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: Pagination },
    { no: 2, name: "filter", kind: "message", T: Filter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetIssuesRequest {
    return new GetIssuesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetIssuesRequest {
    return new GetIssuesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetIssuesRequest {
    return new GetIssuesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetIssuesRequest | PlainMessage<GetIssuesRequest> | undefined, b: GetIssuesRequest | PlainMessage<GetIssuesRequest> | undefined): boolean {
    return proto3.util.equals(GetIssuesRequest, a, b);
  }
}

/**
 * @generated from message api.v1.issue.Filter
 */
export class Filter extends Message<Filter> {
  /**
   * @generated from field: string project = 1;
   */
  project = "";

  /**
   * @generated from field: string environment = 2;
   */
  environment = "";

  /**
   * @generated from field: string capsule = 3;
   */
  capsule = "";

  /**
   * @generated from field: api.v1.issue.Level level = 4;
   */
  level = Level.UNSPECIFIED;

  /**
   * @generated from field: bool include_closed = 5;
   */
  includeClosed = false;

  /**
   * @generated from field: bool include_stale = 6;
   */
  includeStale = false;

  constructor(data?: PartialMessage<Filter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.issue.Filter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "environment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "capsule", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "level", kind: "enum", T: proto3.getEnumType(Level) },
    { no: 5, name: "include_closed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "include_stale", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Filter {
    return new Filter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Filter {
    return new Filter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Filter {
    return new Filter().fromJsonString(jsonString, options);
  }

  static equals(a: Filter | PlainMessage<Filter> | undefined, b: Filter | PlainMessage<Filter> | undefined): boolean {
    return proto3.util.equals(Filter, a, b);
  }
}

/**
 * @generated from message api.v1.issue.GetIssuesResponse
 */
export class GetIssuesResponse extends Message<GetIssuesResponse> {
  /**
   * @generated from field: repeated api.v1.issue.Issue issues = 1;
   */
  issues: Issue[] = [];

  /**
   * @generated from field: uint64 total = 2;
   */
  total = protoInt64.zero;

  constructor(data?: PartialMessage<GetIssuesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.issue.GetIssuesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "issues", kind: "message", T: Issue, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetIssuesResponse {
    return new GetIssuesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetIssuesResponse {
    return new GetIssuesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetIssuesResponse {
    return new GetIssuesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetIssuesResponse | PlainMessage<GetIssuesResponse> | undefined, b: GetIssuesResponse | PlainMessage<GetIssuesResponse> | undefined): boolean {
    return proto3.util.equals(GetIssuesResponse, a, b);
  }
}

