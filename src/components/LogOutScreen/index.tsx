import  React, { useState, useEffect } from 'react'
import { Text , StyleSheet, View, Dimensions,} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Avatar  } from 'react-native-elements'
const windowWidth = Dimensions.get('window').width


const  LogOutScreen = ({ navigation }) => {
  
  useEffect(() => {
    async function logOut() {
        try {
            await AsyncStorage.removeItem('token');
            return true;
        }
        catch(exception) {
            return false;
        }
      }
      logOut() 
      setTimeout (() =>{
        navigation.navigate('Login')
      },2000)
  }, [])

    return (
      <View style={styles.container}>
        <Text style={styles.Text3}>
            Hola, esto no es un adios,  esperamos tu regreso... 
            {/* o que me contacten de nuevo, diciendo que pase la prueba  :(  */} 
        </Text>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri:
              'https://image.shutterstock.com/image-vector/engaging-content-marketing-success-mix-600w-626710109.jpg',
          }}
          >
        </Avatar>
      </View>
    );
  }
const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: 'center', 
     justifyContent: 'space-around',
     backgroundColor: '#fff'
    },
    Text3 : {
        fontSize :20,
        color : '#a6a698'
      }
  });
export default LogOutScreen