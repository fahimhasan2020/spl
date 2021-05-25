import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Card,CardItem,Body,H1} from "native-base";

export default class HowToPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
       <Card>
         <CardItem>
           <Body>
             <H1 style={{color:'brown'}}>How to play Multi Player</H1>
             <Text style={{fontSize:10,fontWeight:'bold', fontFamily: "Cochin",letterSpacing:1,lineHeight:14}}>
               In order to play multiplayer you need to have coins in your account. There are three segment in multiplayer. 
               {'\n'}1. 100 coin game,  
               {'\n'}2. 500coin game and 
               {'\n'}3. 1000 coins game.

               {'\n'} {'\n'} {'\n'}
               In 100 coin game two player participate in the game and winner takes the 90% prize of the game. So if any user play 100 coins game and if he wins, he will get 90 coin excluding his gaming coins.

               {'\n'} {'\n'} {'\n'}
               In 500 coin game two player participate in the game and winner takes the 90% prize of the game. So if any user play 500 coins game and if he wins, he will get 450 coin excluding his gaming coins.


               {'\n'} {'\n'} {'\n'}
               In 1000 coin game two player participate in the game and winner takes the 90% prize of the game. So if any user play 100 coins game and if he wins, he will get 900 coin excluding his gaming coins.

               {'\n'} {'\n'} {'\n'}
               All game result generates immediately
             </Text>
           </Body>
         </CardItem>
       </Card>
      </View>
    );
  }
}
