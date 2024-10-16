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

import { mapValues } from '../runtime';
import type { UserGroupResponseModel } from './UserGroupResponseModel';
import {
    UserGroupResponseModelFromJSON,
    UserGroupResponseModelFromJSONTyped,
    UserGroupResponseModelToJSON,
} from './UserGroupResponseModel';
import type { ArticlePermissionsType } from './ArticlePermissionsType';
import {
    ArticlePermissionsTypeFromJSON,
    ArticlePermissionsTypeFromJSONTyped,
    ArticlePermissionsTypeToJSON,
} from './ArticlePermissionsType';
import type { UserSummaryResponseModel } from './UserSummaryResponseModel';
import {
    UserSummaryResponseModelFromJSON,
    UserSummaryResponseModelFromJSONTyped,
    UserSummaryResponseModelToJSON,
} from './UserSummaryResponseModel';

/**
 * 
 * @export
 * @interface ArticlePermissionsResponseModel
 */
export interface ArticlePermissionsResponseModel {
    /**
     * 
     * @type {ArticlePermissionsType}
     * @memberof ArticlePermissionsResponseModel
     */
    editableBy?: ArticlePermissionsType;
    /**
     * Editor Users. The individual users who can edit this article
     * @type {Array<UserSummaryResponseModel>}
     * @memberof ArticlePermissionsResponseModel
     */
    editorUsers?: Array<UserSummaryResponseModel>;
    /**
     * Editor User Groups. The user groups that can edit this article
     * @type {Array<UserGroupResponseModel>}
     * @memberof ArticlePermissionsResponseModel
     */
    editorUserGroups?: Array<UserGroupResponseModel>;
}



/**
 * Check if a given object implements the ArticlePermissionsResponseModel interface.
 */
export function instanceOfArticlePermissionsResponseModel(value: object): value is ArticlePermissionsResponseModel {
    return true;
}

export function ArticlePermissionsResponseModelFromJSON(json: any): ArticlePermissionsResponseModel {
    return ArticlePermissionsResponseModelFromJSONTyped(json, false);
}

export function ArticlePermissionsResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticlePermissionsResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'editableBy': json['editableBy'] == null ? undefined : ArticlePermissionsTypeFromJSON(json['editableBy']),
        'editorUsers': json['editorUsers'] == null ? undefined : ((json['editorUsers'] as Array<any>).map(UserSummaryResponseModelFromJSON)),
        'editorUserGroups': json['editorUserGroups'] == null ? undefined : ((json['editorUserGroups'] as Array<any>).map(UserGroupResponseModelFromJSON)),
    };
}

export function ArticlePermissionsResponseModelToJSON(value?: ArticlePermissionsResponseModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'editableBy': ArticlePermissionsTypeToJSON(value['editableBy']),
        'editorUsers': value['editorUsers'] == null ? undefined : ((value['editorUsers'] as Array<any>).map(UserSummaryResponseModelToJSON)),
        'editorUserGroups': value['editorUserGroups'] == null ? undefined : ((value['editorUserGroups'] as Array<any>).map(UserGroupResponseModelToJSON)),
    };
}

