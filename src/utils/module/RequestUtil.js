/**
 * 网络请求工具
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

exports.RequestUtil = {


    /**
     * 网络请求工具，支持post/get
     * @param API 请求地址：{url: , method: }
     * @param params 请求参数
     * @param timeout 请求超时时间，单位毫秒
     * @returns {Promise<any>}
     */
    send(API) {
        let params = typeof arguments[1] !== 'undefined' ? arguments[1] : {};
        let timeout = typeof arguments[2] !== 'undefined' ? arguments[2] : 4000;

        // todo 默认赋值

        return new Promise((resolve, reject) => {
            let t = 0;
            if (timeout !== 0) {
                t = setTimeout(() => {
                    // TODO 销毁发起的网络请求
                    clearTimeout(t);
                    reject('请求超时');
                }, timeout);
            }

            try {
                let bodys = '';
                if (Object.prototype.toString.call(params) === '[object Object]') {
                    for (let i in params) {
                        bodys += '&' + i + '=' + params[i];
                    }

                    if (bodys.length > 0) {
                        bodys = bodys.substr(1);
                    }
                }
                let options = {
                    method: API.method,
                    mode: 'no-cors'
                };
                let url = '';
                if (API.method.toUpperCase() === 'POST') {
                    options.body = bodys;
                    options.headers = {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    };
                    url = API.url;
                } else {
                    url = API.url + '?' + bodys;
                }
                console.info('>>>>>> request url >>>>', url);
                console.info('>>>>>> request params >>>>', JSON.stringify(options));
                fetch(url, options).then((res) => {
                    if (res.status === 200) {
                        return res.json();
                    }
                    console.warn('网络请求方式错误', res);
                    reject('请求错误' + res.status);
                }).then((res) => {
                    clearTimeout(t);
                    resolve(res);
                }).catch((err) => {
                    console.error('发起网络请求错误', err);

                    clearTimeout(t);
                    reject(err);
                });
            } catch (e) {
                clearTimeout(t);

                console.error('解析网络请求错误', e);
                reject(e);
            }
        });
    }
};
