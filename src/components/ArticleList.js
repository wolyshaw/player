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
  const { navigate, i } = props
  return (
    <TouchableOpacity onPress={() => navigate('ArticleItem', {id: i})}>
      <View style={{
        backgroundColor: '#ccc',
        margin: 10,
        padding: 20
      }}>
        <Text>{i}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRefreshing: false
    }
  }

  render() {
    const { navigate } = this.props.navigation
    const list = Array.from(new Array(20)).map((item, i) => <List key={i} navigate={navigate} i={i}/>)
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
