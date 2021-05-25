import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { WebView } from 'react-native-webview';
import Orientation from 'react-native-orientation';
import changeNavigationBarColor,{
    hideNavigationBar,
    showNavigationBar,
  } from 'react-native-navigation-bar-color';
import UserThumb from "../../component/ui/UserThumb"
import { SIZES } from '../../component/theme';



export class Pool extends Component {
    componentDidMount(){
        Orientation.lockToLandscape();
        hideNavigationBar();
    }
    componentWillUnmount(){
        Orientation.lockToPortrait();
        showNavigationBar();
    }
    render() {
        return (<View style={{flex:1,alignItems:'center',backgroundColor:'black'}}>
            <UserThumb />
            <WebView style={{height:SIZES.width,width:SIZES.height}} source={{ uri: this.props.route.params.Link}} /></View>);
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Pool)