import React, { Component } from 'react'
import { View, Text,ScrollView,StyleSheet,Image,TouchableOpacity,ToastAndroid} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Card,CardItem,Body} from "native-base"

export class Coins extends Component {
    

    render() {
        return (
            <ScrollView style={styles.container}>
               <Card style={{paddingTop:70}}>
                   <CardItem>
                       <Body>
                           <Text style={{fontSize:20,fontWeight:'bold',color:'brown',alignSelf:'center'}}>Buy coins</Text>
                       </Body>
                   </CardItem>
               </Card>
               <Card>
                   <CardItem>
                       <Body>
                         <View style={{width:300,height:200,elevation:5,backgroundColor:'white',borderTopLeftRadius:10,borderTopRightRadius :10,marginTop:50}}>
                         <View style={{width:'100%',borderTopLeftRadius:10,borderTopRightRadius :10,padding:10,backgroundColor:'brown',height:50,alignItems:'center'}}>
                             <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>
                                 SMALL CASH
                             </Text>
                             </View>
                             <Image source={require('../../../assets/coin.png')} style={{height:100,width:100,alignSelf:'center'}} />
                             <Text style={{fontSize:15,fontWeight:'bold',alignSelf:'center'}}>500 COIN</Text>
                             <TouchableOpacity
                             onPress={()=>{
                                 ToastAndroid.show('Setup payment first',ToastAndroid.SHORT,ToastAndroid.CENTER)
                             }}
                             style={{backgroundColor:'orange',borderRadius:10,padding:10,width:150,position:'absolute',bottom:-20,left:'28%',alignItems:'center'}}
                             ><Text style={{color:'white'}}>Buy</Text></TouchableOpacity>
                         </View>


                         <View style={{width:300,height:200,elevation:5,backgroundColor:'white',borderTopLeftRadius:10,borderTopRightRadius :10,marginTop:50}}>
                         <View style={{width:'100%',borderTopLeftRadius:10,borderTopRightRadius :10,padding:10,backgroundColor:'brown',height:50,alignItems:'center'}}>
                             <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>
                                 MEDIUM CASH
                             </Text>
                             </View>
                             <Image source={require('../../../assets/coin.png')} style={{height:100,width:100,alignSelf:'center'}} />
                             <Text style={{fontSize:15,fontWeight:'bold',alignSelf:'center'}}>1000 COIN</Text>
                             <TouchableOpacity
                             onPress={()=>{
                                 ToastAndroid.show('Setup payment first',ToastAndroid.SHORT,ToastAndroid.CENTER)
                             }}
                             style={{backgroundColor:'orange',borderRadius:10,padding:10,width:150,position:'absolute',bottom:-20,left:'28%',alignItems:'center'}}
                             ><Text style={{color:'white'}}>Buy</Text></TouchableOpacity>
                         </View>

                         <View style={{width:300,height:200,elevation:5,backgroundColor:'white',borderTopLeftRadius:10,borderTopRightRadius :10,marginTop:50}}>
                         <View style={{width:'100%',borderTopLeftRadius:10,borderTopRightRadius :10,padding:10,backgroundColor:'brown',height:50,alignItems:'center'}}>
                             <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>
                                 LARGE CASH
                             </Text>
                             </View>
                             <Image source={require('../../../assets/coin.png')} style={{height:100,width:100,alignSelf:'center'}} />
                             <Text style={{fontSize:15,fontWeight:'bold',alignSelf:'center'}}>1500 COIN</Text>
                             <TouchableOpacity
                             onPress={()=>{
                                 ToastAndroid.show('Setup payment first',ToastAndroid.SHORT,ToastAndroid.CENTER)
                             }}
                             style={{backgroundColor:'orange',borderRadius:10,padding:10,width:150,position:'absolute',bottom:-20,left:'28%',alignItems:'center'}}
                             ><Text style={{color:'white'}}>Buy</Text></TouchableOpacity>
                         </View>

                         <View style={{width:300,height:200,elevation:5,backgroundColor:'white',borderTopLeftRadius:10,borderTopRightRadius :10,marginTop:50,marginBottom:100}}>
                         <View style={{width:'100%',borderTopLeftRadius:10,borderTopRightRadius :10,padding:10,backgroundColor:'brown',height:50,alignItems:'center'}}>
                             <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>
                                 EXTRA LARGE CASH
                             </Text>
                             </View>
                             <Image source={require('../../../assets/coin.png')} style={{height:100,width:100,alignSelf:'center'}} />
                             <Text style={{fontSize:15,fontWeight:'bold',alignSelf:'center'}}>2000 COIN</Text>
                             <TouchableOpacity
                             onPress={()=>{
                                 ToastAndroid.show('Setup payment first',ToastAndroid.SHORT,ToastAndroid.CENTER)
                             }}
                             style={{backgroundColor:'orange',borderRadius:10,padding:10,width:150,position:'absolute',bottom:-20,left:'28%',alignItems:'center'}}
                             ><Text style={{color:'white'}}>Buy</Text></TouchableOpacity>
                         </View>
                       </Body>
                   </CardItem>
               </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

const styles = StyleSheet.create({
    container:{
       flex: 1,
    backgroundColor:'#eee' 
    }
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Coins)
