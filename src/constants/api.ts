import AsyncStorage from '@react-native-async-storage/async-storage'

export let getAcessToken = async () => {
 let token: any = await AsyncStorage.getItem('token')
  return token
}

export const json = async <T = any>(uri: string, method : string = 'GET', authToken?: string, body? : {} ) =>{
  /*  if(authToken){
    let headers : any = {
        'Content-type' : 'application/json',
        'Authorization' : 'Bearer '+authToken
    }
   } else {
    let headers : any = {
        'Content-type' : 'application/json',
        'Authorization' : 'Bearer '+authToken
    }
   } */
   let headers : any = {
    'Content-type' : 'application/json',
    'Authorization' : 'Bearer '+authToken
   }
    try {
        let result = await fetch(uri, {
           method,
           headers,
           body: JSON.stringify(body) 
        })
        if(result.ok){
            return <T>(await result.json())
        }else {
            return false
        }
    } catch(e) {
        console.log(e)
    }
}

export const SetAccessToken = async (token : string) => {
    await AsyncStorage.setItem('token', token)
      
}