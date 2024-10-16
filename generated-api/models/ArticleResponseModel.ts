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
import type { ArticlePermissionsResponseModel } from './ArticlePermissionsResponseModel';
import {
    ArticlePermissionsResponseModelFromJSON,
    ArticlePermissionsResponseModelFromJSONTyped,
    ArticlePermissionsResponseModelToJSON,
} from './ArticlePermissionsResponseModel';
import type { CommunitySummaryResponseModel } from './CommunitySummaryResponseModel';
import {
    CommunitySummaryResponseModelFromJSON,
    CommunitySummaryResponseModelFromJSONTyped,
    CommunitySummaryResponseModelToJSON,
} from './CommunitySummaryResponseModel';
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
import type { ArticleType } from './ArticleType';
import {
    ArticleTypeFromJSON,
    ArticleTypeFromJSONTyped,
    ArticleTypeToJSON,
} from './ArticleType';

/**
 * 
 * @export
 * @interface ArticleResponseModel
 */
export interface ArticleResponseModel {
    /**
     * 
     * @type {Array<CommunitySummaryResponseModel>}
     * @memberof ArticleResponseModel
     */
    communities?: Array<CommunitySummaryResponseModel>;
    /**
     * ID. The article's unique identifier.
     * @type {number}
     * @memberof ArticleResponseModel
     */
    id?: number;
    /**
     * 
     * @type {ArticleType}
     * @memberof ArticleResponseModel
     */
    type?: ArticleType;
    /**
     * Title. The actual article, stated briefly in one sentence.
     * @type {string}
     * @memberof ArticleResponseModel
     */
    title?: string;
    /**
     * Body. Additional details to clarify the article.
     * @type {string}
     * @memberof ArticleResponseModel
     */
    body?: string;
    /**
     * Tags. Tags associated with the article.
     * @type {Array<TagSummaryResponseModel>}
     * @memberof ArticleResponseModel
     */
    tags?: Array<TagSummaryResponseModel>;
    /**
     * 
     * @type {UserSummaryResponseModel}
     * @memberof ArticleResponseModel
     */
    owner?: UserSummaryResponseModel;
    /**
     * 
     * @type {UserSummaryResponseModel}
     * @memberof ArticleResponseModel
     */
    lastEditor?: UserSummaryResponseModel;
    /**
     * Creation date. The date and time the article was created.
     * @type {Date}
     * @memberof ArticleResponseModel
     */
    creationDate?: Date;
    /**
     * Last activity date. The date and time the article or one of its answers last had significant activity. This includes (but is not limited to) an edit, rollback, change to tags, new answer, bounty added, bump.
     * @type {Date}
     * @memberof ArticleResponseModel
     */
    lastActivityDate?: Date | null;
    /**
     * Score. Calculated by subtracting the number of downvotes from the number of upvotes
     * @type {number}
     * @memberof ArticleResponseModel
     */
    score?: number;
    /**
     * View count. The number of times users have viewed this article.
     * @type {number}
     * @memberof ArticleResponseModel
     */
    viewCount?: number;
    /**
     * Share URL. The article's direct URL.
     * @type {string}
     * @memberof ArticleResponseModel
     */
    shareUrl?: string;
    /**
     * Is deleted. Returns true if the article was deleted.
     * @type {boolean}
     * @memberof ArticleResponseModel
     */
    isDeleted?: boolean;
    /**
     * Is obsolete. Returns true if the article was marked by a moderator as obsolete.
     * @type {boolean}
     * @memberof ArticleResponseModel
     */
    isObsolete?: boolean;
    /**
     * Is closed. Returns true if the article was closed by a moderator.
     * @type {boolean}
     * @memberof ArticleResponseModel
     */
    isClosed?: boolean;
    /**
     * Body in Markdown format.
     * @type {string}
     * @memberof ArticleResponseModel
     */
    bodyMarkdown?: string;
    /**
     * User is following. Returns true if the logged-in user followed the article.
     * @type {boolean}
     * @memberof ArticleResponseModel
     */
    userIsFollowing?: boolean;
    /**
     * User has upvoted. Returns true if the logged-in user has upvoted the article.
     * @type {boolean}
     * @memberof ArticleResponseModel
     */
    userHasUpvoted?: boolean;
    /**
     * User has downvoted. Returns true if the logged-in user has downvoted the article.
     * @type {boolean}
     * @memberof ArticleResponseModel
     */
    userHasDownvoted?: boolean;
    /**
     * User can edit. Returns true if the this article can be edited by the authenticated user.
     * @type {boolean}
     * @memberof ArticleResponseModel
     */
    userCanEdit?: boolean;
    /**
     * 
     * @type {ArticlePermissionsResponseModel}
     * @memberof ArticleResponseModel
     */
    permissions?: ArticlePermissionsResponseModel;
}



/**
 * Check if a given object implements the ArticleResponseModel interface.
 */
export function instanceOfArticleResponseModel(value: object): value is ArticleResponseModel {
    return true;
}

export function ArticleResponseModelFromJSON(json: any): ArticleResponseModel {
    return ArticleResponseModelFromJSONTyped(json, false);
}

export function ArticleResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticleResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'communities': json['communities'] == null ? undefined : ((json['communities'] as Array<any>).map(CommunitySummaryResponseModelFromJSON)),
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : ArticleTypeFromJSON(json['type']),
        'title': json['title'] == null ? undefined : json['title'],
        'body': json['body'] == null ? undefined : json['body'],
        'tags': json['tags'] == null ? undefined : ((json['tags'] as Array<any>).map(TagSummaryResponseModelFromJSON)),
        'owner': json['owner'] == null ? undefined : UserSummaryResponseModelFromJSON(json['owner']),
        'lastEditor': json['lastEditor'] == null ? undefined : UserSummaryResponseModelFromJSON(json['lastEditor']),
        'creationDate': json['creationDate'] == null ? undefined : (new Date(json['creationDate'])),
        'lastActivityDate': json['lastActivityDate'] == null ? undefined : (new Date(json['lastActivityDate'])),
        'score': json['score'] == null ? undefined : json['score'],
        'viewCount': json['viewCount'] == null ? undefined : json['viewCount'],
        'shareUrl': json['shareUrl'] == null ? undefined : json['shareUrl'],
        'isDeleted': json['isDeleted'] == null ? undefined : json['isDeleted'],
        'isObsolete': json['isObsolete'] == null ? undefined : json['isObsolete'],
        'isClosed': json['isClosed'] == null ? undefined : json['isClosed'],
        'bodyMarkdown': json['bodyMarkdown'] == null ? undefined : json['bodyMarkdown'],
        'userIsFollowing': json['userIsFollowing'] == null ? undefined : json['userIsFollowing'],
        'userHasUpvoted': json['userHasUpvoted'] == null ? undefined : json['userHasUpvoted'],
        'userHasDownvoted': json['userHasDownvoted'] == null ? undefined : json['userHasDownvoted'],
        'userCanEdit': json['userCanEdit'] == null ? undefined : json['userCanEdit'],
        'permissions': json['permissions'] == null ? undefined : ArticlePermissionsResponseModelFromJSON(json['permissions']),
    };
}

export function ArticleResponseModelToJSON(value?: ArticleResponseModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'communities': value['communities'] == null ? undefined : ((value['communities'] as Array<any>).map(CommunitySummaryResponseModelToJSON)),
        'id': value['id'],
        'type': ArticleTypeToJSON(value['type']),
        'title': value['title'],
        'body': value['body'],
        'tags': value['tags'] == null ? undefined : ((value['tags'] as Array<any>).map(TagSummaryResponseModelToJSON)),
        'owner': UserSummaryResponseModelToJSON(value['owner']),
        'lastEditor': UserSummaryResponseModelToJSON(value['lastEditor']),
        'creationDate': value['creationDate'] == null ? undefined : ((value['creationDate']).toISOString()),
        'lastActivityDate': value['lastActivityDate'] == null ? undefined : ((value['lastActivityDate'] as any).toISOString()),
        'score': value['score'],
        'viewCount': value['viewCount'],
        'shareUrl': value['shareUrl'],
        'isDeleted': value['isDeleted'],
        'isObsolete': value['isObsolete'],
        'isClosed': value['isClosed'],
        'bodyMarkdown': value['bodyMarkdown'],
        'userIsFollowing': value['userIsFollowing'],
        'userHasUpvoted': value['userHasUpvoted'],
        'userHasDownvoted': value['userHasDownvoted'],
        'userCanEdit': value['userCanEdit'],
        'permissions': ArticlePermissionsResponseModelToJSON(value['permissions']),
    };
}

