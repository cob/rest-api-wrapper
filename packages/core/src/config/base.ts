/* tslint:disable */

import { Configuration, DEFAUULT_CONFIGURATION } from "./configuration"
import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios"

export interface RequestArgs {
  url: string
  options: AxiosRequestConfig
}

export class BaseAPI {
  protected configuration: Configuration

  constructor(configuration?: Configuration, protected axios: AxiosInstance = globalAxios) {
    this.configuration = configuration ?? DEFAUULT_CONFIGURATION
  }
}

export class RequiredError extends Error {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  name: "RequiredError" = "RequiredError"

  constructor(public field: string, msg?: string) {
    super(msg)
  }
}
