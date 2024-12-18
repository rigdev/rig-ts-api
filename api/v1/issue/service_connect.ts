// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file api/v1/issue/service.proto (package api.v1.issue, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetIssuesRequest, GetIssuesResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.issue.Service
 */
export const Service = {
  typeName: "api.v1.issue.Service",
  methods: {
    /**
     * Get issues
     *
     * @generated from rpc api.v1.issue.Service.GetIssues
     */
    getIssues: {
      name: "GetIssues",
      I: GetIssuesRequest,
      O: GetIssuesResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

