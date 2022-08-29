/* tslint:disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../../../core/src/config/configuration';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@hm/core';
import { RequestArgs, BaseAPI, RequiredError } from '../../../core/src/config/base';
import { ReportGenerationRequest } from '../model';

/**
 * ReportsApi - axios parameter creator
 * @export
 */
const ReportsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Can be used with both JSON - the simplest way when calling from other code (or even cURL) - or directly from an HTML form, in <code>application/x-www-form-urlencoded</code> format.
         * @summary Generate Report
         * @param {ReportGenerationRequest} [reportGenerationRequest] The params passed to the report.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generate: async (reportGenerationRequest?: ReportGenerationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/reportm/report`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(reportGenerationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * To simplify development of new report templates. Arguments to the template can be passed as query string args.
         * @summary Test a report template
         * @param {any} [f] The template excel file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        test: async (f?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/reportm/report/test`;
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


            if (f !== undefined) { 
                localVarFormParams.append('f', f as any);
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
 * ReportsApi - functional programming interface
 * @export
 */
const ReportsApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = ReportsApiAxiosParamCreator(configuration)
    return {
        /**
         * Can be used with both JSON - the simplest way when calling from other code (or even cURL) - or directly from an HTML form, in <code>application/x-www-form-urlencoded</code> format.
         * @summary Generate Report
         * @param {ReportGenerationRequest} [reportGenerationRequest] The params passed to the report.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generate(reportGenerationRequest?: ReportGenerationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generate(reportGenerationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * To simplify development of new report templates. Arguments to the template can be passed as query string args.
         * @summary Test a report template
         * @param {any} [f] The template excel file
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async test(f?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.test(f, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * ReportsApi - object-oriented interface
 * @export
 * @class ReportsApi
 * @extends {BaseAPI}
 */
export class ReportsApi extends BaseAPI {
    /**
     * Can be used with both JSON - the simplest way when calling from other code (or even cURL) - or directly from an HTML form, in <code>application/x-www-form-urlencoded</code> format.
     * @summary Generate Report
     * @param {ReportGenerationRequest} [reportGenerationRequest] The params passed to the report.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public generate(reportGenerationRequest?: ReportGenerationRequest, options?: AxiosRequestConfig) {
        return ReportsApiFp(this.configuration).generate(reportGenerationRequest, options).then((request) => request(this.axios));
    }

    /**
     * To simplify development of new report templates. Arguments to the template can be passed as query string args.
     * @summary Test a report template
     * @param {any} [f] The template excel file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public test(f?: any, options?: AxiosRequestConfig) {
        return ReportsApiFp(this.configuration).test(f, options).then((request) => request(this.axios));
    }
}
