import React, { Component } from 'react'
import { View,TouchableOpacity,Image,StatusBar,ScrollView } from 'react-native'

import { Container, Header, Content, Button,List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

import { connect } from 'react-redux'
import { SIZES, COLORS } from '../../component/theme';

export class More extends Component {
    render() {
        return (
            <View>
                 <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <Image blurRadius={3} source={require('../../../assets/img/bannerone.jpg')} style={{width:'100%',height:200}} />
                <View style={{width:'100%',height:200,backgroundColor:'rgba(128, 0, 128, 0.5)',position:'absolute',top:0}}></View>
                <Text style={{position:'absolute',top:100,alignSelf:'center',color:'white',fontSize:20,textTransform:'uppercase'}}>
                    User Interface
                </Text>
                <ScrollView style={{height:500}}>
                <List>
                    <ListItem itemDivider>
              <Text>Tutorial</Text>
            </ListItem>        
                <ListItem onPress={()=>{this.props.navigation.navigate('HowToPlay')}} icon>
            <Left>
              <Button style={{ backgroundColor: COLORS.redDeep }}>
                <Icon active name="gamepad" type="FontAwesome" />
              </Button>
            </Left>
            <Body>
              <Text>How to play</Text>
            </Body>
            <Right>
            <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{this.props.navigation.navigate('HowToEarn')}} icon>
            <Left>
              <Button style={{ backgroundColor: "orange" }}>
                <Icon active name="coins" type="FontAwesome5" />
              </Button>
            </Left>
            <Body>
              <Text>How to earn</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
         
          <ListItem onPress={()=>{this.props.navigation.navigate('HowToCashIn')}} icon>
            <Left>
              <Button  style={{ backgroundColor: COLORS.gray }}>
                <Icon active name="md-receipt-outline" type="Ionicons" />
              </Button>
            </Left>
            <Body>
              <Text>How to cashin</Text>
            </Body>
            <Right>
              
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
              </List>  

                <List >
                    <ListItem itemDivider>
              <Text>Our info</Text>
            </ListItem>        
                <ListItem onPress={()=>{this.props.navigation.navigate('PrivacyPolicy')}} icon>
            <Left>
              <Button style={{ backgroundColor: COLORS.redLight }}>
                <Icon active name="md-pricetags" type="Ionicons" />
              </Button>
            </Left>
            <Body>
              <Text>Privacy policy</Text>
            </Body>
            <Right>
            <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{this.props.navigation.navigate('PaymentPolicy')}} icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="info" type="Entypo" />
              </Button>
            </Left>
            <Body>
              <Text>Payment policy</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{this.props.navigation.navigate('TermsAndConditions')}} icon>
            <Left>
              <Button  style={{ backgroundColor: COLORS.gray }}>
                <Icon active name="md-receipt-outline" type="Ionicons" />
              </Button>
            </Left>
            <Body>
              <Text>Terms and conditions</Text>
            </Body>
            <Right>
              
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
              </List>  
              <List>
                    <ListItem itemDivider>
              <Text>History</Text>
            </ListItem>        
                <ListItem onPress={()=>{this.props.navigation.navigate('TransectionHistory')}} icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="gear" type="EvilIcons" />
              </Button>
            </Left>
            <Body>
              <Text>Transection History</Text>
            </Body>
            <Right>
            <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{this.props.navigation.navigate('ReferenceHistory')}} icon>
            <Left>
              <Button style={{ backgroundColor: COLORS.primaryDeep }}>
                <Icon active name="support-agent" type="MaterialIcons" />
              </Button>
            </Left>
            <Body>
              <Text>Reference History</Text>
            </Body>
            <Right>
            <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{this.props.navigation.navigate('GameHistory')}} icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="info" type="Entypo" />
              </Button>
            </Left>
            <Body>
              <Text>Game History</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
              </List>  

              
                    <List style={{marginBottom:300}}>
                    <ListItem itemDivider>
              <Text>Controls</Text>
            </ListItem>        
                <ListItem onPress={()=>{this.props.navigation.navigate('Settings')}} icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="gear" type="EvilIcons" />
              </Button>
            </Left>
            <Body>
              <Text>Settings</Text>
            </Body>
            <Right>
            <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{this.props.navigation.navigate('Info')}} icon>
            <Left>
              <Button style={{ backgroundColor: COLORS.primaryDeep }}>
                <Icon active name="support-agent" type="MaterialIcons" />
              </Button>
            </Left>
            <Body>
              <Text>Support</Text>
            </Body>
            <Right>
            <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{this.props.navigation.navigate('Faq')}} icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="info" type="Entypo" />
              </Button>
            </Left>
            <Body>
              <Text>Faq</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{this.props.logout(false)}} icon>
            <Left>
              <Button  style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="sign-out-alt" type="FontAwesome5" />
              </Button>
            </Left>
            <Body>
              <Text>Logout</Text>
            </Body>
            <Right>
              
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
              </List>  
       
              </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch=>{
    return{
        logout : (value) =>{dispatch({type:'LOGOUT',logged: value})}
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(More)
