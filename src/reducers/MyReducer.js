/**
 * 状态改变真正需要执行的逻辑
 * @author Gene
 */

import * as types from '../constants/ActionTypes';


// 初始状态值
const initialState = {
    name : '我是初始值',
    color: '#fff'
};

export default function MyReducer(state = initialState, action) {
    switch (action.type) {
        case types.MY_PAGE_GREEN:
            return Object.assign({}, state, {
                name : action.name,
                color : 'green'
            });
        case types.MY_PAGE_RED:
            return Object.assign({}, state, {
                name : action.name,
                color : 'red'
            });
        case types.MY_PAGE_YELLOW:
            return Object.assign({}, state, {
                name : action.name,
                color: 'yellow'
            });
        default:
            return state;
    }
}