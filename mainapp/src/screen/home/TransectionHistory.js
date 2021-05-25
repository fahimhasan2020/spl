import React, { Component } from 'react'
import { View, Text,StyleSheet,SafeAreaView,FlatList } from 'react-native'
import { SIZES, COLORS } from '../../component/theme';
import {Icon} from "native-base";

import { connect } from 'react-redux'

export class TransectionHistory extends Component {
 
  state = {
    history:[]
  }

  fetchTimeDate=(timestamp)=>{
    var iteim = new Date(timestamp).getDate();
    return iteim;
  }

  fetchTimeMonth=(timestamp)=>{
    var iteim = new Date(timestamp).getMonth();
    return iteim;
  }

  fetchTimeYear=(timestamp)=>{
    var iteim = new Date(timestamp).getYear();
    return iteim;
  }


  componentDidMount=()=>{
    fetch(this.props.host+'user/txhistory/'+this.props.userId).then((response)=>response.json()).then((responseJson)=>{
      this.setState({history:responseJson});
    });
  }

    render() {
        return (
            <SafeAreaView style={styles.container}>
              <FlatList
        data={this.state.history}
        renderItem={({item})=> <View style={{alignSelf:'center',width:300,backgroundColor:'white',elevation:2,padding:5,borderRadius:10,margin:15}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:19,color:COLORS.redDeep,fontWeight:'bold'}}>{item.type}</Text>
          <Text style={{fontSize:14,color:COLORS.redDeep}}>Amount</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <Text style={{fontSize:13,color:'#cccccc'}}>Time:{this.fetchTimeDate(item.created_at)+'/'+this.fetchTimeMonth(item.created_at)+'/'+this.fetchTimeYear(item.created_at)}</Text>
          <Text style={{fontSize:13,color:'#cccccc'}}>{item.amount}</Text>
        </View>
      </View>}
        keyExtractor={item => item.id}
      />
                
            </SafeAreaView>
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

const mapDispatchToProps = dispatch=> {
  return{
    changedP : (value) => {dispatch({type:'CHANGE_DP',profile_picture: value})},
    changeInfo : (value) => {dispatch({type:'CHANGE_BASIC_INFO',info: value})},
  }    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TransectionHistory)
