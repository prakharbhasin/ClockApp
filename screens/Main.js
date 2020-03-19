import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            time:moment().format("h:mm A"),
            date:moment().format("LL"),
            day:moment().format("dddd")
        };
    }
    render() {
        setTimeout(() => {
           this.setState({
            time:moment().format("h:mm:ss"),
            date:moment().format("LL"),
            day:moment().format("dddd")
           }) 
        },1000) 
        return(
            <View>
                <Text style={{color:'#76E',fontSize:50,alignSelf:'center',lineHeight:80}}>
                    {this.state.time}
                </Text>
                <Text style={{color:'#3AA',alignSelf:'center',fontSize:19,lineHeight:27}}>
                    It's {this.state.day},
                </Text>
                <Text style={{color:'#F97',fontSize:18,alignSelf:'center',lineHeight:25}}>
                    {this.state.date}
                </Text>
                
            </View>
    
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main