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
/**
 * 
 * @export
 * @interface UserGroupRequestModel
 */
export interface UserGroupRequestModel {
    /**
     * The user group's name.
     * @type {string}
     * @memberof UserGroupRequestModel
     */
    name: string;
    /**
     * The user group's description.
     * @type {string}
     * @memberof UserGroupRequestModel
     */
    description?: string;
    /**
     * User IDs.
     * @type {Array<number>}
     * @memberof UserGroupRequestModel
     */
    userIds?: Array<number>;
}

/**
 * Check if a given object implements the UserGroupRequestModel interface.
 */
export function instanceOfUserGroupRequestModel(value: object): value is UserGroupRequestModel {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function UserGroupRequestModelFromJSON(json: any): UserGroupRequestModel {
    return UserGroupRequestModelFromJSONTyped(json, false);
}

export function UserGroupRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserGroupRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'userIds': json['userIds'] == null ? undefined : json['userIds'],
    };
}

export function UserGroupRequestModelToJSON(value?: UserGroupRequestModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
        'userIds': value['userIds'],
    };
}

