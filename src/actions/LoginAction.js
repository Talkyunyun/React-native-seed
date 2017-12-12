/**
 * 登录控制
 * Created by gene on 2017/12/4.
 */

import * as types from '../constants/ActionTypes';

let user = {
    username: 'gene',
    age : 20
};


// 登录操作
export function doLogin() {
    return dispatch => {
        dispatch(isLogining());
        // 模拟登录
        fetch('https://www.baidu.com').then((res) => {
            dispatch(loginSuccess(true, user));
        }).catch((err) => {
            dispatch(loginSuccess(false, null));
        });
    };
}


// 判断是否登录
export function isLogin() {

}



function isLogining() {
    return {
        type : types.LOGIN_IN_DOING
    };
}

function loginSuccess(isSuccess, user) {
    return {
        type : types.LOGIN_IN_DONE,
        isSuccess : isSuccess,
        user : user
    };
}