import React, { Component } from 'react'
import { View, Text, ScrollView,StyleSheet,ToastAndroid } from 'react-native'
import {  Card, CardItem, Body,Fab,Button,Picker,List,ListItem,Content,Container, Icon, Left, Right, Switch } from 'native-base';

import { connect } from 'react-redux'

export class More extends Component {


    render() {
        return (
            <ScrollView style={styles.container}>
                <Card style={{paddingTop:80}}> 
                    <CardItem>
                        <Body>
                            <Text style={styles.bannerHeader}>
                                Basic Info
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Container>
                <Content>
          <ListItem itemHeader>
           <Text>How to play ?</Text>
          </ListItem>
          <ListItem onPress={()=>{
             this.props.navigation.navigate('SinglePlayer')
          }} icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="flash" />
              </Button>
            </Left>
            <Body>
              <Text>Single Player</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{
              this.props.navigation.navigate('MultiPlayer')
          }} icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Multiplayer</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{
              this.props.navigation.navigate('Tournament')
          }} icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="image" />
              </Button>
            </Left>
            <Body>
              <Text>Tournament</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem itemHeader>
          <Text>How to Buy coin ?</Text>
          </ListItem>
          <ListItem onPress={()=>{
               this.props.navigation.navigate('AccountIntegration')
          }} icon>
            <Left>
              <Button style={{ backgroundColor: "red" }}>
                <Icon active type="FontAwesome" name="area-chart" />
              </Button>
            </Left>
            <Body>
              <Text>Account Integration</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{
             this.props.navigation.navigate('EarnFromGame')
          }} icon>
            <Left>
              <Button style={{ backgroundColor: "pink" }}>
                <Icon active type="FontAwesome" name="bar-chart" />
              </Button>
            </Left>
            <Body>
              <Text>Earn from game</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{
              this.props.navigation.navigate('CoinSellout')
          }} icon>
            <Left>
              <Button style={{ backgroundColor: "orange" }}>
                <Icon active type="FontAwesome" name="dollar" />
              </Button>
            </Left>
            <Body>
              <Text>Coin sellout</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem itemHeader>
          <Text>Info</Text>
          </ListItem>
          <ListItem onPress={()=>{
            this.props.navigation.navigate('AccountPolicy')
          }} icon>
            <Left>
              <Button style={{ backgroundColor: "yellow" }}>
                <Icon active type="FontAwesome" name="info" />
              </Button>
            </Left>
            <Body>
              <Text>Account Policy</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{
            this.props.navigation.navigate('PrivacyPolicy')
          }} icon>
            <Left>
              <Button style={{ backgroundColor: "blueviolet" }}>
                <Icon active type="FontAwesome" name="legal" />
              </Button>
            </Left>
            <Body>
              <Text>Privacy policy</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{
            this.props.navigation.navigate('Settings')
          }} icon>
            <Left>
              <Button style={{ backgroundColor: "gray" }}>
                <Icon active type="FontAwesome" name="gear" />
              </Button>
            </Left>
            <Body>
              <Text>Settings</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={()=>{this.props.changeLogged()}} icon>
            <Left>
              <Button style={{ backgroundColor: "green" }}>
                <Icon active type="FontAwesome" name="sign-out" />
              </Button>
            </Left>
            <Body>
              <Text>Sign out</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
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
        flex:1,backgroundColor:'#eee'
    },

    bannerHeader:{
        fontSize:20,
        alignSelf:'center',
        fontWeight:'bold',
        color:'#b1a265'
    }
});
const mapDispatchToProps = dispatch => {
    return{
        
        changeLogged:(value)=>{dispatch({type:'LOGOUT',logged:false})}
    };

};
const mapStateToProps = state => {
    return {
      host: state.auth.host
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(More)
