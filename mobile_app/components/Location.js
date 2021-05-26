import React, { useState, useEffect } from 'react';
import {Text, FlatList, StyleSheet , View, RefreshControl, TouchableOpacity, ImageBackground, ToastAndroid } from 'react-native';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const image = require('../assets/location_2.jpg');

export default function Location({navigation}){

  const [selectedId, setSelectedId] = useState(null);

  const [district_data, setDistrictData] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
      
    // setRefreshing(true);

    // fetch('http://130.61.189.244:8000/api/districts/')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   setDistrictData(data);
    //   setRefreshing(false);    
    // })
    // .catch(err => {
    //   console.log(err);
    // })
      
  }, []);

  useEffect(() => {
    setRefreshing(true);

    //fetch('http://130.61.189.244:8000/api/districts/')
    fetch('http://10.0.2.2:8000/api/districts/')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setDistrictData(data);
      setRefreshing(false);    
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const storeData = async district => {
    let location = {
      longitude: `${district.longitude}`,
      latitude: `${district.latitude}`,
      location_name: `${district.district_name}`
    }

    try {
      const jsonValue = JSON.stringify(location);
      await AsyncStorage.setItem('@storage_Key_1', jsonValue);
      console.log('Saved!');
    }
    catch (err) {
      console.log(err)
    }
  };
    
  const Item = ({ district, style }) => (

    <TouchableOpacity onPress={() => { 
      navigation.setOptions({title: `Location / ${district.district_name}`});
      storeData(district);
      ToastAndroid.show(district.district_name + ' selected', ToastAndroid.SHORT);
      }} 
      style={[styles.item, style]}>

      <Text style={styles.title}>Region: {district.region_name.region_name}</Text> 
      <Text style={styles.title}>District: {district.district_name}</Text>
      <Text style={styles.title}>Province: {district.province}</Text>
      
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return (
      <View>
        <Item 
          district={item}
          onPress={() => setSelectedId(item.id)}
          styles={{ backgroundColor }} 
        />

        <Item 
          district={item}
          onPress={() => setSelectedId(item.id)}
          styles={{ backgroundColor }} 
        />

        <Item 
          district={item}
          onPress={() => setSelectedId(item.id)}
          styles={{ backgroundColor }} 
        />

        <Item 
          district={item}
          onPress={() => setSelectedId(item.id)}
          styles={{ backgroundColor }} 
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.backgroundImage}>
        <FlatList
          data={district_data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={<Header navigation={navigation} title='Location'/>}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }
        />
      </ImageBackground>
    </View>   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#1B2419',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15
  },
  title: {
    fontSize: 15,
    color: '#fff'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
});