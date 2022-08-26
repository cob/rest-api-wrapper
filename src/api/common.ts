/* tslint:disable */

import { Configuration } from "./configuration"
import { RequestArgs, RequiredError } from "./base"
import { AxiosInstance, AxiosResponse } from "axios"

export const DUMMY_BASE_URL = "https://example.com"

export const assertParamExists = function (functionName: string, paramName: string, paramValue: unknown) {
  if (paramValue === null || paramValue === undefined) {
    throw new RequiredError(
      paramName,
      `Required parameter ${paramName} was null or undefined when calling ${functionName}.`
    )
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setSearchParams = function (url: URL, ...objects: any[]) {
  const searchParams = new URLSearchParams(url.search)
  for (const object of objects) {
    for (const key in object) {
      if (Array.isArray(object[key])) {
        searchParams.delete(key)
        for (const item of object[key]) {
          searchParams.append(key, item)
        }
      } else {
        searchParams.set(key, object[key])
      }
    }
  }
  url.search = searchParams.toString()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const serializeDataIfNeeded = function (value: any, requestOptions: any, configuration?: Configuration) {
  const nonString = typeof value !== "string"
  const needsSerialization =
    nonString && configuration && configuration.isJsonMime
      ? configuration.isJsonMime(requestOptions.headers["Content-Type"])
      : nonString
  return needsSerialization ? JSON.stringify(value !== undefined ? value : {}) : value || ""
}

export const toPathString = function (url: URL) {
  return url.pathname + url.search + url.hash
}

export const createRequestFunction = function (
  axiosArgs: RequestArgs,
  globalAxios: AxiosInstance,
  configuration: Configuration
) {
  return <T = unknown, R = AxiosResponse<T>>(axios: AxiosInstance = globalAxios) => {
    const axiosRequestArgs = { ...axiosArgs.options, url: configuration.basePath + axiosArgs.url }
    return axios.request<T, R>(axiosRequestArgs)
  }
}
