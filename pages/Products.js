import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Card,Icon} from 'react-native-elements';
import TopNav from '../components/TopNav';

export default class Products extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = ({navigation}) =>{
        navigation.title='Products';
        navigation.icon='shopping-bag'
        return{
            header:<TopNav navigation={navigation}/>,
            // headerRight:<TopNavCart navigation={navigation}/>
        }
    }
    render(){
        return(
            <View >
                <Card
                    title='Fit Bit'
                    image={require('../assets/images/fitbit.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
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