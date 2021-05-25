import React, { Component } from 'react'
import { View, Text,StatusBar } from 'react-native'
import { connect } from 'react-redux'
import * as ScreenOrientation from 'expo-screen-orientation';
import { WebView } from 'react-native-webview';



export class Pool extends Component {
    componentDidMount =async()=>{
        await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_DOWN)
    }
    render() {
        return (<View style={{flex:1}}>
            <StatusBar hidden={true} />
            <WebView setDesktopMode={true} source={{ uri: this.props.navigation.state.params.Link}} />
        </View>);
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Pool)
