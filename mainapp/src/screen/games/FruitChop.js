import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { WebView } from 'react-native-webview';
import {
    hideNavigationBar,
    showNavigationBar,
} from 'react-native-navigation-bar-color';
import Orientation from 'react-native-orientation';
import Pusher from 'pusher-js/react-native';
import {SIZES} from "../../component/theme/index"


export class FruitChop extends Component {
    constructor(props) {
        super(props);
        this.state={
          
        };

        this.pusher = new Pusher('0d8c1e92affbbd814235', {
            cluster: 'ap1'
          });
        this.channel = this.pusher.subscribe('game-over');
          this.channel.bind('game-over', (data) => {
             if(data.id === this.props.userId.toString()){
                //  this.props.navigation.navigate('Home');
                //  Orientation.lockToPortrait();
                //  showNavigationBar();
             }
          });
      }

      componentDidMount=()=>{
          Orientation.lockToLandscape();
          hideNavigationBar();
      }
      componentWillUnmount=()=>{
        Orientation.lockToPortrait();
        showNavigationBar();
      }
    render() {
        return (<View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}><WebView 
        scalesPageToFit={false}
        bounces={false}
        scrollEnabled={false}
        style={{overflow:'hidden',height:SIZES.width+100,width:SIZES.height+50}} source={{ uri: this.props.route.params.Link}} /></View>);
    }
}

const mapStateToProps = state => {
    return {
      host: state.auth.host,
      userId:state.auth.userId
    }
  };

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FruitChop)