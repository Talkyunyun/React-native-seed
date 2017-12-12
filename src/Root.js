/**
 * 项目根组件
 * Created by gene on 2017/12/4.
 * @author Gene
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import App from './containers/App';

export default class Root extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <App />
            </Provider>
        );
    }
}