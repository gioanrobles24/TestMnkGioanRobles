import  React, { useState, useEffect } from 'react'
import { TextInput, StyleSheet, View, Dimensions, Alert,Text } from 'react-native'
import { Button ,Avatar  } from 'react-native-elements'
import { json, SetAccessToken, getAcessToken } from '../../constants/api'
const windowWidth = Dimensions.get('window').width


const  LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
    
  useEffect(() => {
      async function getToken() {
        let isLogged = await getAcessToken()
        console.log(isLogged)
        if(isLogged !== null ){
          navigation.navigate('Home')
        }
      }
    getToken()
  }, [])

  const logInAction = async () => {
    try {
      const result = await json('https://challenge.maniak.co/api/login', 'POST', '', {
        username : email,
        password : password
      })
      console.log('result', result)
     if(result) {
        await SetAccessToken(result.token)
        const token = getAcessToken()
        if(token !== null){
          navigation.navigate('Home')
        }
     } else{
       Alert.alert('usuario o contraseña incorrectos')
     }

    } catch(e) {
      console.log(e)
      Alert.alert('a ocurrido un problema intente de nuevo')
    }
  } 
 

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.Text1}>
                Login
            </Text>
            <Text style={styles.Text2}>
                Por favor inicia sesión
           </Text>
        </View>
        <View>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            placeholder='inserte su correo electronico'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder='inserte su contraseña'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Button
          title="Inicia sesión"
          onPress={() => logInAction()}
          buttonStyle={{backgroundColor: "#30c23a", marginTop: 20, borderRadius:50}}
        />
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri:
              'https://image.shutterstock.com/shutterstock/photos/1395032483/display_1500/stock-vector-social-media-interaction-social-network-communication-on-mobile-app-hands-holding-smartphone-with-1395032483.jpg',
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
  header :{
    alignItems:'center',
    textAlign:'center' 
  },
  input: {
      width: windowWidth -50,
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderBottomColor: 'grey',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor : 'transparent'
    },
    Text1 : {
      fontSize: 34
    },
    Text2 : {
      fontSize : 14,
      color : '#a6a698'
    }
  });
export default LoginScreen