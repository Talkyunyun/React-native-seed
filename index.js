/**
 * 项目入口文件
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import { AppRegistry } from 'react-native';
import Root from './src/container/Default';
import {name as appName} from './app.json';

// 全局关闭警告弹窗提示
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Root);
