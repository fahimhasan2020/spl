import React, { Component } from 'react'
import { View, Text,Image, Modal,StatusBar,Pressable,StyleSheet,TextInput,TouchableOpacity,ScrollView,ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import {Icon} from "native-base"
import { SIZES, COLORS } from '../../component/theme';


export class AddCoins extends Component {


    state={
        buyCoins:false,
        sellCoins:false,
        sellValue:0,
        binance:'',
        nagad:'',
        cashNagad:'',
        cashBinance:'',
        ourNagad:'',
        ourBinance:'',
        ourBkash:'',
        amount:''
    }
    cashFromNagad= async()=>{
      this.setState({sellCoins:false})
      if(this.state.sellValue>this.props.coins){
        return ToastAndroid.show('Insufficient balance',ToastAndroid.SHORT,ToastAndroid.CENTER);
        
      }
      
      await this.props.changeCoins(this.props.coins -this.state.sellValue);
      return fetch(this.props.host+'user/cashout/amount',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user:this.props.userId,
            amount:this.state.sellValue,
            binanceAccount:this.state.cashBinance,
            nogodAccount:this.state.cashNagad,
            
        })
    }).then((response)=>response.json).then((responseJson)=>{
      this.setState({cashNagad:'',cashBinance:''});
        ToastAndroid.show('Request submitted. Wait for the proceed',ToastAndroid.SHORT,ToastAndroid.CENTER);
      })
    }

    buyFromNagad = ()=>{
      return fetch(this.props.host+'user/transection/amount',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user:this.props.userId,
            amount:this.state.amount,
            nogod_account: this.state.nagad,
            binance_account:this.state.binance,
        })
    }).then((response)=>response.json).then((responseJson)=>{
        ToastAndroid.show('Request submitted. Wait for the proceed',ToastAndroid.SHORT,ToastAndroid.CENTER);
      })
    }


    componentDidMount(){
         fetch(this.props.host+'user/get/details/payment').then((response)=>response.json()).then((responseJson)=>{
             this.setState({ourBinance:responseJson.binance,ourNagad:responseJson.nagad,ourBkash:responseJson.bkash})
         });
       
    }


    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="dark-content" backgroundColor="white" translucent={false} />
                <Image source={require('../../../assets/img/earncoins.png')} style={{height:200,width:200,alignSelf:'center',marginTop:10}} />
                <View style={{alignSelf:'center',backgroundColor:'white',padding:10,width:'80%',borderRadius:15,elevation:10,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,marginLeft:10,fontWeight:'bold',color:'gray'}}>Coins Available</Text>
                    <View style={{flexDirection:'row'}}><Icon name="coins" type="FontAwesome5" style={{color:'orange',fontSize:20}} /><Text style={{fontSize:20,marginLeft:10,fontWeight:'bold'}}>{this.props.coins}</Text></View>
                </View>
                <Text style={{alignSelf:'center',textAlign:'center',fontSize:15,fontWeight:'bold',marginLeft:20,marginRight:20,marginTop:20}}>If you want to buy coins you have to give one taka per coins or one binance doller per 85 coins. So put you expected amount and account details. And wait 2 hour. We shall send coins to your account.</Text>
              <TouchableOpacity onPress={()=>{this.setState({buyCoins:true})}} style={{backgroundColor:COLORS.redDeep,borderRadius:15,padding:10,elevation:10,width:200,alignSelf:'center',marginTop:20,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:16,textAlign:'center'}}>Buy Game Coins</Text>
                </TouchableOpacity>



                <Text style={{fontSize:20,fontWeight:'bold',color:COLORS.primaryDeep,alignSelf:'center',marginTop:20,}}>Sell Coins</Text>
                <TouchableOpacity onPress={()=>{this.setState({sellCoins:true,sellValue:100})}} style={{backgroundColor:COLORS.redDeep,borderRadius:15,padding:10,elevation:10,width:200,alignSelf:'center',marginTop:20,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:16,textAlign:'center'}}>Withdrow Cash</Text>
                </TouchableOpacity>
<View style={{marginBottom:200}}>
    
</View>
                <View style={{width:SIZES.width+100,marginLeft:-50,height:100,backgroundColor:COLORS.redLight,zIndex:-1,position:'absolute',top:SIZES.height*0.5,transform: [{ skewY: '-20deg' }]}}></View>
                <View style={{width:SIZES.width+100,marginLeft:-50,height:100,backgroundColor:COLORS.redLight,zIndex:-1,position:'absolute',top:SIZES.height*0.8,transform: [{ skewY: '-20deg' }]}}></View>
                <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.buyCoins}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Buy coins</Text>
              <TextInput keyboardType = 'numeric' value={this.state.amount} onChangeText={value=>{this.setState({amount:value})}} style={{borderBottomColor:'black',marginBottom:10,width:200,borderBottomWidth:1,alignItems:'center',paddingLeft:10}} placeholder="Enter amount" />
              <Text style={styles.modalText}>If you want to buy coins using nagad then send payment on {this.state.ourNagad} nagad number and put the transection id here</Text>
              <TextInput onChangeText={value=>{this.setState({nagad:value})}} value={this.state.nagad} style={{borderBottomColor:'black',marginBottom:10,width:200,borderBottomWidth:1,alignItems:'center',paddingLeft:10}} placeholder="Put transection id here" />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  this.buyFromNagad();
                  this.setState({buyCoins:false,amount:'',nagad:'',binance:''});
                }}
              >
                <Text style={styles.textStyle}>Send Money</Text>
              </Pressable>
              <Text style={styles.modalText}>Or</Text>
              <Text style={styles.modalText}>IF you want to pay with binance put your binance number on <Text style={{backgroundColor:'indigo',color:'white',fontSize:10}}>{'\n'}{this.state.ourBinance}</Text>{'\n'} this account and add put your binance account number to the text box</Text>
              <TextInput onChangeText={value=>{this.setState({binance:value})}} value={this.state.binance} style={{borderBottomColor:'black',marginBottom:10,width:200,borderBottomWidth:1,alignItems:'center',paddingLeft:10}} placeholder="Put you binence id here" />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  this.buyFromNagad();
                  this.setState({buyCoins:false,amount:'',nagad:'',binance:''});
                }}
              >

                <Text style={styles.textStyle}>Send Money</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState({buyCoins:false})}
              >
                <Text style={styles.textStyle}>Cancel payment</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
          
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.sellCoins}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
             <TextInput keyboardType="numeric" style={{borderBottomColor:'black',marginBottom:10,width:200,borderBottomWidth:1,alignItems:'center',paddingLeft:10}} placeholder="Enter value" value={this.state.sellValue} onChangeText={value=>{this.setState({sellValue:value})}} />
              
              <Text style={styles.modalText}>Try payment withdrowal and wait for 3 hours to process the payment on you binance or nagad account. If payment not arrived ask at info@spl.games </Text>
              <TextInput onChangeText={value => {this.setState({cashNagad:value})}} value={this.state.cashNagad} style={{borderBottomColor:'black',marginBottom:10,width:200,borderBottomWidth:1,alignItems:'center',paddingLeft:10}} placeholder="Nagod number here" />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  this.cashFromNagad();
                  //this.setState({buyCoins:false,amount:'',nagad:'',binance:''});
                }}
              >
                <Text style={styles.textStyle}>Cash Money</Text>
              </Pressable>
              <Text style={styles.modalText}>Or</Text>
              <Text style={styles.modalText}>IF you want to cash with binance put your binance number on {this.state.ourBinance} this account and add put your binance account number to the text box</Text>
              <TextInput onChangeText={value=>{this.setState({cashBinance:value})}} value={this.state.cashBinance} style={{borderBottomColor:'black',marginBottom:10,width:200,borderBottomWidth:1,alignItems:'center',paddingLeft:10}} placeholder="Put you binence id here" />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  this.cashFromNagad();
                  // this.setState({buyCoins:false,amount:'',nagad:'',binance:''});
                }}
              >

                <Text style={styles.textStyle}>Cash Money</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState({sellCoins:false})}
              >
                <Text style={styles.textStyle}>Cancel Withdrowal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
          
          
          
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
        marginBottom:10
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

const mapStateToProps = state => {
    return {
      host: state.auth.host,
      coins:state.auth.coins,
      userId:state.auth.userId
    }
  };

  const mapDispatchToProps = dispatch=>{
    return{
        changeCoins:(value)=>{dispatch({type:'BUY_COINS',coins:value})}
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCoins)
