/**
 * 环境参数配置
 * Created by gene on 2017/11/30.
 * @author Gene
 */

let env = new Object();


// 设置运行环境，local   prod
env.mode = 'prod';


// 设置接口请求地址
switch(env.mode) {
    case 'prod':
        env.host = 'http://tjy.afd56.com.cn/rest/';
        break;
    default:
        env.host = '';
        break;
}

module.exports = env;