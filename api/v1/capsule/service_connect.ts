// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file api/v1/capsule/service.proto (package api.v1.capsule, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AbortRolloutRequest, AbortRolloutResponse, CapsuleMetricsRequest, CapsuleMetricsResponse, CreateRequest, CreateResponse, DeleteRequest, DeleteResponse, DeployRequest, DeployResponse, DeploySetRequest, DeploySetResponse, ExecuteRequest, ExecuteResponse, GetCustomInstanceMetricsRequest, GetCustomInstanceMetricsResponse, GetEffectiveGitSettingsRequest, GetEffectiveGitSettingsResponse, GetInstanceStatusRequest, GetInstanceStatusResponse, GetJobExecutionsRequest, GetJobExecutionsResponse, GetRequest, GetResponse, GetRevisionRequest, GetRevisionResponse, GetRolloutOfRevisionsRequest, GetRolloutOfRevisionsResponse, GetRolloutRequest, GetRolloutResponse, GetStatusRequest, GetStatusResponse, ListEventsRequest, ListEventsResponse, ListInstancesRequest, ListInstancesResponse, ListInstanceStatusesRequest, ListInstanceStatusesResponse, ListProposalsRequest, ListProposalsResponse, ListRequest, ListResponse, ListRolloutsRequest, ListRolloutsResponse, LogsRequest, LogsResponse, PortForwardRequest, PortForwardResponse, ProposeRolloutRequest, ProposeRolloutResponse, ProposeSetRolloutRequest, ProposeSetRolloutResponse, RestartInstanceRequest, RestartInstanceResponse, StopRolloutRequest, StopRolloutResponse, UpdateRequest, UpdateResponse, WatchInstanceStatusesRequest, WatchInstanceStatusesResponse, WatchRolloutsRequest, WatchRolloutsResponse, WatchStatusRequest, WatchStatusResponse } from "./service_pb.js";
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
     * @generated from rpc api.v1.capsule.Service.DeploySet
     */
    deploySet: {
      name: "DeploySet",
      I: DeploySetRequest,
      O: DeploySetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.capsule.Service.ProposeRollout
     */
    proposeRollout: {
      name: "ProposeRollout",
      I: ProposeRolloutRequest,
      O: ProposeRolloutResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.capsule.Service.ProposeSetRollout
     */
    proposeSetRollout: {
      name: "ProposeSetRollout",
      I: ProposeSetRolloutRequest,
      O: ProposeSetRolloutResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.capsule.Service.ListProposals
     */
    listProposals: {
      name: "ListProposals",
      I: ListProposalsRequest,
      O: ListProposalsResponse,
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
     * Stream rollouts for a capsule.
     *
     * @generated from rpc api.v1.capsule.Service.WatchRollouts
     */
    watchRollouts: {
      name: "WatchRollouts",
      I: WatchRolloutsRequest,
      O: WatchRolloutsResponse,
      kind: MethodKind.ServerStreaming,
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
     * Stop a Rollout, removing all resources associated with it.
     *
     * @generated from rpc api.v1.capsule.Service.StopRollout
     */
    stopRollout: {
      name: "StopRollout",
      I: StopRolloutRequest,
      O: StopRolloutResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List capsule events.
     *
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
    /**
     * GetInstanceStatus returns the current status for the given instance.
     *
     * @generated from rpc api.v1.capsule.Service.GetInstanceStatus
     */
    getInstanceStatus: {
      name: "GetInstanceStatus",
      I: GetInstanceStatusRequest,
      O: GetInstanceStatusResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListInstanceStatuses lists the status of all instances.
     *
     * @generated from rpc api.v1.capsule.Service.ListInstanceStatuses
     */
    listInstanceStatuses: {
      name: "ListInstanceStatuses",
      I: ListInstanceStatusesRequest,
      O: ListInstanceStatusesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Stream Instance Statuses of a capsule.
     *
     * @generated from rpc api.v1.capsule.Service.WatchInstanceStatuses
     */
    watchInstanceStatuses: {
      name: "WatchInstanceStatuses",
      I: WatchInstanceStatusesRequest,
      O: WatchInstanceStatusesResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * Execute executes a command in a given in instance,
     * and returns the output along with an exit code.
     *
     * @generated from rpc api.v1.capsule.Service.Execute
     */
    execute: {
      name: "Execute",
      I: ExecuteRequest,
      O: ExecuteResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * PortForward establishes a port-forwarding for the port to the given
     * instance.
     *
     * @generated from rpc api.v1.capsule.Service.PortForward
     */
    portForward: {
      name: "PortForward",
      I: PortForwardRequest,
      O: PortForwardResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc api.v1.capsule.Service.GetCustomInstanceMetrics
     */
    getCustomInstanceMetrics: {
      name: "GetCustomInstanceMetrics",
      I: GetCustomInstanceMetricsRequest,
      O: GetCustomInstanceMetricsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get list of job executions performed by the Capsule.
     *
     * @generated from rpc api.v1.capsule.Service.GetJobExecutions
     */
    getJobExecutions: {
      name: "GetJobExecutions",
      I: GetJobExecutionsRequest,
      O: GetJobExecutionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.capsule.Service.GetStatus
     */
    getStatus: {
      name: "GetStatus",
      I: GetStatusRequest,
      O: GetStatusResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.capsule.Service.GetRevision
     */
    getRevision: {
      name: "GetRevision",
      I: GetRevisionRequest,
      O: GetRevisionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.capsule.Service.GetRolloutOfRevisions
     */
    getRolloutOfRevisions: {
      name: "GetRolloutOfRevisions",
      I: GetRolloutOfRevisionsRequest,
      O: GetRolloutOfRevisionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Stream the status of a capsule.
     *
     * @generated from rpc api.v1.capsule.Service.WatchStatus
     */
    watchStatus: {
      name: "WatchStatus",
      I: WatchStatusRequest,
      O: WatchStatusResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v1.capsule.Service.GetEffectiveGitSettings
     */
    getEffectiveGitSettings: {
      name: "GetEffectiveGitSettings",
      I: GetEffectiveGitSettingsRequest,
      O: GetEffectiveGitSettingsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

