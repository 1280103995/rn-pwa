import React from 'react';
import {Button, Text, View} from 'react-native';
import './App.css';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// @ts-ignore
function HomeScreen({navigation}) {
  console.log('Home Page')
  return(
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text  style={{color: 'white'}}>HomePage</Text>
      <Button title={'go to Detail'} onPress={()=>navigation.navigate('Detail')}/>
    </View>

  );
}

// @ts-ignore
function DetailScreen({navigation}) {
  console.log('Detail Page')
  return(
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={{color: 'white'}}>DetailPage</Text>
      <Button title={'go back'} onPress={navigation.goBack}/>
    </View>
  );
}

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Detail'} component={DetailScreen} />
    </Stack.Navigator>
  );
};
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'black',//fix page flashing white
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
