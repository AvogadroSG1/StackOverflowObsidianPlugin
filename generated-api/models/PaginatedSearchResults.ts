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
import type { SearchSortParameter } from './SearchSortParameter';
import {
    SearchSortParameterFromJSON,
    SearchSortParameterFromJSONTyped,
    SearchSortParameterToJSON,
} from './SearchSortParameter';
import type { PaginatedSearchResultsItemsInner } from './PaginatedSearchResultsItemsInner';
import {
    PaginatedSearchResultsItemsInnerFromJSON,
    PaginatedSearchResultsItemsInnerFromJSONTyped,
    PaginatedSearchResultsItemsInnerToJSON,
} from './PaginatedSearchResultsItemsInner';

/**
 * 
 * @export
 * @interface PaginatedSearchResults
 */
export interface PaginatedSearchResults {
    /**
     * Total count. The total number of records found.
     * @type {number}
     * @memberof PaginatedSearchResults
     */
    readonly totalCount?: number;
    /**
     * Page size. The number of records to retrieve per page.
     * @type {number}
     * @memberof PaginatedSearchResults
     */
    readonly pageSize?: number;
    /**
     * Page. The number of the current page.
     * @type {number}
     * @memberof PaginatedSearchResults
     */
    readonly page?: number;
    /**
     * Total pages. The total number of pages available.
     * @type {number}
     * @memberof PaginatedSearchResults
     */
    readonly totalPages?: number;
    /**
     * 
     * @type {SearchSortParameter}
     * @memberof PaginatedSearchResults
     */
    sort?: SearchSortParameter;
    /**
     * 
     * @type {Array<PaginatedSearchResultsItemsInner>}
     * @memberof PaginatedSearchResults
     */
    readonly items?: Array<PaginatedSearchResultsItemsInner>;
}



/**
 * Check if a given object implements the PaginatedSearchResults interface.
 */
export function instanceOfPaginatedSearchResults(value: object): value is PaginatedSearchResults {
    return true;
}

export function PaginatedSearchResultsFromJSON(json: any): PaginatedSearchResults {
    return PaginatedSearchResultsFromJSONTyped(json, false);
}

export function PaginatedSearchResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedSearchResults {
    if (json == null) {
        return json;
    }
    return {
        
        'totalCount': json['totalCount'] == null ? undefined : json['totalCount'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'page': json['page'] == null ? undefined : json['page'],
        'totalPages': json['totalPages'] == null ? undefined : json['totalPages'],
        'sort': json['sort'] == null ? undefined : SearchSortParameterFromJSON(json['sort']),
        'items': json['items'] == null ? undefined : ((json['items'] as Array<any>).map(PaginatedSearchResultsItemsInnerFromJSON)),
    };
}

export function PaginatedSearchResultsToJSON(value?: Omit<PaginatedSearchResults, 'totalCount'|'pageSize'|'page'|'totalPages'|'items'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sort': SearchSortParameterToJSON(value['sort']),
    };
}

