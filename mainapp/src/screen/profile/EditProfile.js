import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StatusBar,ScrollView,Image,TextInput,StyleSheet,ToastAndroid,FlatList} from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker';
import { SIZES, COLORS } from '../../component/theme';
import {Icon} from "native-base";

const Item = ({ title }) => (
  <View style={{alignSelf:'center',width:300,backgroundColor:'white',elevation:2,padding:5,borderRadius:10,margin:15}}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{fontSize:19,color:COLORS.redDeep,fontWeight:'bold'}}>Game</Text>
    <Text style={{fontSize:14,color:COLORS.redDeep}}>Result</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
    <Text style={{fontSize:13,color:'#cccccc'}}>Time:</Text>
    <Text style={{fontSize:13,color:'#cccccc'}}>Earned -- 0000</Text>
  </View>
</View>
);


export class EditProfile extends Component {

  state = {
    firstName:'',
    lastName:'',
    phoneNumber:'',
    history:[],
    refa:''
  }

  changeDp = async()=>{
   await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64:true
    }).then(image => {
      console.log(image);
      this.props.changedP('data:image/png;base64,'+image.data)
    });
  }

  getDate(mysql_string)
{ 
   var t, result = null;

   if( typeof mysql_string === 'string' )
   {
      t = mysql_string.split(/[- :]/);
      result = new Date(t[0], t[1] - 1, t[2], t[3] || 0, t[4] || 0, t[5] || 0);          
   }

   return result;   
}

  changeBscicInfo = () => {
    this.props.changeInfo({
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      phoneNumber:this.state.phoneNumber,
      referenceCode:this.state.refa
    });
    fetch(this.props.host+'user/save/info',{
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email:this.props.email,
          first_name:this.props.firstName,
          last_name:this.props.lastName,
          phone:this.props.phoneNumber,
      })
  }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
          if (responseJson.hasOwnProperty('errors')){
              this.setState({loading:false})
              ToastAndroid.show('Invalid', ToastAndroid.SHORT);
          }else{
              ToastAndroid.show('Profile updated',ToastAndroid.CENTER,ToastAndroid.SHORT)
              
}
})
    
  }

  componentDidMount = ()=>{
    this.setState({firstName:this.props.firstName,lastName:this.props.lastName,phoneNumber:this.props.phoneNumber});
    fetch(this.props.host+'user/last/game/result/'+this.props.userId).then((response)=>response.json()).then((responseJson)=>{
      console.log(responseJson);
      this.setState({history:responseJson});
    });
  }


    render() {
        return (
            <View>
               <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{position:'absolute',top:SIZES.height*0.1,zIndex:10,backgroundColor:'white',padding:10,left:0,flexDirection:'row',borderTopRightRadius:20,elevation:10,borderBottomRightRadius:20}}>
                    <Icon name="circle-edit-outline" type="MaterialCommunityIcons" style={{fontSize:16,color:'#adadad',marginRight:10}} />
                    <Text style={{fontSize:12}}>Back</Text>
                </TouchableOpacity>

                <View style={{alignItems:'center',justifyContent:'center',padding:5,width:145,height:145,marginTop:150,alignSelf:'center',borderRadius:72,backgroundColor:'white',elevation:10}}>
                  <Image source={{uri:this.props.profilePicture}} style={{height:140,width:140,borderRadius:70}} />
                  <Icon onPress={()=>{this.changeDp()}} name="camera" type="Entypo" style={{position:'absolute',fontSize:40,bottom:-10,right:15,color:COLORS.primaryDeep}} />
                </View>

                <ScrollView style={{height:400,overflow:'scroll',marginBottom:100}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:30,paddingRight:30,marginTop:50}}>
                    <TextInput value={this.state.firstName} onChangeText={value=>{this.setState({firstName:value})}} style={{borderBottomWidth:2,borderBottomColor:'#e4e4e4',width:100}} placeholder="First name" />
                    <TextInput  value={this.state.lastName} onChangeText={value=>{this.setState({lastName:value})}} style={{borderBottomWidth:2,borderBottomColor:'#e4e4e4',width:100}} placeholder="Last name" />
                  </View>
                  <View style={{paddingLeft:30,paddingRight:30,flexDirection:'row',justifyContent:'space-between'}}>
                  
                  <TextInput  value={this.state.phoneNumber} onChangeText={value=>{this.setState({phoneNumber:value})}} style={{borderBottomWidth:2,borderBottomColor:'#e4e4e4',width:200}} placeholder="Phone number" />
                  </View>

                  <TouchableOpacity onPress={()=>{this.changeBscicInfo()}} style={{width:200,alignSelf:'center',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.redDeep,padding:10,borderRadius:15,marginTop:60}}>
                    <Text style={{color:'white'}}>Save</Text>
                  </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  header:{
    fontSize:16,fontWeight:'bold',alignSelf:'center',color:COLORS.redDeep,marginBottom:20
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
    changedP : (value) => {dispatch({type:'CHANGE_DP',profile_picture: value})},
    changeInfo : (value) => {dispatch({type:'CHANGE_BASIC_INFO',info: value})},
  }    
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
