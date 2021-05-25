import React, { Component } from 'react'
import { View, Text,StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { WebView } from 'react-native-webview';



export class Carrom extends Component {
    render() {
        return (<View style={{flex:1,backgroundColor:'black'}}><StatusBar hidden={true}/><WebView 
        javaScriptEnabled={true}
        domStorageEnabled={false}
        startInLoadingState={false}
        scalesPageToFit={true}
        scrollEnabled={true}
        source={{ uri: this.props.navigation.state.params.Link}} /></View>);
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrom)
