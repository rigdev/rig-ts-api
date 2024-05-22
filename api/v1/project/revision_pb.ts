// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file api/v1/project/revision.proto (package api.v1.project, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Project } from "../../../platform/v1/generated_pb.js";
import { RevisionMetadata } from "../../../model/revision_pb.js";

/**
 * @generated from message api.v1.project.Revision
 */
export class Revision extends Message<Revision> {
  /**
   * @generated from field: platform.v1.Project spec = 1;
   */
  spec?: Project;

  /**
   * @generated from field: model.RevisionMetadata metadata = 2;
   */
  metadata?: RevisionMetadata;

  constructor(data?: PartialMessage<Revision>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.project.Revision";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "spec", kind: "message", T: Project },
    { no: 2, name: "metadata", kind: "message", T: RevisionMetadata },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Revision {
    return new Revision().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Revision {
    return new Revision().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Revision {
    return new Revision().fromJsonString(jsonString, options);
  }

  static equals(a: Revision | PlainMessage<Revision> | undefined, b: Revision | PlainMessage<Revision> | undefined): boolean {
    return proto3.util.equals(Revision, a, b);
  }
}

