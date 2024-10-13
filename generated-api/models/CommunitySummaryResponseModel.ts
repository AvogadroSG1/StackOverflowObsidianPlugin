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
import type { TagSummaryResponseModel } from './TagSummaryResponseModel';
import {
    TagSummaryResponseModelFromJSON,
    TagSummaryResponseModelFromJSONTyped,
    TagSummaryResponseModelToJSON,
} from './TagSummaryResponseModel';

/**
 * 
 * @export
 * @interface CommunitySummaryResponseModel
 */
export interface CommunitySummaryResponseModel {
    /**
     * Name. The community's name.
     * @type {string}
     * @memberof CommunitySummaryResponseModel
     */
    name?: string;
    /**
     * Description. The community's description.
     * @type {string}
     * @memberof CommunitySummaryResponseModel
     */
    description?: string;
    /**
     * ID. The community's ID.
     * @type {number}
     * @memberof CommunitySummaryResponseModel
     */
    id?: number;
    /**
     * Member count. Number of members in the community.
     * @type {number}
     * @memberof CommunitySummaryResponseModel
     */
    memberCount?: number;
    /**
     * Tags. The community's tags.
     * @type {Array<TagSummaryResponseModel>}
     * @memberof CommunitySummaryResponseModel
     */
    tags?: Array<TagSummaryResponseModel>;
}

/**
 * Check if a given object implements the CommunitySummaryResponseModel interface.
 */
export function instanceOfCommunitySummaryResponseModel(value: object): value is CommunitySummaryResponseModel {
    return true;
}

export function CommunitySummaryResponseModelFromJSON(json: any): CommunitySummaryResponseModel {
    return CommunitySummaryResponseModelFromJSONTyped(json, false);
}

export function CommunitySummaryResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunitySummaryResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'memberCount': json['memberCount'] == null ? undefined : json['memberCount'],
        'tags': json['tags'] == null ? undefined : ((json['tags'] as Array<any>).map(TagSummaryResponseModelFromJSON)),
    };
}

export function CommunitySummaryResponseModelToJSON(value?: CommunitySummaryResponseModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
        'id': value['id'],
        'memberCount': value['memberCount'],
        'tags': value['tags'] == null ? undefined : ((value['tags'] as Array<any>).map(TagSummaryResponseModelToJSON)),
    };
}

