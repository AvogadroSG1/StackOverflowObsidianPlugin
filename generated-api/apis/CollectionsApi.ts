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
  CollectionRequestModel,
  CollectionsPermissionsFilter,
  CollectionsResponseModel,
  CollectionsSortParameter,
  EditCollectionRequestModel,
  PaginatedCollections,
  ProblemDetails,
  SortOrder,
} from '../models/index';
import {
    CollectionRequestModelFromJSON,
    CollectionRequestModelToJSON,
    CollectionsPermissionsFilterFromJSON,
    CollectionsPermissionsFilterToJSON,
    CollectionsResponseModelFromJSON,
    CollectionsResponseModelToJSON,
    CollectionsSortParameterFromJSON,
    CollectionsSortParameterToJSON,
    EditCollectionRequestModelFromJSON,
    EditCollectionRequestModelToJSON,
    PaginatedCollectionsFromJSON,
    PaginatedCollectionsToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    SortOrderFromJSON,
    SortOrderToJSON,
} from '../models/index';

export interface TeamsTeamCollectionsCollectionIdDeleteRequest {
    collectionId: number;
    team: string;
}

export interface TeamsTeamCollectionsCollectionIdGetRequest {
    collectionId: number;
    team: string;
}

export interface TeamsTeamCollectionsCollectionIdPutRequest {
    collectionId: number;
    team: string;
    editCollectionRequestModel?: EditCollectionRequestModel;
}

export interface TeamsTeamCollectionsGetRequest {
    team: string;
    page?: number;
    pageSize?: TeamsTeamCollectionsGetPageSizeEnum;
    sort?: CollectionsSortParameter;
    order?: SortOrder;
    authorIds?: Array<number>;
    partialTitle?: string;
    permissions?: CollectionsPermissionsFilter;
    from?: Date;
    to?: Date;
}

export interface TeamsTeamCollectionsPostRequest {
    team: string;
    collectionRequestModel?: CollectionRequestModel;
}

/**
 * 
 */
export class CollectionsApi extends runtime.BaseAPI {

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     */
    async teamsTeamCollectionsCollectionIdDeleteRaw(requestParameters: TeamsTeamCollectionsCollectionIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['collectionId'] == null) {
            throw new runtime.RequiredError(
                'collectionId',
                'Required parameter "collectionId" was null or undefined when calling teamsTeamCollectionsCollectionIdDelete().'
            );
        }

        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamCollectionsCollectionIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/collections/{collectionId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters['collectionId']))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     */
    async teamsTeamCollectionsCollectionIdDelete(requestParameters: TeamsTeamCollectionsCollectionIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.teamsTeamCollectionsCollectionIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     */
    async teamsTeamCollectionsCollectionIdGetRaw(requestParameters: TeamsTeamCollectionsCollectionIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionsResponseModel>> {
        if (requestParameters['collectionId'] == null) {
            throw new runtime.RequiredError(
                'collectionId',
                'Required parameter "collectionId" was null or undefined when calling teamsTeamCollectionsCollectionIdGet().'
            );
        }

        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamCollectionsCollectionIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/collections/{collectionId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters['collectionId']))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionsResponseModelFromJSON(jsonValue));
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     */
    async teamsTeamCollectionsCollectionIdGet(requestParameters: TeamsTeamCollectionsCollectionIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionsResponseModel> {
        const response = await this.teamsTeamCollectionsCollectionIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     */
    async teamsTeamCollectionsCollectionIdPutRaw(requestParameters: TeamsTeamCollectionsCollectionIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionsResponseModel>> {
        if (requestParameters['collectionId'] == null) {
            throw new runtime.RequiredError(
                'collectionId',
                'Required parameter "collectionId" was null or undefined when calling teamsTeamCollectionsCollectionIdPut().'
            );
        }

        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamCollectionsCollectionIdPut().'
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
            path: `/teams/{team}/collections/{collectionId}`.replace(`{${"collectionId"}}`, encodeURIComponent(String(requestParameters['collectionId']))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EditCollectionRequestModelToJSON(requestParameters['editCollectionRequestModel']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionsResponseModelFromJSON(jsonValue));
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     */
    async teamsTeamCollectionsCollectionIdPut(requestParameters: TeamsTeamCollectionsCollectionIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionsResponseModel> {
        const response = await this.teamsTeamCollectionsCollectionIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves all collections for the full site or specified team.
     * Retrieve all collections
     */
    async teamsTeamCollectionsGetRaw(requestParameters: TeamsTeamCollectionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedCollections>> {
        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamCollectionsGet().'
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

        if (requestParameters['authorIds'] != null) {
            queryParameters['authorIds'] = requestParameters['authorIds'];
        }

        if (requestParameters['partialTitle'] != null) {
            queryParameters['partialTitle'] = requestParameters['partialTitle'];
        }

        if (requestParameters['permissions'] != null) {
            queryParameters['permissions'] = requestParameters['permissions'];
        }

        if (requestParameters['from'] != null) {
            queryParameters['from'] = (requestParameters['from'] as any).toISOString();
        }

        if (requestParameters['to'] != null) {
            queryParameters['to'] = (requestParameters['to'] as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/collections`.replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedCollectionsFromJSON(jsonValue));
    }

    /**
     * Retrieves all collections for the full site or specified team.
     * Retrieve all collections
     */
    async teamsTeamCollectionsGet(requestParameters: TeamsTeamCollectionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedCollections> {
        const response = await this.teamsTeamCollectionsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a collection.
     * Create a collection
     */
    async teamsTeamCollectionsPostRaw(requestParameters: TeamsTeamCollectionsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionsResponseModel>> {
        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamCollectionsPost().'
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
            path: `/teams/{team}/collections`.replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionRequestModelToJSON(requestParameters['collectionRequestModel']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionsResponseModelFromJSON(jsonValue));
    }

    /**
     * Creates a collection.
     * Create a collection
     */
    async teamsTeamCollectionsPost(requestParameters: TeamsTeamCollectionsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionsResponseModel> {
        const response = await this.teamsTeamCollectionsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const TeamsTeamCollectionsGetPageSizeEnum = {
    NUMBER_15: 15,
    NUMBER_30: 30,
    NUMBER_50: 50,
    NUMBER_100: 100
} as const;
export type TeamsTeamCollectionsGetPageSizeEnum = typeof TeamsTeamCollectionsGetPageSizeEnum[keyof typeof TeamsTeamCollectionsGetPageSizeEnum];
