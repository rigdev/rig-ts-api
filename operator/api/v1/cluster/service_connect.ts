// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file operator/api/v1/cluster/service.proto (package api.v1.operator.cluster, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetNodePodsRequest, GetNodePodsResponse, GetNodesRequest, GetNodesResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.operator.cluster.Service
 */
export const Service = {
  typeName: "api.v1.operator.cluster.Service",
  methods: {
    /**
     * @generated from rpc api.v1.operator.cluster.Service.GetNodes
     */
    getNodes: {
      name: "GetNodes",
      I: GetNodesRequest,
      O: GetNodesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.operator.cluster.Service.GetNodePods
     */
    getNodePods: {
      name: "GetNodePods",
      I: GetNodePodsRequest,
      O: GetNodePodsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

