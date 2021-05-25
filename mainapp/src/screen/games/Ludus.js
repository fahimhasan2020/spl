import React, { Component } from 'react'
import { View, Text,Alert,ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { WebView } from 'react-native-webview';
import UserThumbs from "../../component/ui/UserThumbs"
import UserThumbsDown from "../../component/ui/UserThumbsDown"

import {
    hideNavigationBar,
    showNavigationBar,
} from 'react-native-navigation-bar-color';
import Orientation from 'react-native-orientation';
import Pusher from 'pusher-js/react-native';
import { SIZES } from '../../component/theme';
console.disableYellowBox = true;


export class Ludu extends Component {
    constructor(props) {
        super(props);
        this.state={
          searching:true
        };

        this.pusher = new Pusher('0d8c1e92affbbd814235', {
            cluster: 'ap1'
          });
        this.channel = this.pusher.subscribe('game-over-multi');
          this.channel.bind('game-over-multi', (data) => {
             if(data.id === this.props.userId.toString()){
                 if(data.result == "1"){
                     const con = data.coins*2- (data.coins*2*0.1);
                    this.updatesa(con);
                    Alert.alert(
                        "Win",
                        "Congratulations. You have won "+con.toString()+"Coins",
                        [
                         
                          { text: "Return Home", onPress: () => {this.props.navigation.navigate('Home')} }
                        ]
                      );
                 }else{
                    Alert.alert(
                        "Loose",
                        "Try next time",
                        [
                         
                          { text: "Return Home", onPress: () => {this.props.navigation.navigate('Home')} }
                        ]
                      );
                 }
             }
          });
      }

      updatesa = async(con)=>{
          await  this.props.changeCoins(this.props.coins+con);
      }

      componentDidMount=()=>{
          Orientation.lockToPortrait();
          hideNavigationBar();
          setTimeout(()=>{ 
            this.setState({searching:false})
           }, 7000);
      }
      componentWillUnmount=()=>{
        this.channel = this.pusher.unsubscribe('game-over-multi');
        Orientation.lockToPortrait();
        showNavigationBar();
      } 
    render() {
        return (<View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
           {this.state.searching?<View style={{zIndex:100,width:SIZES.width,height:SIZES.height+200,flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'blueviolet',elevation:20,position:'absolute',top:0,left:0}}>
              <Text style={{fontSize:SIZES.h1,fontWeight:'bold',color:'white'}}>Searching</Text>
              <ActivityIndicator size="large" color={'#ffffff'} />
            </View>:null} 
            <UserThumbs />
            <UserThumbsDown />
            <WebView style={{height:SIZES.height,width:SIZES.width}} source={{ uri:this.props.route.params.Link+'?user='+(parseInt(this.props.userId)+669982)+'&gamecoins='+this.props.route.params.CoinPlay}} /></View>);
    }
}

const mapStateToProps = state => {
    return{
      host: state.auth.host,
      firstName: state.auth.firstName,
      lastName: state.auth.lastName,
      email: state.auth.email,
      profilePicture: state.auth.profilePicture,
      nid: state.auth.nid,
      coins:state.auth.coins,
      userId:state.auth.userId,
      referenceCode:state.auth.referenceCode,
      phoneNumber:state.auth.phoneNumber
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        changeCoins:(value)=>{dispatch({type:'BUY_COINS',coins:value})}
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Ludu)