// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file api/v1/storage/service.proto (package api.v1.storage, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CopyObjectRequest, CopyObjectResponse, CreateBucketRequest, CreateBucketResponse, CreateProviderRequest, CreateProviderResponse, DeleteBucketRequest, DeleteBucketResponse, DeleteObjectRequest, DeleteObjectResponse, DeleteProviderRequest, DeleteProviderResponse, DownloadObjectRequest, DownloadObjectResponse, GetBucketRequest, GetBucketResponse, GetObjectRequest, GetObjectResponse, GetProviderRequest, GetProviderResponse, ListBucketsRequest, ListBucketsResponse, ListObjectsRequest, ListObjectsResponse, ListProvidersRequest, ListProvidersResponse, LookupProviderRequest, LookupProviderResponse, UnlinkBucketRequest, UnlinkBucketResponse, UploadObjectRequest, UploadObjectResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1.storage.Service
 */
export const Service = {
  typeName: "api.v1.storage.Service",
  methods: {
    /**
     * @generated from rpc api.v1.storage.Service.CreateBucket
     */
    createBucket: {
      name: "CreateBucket",
      I: CreateBucketRequest,
      O: CreateBucketResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.GetBucket
     */
    getBucket: {
      name: "GetBucket",
      I: GetBucketRequest,
      O: GetBucketResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.ListBuckets
     */
    listBuckets: {
      name: "ListBuckets",
      I: ListBucketsRequest,
      O: ListBucketsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.DeleteBucket
     */
    deleteBucket: {
      name: "DeleteBucket",
      I: DeleteBucketRequest,
      O: DeleteBucketResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.UnlinkBucket
     */
    unlinkBucket: {
      name: "UnlinkBucket",
      I: UnlinkBucketRequest,
      O: UnlinkBucketResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.GetObject
     */
    getObject: {
      name: "GetObject",
      I: GetObjectRequest,
      O: GetObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.ListObjects
     */
    listObjects: {
      name: "ListObjects",
      I: ListObjectsRequest,
      O: ListObjectsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.DeleteObject
     */
    deleteObject: {
      name: "DeleteObject",
      I: DeleteObjectRequest,
      O: DeleteObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.CopyObject
     */
    copyObject: {
      name: "CopyObject",
      I: CopyObjectRequest,
      O: CopyObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.UploadObject
     */
    uploadObject: {
      name: "UploadObject",
      I: UploadObjectRequest,
      O: UploadObjectResponse,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * @generated from rpc api.v1.storage.Service.DownloadObject
     */
    downloadObject: {
      name: "DownloadObject",
      I: DownloadObjectRequest,
      O: DownloadObjectResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v1.storage.Service.CreateProvider
     */
    createProvider: {
      name: "CreateProvider",
      I: CreateProviderRequest,
      O: CreateProviderResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.DeleteProvider
     */
    deleteProvider: {
      name: "DeleteProvider",
      I: DeleteProviderRequest,
      O: DeleteProviderResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.GetProvider
     */
    getProvider: {
      name: "GetProvider",
      I: GetProviderRequest,
      O: GetProviderResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.ListProviders
     */
    listProviders: {
      name: "ListProviders",
      I: ListProvidersRequest,
      O: ListProvidersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1.storage.Service.LookupProvider
     */
    lookupProvider: {
      name: "LookupProvider",
      I: LookupProviderRequest,
      O: LookupProviderResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

