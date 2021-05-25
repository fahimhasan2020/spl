import React, { Component } from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Svg, { Path } from 'react-native-svg';
import {createStackNavigator,TransitionPresets,CardStyleInterpolators} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator,BottomTabBar} from "@react-navigation/bottom-tabs"
import {Start,Login,FootBall,Home,Chess,Ludu,Ludus,Pool,TransectionHistory,ReferenceHistory,GameHistory,PrivacyPolicy,MultiplayerInfoLudu,PaymentPolicy,Settings,Info,Faq,Carrom,Profile,More,TermsandConditions,AddCoins,SinglePlayerInfo,MultiplayerInfo,Bubble,Runner,HowToCashIn,HowToPlay,HowToEarn,FruitChop, MultiplayerInfoPlay,Threepatti, EditProfile} from './AllFiles'
import { isIphoneX } from 'react-native-iphone-x-helper';
import {Icon} from "native-base"
import {COLORS} from "../component/theme/"
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
const Tab = createBottomTabNavigator();
const TabBarCustomButton = ({ accessibilityState, children, onPress}) => {
    var isSelected = accessibilityState.selected


    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    <Svg
                        width={90}
                        height={75}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.redDeep}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.redDeep }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white,
                        elevation:20
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.redDeep,
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}
const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: COLORS.redDeep
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }

}


function BottomTabs() {
    return (
      <Bottom.Navigator  tabBarOptions={{
        showLabel: false,
        style: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            borderTopWidth: 0,
            backgroundColor: "transparent",
            elevation: 0
        },
        
    }}
    tabBar={(props) => <CustomTabBar props={props} />}>
       
        <Bottom.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                            <Icon name="home" style={{fontSize:25,
                                color:focused ? COLORS.redDeep : COLORS.white}} />
                                </View>
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                />
         <Bottom.Screen
                    name="AddCoin"
                    component={AddCoins}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                            <Icon name="coins" type="FontAwesome5" style={{fontSize:25,color:focused ? COLORS.redDeep : COLORS.white}} />
                                </View>
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                />
            <Bottom.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                            <Icon name="user" type="FontAwesome" style={{fontSize:25,color:focused ? COLORS.redDeep : COLORS.white}} />
                                </View>
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                />
                <Bottom.Screen
                    name="More"
                    component={More}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                            <Icon name="menu" type="Entypo" style={{fontSize:25,color:focused ? COLORS.redDeep : COLORS.white}} />
                                </View>
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                />
      </Bottom.Navigator>
    );
  }


const defaultStackOptions = {
    headerShown:false,
    gestureEnabled:true,
    gestureDirection:'horizontal',
    cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
}

const defaultStackOptionsGame = {
    headerShown:false,
}

export class Index extends Component {
    render() {
        if(this.props.loggedIn){
            return(
                <NavigationContainer>
                    <Stack.Navigator >
                        <Stack.Screen name="MainPage" component={BottomTabs} options={defaultStackOptions} />
                        <Stack.Screen name="Settings" component={Settings}  />
                        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}  />
                        <Stack.Screen name="PaymentPolicy" component={PaymentPolicy}  />
                        <Stack.Screen name="TermsAndConditions" component={TermsandConditions}  />
                        <Stack.Screen name="HowToPlay" component={HowToPlay}  />

                        <Stack.Screen name="TransectionHistory" component={TransectionHistory}  />
                        <Stack.Screen name="ReferenceHistory" component={ReferenceHistory}  />
                        <Stack.Screen name="GameHistory" component={GameHistory}  />
                        <Stack.Screen name="HowToEarn" component={HowToEarn}  />
                        <Stack.Screen name="HowToCashIn" component={HowToCashIn}  />
                        <Stack.Screen name="Info" component={Info}  />
                        <Stack.Screen name="Faq" component={Faq}  />
                        <Stack.Screen name="EditProfile" component={EditProfile} options={defaultStackOptions} />
                        <Stack.Screen name="SinglePlayer" component={SinglePlayerInfo} options={defaultStackOptions} />

                        <Stack.Screen name="MultiPlayerInfo" component={MultiplayerInfo} options={defaultStackOptions} />

                        <Stack.Screen name="MultiPlayerInfoPlay" component={MultiplayerInfoPlay} options={defaultStackOptionsGame} />

                        <Stack.Screen name="MultiPlayerInfoLudu" component={MultiplayerInfoLudu} options={defaultStackOptionsGame} />

                        <Stack.Screen name="Bubble" component={Bubble} options={defaultStackOptions} />

                        <Stack.Screen name="Runner" component={Runner} options={defaultStackOptions} />
                        <Stack.Screen name="FruitChop" component={FruitChop} options={defaultStackOptions} />
                        <Stack.Screen name="FootBall" component={FootBall} options={defaultStackOptions} />

                        <Stack.Screen name="Chess" component={Chess} options={defaultStackOptions} />
                        <Stack.Screen name="3Patti" component={Threepatti} options={defaultStackOptions} />
                        <Stack.Screen name="Ludu" component={Ludu} options={defaultStackOptionsGame} />
                        <Stack.Screen name="Ludus" component={Ludus} options={defaultStackOptions} />
                        <Stack.Screen name="Pool" component={Pool} options={defaultStackOptions} />
                        <Stack.Screen name="Carrom" component={Carrom} options={defaultStackOptions} />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        }else{
            return(
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Start" component={Start} options={defaultStackOptions} />
                        <Stack.Screen name="Login" component={Login} options={{ headerShown:false}} />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        }

    }
}

const mapDispatchToProps = dispatch => {
    return{
        // 
    };

};
const mapStateToProps = state => {
    return {
      host: state.auth.host,
      loggedIn:state.auth.loggedIn
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index)
