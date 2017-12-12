/**
 * 状态改变真正需要执行的逻辑
 * @author Gene
 */

import * as types from '../constants/ActionTypes';


// 初始状态值
const initialState = {
    status   : 'init',
    isSuccess: false,
    user     : null,


};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_NO_LOGIN: // 初始状态
            return Object.assign({}, state, {
                status: 'init',
                isSuccess: false,
                user: null
            });
        case types.LOGIN_DOING: // 正在登录
            return Object.assign({}, state, {
                status: 'doing',
                isSuccess: false,
                user: null
            });
        case types.LOGIN_SUCCESS: // 登录完成
            return Object.assign({}, state, {
                status: 'done',
                isSuccess: action.isSuccess,
                user: action.user
            });
        default:
            return state;
    }
}