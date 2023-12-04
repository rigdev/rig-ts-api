// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file api/v1/project/service.proto (package api.v1.project, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateRequest, CreateResponse, DeleteRequest, DeleteResponse, GetCustomMetricsRequest, GetCustomMetricsResponse, GetLicenseInfoRequest, GetLicenseInfoResponse, GetRequest, GetResponse, ListRequest, ListResponse, PublicKeyRequest, PublicKeyResponse, UpdateRequest, UpdateResponse, UseRequest, UseResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * The service to manage your project in Users
 *
 * @generated from service api.v1.project.Service
 */
export const Service = {
  typeName: "api.v1.project.Service",
  methods: {
    /**
     * Create project
     *
     * @generated from rpc api.v1.project.Service.Create
     */
    create: {
      name: "Create",
      I: CreateRequest,
      O: CreateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Delete project (everything in Users)
     *
     * @generated from rpc api.v1.project.Service.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteRequest,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get project
     *
     * @generated from rpc api.v1.project.Service.Get
     */
    get: {
      name: "Get",
      I: GetRequest,
      O: GetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get project list
     *
     * @generated from rpc api.v1.project.Service.List
     */
    list: {
      name: "List",
      I: ListRequest,
      O: ListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update updates the profile of the project
     *
     * @generated from rpc api.v1.project.Service.Update
     */
    update: {
      name: "Update",
      I: UpdateRequest,
      O: UpdateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get public key of system
     *
     * @generated from rpc api.v1.project.Service.PublicKey
     */
    publicKey: {
      name: "PublicKey",
      I: PublicKeyRequest,
      O: PublicKeyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Use generates a project token for editing the project as the current
     * user.
     *
     * @generated from rpc api.v1.project.Service.Use
     */
    use: {
      name: "Use",
      I: UseRequest,
      O: UseResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get License Information
     *
     * @generated from rpc api.v1.project.Service.GetLicenseInfo
     */
    getLicenseInfo: {
      name: "GetLicenseInfo",
      I: GetLicenseInfoRequest,
      O: GetLicenseInfoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.project.Service.GetCustomMetrics
     */
    getCustomMetrics: {
      name: "GetCustomMetrics",
      I: GetCustomMetricsRequest,
      O: GetCustomMetricsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

