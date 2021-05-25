import React, { Component } from 'react'
import { View, Text,Image } from 'react-native'
import { connect } from 'react-redux'
import { WebView } from 'react-native-webview';
import changeNavigationBarColor,{
    hideNavigationBar,
    showNavigationBar,
  } from 'react-native-navigation-bar-color';
import UserThumb from "../../component/ui/UserThumb"



export class GameView extends Component {
    componentDidMount=()=>{
        hideNavigationBar();
    }
    componentWillUnmount=()=>{
        showNavigationBar();
    }

    render() {
        return (<View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
            <UserThumb />
            <WebView style={{height:300,width:450,marginLeft:90,marginTop:150}} source={{ uri: this.props.route.params.Link}} />
            </View>);
    }
}

const mapStateToProps = state => {
    return {
      host: state.auth.host,
      firstName: state.auth.firstName,
      lastName: state.auth.lastName,
      email: state.auth.email,
      profilePicture: state.auth.profilePicture,
      nid: state.auth.nid,
      userId:state.auth.userId,
      referenceCode:state.auth.referenceCode,
      phoneNumber:state.auth.phoneNumber
    }
  };

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GameView)