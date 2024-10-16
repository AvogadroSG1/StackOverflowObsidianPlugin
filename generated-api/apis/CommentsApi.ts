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


import * as runtime from '../runtime';
import type {
  CommentResponseModel,
  ProblemDetails,
} from '../models/index';
import {
    CommentResponseModelFromJSON,
    CommentResponseModelToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models/index';

export interface TeamsTeamArticlesArticleIdCommentsGetRequest {
    articleId: number;
    team: string;
}

export interface TeamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest {
    questionId: number;
    answerId: number;
    team: string;
}

export interface TeamsTeamQuestionsQuestionIdCommentsGetRequest {
    questionId: number;
    team: string;
}

/**
 * 
 */
export class CommentsApi extends runtime.BaseAPI {

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     */
    async teamsTeamArticlesArticleIdCommentsGetRaw(requestParameters: TeamsTeamArticlesArticleIdCommentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CommentResponseModel>>> {
        if (requestParameters['articleId'] == null) {
            throw new runtime.RequiredError(
                'articleId',
                'Required parameter "articleId" was null or undefined when calling teamsTeamArticlesArticleIdCommentsGet().'
            );
        }

        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamArticlesArticleIdCommentsGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/articles/{articleId}/comments`.replace(`{${"articleId"}}`, encodeURIComponent(String(requestParameters['articleId']))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentResponseModelFromJSON));
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     */
    async teamsTeamArticlesArticleIdCommentsGet(requestParameters: TeamsTeamArticlesArticleIdCommentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CommentResponseModel>> {
        const response = await this.teamsTeamArticlesArticleIdCommentsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     */
    async teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetRaw(requestParameters: TeamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CommentResponseModel>>> {
        if (requestParameters['questionId'] == null) {
            throw new runtime.RequiredError(
                'questionId',
                'Required parameter "questionId" was null or undefined when calling teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet().'
            );
        }

        if (requestParameters['answerId'] == null) {
            throw new runtime.RequiredError(
                'answerId',
                'Required parameter "answerId" was null or undefined when calling teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet().'
            );
        }

        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/questions/{questionId}/answers/{answerId}/comments`.replace(`{${"questionId"}}`, encodeURIComponent(String(requestParameters['questionId']))).replace(`{${"answerId"}}`, encodeURIComponent(String(requestParameters['answerId']))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentResponseModelFromJSON));
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     */
    async teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(requestParameters: TeamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CommentResponseModel>> {
        const response = await this.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     */
    async teamsTeamQuestionsQuestionIdCommentsGetRaw(requestParameters: TeamsTeamQuestionsQuestionIdCommentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CommentResponseModel>>> {
        if (requestParameters['questionId'] == null) {
            throw new runtime.RequiredError(
                'questionId',
                'Required parameter "questionId" was null or undefined when calling teamsTeamQuestionsQuestionIdCommentsGet().'
            );
        }

        if (requestParameters['team'] == null) {
            throw new runtime.RequiredError(
                'team',
                'Required parameter "team" was null or undefined when calling teamsTeamQuestionsQuestionIdCommentsGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/teams/{team}/questions/{questionId}/comments`.replace(`{${"questionId"}}`, encodeURIComponent(String(requestParameters['questionId']))).replace(`{${"team"}}`, encodeURIComponent(String(requestParameters['team']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentResponseModelFromJSON));
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     */
    async teamsTeamQuestionsQuestionIdCommentsGet(requestParameters: TeamsTeamQuestionsQuestionIdCommentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CommentResponseModel>> {
        const response = await this.teamsTeamQuestionsQuestionIdCommentsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
