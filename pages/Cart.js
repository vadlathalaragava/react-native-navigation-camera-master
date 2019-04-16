import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

export default class Cart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Button title='Checkout' onPress={()=>this.props.navigation.navigate('Invoice')}/>
                <Text style={styles.welcome}>Cart</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});