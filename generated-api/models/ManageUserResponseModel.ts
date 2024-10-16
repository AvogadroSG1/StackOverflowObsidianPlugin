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
 * @interface ManageUserResponseModel
 */
export interface ManageUserResponseModel {
    /**
     * Email address.
     * @type {string}
     * @memberof ManageUserResponseModel
     */
    email?: string | null;
    /**
     * Is deactivated.
     * @type {boolean}
     * @memberof ManageUserResponseModel
     */
    isDeactivated?: boolean;
    /**
     * Creation date.
     * @type {Date}
     * @memberof ManageUserResponseModel
     */
    creationDate?: Date;
    /**
     * Last modified date.
     * @type {Date}
     * @memberof ManageUserResponseModel
     */
    lastModifiedDate?: Date | null;
    /**
     * Last access date.
     * @type {Date}
     * @memberof ManageUserResponseModel
     */
    lastAccessDate?: Date;
    /**
     * ID. The user's unique identifier on this site.
     * @type {number}
     * @memberof ManageUserResponseModel
     */
    id?: number;
    /**
     * Account ID. The user's unique account identifier across all Stack Overflow sites.
     * @type {number}
     * @memberof ManageUserResponseModel
     */
    accountId?: number | null;
    /**
     * Name. The user's name.
     * @type {string}
     * @memberof ManageUserResponseModel
     */
    name?: string;
    /**
     * Avatar URL. The URL to the user's avatar (profile picture).
     * @type {string}
     * @memberof ManageUserResponseModel
     */
    avatarUrl?: string;
    /**
     * Reputation. The user's numerical reputation.
     * @type {number}
     * @memberof ManageUserResponseModel
     */
    reputation?: number;
    /**
     * Role. The user's role on the site.
     * @type {string}
     * @memberof ManageUserResponseModel
     */
    role?: string;
}

/**
 * Check if a given object implements the ManageUserResponseModel interface.
 */
export function instanceOfManageUserResponseModel(value: object): value is ManageUserResponseModel {
    return true;
}

export function ManageUserResponseModelFromJSON(json: any): ManageUserResponseModel {
    return ManageUserResponseModelFromJSONTyped(json, false);
}

export function ManageUserResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageUserResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'isDeactivated': json['isDeactivated'] == null ? undefined : json['isDeactivated'],
        'creationDate': json['creationDate'] == null ? undefined : (new Date(json['creationDate'])),
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'lastAccessDate': json['lastAccessDate'] == null ? undefined : (new Date(json['lastAccessDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'accountId': json['accountId'] == null ? undefined : json['accountId'],
        'name': json['name'] == null ? undefined : json['name'],
        'avatarUrl': json['avatarUrl'] == null ? undefined : json['avatarUrl'],
        'reputation': json['reputation'] == null ? undefined : json['reputation'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function ManageUserResponseModelToJSON(value?: ManageUserResponseModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'isDeactivated': value['isDeactivated'],
        'creationDate': value['creationDate'] == null ? undefined : ((value['creationDate']).toISOString()),
        'lastModifiedDate': value['lastModifiedDate'] == null ? undefined : ((value['lastModifiedDate'] as any).toISOString()),
        'lastAccessDate': value['lastAccessDate'] == null ? undefined : ((value['lastAccessDate']).toISOString()),
        'id': value['id'],
        'accountId': value['accountId'],
        'name': value['name'],
        'avatarUrl': value['avatarUrl'],
        'reputation': value['reputation'],
        'role': value['role'],
    };
}

