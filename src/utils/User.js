/**
 * 用户相关操作工具
 * Created by gene on 2017/12/7.
 * @author Gene
 */


import { Params } from '../Config';
import { Storage } from '../Utils';


/**
 * 判断用户是否登录
 * @param function callback 回调函数
 * @return boolen  true: 已登录  false: 未登录
 */
export function isLogin(callback) {
    Storage.load({
        key : Params.tokenKey
    }).then((res) => {
        callback(true);
    }).catch((err) => {
        callback(false);
    });
}



/**
 * 保存token
 * @param string token token值
 * @param int expire 过期时间，单位毫秒，默认一天
 * @return boolen true: 成功   false: 失败
 */
export function saveToken() {
    let token  = arguments[0] || false;
    let expire = arguments[1] || Storage.defaultExpires;

    if (token == false || token == null || token == '') {
        throw '请传入有效的token值';
    }

    Storage.save({
        key    : Params.tokenKey,
        data   : token,
        expires: expire
    });
}

/**
 * 获取token值
 * @param callback 回调函数
 * @return false: 失败  Object: 用户对象
 */
export function getToken(callback) {
    Storage.load({
        key : Params.tokenKey
    }).then((res) => {
        callback(res);
    }).catch((err) => {
        callback(false);
    });
}


/**
 * 保存用户信息
 * @param Object user 用户对象
 * @param Int 过期时间
 */
export function saveUserInfo() {
    let user   = arguments[0] || false;
    let expire = arguments[1] || Storage.defaultExpires;

    if (user == false || user == null || user == '') {
        throw '请输入有效的用户信息';
    }

    Storage.save({
        key     : Params.userKey,
        data    : user,
        expires : expire
    });
}

/**
 * 获取用户信息
 * @param function callback 回调函数
 * @return boolen false: 失败  Object: 用户对象
 */
export function getUserInfo(callback) {
    Storage.load({
        key : Params.userKey
    }).then((res) => {
        callback(res);
    }).catch((err) => {
        callback(false);
    })
}



/** 移除token值 */
export function removeToken() {
    Storage.remove({
        key : Params.tokenKey
    });
}

/** 移除用户信息 */
export function removeUserInfo() {
    Storage.remove({
        key : Params.userKey
    });
}