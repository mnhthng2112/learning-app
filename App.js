import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './navigation/intro';
import Login from './navigation/login';
import Signup from './navigation/register/register';
import Home from './navigation/home/home';
import ContinueWithPhone from './navigation/register/continueWithPhone';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="ContinueWithPhone" component={ContinueWithPhone} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
