import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  ScrollView,
  RefreshControl,
  TouchableOpacity
} from 'react-native'
import {
  StackNavigator
} from 'react-navigation'

export default class CreateArticle extends Component {
  static navigationOptions = {
    title: '新增'
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>新增</Text>
      </View>
    )
  }
}
