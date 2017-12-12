/**
 * Created by gene on 2017/12/4.
 */

import * as types from '../constants/ActionTypes';


export function changeMessage() {
    return {
        type : types.APP_MESSAGE,
        message: '我是修改来的值'
    };
}