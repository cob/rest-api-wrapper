import { ReportCallbackAuth } from "./report-callback-auth";
/**
 *
 * @export
 * @interface ReportCallback
 */
export interface ReportCallback {
    /**
     * The callback url
     * @type {string}
     * @memberof ReportCallback
     */
    'url': string;
    /**
     *
     * @type {ReportCallbackAuth}
     * @memberof ReportCallback
     */
    'auth'?: ReportCallbackAuth;
}
