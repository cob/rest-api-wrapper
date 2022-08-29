import { Configuration } from "./configuration";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export interface RequestArgs {
    url: string;
    options: AxiosRequestConfig;
}
export declare class BaseAPI {
    protected axios: AxiosInstance;
    protected configuration: Configuration;
    constructor(configuration?: Configuration, axios?: AxiosInstance);
}
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
