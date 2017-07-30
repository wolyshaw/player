import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  StyleSheet
} from 'react-native'
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from 'react-navigation'

import ArticleScreen from './ArticleScreen'
import UserScreen from './UserScreen'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  },
  icon: {
    height: 22,
    width: 22,
    resizeMode: 'contain'
  }
})

export default HomeScreen = TabNavigator({
  Home: {
    screen: ArticleScreen,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('../static/menu.png')}
          style={[{tintColor: tintColor}, styles.icon]}
        />
      ),
    }
  },
  User: {
    screen: UserScreen,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('../static/my.png')}
          style={[{tintColor: tintColor}, styles.icon]}
        />
      ),
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
})
