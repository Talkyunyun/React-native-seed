/**
 * 加载组件管理
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2018/09/29
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

module.exports = {
    _current : null,

    // 注册组件
    registerComponent(component) {
        this._current = component
    },

    // 销毁组件
    unregisterComponent() {
        this._current = null
    },

    // 组件方法
    hide() {
        if (this._current !== null) {
            this._current.hideLoading()
        }
    },

    // 组件方法
    show(text = '加载中...') {
        if (this._current !== null) {
            this._current.showLoading(text);
        }
    }
};