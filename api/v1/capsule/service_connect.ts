// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file api/v1/capsule/service.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AbortRolloutRequest, AbortRolloutResponse, CapsuleMetricsRequest, CapsuleMetricsResponse, CreateBuildRequest, CreateBuildResponse, CreateRequest, CreateResponse, DeleteBuildRequest, DeleteBuildResponse, DeleteRequest, DeleteResponse, DeployRequest, DeployResponse, GetByNameRequest, GetByNameResponse, GetRequest, GetResponse, GetRolloutRequest, GetRolloutResponse, ListBuildsRequest, ListBuildsResponse, ListEventsRequest, ListEventsResponse, ListInstancesRequest, ListInstancesResponse, ListRequest, ListResponse, ListRolloutsRequest, ListRolloutsResponse, LogsRequest, LogsResponse, RestartInstanceRequest, RestartInstanceResponse, UpdateRequest, UpdateResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * The service to manage capsules.
 *
 * @generated from service api.v1.capsule.Service
 */
export const Service = {
  typeName: "api.v1.capsule.Service",
  methods: {
    /**
     * Create a new capsule.
     *
     * @generated from rpc api.v1.capsule.Service.Create
     */
    create: {
      name: "Create",
      I: CreateRequest,
      O: CreateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get a capsule by id.
     *
     * @generated from rpc api.v1.capsule.Service.Get
     */
    get: {
      name: "Get",
      I: GetRequest,
      O: GetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a capsule.
     *
     * @generated from rpc api.v1.capsule.Service.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteRequest,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Logs returns (and streams) the log output of a capsule.
     *
     * @generated from rpc api.v1.capsule.Service.Logs
     */
    logs: {
      name: "Logs",
      I: LogsRequest,
      O: LogsResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * Update a capsule.
     *
     * @generated from rpc api.v1.capsule.Service.Update
     */
    update: {
      name: "Update",
      I: UpdateRequest,
      O: UpdateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Lists all capsules for current project.
     *
     * @generated from rpc api.v1.capsule.Service.List
     */
    list: {
      name: "List",
      I: ListRequest,
      O: ListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get a capsule by name.
     *
     * @generated from rpc api.v1.capsule.Service.GetByName
     */
    getByName: {
      name: "GetByName",
      I: GetByNameRequest,
      O: GetByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Create a new build.
     * Builds are immutable and cannot change. Create a new build to make
     * changes from an existing one.
     *
     * @generated from rpc api.v1.capsule.Service.CreateBuild
     */
    createBuild: {
      name: "CreateBuild",
      I: CreateBuildRequest,
      O: CreateBuildResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List builds for a capsule.
     *
     * @generated from rpc api.v1.capsule.Service.ListBuilds
     */
    listBuilds: {
      name: "ListBuilds",
      I: ListBuildsRequest,
      O: ListBuildsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a build.
     *
     * @generated from rpc api.v1.capsule.Service.DeleteBuild
     */
    deleteBuild: {
      name: "DeleteBuild",
      I: DeleteBuildRequest,
      O: DeleteBuildResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Deploy changes to a capsule.
     * When deploying, a new rollout will be initiated. Only one rollout can be
     * running at a single point in time.
     * Use `Abort` to abort an already running rollout.
     *
     * @generated from rpc api.v1.capsule.Service.Deploy
     */
    deploy: {
      name: "Deploy",
      I: DeployRequest,
      O: DeployResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Lists all instances for the capsule.
     *
     * @generated from rpc api.v1.capsule.Service.ListInstances
     */
    listInstances: {
      name: "ListInstances",
      I: ListInstancesRequest,
      O: ListInstancesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Restart a single capsule instance.
     *
     * @generated from rpc api.v1.capsule.Service.RestartInstance
     */
    restartInstance: {
      name: "RestartInstance",
      I: RestartInstanceRequest,
      O: RestartInstanceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get a single rollout by ID.
     *
     * @generated from rpc api.v1.capsule.Service.GetRollout
     */
    getRollout: {
      name: "GetRollout",
      I: GetRolloutRequest,
      O: GetRolloutResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Lists all rollouts for the capsule.
     *
     * @generated from rpc api.v1.capsule.Service.ListRollouts
     */
    listRollouts: {
      name: "ListRollouts",
      I: ListRolloutsRequest,
      O: ListRolloutsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Abort the rollout.
     *
     * @generated from rpc api.v1.capsule.Service.AbortRollout
     */
    abortRollout: {
      name: "AbortRollout",
      I: AbortRolloutRequest,
      O: AbortRolloutResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.capsule.Service.ListEvents
     */
    listEvents: {
      name: "ListEvents",
      I: ListEventsRequest,
      O: ListEventsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get metrics for a capsule
     *
     * @generated from rpc api.v1.capsule.Service.CapsuleMetrics
     */
    capsuleMetrics: {
      name: "CapsuleMetrics",
      I: CapsuleMetricsRequest,
      O: CapsuleMetricsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

