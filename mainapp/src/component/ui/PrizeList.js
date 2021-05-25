import * as React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity,Dimensions,Share } from 'react-native';
import { ListItem} from 'react-native-elements'

import BottomSheet from 'reanimated-bottom-sheet';
import {Icon,H3} from "native-base"
import {Divider} from "react-native-paper"
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../theme';

const {width} = Dimensions.get('window');
const Lists = [
    {
        name:'1st Prize',
        amount:500,
    },
    {
        name:'2nd Prize',
        amount:150,
    },
    {
        name:'3rd Prize',
        amount:100,
    },
    {
        name:'4-10',
        amount:75,
    },
    {
        name:'11-25',
        amount:50,
    }
]

export default function PrizeList() {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'http://spl.games',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: '#faf9f7',
        height: 450,
        zIndex:100,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
        borderTopLeftRadius: 35,
        borderTopRightRadius:35
      }}
    >
      <Icon 
      name="ios-reorder-two-outline" 
      style={{fontSize:40,color:'gray',alignSelf: 'center',}} 
      type="Ionicons"  
      />
      <Divider />
      <View style={{paddingLeft:10,paddingRight:10}}>
       <H3 style={{alignSelf:'center',fontSize:18,color:COLORS.redDeep,fontWeight:'bold'}}>Prize List</H3>
       {
    Lists.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <View  style={{alignSelf:'flex-end'}}>
          <Icon name="coins" type="FontAwesome5" style={{color:'orange',fontSize:20}} />
              <Text>
              {item.amount}
              </Text>
          </View>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
      </View> 
    </View>
  );
  const sheetRef = React.useRef(null);
  return (
    <>
      <BottomSheet
        style={{height:400}}
        ref={sheetRef}
        initialSnap={3}
        snapPoints={[250, 200, 150,50]}
        borderRadius={10}
        enabledBottomClamp={true}
        renderContent={renderContent}
      />
    </>
  );
}