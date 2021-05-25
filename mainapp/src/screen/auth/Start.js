import React, { Component } from 'react'
import { View, Text,StyleSheet,Image,StatusBar,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {SIZES,COLORS} from '../../component/theme/index'
import * as Animatable from 'react-native-animatable';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Icon} from "native-base"
import Svg ,{Path} from "react-native-svg"
import AsyncStorage from '@react-native-async-storage/async-storage';





const FirstAppearence = () =>{
    return(<View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="white" />

         <Animatable.Image animation="fadeInDown" source={require('../../../assets/icon.png')} style={{height:150,width:130,marginTop:SIZES.height*0.8}} />
         <Animatable.Text animation="fadeInLeft" delay={500} style={{fontSize:SIZES.h2,fontWeight:'bold',color:COLORS.primaryLight,textAlign:'center',marginTop:20,letterSpacing:8,lineHeight:SIZES.h1}}>Super Premier {'\n'} League</Animatable.Text>
        </View>);
}
const slides = [
    {
      key: '1',
      title: 'Welcome to SPL',
      text: "A Multi Gaming Platform.\n Play , win and earn coins",
      image: require('../../../assets/img/onboarding/1.png'),
      backgroundColor: 'white',
      svgPath:'M141.5 71c11.4 10.2 19.1 27.4 14.8 40-4.3 12.7-20.7 20.8-37.9 30.1-17.1 9.4-35 20-53.4 16.8-18.4-3.2-37.3-20.1-39.7-38.6-2.5-18.4 11.6-38.4 26.8-49.4 15.3-11.1 31.6-13.2 47.3-12.7 15.6.5 30.7 3.7 42.1 13.8z'
    },
    {
        key: '2',
        title: 'Play Your Favourite Games',
        text: 'Play games and earn from the game',
        image: require('../../../assets/img/onboarding/2.png'),
        backgroundColor: 'white',
        svgPath:'M133.6 66c4.7 13-.5 26.7-1.7 45.1-1.1 18.4 1.7 41.5-7.3 49.5-8.9 7.9-29.8.7-51.2-8.5-21.3-9.1-43.3-20.1-44.6-33.7-1.4-13.5 17.8-29.6 33.1-45.1s26.7-30.4 39.6-31.7c13-1.2 27.5 11.3 32.1 24.4z'
      },
      {
        key: '3',
        title: 'Cash your coins',
        text: 'You can cash out coins from the games',
        image: require('../../../assets/img/onboarding/3.png'),
        backgroundColor: 'white',
        svgPath:'M143.1 66.4c11.7 14 19.5 31.8 18 51.3-1.5 19.5-12.2 40.6-26.5 43.2-14.3 2.7-32.2-13-47.1-24.3-14.9-11.2-26.9-18.1-33.4-30.7-6.6-12.7-7.7-31.1.8-44.3 8.5-13.2 26.8-21.1 43.8-20.1 17 1.1 32.6 11 44.4 24.9z'
      }
  ];

  

export class Start extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading:true,
      firstTime:false,
      firstName:'',
      lastName:'',
      email:'',
      id:0,
      coins:0,
      profilePicture:'',
      nid:'',
      reference_code:'',
      phone_number:'',
      token:''
    }
  }
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1,alignItems:'center' }}>
        <StatusBar barStyle="dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true} />
        <Svg viewBox="0 0 200 200" width="380" height="442">
      <Path
      x="10" y="15"
        fill="#D0E2FF"
        d={item.svgPath}
      />
    </Svg>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: 300,
            width: 300,
            position:'absolute',
            top:SIZES.height*0.2
          }}
        />
        <Text
          style={{
            marginTop:10,
            paddingTop: 20,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: "#21465b",
            alignSelf: "center",
          }}
        >
          {item.title}
        </Text>
        <Text style={{
          textAlign:"center",
          color:"#b5b5b5",
          fontSize:15,
          paddingHorizontal:30,
          marginBottom:150
        }}>
          {item.text}
        </Text>
      </View>
    );
  }; 
  _renderNextButton = () => {
    return (<View style={{width:SIZES.width*0.6,backgroundColor:COLORS.redDeep,alignSelf:'center',alignItems:'center',padding:10,borderRadius:30,elevation:10}}>
     <Text style={{color:'white'}}>NEXT</Text></View>
    );
  };
 _renderDoneButton = () => {
    return (
        <View style={{width:SIZES.width*0.6,backgroundColor:COLORS.redDeep,alignSelf:'center',alignItems:'center',padding:10,borderRadius:30,elevation:10}}>
        <Text style={{color:'white'}}>DONE</Text></View>
    );
  };
  _renderSkipButton = () => {
    return (
      <View style={{marginTop:20,alignItems:'center'}}>
       <Text style={{color:COLORS.gray,fontSize:SIZES.h4}}>SKIP</Text>
      </View>
    );
  };
  _onDone = () => {
      this.props.navigation.navigate('Login');
  }
  _onSkip = () => {
    this.props.navigation.navigate('Login');
  }

  _authCheck = async()=>{
    const value = await AsyncStorage.getItem('loggedIn').then(values=>{
      setTimeout(() => {
        this.setState({
          isLoading: false,
        });
      }, 3000);
    setTimeout(async()=>{
      if(values == 'true'){
          const nid = await AsyncStorage.getItem('nid');
          if(nid !== null) {
            this.setState({nid:nid})
          }

          const email = await AsyncStorage.getItem('email');
          if(email !== null) {
            this.setState({email:email})
          }

          const firstName = await AsyncStorage.getItem('first_name');
          if(firstName !== null) {
            this.setState({firstName:firstName})
          }
          const lastName = await AsyncStorage.getItem('last_name');
          if(lastName !== null) {
            this.setState({lastName:lastName})
          }
          
          const referenceCode = await AsyncStorage.getItem('reference_code');
          if(referenceCode !== null) {
            this.setState({reference_code:referenceCode})
          }
          const phoneNumber = await AsyncStorage.getItem('phone_number');
          if(phoneNumber !== null) {
            this.setState({phone_number:phoneNumber})
          }
          const profilePicture = await AsyncStorage.getItem('profile_picture');
          if(profilePicture !== null) {
            this.setState({profilePicture:profilePicture})
          }
          const id = await AsyncStorage.getItem('id');
          if(id !== null) {
            this.setState({id:id})
          }
          

          const coins = await AsyncStorage.getItem('coins');
          if(coins !== null) {
            this.setState({coins:parseInt(coins)})
          }

          await fetch(this.props.host+'user/get/info',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email
            })
        }).then((response)=>response.json()).then((responseJson)=>{
           this.props.changeInfo({
            id:responseJson.id,
            first_name:this.state.firstName,
            last_name:this.state.lastName,
            email:this.state.email,
            profile_picture:this.state.profilePicture,
            phone_number:this.state.phone_number,
            reference_code:this.state.reference_code,
            nid:responseJson.nid,
            coins:responseJson.coins
        })
        this.props.changeLogged(true);
        });  
      }else if(values == 'false'){
        this.props.navigation.navigate('Login');
      }
    },2000);
    });
   
  }

  componentDidMount = async()=>{
    const value = await AsyncStorage.getItem('isFirstLaunched').then(values=>{
      if(values == null){
        AsyncStorage.setItem('isFirstLaunched','true');
        AsyncStorage.setItem('loggedIn','false');
        setTimeout(() => {
          this.setState({
            isLoading: false,
          });
        }, 1000);
        setTimeout(() => {
      this.setState({
        firstTime: true,
      });
    }, 2000);
      }else{
       this._authCheck();

      }
    });
  }



render() {
  if(this.state.isLoading && !this.state.firstTime){
    return(<View><FirstAppearence /></View>);
  }else if(this.state.firstTime && !this.state.isLoading){ return<AppIntroSlider 
        renderItem={this._renderItem} 
        data={slides}
        dotStyle={{display:'none'}}
        activeDotStyle={{display:'none'}}
        onDone={this._onDone}
        onSkip={this._onSkip}
        showSkipButton="true"
        bottomButton="true"
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderSkipButton={this._renderSkipButton}
        />;}else{
          return null;
        }
       
    }
}

const mapStateToProps = state => {
  return {
    host: state.auth.host,
  }
};

const mapDispatchToProps = dispatch => {
  return{
      changeAccessToken : (value) => {dispatch({type:'CHANGE_TOKEN',token: value})},
      changeLogged : (value) => {dispatch({type:'LOGIN',logged: value})},
      changeInfo:(value)=>{dispatch({type:'PROFILE_SET',user:value})}
  };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
      
  },
  footerNote:{
    fontWeight:'bold',
    color:'rgba(159, 0, 0, 0.5)',
    fontFamily:"BanglaRegularItalic"
  },
      backgroundImage:{
      width:'100%',
      height:'100%',
    },
    lottie: {
      width: 300,
      height: 300
    },
    buttonCircle: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    onBoardIcons:{
      color:"rgba(0, 0, 0, 0.6)",
      fontSize:24
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Start)
