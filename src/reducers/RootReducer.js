/**
 *
 * Created by gene on 2017/12/4.
 */

import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import MyReducer from './MyReducer';
import AppReducer from './AppReducer';

const rootReducer = combineReducers({
    LoginReducer,
    MyReducer,
    AppReducer
});

export default rootReducer;