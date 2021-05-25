import React, { Component } from 'react'
import { View, Text,Alert,ActivityIndicator,PanResponder,StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { WebView } from 'react-native-webview';
import UserThumb from "../../component/ui/UserThumb"
import UserInactivity from 'react-native-user-inactivity';
// Import the react-native-sound module
const Sound = require('react-native-sound');
import {
    hideNavigationBar,
    showNavigationBar,
} from 'react-native-navigation-bar-color';
import Orientation from 'react-native-orientation';
import Pusher from 'pusher-js/react-native';
import { SIZES } from '../../component/theme';
console.disableYellowBox = true;
Sound.setCategory('Playback');
const whoosh = new Sound('love.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
      
      
      });

export class Ludu extends Component {
    constructor(props) {
        super(props);
        this.state={
          searching:true,
          show : false,
          active:true,
          timer:200000,
        };
        this.pusher = new Pusher('0d8c1e92affbbd814235', {
            cluster: 'ap1'
          });
        this.channel = this.pusher.subscribe('game-over-multi');
          this.channel.bind('game-over-multi', (data) => {
             if(data.id === this.props.userId.toString()){
                 if(data.result == "1"){
                  fetch(this.props.host+'user/get/info',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email:this.props.email
                    })
                }).then((response)=>response.json()).then((responseJson)=>{
                  this.props.changeCoins(responseJson.coins);
                });
                    //const con = data.coins;
                    //this.updatesa(con);
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

      fireInActive = ()=>{
        this.setState({active:false});
        Alert.alert(
          "Timeout",
          "Game over due to inactivity",
          [
           
            { text: "Return Home", onPress: () => {this.props.navigation.navigate('Home')} }
          ]
        );
        setTimeout(()=>{
          fetch('http://admin.spl.games/user/multigame/'+this.props.userId+'/'+this.props.route.params.CoinPlay+'/0/ludo');
          this.props.navigation.navigate('Home');
         }, 4000);
       
      }

     

    componentDidMount=()=>{
      
      // Play the sound with an onEnd callback
     
     
      this.props.navigation.addListener('beforeRemove', (e) => {
        whoosh.stop(() => {
          //
          });
          whoosh.release();
        e.preventDefault();
        Alert.alert(
          "Leaving !",
          "If you end this game you will be lost.",
          [
           
            { text: "Return Home", onPress: () => {
              this.props.navigation.navigate('Home')
              fetch('http://admin.spl.games/user/multigame/'+this.props.userId+'/'+this.props.route.params.CoinPlay+'/0/ludo');
              this.props.navigation.navigate('Home');
            }
            
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
          ]
        );
       
      })
          Orientation.lockToPortrait();
          hideNavigationBar();
          setTimeout(()=>{ 
            this.setState({searching:false});
            whoosh.play((success) => {
              if (success) {
                console.log('successfully finished playing');
              } else {
                console.log('playback failed due to audio decoding errors');
              }
            });
            // Reduce the volume by half
            whoosh.setVolume(0.3);
           }, 7000);
      }
      componentWillUnmount=()=>{
        whoosh.stop(() => {
        //
        });

        whoosh.release();
        this.channel = this.pusher.unsubscribe('game-over-multi');
        Orientation.lockToPortrait();
        showNavigationBar();        
      } 
    render() {

        return ( <UserInactivity
        isActive={this.state.active}
        timeForInactivity={this.state.timer}
        onAction={() => { this.fireInActive() }}
        style={{ flex: 1, paddingTop: '10%' }}
      ><View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>

           {this.state.searching?<View style={{zIndex:100,width:SIZES.width,height:SIZES.height+200,flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'blueviolet',elevation:20,position:'absolute',top:0,left:0}}>
              <Text style={{fontSize:SIZES.h1,fontWeight:'bold',color:'white'}}>Searching</Text>
              <ActivityIndicator size="large" color={'#ffffff'} />
            </View>:null} 
            <UserThumb />
            <WebView style={{height:SIZES.height,width:SIZES.width}} source={{ uri:this.props.route.params.Link+'?user='+this.props.userId+'&gamecoins='+this.props.route.params.CoinPlay}} /></View></UserInactivity>);
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