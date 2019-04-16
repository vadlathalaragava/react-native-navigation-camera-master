import React,{Component} from 'react';
import {Icon} from 'react-native-elements';
import {View,Button,StyleSheet,Text} from 'react-native'

export default class TopNavCart extends Component{
    render(){
        return(
            <View>
                <Icon
                raised
                name='shopping-bag'
                type='font-awesome'
                color='#f50'
                onPress={()=>this.props.navigation.navigate('Cart')} />
            </View>
        )
    }
}