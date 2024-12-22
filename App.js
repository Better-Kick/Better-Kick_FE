import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/login';
import Landing from './screens/landing';
import Signup from './screens/signup';
import Survay from './screens/survay';
import Result from './screens/result';
import Mypage from './screens/mypage';
import Main from './screens/main';
import Storage from './screens/storage';
import Detail from './screens/detail';
import { UserContext, IPContext } from './contexts';

import { useState } from 'react';

const Stack = createStackNavigator();

export default function App(){
  const [userId, settingId] = useState(null)
  const [IP, settingIP] = useState("172.16.21.136:8080");
  return (
    <UserContext.Provider value={{ userId, settingId }}>
    <IPContext.Provider value={{IP, settingIP}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
         <Stack.Screen
            name='Landing'
            component={Landing}
            options={{ headerShown: false }}
          />  
          <Stack.Screen
            name='Detail'
            component={Detail}
            options={{ headerShown: false }}
          /> 
        <Stack.Screen
            name='Signup'
            component={Signup}
            options={{ headerShown: false }}
          />
        <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Survay'
            component={Survay}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Result'
            component={Result}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Mypage'
            component={Mypage}
            options={{ headerShown: false }}
          />
        <Stack.Screen
            name='Main'
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Storage'
            component={Storage}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </IPContext.Provider>
    </UserContext.Provider>
  )
}