// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file k8s.io/apimachinery/pkg/apis/meta/v1/generated.proto (package k8s.io.apimachinery.pkg.apis.meta.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta
 */
export class TypeMeta extends Message<TypeMeta> {
  /**
   * @generated from field: string kind = 1;
   */
  kind = "";

  /**
   * @generated from field: string aPIVersion = 2;
   */
  aPIVersion = "";

  constructor(data?: PartialMessage<TypeMeta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "aPIVersion", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TypeMeta {
    return new TypeMeta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TypeMeta {
    return new TypeMeta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TypeMeta {
    return new TypeMeta().fromJsonString(jsonString, options);
  }

  static equals(a: TypeMeta | PlainMessage<TypeMeta> | undefined, b: TypeMeta | PlainMessage<TypeMeta> | undefined): boolean {
    return proto3.util.equals(TypeMeta, a, b);
  }
}

