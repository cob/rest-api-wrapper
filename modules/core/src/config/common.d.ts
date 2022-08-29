import { Configuration } from "./configuration";
import { RequestArgs } from "./base";
import { AxiosInstance, AxiosResponse } from "axios";
export declare const DUMMY_BASE_URL = "https://example.com";
export declare const assertParamExists: (functionName: string, paramName: string, paramValue: unknown) => void;
export declare const setSearchParams: (url: URL, ...objects: any[]) => void;
export declare const serializeDataIfNeeded: (value: any, requestOptions: any, configuration?: Configuration) => any;
export declare const toPathString: (url: URL) => string;
export declare const createRequestFunction: (axiosArgs: RequestArgs, globalAxios: AxiosInstance, configuration: Configuration) => <T = unknown, R = AxiosResponse<T, any>>(axios?: AxiosInstance) => Promise<R>;
