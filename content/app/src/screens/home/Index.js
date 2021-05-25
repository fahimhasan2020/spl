import React, { Component } from 'react';
import {TouchableOpacity,View,Image,Text,Dimensions,StatusBar,Button } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {fromRight } from 'react-navigation-transitions';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator,useNavigation} from "react-navigation";
import {Loading,Login,Register,Forgot,Pool,Carrom,FrontPage,Bubble,AddCoin,Home,Coins,Contents,Profile,More,Settings,Info,Faq,EditProfile,Singledemo,MultiDemo,Tournament,AccountIntegrationk,EarnFromGame,CoinSellOut,SingleGames,GameView} from "../imports.js"

import Svg, { Path } from 'react-native-svg';
import { createBottomTabNavigator,BottomTabBar } from 'react-navigation-tabs';
import { COLORS } from '../../components/theme/colors';
const {width} = Dimensions.get('window')


class Index extends Component {

    componentDidMount(){
        console.disableYellowBox = true;
    }

    render() {
        if (this.props.loggedIn === false){
            return <NonLoggedIn />
        }else {
                return <LoggedIn />

        }
    }
}
/*Non authenticated routes*/
const mainStack = createStackNavigator({
    Loader:{screen:Loading},
    MainPage:{screen:FrontPage},
    Login:{screen:Login},
    Register:{screen:Register},
    Forgot:{screen:Forgot},
},{
    headerMode:'none',
    initialRouteName:'Loader',
    transitionConfig: () => fromRight(500),
});
const NonLoggedIn = createAppContainer(mainStack);
/*Authenticated routes*/

/*Authenticated routes*/
const SwitchTwoNavigation = createBottomTabNavigator({
    Home:{
        screen: Home,
        showLabel:false,
        navigationOptions:{
            showLabel:false,
            tabBarIcon:({tintColor})=>(
                <View>
                    <Icon name="home" style={{color:tintColor}} size={20} />
                </View>
            ),
        }
    },
    History:{
        screen:Contents,
        showLabel:false,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <View>
                    <Icon name="history" style={{color:tintColor}} size={20} />
                </View>
            )
        }
    },
    AddCoin:{
        screen:Coins,
        showLabel:false,
        navigationOptions:{
            title:'Add Coin',
            tabBarIcon:({tintColor})=>(
                  <AddCoin />
                   )            
        }
    },  
    Profile:{
        screen:Profile,
        showLabel:false,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <View>
                    <Icon name="user-o" style={{color:tintColor}} size={20} />
                </View>
            )
        }
    },  
    More:{
        screen:More,    
        showLabel:false,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <View>
                    <Icon name="navicon" style={{color:tintColor}} size={20} />
                </View>
            )
        }
    },
},
{
  initialRouteName: 'Home',
  tabBarOptions:{showLabel:true,
    activeTintColor: COLORS.primaryCore,
    inactiveTintColor: '#bdbdbd'},
  barStyle: { backgroundColor: '#ffffff'}
});
const StackTwo = createStackNavigator({
    Home:{screen: SwitchTwoNavigation,navigationOptions:({navigation})=>({
        headerLeft: <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../../assets/icon.png')} style={{width:150,height:150,marginTop:150,marginLeft:100}} />
            </TouchableOpacity>,
            headerStyle:{
                height:10,
                backgroundColor:COLORS.primary,
                marginTop:-70,
                marginBottom:40
            },
        headerBackground: (
            <View style={{width:width}}>
                <Svg
               height="210"
               width={width}
               viewBox="0 0 1440 320"
               style={{ position: 'absolute', top: 0,zIndex:100 }}
             >
                <Path  fill={'#152E12'} d={'M0,192L80,197.3C160,203,320,213,480,192C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'} />
             </Svg>
            </View>
           ),
        })
    },
    EditProfile:{screen:EditProfile,navigationOptions:({navigation})=>({
        headerTitle:'Basic Info',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    AccountPolicy:{screen:Info,navigationOptions:({navigation})=>({
        headerTitle:'Info',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    PrivacyPolicy:{screen:Faq,navigationOptions:({navigation})=>({
        headerTitle:'Faq',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    Settings:{screen:Settings,navigationOptions:({navigation})=>({
        headerTitle:'Settings',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    SinglePlayer:{screen:Singledemo,navigationOptions:({navigation})=>({
        headerTitle:'Single Player Mode',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    MultiPlayer:{screen:MultiDemo,navigationOptions:({navigation})=>({
        headerTitle:'Multiplayer Player Mode',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    Tournament:{screen:Tournament,navigationOptions:({navigation})=>({
        headerTitle:'Tournament Mode',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    AccountIntegration:{screen:AccountIntegrationk,navigationOptions:({navigation})=>({
        headerTitle:'Add Account',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    EarnFromGame:{screen:EarnFromGame,navigationOptions:({navigation})=>({
        headerTitle:'Single Player Mode',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    CoinSellout:{screen:CoinSellOut,navigationOptions:({navigation})=>({
        headerTitle:'Single Player Mode',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    SingleGames:{screen:SingleGames,navigationOptions:({navigation})=>({
        headerTitle:'Single Player',
        headerTintColor:COLORS.primaryCore,
        headerStyle:{height:50,marginTop:-30}
    })},
    GameView:{screen:GameView,navigationOptions:({navigation})=>({
        headerMode:'none',
        headerShown:false,
    })},
    Bubble:{screen:Bubble,navigationOptions:({navigation})=>({
        headerMode:'none',
        headerShown:false,
    })},
    Carrom:{screen:Carrom,navigationOptions:({navigation})=>({
        headerMode:'none',
        headerShown:false,
    })},
    Pool:{screen:Pool,navigationOptions:({navigation})=>({
        headerMode:'none',
        headerShown:false,
    })},
},{
    initialRouteName:'Home',
    transitionConfig: () => fromRight(500),
    swipeEnabled:true, 
});

const LoggedIn = createAppContainer(StackTwo);
/*Authenticated routes*/


const mapStateToProps = (state) => ({
    loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = {
    //
};
export default connect(mapStateToProps, mapDispatchToProps)(Index)