import type { ArticlePermissionsResponseModel } from '../ArticlePermissionsResponseModel';
import type { ArticleType } from '../ArticleType';

/**
 * 
 * @export
 * @class ArticleModel
 */
export class ArticleFrontMatterModel {

    private _id?: number | null;

    /**
     * articleId. The article's unique identifier.
     * @type {number}
     * @memberof ArticleModel
     */
    get articleId() : number | null | undefined {
        return this._id;
    }

    set articleId(value: number | null | undefined){
        this._id = value;
    }

    /**
     * 
     * @type {Array<string>}
     * @memberof ArticleModel
     */
    communities?: Array<string>;
    /**
     * ID. The article's unique identifier.
     * @type {number}
     * @memberof ArticleModel
     */
    get id() : number | null | undefined {
        return this._id;
    }

    set id(value: number | null | undefined){
        this._id = value;
    }

    /**
     * 
     * @type {ArticleType}
     * @memberof ArticleModel
     */
    type?: ArticleType;
    /**
     * Title. The actual article, stated briefly in one sentence.
     * @type {string}
     * @memberof ArticleModel
     */
    title?: string;
    /**
     * Body. Additional details to clarify the article.
     * @type {string}
     * @memberof ArticleModel
     */
    body?: string;
    /**
     * Tags. Tags associated with the article.
     * @type {Array<string>}
     * @memberof ArticleModel
     */
    tags?: Array<string> | undefined;
    /**
     * 
     * @type {string}
     * @memberof ArticleModel
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleModel
     */
    lastEditor?: string;
    /**
     * Creation date. The date and time the article was created.
     * @type {Date}
     * @memberof ArticleModel
     */
    creationDate?: Date;
    /**
     * Last activity date. The date and time the article or one of its answers last had significant activity. This includes (but is not limited to) an edit, rollback, change to tags, new answer, bounty added, bump.
     * @type {Date}
     * @memberof ArticleModel
     */
    lastActivityDate?: Date | null;
    /**
     * Score. Calculated by subtracting the number of downvotes from the number of upvotes
     * @type {number}
     * @memberof ArticleModel
     */
    score?: number;
    /**
     * View count. The number of times users have viewed this article.
     * @type {number}
     * @memberof ArticleModel
     */
    viewCount?: number;
    /**
     * Share URL. The article's direct URL.
     * @type {string}
     * @memberof ArticleModel
     */
    shareUrl?: string;
    /**
     * Is deleted. Returns true if the article was deleted.
     * @type {boolean}
     * @memberof ArticleModel
     */
    isDeleted?: boolean;
    /**
     * Is obsolete. Returns true if the article was marked by a moderator as obsolete.
     * @type {boolean}
     * @memberof ArticleModel
     */
    isObsolete?: boolean;
    /**
     * Is closed. Returns true if the article was closed by a moderator.
     * @type {boolean}
     * @memberof ArticleModel
     */
    isClosed?: boolean;
    /**
     * Body in Markdown format.
     * @type {string}
     * @memberof ArticleModel
     */
    bodyMarkdown?: string;
    /**
     * User is following. Returns true if the logged-in user followed the article.
     * @type {boolean}
     * @memberof ArticleModel
     */
    userIsFollowing?: boolean;
    /**
     * User has upvoted. Returns true if the logged-in user has upvoted the article.
     * @type {boolean}
     * @memberof ArticleModel
     */
    userHasUpvoted?: boolean;
    /**
     * User has downvoted. Returns true if the logged-in user has downvoted the article.
     * @type {boolean}
     * @memberof ArticleModel
     */
    userHasDownvoted?: boolean;
    /**
     * User can edit. Returns true if the this article can be edited by the authenticated user.
     * @type {boolean}
     * @memberof ArticleModel
     */
    userCanEdit?: boolean;
    /**
     * 
     * @type {ArticlePermissionsResponseModel}
     * @memberof ArticleModel
     */
    permissions?: ArticlePermissionsResponseModel | null;
}



/**
 * Check if a given object implements the ArticleModel interface.
 */
export function instanceOfArticleModel(value: object): value is ArticleFrontMatterModel {
    return true;
}

