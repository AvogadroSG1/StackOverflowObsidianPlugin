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


/**
 * 
 * @export
 */
export const CollectionContentType = {
    Unknown: 'unknown',
    Question: 'question',
    Article: 'article'
} as const;
export type CollectionContentType = typeof CollectionContentType[keyof typeof CollectionContentType];


export function instanceOfCollectionContentType(value: any): boolean {
    for (const key in CollectionContentType) {
        if (Object.prototype.hasOwnProperty.call(CollectionContentType, key)) {
            if (CollectionContentType[key as keyof typeof CollectionContentType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CollectionContentTypeFromJSON(json: any): CollectionContentType {
    return CollectionContentTypeFromJSONTyped(json, false);
}

export function CollectionContentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionContentType {
    return json as CollectionContentType;
}

export function CollectionContentTypeToJSON(value?: CollectionContentType | null): any {
    return value as any;
}

