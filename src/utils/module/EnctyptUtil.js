/**
 * 加密解密相关工具
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

exports.EnctyptUtil = {

    /**
     * 公共签名工具
     * @param obj
     * @param secret
     * @returns {string}
     */
    sign(obj, secret) {
        if (Object.prototype.toString.call(secret) !== '[object String]') {
            secret = '';
        }

        let newObj = {},
            newKey = Object.keys(obj).sort(),
            newKeyLength = newKey.length;
        for (let i = 0; i < newKeyLength; i++) {
            newObj[newKey[i]] = obj[newKey[i]];
        }

        let result = secret;
        for (let item in newObj) {
            result += item + "|" + newObj[item];
        }
        result += secret;

        return this.md5(result).toLowerCase();
    },

    /**
     * md5加密函数
     * @param content
     * @returns {String}
     */
    md5(content) {

        return md5.create().update(content).hex();
    },


    /**
     * 生成唯一uuid字符串
     * @returns {string}
     */
    getUUID() {
        let d = new Date().getTime();

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);

            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
};