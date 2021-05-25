import React, { Component } from 'react'
import { View, Text,Image,StyleSheet,StatusBar,ScrollView } from 'react-native'
import { SIZES, COLORS } from '../../component/theme';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import CarouselHold from '../../component/ui/CarouselHold'
import { SliderBox } from "react-native-image-slider-box";
import Bottom from "../../component/ui/Bottom"
import changeNavigationBarColor,{
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';

import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export class Home extends Component {
  constructor(props){
    super(props);
    this.state={
        images:[
          require('../../../assets/img/banner1.jpg'),
          require('../../../assets/img/banner2.png'),
          require('../../../assets/img/banner3.jpg')
        ]
      }
  }
   
    _renderItem = ({item, index}) => {
        return (
            <View>
            <Image source={item.url} />
        </View>
        );
    }
 componentDidMount = ()=>{
  changeNavigationBarColor(COLORS.redDeep);
 }

    render() {
        return (
            <View style={{height:SIZES.height}}>
            <ScrollView style={{paddingBottom:200,flex:1}}>
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <SliderBox autoplay images={this.state.images} />
                {/* <Text style={styles.headlines}>Single Player</Text>
                <ScrollView horizontal={true}>
                <Card style={{margin:20,width:200,height:220,elevation:10}}>
    <Card.Cover source={require('../../../assets/img/bubbleshooter.jpg')} style={{height:120}} />
    <Card.Content>
      <Title>Bubble Shooter</Title>
      <Paragraph>Single player game</Paragraph>
      <Button onPress={()=>{this.props.navigation.navigate('SinglePlayer',{gameTitle:'Bubble Shooter',Link:this.props.host+'bubble/'+this.props.userId,pic:require('../../../assets/img/bubbleshooter.jpg'),road:'Bubble'})}} color="white" style={{backgroundColor:'blueviolet',color:'white',elevation:10}}>Play</Button>
    </Card.Content>
  </Card>

  <Card style={{margin:20,width:200,height:220,elevation:10}}>
    <Card.Cover source={require('../../../assets/img/racing.png')} style={{height:120}} />
    <Card.Content>
      <Title>Runner</Title>
      <Paragraph>Single player game</Paragraph>
      <Button onPress={()=>{this.props.navigation.navigate('SinglePlayer',{gameTitle:'Runner',Link:this.props.host+'runner/'+this.props.userId,pic:require('../../../assets/img/racing.png'),road:'Runner'})}} color="white" style={{backgroundColor:'blueviolet',color:'white',elevation:10}}>Play</Button>
    </Card.Content>
  </Card>                                    
  <Card style={{margin:20,width:200,height:220,elevation:10}}>
    <Card.Cover source={require('../../../assets/img/fruitchop.jpg')} style={{height:120}} />
    <Card.Content>
      <Title>Fruit Chop</Title>
      <Paragraph>Single player game</Paragraph>
      <Button onPress={()=>{this.props.navigation.navigate('SinglePlayer',{gameTitle:'Fruit Chop',Link:this.props.host+'fruit/'+this.props.userId,pic:require('../../../assets/img/fruitchop.jpg'),road:'FruitChop'})}}  color="white" style={{backgroundColor:'blueviolet',color:'white',elevation:10}}>Play</Button>
    </Card.Content>
  </Card>
  <Card style={{margin:20,width:200,height:220,elevation:10}}>
    <Card.Cover source={require('../../../assets/img/games/football.jpeg')} style={{height:120}} />
    <Card.Content>
      <Title>Football</Title>
      <Paragraph>Single player game</Paragraph>
      <Button onPress={()=>{this.props.navigation.navigate('SinglePlayer',{gameTitle:'Football',Link:this.props.host+'football/'+this.props.userId,pic:require('../../../assets/img/games/football.jpeg'),road:'FootBall'})}}  color="white" style={{backgroundColor:'blueviolet',color:'white',elevation:10}}>Play</Button>
    </Card.Content>
  </Card>
                </ScrollView> */}
                <Text style={styles.headlines}>Multi-player</Text>
                <ScrollView horizontal={true}>
                {/* <Card style={{margin:20,width:200,height:220,elevation:10}}>
   
   
    <Card.Cover source={require('../../../assets/img/chess.jpeg')} style={{height:120}} />
  
    <Card.Content>
      <Title>Chess</Title>
      <Paragraph>Multi player game</Paragraph>
      <Button onPress={()=>{this.props.navigation.navigate('MultiPlayerInfoPlay',{gameTitle:'Chess',Link:this.props.host+'chess',pic:require('../../../assets/img/chess.jpeg'),road:'Chess'})}} color="white" style={{backgroundColor:'blueviolet',color:'white',elevation:10}}>Play</Button>
    </Card.Content>
  </Card> */}
  {/* <Card style={{margin:20,width:200,height:220,elevation:10}}>
    <Card.Cover source={require('../../../assets/img/3patti.png')} style={{height:120}} />
    <Card.Content>
      <Title>3 Patti</Title>
      <Paragraph>Multi player game</Paragraph>
      <Button color="white" onPress={()=>{this.props.navigation.navigate('MultiPlayerInfoPlay',{gameTitle:'3 Patti',Link:'https://play.famobi.com/gin-rummy-plus',pic:require('../../../assets/img/3patti.png'),road:'3Patti'})}} style={{backgroundColor:'blueviolet',color:'white',elevation:10}}>Play</Button>
    </Card.Content>
  </Card> */}

  {/* <Card style={{margin:20,width:200,height:220,elevation:10}}>
    <Card.Cover source={require('../../../assets/img/pool.jpg')} style={{height:120}} />
    <Card.Content>
      <Title>Pool</Title>
      <Paragraph>Multi player game</Paragraph>
      <Button onPress={()=>{this.props.navigation.navigate('MultiPlayerInfoPlay',{gameTitle:'Pool',Link:this.props.host+'pool',pic:require('../../../assets/img/pool.jpg'),road:'Pool'})}} color="white" style={{backgroundColor:'blueviolet',color:'white',elevation:10}}>Play</Button>
    </Card.Content>
  </Card> */}

  {/* <Card style={{margin:20,width:200,height:220,elevation:10}}>
    <Card.Cover source={require('../../../assets/img/keram.jpeg')} style={{height:120}} />
    <Card.Content>
      <Title>Carrom</Title>
      <Paragraph>Single player game</Paragraph>
      <Button onPress={()=>{this.props.navigation.navigate('MultiPlayerInfoLudu',{gameTitle:'Carrom',Link:this.props.host+'carrom',pic:require('../../../assets/img/keram.jpeg'),road:'Carrom'})}} color="white" style={{backgroundColor:'blueviolet',color:'white',elevation:10}}>Play</Button>
    </Card.Content>
  </Card> */}
    <Card style={{margin:20,width:200,height:220,elevation:10}}>
    <Card.Cover source={require('../../../assets/img/ludu.png')} style={{height:120}} />
    <Card.Content>
      <Title>Ludu</Title>
      <Paragraph>Multi player game</Paragraph>
      <Button onPress={()=>{this.props.navigation.navigate('MultiPlayerInfoLudu',{gameTitle:'LUDU',Link:this.props.host+'ludu',pic:require('../../../assets/img/ludu.png'),road:'Ludu'})}} color="white" style={{backgroundColor:'blueviolet',color:'white',elevation:10}}>Play</Button>
    </Card.Content>
  </Card>
                </ScrollView>              
                <View style={{marginBottom:200}}></View>
                <View style={{width:SIZES.width+100,marginLeft:-50,height:100,backgroundColor:COLORS.redLight,zIndex:-1,position:'absolute',top:SIZES.height*0.5,transform: [{ skewY: '-20deg' }]}}></View>
                <View style={{width:SIZES.width+100,marginLeft:-50,height:100,backgroundColor:COLORS.redLight,zIndex:-1,position:'absolute',top:SIZES.height*0.8,transform: [{ skewY: '-20deg' }]}}></View>
            </ScrollView>
            <Bottom userId={this.props.userId} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headlines:{
        fontSize:20,fontWeight:'bold',marginLeft:20,color:COLORS.primaryDeep,letterSpacing:4,textTransform:'uppercase'
    }
})

const mapStateToProps = state => {
    return{
      host: state.auth.host,
      firstName: state.auth.firstName,
      lastName: state.auth.lastName,
      email: state.auth.email,
      profilePicture: state.auth.profilePicture,
      nid: state.auth.nid,
      userId:state.auth.userId,
      referenceCode:state.auth.referenceCode,
      phoneNumber:state.auth.phoneNumber
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
