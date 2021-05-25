import React, { Component } from 'react'
import {Text,StyleSheet, Share,ScrollView,View,TouchableOpacity,Image,Modal,TouchableHighlight,FlatList,Alert,ToastAndroid,StatusBar} from 'react-native'
import {Icon} from "native-base"
import { FontAwesome } from '@expo/vector-icons';
import BottomSheet from 'reanimated-bottom-sheet'
import {  Card, CardItem, Body,Fab,Button,Picker } from 'native-base';
import { connect } from 'react-redux'
import {COLORS} from "../../components/theme/colors"
import Carusel from "../../components/contents/Carusel"



const dummyData =
        [{
                title: 'Earn money',
                url: require('../../../assets/img/banner1.jpg'),
                description: "With multiplayer game.",
                id: 1

        },
        {
                title: 'Memory game',
                url: require('../../../assets/img/banner2.png'),
                description: "Defeat others with intelligence.",
                id: 2
        },
        {
                title: 'Redeem cash',
                url: require('../../../assets/img/banner3.jpg'),
                description: "Redeem cash from earned coin.",
                id: 3
        }];
class Home extends Component {
    state = {
        errorMessage: '',
        locai:'',
        expoPushToken: '',
        notification: {},
        activeIndex:0,
        active:false,
        modalVisible:false,
        invitationCode:'',
        locations:[],
        coupons:[],
        msg:'Share your app'
    }    

    componentDidMount=async()=> {  
        //
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator= {false}>
                <StatusBar barStyle="light-content" backgroundColor="#152E12" />
                <View style={{paddingTop:70,backgroundColor:'white',elevation:10}}>
                <Carusel data={dummyData} />
                </View>
            

                <Card>
                    <CardItem style={{justifyContent:'space-between'}}>
                    <View>
                            <View style={styles.buttonRadio}>
                                <TouchableOpacity onPress={()=>{
                                   this.props.navigation.navigate('SingleGames');
                                }}>
                                <FontAwesome name="soccer-ball-o" style={{color:'white'}} size={35} />
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.buttonTexts}>Single Player</Text>
                        </View>


                        <View>
                            <View style={styles.buttonRadio}>
                                <TouchableOpacity onPress={()=>{
                                     ToastAndroid.showWithGravity(
                                        'Server unavailable',
                                        ToastAndroid.SHORT,
                                        ToastAndroid.BOTTOM
                                      );
                                }}>
                                <FontAwesome name="snowflake-o" style={{color:'white'}} size={35} />
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.buttonTexts}>Multiplayer</Text>
                        </View>

                        <View>
                            <View style={styles.buttonRadio}>
                                <TouchableOpacity onPress={()=>{
                                     ToastAndroid.showWithGravity(
                                        'Server unavailable',
                                        ToastAndroid.SHORT,
                                        ToastAndroid.BOTTOM
                                      );
                                }}>
                                <FontAwesome name="share" style={{color:'white'}} size={35} />
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.buttonTexts}>Challange </Text>
                        </View>
                    </CardItem>
                    <CardItem style={{justifyContent:'space-between'}}>
                    <View>
                            <View style={styles.buttonRadio}>
                                <TouchableOpacity onPress={()=>{
                                     ToastAndroid.showWithGravity(
                                        'Server unavailable',
                                        ToastAndroid.SHORT,
                                        ToastAndroid.BOTTOM
                                      );
                                }}>
                                <FontAwesome name="shopping-bag" style={{color:'white'}} size={35} />
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.buttonTexts}>Offers</Text>
                        </View>

                        <View>
                            <View style={styles.buttonRadio}>
                                <TouchableOpacity onPress={()=>{
                                     ToastAndroid.showWithGravity(
                                        'Server unavailable',
                                        ToastAndroid.SHORT,
                                        ToastAndroid.BOTTOM
                                      );
                                }}>
                                <FontAwesome name="recycle" style={{color:'white'}} size={35} />
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.buttonTexts}>1 by 1</Text>
                        </View>

                        <View>
                            <View style={styles.buttonRadio}>
                                <TouchableOpacity onPress={()=>{
                                  Share.share({
                                    message:
                                      'http://spl.games',
                                  });
                                }}>
                                <FontAwesome name="random" style={{color:'white'}} size={35} />
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.buttonTexts}>Reffer </Text>
                        </View>
                    </CardItem>
                    <CardItem style={{justifyContent:'space-between'}}>
                    <View>
                            <View style={styles.buttonRadio}>
                                <TouchableOpacity onPress={()=>{
                                     ToastAndroid.showWithGravity(
                                        'Server unavailable',
                                        ToastAndroid.SHORT,
                                        ToastAndroid.BOTTOM
                                      );
                                }}>
                                <FontAwesome name="tags" style={{color:'white'}} size={35} />
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.buttonTexts}>Coupons</Text>
                        </View>

                        <View>
                            <View style={styles.buttonRadio}>
                                <TouchableOpacity onPress={()=>{
                                     ToastAndroid.showWithGravity(
                                        'Server unavailable',
                                        ToastAndroid.SHORT,
                                        ToastAndroid.BOTTOM
                                      );
                                }}>
                                <FontAwesome name="server" style={{color:'white'}} size={35} />
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.buttonTexts}>Cashout</Text>
                        </View>

                        <View>
                            <View style={styles.buttonRadio}>
                                <TouchableOpacity onPress={()=>{
                                     ToastAndroid.showWithGravity(
                                        'Server unavailable',
                                        ToastAndroid.SHORT,
                                        ToastAndroid.BOTTOM
                                      );
                                }}>
                                <FontAwesome name="sitemap" style={{color:'white'}} size={35} />
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={styles.buttonTexts}>History</Text>
                        </View>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Text style={styles.cardHeadline}>Tournaments</Text>
                    </CardItem>
                    <CardItem>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'gray',alignSelf:'center',justifyContent:'center',marginLeft:70,width:270}}>No games available </Text>
                    </CardItem>
                    </Card>
                    <Card>
                    <CardItem style={{width:'100%',alignItems:'center'}}>
                        <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'brown',textTransform:'uppercase',marginLeft:110}}>Reference</Text>
                        
                    </CardItem>
                    <CardItem>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'gray',alignSelf:'center',justifyContent:'center',marginLeft:70,width:270}}>No data available </Text>
                    </CardItem>
                    
                    </Card>
                    <Card>
                    <CardItem style={{width:'100%',alignItems:'center'}}>
                        <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'brown',textTransform:'uppercase',marginLeft:110}}>Coupons</Text>
                        
                    </CardItem>
                    <CardItem>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'gray',alignSelf:'center',justifyContent:'center',marginLeft:70,width:270}}>No coupons available </Text>
                    </CardItem>
                    
                    </Card>
               
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
    buttonRadio:{backgroundColor:COLORS.primaryCore,marginLeft:5,marginBottom:5,padding:5,height:60,width:60,borderRadius:35,alignItems:'center',justifyContent: 'center',elevation:10},
    cardHeadline:{alignSelf:'center',fontSize:20,fontWeight:'bold',color:COLORS.primaryCore,textTransform:'uppercase',marginLeft:100},
    buttonTexts:{alignSelf:'center',fontWeight:'bold',color:'#adadad',textTransform:'capitalize'}
});
const mapStateToProps = state => {
    return {
      host: state.auth.host
    }
};
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Home)