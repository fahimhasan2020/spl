import React, { Component } from 'react'
import { View, Text,Image,StyleSheet,StatusBar,TouchableOpacity,Modal,Alert,ToastAndroid,Animated,SafeAreaView,KeyboardAvoidingView,ActivityIndicator } from 'react-native'
import { GoogleSignin } from '@react-native-community/google-signin';
import { connect } from 'react-redux'
import {SIZES,COLORS} from "../../component/theme/index"
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon,Form,Item,Input} from "native-base"
import { LoginManager,AccessToken } from "react-native-fbsdk";
import { TextInput } from 'react-native-paper';
GoogleSignin.configure({
    webClientId:'97675435682-3gfac10j5l2oh4p0vggip458hj5lebk4.apps.googleusercontent.com',
    offlineAccess:true
  })


const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            refModal:false,
            refCode:'',
            otpCode:'',
            activationMail:'',
            email:'',
            password:'',
            passwordConfirm:'',
            showPasswordLogin:true,
            loginForm:true,
            forgetForm:false,
            resetForm:false,
            displayForm:false,
            registerOtp:false,
            registerOtpValue:'',
            imageOrientationHeight:new Animated.Value(150),
            imageOrientationWidth:new Animated.Value(125),
            animaterImageLeft:new Animated.Value(110),
            currentForm:'login',
            loginFormOpacity:new Animated.Value(0.0),
            animatedHeight:new Animated.Value(SIZES.height),
            animaterImageMargin:new Animated.Value(160),
            signInMargin:new Animated.Value(30),
            signUpMargin:new Animated.Value(30),
            emailError:false,
            passwordError:false,
            confirmPasswordError:false,
            code:'',
            requestLoading:false,
            device_name:'Motorolla2G',
            pushToken:''
        }
    }

    register = ()=>{
        this.setState({requestLoading:true})
        if(this.state.email === '' || this.state.password === '' || this.state.passwordConfirm !== this.state.passwordConfirm){
            this.state.email === ''?this.setState({emailError:true}):this.setState({emailError:false});
            this.state.password === ''?this.setState({passwordError:true}):this.setState({passwordError:false});
            this.state.passwordConfirm !== this.state.password?this.setState({confirmPasswordError:true}):this.setState({confirmPasswordError:false});
            this.setState({requestLoading:false})
        }else{

            const host = this.props.host;
            return fetch(host+'user/register',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email:this.state.email,
                        password:this.state.password,
                        password_confirmation:this.state.passwordConfirm,
                        reference:this.state.refCode
                    })
                }).then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.hasOwnProperty('errors')){
                            this.setState({loading:false})
                            if (responseJson.errors.email.toString()=== 'validation.unique'){
                                ToastAndroid.show('Email exists', ToastAndroid.SHORT);
                            }
                        }else{
                            this.setState({requestLoading:false,email:'',password:'',passwordConfirm:'',emailError:false,passwordError:false,confirmPasswordError:false});
                            this.setState({registerOtp:true,registerOtpValue:responseJson.code});
                            
                            
            }
        })
        }
    }

    activateAccount = () =>{

    }

    initiateDoneRegister = ()=>{
        if(this.state.registerOtpValue == this.state.otpCode){
            this.LoginFormInitiate();
            this.setState({registerOtp:false});
            this.activateAccount();
        }else{
            ToastAndroid.show("Wrong Otp",ToastAndroid.SHORT,ToastAndroid.CENTER);
        }
    }

    login = () =>{
        this.setState({requestLoading:true})
        if(this.state.email === '' || this.state.password === '' ){
            this.state.email === ''?this.setState({emailError:true}):this.setState({emailError:false});
            this.state.password === ''?this.setState({passwordError:true}):this.setState({passwordError:false});
            this.setState({requestLoading:false})
        }else{
            const host = this.props.host;
            return fetch(host+'user/login',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username:this.state.email,
                    password:this.state.password,
                    device_name:this.state.device_name
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.hasOwnProperty('errors')){
                        this.setState({requestLoading:false})
                        ToastAndroid.show(responseJson.errors.email.toString(), ToastAndroid.SHORT,ToastAndroid.TOP);
                    }else{
                        this.setState({requestLoading:false});
                        if(responseJson.user.deactivated == 0){
                            responseJson.user.nid !== null?AsyncStorage.setItem('nid',responseJson.user.nid):null;
                        responseJson.user.profile_picture !== null?AsyncStorage.setItem('profile_picture',responseJson.user.profile_picture):null;
                        responseJson.user.first_name !== null?AsyncStorage.setItem('first_name',responseJson.user.first_name):null;
                        responseJson.user.last_name !== null?AsyncStorage.setItem('last_name',responseJson.user.last_name):null;
                        responseJson.user.phone_number !== null?AsyncStorage.setItem('phone_number',responseJson.user.phone_number):null;
                        responseJson.user.reference_code !== null?AsyncStorage.setItem('reference_code',responseJson.user.reference_code):null;
                        responseJson.user.coins !== null?AsyncStorage.setItem('coins',toString(responseJson.user.coins)):null;
                        AsyncStorage.multiSet([['token', responseJson.token],['email', responseJson.user.email],['loggedIn','true'],['id', responseJson.user.id.toString()]]).then(() => {
                        this.props.changeInfo({
                                id:responseJson.user.id,
                                first_name:responseJson.user.first_name,
                                last_name:responseJson.user.last_name,
                                email:responseJson.user.email,
                                profile_picture:responseJson.user.profile_picture,
                                phone_number:responseJson.user.phone_number,
                                reference_code:responseJson.user.reference_code,
                                nid:responseJson.user.nid,
                                coins:responseJson.user.coins
                            })
                            this.props.changeAccessToken(responseJson.token);
                            this.props.changeLogged(true);
                         });
                        }else{
                            ToastAndroid.show('Activate First',ToastAndroid.SHORT,ToastAndroid.CENTER);
                        }
                        
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    forgotPassword = () =>{
        Alert.alert('forgot','forget');
    }

    resetPassword = () =>{
        Alert.alert('reset','reset');
    }

    fbLogin = async()=>{
       await LoginManager.logInWithPermissions(["public_profile","email"]).then(
           (result) =>{
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture,friends&access_token=' + data.accessToken)
                            .then((response) => response.json())
                            .then((json) => {
                                let names = json.name.split(" ");
                                 return fetch(this.props.host+'user/register/social',{
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        email:json.email,
                                        first_name:names[0],
                                        last_name:names[1],
                                        photoUrl:json.picture.data.url,
                                        password:'786986Abcd485aa',
                                    })
                                }).then((response) => response.json())
                                .then((responseJson) => {
                                    if (responseJson.hasOwnProperty('errors')){
                                        this.setState({requestLoading:false})
                                        ToastAndroid.show(responseJson.errors.email.toString(), ToastAndroid.SHORT,ToastAndroid.TOP);
                                    }else{
                                        this.setState({requestLoading:false});
                                        console.log(responseJson);
                                        responseJson.user.nid !== null?AsyncStorage.setItem('nid',responseJson.user.nid):null;
                
                                        responseJson.user.profile_picture !== null?AsyncStorage.setItem('profile_picture',responseJson.user.profile_picture):null;
                
                                        responseJson.user.first_name !== null?AsyncStorage.setItem('first_name',responseJson.user.first_name):null;
                
                                        responseJson.user.last_name !== null?AsyncStorage.setItem('last_name',responseJson.user.last_name):null;
                
                                        responseJson.user.phone_number !== null?AsyncStorage.setItem('phone_number',responseJson.user.phone_number):null;
            
                                        responseJson.user.coins !== null?AsyncStorage.setItem('coins',toString(responseJson.user.coins)):null;

                                        responseJson.user.reference_code !== null?AsyncStorage.setItem('reference_code',responseJson.user.reference_code):null;
                
                
                                        AsyncStorage.multiSet([['token', responseJson.token],['email', responseJson.user.email],['loggedIn','true'],['id', responseJson.user.id.toString()]]).then(() => {
                                            this.props.changeInfo({
                                                id:responseJson.user.id,
                                                first_name:responseJson.user.first_name,
                                                last_name:responseJson.user.last_name,
                                                email:responseJson.user.email,
                                                profile_picture:responseJson.user.profile_picture,
                                                phone_number:responseJson.user.phone_number,
                                                reference_code:responseJson.user.reference_code,
                                                nid:responseJson.user.nid,
                                                coins:responseJson.user.coins
                                            })
                                            this.props.changeAccessToken(responseJson.token);
                                            this.props.changeLogged(true);
                                         });
                                    }
                                })
                                .catch((error) => {
                                    console.log(error);
                                }); 
                            })
                            .catch(() => {
                              reject('ERROR GETTING DATA FROM FACEBOOK')
                            })
                        }
                      )
      }
    },
    (error) =>{
      console.log("Login fail with error: " + error);
    }
  );
    }

    googleLogIn = async()=>{
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            let names = userInfo.user.name.split(" ");
                                 return fetch(this.props.host+'user/register/social',{
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        email:userInfo.user.email,
                                        first_name:names[0],
                                        last_name:names[1],
                                        photoUrl:userInfo.user.photo,
                                        password:'786986Abcd485aa',
                                    })
                                }).then((response) => response.json())
                                .then((responseJson) => {
                                    if (responseJson.hasOwnProperty('errors')){
                                        this.setState({requestLoading:false})
                                        ToastAndroid.show(responseJson.errors.email.toString(), ToastAndroid.SHORT,ToastAndroid.TOP);
                                    }else{
                                        this.setState({requestLoading:false});
                                        console.log(responseJson);
                                        responseJson.user.nid !== null?AsyncStorage.setItem('nid',responseJson.user.nid):null;
                
                                        responseJson.user.profile_picture !== null?AsyncStorage.setItem('profile_picture',responseJson.user.profile_picture):null;
                
                                        responseJson.user.first_name !== null?AsyncStorage.setItem('first_name',responseJson.user.first_name):null;
                
                                        responseJson.user.last_name !== null?AsyncStorage.setItem('last_name',responseJson.user.last_name):null;
                
                                        responseJson.user.phone_number !== null?AsyncStorage.setItem('phone_number',responseJson.user.phone_number):null;

                                        responseJson.user.coins !== null?AsyncStorage.setItem('coins',toString(responseJson.user.coins)):null;

                                        responseJson.user.reference_code !== null?AsyncStorage.setItem('reference_code',responseJson.user.reference_code):null;
                
                
                                        AsyncStorage.multiSet([['token', responseJson.token],['email', responseJson.user.email],['loggedIn','true'],['id', responseJson.user.id.toString()]]).then(() => {
                                            this.props.changeInfo({
                                                id:responseJson.user.id,
                                                first_name:responseJson.user.first_name,
                                                last_name:responseJson.user.last_name,
                                                email:responseJson.user.email,
                                                profile_picture:responseJson.user.profile_picture,
                                                phone_number:responseJson.user.phone_number,
                                                reference_code:responseJson.user.reference_code,
                                                nid:responseJson.user.nid,
                                                coins:responseJson.user.coins
                                            })
                                            this.props.changeAccessToken(responseJson.token);
                                            this.props.changeLogged(true);
                                         });
                                    }
                                })
                                .catch((error) => {
                                    console.log(error);
                                }); 
          } catch (error) {
            console.log(error);
          }
    }

   
    LoginFormInitiate = ()=>{
        this.heightChange(SIZES.height*0.4);
        this.setState({displayForm:true,loginForm:true,forgetForm:false,resetForm:false})
        this.logoOrientationChange(100,75);
        this.imageMarginChange(100);
        this.imageLeftChange(50);
        this.signInMarginChange(20);
        this.signUpMarginChange(35);
        setTimeout(()=>{
            this.opacityChange(0.9)
        },500);        
    }

    RegisterFormInitiate = ()=>{
        this.heightChange(SIZES.height*0.3);
        this.setState({displayForm:true,loginForm:false,forgetForm:false,resetForm:false})
        this.logoOrientationChange(80,55);
        this.imageMarginChange(80);
        this.imageLeftChange(40);
        this.signInMarginChange(15);
        this.signUpMarginChange(35);
        setTimeout(()=>{
            this.opacityChange(0.9)
        },500);        
    }


    logoOrientationChange = (height,width) =>{
        Animated.timing(this.state.imageOrientationHeight, {
            toValue: height,
            duration: 500,
            useNativeDriver:false
          }).start()
          Animated.timing(this.state.imageOrientationWidth, {
            toValue: width,
            duration: 500,
            useNativeDriver:false
          }).start()
    }

    imageMarginChange = (newMargin) =>{
        Animated.timing(this.state.animaterImageMargin, {
            toValue: newMargin,
            duration: 300,
            useNativeDriver:false
          }).start()
    }

    signInMarginChange = (newMargin) =>{
        Animated.timing(this.state.signInMargin, {
            toValue: newMargin,
            duration: 500,
            useNativeDriver:false
          }).start()
    }

    signUpMarginChange = (newMargin) =>{
        Animated.timing(this.state.signUpMargin, {
            toValue: newMargin,
            duration: 500,
            useNativeDriver:false
          }).start()
    }

    imageLeftChange = (leftChange) =>{
        Animated.timing(this.state.animaterImageLeft, {
            toValue: leftChange,
            duration: 500,
            useNativeDriver:false
          }).start()
    }

    opacityChange = (newOpacity) =>{
        Animated.timing(this.state.loginFormOpacity, {
            toValue: newOpacity,
            duration: 800,
            useNativeDriver:false
          }).start()
    }

    heightChange = (newHeight) =>{
        Animated.timing(this.state.animatedHeight, {
            toValue: newHeight,
            duration: 500,
            useNativeDriver:false
          }).start()
    }
    componentDidMount =()=>{
    this.heightChange(SIZES.height*0.6);
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                 <StatusBar 
               barStyle="light-content" 
               backgroundColor="transparent" 
               translucent={true}/>
                <View style={[styles.overlay, { height: 660,zIndex:10}]} />
               <Animated.Image source={require('../../../assets/icon.png')} style={{zIndex:10,position:'absolute',top:this.state.animaterImageMargin,height:this.state.imageOrientationHeight,width:this.state.imageOrientationWidth,alignSelf:'center',left:this.state.animaterImageLeft}} />
                <Animated.Image source={require('../../../assets/img/bg1.jpeg')} style={{width:SIZES.width,height:this.state.animatedHeight}} />
                <View style={{backgroundColor:'white',zIndex:30,borderTopLeftRadius:20,borderTopRightRadius:20,padding:20,marginTop:-40,paddingTop:40}}>
                   {this.state.displayForm?  <Animated.View style={{paddingLeft:25,paddingRight:25,opacity:this.state.loginFormOpacity}}>
                     {!this.state.resetForm? <Item style={[{marginBottom:20,elevation:10,backgroundColor:'white',paddingLeft:10},this.state.emailError?styles.errorBorderInput:null]} rounded>
                            <Input value={this.state.email} onChangeText={value=>{this.setState({email:value})}}  placeholder={this.state.forgetForm?'Enter verification mail':'Email'} />
                        </Item>:<OTPInputView 
                    code={this.state.code} 
                    onCodeChanged = {code => { this.setState({code})}}
                    style={{width: '60%', height: 50,margin:0,padding:0}}
                    pinCount={6}
                    codeInputFieldStyle={styles.borderStyleBase}
                    codeInputHighlightStyle={styles.borderStyleHighLighted}
                    />}
                        {this.state.emailError?<Text style={{alignSelf:'center',color:COLORS.redDeep}}>Email exist</Text>:null}
                        {!this.state.forgetForm?
                             <Item style={[{marginBottom:20,elevation:10,backgroundColor:'white',paddingLeft:10},this.state.passwordError?styles.errorBorderInput:null]} rounded>
                            <Input value={this.state.password} onChangeText={value=>{this.setState({password:value})}} placeholder="Password" secureTextEntry={this.state.showPasswordLogin} />
                            {this.state.showPasswordLogin?<Icon name="eye-slash" onPress={()=>{this.setState({showPasswordLogin:false})}} type="FontAwesome" style={{color:'gray',fontSize:15,marginRight:10}} />:<Icon name="eye" onPress={()=>{this.setState({showPasswordLogin:true})}} type="FontAwesome" style={{color:'gray',fontSize:15,marginRight:10}} />}
                        </Item>:null
                        }
                        {this.state.passwordError?<Text style={{alignSelf:'center',color:COLORS.redDeep}}>Invalid Password</Text>:null}
                        {this.state.loginForm? <View>
                           {!this.state.forgetForm? <Text onPress={()=>{this.setState({forgetForm:true})}} style={{alignSelf:'center',color:COLORS.primaryDeep}}>Forget Password?</Text>:null}
                        </View>:<View>
                            <Item style={[{marginBottom:20,elevation:10,backgroundColor:'white',paddingLeft:10},this.state.confirmPasswordError?styles.errorBorderInput:null]} rounded>
                            <Input value={this.state.passwordConfirm} onChangeText={value=>{this.setState({passwordConfirm:value})}} placeholder="Confirm Password" secureTextEntry={this.state.showPasswordLogin} />
                            {this.state.showPasswordLogin?<Icon name="eye-slash" onPress={()=>{this.setState({showPasswordLogin:false})}} type="FontAwesome" style={{color:'gray',fontSize:15,marginRight:10}} />:<Icon name="eye" onPress={()=>{this.setState({showPasswordLogin:true})}} type="FontAwesome" style={{color:'gray',fontSize:15,marginRight:10}} />}
                        </Item>
                        {this.state.confirmPasswordError?<Text style={{alignSelf:'center',color:COLORS.redDeep}}>Didn't matched with password</Text>:null}
                        <Text onPress={()=>{this.setState({refModal:true})}} style={{alignSelf:'center',color:COLORS.primaryDeep}}>Have refer code?</Text>
                        </View>}
                    </Animated.View>:null}   
                    {!this.state.displayForm?<View>
                    <TouchableOpacity onPress={()=>{
                       this.LoginFormInitiate();
                    }} style={{padding:10,backgroundColor:'white',alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:20,elevation:20,borderWidth: 2,borderColor: COLORS.primaryDeep,marginLeft:30,marginRight:30,marginTop:10,marginBottom:10}}>
                        <Icon name="mail" type="Entypo" style={{fontSize:20,color:COLORS.primaryDeep,marginRight:10}} />
                        <Text style={{color:COLORS.primaryDeep}}>Sign in with email</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity  onPress={()=>{
                        this.RegisterFormInitiate();
                    }} style={{padding:10,backgroundColor:'white',alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:20,elevation:20,borderWidth: 2,borderColor: COLORS.primaryDeep,marginLeft:30,marginRight:30,marginTop:10,marginBottom:10}}>
                        <Icon name="mail" type="Entypo" style={{fontSize:20,color:COLORS.primaryDeep,marginRight:10}} />
                        <Text style={{color:COLORS.primaryDeep}}>Sign up with email</Text>
                    </TouchableOpacity>

                    </View>                
                   :<View>
                   <AnimatedTouchable onPress={()=>{
                      if(this.state.loginForm && !this.state.forgetForm && !this.state.resetForm){
                          this.login();
                      }else if(this.state.forgetForm && this.state.loginForm && !this.state.resetForm){
                         this.forgotPassword();
                        
                    }else if(this.state.loginForm && this.state.forgetForm && this.state.resetForm){
                        this.resetPassword();
                    }else if(!this.state.loginForm && !this.state.forgetForm && !this.state.resetForm){
                        this.register();
                    }
                   }} style={{padding:10,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:20,elevation:20,borderWidth: 2,borderColor: COLORS.primaryDeep,marginLeft:this.state.signInMargin,marginRight:this.state.signInMargin,marginTop: 10,marginBottom:10}}>
                       {this.state.requestLoading?<ActivityIndicator size="small" color={COLORS.primaryDeep} />: <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                       <Icon name="mail" type="Entypo" style={{fontSize:20,color:COLORS.primaryDeep,marginRight:10}} />
                       {!this.state.resetForm? <View>
                       {!this.state.forgetForm?<Text style={{color:COLORS.primaryDeep}}>{this.state.loginForm?'Sign in':'Sign up'}</Text>:<Text style={{color:COLORS.primaryDeep}}>Enter account email</Text>}
                       </View>:<View><Text style={{color:COLORS.primaryDeep}}>Enter Otp</Text></View>}
                       </View>}
                      
                      
                   </AnimatedTouchable>
                  
                   <AnimatedTouchable  onPress={()=>{
                       if(this.state.loginForm){
                        this.RegisterFormInitiate();
                       }else{
                        this.LoginFormInitiate();
                       }
                       
                   }} style={{padding:10,backgroundColor:'white',alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:20,elevation:20,borderWidth: 2,borderColor: COLORS.primaryDeep,marginLeft:this.state.signUpMargin,marginRight:this.state.signUpMargin,marginTop:10,marginBottom:10}}>
                       <Icon name="mail" type="Entypo" style={{fontSize:20,color:COLORS.primaryDeep,marginRight:10}} />
                       <Text style={{color:COLORS.primaryDeep}}>{this.state.loginForm?'Sign up':'Sign in'}</Text>
                   </AnimatedTouchable>
                   </View>                
                  } 
                    {/* <Text style={{alignSelf:'center',marginTop:10,fontSize:15,fontWeight:'bold',color:'gray'}}>OR</Text> */}
                    {/* <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}> 
                    <TouchableOpacity
                    onPress={()=>{this.fbLogin()}}
                    style={{backgroundColor:'#3b5998',elevation:20,height:50,width:50,alignItems:'center',justifyContent:'center',borderRadius:30,margin:10}}>
                        <Icon name="facebook" type="FontAwesome" style={{fontSize:30,color:'white'}} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{this.googleLogIn()}}
                    style={{margin:10,backgroundColor:'white',elevation:20,height:50,width:50,alignItems:'center',justifyContent:'center',borderRadius:30}}>
                      <Image source={require('../../../assets/img/social/google.png')} style={{height:30,width:30}} />
                    </TouchableOpacity>
                    </View> */}
                </View>
                <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.refModal}
          onRequestClose={() => {
            this.setState({refModal:false});
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Input value={this.state.refCode} style={{borderBottomColor:'#000',borderBottomWidth: 2,marginBottom:5}} onChangeText={value=>{this.setState({refCode:value})}} placeholder="Reference Code" secureTextEntry={false} />
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                    this.setState({refModal:false});
                   
                }}
              >
                <Text style={styles.textStyle}>Set Reference</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.registerOtp}
          onRequestClose={() => {
            this.setState({registerOtp:false});
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Input value={this.state.otpCode} onChangeText={value=>{this.setState({otpCode:value})}} style={{borderBottomColor:'#000',borderBottomWidth: 2,marginBottom:5}} placeholder="OTP" secureTextEntry={false} />
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() =>{ 
                this.initiateDoneRegister();
            }
            
            }
              >
                <Text style={styles.textStyle}>Set otp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.4,
        backgroundColor: 'white',
        width: SIZES.width
      },
      errorBorderInput:{
          borderWidth:2,
          borderColor:COLORS
          .redDeep
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        height:100,
        width:200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
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
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Login)