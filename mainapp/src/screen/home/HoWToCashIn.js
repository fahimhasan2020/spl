import React, { Component } from 'react';
import { View, Text,Image,SafeAreaView,ScrollView } from 'react-native';
import {Card,CardItem,Body,H1} from "native-base"

export default class HoWToCashIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
     <ScrollView>
       <Card>
         <CardItem>
           <Body>
           <Text style={{fontSize:10,fontWeight:'bold', fontFamily: "Cochin",letterSpacing:1,lineHeight:14}}>
                                All transection is done by this website is based on user concern. Spl community or its share holder is not liable for any kind of miss placement of transection. Any kind of coin selling or coins modification outside of this system is highly prohibited.{'\n'}
                            </Text>
                            <Image source={require('../../../assets/img/cashin.jpeg')} style={{height:600,width:'100%'}} />
                            <Text style={{fontSize:10,fontWeight:'bold', fontFamily: "Cochin",letterSpacing:1,lineHeight:14}}>
                              At first go to bottom coin nav in order to cash in coins from the system. There you need to enter you amount and send the transection id of nagad after giving the money to our given nagad account. Then press send money. By sending money you account will be coins in with in 1/2 hour. After coins in you can start playing game.{'\n'}
                            </Text>
           </Body>
         </CardItem>
       </Card>
     </ScrollView>
      </SafeAreaView>
    );
  }
}
