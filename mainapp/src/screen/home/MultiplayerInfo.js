import React, { Component } from 'react'
import { View, Text,StatusBar,Image,TouchableOpacity,ToastAndroid } from 'react-native'

import { connect } from 'react-redux'
import { COLORS,SIZES } from '../../component/theme';
import {Icon} from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import changeNavigationBarColor,{
    hideNavigationBar,
    showNavigationBar,
  } from 'react-native-navigation-bar-color';

export class MultiplayerInfo extends Component {
  
    componentDidMount=()=>{
        changeNavigationBarColor(COLORS.white);
    }
    componentWillUnmount=()=>{
        changeNavigationBarColor(COLORS.redDeep);
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{position:'absolute',top:SIZES.height*0.1,zIndex:10,backgroundColor:'white',padding:10,left:0,flexDirection:'row',borderTopRightRadius:20,elevation:10,borderBottomRightRadius:20}}>
                    <Icon name="arrow-back" type="Ionicons" style={{fontSize:16,color:'#adadad',marginRight:10}} />
                    <Text style={{fontSize:12}}>Go Back</Text>
                </TouchableOpacity>
                <Image blurRadius={3} source={this.props.route.params.pic} style={{width:'100%',height:200}} />
                <View style={{width:'100%',height:200,backgroundColor:'rgba(128, 0, 128, 0.5)',position:'absolute',top:0}}></View>
                <Text style={{position:'absolute',top:100,alignSelf:'center',color:'white',fontSize:20,textTransform:'uppercase'}}>
                    {this.props.route.params.gameTitle}
                </Text>               
                <View style={{flexDirection:'row',justifyContent:'space-between',margin:20,backgroundColor:'white',elevation:10,padding:10,borderRadius:10}}>
                    <Text>Available Coins</Text>
                    <Text>{this.props.coins}</Text>
                </View>
                <Text style={{marginLeft:20,marginRight:20,textAlign:'center',fontWeight:'bold'}}>
                   For 100 coins game winner will win 190 coins. For 500 coins game winner will take 950 coins. For 1000 coins game winner will win 1900 coins.
                </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginTop:20,borderWidth:2,borderColor:'#e4e4e4',marginRight:30,borderRadius:10,elevation:10,backgroundColor:'white',padding:5}}>
                <View >
                    <Text style={{marginTop:5}}>Play with 100 coins </Text>    
                </View>
                <TouchableOpacity onPress={async()=>{
                    if(this.props.coins>100){
                        const host = this.props.host;
                        fetch(host+'user/newloose/'+this.props.userId+'/'+100);
                        this.props.navigation.navigate(this.props.route.params.road,{Link:this.props.route.params.Link,CoinPlay:100});
                        await this.props.changeCoins(this.props.coins -100);
                    }else{
                        ToastAndroid.show('Insufficient coins',ToastAndroid.SHORT,ToastAndroid.CENTER);
                    }
                    }}  style={{margin:5}}>
                <LinearGradient colors={['#5a9216', '#85bb5c', '#8bc34a']} style={{padding:5,width:90,height:30,marginRight:20,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}}>
  <Text style={{color:'#eee',fontSize:12}}>
  Play
  </Text>
</LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginTop:20,borderWidth:2,borderColor:'#e4e4e4',marginRight:30,borderRadius:10,elevation:10,backgroundColor:'white',padding:5}}>
                <View >
                    <Text style={{marginTop:5}}>Play with 500 coins </Text>    
                </View>
                <TouchableOpacity onPress={async()=>{
                    if(this.props.coins>500){
                        const host = this.props.host;
                        fetch(host+'user/newloose/'+this.props.userId+'/'+500);
                        this.props.navigation.navigate(this.props.route.params.road,{Link:this.props.route.params.Link,CoinPlay:500});
                        await this.props.changeCoins(this.props.coins -500);

                    }else{
                        ToastAndroid.show('Insufficient coins',ToastAndroid.SHORT,ToastAndroid.CENTER);
                    }
                    }}  style={{margin:5}}>
                <LinearGradient colors={['#5a9216', '#85bb5c', '#8bc34a']} style={{padding:5,width:90,height:30,marginRight:20,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}}>
  <Text style={{color:'#eee',fontSize:12}}>
  Play
  </Text>
</LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginTop:20,borderWidth:2,borderColor:'#e4e4e4',marginRight:30,borderRadius:10,elevation:10,backgroundColor:'white',padding:5}}>
                <View >
                    <Text style={{marginTop:5}}>Play with 1000 coins </Text>    
                </View>
                <TouchableOpacity onPress={async()=>{
                    if(this.props.coins>1000){
                        const host = this.props.host;
                        fetch(host+'user/newloose/'+this.props.userId+'/'+1000,);
                        await this.props.changeCoins(this.props.coins -1000);
                        this.props.navigation.navigate(this.props.route.params.road,{Link:this.props.route.params.Link,CoinPlay:1000});
                    }else{
                        ToastAndroid.show('Insufficient coins',ToastAndroid.SHORT,ToastAndroid.CENTER);
                    }
                    }}  style={{margin:5}}>
                <LinearGradient colors={['#5a9216', '#85bb5c', '#8bc34a']} style={{padding:5,width:90,height:30,marginRight:20,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,
elevation: 24}}>
  <Text style={{color:'#eee',fontSize:12}}>
  Play
  </Text>
</LinearGradient>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
      host: state.auth.host,
      firstName: state.auth.firstName,
      lastName: state.auth.lastName,
      email: state.auth.email,
      profilePicture: state.auth.profilePicture,
      coins:state.auth.coins,
      nid: state.auth.nid,
      userId:state.auth.userId,
      referenceCode:state.auth.referenceCode,
      phoneNumber:state.auth.phoneNumber
    }
  };

  const mapDispatchToProps = dispatch=>{
    return{
        changeCoins:(value)=>{dispatch({type:'BUY_COINS',coins:value})}
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiplayerInfo)
