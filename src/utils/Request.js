/**
 * 请求工具
 * Created by gene on 2017/11/20.
 * @author Gene
 */

/**
 * 同时指出post和get请求方式
 * @param API
 * @param params
 * @param callback
 */
export function send(API, params, callback) {
    try {
        let bodys = '';
        if (typeof params == 'object') {
        for (let i in params) {
        bodys += '&' + i + '=' + params[i];
    }

    if (bodys.length > 0) {
        bodys = bodys.substr(1);
    }
    }

    fetch(API.url, {
        method : API.method,
        mode   : 'no-cors',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: bodys
    }).then((res) => {
        return res.json();
    }).then((res) => {
        callback(res);
    }).catch((err) => {
        callback(false);
    });
    } catch (e) {
        callback(false);
    }
}

/**
 * POST请求方式
 * @param url
 * @param params
 * @param callback
 */
export function post(url, params, callback) {
    try {
        let bodys = '';
        if (typeof params == 'object') {
            for (let i in params) {
                bodys += '&' + i + '=' + params[i];
            }

            if (bodys.length > 0) {
                bodys = bodys.substr(1);
            }
        }

        fetch(url, {
            method : 'POST',
            mode : 'no-cors',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: bodys
        }).then((res) => {
            return res.json();
        }).then((res) => {
            callback(res);
        }).catch((err) => {
            // console.log('网络请求错误：', err);
            callback(false);
        });
    } catch (e) {
        callback(false);
    }
}


/**
 * GET请求方式
 * @param url
 * @param params
 * @param callback
 */
export function get(url, params, callback) {
    try {
        let bodys = '';
        if (typeof params == 'object') {
            for (let i in params) {
                bodys += '&' + i + '=' + params[i];
            }

            if (bodys.length > 0) {
                bodys = bodys.substr(1);
            }
        }

        fetch(url, {
            method : 'GET',
            mode : 'no-cors',
            body: bodys
        }).then((res) => {
            return res.json();
        }).then((res) => {
            callback(res);
        }).catch((err) => {
            // console.log('网络请求错误：', err);
            callback(false);
        });
    } catch (e) {
        callback(false);
    }
}