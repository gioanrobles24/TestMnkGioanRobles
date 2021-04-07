
 import 'react-native-gesture-handler';
 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native'
 import HomeScreen from './src/components/HomeScreen'
 import LoginScreen from './src/components/LoginScreen'
 import LogOutScreen from './src/components/LogOutScreen'
 import { SafeAreaProvider } from 'react-native-safe-area-context'
 import { createStackNavigator } from '@react-navigation/stack';

  const Stack = createStackNavigator();

 const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LogOut" component={LogOutScreen} />
    </Stack.Navigator>
  );
}

 const App = () => {
   return (
      <SafeAreaProvider>
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
      </SafeAreaProvider>
   )
 }
 export default App;
