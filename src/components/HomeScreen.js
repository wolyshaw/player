import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  FlatList
} from 'react-native'
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from 'react-navigation'

import ArticleScreen from './ArticleScreen'
import UserScreen from './UserScreen'

export default HomeScreen = TabNavigator({
  Home: { screen: ArticleScreen },
  User: { screen: UserScreen },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
})
