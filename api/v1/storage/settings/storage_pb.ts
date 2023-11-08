// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file api/v1/storage/settings/storage.proto (package api.v1.storage.settings, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.v1.storage.settings.Settings
 */
export class Settings extends Message<Settings> {
  constructor(data?: PartialMessage<Settings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.storage.settings.Settings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
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

