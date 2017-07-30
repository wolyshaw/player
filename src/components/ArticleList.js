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

const List = props => {
  const { navigate, item } = props
  return (
    <TouchableOpacity onPress={() => navigate('ArticleItem', { id: item.id })}>
      <View style={{
        backgroundColor: '#ccc',
        margin: 10,
        padding: 20
      }}>
        <Text>{ item.title }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRefreshing: false,
      articles: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:4000/front/article/list', {
      method: 'post'
    })
      .then(res => res.json())
      .then(r => this.setState({ articles: r.list.rows }))
  }

  render() {
    const { navigate } = this.props.navigation
    const list = this.state.articles.map(item => <List key={item.id} navigate={navigate} item={ item }/>)
    return (
      <View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={ this.state.isRefreshing }
              onRefresh={() => alert('re')}
              tintColor="#ff0000"
              title="Loading..."
              titleColor="#00ff00"
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#ffff00"
            />
          }
        >
          { list }
        </ScrollView>
      </View>
    )
  }
}
