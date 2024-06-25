// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file model/project.proto (package model, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message model.ProjectFilter
 */
export class ProjectFilter extends Message<ProjectFilter> {
  /**
   * @generated from oneof model.ProjectFilter.filter
   */
  filter: {
    /**
     * @generated from field: model.ProjectFilter.All all = 1;
     */
    value: ProjectFilter_All;
    case: "all";
  } | {
    /**
     * @generated from field: model.ProjectFilter.Selected selected = 2;
     */
    value: ProjectFilter_Selected;
    case: "selected";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ProjectFilter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.ProjectFilter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "all", kind: "message", T: ProjectFilter_All, oneof: "filter" },
    { no: 2, name: "selected", kind: "message", T: ProjectFilter_Selected, oneof: "filter" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectFilter {
    return new ProjectFilter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectFilter {
    return new ProjectFilter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectFilter {
    return new ProjectFilter().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectFilter | PlainMessage<ProjectFilter> | undefined, b: ProjectFilter | PlainMessage<ProjectFilter> | undefined): boolean {
    return proto3.util.equals(ProjectFilter, a, b);
  }
}

/**
 * @generated from message model.ProjectFilter.All
 */
export class ProjectFilter_All extends Message<ProjectFilter_All> {
  constructor(data?: PartialMessage<ProjectFilter_All>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.ProjectFilter.All";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectFilter_All {
    return new ProjectFilter_All().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectFilter_All {
    return new ProjectFilter_All().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectFilter_All {
    return new ProjectFilter_All().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectFilter_All | PlainMessage<ProjectFilter_All> | undefined, b: ProjectFilter_All | PlainMessage<ProjectFilter_All> | undefined): boolean {
    return proto3.util.equals(ProjectFilter_All, a, b);
  }
}

/**
 * @generated from message model.ProjectFilter.Selected
 */
export class ProjectFilter_Selected extends Message<ProjectFilter_Selected> {
  /**
   * @generated from field: repeated string project_ids = 1;
   */
  projectIds: string[] = [];

  constructor(data?: PartialMessage<ProjectFilter_Selected>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.ProjectFilter.Selected";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectFilter_Selected {
    return new ProjectFilter_Selected().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectFilter_Selected {
    return new ProjectFilter_Selected().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectFilter_Selected {
    return new ProjectFilter_Selected().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectFilter_Selected | PlainMessage<ProjectFilter_Selected> | undefined, b: ProjectFilter_Selected | PlainMessage<ProjectFilter_Selected> | undefined): boolean {
    return proto3.util.equals(ProjectFilter_Selected, a, b);
  }
}

