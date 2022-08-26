/* tslint:disable */

import { Configuration } from "./configuration"

// Some imports not used depending on template conditions
import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios"

export interface RequestArgs {
  url: string
  options: AxiosRequestConfig
}

export class BaseAPI {
  protected configuration: Configuration = new Configuration({ basePath: "/" })

  constructor(configuration?: Configuration, protected axios: AxiosInstance = globalAxios) {
    if (configuration) {
      this.configuration = configuration
    }
  }
}

export class RequiredError extends Error {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  name: "RequiredError" = "RequiredError"

  constructor(public field: string, msg?: string) {
    super(msg)
  }
}
