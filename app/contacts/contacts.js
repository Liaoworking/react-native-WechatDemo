/**
 * Created by guanghuiliao on 3/13/18.
 */
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



class contactsVC extends React.Component {

    // static navigationOptions = {//navgation的相关设置
    //     title: 'Contacts',
    //     headerStyle:{
    //         backgroundColor:'#3A383C'
    //     },
    //     headerTitleStyle:{
    //         fontSize:22,
    //         color:'white'
    //     },
    //     gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭
    //
    // };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Future</Text>
                <Button onPress={()=>navigate('Chat', {user: 'liaoworking'})} title={"chat with liaoworking"}/>
            </View>
        );
    }

}
const contactsNav = StackNavigator({
    Home:{
        screen:contactsVC
    },
    Chat:{
        screen:contactsVC
    }
});

export default contactsNav;