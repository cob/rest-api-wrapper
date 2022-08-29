import { CookieJar } from "tough-cookie";
export declare const cookieJar: CookieJar;
export interface ConfigurationParameters {
    basePath: string;
    baseOptions?: any;
    formDataCtor?: new () => any;
}
export declare class Configuration {
    /**
     *  override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;
    constructor(param?: ConfigurationParameters);
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime: string): boolean;
}
export declare const DEFAUULT_CONFIGURATION: Configuration;
