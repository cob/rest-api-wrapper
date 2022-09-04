/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '@cob/cobjs-core';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@cob/cobjs-core';
import { RequestArgs, BaseAPI, RequiredError } from '@cob/cobjs-core';
import { DecoratedInstance } from '../model';
import { Instance } from '../model';

/**
 * InstancesApi - axios parameter creator
 * @export
 */
const InstancesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds a new instance represented by the passed Object.
         * @summary Add an instance
         * @param {Instance} instance the instance to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addInstance: async (instance: Instance, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'instance' is not null or undefined
            assertParamExists('addInstance', 'instance', instance)
            const localVarPath = `/recordm/recordm/instances`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(instance, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds a LogM log entry to an instance.
         * @summary Add log to instance
         * @param {number} id The instance id
         * @param {string} [body] The log message
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addLogMessageToInstance: async (id: number, body?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('addLogMessageToInstance', 'id', id)
            const localVarPath = `/recordm/recordm/instances/{id}/log`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an instance.
         * @summary Delete an instance
         * @param {number} id The id of the instance to delete
         * @param {boolean} [ignoreRefs] If ignoreRefs is true, then the instance will be deleted even if other instances are referencing it. Otherwise an error will be returned if there are instances with a reference to it. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteInstance: async (id: number, ignoreRefs?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteInstance', 'id', id)
            const localVarPath = `/recordm/recordm/instances/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (ignoreRefs !== undefined) {
                localVarQueryParameter['ignoreRefs'] = ignoreRefs;
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
         * Download a file that is attached to a $file field
         * @summary Download file from field in instance
         * @param {string} id The id of the instance
         * @param {string} fieldDefinitionId The id of the field definition of the $file field
         * @param {string} filename The filename of the file to download.
         * @param {string} [disposition] The Content-Disposition to use when downloading the file. Only useful when used as link in a webpage, to control if it should be downloaded or shown inline.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadFile: async (id: string, fieldDefinitionId: string, filename: string, disposition?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('downloadFile', 'id', id)
            // verify required parameter 'fieldDefinitionId' is not null or undefined
            assertParamExists('downloadFile', 'fieldDefinitionId', fieldDefinitionId)
            // verify required parameter 'filename' is not null or undefined
            assertParamExists('downloadFile', 'filename', filename)
            const localVarPath = `/recordm/recordm/instances/{id}/files/{fieldDefinitionId}/{filename}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"fieldDefinitionId"}}`, encodeURIComponent(String(fieldDefinitionId)))
                .replace(`{${"filename"}}`, encodeURIComponent(String(filename)));
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

            if (disposition !== undefined) {
                localVarQueryParameter['disposition'] = disposition;
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
         * Obtains a representation of an instance.
         * @summary Get an instance
         * @param {number} id 
         * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the instance and if they are equal, a 304 will be returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstance: async (id: number, ifNoneMatch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getInstance', 'id', id)
            const localVarPath = `/recordm/recordm/instances/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Obtains a representation of an instance with no values. Useful for using as a starting point for creating a new instance.
         * @summary Get a new empty instance
         * @param {number} definitionId The id of the definition of which we want the empty instance.
         * @param {boolean} [withDefaults] If true, all the fields with defined default values will have them already filled. If false, all the fields will have empty values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNewInstance: async (definitionId: number, withDefaults?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'definitionId' is not null or undefined
            assertParamExists('getNewInstance', 'definitionId', definitionId)
            const localVarPath = `/recordm/recordm/instances/empty/definition/{definitionId}`
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

            if (withDefaults !== undefined) {
                localVarQueryParameter['withDefaults'] = withDefaults;
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
         * Updates an instance with the complete representation passed.
         * @summary Update an instance
         * @param {number} id The id of the instance to update
         * @param {Instance} instance the updated instance
         * @param {boolean} [acceptOutdated] Should outdated $extRef fields be accepted?
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInstance: async (id: number, instance: Instance, acceptOutdated?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateInstance', 'id', id)
            // verify required parameter 'instance' is not null or undefined
            assertParamExists('updateInstance', 'instance', instance)
            const localVarPath = `/recordm/recordm/instances/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (acceptOutdated !== undefined) {
                localVarQueryParameter['acceptOutdated'] = acceptOutdated;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(instance, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Upload a file to be used as a value for a $file field
         * @summary Upload file to field in instance
         * @param {string} id When uploading to an existing instance, it\&#39;s the id of the instance. When uploading for an instance that doesn\&#39;t yet exist, it should be an UUID that matches the one the instance will have on creation. This way the already uploaded files will be moved to the final destination.
         * @param {string} fieldDefinitionId The id of the field definition of the $file field
         * @param {any} [file] The file to upload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile: async (id: string, fieldDefinitionId: string, file?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('uploadFile', 'id', id)
            // verify required parameter 'fieldDefinitionId' is not null or undefined
            assertParamExists('uploadFile', 'fieldDefinitionId', fieldDefinitionId)
            const localVarPath = `/recordm/recordm/instances/{id}/files/{fieldDefinitionId}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"fieldDefinitionId"}}`, encodeURIComponent(String(fieldDefinitionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication cobtoken required


            if (file !== undefined) { 
                localVarFormParams.append('file', new Blob([JSON.stringify(file)], { type: "application/json", }));
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InstancesApi - functional programming interface
 * @export
 */
const InstancesApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = InstancesApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a new instance represented by the passed Object.
         * @summary Add an instance
         * @param {Instance} instance the instance to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addInstance(instance: Instance, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addInstance(instance, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Adds a LogM log entry to an instance.
         * @summary Add log to instance
         * @param {number} id The instance id
         * @param {string} [body] The log message
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addLogMessageToInstance(id: number, body?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addLogMessageToInstance(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Deletes an instance.
         * @summary Delete an instance
         * @param {number} id The id of the instance to delete
         * @param {boolean} [ignoreRefs] If ignoreRefs is true, then the instance will be deleted even if other instances are referencing it. Otherwise an error will be returned if there are instances with a reference to it. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteInstance(id: number, ignoreRefs?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteInstance(id, ignoreRefs, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Download a file that is attached to a $file field
         * @summary Download file from field in instance
         * @param {string} id The id of the instance
         * @param {string} fieldDefinitionId The id of the field definition of the $file field
         * @param {string} filename The filename of the file to download.
         * @param {string} [disposition] The Content-Disposition to use when downloading the file. Only useful when used as link in a webpage, to control if it should be downloaded or shown inline.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadFile(id: string, fieldDefinitionId: string, filename: string, disposition?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadFile(id, fieldDefinitionId, filename, disposition, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Obtains a representation of an instance.
         * @summary Get an instance
         * @param {number} id 
         * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the instance and if they are equal, a 304 will be returned.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInstance(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedInstance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInstance(id, ifNoneMatch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Obtains a representation of an instance with no values. Useful for using as a starting point for creating a new instance.
         * @summary Get a new empty instance
         * @param {number} definitionId The id of the definition of which we want the empty instance.
         * @param {boolean} [withDefaults] If true, all the fields with defined default values will have them already filled. If false, all the fields will have empty values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNewInstance(definitionId: number, withDefaults?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedInstance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNewInstance(definitionId, withDefaults, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Updates an instance with the complete representation passed.
         * @summary Update an instance
         * @param {number} id The id of the instance to update
         * @param {Instance} instance the updated instance
         * @param {boolean} [acceptOutdated] Should outdated $extRef fields be accepted?
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateInstance(id: number, instance: Instance, acceptOutdated?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInstance(id, instance, acceptOutdated, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Upload a file to be used as a value for a $file field
         * @summary Upload file to field in instance
         * @param {string} id When uploading to an existing instance, it\&#39;s the id of the instance. When uploading for an instance that doesn\&#39;t yet exist, it should be an UUID that matches the one the instance will have on creation. This way the already uploaded files will be moved to the final destination.
         * @param {string} fieldDefinitionId The id of the field definition of the $file field
         * @param {any} [file] The file to upload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadFile(id: string, fieldDefinitionId: string, file?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadFile(id, fieldDefinitionId, file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * InstancesApi - object-oriented interface
 * @export
 * @class InstancesApi
 * @extends {BaseAPI}
 */
export class InstancesApi extends BaseAPI {
    /**
     * Adds a new instance represented by the passed Object.
     * @summary Add an instance
     * @param {Instance} instance the instance to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public addInstance(instance: Instance, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).addInstance(instance, options).then((request) => request(this.axios));
    }

    /**
     * Adds a LogM log entry to an instance.
     * @summary Add log to instance
     * @param {number} id The instance id
     * @param {string} [body] The log message
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public addLogMessageToInstance(id: number, body?: string, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).addLogMessageToInstance(id, body, options).then((request) => request(this.axios));
    }

    /**
     * Deletes an instance.
     * @summary Delete an instance
     * @param {number} id The id of the instance to delete
     * @param {boolean} [ignoreRefs] If ignoreRefs is true, then the instance will be deleted even if other instances are referencing it. Otherwise an error will be returned if there are instances with a reference to it. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public deleteInstance(id: number, ignoreRefs?: boolean, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).deleteInstance(id, ignoreRefs, options).then((request) => request(this.axios));
    }

    /**
     * Download a file that is attached to a $file field
     * @summary Download file from field in instance
     * @param {string} id The id of the instance
     * @param {string} fieldDefinitionId The id of the field definition of the $file field
     * @param {string} filename The filename of the file to download.
     * @param {string} [disposition] The Content-Disposition to use when downloading the file. Only useful when used as link in a webpage, to control if it should be downloaded or shown inline.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public downloadFile(id: string, fieldDefinitionId: string, filename: string, disposition?: string, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).downloadFile(id, fieldDefinitionId, filename, disposition, options).then((request) => request(this.axios));
    }

    /**
     * Obtains a representation of an instance.
     * @summary Get an instance
     * @param {number} id 
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the instance and if they are equal, a 304 will be returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public getInstance(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).getInstance(id, ifNoneMatch, options).then((request) => request(this.axios));
    }

    /**
     * Obtains a representation of an instance with no values. Useful for using as a starting point for creating a new instance.
     * @summary Get a new empty instance
     * @param {number} definitionId The id of the definition of which we want the empty instance.
     * @param {boolean} [withDefaults] If true, all the fields with defined default values will have them already filled. If false, all the fields will have empty values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public getNewInstance(definitionId: number, withDefaults?: boolean, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).getNewInstance(definitionId, withDefaults, options).then((request) => request(this.axios));
    }

    /**
     * Updates an instance with the complete representation passed.
     * @summary Update an instance
     * @param {number} id The id of the instance to update
     * @param {Instance} instance the updated instance
     * @param {boolean} [acceptOutdated] Should outdated $extRef fields be accepted?
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public updateInstance(id: number, instance: Instance, acceptOutdated?: boolean, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).updateInstance(id, instance, acceptOutdated, options).then((request) => request(this.axios));
    }

    /**
     * Upload a file to be used as a value for a $file field
     * @summary Upload file to field in instance
     * @param {string} id When uploading to an existing instance, it\&#39;s the id of the instance. When uploading for an instance that doesn\&#39;t yet exist, it should be an UUID that matches the one the instance will have on creation. This way the already uploaded files will be moved to the final destination.
     * @param {string} fieldDefinitionId The id of the field definition of the $file field
     * @param {any} [file] The file to upload.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public uploadFile(id: string, fieldDefinitionId: string, file?: any, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).uploadFile(id, fieldDefinitionId, file, options).then((request) => request(this.axios));
    }
}
