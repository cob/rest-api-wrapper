/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '@/api/configuration';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@/api/common';
import { RequestArgs, BaseAPI, RequiredError } from '@/api/base';
import { CreateDefinitionRequest } from '../model';
import { DecoratedDefinition } from '../model';
import { FieldError } from '../model';
import { UpdateDefinitionRequest } from '../model';

/**
 * DefinitionsApi - axios parameter creator
 * @export
 */
const DefinitionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Clones an existing definition
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloneDefinition: async (definitionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('cloneDefinition', 'definitionId', definitionId)
            const localVarPath = `/recordm/definitions/{definitionId}/clone`
                .replace(`{${"definitionId"}}`, encodeURIComponent(String(definitionId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an existing definition
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDefinition: async (definitionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('deleteDefinition', 'definitionId', definitionId)
            const localVarPath = `/recordm/definitions/{definitionId}`
                .replace(`{${"definitionId"}}`, encodeURIComponent(String(definitionId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Download a definition
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exportDefinition: async (definitionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('exportDefinition', 'definitionId', definitionId)
            const localVarPath = `/recordm/definitions/{definitionId}/export`
                .replace(`{${"definitionId"}}`, encodeURIComponent(String(definitionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a sinple representation of all enabled definitions by default.  To include disabled definitions set the query parameter `includeDisbaled` to true.  The result will not include the field definitions.
         * @summary Retrieves all definitions
         * @param {boolean} [includeDisabled] If it should include inactive definitions
         * @param {string} [name] Restrict results to definitons with name matching
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllDefinitions: async (includeDisabled?: boolean, name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/definitions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required

            if (includeDisabled !== undefined) {
                localVarQueryParameter['includeDisabled'] = includeDisabled;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the full details about a specific definition. When setting export to true it will return a clone of the definition.
         * @summary Retrieves a specific definition including its fields.
         * @param {number} definitionId The definition identifier
         * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the definition and if they are equal, a 304 will be returned.
         * @param {boolean} [_export] When true it will return a clone of the definition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefinition: async (definitionId: number, ifNoneMatch?: string, _export?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('getDefinition', 'definitionId', definitionId)
            const localVarPath = `/recordm/definitions/{definitionId}`
                .replace(`{${"definitionId"}}`, encodeURIComponent(String(definitionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required

            if (_export !== undefined) {
                localVarQueryParameter['export'] = _export;
            }

            if (ifNoneMatch !== undefined && ifNoneMatch !== null) {
                localVarHeaderParameter['If-None-Match'] = String(ifNoneMatch);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the full details about a definition.
         * @summary Retrieves a specific that match a provided name.
         * @param {string} name The definition name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefinitionByName: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getDefinitionByName', 'name', name)
            const localVarPath = `/recordm/definitions/name/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a new definition
         * @param {CreateDefinitionRequest} [createDefinitionRequest] The new definition payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveDefinition: async (createDefinitionRequest?: CreateDefinitionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/definitions`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createDefinitionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an existing definition
         * @param {number} definitionId The definition identifier
         * @param {UpdateDefinitionRequest} [updateDefinitionRequest] The definition object with the updated details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefinition: async (definitionId: number, updateDefinitionRequest?: UpdateDefinitionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('updateDefinition', 'definitionId', definitionId)
            const localVarPath = `/recordm/definitions/{definitionId}`
                .replace(`{${"definitionId"}}`, encodeURIComponent(String(definitionId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateDefinitionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Change the state of an existing definition
         * @param {number} definitionId The definition identifier
         * @param {string} state The new state
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDefinitionState: async (definitionId: number, state: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('updateDefinitionState', 'definitionId', definitionId)
            // verify required parameter 'state' is not null or undefined
            assertParamExists('updateDefinitionState', 'state', state)
            const localVarPath = `/recordm/definitions/{definitionId}/state/{state}`
                .replace(`{${"definitionId"}}`, encodeURIComponent(String(definitionId)))
                .replace(`{${"state"}}`, encodeURIComponent(String(state)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefinitionsApi - functional programming interface
 * @export
 */
const DefinitionsApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = DefinitionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Clones an existing definition
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloneDefinition(definitionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cloneDefinition(definitionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Delete an existing definition
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDefinition(definitionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDefinition(definitionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Download a definition
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async exportDefinition(definitionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.exportDefinition(definitionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves a sinple representation of all enabled definitions by default.  To include disabled definitions set the query parameter `includeDisbaled` to true.  The result will not include the field definitions.
         * @summary Retrieves all definitions
         * @param {boolean} [includeDisabled] If it should include inactive definitions
         * @param {string} [name] Restrict results to definitons with name matching
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllDefinitions(includeDisabled?: boolean, name?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Array<DecoratedDefinition>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllDefinitions(includeDisabled, name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves the full details about a specific definition. When setting export to true it will return a clone of the definition.
         * @summary Retrieves a specific definition including its fields.
         * @param {number} definitionId The definition identifier
         * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the definition and if they are equal, a 304 will be returned.
         * @param {boolean} [_export] When true it will return a clone of the definition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDefinition(definitionId: number, ifNoneMatch?: string, _export?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefinition(definitionId, ifNoneMatch, _export, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves the full details about a definition.
         * @summary Retrieves a specific that match a provided name.
         * @param {string} name The definition name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDefinitionByName(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefinitionByName(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Create a new definition
         * @param {CreateDefinitionRequest} [createDefinitionRequest] The new definition payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async saveDefinition(createDefinitionRequest?: CreateDefinitionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveDefinition(createDefinitionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Update an existing definition
         * @param {number} definitionId The definition identifier
         * @param {UpdateDefinitionRequest} [updateDefinitionRequest] The definition object with the updated details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDefinition(definitionId: number, updateDefinitionRequest?: UpdateDefinitionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDefinition(definitionId, updateDefinitionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Change the state of an existing definition
         * @param {number} definitionId The definition identifier
         * @param {string} state The new state
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDefinitionState(definitionId: number, state: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDefinitionState(definitionId, state, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * DefinitionsApi - object-oriented interface
 * @export
 * @class DefinitionsApi
 * @extends {BaseAPI}
 */
export class DefinitionsApi extends BaseAPI {
    /**
     * 
     * @summary Clones an existing definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    public cloneDefinition(definitionId: number, options?: AxiosRequestConfig) {
        return DefinitionsApiFp(this.configuration).cloneDefinition(definitionId, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Delete an existing definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    public deleteDefinition(definitionId: number, options?: AxiosRequestConfig) {
        return DefinitionsApiFp(this.configuration).deleteDefinition(definitionId, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Download a definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    public exportDefinition(definitionId: number, options?: AxiosRequestConfig) {
        return DefinitionsApiFp(this.configuration).exportDefinition(definitionId, options).then((request) => request(this.axios));
    }

    /**
     * Retrieves a sinple representation of all enabled definitions by default.  To include disabled definitions set the query parameter `includeDisbaled` to true.  The result will not include the field definitions.
     * @summary Retrieves all definitions
     * @param {boolean} [includeDisabled] If it should include inactive definitions
     * @param {string} [name] Restrict results to definitons with name matching
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    public getAllDefinitions(includeDisabled?: boolean, name?: string, options?: AxiosRequestConfig) {
        return DefinitionsApiFp(this.configuration).getAllDefinitions(includeDisabled, name, options).then((request) => request(this.axios));
    }

    /**
     * Retrieves the full details about a specific definition. When setting export to true it will return a clone of the definition.
     * @summary Retrieves a specific definition including its fields.
     * @param {number} definitionId The definition identifier
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the definition and if they are equal, a 304 will be returned.
     * @param {boolean} [_export] When true it will return a clone of the definition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    public getDefinition(definitionId: number, ifNoneMatch?: string, _export?: boolean, options?: AxiosRequestConfig) {
        return DefinitionsApiFp(this.configuration).getDefinition(definitionId, ifNoneMatch, _export, options).then((request) => request(this.axios));
    }

    /**
     * Retrieves the full details about a definition.
     * @summary Retrieves a specific that match a provided name.
     * @param {string} name The definition name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    public getDefinitionByName(name: string, options?: AxiosRequestConfig) {
        return DefinitionsApiFp(this.configuration).getDefinitionByName(name, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Create a new definition
     * @param {CreateDefinitionRequest} [createDefinitionRequest] The new definition payload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    public saveDefinition(createDefinitionRequest?: CreateDefinitionRequest, options?: AxiosRequestConfig) {
        return DefinitionsApiFp(this.configuration).saveDefinition(createDefinitionRequest, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Update an existing definition
     * @param {number} definitionId The definition identifier
     * @param {UpdateDefinitionRequest} [updateDefinitionRequest] The definition object with the updated details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    public updateDefinition(definitionId: number, updateDefinitionRequest?: UpdateDefinitionRequest, options?: AxiosRequestConfig) {
        return DefinitionsApiFp(this.configuration).updateDefinition(definitionId, updateDefinitionRequest, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Change the state of an existing definition
     * @param {number} definitionId The definition identifier
     * @param {string} state The new state
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    public updateDefinitionState(definitionId: number, state: string, options?: AxiosRequestConfig) {
        return DefinitionsApiFp(this.configuration).updateDefinitionState(definitionId, state, options).then((request) => request(this.axios));
    }
}
