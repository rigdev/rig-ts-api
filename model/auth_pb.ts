// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file model/auth.proto (package model, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum model.LoginType
 */
export enum LoginType {
  /**
   * @generated from enum value: LOGIN_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: LOGIN_TYPE_EMAIL_PASSWORD = 1;
   */
  EMAIL_PASSWORD = 1,

  /**
   * @generated from enum value: LOGIN_TYPE_PHONE_PASSWORD = 2;
   */
  PHONE_PASSWORD = 2,

  /**
   * @generated from enum value: LOGIN_TYPE_USERNAME_PASSWORD = 3;
   */
  USERNAME_PASSWORD = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(LoginType)
proto3.util.setEnumType(LoginType, "model.LoginType", [
  { no: 0, name: "LOGIN_TYPE_UNSPECIFIED" },
  { no: 1, name: "LOGIN_TYPE_EMAIL_PASSWORD" },
  { no: 2, name: "LOGIN_TYPE_PHONE_PASSWORD" },
  { no: 3, name: "LOGIN_TYPE_USERNAME_PASSWORD" },
]);

/**
 * @generated from enum model.OauthProvider
 */
export enum OauthProvider {
  /**
   * @generated from enum value: OAUTH_PROVIDER_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: OAUTH_PROVIDER_GOOGLE = 1;
   */
  GOOGLE = 1,

  /**
   * @generated from enum value: OAUTH_PROVIDER_GITHUB = 2;
   */
  GITHUB = 2,

  /**
   * @generated from enum value: OAUTH_PROVIDER_FACEBOOK = 3;
   */
  FACEBOOK = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(OauthProvider)
proto3.util.setEnumType(OauthProvider, "model.OauthProvider", [
  { no: 0, name: "OAUTH_PROVIDER_UNSPECIFIED" },
  { no: 1, name: "OAUTH_PROVIDER_GOOGLE" },
  { no: 2, name: "OAUTH_PROVIDER_GITHUB" },
  { no: 3, name: "OAUTH_PROVIDER_FACEBOOK" },
]);

