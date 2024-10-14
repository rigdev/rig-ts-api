// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file api/v1/metrics/service.proto (package api.v1.metrics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetMetricsExpressionRequest, GetMetricsExpressionResponse, GetMetricsManyRequest, GetMetricsManyResponse, GetMetricsRequest, GetMetricsResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.metrics.Service
 */
export const Service = {
  typeName: "api.v1.metrics.Service",
  methods: {
    /**
     * Retrieve metrics. metric_type is mandatory, while the rest of the fields
     * in the tags are optional. If project, env or capsule is not
     * specified, they will be treated as wildcards.
     *
     * @generated from rpc api.v1.metrics.Service.GetMetrics
     */
    getMetrics: {
      name: "GetMetrics",
      I: GetMetricsRequest,
      O: GetMetricsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Retrive metrics for multiple sets of tags at a time. Metrics within the
     * same set of tags will be in ascending order of timestamp.
     *
     * @generated from rpc api.v1.metrics.Service.GetMetricsMany
     */
    getMetricsMany: {
      name: "GetMetricsMany",
      I: GetMetricsManyRequest,
      O: GetMetricsManyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.metrics.Service.GetMetricsExpression
     */
    getMetricsExpression: {
      name: "GetMetricsExpression",
      I: GetMetricsExpressionRequest,
      O: GetMetricsExpressionResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

