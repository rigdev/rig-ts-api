// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file api/v1/image/service.proto (package api.v1.image, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddRequest, AddResponse, DeleteRequest, DeleteResponse, GetImageInfoRequest, GetImageInfoResponse, GetRepositoryInfoRequest, GetRepositoryInfoResponse, GetRequest, GetResponse, ListRequest, ListResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.image.Service
 */
export const Service = {
  typeName: "api.v1.image.Service",
  methods: {
    /**
     * Get Information about an image in a image.
     *
     * @generated from rpc api.v1.image.Service.GetImageInfo
     */
    getImageInfo: {
      name: "GetImageInfo",
      I: GetImageInfoRequest,
      O: GetImageInfoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get Information about a docker registry repository.
     *
     * @generated from rpc api.v1.image.Service.GetRepositoryInfo
     */
    getRepositoryInfo: {
      name: "GetRepositoryInfo",
      I: GetRepositoryInfoRequest,
      O: GetRepositoryInfoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get a image.
     *
     * @generated from rpc api.v1.image.Service.Get
     */
    get: {
      name: "Get",
      I: GetRequest,
      O: GetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Add a new image.
     * Images are immutable and cannot change. Add a new image to make
     * changes from an existing one.
     *
     * @generated from rpc api.v1.image.Service.Add
     */
    add: {
      name: "Add",
      I: AddRequest,
      O: AddResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List images for a capsule.
     *
     * @generated from rpc api.v1.image.Service.List
     */
    list: {
      name: "List",
      I: ListRequest,
      O: ListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a image.
     *
     * @generated from rpc api.v1.image.Service.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteRequest,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

