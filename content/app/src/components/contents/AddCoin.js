import React, { Component } from 'react'
import { View,StyleSheet,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { COLORS } from '../theme/colors';

import {Icon,H3} from "native-base"





export class AddCoin extends Component {
    constructor(props) {
        super(props);
      }      
    render() {
        return (
            <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                    <Icon name="dollar" type="FontAwesome" style={{color:'white',fontSize:20}}/>
                    </TouchableOpacity> 
                           
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        position:'absolute',
        alignItems:'center',
        
    },
    button:{backgroundColor:COLORS.primaryCore,
    elevation:10,
    alignItems:'center',
    justifyContent:'center',
    width:60,height:60,
    borderRadius:36,
    position:'absolute',
    top:-60,
    overflow:'visible',
    margin:10,
},
})


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCoin)
