/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


function postRequest(url, callback){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function(){
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
      callback(xmlHttp.responseText);
    }
    xmlHttp.open('POST', url, true);
    xmlHttp.send(null);
  }
}


class LIST extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  /*
  componentWillMount () {
    var navigator = this.props.navigator;
    setTimeout (() => {
        navigator.replace({
            id: 'INPUT',
        });
    }, 2000);
  }
  */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upnavigate}>
          <Image source={require('./drawable-mdpi/B-accident.png')} style={{height:14,width:100}}></Image>
        </View>
        <Image source={require('./drawable-mdpi/data.png')} style={styles.content}></Image>
        <View style={styles.navigat}>

          <View style={{borderRightColor:'gray', borderRightWidth:0.2, flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight onPress={ () => { this.props.navigator.replace({ id: 'INDEX', }); } }>
            <Image source={require('./drawable-mdpi/bt_info_n.png')} style={{width:30, height:30}}></Image>
          </TouchableHighlight>
          </View>

          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight onPress={ () => { this.props.navigator.replace({ id: 'LIST', }); } }>
            <Image source={require('./drawable-mdpi/bt_data_s.png')} style={{width:30, height:30}}></Image>
          </TouchableHighlight>
          </View>

        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  upnavigate:{
    flex:1, 
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent: 'center',
    borderBottomWidth:1,
    borderBottomColor:'#959493'
  },  
  content:{
    flex:11 ,
    width: null,
    height: null
  }, 
  navigat:{
    flex:1, 
    flexDirection:'row',
    backgroundColor:'white',
    borderTopWidth:1,
    borderTopColor:'#959493'
  }

});

module.exports = LIST;
