import React, { Component }from 'react'
import {
  Text,
} from 'react-native'
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import UserScreen from './components/UserScreen'

export default Player = DrawerNavigator({
  Home: { screen: HomeScreen },
  User: { screen: UserScreen },
},  {
  drawerWidth: 300,
  drawerPosition: 'left',
  contentOptions: {
    initialRouteName: HomeScreen
  }
})
