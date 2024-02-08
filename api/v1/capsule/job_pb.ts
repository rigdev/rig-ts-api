// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file api/v1/capsule/job.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * Different states a job execution can be in
 *
 * @generated from enum api.v1.capsule.JobState
 */
export enum JobState {
  /**
   * Default value.
   *
   * @generated from enum value: JOB_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The job is running.
   *
   * @generated from enum value: JOB_STATE_ONGOING = 1;
   */
  ONGOING = 1,

  /**
   * The job completed successfully.
   *
   * @generated from enum value: JOB_STATE_COMPLETED = 2;
   */
  COMPLETED = 2,

  /**
   * The job failed.
   *
   * @generated from enum value: JOB_STATE_FAILED = 3;
   */
  FAILED = 3,

  /**
   * The job was terminated.
   *
   * @generated from enum value: JOB_STATE_TERMINATED = 4;
   */
  TERMINATED = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(JobState)
proto3.util.setEnumType(JobState, "api.v1.capsule.JobState", [
  { no: 0, name: "JOB_STATE_UNSPECIFIED" },
  { no: 1, name: "JOB_STATE_ONGOING" },
  { no: 2, name: "JOB_STATE_COMPLETED" },
  { no: 3, name: "JOB_STATE_FAILED" },
  { no: 4, name: "JOB_STATE_TERMINATED" },
]);

/**
 * An execution of a cron job.
 *
 * @generated from message api.v1.capsule.JobExecution
 */
export class JobExecution extends Message<JobExecution> {
  /**
   * Name of the job.
   *
   * @generated from field: string job_name = 1;
   */
  jobName = "";

  /**
   * When the job started running.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 2;
   */
  createdAt?: Timestamp;

  /**
   * When the job finished.
   *
   * @generated from field: google.protobuf.Timestamp finished_at = 3;
   */
  finishedAt?: Timestamp;

  /**
   * The state of the job.
   *
   * @generated from field: api.v1.capsule.JobState state = 4;
   */
  state = JobState.UNSPECIFIED;

  /**
   * Number of retries.
   *
   * @generated from field: int32 retries = 5;
   */
  retries = 0;

  /**
   * ID of the rollout.
   *
   * @generated from field: uint64 rollout_id = 6;
   */
  rolloutId = protoInt64.zero;

  /**
   * ID of the capsule.
   *
   * @generated from field: string capsule_id = 7;
   */
  capsuleId = "";

  /**
   * ID of the project.
   *
   * @generated from field: string project_id = 8;
   */
  projectId = "";

  /**
   * ID of the execution.
   *
   * @generated from field: string execution_id = 9;
   */
  executionId = "";

  /**
   * ID of the environment.
   *
   * @generated from field: string environment_id = 10;
   */
  environmentId = "";

  constructor(data?: PartialMessage<JobExecution>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.JobExecution";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "job_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "created_at", kind: "message", T: Timestamp },
    { no: 3, name: "finished_at", kind: "message", T: Timestamp },
    { no: 4, name: "state", kind: "enum", T: proto3.getEnumType(JobState) },
    { no: 5, name: "retries", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "rollout_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "capsule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "execution_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JobExecution {
    return new JobExecution().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JobExecution {
    return new JobExecution().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JobExecution {
    return new JobExecution().fromJsonString(jsonString, options);
  }

  static equals(a: JobExecution | PlainMessage<JobExecution> | undefined, b: JobExecution | PlainMessage<JobExecution> | undefined): boolean {
    return proto3.util.equals(JobExecution, a, b);
  }
}

/**
 * Specification for a cron job.
 *
 * @generated from message api.v1.capsule.CronJob
 */
export class CronJob extends Message<CronJob> {
  /**
   * Name of the job.
   *
   * @generated from field: string job_name = 1;
   */
  jobName = "";

  /**
   * Cron schedule.
   *
   * @generated from field: string schedule = 2;
   */
  schedule = "";

  /**
   * Maximum number of retries.
   *
   * @generated from field: int32 max_retries = 3;
   */
  maxRetries = 0;

  /**
   * Maximum duration of the job.
   *
   * @generated from field: google.protobuf.Duration timeout = 4;
   */
  timeout?: Duration;

  /**
   * The type of the job
   *
   * @generated from oneof api.v1.capsule.CronJob.job_type
   */
  jobType: {
    /**
     * URL job.
     *
     * @generated from field: api.v1.capsule.JobURL url = 5;
     */
    value: JobURL;
    case: "url";
  } | {
    /**
     * Command job.
     *
     * @generated from field: api.v1.capsule.JobCommand command = 6;
     */
    value: JobCommand;
    case: "command";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<CronJob>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.CronJob";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "job_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "schedule", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "max_retries", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "timeout", kind: "message", T: Duration },
    { no: 5, name: "url", kind: "message", T: JobURL, oneof: "job_type" },
    { no: 6, name: "command", kind: "message", T: JobCommand, oneof: "job_type" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CronJob {
    return new CronJob().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CronJob {
    return new CronJob().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CronJob {
    return new CronJob().fromJsonString(jsonString, options);
  }

  static equals(a: CronJob | PlainMessage<CronJob> | undefined, b: CronJob | PlainMessage<CronJob> | undefined): boolean {
    return proto3.util.equals(CronJob, a, b);
  }
}

/**
 * Run a job by making a HTTP request to a URL.
 *
 * @generated from message api.v1.capsule.JobURL
 */
export class JobURL extends Message<JobURL> {
  /**
   * Port to make the request to.
   *
   * @generated from field: uint64 port = 1;
   */
  port = protoInt64.zero;

  /**
   * Path to make the request to.
   *
   * @generated from field: string path = 2;
   */
  path = "";

  /**
   * Query parameters to add to the request.
   *
   * @generated from field: map<string, string> query_parameters = 3;
   */
  queryParameters: { [key: string]: string } = {};

  constructor(data?: PartialMessage<JobURL>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.JobURL";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "port", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "query_parameters", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JobURL {
    return new JobURL().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JobURL {
    return new JobURL().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JobURL {
    return new JobURL().fromJsonString(jsonString, options);
  }

  static equals(a: JobURL | PlainMessage<JobURL> | undefined, b: JobURL | PlainMessage<JobURL> | undefined): boolean {
    return proto3.util.equals(JobURL, a, b);
  }
}

/**
 * Run a job by running a command in an instance of a capsule
 *
 * @generated from message api.v1.capsule.JobCommand
 */
export class JobCommand extends Message<JobCommand> {
  /**
   * Command to run.
   *
   * @generated from field: string command = 1;
   */
  command = "";

  /**
   * Arguments to pass to the command.
   *
   * @generated from field: repeated string args = 2;
   */
  args: string[] = [];

  constructor(data?: PartialMessage<JobCommand>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.capsule.JobCommand";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "command", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "args", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JobCommand {
    return new JobCommand().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JobCommand {
    return new JobCommand().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JobCommand {
    return new JobCommand().fromJsonString(jsonString, options);
  }

  static equals(a: JobCommand | PlainMessage<JobCommand> | undefined, b: JobCommand | PlainMessage<JobCommand> | undefined): boolean {
    return proto3.util.equals(JobCommand, a, b);
  }
}

