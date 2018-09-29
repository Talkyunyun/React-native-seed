/**
 * 全局公共参数配置
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

// 常用正则表达式
let regular = {
    phone: /^1[3,4,5,7,8][0-9]{9}$/, // 手机号码
    email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/, // 邮箱地址
    wrap: /[\r\n]/g,// 换行
    space: /\s+/g // 空格
};

let dbVersions = {
    v1: '1.0',
    v2: '1.1'
};

// sqlite配置
let sqlite = {
    dbName: 'GeneSeed.db',
    version: dbVersions.v1,
    displayName: 'GeneSeed_SQL',
    size: -1,// -1不表示不限制
    debug: false
};

exports.ParamConfig = {
    name : '项目名称',
    regular: regular, // 常用正则表达式
    sqlite : sqlite, // sqlite数据库配置
    dbVersions : dbVersions // db数据库所有版本号
};