/**
 * 状态改变真正需要执行的逻辑
 * @author Gene
 */

import * as types from '../constants/ActionTypes';


// 初始状态值
const initialState = {
    message: '我是初始值消息哈哈'
};

export default function MyReducer(state = initialState, action) {
    switch (action.type) {
        case types.APP_MESSAGE:
            return Object.assign({}, state, {
                message: action.message
            });
        default:
            return state;
    }
}