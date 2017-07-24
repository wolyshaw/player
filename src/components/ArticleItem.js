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

export default class ArticleItem extends Component {
  static navigationOptions = {
    title: '详情'
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text
          style={{
            padding: 10
          }}
        >ArticleItem { params.id }</Text>
      </View>
    )
  }
}
