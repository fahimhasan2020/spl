import React, { Component } from 'react'
import { View, Text, StyleSheet,StatusBar,Image,Dimensions,FlatList } from 'react-native'
import { connect } from 'react-redux'
import {Card,CardItem,Body} from "native-base"
import { COLORS } from '../../components/theme/colors';
const {width,height} = Dimensions.get('window')

const listOne = [{
    no:1,
    headLine:'Final Result',
    content:'We calculate final result after every 6 hour.',
    compose:'Play single player games instantly and try to make bigger score. We calculate all single mode score and give prize to the first placed one.'
},{
    no:2,
    headLine:'Weekly Bonus',
    content:'We will set some weekly milestone.',
    compose:'A player can earn free coins from weekly milestones by playing games. A prizes will be given after the week ends'
},
{
    no:3,
    headLine:'Required coins',
    content:'Game need coins to play',
    compose:'Games need coins to play. Every single player games need 40 coins to play. '
    
},{
    no:4,
    headLine:'Account verification',
    content:'Before buying coin , you need to verify your account',
    compose:'Without varification you can not cash out or cash in games coins  '
  
},{
    no:5,
    headLine:'Game List',
    content:'We have 5 single player games',
    compose:'Ludu,Rummy,Pool,Carram,Road runner are single player game. We count maximum game point and end time for price calculation.'
}]

export class Singledemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{fontSize:20,fontWeight:'bold',color:COLORS.primaryCore,alignSelf:'center'}}>How to play single player ?</Text>
                            <Image source={require('../../../assets/img/singlemode.png')} style={{height:220,marginTop:20,width:width*0.8}} />
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Singledemo)
