import React,{Component} from 'react';
import {Icon,Header} from 'react-native-elements';
import {View,Button,StyleSheet,Text} from 'react-native'

export default class TopNav extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text:this.props.navigation.title, style: { color: '#fff' } }}
                rightComponent={{ icon: this.props.navigation.icon,type:'font-awesome', color: '#fff' }}
            />
        )
    }
}