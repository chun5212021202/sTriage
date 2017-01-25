/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
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


class INDEX extends Component {
  constructor(props){
    super(props);
    this.state = {NameDone:false, AgeDone:false, GenderDone:false}
  }
  /*
  componentWillMount () {
      var navigator = this.props.navigator;
      setTimeout (() => {
          navigator.replace({
              id: 'LIST',
          });
      }, 2000);
  }
  */
  render() {

    return (
      <View style={styles.container}>
          <View style={styles.upnavigate}>
            <Image source={require('./drawable-mdpi/logo.png')} style={{height:14,width:100}}></Image>
          </View>
          <View style={styles.content}>

          <TouchableHighlight onPress={ () => { this.props.navigator.replace({ id: 'INPUTblack', }); } } style={{flex:1}}>
            <View style={styles.part1}>
            
              <View style={styles.part1_1}>
                <Text style={styles.text1_1}>0</Text>
              </View>

              <View style={styles.part1_2}>
                <Text style={styles.text1_2}>DESEASE</Text>
              </View>  

            </View>
          </TouchableHighlight> 

          <TouchableHighlight onPress={ () => { this.props.navigator.replace({ id: 'INPUTred', }); } } style={{flex:1}}>
            <View style={styles.part2}>
            
              <View style={styles.part2_1}>
                <Text style={styles.text2_1}>1</Text>
              </View>

              <View style={styles.part2_2}>
                <Text style={styles.text2_2}>IMMEDIATE</Text>
              </View>
            
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => { this.props.navigator.replace({ id: 'INPUTyellow', }); } } style={{flex:1}}>
            <View style={styles.part3}>
            
              <View style={styles.part3_1}>
                <Text style={styles.text3_1}>2</Text>
              </View>

              <View style={styles.part3_2}>
                <Text style={styles.text3_2}>DELAYED</Text>
              </View>

            
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => { this.props.navigator.replace({ id: 'INPUTgreen', }); } } style={{flex:1}}>
            <View style={styles.part4}>
            
              <View style={styles.part4_1}>
                <Text style={styles.text4_1}>3</Text>
              </View>

              <View style={styles.part4_2}>
                <Text style={styles.text4_2}>MINOR</Text>
              </View>
              
            </View>
          </TouchableHighlight>

          </View>

          <View style={styles.navigat}>

            <View style={{borderRightColor:'gray', borderRightWidth:0.2, flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableHighlight onPress={ () => { this.props.navigator.replace({ id: 'INDEX', }); } }>
              <Image source={require('./drawable-mdpi/bt_info_s.png')} style={{width:30, height:30}}></Image>
            </TouchableHighlight>
            </View>

            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableHighlight onPress={ () => { this.props.navigator.replace({ id: 'LIST', }); } }>
              <Image source={require('./drawable-mdpi/bt_data_n.png')} style={{width:30, height:30}}></Image>
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
    backgroundColor: '#F5FCFF',
  },
  upnavigate:{
    flex:1, 
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent: 'center'   
  },
  content:{
    flex:11


  }, 
  navigat:{
    flex:1, 
    flexDirection:'row',
    backgroundColor:'white'
  },
  part1: {
    flex:1,
    backgroundColor: '#403e3d',
    flexDirection: 'row'
  },
  part2: {
    flex:1,
    backgroundColor: '#e80a4a',
    flexDirection: 'row'
  },
  part3: {
    flex:1,
    backgroundColor: '#ffb127',
    flexDirection: 'row'
  },
  part4: {
    flex:1,
    backgroundColor: '#7caf17',
    flexDirection: 'row'
  },
  part1_1: {
    flex:3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  part1_2: {
    flex:7,
    
    justifyContent: 'center'
  },
  text1_1: {
    fontSize: 80,
    fontWeight: 'bold',

    color: 'white'
  },
  text1_2: {
    fontSize: 40,
    color: 'white',
  },
  part2_1: {
    flex:3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  part2_2: {
    flex:7,
    
    justifyContent: 'center'
  },
  text2_1: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
  },
  text2_2: {
    fontSize: 40,
    color: 'white',

  },
  part3_1: {
    flex:3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  part3_2: {
    flex:7,
    
    justifyContent: 'center'
  },
  text3_1: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#2b2928'
  },
  text3_2: {
    fontSize: 40,
    color: '#2b2928',
  },
  part4_1: {
    flex:3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  part4_2: {
    flex:7,
    
    justifyContent: 'center'
  },
  text4_1: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#2b2928'
  },
  text4_2: {
    fontSize: 40,
    color: '#2b2928',
  },

});

module.exports = INDEX;

//() => { this.props.navigator.replace({ id: 'LIST', }); }