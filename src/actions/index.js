/**
 * Created by Administrator on 2017/1/5 0005.
 */


/*生成actions请求常量*/
function createRequestTypes(base) {
    return [GET, POST, PUT, DELETE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        acc[`${type}_SUCCESS`] = `${base}_${type}_SUCCESS`;
        return acc
    }, {})
}

/*生成actions请求函数*/
function createRequestFun(cst) {
    const newObj = [GET, POST, PUT, DELETE].reduce((acc, type) => {
        /*方法要转成小写*/
        acc[type.toLowerCase()] = (params) => action(cst[type], {params});
        return acc
    }, {});

    newObj['success'] = (type, payload) => action(`${type}_SUCCESS`, {payload});
    return newObj;
}

/*生成统一传给reducer的action*/
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
export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNUP = 'USER_SIGNUP'
export const USER_GET_MY = 'USER_GET_MY'
export const USER_POST_AVATAR = 'USER_POST_AVATAR'


/***********函数型 actions****************/
/*用户*/
export const user = createRequestFun(USER);
user.signin = (params) => action(USER_SIGNIN, {params});
user.signup = (params) => action(USER_SIGNUP, {params});
user.getMy = (params) => action(USER_GET_MY, {params});
user.postAvatar = (params) => action(USER_POST_AVATAR, {params});


/*文章*/
export const article = createRequestFun(ARTICLE);

// export const user = {
//     signin: (params) => action(USER.GET, {params}),
//     get: (params) => action(USER.GET, {params}),
//     post: (params) => action(USER.POST, {params}),
//     postAvatar: (params) => action(USER_POST_AVATAR, {params}),
//     success: (type, payload) => action(`${type}_SUCCESS`, {payload}),
//     // error: (error) => action(USER.ERROR, {error}),
// }

// export const article = {
//     get: (params) => action(ARTICLE.GET, {params}),
//     post: (params) => action(ARTICLE.POST, {params}),
//     delete: (params) => action(ARTICLE.DELETE, {params}),
//     success: (type, payload) => action(`${type}_SUCCESS`, {payload}),
//     // error: (error) => action(ARTICLE.ERROR, {error}),
// }

export const toast = {
    show: (options) => action(SHOW_TOAST, {options}),
    hide: (options) => action(HIDE_TOAST, {options}),
}
