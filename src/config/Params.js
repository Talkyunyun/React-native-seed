/**
 * 公共参数配置
 * Created by gene on 2017/11/30.
 * @author Gene
 */

let params = new Object();


// 常用正则规则
params.regular = {
    phone: /^1[3,4,5,7,8][0-9]{9}$/, // 手机号码
    email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/, // 邮箱地址
    wrap: /[\r\n]/g,// 换行
    space: /\s+/g // 空格
};

// APP名称
params.name = '淘金运';
params.tokenKey = 'token'; // 保存token值key
params.userKey  = 'user';  // 保存用户信息key


module.exports = params;
