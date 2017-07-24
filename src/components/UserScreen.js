import React, { Component } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  Button,
} from 'react-native'
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from 'react-navigation'

export default class UserScreen extends Component {
  static navigationOptions = {
    title: '我的'
  }

  constructor(props) {
    super(props)
    this.state = {modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center'
        }}
      >
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => console.log('android is required')}
        onShow={() => console.log('this popup is show')}
        >
       <View style={{marginTop: 22}}>
        <View>
          <Text>弹窗的内容</Text>
          <Button
            onPress={() => this.setModalVisible(!this.state.modalVisible)}
            title={'关闭弹窗'}
          />

        </View>
       </View>
      </Modal>
      <Button
        onPress={() => this.setModalVisible(true)}
        style={{padding: 20}}
        title={'打开弹窗'}
      />
      </View>
    )
  }
}
