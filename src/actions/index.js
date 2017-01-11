/**
 * Created by Administrator on 2017/1/5 0005.
 */


function createRequestTypes(base) {
    return [GET, POST, PUT, DELETE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        acc[`${type}_SUCCESS`] = `${base}_${type}_SUCCESS`;
        return acc
    }, {})
}

function action(type, payload = {}) {
    return {type, ...payload}
}

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'

/***********常量型 actions****************/
export const USER = createRequestTypes('USER');
export const ARTICLE = createRequestTypes('ARTICLE');
export const SHOW_TOAST = 'SHOW_TOAST'
export const HIDE_TOAST = 'HIDE_TOAST'
export const USER_POST_AVATAR = 'USER_POST_AVATAR'

/***********函数型 actions****************/
export const user = {
    get: (params) => action(USER.GET, {params}),
    post: (params) => action(USER.POST, {params}),
    postAvatar: (params) => action(USER_POST_AVATAR, {params}),
    success: (type, data) => action([`${type}_SUCCESS`], {data}),
    // error: (error) => action(USER.ERROR, {error}),
}

export const article = {
    get: (params) => action(ARTICLE.GET, {params}),
    post: (params) => action(ARTICLE.POST, {params}),
    delete: (params) => action(ARTICLE.DELETE, {params}),
    success: (type, data) => action(`${type}_SUCCESS`, {data}),
    // error: (error) => action(ARTICLE.ERROR, {error}),
}

export const toast = {
    show: (options) => action(SHOW_TOAST, {options}),
    hide: (options) => action(HIDE_TOAST, {options}),
}
