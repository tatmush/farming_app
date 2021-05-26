import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Weather from './components/Weather';
import Climate from './components/Climate';
import FarmingInfo from './components/FarmingInfo';
import Crop from './components/Crop';
import Location from './components/Location';
import About from './components/About';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName='Home'
        drawerStyle={{backgroundColor: '#1B2419'}}
        drawerContent={props => <About {...props} />}
        backBehavior='history'
        drawerContentOptions={{
          labelStyle: {
            color: 'white'
          }
        }}
      >
      <Drawer.Screen name='Home' component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name='home-outline'
              size={size}
              color={focused ? '#0e7ffc' : '#fff'}
            />  
          )
        }} 
      />
      <Drawer.Screen name='Weather' component={Weather} 
        options={{
          title: 'Weather',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name='thunderstorm-outline'
              size={size}
              color={focused ? '#0e7ffc' : '#fff'}
            />  
          )
        }}
      />
      <Drawer.Screen name='Climate' component={Climate} 
        options={{
          title: 'Climate',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name='sunny-outline'
              size={size}
              color={focused ? '#0e7ffc' : '#fff'}
            />  
          )
        }}
      />
      <Drawer.Screen name='FarmingInfo' component={FarmingInfo}
        options={{
          title: 'Farming Info',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name='cog-outline'
              size={size}
              color={focused ? '#0e7ffc' : '#fff'}
            />  
          )
        }}
      />
      <Drawer.Screen name='Crop' component={Crop} 
        options={{
          title: 'Crop',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name='leaf-outline'
              size={size}
              color={focused ? '#0e7ffc' : '#fff'}
            />  
          )
        }}
      />
      <Drawer.Screen name='Location' component={Location} 
        options={{
          title: 'Location',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name='location-outline'
              size={size}
              color={focused ? '#0e7ffc' : '#fff'}
            />  
          )
        }}
      />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
