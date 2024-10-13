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
 * Search sort parameter
 * @export
 */
export const SearchSortParameter = {
    Relevance: 'relevance',
    Newest: 'newest',
    Active: 'active',
    Score: 'score'
} as const;
export type SearchSortParameter = typeof SearchSortParameter[keyof typeof SearchSortParameter];


export function instanceOfSearchSortParameter(value: any): boolean {
    for (const key in SearchSortParameter) {
        if (Object.prototype.hasOwnProperty.call(SearchSortParameter, key)) {
            if (SearchSortParameter[key as keyof typeof SearchSortParameter] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SearchSortParameterFromJSON(json: any): SearchSortParameter {
    return SearchSortParameterFromJSONTyped(json, false);
}

export function SearchSortParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchSortParameter {
    return json as SearchSortParameter;
}

export function SearchSortParameterToJSON(value?: SearchSortParameter | null): any {
    return value as any;
}

