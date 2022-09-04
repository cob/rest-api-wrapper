/* eslint-disable */

// May contain unused imports in some cases
import { ReportGenerationRequestCallback } from "./report-generation-request-callback"

/**
 * 
 * @export
 * @interface ReportGenerationRequest
 */
export interface ReportGenerationRequest {
    /**
     * The report template to use. It can be a path relative to the provided list of directories where the report templates reside
     * @type {string}
     * @memberof ReportGenerationRequest
     */
    'report': string;
    /**
     * The arguments to use when generating the report
     * @type {{ [key: string]: any; }}
     * @memberof ReportGenerationRequest
     */
    'arguments'?: { [key: string]: any; };
    /**
     * 
     * @type {ReportGenerationRequestCallback}
     * @memberof ReportGenerationRequest
     */
    'callback'?: ReportGenerationRequestCallback;
}
