/**
 * 目录或者路径相关工具
 * @author: Gene
 */

import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';


export default new Storage({
    // 最大容量，默认1000
    size : 1000,

    // 使用asyncStorage
    storageBackend: AsyncStorage,

    // 失效时间
    defaultExpires : 1000 * 3600 * 24,

    // 使用内存缓存数据
    enableCache: true,

    sync : {

    }
});