/**
 * 项目Store创建
 * @author Gene
 */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/RootReducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}