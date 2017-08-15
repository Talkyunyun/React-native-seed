/**
 * 全局配置文件
 * @author: Gene
 */

// 环境，可选值，  local   dev  prd  test
const env ='prd';
let url   = '';

switch (env) {
    case 'prd':// 部署环境
        url ='http://tjy.afd56.com.cn/rest/';
        break;
    case 'dev':// 开发环境
        url = 'http://tjy.dev.afd56.com.cn/rest/';
        break;
    default:// 本地开发环境
        url = 'http://localhost:8080/taojinyun/rest/';
}

export default Config = {

    // 常用正则
    regular:{
        phone : /^1[3,4,5,7,8][0-9]{9}$/, // 手机号码
        email : /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/, // 邮箱地址
        wrap  : /[\r\n]/g,// 换行
        space : /\s+/g // 空格
    },

    // 系统全局参数
    params : {
        name : 'Gene Demo', // APP名称
        pageSize: 10 // 分页总数
    },

    // API接口地址
    api : {
        // 获取订单详情
        getOrderDetails: {
            method : 'POST',
            url    : url + 'productorder/get'
        }
    }
};