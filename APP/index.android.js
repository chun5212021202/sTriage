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
  Text,
  Navigator
} from 'react-native';

import LIST from './LIST';
import INPUTred from './INPUTred';
import INPUTblack from './INPUTblack';
import INPUTyellow from './INPUTyellow';
import INPUTgreen from './INPUTgreen';
import INDEX from './INDEX';

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


class sTriage extends Component {
  /*
  constructor(props){
    super(props);
    this.state = {}
  }
  */
  render() {
    return (
      <Navigator
        initialRoute={{id: 'INDEX', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        style={{flex:9}}
      />

    );
  }

  renderScene ( route, navigator ) {
    var routeId = route.id;
    if (routeId === 'INDEX') {
        return (
            <INDEX
                navigator={navigator}/>
        );
    }
    if (routeId === 'INPUTred') {
        return (
            <INPUTred
                navigator={navigator}/>
        );
    }
    if (routeId === 'INPUTblack') {
        return (
            <INPUTblack
                navigator={navigator}/>
        );
    }
    if (routeId === 'INPUTyellow') {
        return (
            <INPUTyellow
                navigator={navigator}/>
        );
    }
    if (routeId === 'INPUTgreen') {
        return (
            <INPUTgreen
                navigator={navigator}/>
        );
    }
    if (routeId === 'LIST') {
        return (
            <LIST
                navigator={navigator}/>
        );
    }
  }

}

const styles = StyleSheet.create({
  container: {

  },

});

AppRegistry.registerComponent('sTriage', () => sTriage);
