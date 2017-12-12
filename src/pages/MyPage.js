/**
 * Created by gene on 2017/12/4.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import {connect} from 'react-redux';


import {showGreen, showRed, showYellow} from '../actions/MyAction';

import {changeMessage} from '../actions/AppAction';


class MyPage extends Component {
    constructor(props) {
        super(props);
    }


    _changeName() {
        this.props.dispatch(changeMessage());
    }


    shouldComponentUpdate(nextProps, nextState) {


        return true;
    }

    _changeColor(type) {
        let self = this;
        switch (type) {
            case 'red':
                self.props.dispatch(showRed());
                break;
            case 'green':
                self.props.dispatch(showGreen());
                break;
            case 'yellow':
                self.props.dispatch(showYellow());
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>个人中心</Text>



                <Text>sdfsdf</Text>


                <Button onPress={this._changeName.bind(this)} title='改变文字' />


                <Text>{this.props.actionName} = {this.props.color}</Text>

                <Button onPress={this._changeColor.bind(this, 'red')} title={'红色'} />
                <Button onPress={this._changeColor.bind(this, 'green')} title={'绿色'} />
                <Button onPress={this._changeColor.bind(this, 'yellow')} title={'黄色'} />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    }
});




function getMapStateToProps(store) {
    return {
        actionName: store.MyReducer.name,
        color: store.MyReducer.color
    }
}

export default connect(getMapStateToProps)(MyPage);