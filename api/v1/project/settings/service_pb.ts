// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file api/v1/project/settings/service.proto (package api.v1.project.settings, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Settings, Update } from "./settings_pb.js";

/**
 * @generated from message api.v1.project.settings.GetSettingsRequest
 */
export class GetSettingsRequest extends Message<GetSettingsRequest> {
  constructor(data?: PartialMessage<GetSettingsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.GetSettingsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSettingsRequest {
    return new GetSettingsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSettingsRequest {
    return new GetSettingsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSettingsRequest {
    return new GetSettingsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetSettingsRequest | PlainMessage<GetSettingsRequest> | undefined, b: GetSettingsRequest | PlainMessage<GetSettingsRequest> | undefined): boolean {
    return proto3.util.equals(GetSettingsRequest, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.GetSettingsResponse
 */
export class GetSettingsResponse extends Message<GetSettingsResponse> {
  /**
   * @generated from field: api.v1.project.settings.Settings settings = 1;
   */
  settings?: Settings;

  constructor(data?: PartialMessage<GetSettingsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.GetSettingsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "settings", kind: "message", T: Settings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSettingsResponse {
    return new GetSettingsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSettingsResponse {
    return new GetSettingsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSettingsResponse {
    return new GetSettingsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetSettingsResponse | PlainMessage<GetSettingsResponse> | undefined, b: GetSettingsResponse | PlainMessage<GetSettingsResponse> | undefined): boolean {
    return proto3.util.equals(GetSettingsResponse, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.UpdateSettingsRequest
 */
export class UpdateSettingsRequest extends Message<UpdateSettingsRequest> {
  /**
   * @generated from field: repeated api.v1.project.settings.Update updates = 1;
   */
  updates: Update[] = [];

  constructor(data?: PartialMessage<UpdateSettingsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.UpdateSettingsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "updates", kind: "message", T: Update, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSettingsRequest {
    return new UpdateSettingsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSettingsRequest {
    return new UpdateSettingsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSettingsRequest {
    return new UpdateSettingsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateSettingsRequest | PlainMessage<UpdateSettingsRequest> | undefined, b: UpdateSettingsRequest | PlainMessage<UpdateSettingsRequest> | undefined): boolean {
    return proto3.util.equals(UpdateSettingsRequest, a, b);
  }
}

/**
 * @generated from message api.v1.project.settings.UpdateSettingsResponse
 */
export class UpdateSettingsResponse extends Message<UpdateSettingsResponse> {
  constructor(data?: PartialMessage<UpdateSettingsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.settings.UpdateSettingsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSettingsResponse {
    return new UpdateSettingsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSettingsResponse {
    return new UpdateSettingsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSettingsResponse {
    return new UpdateSettingsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateSettingsResponse | PlainMessage<UpdateSettingsResponse> | undefined, b: UpdateSettingsResponse | PlainMessage<UpdateSettingsResponse> | undefined): boolean {
    return proto3.util.equals(UpdateSettingsResponse, a, b);
  }
}

