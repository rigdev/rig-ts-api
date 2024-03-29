// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file api/v1/user/settings/service.proto (package api.v1.user.settings, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetSettingsRequest, GetSettingsResponse, UpdateSettingsRequest, UpdateSettingsResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * The Settings service provides methods for getting and updating the users
 * settings.
 *
 * @generated from service api.v1.user.settings.Service
 */
export const Service = {
  typeName: "api.v1.user.settings.Service",
  methods: {
    /**
     * Gets the users settings for the current project.
     *
     * @generated from rpc api.v1.user.settings.Service.GetSettings
     */
    getSettings: {
      name: "GetSettings",
      I: GetSettingsRequest,
      O: GetSettingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Sets the users settings for the current project.
     *
     * @generated from rpc api.v1.user.settings.Service.UpdateSettings
     */
    updateSettings: {
      name: "UpdateSettings",
      I: UpdateSettingsRequest,
      O: UpdateSettingsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

