// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file api/v1/cluster/service.proto (package api.v1.cluster, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetConfigRequest, GetConfigResponse, GetConfigsRequest, GetConfigsResponse, ListNodePodsRequest, ListNodePodsResponse, ListRequest, ListResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * The service to your cluster running Rig.
 *
 * @generated from service api.v1.cluster.Service
 */
export const Service = {
  typeName: "api.v1.cluster.Service",
  methods: {
    /**
     * @generated from rpc api.v1.cluster.Service.List
     */
    list: {
      name: "List",
      I: ListRequest,
      O: ListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetConfig returns the config for the cluster.
     *
     * @generated from rpc api.v1.cluster.Service.GetConfig
     */
    getConfig: {
      name: "GetConfig",
      I: GetConfigRequest,
      O: GetConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetConfigs returns the configs for all clusters.
     *
     * @generated from rpc api.v1.cluster.Service.GetConfigs
     */
    getConfigs: {
      name: "GetConfigs",
      I: GetConfigsRequest,
      O: GetConfigsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.cluster.Service.ListNodePods
     */
    listNodePods: {
      name: "ListNodePods",
      I: ListNodePodsRequest,
      O: ListNodePodsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

