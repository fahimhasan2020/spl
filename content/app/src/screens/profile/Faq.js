import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, Accordion,Icon } from "native-base";

export class Faq extends Component {
    state={

    }

    dataArray = [
        { title: "Ownership", content: "Super premier league is a multiplayer gaming platform. You can earn money from this app. Every game and their code is belongs to the spl property." },
        { title: "Copyright claim", content: "Lorem ipsum dolor sit amet" },
        { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
      ];

    render() {
        return (
            <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <Content style={{paddingTop:10}} padder>
              <Accordion dataArray={this.dataArray} expanded={0}/>
            </Content>
          </Container>
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