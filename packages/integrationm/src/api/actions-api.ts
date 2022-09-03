/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '@cob/cobjs-core';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@cob/cobjs-core';
import { RequestArgs, BaseAPI, RequiredError } from '@cob/cobjs-core';

/**
 * ActionsApi - axios parameter creator
 * @export
 */
const ActionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *  Can be used with both JSON   - the simplest way when calling from other code (or even cURL)   - or directly from an HTML form, in <code>application/x-www-form-urlencoded</code> format.
         * @summary Execute a blocking action
         * @param {string} name The name of the action
         * @param {{ [key: string]: object; }} [requestBody] The new definition payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeBlockingAction: async (name: string, requestBody?: { [key: string]: object; }, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('executeBlockingAction', 'name', name)
            const localVarPath = `/integrationm/action/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  Can be used with both JSON   - the simplest way when calling from other code (or even cURL)   - or directly from an HTML form, in <code>application/x-www-form-urlencoded</code> format.
         * @summary Execute an unblocking action
         * @param {string} name The name of the action
         * @param {{ [key: string]: object; }} [requestBody] The new definition payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeConcurrentAction: async (name: string, requestBody?: { [key: string]: object; }, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('executeConcurrentAction', 'name', name)
            const localVarPath = `/integrationm/concurrent/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ActionsApi - functional programming interface
 * @export
 */
const ActionsApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = ActionsApiAxiosParamCreator(configuration)
    return {
        /**
         *  Can be used with both JSON   - the simplest way when calling from other code (or even cURL)   - or directly from an HTML form, in <code>application/x-www-form-urlencoded</code> format.
         * @summary Execute a blocking action
         * @param {string} name The name of the action
         * @param {{ [key: string]: object; }} [requestBody] The new definition payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async executeBlockingAction(name: string, requestBody?: { [key: string]: object; }, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.executeBlockingAction(name, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         *  Can be used with both JSON   - the simplest way when calling from other code (or even cURL)   - or directly from an HTML form, in <code>application/x-www-form-urlencoded</code> format.
         * @summary Execute an unblocking action
         * @param {string} name The name of the action
         * @param {{ [key: string]: object; }} [requestBody] The new definition payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async executeConcurrentAction(name: string, requestBody?: { [key: string]: object; }, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.executeConcurrentAction(name, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * ActionsApi - object-oriented interface
 * @export
 * @class ActionsApi
 * @extends {BaseAPI}
 */
export class ActionsApi extends BaseAPI {
    /**
     *  Can be used with both JSON   - the simplest way when calling from other code (or even cURL)   - or directly from an HTML form, in <code>application/x-www-form-urlencoded</code> format.
     * @summary Execute a blocking action
     * @param {string} name The name of the action
     * @param {{ [key: string]: object; }} [requestBody] The new definition payload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApi
     */
    public executeBlockingAction(name: string, requestBody?: { [key: string]: object; }, options?: AxiosRequestConfig) {
        return ActionsApiFp(this.configuration).executeBlockingAction(name, requestBody, options).then((request) => request(this.axios));
    }

    /**
     *  Can be used with both JSON   - the simplest way when calling from other code (or even cURL)   - or directly from an HTML form, in <code>application/x-www-form-urlencoded</code> format.
     * @summary Execute an unblocking action
     * @param {string} name The name of the action
     * @param {{ [key: string]: object; }} [requestBody] The new definition payload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApi
     */
    public executeConcurrentAction(name: string, requestBody?: { [key: string]: object; }, options?: AxiosRequestConfig) {
        return ActionsApiFp(this.configuration).executeConcurrentAction(name, requestBody, options).then((request) => request(this.axios));
    }
}
