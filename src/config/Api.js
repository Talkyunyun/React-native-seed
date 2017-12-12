/**
 * 接口请求地址
 * @author Gene
 */

import Env from './Env';

let api = {
    // 获取首页banner
    getHomeBanner : {
        method: 'POST',
        url : Env.host + 'banner/list'
    },
    // 获取首页今日推荐
    getHomeRecommend: {
        method: 'POST',
        url : Env.host + 'banner/hotlist'
    },
    // 添加收藏
    addCollection: {
        method: 'POST',
        url : Env.host + 'collection/add'
    },
    // 取消收藏
    cancelCollection: {
        method: 'POST',
        url : Env.host + 'collection/cancel'
    },

    // 获取货车用品列表
    getProduct : {
        method : 'POST',
        url    : Env.host + 'product/list'
    }
};

module.exports = api;