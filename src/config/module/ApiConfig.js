/**
 * 接口相关配置
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import { EnvConfig } from './EnvConfig';

exports.ApiConfig = {

    /** 公共接口 */
    common: {

        // 登录接口
        login: {
            method: 'POST',
            url : EnvConfig.host + 'login'
        },

        // 退出登录
        logout: {
            method: 'GET',
            url : EnvConfig.host + 'logout'
        }
    }

    // todo 其他接口
};
