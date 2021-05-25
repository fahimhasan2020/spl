import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { Container } from "native-base";


export class Faq extends Component {
    state={

    }

    dataArray = [
        { title: "Ownership", content: "Super premier league is a multiplayer gaming platform. You can earn money from this app. Every game and their code is belongs to the spl property." },
        { title: "Copyright claim", content: "SPL is copyright by bangladeshi tradelicence. All the policies and terms are based on the system" },
        { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
      ];

      lapsList() {
          this.dataArray.map((data) => {
          return (
            <View>
              <Text>{data.title}</Text>
              <Text>{data.content}</Text>
            </View>
          )
        })
    
    }

    render() {
        return (
            <View>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
           {this.lapsList()}
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eee'
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Faq)