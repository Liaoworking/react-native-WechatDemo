/**
 * Created by guanghuiliao on 3/14/18.
 */


import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ListView,

} from 'react-native';

import React, { Component } from 'react';


import { StackNavigator } from 'react-navigation';




import Dimensions from 'Dimensions'
let screenWidth = Dimensions.get('window').width

export default class chatDetailVC extends Component{

    static navigationOptions = {//navgation的相关设置
        title: 'chatDetail',
        headerBackTitle: null,
        headerStyle:{
            backgroundColor:'#3A383C'
        },
        headerTitleStyle:{
            fontSize:22,
            color:'white'
        },
        gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭
    };


    render(){
        const {params} = this.props.navigation.state;

        return (
            <View style={{backgroundColor:'pink'}}>
                <Text>{params.user}</Text>
            </View>

        );

    };

}