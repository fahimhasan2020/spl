import React, { Component } from 'react'
import { View, Text,StyleSheet,ScrollView, TouchableOpacity,StatusBar } from 'react-native'
import { connect } from 'react-redux'
import {  Card, CardItem, Body,Fab,Button,Icon } from 'native-base';

export class Info extends Component {
    state={

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                SPL app is a multi user gaming system. It contains both single  and multiplayer game. We are not aware of any outer transection. We dont share our info with anyone
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                BENEFITS
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                Joining our community you can earn cash from the coins and besides these you can start the security firewell so that any kind of unauthorized access you can change your payment transection.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Info)