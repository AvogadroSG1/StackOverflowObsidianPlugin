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
  PaginatedUserGroups,
  ProblemDetails,
  SortOrder,
  UserGroupRequestModel,
  UserGroupResponseModel,
  UserGroupsSortParameter,
} from '../models/index';
import {
    PaginatedUserGroupsFromJSON,
    PaginatedUserGroupsToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    SortOrderFromJSON,
    SortOrderToJSON,
    UserGroupRequestModelFromJSON,
    UserGroupRequestModelToJSON,
    UserGroupResponseModelFromJSON,
    UserGroupResponseModelToJSON,
    UserGroupsSortParameterFromJSON,
    UserGroupsSortParameterToJSON,
} from '../models/index';

export interface TeamsTeamUserGroupsGetRequest {
    team: string;
    page?: number;
    pageSize?: TeamsTeamUserGroupsGetPageSizeEnum;
    sort?: UserGroupsSortParameter;
    order?: SortOrder;
}

export interface TeamsTeamUserGroupsPostRequest {
    team: string;
    userGroupRequestModel?: UserGroupRequestModel;
}

export interface TeamsTeamUserGroupsUserGroupIdGetRequest {
    userGroupId: number;
    team: string;
}

export interface TeamsTeamUserGroupsUserGroupIdMembersPostRequest {
    userGroupId: number;
    team: string;
    requestBody?: Array<number>;
}

export interface TeamsTeamUserGroupsUserGroupIdMembersUserIdDeleteRequest {
    userGroupId: number;
    userId: number;
    team: string;
}

export interface TeamsTeamUserGroupsUserGroupIdPutRequest {
    userGroupId: number;
    team: string;
    userGroupRequestModel?: UserGroupRequestModel;
}

/**
 * 
 */
export class UserGroupsApi extends runtime.BaseAPI {

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     */
    async teamsTeamUserGroupsGetRaw(requestParameters: TeamsTeamUserGroupsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedUserGroups>> {
        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamUserGroupsGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/user-groups`.replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedUserGroupsFromJSON(jsonValue));
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     */
    async teamsTeamUserGroupsGet(requestParameters: TeamsTeamUserGroupsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedUserGroups> {
        const response = await this.teamsTeamUserGroupsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a user group.
     * Create a user group
     */
    async teamsTeamUserGroupsPostRaw(requestParameters: TeamsTeamUserGroupsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserGroupResponseModel>> {
        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamUserGroupsPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/user-groups`.replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserGroupRequestModelToJSON(requestParameters['userGroupRequestModel']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserGroupResponseModelFromJSON(jsonValue));
    }

    /**
     * Creates a user group.
     * Create a user group
     */
    async teamsTeamUserGroupsPost(requestParameters: TeamsTeamUserGroupsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserGroupResponseModel> {
        const response = await this.teamsTeamUserGroupsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     */
    async teamsTeamUserGroupsUserGroupIdGetRaw(requestParameters: TeamsTeamUserGroupsUserGroupIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserGroupResponseModel>> {
        if (requestParameters['userGroupId'] == null) {
            throw new runtime.RequiredError(
                'userGroupId',
                'Required parameter "userGroupId" was null or undefined when calling teamsTeamUserGroupsUserGroupIdGet().'
            );
        }

        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamUserGroupsUserGroupIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/user-groups/{userGroupId}`.replace(`{${"userGroupId"}}`, encodeURIComponent(String(requestParameters['userGroupId']))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserGroupResponseModelFromJSON(jsonValue));
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     */
    async teamsTeamUserGroupsUserGroupIdGet(requestParameters: TeamsTeamUserGroupsUserGroupIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserGroupResponseModel> {
        const response = await this.teamsTeamUserGroupsUserGroupIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     */
    async teamsTeamUserGroupsUserGroupIdMembersPostRaw(requestParameters: TeamsTeamUserGroupsUserGroupIdMembersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserGroupResponseModel>> {
        if (requestParameters['userGroupId'] == null) {
            throw new runtime.RequiredError(
                'userGroupId',
                'Required parameter "userGroupId" was null or undefined when calling teamsTeamUserGroupsUserGroupIdMembersPost().'
            );
        }

        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamUserGroupsUserGroupIdMembersPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/user-groups/{userGroupId}/members`.replace(`{${"userGroupId"}}`, encodeURIComponent(String(requestParameters['userGroupId']))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserGroupResponseModelFromJSON(jsonValue));
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     */
    async teamsTeamUserGroupsUserGroupIdMembersPost(requestParameters: TeamsTeamUserGroupsUserGroupIdMembersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserGroupResponseModel> {
        const response = await this.teamsTeamUserGroupsUserGroupIdMembersPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     */
    async teamsTeamUserGroupsUserGroupIdMembersUserIdDeleteRaw(requestParameters: TeamsTeamUserGroupsUserGroupIdMembersUserIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserGroupResponseModel>> {
        if (requestParameters['userGroupId'] == null) {
            throw new runtime.RequiredError(
                'userGroupId',
                'Required parameter "userGroupId" was null or undefined when calling teamsTeamUserGroupsUserGroupIdMembersUserIdDelete().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling teamsTeamUserGroupsUserGroupIdMembersUserIdDelete().'
            );
        }

        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamUserGroupsUserGroupIdMembersUserIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/user-groups/{userGroupId}/members/{userId}`.replace(`{${"userGroupId"}}`, encodeURIComponent(String(requestParameters['userGroupId']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserGroupResponseModelFromJSON(jsonValue));
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     */
    async teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(requestParameters: TeamsTeamUserGroupsUserGroupIdMembersUserIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserGroupResponseModel> {
        const response = await this.teamsTeamUserGroupsUserGroupIdMembersUserIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     */
    async teamsTeamUserGroupsUserGroupIdPutRaw(requestParameters: TeamsTeamUserGroupsUserGroupIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserGroupResponseModel>> {
        if (requestParameters['userGroupId'] == null) {
            throw new runtime.RequiredError(
                'userGroupId',
                'Required parameter "userGroupId" was null or undefined when calling teamsTeamUserGroupsUserGroupIdPut().'
            );
        }

        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamUserGroupsUserGroupIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/user-groups/{userGroupId}`.replace(`{${"userGroupId"}}`, encodeURIComponent(String(requestParameters['userGroupId']))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserGroupRequestModelToJSON(requestParameters['userGroupRequestModel']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserGroupResponseModelFromJSON(jsonValue));
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     */
    async teamsTeamUserGroupsUserGroupIdPut(requestParameters: TeamsTeamUserGroupsUserGroupIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserGroupResponseModel> {
        const response = await this.teamsTeamUserGroupsUserGroupIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const TeamsTeamUserGroupsGetPageSizeEnum = {
    NUMBER_15: 15,
    NUMBER_30: 30,
    NUMBER_50: 50,
    NUMBER_100: 100
} as const;
export type TeamsTeamUserGroupsGetPageSizeEnum = typeof TeamsTeamUserGroupsGetPageSizeEnum[keyof typeof TeamsTeamUserGroupsGetPageSizeEnum];
