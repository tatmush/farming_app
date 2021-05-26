import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useGeoLocation(lat, lon) {
    const [latLon, setLatLon] = useState(null);

    const getData = async () => {
        try {
          return await AsyncStorage.getItem('@storage_Key_1')
        } 
        catch (err) {
          console.log(err)
        }
    }

    useEffect(() => {
        console.log('[+] useGeolocation: inside useEffect Hook.');

        getData()
        .then(res => {
            const location = JSON.parse(res);
            console.log(location);
            setLatLon([location.latitude, location.longitude, location.location_name]);
        })
        .catch(err => {
           console.log(err);
           alert('Error collecting location');
        });


        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         // setLatLon([position.coords.latitude, position.coords.longitude]);
        //         setLatLon([17.8216, 31.0492]);
        //         // console.log(position.coords.latitude);
        //     },
        //     (err) => {
        //         console.log(err);
        //     }
        // );
    }, []);

    // return [17.8216, 31.0492];
    return latLon
}