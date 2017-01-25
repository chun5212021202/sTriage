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


class INPUTblack extends Component {
  constructor(props){
    super(props);
    this.state = {NameDone:'', TriageDone:'', AgeDone:'', GenderDone:'', HospitalDone:'', BPM:'????', BreathDone:'', BloodDone:''}
  }

  componentWillMount () {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = (e) => {
      if (xmlHttp.readyState !== 4) {
        return;
      }

      if (xmlHttp.status === 200) {
        console.log('success', xmlHttp.responseText);
        this.setState({BPM:parseInt(xmlHttp.responseText)});
        //BPM = xmlHttp.responseText;
      } else {
        console.warn('error');
      }
    };
    xmlHttp.open('POST', 'http://104.199.132.3/PreAddMember', true);
    xmlHttp.send();
  }


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.upnavigate}>
            <Image source={require('./drawable-mdpi/NO.png')} style={{height:14,width:100}}></Image>
          </View>      

          <View style={styles.content}>
        
            <View style={styles.part1}>
              <View style={styles.part1_1}>
                <View style={styles.part1_1_1}>
                  <TextInput style={styles.input} placeholder="name" onChangeText={ (NameDone)=>this.setState({ NameDone }) }>
                  </TextInput>


                  <TextInput style={styles.input} placeholder="gender" onChangeText={ (GenderDone)=>this.setState({ GenderDone }) }>
                  </TextInput>    

                  <TextInput style={styles.input} placeholder="age" onChangeText={ (AgeDone)=>this.setState({ AgeDone }) }>
                  </TextInput>

                  <TextInput style={styles.input} placeholder="hospital" onChangeText={ (HospitalDone)=>this.setState({ HospitalDone }) }>
                  </TextInput>
                </View>
                <View style={styles.part1_1_2}>
                  <TouchableHighlight onPress={ () => {
                      var xmlHttp = new XMLHttpRequest();
                      xmlHttp.onreadystatechange = (e) => {
                        if (xmlHttp.readyState !== 4) {
                          return;
                        }

                        if (xmlHttp.status === 200) {
                          console.log('success', xmlHttp.responseText);
                        } else {
                          console.warn('error');
                        }
                      };
                      xmlHttp.open('POST', 'http://104.199.132.3/AddMember', true);
                      xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                      xmlHttp.send(JSON.stringify({name: this.state.NameDone, triage:0, gender:this.state.GenderDone, age:this.state.AgeDone, hospital:this.state.HospitalDone, breath:this.state.BreathDone, heart:this.state.BPM, blood:this.state.BloodDone}));
                      this.props.navigator.replace({ id: 'INDEX', });
                      
                  } } >
                  <Image source={require('./drawable-mdpi/send_normal.png')} style={{height:35, width:160}} />
                  </TouchableHighlight>
                </View>

              </View>
              
              <View style={styles.part1_2}>
                <Image source={require('./drawable-mdpi/men_dark.png')} style={{height:320,width:90}} />

              </View>

              
            </View>

            <View style={styles.part2}>
              <View style={styles.part2_X}>
                <Image source={require('./drawable-mdpi/ic_0_breath.png')} style={styles.part2_X_img}></Image>
                <TextInput style={{fontSize:30, color:'white', fontWeight:'bold', width:70, textAlign:'center', paddingTop:0, paddingBottom:0}} placeholder="???" onChangeText={ (BreathDone)=>this.setState({ BreathDone }) }></TextInput>
                <Text style={{color:'white'}}>times/min</Text>
              </View>
              
              <View style={{borderRightColor:'white', borderLeftColor:'white', borderLeftWidth:0.2, borderRightWidth:0.2, justifyContent: 'center', alignItems: 'center', flex:1,}}>
                <Image source={require('./drawable-mdpi/ic_0_heart.png')} style={styles.part2_X_img}></Image>
                <Text style={{fontSize:30, color:'white', fontWeight:'bold'}}>{this.state.BPM}</Text>
                <Text style={{color:'white'}}>times/min</Text>
              </View>
              
              <View style={styles.part2_X}>
                <Image source={require('./drawable-mdpi/ic_0_blood.png')} style={styles.part2_X_img}></Image>
                <TextInput style={{fontSize:30, color:'white', fontWeight:'bold', width:70, textAlign:'center', paddingTop:0, paddingBottom:0}} placeholder="???" onChangeText={ (BloodDone)=>this.setState({ BloodDone }) }></TextInput>
                <Text style={{color:'white'}}>mmHg</Text>
              </View>
            </View>


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
    
    
    backgroundColor: '#403e3d',
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
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  part2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#403e3d',
    flexDirection: 'row'
  },

  part1_1: {
    flex: 60
  },
  part1_2:{
    flex: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  part1_1_1: {
    flex: 65,
    justifyContent:'space-between'
  },
  part1_1_2: {
    flex: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },


  input: {
    textAlign: 'center',
    color: '#ffffff',
    height: 50
  },

  part2_X: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },

  part2_X_img: {
    width: 50,
    height:50,
    marginBottom:15
  }

});

module.exports = INPUTblack;
