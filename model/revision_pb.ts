// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file model/revision.proto (package model, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Author } from "./author_pb.js";
import { GitChange, RepoBranch } from "./git_pb.js";

/**
 * @generated from message model.RevisionMetadata
 */
export class RevisionMetadata extends Message<RevisionMetadata> {
  /**
   * @generated from field: google.protobuf.Timestamp created_at = 1;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 2;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: model.Author updated_by = 3;
   */
  updatedBy?: Author;

  /**
   * @generated from field: model.Fingerprint fingerprint = 4;
   */
  fingerprint?: Fingerprint;

  /**
   * @generated from field: model.GitChange git_change = 5;
   */
  gitChange?: GitChange;

  /**
   * @generated from field: model.BookmarkingConfiguration bookmarking = 6;
   */
  bookmarking?: BookmarkingConfiguration;

  constructor(data?: PartialMessage<RevisionMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.RevisionMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "created_at", kind: "message", T: Timestamp },
    { no: 2, name: "updated_at", kind: "message", T: Timestamp },
    { no: 3, name: "updated_by", kind: "message", T: Author },
    { no: 4, name: "fingerprint", kind: "message", T: Fingerprint },
    { no: 5, name: "git_change", kind: "message", T: GitChange },
    { no: 6, name: "bookmarking", kind: "message", T: BookmarkingConfiguration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevisionMetadata {
    return new RevisionMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevisionMetadata {
    return new RevisionMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevisionMetadata {
    return new RevisionMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: RevisionMetadata | PlainMessage<RevisionMetadata> | undefined, b: RevisionMetadata | PlainMessage<RevisionMetadata> | undefined): boolean {
    return proto3.util.equals(RevisionMetadata, a, b);
  }
}

/**
 * @generated from message model.Fingerprint
 */
export class Fingerprint extends Message<Fingerprint> {
  /**
   * @generated from field: string data = 1;
   */
  data = "";

  constructor(data?: PartialMessage<Fingerprint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.Fingerprint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fingerprint {
    return new Fingerprint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fingerprint {
    return new Fingerprint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fingerprint {
    return new Fingerprint().fromJsonString(jsonString, options);
  }

  static equals(a: Fingerprint | PlainMessage<Fingerprint> | undefined, b: Fingerprint | PlainMessage<Fingerprint> | undefined): boolean {
    return proto3.util.equals(Fingerprint, a, b);
  }
}

/**
 * @generated from message model.Fingerprints
 */
export class Fingerprints extends Message<Fingerprints> {
  /**
   * @generated from field: model.Fingerprint project = 1;
   */
  project?: Fingerprint;

  /**
   * @generated from field: model.Fingerprint environment = 2;
   */
  environment?: Fingerprint;

  /**
   * @generated from field: model.Fingerprint capsule_set = 3;
   */
  capsuleSet?: Fingerprint;

  /**
   * @generated from field: model.Fingerprint capsule = 4;
   */
  capsule?: Fingerprint;

  constructor(data?: PartialMessage<Fingerprints>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.Fingerprints";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project", kind: "message", T: Fingerprint },
    { no: 2, name: "environment", kind: "message", T: Fingerprint },
    { no: 3, name: "capsule_set", kind: "message", T: Fingerprint },
    { no: 4, name: "capsule", kind: "message", T: Fingerprint },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fingerprints {
    return new Fingerprints().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fingerprints {
    return new Fingerprints().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fingerprints {
    return new Fingerprints().fromJsonString(jsonString, options);
  }

  static equals(a: Fingerprints | PlainMessage<Fingerprints> | undefined, b: Fingerprints | PlainMessage<Fingerprints> | undefined): boolean {
    return proto3.util.equals(Fingerprints, a, b);
  }
}

/**
 * @generated from message model.ProposalMetadata
 */
export class ProposalMetadata extends Message<ProposalMetadata> {
  /**
   * @generated from field: google.protobuf.Timestamp created_at = 1;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: model.Author created_by = 2;
   */
  createdBy?: Author;

  /**
   * @generated from field: model.Fingerprint fingerprint = 3;
   */
  fingerprint?: Fingerprint;

  /**
   * @generated from field: model.RepoBranch spawn_point = 4;
   */
  spawnPoint?: RepoBranch;

  /**
   * @generated from field: string branch = 5;
   */
  branch = "";

  /**
   * @generated from field: string review_url = 6;
   */
  reviewUrl = "";

  /**
   * @generated from oneof model.ProposalMetadata.provider
   */
  provider: {
    /**
     * @generated from field: model.GithubProposal github = 7;
     */
    value: GithubProposal;
    case: "github";
  } | {
    /**
     * @generated from field: model.GitLabProposal gitlab = 8;
     */
    value: GitLabProposal;
    case: "gitlab";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ProposalMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.ProposalMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "created_at", kind: "message", T: Timestamp },
    { no: 2, name: "created_by", kind: "message", T: Author },
    { no: 3, name: "fingerprint", kind: "message", T: Fingerprint },
    { no: 4, name: "spawn_point", kind: "message", T: RepoBranch },
    { no: 5, name: "branch", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "review_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "github", kind: "message", T: GithubProposal, oneof: "provider" },
    { no: 8, name: "gitlab", kind: "message", T: GitLabProposal, oneof: "provider" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProposalMetadata {
    return new ProposalMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProposalMetadata {
    return new ProposalMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProposalMetadata {
    return new ProposalMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: ProposalMetadata | PlainMessage<ProposalMetadata> | undefined, b: ProposalMetadata | PlainMessage<ProposalMetadata> | undefined): boolean {
    return proto3.util.equals(ProposalMetadata, a, b);
  }
}

/**
 * @generated from message model.GithubProposal
 */
export class GithubProposal extends Message<GithubProposal> {
  /**
   * @generated from field: int64 pr_id = 1;
   */
  prId = protoInt64.zero;

  constructor(data?: PartialMessage<GithubProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.GithubProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pr_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GithubProposal {
    return new GithubProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GithubProposal {
    return new GithubProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GithubProposal {
    return new GithubProposal().fromJsonString(jsonString, options);
  }

  static equals(a: GithubProposal | PlainMessage<GithubProposal> | undefined, b: GithubProposal | PlainMessage<GithubProposal> | undefined): boolean {
    return proto3.util.equals(GithubProposal, a, b);
  }
}

/**
 * @generated from message model.GitLabProposal
 */
export class GitLabProposal extends Message<GitLabProposal> {
  /**
   * @generated from field: int64 pr_id = 1;
   */
  prId = protoInt64.zero;

  constructor(data?: PartialMessage<GitLabProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.GitLabProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pr_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GitLabProposal {
    return new GitLabProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GitLabProposal {
    return new GitLabProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GitLabProposal {
    return new GitLabProposal().fromJsonString(jsonString, options);
  }

  static equals(a: GitLabProposal | PlainMessage<GitLabProposal> | undefined, b: GitLabProposal | PlainMessage<GitLabProposal> | undefined): boolean {
    return proto3.util.equals(GitLabProposal, a, b);
  }
}

/**
 * @generated from message model.Revisions
 */
export class Revisions extends Message<Revisions> {
  /**
   * @generated from field: repeated model.RevisionMetadata projects = 5;
   */
  projects: RevisionMetadata[] = [];

  /**
   * @generated from field: repeated model.RevisionMetadata environments = 6;
   */
  environments: RevisionMetadata[] = [];

  /**
   * @generated from field: repeated model.RevisionMetadata capsule_sets = 7;
   */
  capsuleSets: RevisionMetadata[] = [];

  /**
   * @generated from field: repeated model.RevisionMetadata capsules = 8;
   */
  capsules: RevisionMetadata[] = [];

  constructor(data?: PartialMessage<Revisions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.Revisions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 5, name: "projects", kind: "message", T: RevisionMetadata, repeated: true },
    { no: 6, name: "environments", kind: "message", T: RevisionMetadata, repeated: true },
    { no: 7, name: "capsule_sets", kind: "message", T: RevisionMetadata, repeated: true },
    { no: 8, name: "capsules", kind: "message", T: RevisionMetadata, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Revisions {
    return new Revisions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Revisions {
    return new Revisions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Revisions {
    return new Revisions().fromJsonString(jsonString, options);
  }

  static equals(a: Revisions | PlainMessage<Revisions> | undefined, b: Revisions | PlainMessage<Revisions> | undefined): boolean {
    return proto3.util.equals(Revisions, a, b);
  }
}

/**
 * @generated from message model.BookmarkingConfiguration
 */
export class BookmarkingConfiguration extends Message<BookmarkingConfiguration> {
  /**
   * @generated from field: bool dont_bookmark = 1;
   */
  dontBookmark = false;

  constructor(data?: PartialMessage<BookmarkingConfiguration>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "model.BookmarkingConfiguration";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "dont_bookmark", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BookmarkingConfiguration {
    return new BookmarkingConfiguration().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BookmarkingConfiguration {
    return new BookmarkingConfiguration().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BookmarkingConfiguration {
    return new BookmarkingConfiguration().fromJsonString(jsonString, options);
  }

  static equals(a: BookmarkingConfiguration | PlainMessage<BookmarkingConfiguration> | undefined, b: BookmarkingConfiguration | PlainMessage<BookmarkingConfiguration> | undefined): boolean {
    return proto3.util.equals(BookmarkingConfiguration, a, b);
  }
}

