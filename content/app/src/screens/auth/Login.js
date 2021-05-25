import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Text, StyleSheet, View, TouchableOpacity, ToastAndroid, Dimensions, Image, StatusBar} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {Inputs,Passwords,InputButtonBlue} from "../../components/ui/Inputs";
import * as Google from 'expo-google-app-auth';


class Login extends Component {
    
    state = {
        username:'',
        password:'',
        device_name:'android',
        usernameError:'',
        otp:'',
        otpError:'',
        otpErrorHeight:0,
        usernameErrorHeight:0,
        passwordErrorHeight:0,
        passwordError:'',
        loading:false,
        sent:false
    }
    googleLogin =async ()=>{
        const { type, accessToken, user } = await Google.logInAsync({
            androidClientId:'959764389042-hs6vmnphc8un1ca7e8k5bnvvdcpe54k6.apps.googleusercontent.com',
            androidStandaloneAppClientId:'959764389042-hs6vmnphc8un1ca7e8k5bnvvdcpe54k6.apps.googleusercontent.com',
            scopes:['profile', 'email']
        });
        if (type === 'success') {
            this.setState({username:user.email,password:'123456789'})
            const host = this.props.host;
            return fetch(host+'user/login',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username:this.state.username,
                    password:this.state.password,
                    device_name:this.state.device_name
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.hasOwnProperty('errors')){
                        this.setState({loading:false})
                        console.log(responseJson);
                        ToastAndroid.show(responseJson.errors.email.toString(), ToastAndroid.SHORT);
                    }else{
                        this.setState({loading:false});
                        AsyncStorage.multiSet([['token', responseJson.token],['email', responseJson.user.email],['loggedIn','true'],['profile_picture',responseJson.user.profile_picture],['first_name',responseJson.user.first_name],['last_name',responseJson.user.last_name]]).then(() => {
                            this.props.changeAccessToken(responseJson.access_token);
                            this.props.changeLogged(true);
                         });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    onButtonPress(){
        this.setState({loading:true})
        if (this.state.username === '' || this.state.password === ''){
            if (this.state.username === ''){
                this.setState({usernameError:'Email/Phone required'});
                this.setState({usernameErrorHeight:15})
            }else{
                this.setState({usernameError:''});
                this.setState({usernameErrorHeight:0})
            }
            if (this.state.password === ''){
                this.setState({passwordError:'Password required'});
                this.setState({passwordErrorHeight:15})
            }else{
                this.setState({passwordError:''});
                this.setState({passwordErrorHeight:0})
            }
            this.setState({loading:false})
        }else{
            if (this.state.password.length < 8){
                this.setState({loading:false})
                this.setState({passwordErrorHeight:15})

                this.setState({passwordError:'Password field should be at least 8 character'});
            }else{
                const host = this.props.host;
                return fetch(host+'user/login',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username:this.state.username,
                        password:this.state.password,
                        device_name:this.state.device_name
                    })
                }).then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.hasOwnProperty('errors')){
                            this.setState({loading:false})
                            console.log(responseJson);
                            ToastAndroid.show(responseJson.errors.email.toString(), ToastAndroid.SHORT);
                        }else{
                            this.setState({loading:false});
                            console.log(responseJson);
                            AsyncStorage.multiSet([['token', responseJson.token],['email', responseJson.user.email],['loggedIn','true']]).then(() => {
                                this.props.changeAccessToken(responseJson.access_token);
                                this.props.changeLogged(true);
                             });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    };
    

    verifyOtp(){
        const host = this.props.host;
        this.setState({loading:true})
        return fetch(host+'user/verify/otp',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:this.state.username,
                otp:this.state.otp
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.hasOwnProperty('fault')){
                    this.setState({loading:false})
                    ToastAndroid.show('Wrong Otp', ToastAndroid.SHORT);
                }else if(responseJson.hasOwnProperty('success')){
                    this.setState({loading:false});
                    this.props.changeLogged(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if(this.state.sent){
            const onPress = () => {console.log('pressed')};
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#e6b54c'} />
                <TouchableOpacity
                style={{position:'absolute',top:20,left:20}} 
                onPress={()=>{this.props.navigation.navigate('MainPage')}}
                >
                <Icon  name={'angle-left'} size={30} color="white"/>
                </TouchableOpacity>
               <View style={{height:Dimensions.get('window').height*0.15,paddingTop:50,alignSelf:'flex-end',paddingRight:50}}>
                   
                <Animatable.Text animation="bounceIn" delay={1000} style={{fontSize:30,color:'#000063',marginBottom:40}}>ENTER OTP</Animatable.Text>
                </View>
                <Animatable.View animation="slideInUp" style={{alignItems:'center',backgroundColor:'#ffffff',width:'100%',height:Dimensions.get('window').height*0.85,borderTopLeftRadius:50,borderTopRightRadius:50}}>
                    <Image source={require('../../../assets/img/mosaik.jpg')} style={styles.backgroundImage} />
                    <View style={{marginTop:150}}>

                    </View>
                <Inputs
                    ph={'OTP'}
                    val={this.state.otp}
                    onChangeTexts={(value)=>{this.setState({otp:value})}} />
                <Text style={{color:'red',height:this.state.otpErrorHeight}}>{this.state.otpError}</Text>
                <InputButtonBlue loading={this.state.loading} onPress={()=>{this.verifyOtp()}} value={'Verify'}/>
                </Animatable.View>
            </View>
        )
        }else{
            const onPress = () => {console.log('pressed')};
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#e6b54c'} />
                <TouchableOpacity
                style={{position:'absolute',top:20,left:20}} 
                onPress={()=>{this.props.navigation.navigate('MainPage')}}
                >
                <Icon  name={'angle-left'} size={30} color="white"/>
                </TouchableOpacity>
                <View style={{height:Dimensions.get('window').height*0.15,paddingTop:60,paddingRight:50,alignSelf:'flex-end'}}>
                
                <Animatable.Text animation="bounceIn" delay={1000} style={{fontSize:30,color:'#000063',marginBottom:40}}>LOGIN</Animatable.Text>
                </View>
                
              <Animatable.View animation="slideInUp" style={{alignItems:'center',backgroundColor:'#ffffff',width:'100%',height:Dimensions.get('window').height*0.85,borderTopLeftRadius:50,borderTopRightRadius:50}}>
                  <Image source={require('../../../assets/img/mosaik.jpg')} style={styles.backgroundImage} />
                  <View style={{marginTop:150}}>

                  </View>
                <Inputs
                    ph={'Email'}
                    val={this.state.username}
                    onChangeTexts={(value)=>{this.setState({username:value})}} />
                <Text style={{color:'red',height:this.state.usernameErrorHeight}}>{this.state.usernameError}</Text>
                    <Passwords
                        ph={'Password'}
                        val={this.state.password}
                        onChangeTexts={(value)=>{this.setState({password:value})}}
                    />
                <Text style={{color:'red',height:this.state.passwordErrorHeight}}>{this.state.passwordError}</Text>
                    <View style={{alignItems:'flex-end',height:30}}>
                        <TouchableOpacity
                            style={{position:'absolute',left:10}}
                            onPress={()=>{
                                this.props.navigation.navigate('Forgot')
                            }}>
                            <Text style={{color:'#e7e7ec'}}>Forget password?</Text>
                        </TouchableOpacity>
                    </View>
                <InputButtonBlue loading={this.state.loading} onPress={()=>{this.onButtonPress()}} value={'Sign In'}/>
                <TouchableOpacity
                    onPress={()=>{this.googleLogin()}}
                style={{backgroundColor:'#fff',padding: 10, paddingLeft:50,paddingRight:50,alignItems: 'center', borderRadius: 35,flexDirection:'row'}}
                >
                    <Image source={require('../../../assets/img/g.png')} style={{width:20,height:20,marginRight:10}} />
                    <Text style={{fontSize:16}}>Join with Google</Text>
                </TouchableOpacity>
                <Text style={{color:'#ccc'}}>OR</Text>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('Register');
                    }}
                >
                    <Text style={{color:'#eaeaee'}}>Sign Up</Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>
        )
        }
        
    }
}
const mapDispatchToProps = dispatch => {
    return{
        changeAccessToken : (value) => {dispatch({type:'CHANGE_TOKEN',token: value})},
        changeLogged : (value) => {dispatch({type:'LOGIN',logged: value})},
    };

};
const mapStateToProps = state => {
    return {
        accessToken : state.auth.accessToken,
        host: state.auth.host
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#e6b54c',
    },
    property:{
        color:'#000063'
    },
    backgroundImage: {
        position:'absolute',
        top:0,
        left:0,
        height: '100%',
        width: '100%',
        borderTopLeftRadius:50,borderTopRightRadius:50
    }
})
