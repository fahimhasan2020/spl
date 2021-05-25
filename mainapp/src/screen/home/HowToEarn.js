import React, { Component } from 'react'
import { Text, View,Image,ScrollView,SafeAreaView } from 'react-native'
import {Card,CardItem,H1,Body} from "native-base"

export default class HowToEarn extends Component {
    render() {
        return (
            <SafeAreaView>
            <ScrollView>
                <Card>
                    <CardItem>
                        <Body>
                            <H1>Referenc Process</H1>
                            <Text style={{fontSize:10,fontWeight:'bold', fontFamily: "Cochin",letterSpacing:1,lineHeight:14}}>
                              You have to refer and register more friend in order to get reference money. These are the free coins that you can earn. When your refered user win games and earn money you will also earn money from the game. Referer gets 6% of the game winning money.{'\n'}{'\n'}
                              You can  share your reference code using bottom bar of home screen.
                            </Text>
                            
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
            </SafeAreaView>
        )
    }
}
