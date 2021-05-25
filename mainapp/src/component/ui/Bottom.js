import * as React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity,Dimensions,Share } from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';
import {Icon,H3} from "native-base"
import {Divider} from "react-native-paper"
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../theme';

const {width} = Dimensions.get('window')

export default function Bottom({userId}) {

  const onShare = async () => {
    try {
      const refCode = userId +669982;
      const result = await Share.share({
        message:
          'Download spl game & earn money from this game .Link: http://spl.games . Please use reference code '+refCode+' for extra benefits',
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
        zIndex:20,
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
      <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10}}>
        <View style={{alignItems:'center'}}>
          <Image source={require('../../../assets/img/share.png')} style={{height:100,width:150}} />
          <TouchableOpacity onPress={()=>{
            onShare()
          }} style={{marginTop:20}}
        >
        <LinearGradient colors={['#d84315', '#9f0000', '#ff7543']} style={{padding:5,width:90,flexDirection:'row',height:30,marginRight:20,alignItems:'center',borderRadius:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24}}>
            <Icon name="share" type="Entypo" style={{marginRight:10,fontSize:15,marginLeft:5,color:'white'}} />
  <Text style={{color:'#eee',fontSize:12}}>
   SHARE
  </Text>
</LinearGradient>
        </TouchableOpacity>
        </View>
        <View style={{width:width*0.4,paddingLeft:20}}>
          <H3 style={{fontWeight:'bold',color:COLORS.primary,alignSelf:'center',marginTop:20,marginBottom:20}}>Share and Earn</H3>
          <Text style={{alignSelf:'center',textAlign:'center',color:'#adadad',fontWeight:'bold'}}>Share our app and earn free coins</Text>
        </View>
      </View> 
    </View>
  );

  const sheetRef = React.useRef(null);
  return (
    <>
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={[450, 300, 200,100]}
        borderRadius={10}
        enabledBottomClamp={true}
        renderContent={renderContent}
      />
    </>
  );
}