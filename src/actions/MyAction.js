/**
 * Created by gene on 2017/12/4.
 */

import * as types from '../constants/ActionTypes';


export function showGreen() {
    return {
        type : types.MY_PAGE_GREEN,
        name: '我是绿色'
    };
}


export function showYellow() {
    return {
        type : types.MY_PAGE_YELLOW,
        name: '我是黄色'
    };
}


export function showRed() {
    return {
        type : types.MY_PAGE_RED,
        name: '我是红色'
    };
}