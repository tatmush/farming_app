import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl, StyleSheet, ImageBackground, Text } from 'react-native';
import Header from './Header';
import useGeoLocation from '../utils/useGeolocation';
import {Card} from 'react-native-shadow-cards';

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
}

export default function FarmingInfo({navigation}){
    const [district, setDistrictInfo] = useState([{
        "district_name": "District Name",
        "province": "Province",
        "region_name": {
            "region_name": "Region Name",
            "annual_rainfall": "Annnual Rainfall mm",
            "farming_system": "Suitable for farming system {dairy farming forestry, tea, coffee, fruit, beef and maize production}",
            "len_of_growing_period": "Length of growing period in days",
            "altitute": "Altitude in metres",
            "erosion_hazard": "erosion hazard",
            "dominant_soil": "type of dominant soil",
            "ph_top_soil": "ph of top soil",
            "water_holding_capacity": "water holding capacity"
        }
    }]);

    const latLon = useGeoLocation();

    useEffect(() => {
        
        console.log('[+] Farming Info: UseEffect');

        if(latLon){
            console.log('Do some fetching');
            fetchAPI(latLon[2]);
        }
                
    }, [latLon])

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        
        setRefreshing(true);
        if(latLon){
            console.log('Do some fetching');
            fetchAPI(latLon[2]);
        }
            
        wait(2000).then(() => setRefreshing(false));
      }, []);

    const fetchAPI = (location_name) => {
        // fetch(`http://130.61.189.244:8000/api/districts/?district_name=${location_name}`)
        fetch(`http://10.0.2.2:8000/api/districts/?district_name=${location_name}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDistrictInfo(data)
        })
        .catch(err => console.log(err));
    }

    return (
        <ScrollView 
            style={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <Header navigation={navigation} title='Farming Info'/>
            <ImageBackground 
                source={require('../assets/farming_info.jpg')}
                style={styles.image} 
            >
            
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>District: {district[0].district_name}</Text>
                </Card>
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>Region: {district[0].region_name.region_name}</Text>
                </Card>
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>Province: {district[0].province}</Text>
                </Card>
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>Farming System:</Text>
                    <Text>{district[0].region_name.farming_system}</Text>
                </Card>
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>Rainfall:</Text>
                    <Text>{`${district[0].region_name.annual_rainfall} m`}</Text>
                </Card>
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>Length of Growing Period:</Text>
                    <Text>{`${district[0].region_name.len_of_growing_period} days`}</Text>
                </Card>
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>Altitude:</Text>
                    <Text>{`${district[0].region_name.altitute} m`}</Text>
                </Card>
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>Erosion Hazrd:</Text>
                    <Text>{`${district[0].region_name.altitute} m`}</Text>
                </Card>
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>Dorminant Soil</Text>
                    <Text>{district[0].region_name.dominant_soil}</Text>
                </Card>
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>pH of Top Soil</Text>
                    <Text>{district[0].region_name.ph_top_soil}</Text>
                </Card>
                <Card style={{padding: 10, margin: 10}}>
                    <Text style={{fontSize: 24}}>Water Holding Capacity</Text>
                    <Text>{district[0].region_name.water_holding_capacity}</Text>
                </Card>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'palevioletred'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
});