import React, { Component } from 'react'
import { View,StyleSheet,ScrollView,Image,ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {  Card, CardItem, Body,Text,Button,List,ListItem,Content,Container, Icon,Left, Right, } from 'native-base';
import {Inputs,Passwords,InputButtonBlue,InputButtonRed} from "../../components/ui/Inputs";


export class Profile extends Component {
    state={
        email:'',
        first_name:'',
        last_name:'',
        nid:'',
        dp:'',
        chosenDate:null,
        phone:''
    }
componentDidMount =async()=>{
        const value = await AsyncStorage.getItem('email')
    if(value !== null) {
      this.setState({email:value})
      const host = this.props.host;
      if(this.props.rider === true){
        return  fetch(host+'rider/get/info',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,
            dp:responseJson.profile_picture,
            phone:responseJson.phone_number
            })
        })

      }else{
        return  fetch(host+'user/get/info',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,
            dp:responseJson.profile_picture,
            phone:responseJson.phone_number
        })
        })
      }
    }
    }
async backCalled (){
    ToastAndroid.show("Profile updated", ToastAndroid.SHORT);
    const value = await AsyncStorage.getItem('email')
    if(value !== null) {
      this.setState({email:value})
      const host = this.props.host;
      if(this.props.rider === true){
        return  fetch(host+'rider/get/info',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            console.log(responseJson);
            this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,
            dp:responseJson.profile_picture,
            phone:responseJson.phone_number
            })
        })

      }else{
        return  fetch(host+'user/get/info',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,
            dp:responseJson.profile_picture,
            phone:responseJson.phone_number
        })
        })
      }
    }
}

    render() {
        let profile = require('../../../assets/img/user.png');
        if(this.state.dp !== ''){
            profile = {uri:this.props.host+'images/'+this.state.dp};
        }else{
            profile = require('../../../assets/img/user.png');;
        }
        return (
            <ScrollView style={styles.container}>
               
                <Card style={{paddingTop:80}}>
                    <CardItem>
                        <Body>
                            <Text style={{fontSize:20,fontFamily:'Roboto',color:'brown'}}>INFO</Text>
                        
                        </Body>
                    </CardItem>
                </Card>
                <Container>
                <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active type="FontAwesome" name="info" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textInfo}>{this.state.first_name} {this.state.last_name}</Text>
            </Body>
            <Right>
              <Icon onPress={()=>{this.props.navigation.navigate('EditProfile')}} active type="FontAwesome" name="pencil" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "green" }}>
                <Icon active type="FontAwesome" name="envelope" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textInfo}>{this.state.email}</Text>
            </Body>
            <Right>
              <Icon onPress={()=>{this.props.navigation.navigate('EditProfile')}} active type="FontAwesome" name="pencil" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "blueviolet" }}>
                <Icon active type="FontAwesome" name="address-book" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textInfo}>{this.state.nid} </Text>
            </Body>
            <Right>
              <Icon onPress={()=>{this.props.navigation.navigate('EditProfile')}} active type="FontAwesome" name="pencil" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "blueviolet" }}>
                <Icon active type="FontAwesome" name="phone" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textInfo}>{this.state.phone} </Text>
            </Body>
            <Right>
              <Icon onPress={()=>{this.props.navigation.navigate('EditProfile')}} active type="FontAwesome" name="pencil" />
            </Right>
          </ListItem>
          
        </Content>
        
      </Container>
          
                 </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
    textInfo:{
        color:'#adadad',
        fontSize:14,
        fontWeight:'bold'
    }
})

const mapStateToProps = state => {
    return {
        host: state.auth.host,
        first_name: state.auth.first_name,
        last_name: state.auth.last_name,
        nid: state.auth.nid,
        dob: state.auth.dob,
        rider:state.auth.rider
    }
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)