/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '@cob/cobjs-core';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@cob/cobjs-core';
import { RequestArgs, BaseAPI, RequiredError } from '@cob/cobjs-core';
import { DecoratedUser } from '../model';
import { FieldError } from '../model';
import { UpdateUserRequest } from '../model';

/**
 * UsersApi - axios parameter creator
 * @export
 */
const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves the full details of a user. Optionally, it can also include information about the users that this user is substituing.
         * @summary Retrieves a user by it\'s username
         * @param {string} username The user username
         * @param {boolean} [substitutedUsers] If it should load the substituted users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByUsername: async (username: string, substitutedUsers?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('getUserByUsername', 'username', username)
            const localVarPath = `/userm/userm/user/username/{username}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
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

            if (substitutedUsers !== undefined) {
                localVarQueryParameter['substitutedUsers'] = substitutedUsers;
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
         * 
         * @summary Update an existing user
         * @param {number} id The user identifier
         * @param {UpdateUserRequest} [updateUserRequest] The updated user information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (id: number, updateUserRequest?: UpdateUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateUser', 'id', id)
            const localVarPath = `/userm/userm/user/{id}`
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
const UsersApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves the full details of a user. Optionally, it can also include information about the users that this user is substituing.
         * @summary Retrieves a user by it\'s username
         * @param {string} username The user username
         * @param {boolean} [substitutedUsers] If it should load the substituted users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserByUsername(username: string, substitutedUsers?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserByUsername(username, substitutedUsers, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Update an existing user
         * @param {number} id The user identifier
         * @param {UpdateUserRequest} [updateUserRequest] The updated user information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(id: number, updateUserRequest?: UpdateUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<DecoratedUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(id, updateUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Retrieves the full details of a user. Optionally, it can also include information about the users that this user is substituing.
     * @summary Retrieves a user by it\'s username
     * @param {string} username The user username
     * @param {boolean} [substitutedUsers] If it should load the substituted users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUserByUsername(username: string, substitutedUsers?: boolean, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUserByUsername(username, substitutedUsers, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Update an existing user
     * @param {number} id The user identifier
     * @param {UpdateUserRequest} [updateUserRequest] The updated user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public updateUser(id: number, updateUserRequest?: UpdateUserRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).updateUser(id, updateUserRequest, options).then((request) => request(this.axios));
    }
}
