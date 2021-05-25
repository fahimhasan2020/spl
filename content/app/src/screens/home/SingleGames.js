import React, { Component } from 'react'
import { View, Text,StatusBar,StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native'
import { connect } from 'react-redux'
import {Icon,Card,Body,Badge,CardItem} from 'native-base'
import { LinearGradient } from 'expo-linear-gradient';
import {COLORS} from '../../components/theme/colors'

export class SingleGames extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
                <Card>
                    <CardItem>
                        <Body style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:COLORS.primary,width:150}}>Game will reset at: 10.30 PM</Text>
                            <View style={{marginTop:20,paddingLeft:30,flexDirection:'row'}}>
                            <Text style={{fontSize:15,color:'orange',marginRight:10,marginTop:10}}>5000</Text>
                               <Icon name="coins" type="FontAwesome5" style={{fontSize:40,color:'orange'}} />
                              
                           </View>
                        </Body>
                    </CardItem>
                </Card>
               <Card>
                   <CardItem>
                       <Body>
                           <Image source={require('../../../assets/img/games/ludu.jpeg')} style={{height:350,width:'100%'}} />
                           <View style={{backgroundColor:'rgba(191, 63, 191,0.2)',position:'absolute',top:0,height:350,width:'100%',borderRadius:40}}>
                           <Text style={{fontSize:30,color:'white',fontWeight:'bold',position:'absolute',bottom:130,left:30}}>Ludu Master</Text>
                           <Text style={{fontSize:15,fontWeight:'bold',color:'white',width:250,position:'absolute',bottom:90,left:30}}>Play single player mode with computer and win as first as possible</Text>
                           </View>
                           <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                           <View style={{marginTop:20,paddingLeft:30,flexDirection:'row'}}>
                               <Icon name="coins" type="FontAwesome5" style={{fontSize:20,color:'orange'}} />
                               <Text style={{fontSize:15,color:'orange',marginLeft:10}}>30</Text>
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>3.5</Text>
                               <Icon name="star" type="AntDesign" style={{fontSize:20,color:'orange'}} />
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>10.00</Text>
                               <Icon name="time" type="Ionicons" style={{fontSize:20,color:'orange'}} />
                           </View>
                           
                           <TouchableOpacity >
                           <LinearGradient colors={['#66bb6a', '#338a3e','#66bb6a']} style={{padding:5,width:90,height:30,alignSelf:'center',marginTop:10,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}}>
          
  <Text style={{color:'#eee',fontSize:12}}>
   Start Game
  </Text>
</LinearGradient>
                           </TouchableOpacity>
                           </View>
                           
                       </Body>
                   </CardItem>
               </Card>
               <Card>
                   <CardItem>
                       <Body>
                           <Image source={require('../../../assets/img/games/carram.jpeg')} style={{height:350,width:'100%'}} />
                           <View style={{backgroundColor:'rgba(191, 63, 191,0.2)',position:'absolute',top:0,height:350,width:'100%',borderRadius:40}}>
                           <Text style={{fontSize:30,color:'white',fontWeight:'bold',position:'absolute',bottom:130,left:30}}>Carram</Text>
                           <Text style={{fontSize:15,fontWeight:'bold',color:'white',width:250,position:'absolute',bottom:90,left:30}}>Play single player mode with computer and win as first as possible</Text>
                           </View>
                           <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                           <View style={{marginTop:20,paddingLeft:30,flexDirection:'row'}}>
                               <Icon name="coins" type="FontAwesome5" style={{fontSize:20,color:'orange'}} />
                               <Text style={{fontSize:15,color:'orange',marginLeft:10}}>30</Text>
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>3.5</Text>
                               <Icon name="star" type="AntDesign" style={{fontSize:20,color:'orange'}} />
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>10.00</Text>
                               <Icon name="time" type="Ionicons" style={{fontSize:20,color:'orange'}} />
                           </View>
                           
                           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Carrom',{Link:this.props.host+'carrom'})}}>
                           <LinearGradient colors={['#66bb6a', '#338a3e','#66bb6a']} style={{padding:5,width:90,height:30,alignSelf:'center',marginTop:10,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}}>
          
  <Text style={{color:'#eee',fontSize:12}}>
   Start Game
  </Text>
</LinearGradient>
                           </TouchableOpacity>
                           </View>
                           
                       </Body>
                   </CardItem>
               </Card>
            
               <Card>
                   <CardItem>
                       <Body>
                           <Image source={require('../../../assets/img/games/bubble.jpg')} style={{height:350,width:'100%'}} />
                           <View style={{backgroundColor:'rgba(191, 63, 191,0.2)',position:'absolute',top:0,height:350,width:'100%',borderRadius:40}}>
                           <Text style={{fontSize:30,color:'white',fontWeight:'bold',position:'absolute',bottom:130,left:30}}>Bubble Shooter</Text>
                           <Text style={{fontSize:15,fontWeight:'bold',color:'white',width:250,position:'absolute',bottom:90,left:30}}>Play single player mode with computer and win as first as possible</Text>
                           </View>
                           <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                           <View style={{marginTop:20,paddingLeft:30,flexDirection:'row'}}>
                               <Icon name="coins" type="FontAwesome5" style={{fontSize:20,color:'orange'}} />
                               <Text style={{fontSize:15,color:'orange',marginLeft:10}}>30</Text>
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>3.5</Text>
                               <Icon name="star" type="AntDesign" style={{fontSize:20,color:'orange'}} />
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>10.00</Text>
                               <Icon name="time" type="Ionicons" style={{fontSize:20,color:'orange'}} />
                           </View>
                           
                           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Bubble',{Link:this.props.host+'bubble'})}}>
                           <LinearGradient colors={['#66bb6a', '#338a3e','#66bb6a']} style={{padding:5,width:90,height:30,alignSelf:'center',marginTop:10,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}}>
          
  <Text style={{color:'#eee',fontSize:12}}>
   Start Game
  </Text>
</LinearGradient>
                           </TouchableOpacity>
                           </View>
                           
                       </Body>
                   </CardItem>
               </Card>
            
               <Card>
                   <CardItem>
                       <Body>
                           <Image source={require('../../../assets/img/games/rummy.jpg')} style={{height:350,width:'100%'}} />
                           <View style={{backgroundColor:'rgba(191, 63, 191,0.2)',position:'absolute',top:0,height:350,width:'100%',borderRadius:40}}>
                           <Text style={{fontSize:30,color:'white',fontWeight:'bold',position:'absolute',bottom:130,left:30}}>3 Cards</Text>
                           <Text style={{fontSize:15,fontWeight:'bold',color:'white',width:250,position:'absolute',bottom:90,left:30}}>Play single player mode with computer and win as first as possible</Text>
                           </View>
                           <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                           <View style={{marginTop:20,paddingLeft:30,flexDirection:'row'}}>
                               <Icon name="coins" type="FontAwesome5" style={{fontSize:20,color:'orange'}} />
                               <Text style={{fontSize:15,color:'orange',marginLeft:10}}>30</Text>
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>3.5</Text>
                               <Icon name="star" type="AntDesign" style={{fontSize:20,color:'orange'}} />
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>10.00</Text>
                               <Icon name="time" type="Ionicons" style={{fontSize:20,color:'orange'}} />
                           </View>
                           
                           <TouchableOpacity>
                           <LinearGradient colors={['#66bb6a', '#338a3e','#66bb6a']} style={{padding:5,width:90,height:30,alignSelf:'center',marginTop:10,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}}>
          
  <Text style={{color:'#eee',fontSize:12}}>
   Start Game
  </Text>
</LinearGradient>
                           </TouchableOpacity>
                           </View>
                           
                       </Body>
                   </CardItem>
               </Card>
            
               <Card>
                   <CardItem>
                       <Body>
                           <Image source={require('../../../assets/img/games/runner.jpg')} style={{height:350,width:'100%'}} />
                           <View style={{backgroundColor:'rgba(191, 63, 191,0.2)',position:'absolute',top:0,height:350,width:'100%',borderRadius:40}}>
                           <Text style={{fontSize:30,color:'white',fontWeight:'bold',position:'absolute',bottom:130,left:30}}>Rode runner</Text>
                           <Text style={{fontSize:15,fontWeight:'bold',color:'white',width:250,position:'absolute',bottom:90,left:30}}>Play single player mode with computer and win as first as possible</Text>
                           </View>
                           <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                           <View style={{marginTop:20,paddingLeft:30,flexDirection:'row'}}>
                               <Icon name="coins" type="FontAwesome5" style={{fontSize:20,color:'orange'}} />
                               <Text style={{fontSize:15,color:'orange',marginLeft:10}}>30</Text>
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>3.5</Text>
                               <Icon name="star" type="AntDesign" style={{fontSize:20,color:'orange'}} />
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>10.00</Text>
                               <Icon name="time" type="Ionicons" style={{fontSize:20,color:'orange'}} />
                           </View>
                           
                           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Pool',{gameTitle:'8 Ball Pool',Link:this.props.host+'runner'})}}>
                           <LinearGradient colors={['#66bb6a', '#338a3e','#66bb6a']} style={{padding:5,width:90,height:30,alignSelf:'center',marginTop:10,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}}>
          
  <Text style={{color:'#eee',fontSize:12}}>
   Start Game
  </Text>
</LinearGradient>
                           </TouchableOpacity>
                           </View>
                           
                       </Body>
                   </CardItem>
               </Card>
            
               <Card>
                   <CardItem>
                       <Body>
                           <Image source={require('../../../assets/img/games/pool.png')} style={{height:350,width:'100%'}} />
                           <View style={{backgroundColor:'rgba(191, 63, 191,0.2)',position:'absolute',top:0,height:350,width:'100%',borderRadius:40}}>
                           <Text style={{fontSize:30,color:'white',fontWeight:'bold',position:'absolute',bottom:130,left:30}}>Pool</Text>
                           <Text style={{fontSize:15,fontWeight:'bold',color:'white',width:250,position:'absolute',bottom:90,left:30}}>Play single player mode with computer and win as first as possible</Text>
                           </View>
                           <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                           <View style={{marginTop:20,paddingLeft:30,flexDirection:'row'}}>
                               <Icon name="coins" type="FontAwesome5" style={{fontSize:20,color:'orange'}} />
                               <Text style={{fontSize:15,color:'orange',marginLeft:10}}>30</Text>
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>3.5</Text>
                               <Icon name="star" type="AntDesign" style={{fontSize:20,color:'orange'}} />
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>10.00</Text>
                               <Icon name="time" type="Ionicons" style={{fontSize:20,color:'orange'}} />
                           </View>
                           
                           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Pool',{gameTitle:'8 Ball Pool',Link:this.props.host+'pool'})}}>
                           <LinearGradient colors={['#66bb6a', '#338a3e','#66bb6a']} style={{padding:5,width:90,height:30,alignSelf:'center',marginTop:10,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}}>
          
  <Text style={{color:'#eee',fontSize:12}}>
   Start Game
  </Text>
</LinearGradient>
                           </TouchableOpacity>
                           </View>
                           
                       </Body>
                   </CardItem>
               </Card>
            
               <Card>
                   <CardItem>
                       <Body>
                           <Image source={require('../../../assets/img/games/chess.jpeg')} style={{height:350,width:'100%'}} />
                           <View style={{backgroundColor:'rgba(191, 63, 191,0.2)',position:'absolute',top:0,height:350,width:'100%',borderRadius:40}}>
                           <Text style={{fontSize:30,color:'white',fontWeight:'bold',position:'absolute',bottom:130,left:30}}>Chess</Text>
                           <Text style={{fontSize:15,fontWeight:'bold',color:'white',width:250,position:'absolute',bottom:90,left:30}}>Play single player mode with computer and win as first as possible</Text>
                           </View>
                           <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                           <View style={{marginTop:20,paddingLeft:30,flexDirection:'row'}}>
                               <Icon name="coins" type="FontAwesome5" style={{fontSize:20,color:'orange'}} />
                               <Text style={{fontSize:15,color:'orange',marginLeft:10}}>30</Text>
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>3.5</Text>
                               <Icon name="star" type="AntDesign" style={{fontSize:20,color:'orange'}} />
                           </View>
                           <View style={{marginTop:20,paddingLeft:10,flexDirection:'row'}}>
                               <Text style={{fontSize:15,color:'orange',marginRight:10}}>10.00</Text>
                               <Icon name="time" type="Ionicons" style={{fontSize:20,color:'orange'}} />
                           </View>
                           
                           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('GameView',{gameTitle:'Ludu Master',Link:this.props.host+'chess'})}}>
                           <LinearGradient colors={['#66bb6a', '#338a3e','#66bb6a']} style={{padding:5,width:90,height:30,alignSelf:'center',marginTop:10,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}}>
          
  <Text style={{color:'#eee',fontSize:12}}>
   Start Game
  </Text>
</LinearGradient>
                           </TouchableOpacity>
                           </View>
                           
                       </Body>
                   </CardItem>
               </Card>
            
            
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
});

const mapStateToProps = (state) => ({
    host: state.auth.host,
});

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleGames)
