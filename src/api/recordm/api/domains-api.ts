/* tslint:disable */
/* eslint-disable */
/**
 * RecordM API
 * The RecordM REST API<br/><br/> **Note**: To  use the \'Try it out\' buttons, you must be [logged in](/).
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateDomainRequest } from '../model';
// @ts-ignore
import { DecoratedDomain } from '../model';
// @ts-ignore
import { FieldError } from '../model';
// @ts-ignore
import { UpdateDomainRequest } from '../model';
/**
 * DomainsApi - axios parameter creator
 * @export
 */
export const DomainsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The response will return the domain with its definitions but not with it\'s field definitions.
         * @summary Add a new definition to an existing domain
         * @param {number} domainId The domain identifier
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDefinitionToDomain1: async (domainId: number, definitionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainId' is not null or undefined
            assertParamExists('addDefinitionToDomain1', 'domainId', domainId)
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('addDefinitionToDomain1', 'definitionId', definitionId)
            const localVarPath = `/recordm/domains/{domainId}/definitions/{definitionId}`
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
        addDomain1: async (createDomainRequest?: CreateDomainRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/domains`;
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
        deleteDomain1: async (domainId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainId' is not null or undefined
            assertParamExists('deleteDomain1', 'domainId', domainId)
            const localVarPath = `/recordm/domains/{domainId}`
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
        findDomainByName1: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('findDomainByName1', 'name', name)
            const localVarPath = `/recordm/domains/name/{name}`
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
        getAllDomains1: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/domains`;
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
        getDomain1: async (domainId: number, ifNoneMatch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainId' is not null or undefined
            assertParamExists('getDomain1', 'domainId', domainId)
            const localVarPath = `/recordm/domains/{domainId}`
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
        removeDefinitionFromDomain1: async (domainId: number, definitionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainId' is not null or undefined
            assertParamExists('removeDefinitionFromDomain1', 'domainId', domainId)
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('removeDefinitionFromDomain1', 'definitionId', definitionId)
            const localVarPath = `/recordm/domains/{domainId}/definitions/{definitionId}`
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
        update1: async (domainId: number, updateDomainRequest?: UpdateDomainRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domainId' is not null or undefined
            assertParamExists('update1', 'domainId', domainId)
            const localVarPath = `/recordm/domains/{domainId}`
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
export const DomainsApiFp = function(configuration?: Configuration) {
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
        async addDefinitionToDomain1(domainId: number, definitionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addDefinitionToDomain1(domainId, definitionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Creates a new domain
         * @param {CreateDomainRequest} [createDomainRequest] The new definition details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addDomain1(createDomainRequest?: CreateDomainRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addDomain1(createDomainRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete an existing domain
         * @param {number} domainId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDomain1(domainId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDomain1(domainId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Find a domain by name
         * @param {string} name The domain name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findDomainByName1(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findDomainByName1(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Retrieves all domains
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllDomains1(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DecoratedDomain>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllDomains1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Retrieve a domain by it\'s identifier
         * @param {number} domainId The domain identifier
         * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the domain and if they are equal, a 304 will be returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDomain1(domainId: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDomain1(domainId, ifNoneMatch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The response will return the domain with its definitions but not with it\'s field definitions.
         * @summary Remove a definition from an existing domain
         * @param {number} domainId The domain identifier
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeDefinitionFromDomain1(domainId: number, definitionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeDefinitionFromDomain1(domainId, definitionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update an existing domain
         * @param {number} domainId The domain identifier
         * @param {UpdateDomainRequest} [updateDomainRequest] The new definition details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update1(domainId: number, updateDomainRequest?: UpdateDomainRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DecoratedDomain>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update1(domainId, updateDomainRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DomainsApi - factory interface
 * @export
 */
export const DomainsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DomainsApiFp(configuration)
    return {
        /**
         * The response will return the domain with its definitions but not with it\'s field definitions.
         * @summary Add a new definition to an existing domain
         * @param {number} domainId The domain identifier
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDefinitionToDomain1(domainId: number, definitionId: number, options?: any): AxiosPromise<DecoratedDomain> {
            return localVarFp.addDefinitionToDomain1(domainId, definitionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates a new domain
         * @param {CreateDomainRequest} [createDomainRequest] The new definition details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDomain1(createDomainRequest?: CreateDomainRequest, options?: any): AxiosPromise<DecoratedDomain> {
            return localVarFp.addDomain1(createDomainRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an existing domain
         * @param {number} domainId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDomain1(domainId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteDomain1(domainId, options).then((request) => request(axios, basePath));
        },
        /**
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Find a domain by name
         * @param {string} name The domain name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findDomainByName1(name: string, options?: any): AxiosPromise<DecoratedDomain> {
            return localVarFp.findDomainByName1(name, options).then((request) => request(axios, basePath));
        },
        /**
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Retrieves all domains
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllDomains1(options?: any): AxiosPromise<Array<DecoratedDomain>> {
            return localVarFp.getAllDomains1(options).then((request) => request(axios, basePath));
        },
        /**
         * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
         * @summary Retrieve a domain by it\'s identifier
         * @param {number} domainId The domain identifier
         * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the domain and if they are equal, a 304 will be returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDomain1(domainId: number, ifNoneMatch?: string, options?: any): AxiosPromise<DecoratedDomain> {
            return localVarFp.getDomain1(domainId, ifNoneMatch, options).then((request) => request(axios, basePath));
        },
        /**
         * The response will return the domain with its definitions but not with it\'s field definitions.
         * @summary Remove a definition from an existing domain
         * @param {number} domainId The domain identifier
         * @param {number} definitionId The definition identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeDefinitionFromDomain1(domainId: number, definitionId: number, options?: any): AxiosPromise<DecoratedDomain> {
            return localVarFp.removeDefinitionFromDomain1(domainId, definitionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an existing domain
         * @param {number} domainId The domain identifier
         * @param {UpdateDomainRequest} [updateDomainRequest] The new definition details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update1(domainId: number, updateDomainRequest?: UpdateDomainRequest, options?: any): AxiosPromise<DecoratedDomain> {
            return localVarFp.update1(domainId, updateDomainRequest, options).then((request) => request(axios, basePath));
        },
    };
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
    public addDefinitionToDomain1(domainId: number, definitionId: number, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).addDefinitionToDomain1(domainId, definitionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates a new domain
     * @param {CreateDomainRequest} [createDomainRequest] The new definition details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public addDomain1(createDomainRequest?: CreateDomainRequest, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).addDomain1(createDomainRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete an existing domain
     * @param {number} domainId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public deleteDomain1(domainId: number, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).deleteDomain1(domainId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Find a domain by name
     * @param {string} name The domain name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public findDomainByName1(name: string, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).findDomainByName1(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Retrieves all domains
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    public getAllDomains1(options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).getAllDomains1(options).then((request) => request(this.axios, this.basePath));
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
    public getDomain1(domainId: number, ifNoneMatch?: string, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).getDomain1(domainId, ifNoneMatch, options).then((request) => request(this.axios, this.basePath));
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
    public removeDefinitionFromDomain1(domainId: number, definitionId: number, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).removeDefinitionFromDomain1(domainId, definitionId, options).then((request) => request(this.axios, this.basePath));
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
    public update1(domainId: number, updateDomainRequest?: UpdateDomainRequest, options?: AxiosRequestConfig) {
        return DomainsApiFp(this.configuration).update1(domainId, updateDomainRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
