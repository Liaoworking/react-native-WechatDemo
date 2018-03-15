/**
 * Created by guanghuiliao on 3/13/18.
 */


import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,

} from 'react-native';

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';



class meVC extends React.Component {

    static navigationOptions = {//navgation的相关设置
        title: 'Discover',
        headerStyle:{
            backgroundColor:'#3A383C'
        },
        headerTitleStyle:{
            fontSize:22,
            color:'white'
        },
        gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭

    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Me</Text>
                <Button onPress={()=>navigate('Chat', {user: 'Lucy'})} title={"chat with lucy"}/>
            </View>
        );
    }

}
const meNav = StackNavigator({
    Home:{
        screen:meVC
    },
    Chat:{
        screen:meVC
    }
});

export default meNav;