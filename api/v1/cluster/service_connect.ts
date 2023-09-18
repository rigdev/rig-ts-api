// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file api/v1/cluster/service.proto (package api.v1.cluster, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetConfigRequest, GetConfigResponse } from "./service_pb.js";
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
     * GetConfig returns the config for the cluster
     *
     * @generated from rpc api.v1.cluster.Service.GetConfig
     */
    getConfig: {
      name: "GetConfig",
      I: GetConfigRequest,
      O: GetConfigResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
