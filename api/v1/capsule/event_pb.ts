// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file api/v1/capsule/event.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Author } from "../../../model/author_pb.js";

/**
 * An event is a message from a rollout
 *
 * @generated from message api.v1.capsule.Event
 */
export class Event extends Message<Event> {
  /**
   * Potential author associated with the event.
   *
   * @generated from field: model.Author created_by = 1;
   */
  createdBy?: Author;

  /**
   * When the event was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 2;
   */
  createdAt?: Timestamp;

  /**
   * The rollout that created the event.
   *
   * @generated from field: uint64 rollout_id = 3;
   */
  rolloutId = protoInt64.zero;

  /**
   * A message associated with the event.
   *
   * @generated from field: string message = 4;
   */
  message = "";

  /**
   * The data associated with the event.
   *
   * @generated from field: api.v1.capsule.EventData event_data = 5;
   */
  eventData?: EventData;

  constructor(data?: PartialMessage<Event>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.Event";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "created_by", kind: "message", T: Author },
    { no: 2, name: "created_at", kind: "message", T: Timestamp },
    { no: 3, name: "rollout_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "event_data", kind: "message", T: EventData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event {
    return new Event().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event {
    return new Event().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event {
    return new Event().fromJsonString(jsonString, options);
  }

  static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean {
    return proto3.util.equals(Event, a, b);
  }
}

/**
 * An event that is associated with a rollout.
 *
 * @generated from message api.v1.capsule.RolloutEvent
 */
export class RolloutEvent extends Message<RolloutEvent> {
  constructor(data?: PartialMessage<RolloutEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.RolloutEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolloutEvent {
    return new RolloutEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolloutEvent {
    return new RolloutEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolloutEvent {
    return new RolloutEvent().fromJsonString(jsonString, options);
  }

  static equals(a: RolloutEvent | PlainMessage<RolloutEvent> | undefined, b: RolloutEvent | PlainMessage<RolloutEvent> | undefined): boolean {
    return proto3.util.equals(RolloutEvent, a, b);
  }
}

/**
 * An event that is associated with an abort.
 *
 * @generated from message api.v1.capsule.AbortEvent
 */
export class AbortEvent extends Message<AbortEvent> {
  constructor(data?: PartialMessage<AbortEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.AbortEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbortEvent {
    return new AbortEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbortEvent {
    return new AbortEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbortEvent {
    return new AbortEvent().fromJsonString(jsonString, options);
  }

  static equals(a: AbortEvent | PlainMessage<AbortEvent> | undefined, b: AbortEvent | PlainMessage<AbortEvent> | undefined): boolean {
    return proto3.util.equals(AbortEvent, a, b);
  }
}

/**
 * An event that is associated with an error.
 *
 * @generated from message api.v1.capsule.ErrorEvent
 */
export class ErrorEvent extends Message<ErrorEvent> {
  constructor(data?: PartialMessage<ErrorEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.ErrorEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ErrorEvent {
    return new ErrorEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ErrorEvent {
    return new ErrorEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ErrorEvent {
    return new ErrorEvent().fromJsonString(jsonString, options);
  }

  static equals(a: ErrorEvent | PlainMessage<ErrorEvent> | undefined, b: ErrorEvent | PlainMessage<ErrorEvent> | undefined): boolean {
    return proto3.util.equals(ErrorEvent, a, b);
  }
}

/**
 * The data associated with an event.
 *
 * @generated from message api.v1.capsule.EventData
 */
export class EventData extends Message<EventData> {
  /**
   * @generated from oneof api.v1.capsule.EventData.kind
   */
  kind: {
    /**
     * If event is a rollout.
     *
     * @generated from field: api.v1.capsule.RolloutEvent rollout = 1;
     */
    value: RolloutEvent;
    case: "rollout";
  } | {
    /**
     * if event is an error event.
     *
     * @generated from field: api.v1.capsule.ErrorEvent error = 2;
     */
    value: ErrorEvent;
    case: "error";
  } | {
    /**
     * If event is an abort event.
     *
     * @generated from field: api.v1.capsule.AbortEvent abort = 3;
     */
    value: AbortEvent;
    case: "abort";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<EventData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.EventData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rollout", kind: "message", T: RolloutEvent, oneof: "kind" },
    { no: 2, name: "error", kind: "message", T: ErrorEvent, oneof: "kind" },
    { no: 3, name: "abort", kind: "message", T: AbortEvent, oneof: "kind" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventData {
    return new EventData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventData {
    return new EventData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventData {
    return new EventData().fromJsonString(jsonString, options);
  }

  static equals(a: EventData | PlainMessage<EventData> | undefined, b: EventData | PlainMessage<EventData> | undefined): boolean {
    return proto3.util.equals(EventData, a, b);
  }
}

