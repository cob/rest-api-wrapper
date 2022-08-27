/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '@/api/configuration';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@/api/common';
import { RequestArgs, BaseAPI, RequiredError } from '@/api/base';
import { CreateDomainRequest } from '../model';
import { DecoratedDomain } from '../model';
import { FieldError } from '../model';
import { UpdateDomainRequest } from '../model';

/**
 * DomainsApi - axios parameter creator
 * @export
 */
const DomainsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The response will return the domain with its definitions but not with it\'s field definitions.
         * @summary Add a new definition to an existing domain
         * @param {number} domainId The domain identifier
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDefinitionToDomain: async (domainId: number, definitionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainId' is not null or undefined
            assertParamExists('addDefinitionToDomain', 'domainId', domainId)
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('addDefinitionToDomain', 'definitionId', definitionId)
            const localVarPath = `/recordm/recordm/domains/{domainId}/definitions/{definitionId}`
                .replace(`{${"domainId"}}`, encodeURIComponent(String(domainId)))
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
         * @summary Creates a new domain
         * @param {CreateDomainRequest} [createDomainRequest] The new definition details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDomain: async (createDomainRequest?: CreateDomainRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/domains`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createDomainRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an existing domain
         * @param {number} domainId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDomain: async (domainId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainId' is not null or undefined
            assertParamExists('deleteDomain', 'domainId', domainId)
            const localVarPath = `/recordm/recordm/domains/{domainId}`
                .replace(`{${"domainId"}}`, encodeURIComponent(String(domainId)));
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
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Find a domain by name
         * @param {string} name The domain name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findDomainByName: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('findDomainByName', 'name', name)
            const localVarPath = `/recordm/recordm/domains/name/{name}`
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
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Retrieves all domains
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllDomains: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/domains`;
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
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Retrieve a domain by it\'s identifier
         * @param {number} domainId The domain identifier
         * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the domain and if they are equal, a 304 will be returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDomain: async (domainId: number, ifNoneMatch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainId' is not null or undefined
            assertParamExists('getDomain', 'domainId', domainId)
            const localVarPath = `/recordm/recordm/domains/{domainId}`
                .replace(`{${"domainId"}}`, encodeURIComponent(String(domainId)));
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
         * The response will return the domain with its definitions but not with it\'s field definitions.
         * @summary Remove a definition from an existing domain
         * @param {number} domainId The domain identifier
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeDefinitionFromDomain: async (domainId: number, definitionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainId' is not null or undefined
            assertParamExists('removeDefinitionFromDomain', 'domainId', domainId)
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('removeDefinitionFromDomain', 'definitionId', definitionId)
            const localVarPath = `/recordm/recordm/domains/{domainId}/definitions/{definitionId}`
                .replace(`{${"domainId"}}`, encodeURIComponent(String(domainId)))
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
         * @summary Update an existing domain
         * @param {number} domainId The domain identifier
         * @param {UpdateDomainRequest} [updateDomainRequest] The new definition details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDomain: async (domainId: number, updateDomainRequest?: UpdateDomainRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainId' is not null or undefined
            assertParamExists('updateDomain', 'domainId', domainId)
            const localVarPath = `/recordm/recordm/domains/{domainId}`
                .replace(`{${"domainId"}}`, encodeURIComponent(String(domainId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateDomainRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DomainsApi - functional programming interface
 * @export
 */
const DomainsApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = DomainsApiAxiosParamCreator(configuration)
    return {
        /**
         * The response will return the domain with its definitions but not with it\'s field definitions.
         * @summary Add a new definition to an existing domain
         * @param {number} domainId The domain identifier
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addDefinitionToDomain(domainId: number, definitionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addDefinitionToDomain(domainId, definitionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Creates a new domain
         * @param {CreateDomainRequest} [createDomainRequest] The new definition details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addDomain(createDomainRequest?: CreateDomainRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addDomain(createDomainRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Delete an existing domain
         * @param {number} domainId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDomain(domainId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDomain(domainId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Find a domain by name
         * @param {string} name The domain name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findDomainByName(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findDomainByName(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Retrieves all domains
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllDomains(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Array<DecoratedDomain>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllDomains(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Retrieve a domain by it\'s identifier
         * @param {number} domainId The domain identifier
         * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the domain and if they are equal, a 304 will be returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDomain(domainId: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDomain(domainId, ifNoneMatch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * The response will return the domain with its definitions but not with it\'s field definitions.
         * @summary Remove a definition from an existing domain
         * @param {number} domainId The domain identifier
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeDefinitionFromDomain(domainId: number, definitionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeDefinitionFromDomain(domainId, definitionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Update an existing domain
         * @param {number} domainId The domain identifier
         * @param {UpdateDomainRequest} [updateDomainRequest] The new definition details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDomain(domainId: number, updateDomainRequest?: UpdateDomainRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDomain(domainId, updateDomainRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * DomainsApi - object-oriented interface
 * @export
 * @class DomainsApi
 * @extends {BaseAPI}
 */
export class DomainsApi extends BaseAPI {
    /**
     * The response will return the domain with its definitions but not with it\'s field definitions.
     * @summary Add a new definition to an existing domain
     * @param {number} domainId The domain identifier
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public addDefinitionToDomain(domainId: number, definitionId: number, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).addDefinitionToDomain(domainId, definitionId, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Creates a new domain
     * @param {CreateDomainRequest} [createDomainRequest] The new definition details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public addDomain(createDomainRequest?: CreateDomainRequest, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).addDomain(createDomainRequest, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Delete an existing domain
     * @param {number} domainId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public deleteDomain(domainId: number, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).deleteDomain(domainId, options).then((request) => request(this.axios));
    }

    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Find a domain by name
     * @param {string} name The domain name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public findDomainByName(name: string, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).findDomainByName(name, options).then((request) => request(this.axios));
    }

    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Retrieves all domains
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public getAllDomains(options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).getAllDomains(options).then((request) => request(this.axios));
    }

    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Retrieve a domain by it\'s identifier
     * @param {number} domainId The domain identifier
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the domain and if they are equal, a 304 will be returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public getDomain(domainId: number, ifNoneMatch?: string, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).getDomain(domainId, ifNoneMatch, options).then((request) => request(this.axios));
    }

    /**
     * The response will return the domain with its definitions but not with it\'s field definitions.
     * @summary Remove a definition from an existing domain
     * @param {number} domainId The domain identifier
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public removeDefinitionFromDomain(domainId: number, definitionId: number, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).removeDefinitionFromDomain(domainId, definitionId, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Update an existing domain
     * @param {number} domainId The domain identifier
     * @param {UpdateDomainRequest} [updateDomainRequest] The new definition details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public updateDomain(domainId: number, updateDomainRequest?: UpdateDomainRequest, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).updateDomain(domainId, updateDomainRequest, options).then((request) => request(this.axios));
    }
}
