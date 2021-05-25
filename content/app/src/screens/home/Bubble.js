import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { WebView } from 'react-native-webview';



export class Bubble extends Component {
    render() {
        return (<View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}><WebView style={{height:300,width:450}} source={{ uri: this.props.navigation.state.params.Link}} /></View>);
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Bubble)
