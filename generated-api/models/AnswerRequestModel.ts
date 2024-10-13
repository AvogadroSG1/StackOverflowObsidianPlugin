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
 * @interface AnswerRequestModel
 */
export interface AnswerRequestModel {
    /**
     * Answer body. The written content of the answer.
     * @type {string}
     * @memberof AnswerRequestModel
     */
    body: string;
}

/**
 * Check if a given object implements the AnswerRequestModel interface.
 */
export function instanceOfAnswerRequestModel(value: object): value is AnswerRequestModel {
    if (!('body' in value) || value['body'] === undefined) return false;
    return true;
}

export function AnswerRequestModelFromJSON(json: any): AnswerRequestModel {
    return AnswerRequestModelFromJSONTyped(json, false);
}

export function AnswerRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnswerRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'body': json['body'],
    };
}

export function AnswerRequestModelToJSON(value?: AnswerRequestModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'body': value['body'],
    };
}

