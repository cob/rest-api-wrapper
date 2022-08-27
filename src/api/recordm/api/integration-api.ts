/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '@/api/configuration';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@/api/common';
import { RequestArgs, BaseAPI, RequiredError } from '@/api/base';
import { Instance } from '../model';
import { IntegrationAddMessage } from '../model';
import { IntegrationDeleteMessage } from '../model';
import { IntegrationStats } from '../model';
import { IntegrationUpdateMessage } from '../model';

/**
 * IntegrationApi - axios parameter creator
 * @export
 */
const IntegrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes the instances that match the condition.
         * @summary Deletes one or more instances
         * @param {IntegrationDeleteMessage} [integrationDeleteMessage] A JSON doc of the specified format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        _delete: async (integrationDeleteMessage?: IntegrationDeleteMessage, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/instances/integration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(integrationDeleteMessage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds a new instance represented by the passed Object.
         * @summary Create an instance
         * @param {IntegrationAddMessage} [integrationAddMessage] A JSON doc of the specified format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        add: async (integrationAddMessage?: IntegrationAddMessage, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/instances/integration`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(integrationAddMessage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the matching instances with the passed updates.
         * @summary Update one or more instances
         * @param {IntegrationUpdateMessage} [integrationUpdateMessage] A JSON doc of the specified format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (integrationUpdateMessage?: IntegrationUpdateMessage, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/instances/integration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(integrationUpdateMessage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IntegrationApi - functional programming interface
 * @export
 */
const IntegrationApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = IntegrationApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes the instances that match the condition.
         * @summary Deletes one or more instances
         * @param {IntegrationDeleteMessage} [integrationDeleteMessage] A JSON doc of the specified format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async _delete(integrationDeleteMessage?: IntegrationDeleteMessage, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<IntegrationStats>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator._delete(integrationDeleteMessage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Adds a new instance represented by the passed Object.
         * @summary Create an instance
         * @param {IntegrationAddMessage} [integrationAddMessage] A JSON doc of the specified format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async add(integrationAddMessage?: IntegrationAddMessage, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Instance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.add(integrationAddMessage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Updates the matching instances with the passed updates.
         * @summary Update one or more instances
         * @param {IntegrationUpdateMessage} [integrationUpdateMessage] A JSON doc of the specified format
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(integrationUpdateMessage?: IntegrationUpdateMessage, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<IntegrationStats>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(integrationUpdateMessage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * IntegrationApi - object-oriented interface
 * @export
 * @class IntegrationApi
 * @extends {BaseAPI}
 */
export class IntegrationApi extends BaseAPI {
    /**
     * Deletes the instances that match the condition.
     * @summary Deletes one or more instances
     * @param {IntegrationDeleteMessage} [integrationDeleteMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public _delete(integrationDeleteMessage?: IntegrationDeleteMessage, options?: AxiosRequestConfig) {
        return IntegrationApiFp(this.configuration)._delete(integrationDeleteMessage, options).then((request) => request(this.axios));
    }

    /**
     * Adds a new instance represented by the passed Object.
     * @summary Create an instance
     * @param {IntegrationAddMessage} [integrationAddMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public add(integrationAddMessage?: IntegrationAddMessage, options?: AxiosRequestConfig) {
        return IntegrationApiFp(this.configuration).add(integrationAddMessage, options).then((request) => request(this.axios));
    }

    /**
     * Updates the matching instances with the passed updates.
     * @summary Update one or more instances
     * @param {IntegrationUpdateMessage} [integrationUpdateMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    public update(integrationUpdateMessage?: IntegrationUpdateMessage, options?: AxiosRequestConfig) {
        return IntegrationApiFp(this.configuration).update(integrationUpdateMessage, options).then((request) => request(this.axios));
    }
}
