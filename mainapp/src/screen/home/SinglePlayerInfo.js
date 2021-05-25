import React, { Component } from 'react'
import { View, Text,StatusBar,Image,TouchableOpacity,ToastAndroid } from 'react-native'

import { connect } from 'react-redux'
import { COLORS,SIZES } from '../../component/theme';
import {Icon} from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import { ProgressBar } from 'react-native-paper';
import PrizeList from "../../component/ui/PrizeList";

export class SinglePlayerInfo extends Component {
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
                <Text style={{fontSize:15,color:COLORS.redDeep,fontWeight:'bold',alignSelf:'center',textAlign:'center',marginTop:20}}>This will conduct  coins from your account.</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',margin:20,backgroundColor:'white',padding:10,borderRadius:10}}>
                    <Text>Available Coins</Text>
                    <Text>{this.props.coins}</Text>
                </View>
                <Text style={{marginLeft:20,marginRight:20,textAlign:'center',fontWeight:'bold'}}>
                    Play challange mode game and wind 50% of the price. We shall count your score within next 6 hour and based on your score we shall give you bonus.
                </Text>
            
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginTop:20,borderWidth:2,borderColor:'#e4e4e4',marginRight:30,borderRadius:10,backgroundColor:'white',padding:5}}>
                <View >
                    <Text>Play with 50 coins per game</Text>
                    <ProgressBar progress={0.9} color={'red'} />
                    <Text>People joins 0/50</Text>
                </View>
                <TouchableOpacity onPress={async()=>{
                    if(this.props.coins>100){
                        this.props.navigation.navigate(this.props.route.params.road,{Link:this.props.route.params.Link});
                        await this.props.changeCoins(this.props.coins -50);
                        fetch(this.props.host+'user/new/coins',{
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email:this.props.email,
                                coins:this.props.coins
                            })
                        })

                    }else{
                        ToastAndroid.show('Insufficient coins',ToastAndroid.SHORT,ToastAndroid.CENTER);
                    }
                    }} style={{margin:5}}>
                <LinearGradient colors={['#5a9216', '#85bb5c', '#8bc34a']} style={{padding:5,width:90,height:30,marginRight:20,alignItems:'center',borderRadius:10}}>
  <Text style={{color:'#eee',fontSize:12}}>
  Join
  </Text>
</LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginTop:20,borderWidth:2,borderColor:'#e4e4e4',marginRight:30,borderRadius:10,backgroundColor:'white',padding:5}}>
                <View >
                    <Text>Play with 500 coins per game</Text>
                    <ProgressBar progress={0.7} color={'red'} />
                    <Text>People joins 0/50</Text>
                </View>
                <TouchableOpacity onPress={async()=>{
                    if(this.props.coins>500){
                        this.props.navigation.navigate(this.props.route.params.road,{Link:this.props.route.params.Link});
                        await this.props.changeCoins(this.props.coins -500);
                        fetch(this.props.host+'user/new/coins',{
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email:this.props.email,
                                coins:this.props.coins
                            })
                        })

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
  Join
  </Text>
</LinearGradient>
                </TouchableOpacity>
            </View>

            
                <Text style={{fontSize:15,color:COLORS.redDeep,fontWeight:'bold',alignSelf:'center',textAlign:'center',marginTop:20}}>Last Game Results</Text>
                <PrizeList />
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

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayerInfo)
