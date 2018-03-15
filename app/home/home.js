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
    ListView,
    TouchableHighlight,


} from 'react-native';

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import chatDetailVC from './chatDetailVC'


import Dimensions from 'Dimensions'
let screenWidth = Dimensions.get('window').width



class homeVC extends React.Component {

    static navigationOptions = {//navgation的相关设置
        title: 'Wechat',
        headerStyle:{
            backgroundColor:'#3A383C'
        },
        headerTitleStyle:{
            fontSize:22,
            color:'white'
        },
        gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭

    };

    constructor(props){
        super(props)
        this.state = {
            text:"",
            loadMore:false,
            brand:props.brand,
            userData:{},
            ds:new ListView.DataSource(
              {
                  rowHasChanged:(r1, r2) => r1 !== r2,
                  sectionHeaderHasChanged:(s1, s2) => s1 !== s2,
              }

          )
        };
    }

    componentDidMount(){

    this._fatchData()
    }


    render() {
        console.log("呵呵哒哒哒哒哒");
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex:1, backgroundColor:'green'}}>
                {this._renderList()}
            </View>
        );
    }

    _renderList(){

        if (this.state.data){
            return(
            <ListView
            dataSource={this.state.ds.cloneWithRowsAndSections(this.state.data.lists)}
            renderRow={(rowData, sectionID, rowId) => this._renderRow(rowData,sectionID,rowId)}
            showsVerticalScrollIndicator={false}
        />
        );
        }else {
            return <View style={{backgroundColor:'yellow'}}></View>
        }
    }

     _renderRow(rowData, sectionID, rowId){
         const {navigate} = this.props.navigation;

        return(
            <TouchableHighlight onPress={() => this._pressRow("ss")}>
            <View style={{flexDirection:'row', height: 44, width: screenWidth, backgroundColor:'yellow'}} >
               {/*TODO:这里不会应用不同文件夹里面的img文件  就把图片移动到这个目录下了 */}
              <View style={{flexDirection:'row'}}>
                  <Image source={require('./ic_launcher.png')} style={{left:4, top:5, width:35, height:35, }}/>
                  <View style={{flexDirection:'column', marginLeft: 8, backgroundColor:'red',width: screenWidth - 100}}>
                      <Text style={{marginTop:4,fontSize:15,color:'black'}}>傻周</Text>
                      <Text style={{marginTop:4,fontSize:12,color:'gray'}}>辉爷棒棒哒</Text>
                  </View>
                  <Text style={{marginRight:5, marginTop:8,fontSize:12,color:'gray'}}>Yestday</Text>

              </View>
            <View style={{position:'absolute',top:43, width: screenWidth, backgroundColor: 'black', height:1}}/>
           </View>
                </TouchableHighlight>

                );
     }


    async _fatchData(){
        let response = await fetch('https://wangclub.herokuapp.com/getListViewData');
        let json = await response.json()
        console.log('json',json)
        if(json){
            this.setState({
                data:json
            })
        }
    }

    _pressRow(content){
        this.props.navigation.navigate('ChatDetail', {user: 'liaoworking'});
    }




}
const homeNav = StackNavigator({
    Home:{
        screen:homeVC
    },
    ChatDetail:{
        screen:chatDetailVC,
        navigationOptions: ({navigation}) => ({
            title: 'Contactsdd',
            headerStyle:{
                backgroundColor:'#3A383C'
            },
            headerTitleStyle:{
                fontSize:22,
                color:'white'
            },
            gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭
            headerBackTitle: 'headerBackTitle: null,',

        }),
    }
});

export default homeNav;