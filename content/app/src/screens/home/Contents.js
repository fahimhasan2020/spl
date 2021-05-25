import React, { Component } from 'react'
import { View, Text,StyleSheet,FlatList } from 'react-native'
import { connect } from 'react-redux'
import {  Card, CardItem, Body,Icon} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export class Contents extends Component {
    state={
        rides:[],
        poles:[]
    }

    componentDidMount = async() => {
        let host = this.props.host;
        const value = await AsyncStorage.getItem('email');
        fetch(host+'user/all/ride',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response)=>response.json()).then((responseJson)=>{
            this.setState({rides:responseJson})
        })

        fetch(host+'user/all/pole',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response)=>response.json()).then((responseJson)=>{
            this.setState({poles:responseJson})
        })
    }

    render() {
        return (
            <View style={styles.container}>
                 <Card>
                    <CardItem>
                        <Body>
                        <Text style={{paddingTop:70,color:'brown',fontSize:20,alignSelf:'center'}}>
                                History
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                        <Text style={{color:'brown',fontSize:20}}>
                               Gaming History
                            </Text>
                            <Icon active type="FontAwesome" name="window-close" style={{fontSize: 100, color: 'gray',marginTop:20,alignSelf:'center'}} />
                            <Text style={{fontsize:10,color:'gray',alignSelf:'center'}}>No history available</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                        <Text style={{color:'brown',fontSize:20,}}>
                                Transection History
                            </Text>
                            <Icon active type="FontAwesome" name="window-close" style={{fontSize: 100, color: 'gray',marginTop:20,alignSelf:'center'}} />
                            <Text style={{fontsize:10,color:'gray',alignSelf:'center'}}>No history available</Text>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    }
})

const mapStateToProps = state => {
    return {
        host: state.auth.host,
    }
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Contents)