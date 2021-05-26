import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const image = require('../assets/drawer_background.jpg');

export default function About(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={styles.drawerContentScrollView}
      >
      <ImageBackground source={image} style={styles.imageBackground}>
      </ImageBackground>
      <View style={styles.overlayView} />
      <Ionicons
          style={{textAlign: "center",}}
          name='person-circle-outline'
          size={112}
          color={'#fff'}
        />
      </View>

    <DrawerItemList {...props} />

    <DrawerItem label='Reset' inactiveTintColor='#fff'
    
      onPress={() => {
        alert('Resetting... Complete!');
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }}

      icon={({focused, size}) => (
        <Ionicons
          name='refresh-circle-outline'
          size={size}
          color={focused ? '#0e7ffc' : '#fff'}
        />  
      )}
    />
  </DrawerContentScrollView>
  );
}

const styles=StyleSheet.create({
  imageBackground: { 
    ...StyleSheet.absoluteFillObject, 
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    justifyContent: 'center'
  },
  overlayView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  drawerContentScrollView: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  }
})