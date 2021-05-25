import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import * as ScreenOrientation from 'expo-screen-orientation';
import { WebView } from 'react-native-webview';



export class GameView extends Component {

    render() {
        return (<View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}><WebView style={{height:300,width:450,marginLeft:90,marginTop:150}} source={{ uri: this.props.navigation.state.params.Link}} /></View>);
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GameView)
