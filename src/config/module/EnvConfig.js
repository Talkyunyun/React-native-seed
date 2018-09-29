/**
 * 项目运行环境配置
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */


// 定义系统支持环境取值范围，不要在其他地方直接定义环境变量，有用到环境的，直接从该配置调取
let envs = {
    local: 'local',
    dev  : 'dev',
    prd  : 'prd'
};

// 设置运行环境
let mode = envs.dev;


let host = '';
switch (mode) {
    case envs.prd:
        host = 'http://www.gene.com/';
        break;
    case envs.dev:
        host = 'http://dev.gene.com/';
        break;
    default:
        host = 'http://local.gene.com/';
}

exports.EnvConfig = {
    envs, host
};
