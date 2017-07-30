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
    this.state = { article: {} }
  }

  componentWillMount() {
    let { id } = this.props.navigation.state.params
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    fetch('http://localhost:4000/front/article/view', {
      method: 'post',
      headers,
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then(r => this.setState({ article: r.list }))
  }

  render() {
    const { article } = this.state
    return (
      <View>
        <Text
          style={{
            padding: 10
          }}
        >
          { article.title }
        </Text>
      </View>
    )
  }
}
