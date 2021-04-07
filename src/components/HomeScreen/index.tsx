import  React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image,  ActivityIndicator, Dimensions} from 'react-native'
import { Button } from 'react-native-elements'
import { json, getAcessToken } from '../../constants/api'
const  HomeScreen = ({ navigation }) => {
  const [ imgData, setData ] = useState([])
  const [loaded , setLoaded] = useState(false)
  useEffect(() => {
    async function getImages() {
      let token = await getAcessToken()
      console.log(token)
      const imgData = await json('https://challenge.maniak.co/api/images', 'GET', token)
      console.log(imgData)
      if(imgData !== null ){
        setData(imgData)
        setLoaded(true)
      }
    }
    getImages() 
  },[])

  const logout = () => {
    navigation.navigate('LogOut')
  }
  const Item = ({item}) => {
    return(
        <View style={styles.listItem}>
          <Image source={{uri:item.image}}  style={styles.image} />
          <View style={{alignItems:"center", flex:1}}>
            <Text style={{fontWeight:"bold"}}>{item.title}</Text>
            <Text style={{textAlign:'left'}}>{item.description}</Text>
          </View>
        </View>      
    )
  }
    return (
    
         <View style={styles.container}>
            <View style={styles.header}>
              <View>
                <Text style={{ fontSize: 24}}>
                  Home
                </Text>
              </View>
              <View>
                <Button
                  title="Cerrar sesión"
                  onPress={() => logout()}
                  buttonStyle={{backgroundColor: "#30c23a"}}
                />
              </View> 
            </View>
          
          
            {loaded == true ? 
                <FlatList
                  data={imgData}
                  renderItem={({ item }) => <Item item={item}/>}
                  keyExtractor={item => item.id}
                  scrollEnabled={true}
                />
              :
                <ActivityIndicator style={styles.indicator} size="large" color="#00ff00" />  
            } 
          </View>  
        
    )
  }
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header :{
    marginTop: 10, 
    alignItems:'center', 
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight:10,
    marginBottom:20
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5,
    marginBottom: 10,
  },
  indicator: {
   flex: 1,
   alignItems : 'center'
  }, 
  image: {
    width:90, 
    height:90,
    borderRadius:60
  }
});