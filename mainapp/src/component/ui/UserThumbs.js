import React, { Component } from 'react'
import { View, Text,Image } from 'react-native'
import { connect } from 'react-redux'

export class UserThumb extends Component {

    state={
        firstName:'',
        otherF:'',
        otherR:'',
    }

    componentDidMount = ()=>{
        fetch(this.props.host+'user/get/random').then((response)=>response.json()).then((responseJson)=>{
            this.setState({firstName:responseJson.first_name});
           
        })
        fetch(this.props.host+'user/get/random').then((response)=>response.json()).then((responseJson)=>{
            this.setState({otherF:responseJson.first_name});
           
        })
        fetch(this.props.host+'user/get/random').then((response)=>response.json()).then((responseJson)=>{
            this.setState({otherR:responseJson.first_name});
           
        })
    }

    render() {
        return (
               <View style={{position:'absolute',zIndex:10,top:80,width:250,height:40,backgroundColor:'orange',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                <Image source={{uri:this.props.host+'admin/profilepicture/1.png'}} style={{height:60,width:60,borderRadius:30,marginTop:-10,marginRight:-15,borderWidth:3,borderColor:'orange'}} />
                <Text style={{fontSize:10,fontWeight:'bold',color:'white',letterSpacing:2,margin:5}}>{this.state.otherF.substring(0, 5)}</Text>
                </View>
                <View style={{borderWidth:5,borderRadius:30,padding:8,height:50,backgroundColor:'orange',marginTop:-6}}>
                    {/* <Text style={{color:'white',fontSize:12,fontWeight:'bold'}}>100</Text> */}
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:10,fontWeight:'bold',color:'white',letterSpacing:2,margin:5}}>{this.state.firstName.substring(0, 5)}</Text>
                     <Image source={{uri:this.props.host+'admin/profilepicture/1.png'}} style={{height:60,width:60,borderRadius:30,marginTop:-10,marginRight:-15,borderWidth:3,borderColor:'orange',backgroundColor:'blue'}} />
              
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
      nid: state.auth.nid,
      userId:state.auth.userId,
      referenceCode:state.auth.referenceCode,
      phoneNumber:state.auth.phoneNumber
    }
  };

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserThumb)
