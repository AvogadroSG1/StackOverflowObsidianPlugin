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
 * Users sort parameter
 * @export
 */
export const UsersSortParameter = {
    Reputation: 'reputation'
} as const;
export type UsersSortParameter = typeof UsersSortParameter[keyof typeof UsersSortParameter];


export function instanceOfUsersSortParameter(value: any): boolean {
    for (const key in UsersSortParameter) {
        if (Object.prototype.hasOwnProperty.call(UsersSortParameter, key)) {
            if (UsersSortParameter[key as keyof typeof UsersSortParameter] === value) {
                return true;
            }
        }
    }
    return false;
}

export function UsersSortParameterFromJSON(json: any): UsersSortParameter {
    return UsersSortParameterFromJSONTyped(json, false);
}

export function UsersSortParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersSortParameter {
    return json as UsersSortParameter;
}

export function UsersSortParameterToJSON(value?: UsersSortParameter | null): any {
    return value as any;
}

