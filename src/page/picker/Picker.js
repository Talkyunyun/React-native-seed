/**
 * 选择器案例
 * @author: Gene
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import StyleConfig from '../../config/StyleConfig';
import AreaData from '../../utils/area.json';
import ReactPicker from 'react-native-picker';


export default class Picker extends React.Component {
    static navigationOptions = {
        headerTitle : '日期选择案例',
        headerStyle : {
            backgroundColor : StyleConfig.mainColor
        },
        headerTitleStyle : {
            color: '#fff'
        },
        headerBackTitleStyle : {
            color: '#fff'
        },
        headerTintColor: '#fff'
    };

    constructor(props) {
        super(props);


        this.state = {
            pickerData : [{
                '北京' : {
                    '北京' : ['朝阳区']
                }
            }]
        };
    }


    componentDidMount() {

    }

    // 创建地区选择
    _createAreaData() {
        let data = [];
        let len = AreaData.length;
        for (let i = 0; i < len; i++) {
            let city = [];
            for (let j = 0, cityLen = AreaData[i]['city'].length; j<cityLen; j++) {
                let _city = {};
                _city[AreaData[i]['city'][j]['name']] = AreaData[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[AreaData[i]['name']] = city;
            data.push(_data);
        }

        return data;
    }


    // 显示地区
    _showAreaPicker() {
        let self = this;
        ReactPicker.init({
            pickerData : this._createAreaData(),
            pickerConfirmBtnText : '确认',
            pickerCancelBtnText : '取消',
            pickerTitleText : '',
            selectedValue : ['北京', '北京', '东城区']
        });
    }



    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this._showAreaPicker.bind(this)}
                >
                    <Text>显示地区选择器</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});




