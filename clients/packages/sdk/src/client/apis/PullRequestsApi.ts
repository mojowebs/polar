/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 * Read the docs at https://docs.polar.sh/api
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  ListResourcePullRequest,
} from '../models/index';

export interface PullRequestsApiSearchRequest {
    referencesIssueId?: string;
}

/**
 * 
 */
export class PullRequestsApi extends runtime.BaseAPI {

    /**
     * Search pull requests.
     * Search pull requests
     */
    async searchRaw(requestParameters: PullRequestsApiSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourcePullRequest>> {
        const queryParameters: any = {};

        if (requestParameters['referencesIssueId'] != null) {
            queryParameters['references_issue_id'] = requestParameters['referencesIssueId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/pull_requests/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Search pull requests.
     * Search pull requests
     */
    async search(requestParameters: PullRequestsApiSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourcePullRequest> {
        const response = await this.searchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
