/* tslint:disable */
/* eslint-disable */
/**
 * Stack Overflow for Teams API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PaginatedSearchResults,
  ProblemDetails,
  SearchSortParameter,
} from '../models/index';
import {
    PaginatedSearchResultsFromJSON,
    PaginatedSearchResultsToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    SearchSortParameterFromJSON,
    SearchSortParameterToJSON,
} from '../models/index';

export interface TeamsTeamSearchGetRequest {
    team: string;
    query?: string;
    page?: number;
    pageSize?: TeamsTeamSearchGetPageSizeEnum;
    sort?: SearchSortParameter;
}

/**
 * 
 */
export class SearchApi extends runtime.BaseAPI {

    /**
     */
    async teamsTeamSearchGetRaw(requestParameters: TeamsTeamSearchGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedSearchResults>> {
        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamSearchGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/search`.replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedSearchResultsFromJSON(jsonValue));
    }

    /**
     */
    async teamsTeamSearchGet(requestParameters: TeamsTeamSearchGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedSearchResults> {
        const response = await this.teamsTeamSearchGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const TeamsTeamSearchGetPageSizeEnum = {
    NUMBER_15: 15,
    NUMBER_30: 30,
    NUMBER_50: 50,
    NUMBER_100: 100
} as const;
export type TeamsTeamSearchGetPageSizeEnum = typeof TeamsTeamSearchGetPageSizeEnum[keyof typeof TeamsTeamSearchGetPageSizeEnum];
