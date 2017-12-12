/**
 * 全局本地存储API
 * Created by gene on 2017/12/1.
 */


import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';


module.exports = new Storage({
    // 最大1000条数据循环存储
    size: 1000,

    // 存储引擎，RN: AsyncStorage  WEB: window.localStorage
    storageBackend: AsyncStorage,

    // 过期时间，单位：毫秒，null则永久不过期，默认一天
    defaultExpires: 1000 * 3600 * 24,

    // 读写时在内存中缓存数据
    enableCache: true,

    sync : {}
});