/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Button,
    Image,

} from 'react-native';

import { StackNavigator,TabNavigator } from 'react-navigation';
import homeVC from './app/home/home'
import contactsVC from './app/contacts/contacts'
import discoverVC from './app/discovery/discovery'
import meVC from './app/me/me'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App2 extends Component<Props> {
    // 写结构和内容
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            你好,世界,hellooo
        </Text>
        <Text style={styles.instructions}>
          To get ddddd, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',//设置标题内容
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat',{user:'Lucy'})}
                    title="Chat with Lucy"/>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home:{
        screen:HomeScreen
    },
    Chat:{
        screen:HomeScreen
    },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



const App = TabNavigator({
    HomePage: {
        screen: homeVC,
        navigationOptions:({navigation,screenProps}) => ( {
            headerStyle:{
                backgroundColor:'black'
            },
            tabBarLabel: 'Chats',    //若不设置,则以key为标题
            tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
            tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                 source={require('./img/chat.png')}/>)
        }),

    },
    More: {
        screen: contactsVC,
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
            tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                 source={require('./img/contact.png')}/>)
        },
    },
    Discover: {
        screen: discoverVC,
        navigationOptions: {
            tabBarLabel: 'Discover',
            tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
            tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                 source={require('./img/discover.png')}/>)
        },
    },
    MePage: {
        screen: meVC,
        navigationOptions: {
              tabBarLabel: 'Me',
            tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
            tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                 source={require('./img/me.png')}/>)
        },
    },

}, {
    tabBarPosition: 'bottom',    //设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）
    swipeEnabled: true,          //是否允许在标签之间滑动
    animationEnabled: false,     //是否在更改标签时显示动画。
    lazy: true,                  //是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦
    initialRouteName: 'More',    //设置默认的页面组件
    backBehavior: 'none',        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: 'green',//label和icon的前景色 活跃状态下（选中）。
        // activeBackgroundColor: 'red', //label和icon的背景色 活跃状态下（选中） 。
        showLabel: true,         //是否显示label，默认开启
        labelStyle: {fontSize: 12}, //label的样式
        style: {height: 50},  //tabbar的样式
        iconStyle: {height: 30}   //安卓,
    }


});

export default App;
