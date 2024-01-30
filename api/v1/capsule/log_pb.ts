// @generated by protoc-gen-es v1.7.1 with parameter "target=ts"
// @generated from file api/v1/capsule/log.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Log of an instance
 *
 * @generated from message api.v1.capsule.Log
 */
export class Log extends Message<Log> {
  /**
   * Timestamp of the log
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * Message of the log
   *
   * @generated from field: api.v1.capsule.LogMessage message = 2;
   */
  message?: LogMessage;

  /**
   * Instance ID of the log
   *
   * @generated from field: string instance_id = 3;
   */
  instanceId = "";

  constructor(data?: PartialMessage<Log>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Log";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "message", kind: "message", T: LogMessage },
    { no: 3, name: "instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Log {
    return new Log().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Log {
    return new Log().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Log {
    return new Log().fromJsonString(jsonString, options);
  }

  static equals(a: Log | PlainMessage<Log> | undefined, b: Log | PlainMessage<Log> | undefined): boolean {
    return proto3.util.equals(Log, a, b);
  }
}

/**
 * The actual log message
 *
 * @generated from message api.v1.capsule.LogMessage
 */
export class LogMessage extends Message<LogMessage> {
  /**
   * @generated from oneof api.v1.capsule.LogMessage.message
   */
  message: {
    /**
     * If the log is stdout
     *
     * @generated from field: bytes stdout = 1;
     */
    value: Uint8Array;
    case: "stdout";
  } | {
    /**
     * If the log is stderr
     *
     * @generated from field: bytes stderr = 2;
     */
    value: Uint8Array;
    case: "stderr";
  } | {
    /**
     * Represents a termination event
     *
     * @generated from field: api.v1.capsule.LogMessage.ContainerTermination container_termination = 3;
     */
    value: LogMessage_ContainerTermination;
    case: "containerTermination";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<LogMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.LogMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stdout", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "message" },
    { no: 2, name: "stderr", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "message" },
    { no: 3, name: "container_termination", kind: "message", T: LogMessage_ContainerTermination, oneof: "message" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogMessage {
    return new LogMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogMessage {
    return new LogMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogMessage {
    return new LogMessage().fromJsonString(jsonString, options);
  }

  static equals(a: LogMessage | PlainMessage<LogMessage> | undefined, b: LogMessage | PlainMessage<LogMessage> | undefined): boolean {
    return proto3.util.equals(LogMessage, a, b);
  }
}

/**
 * @generated from message api.v1.capsule.LogMessage.ContainerTermination
 */
export class LogMessage_ContainerTermination extends Message<LogMessage_ContainerTermination> {
  constructor(data?: PartialMessage<LogMessage_ContainerTermination>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.LogMessage.ContainerTermination";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogMessage_ContainerTermination {
    return new LogMessage_ContainerTermination().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogMessage_ContainerTermination {
    return new LogMessage_ContainerTermination().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogMessage_ContainerTermination {
    return new LogMessage_ContainerTermination().fromJsonString(jsonString, options);
  }

  static equals(a: LogMessage_ContainerTermination | PlainMessage<LogMessage_ContainerTermination> | undefined, b: LogMessage_ContainerTermination | PlainMessage<LogMessage_ContainerTermination> | undefined): boolean {
    return proto3.util.equals(LogMessage_ContainerTermination, a, b);
  }
}

