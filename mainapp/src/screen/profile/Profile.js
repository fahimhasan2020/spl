import React, { Component } from 'react'
import { View, Text,Image,StatusBar,StyleSheet,Platform,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { SIZES, COLORS } from '../../component/theme';
import {Icon} from "native-base";

export class Profile extends Component {
    state = {
        
    }
    
    render() {
        return (
            <View style={{backgroundColor:'#fcfcfc',height:SIZES.height}}>
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('EditProfile')}} style={{position:'absolute',top:SIZES.height*0.1,zIndex:10,backgroundColor:'white',padding:10,left:0,flexDirection:'row',borderTopRightRadius:20,elevation:10,borderBottomRightRadius:20}}>
                    <Icon name="circle-edit-outline" type="MaterialCommunityIcons" style={{fontSize:16,color:'#adadad',marginRight:10}} />
                    <Text style={{fontSize:12}}>EDIT</Text>
                </TouchableOpacity>
                <View style={{width:SIZES.width}}>
                {this.props.profilePicture ===''||this.props.profilePicture===null?<Image
          source={require('../../../assets/img/user/avatarmail.png')}
          style={styles.coverPhoto}
        />:<Image source={{uri:this.props.profilePicture}} blurRadius={0.8} style={styles.coverPhoto} />}
         {this.props.profilePicture ===''||this.props.profilePicture===null?<Image
          source={require('../../../assets/img/user/avatarmail.png')}
          style={styles.dp}
        />:<View style={{backgroundColor:'white',padding:10,borderRadius:25,height:80,width:80,alignItems:'center',justifyContent:'center',elevation:20,alignSelf:'center',marginTop:-40}}><Image source={{uri:this.props.profilePicture}} style={styles.dp} /></View>}
   
                </View>
                <Text style={{textTransform:'uppercase',alignSelf:'center',fontSize:10,letterSpacing:10,marginTop:10,color:COLORS.primaryLight,fontWeight:'bold',elevation:10}}>{this.props.firstName}  {this.props.lastName} </Text>
                <Text style={{alignSelf:'center',fontSize:12,letterSpacing:2,marginTop:10,color:COLORS.primaryLight,fontWeight:'bold',elevation:10}}> {this.props.email} </Text>

                <View style={{marginLeft:20,marginRight:20,backgroundColor:'white',padding:20,borderRadius:20,marginTop:30,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <Icon name="phone-square" type="FontAwesome" style={{fontSize:20,color:'#adadad'}} />
                       <Text style={{color:'#adadad'}}>{this.props.phoneNumber}</Text>
                   </View>
                   <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
                       <Icon name="sharealt" type="AntDesign" style={{fontSize:20,color:'#adadad'}} />
                       <Text style={{color:'#adadad',letterSpacing:4,fontWeight:'bold'}}>{this.props.referenceCode}</Text>
                   </View>
                </View>    
                <View style={{width:SIZES.width+100,marginLeft:-50,height:100,backgroundColor:COLORS.redLight,zIndex:-1,position:'absolute',top:SIZES.height*0.5,transform: [{ skewY: '-20deg' }]}}></View>
                <View style={{width:SIZES.width+100,marginLeft:-50,height:100,backgroundColor:COLORS.redLight,zIndex:-1,position:'absolute',top:SIZES.height*0.8,transform: [{ skewY: '-20deg' }]}}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    coverPhoto:{
        width:SIZES.width,height:SIZES.height*0.3,resizeMode:'cover',borderBottomLeftRadius:180,
        borderBottomRightRadius:180,
        
    },
    dp:{
        height:70,width:70,alignSelf:'center',borderRadius:35,
        
    }
})

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

const mapDispatchToProps = dispatch=> {
    return{
        //
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
