/**
 * 说明文件
 * @author Gene
 */

/** redux知识 */

// Action: 行为，它的作用就是将我们更新组件的状态(state)的每个动作抽象为一个行为，他有一个必须的参数type，定义了Action(行为)的名称，其他参数可自定义。写法：
let types = {
    type : 'TEST_ACTION',
    key1 : 'value'
};
// 因为Action是个对象，所以，我们需要创建这个对象，那创建这个对象的方法叫做ActionCreator，写法：
function testAction(key1, key2) {
    return {
        type : 'TEST_ACTION',
        key1 : key1,
        key2 : key2
    };
}


// Reducer: reducer的作用就是根据传入的action行为和旧的state对象，返回一个新的state，然后组件会根据state刷新。当我们确认了组件的state对象结构和action行为的时候就可以编写reducer中的内容。写法：
function testReducer(state, action) {
    let key1 = action.key1;
    let key2 = action.key2;

    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                key1 : key1 + '变化',
                key2 : key2 + '变化'
            };
        default:
            return state;
    }
}
// 当然我们的工程中可能会有多个reducer的情况，通过combineReducers将多个reducer合成统一管理。

// reducer是一个纯函数(同样的输入，必须有同样的输出，需要遵循3个约束)：
    // 1.不可修改传入的参数。
    // 2.一定要干净，没有API请求，没有变量修改，单纯执行计算，没有特殊情况。
    // 3.调用非函数(Date.now()、Math.random()等)，每次都会得到不同结果导致数据错误等安全问题。
    // 4.当传入的state与旧state相比没有区别，返回的新state也应该一模一样。

/** Store */
// Store: 当reducer返回了新的state后，这个state怎么传到组件和存储就成了问题，redux就是把这个状态统一放到store中进行管理。
import { createStore } from 'redux';
const store = createStore(reducers);

// 上面的代码根据reducers创建了一个store方法集(它并不是一个对象)，然后再store中提供一些方法供我们使用：
// 获取当前state
store.getState();

// 发送action，根据我们前面，注册的reducers处理state
store.dispath(action);

// 替换当前state中的reducer
store.replaceReducer(nextReducer);

// 添加监听
store.subscribe(listener);




















