import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Text, StyleSheet, View,TouchableOpacity,ToastAndroid,Image,Dimensions,StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {Inputs, Passwords, InputButtonBlue, InputButtonRed} from "../../components/ui/Inputs";
class Login extends Component {
    state = {
        username:'',
        password:'',
        device_name:'android',
        usernameError:'',
        usernameErrorHeight:0,
        passwordErrorHeight:0,
        passwordError:'',
        loading:false,
    }
    render() {
        const onPress = () => {console.log('pressed')};
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#e6b54c'} />
                <View style={{height:Dimensions.get('window').height*0.35,paddingTop:40, paddingRight:30,alignSelf:'flex-end'}}>
                    <Animatable.Image animation="bounceIn" delay={500}
                    style={styles.tinyLogo}
                    source={require('../../../assets/icon.png')}
                />
                </View>
                <Animatable.View animation="slideInUp" style={{width:'100%',height:Dimensions.get('window').height*0.70,alignItems:'center',borderTopLeftRadius:50,borderTopRightRadius:50,backgroundColor:'#ffffff'}}>
                    <Image source={require('../../../assets/img/mosaik.jpg')} style={styles.backgroundImage} />
                    <TouchableOpacity
        onPress={()=>{this.props.navigation.navigate('Login')}}
        style={{marginTop:300}}
                    >
   <LinearGradient
        colors={['#0000cc', '#000063']}
        style={{ padding: 10, alignItems: 'center', borderRadius: 15, flexDirection:'row',paddingLeft:40,paddingRight:40,shadowColor: "#000",shadowOffset: {width: 0,height:3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6, }}>
         <Icon  name={'user-circle'} size={15} color="white"/>
    <Text style={{backgroundColor: 'transparent',fontSize: 13,color: '#fff',marginLeft:10}}>Join Us</Text></LinearGradient></TouchableOpacity>
                </Animatable.View>
            </View>
        )
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
    statusbar:{backgroundColor:'#e6b54c'},
    tinyLogo: {
        width: 180,
        height: 180,
    },
    property:{
        color:'blue'
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
