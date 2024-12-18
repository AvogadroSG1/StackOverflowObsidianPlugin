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
import type { UserSummaryResponseModel } from './UserSummaryResponseModel';
import {
    UserSummaryResponseModelFromJSON,
    UserSummaryResponseModelFromJSONTyped,
    UserSummaryResponseModelToJSON,
} from './UserSummaryResponseModel';

/**
 * 
 * @export
 * @interface CollectionsSummaryResponseModel
 */
export interface CollectionsSummaryResponseModel {
    /**
     * ID. The Collection's unique identifier.
     * @type {number}
     * @memberof CollectionsSummaryResponseModel
     */
    id?: number;
    /**
     * Title. A brief title to distinguish the Collection and its contents.
     * @type {string}
     * @memberof CollectionsSummaryResponseModel
     */
    title?: string;
    /**
     * Description. A detailed description of what the Collection contains. Supports Markdown.
     * @type {string}
     * @memberof CollectionsSummaryResponseModel
     */
    description?: string;
    /**
     * 
     * @type {UserSummaryResponseModel}
     * @memberof CollectionsSummaryResponseModel
     */
    owner?: UserSummaryResponseModel;
    /**
     * Creation date. The date and time the collection was created.
     * @type {Date}
     * @memberof CollectionsSummaryResponseModel
     */
    creationDate?: Date;
    /**
     * Is deleted. Returns true if the collection was deleted.
     * @type {boolean}
     * @memberof CollectionsSummaryResponseModel
     */
    isDeleted?: boolean;
    /**
     * Tags. Tags associated with the content items in the collection.
     * @type {Array<TagSummaryResponseModel>}
     * @memberof CollectionsSummaryResponseModel
     */
    tags?: Array<TagSummaryResponseModel>;
}

/**
 * Check if a given object implements the CollectionsSummaryResponseModel interface.
 */
export function instanceOfCollectionsSummaryResponseModel(value: object): value is CollectionsSummaryResponseModel {
    return true;
}

export function CollectionsSummaryResponseModelFromJSON(json: any): CollectionsSummaryResponseModel {
    return CollectionsSummaryResponseModelFromJSONTyped(json, false);
}

export function CollectionsSummaryResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionsSummaryResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'owner': json['owner'] == null ? undefined : UserSummaryResponseModelFromJSON(json['owner']),
        'creationDate': json['creationDate'] == null ? undefined : (new Date(json['creationDate'])),
        'isDeleted': json['isDeleted'] == null ? undefined : json['isDeleted'],
        'tags': json['tags'] == null ? undefined : ((json['tags'] as Array<any>).map(TagSummaryResponseModelFromJSON)),
    };
}

export function CollectionsSummaryResponseModelToJSON(value?: CollectionsSummaryResponseModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'title': value['title'],
        'description': value['description'],
        'owner': UserSummaryResponseModelToJSON(value['owner']),
        'creationDate': value['creationDate'] == null ? undefined : ((value['creationDate']).toISOString()),
        'isDeleted': value['isDeleted'],
        'tags': value['tags'] == null ? undefined : ((value['tags'] as Array<any>).map(TagSummaryResponseModelToJSON)),
    };
}

