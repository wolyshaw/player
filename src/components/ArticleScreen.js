import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  FlatList
} from 'react-native'
import {
  StackNavigator
} from 'react-navigation'

import ArticleItem from './ArticleItem'
import CreateArticle from './CreateArticle'
import ArticleList from './ArticleList'

class LiteList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          tit: '1'
        }
      ]
    }
  }

  render() {
    return (
      <FlatList
        data={this.state.list}
        keyExtractor={(item) => item.tit}
        renderItem={(item) => (<View
          style={{
            backgroundColor: '#fff',
            paddingTop: 500
          }}
        ><Text>{item.tit}</Text></View>)}
      />
    )
  }
 }

class Wrap extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    return ({
      title: '首页',
      headerRight: <Button style={{fontSize: 12}} title={'新增'} onPress={() => navigation.navigate('CreateArticle')}/>,
    })
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        {
          // <LiteList/>
        }
        <ArticleList navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default ArticleScreen = StackNavigator({
  ArticleList: { screen: Wrap },
  ArticleItem: { screen: ArticleItem },
  CreateArticle: { screen: CreateArticle },
})
