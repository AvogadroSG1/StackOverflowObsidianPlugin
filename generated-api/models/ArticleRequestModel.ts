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
import type { ArticlePermissionsRequestModel } from './ArticlePermissionsRequestModel';
import {
    ArticlePermissionsRequestModelFromJSON,
    ArticlePermissionsRequestModelFromJSONTyped,
    ArticlePermissionsRequestModelToJSON,
} from './ArticlePermissionsRequestModel';
import type { ArticleType } from './ArticleType';
import {
    ArticleTypeFromJSON,
    ArticleTypeFromJSONTyped,
    ArticleTypeToJSON,
} from './ArticleType';

/**
 * 
 * @export
 * @interface ArticleRequestModel
 */
export interface ArticleRequestModel {
    /**
     * Article title. The purpose of the article, stated briefly in one sentence.
     * @type {string}
     * @memberof ArticleRequestModel
     */
    title: string;
    /**
     * Body. The bulk of the information to share.
     * @type {string}
     * @memberof ArticleRequestModel
     */
    body: string;
    /**
     * Tags. Tags associated with the article.
     * @type {Array<string>}
     * @memberof ArticleRequestModel
     */
    tags: Array<string>;
    /**
     * 
     * @type {ArticleType}
     * @memberof ArticleRequestModel
     */
    type: ArticleType;
    /**
     * 
     * @type {ArticlePermissionsRequestModel}
     * @memberof ArticleRequestModel
     */
    permissions: ArticlePermissionsRequestModel;
}



/**
 * Check if a given object implements the ArticleRequestModel interface.
 */
export function instanceOfArticleRequestModel(value: object): value is ArticleRequestModel {
    if (!('title' in value) || (value as ArticleRequestModel).title === undefined) return false;
    if (!('body' in value) || (value as ArticleRequestModel).body === undefined) return false;
    if (!('tags' in value) || (value as ArticleRequestModel).tags === undefined) return false;
    if (!('type' in value) || (value as ArticleRequestModel).type === undefined) return false;
    if (!('permissions' in value) || (value as any)['permissions'] === undefined) return false;
    return true;
}

export function ArticleRequestModelFromJSON(json: any): ArticleRequestModel {
    return ArticleRequestModelFromJSONTyped(json, false);
}

export function ArticleRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticleRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'body': json['body'],
        'tags': json['tags'],
        'type': ArticleTypeFromJSON(json['type']),
        'permissions': ArticlePermissionsRequestModelFromJSON(json['permissions']),
    };
}

export function ArticleRequestModelToJSON(value?: ArticleRequestModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'body': value['body'],
        'tags': value['tags'],
        'type': ArticleTypeToJSON(value['type']),
        'permissions': ArticlePermissionsRequestModelToJSON(value['permissions']),
    };
}

