import { useState, useEffect } from 'react';
import axios from 'axios';
import { storeWeather, getWeather } from './storeWeather';
import { useIsFocused } from '@react-navigation/native';
import useGeoLocation from './useGeolocation';

// fetch api with axios
const url = 'https://api.openweathermap.org/data/2.5'
// const url = 'http://10.0.2.2:8000/'

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
    limit: '5mb',
    extended: true
});


export default function useWeather() {
    const [weather, setWeather] = useState(null);
    const API_KEY = 'cf7c4f8bcef46a59a6afe162fdfb5ae8';
    // const [location_name, setLocationName] = useState('Harare');
    // const [lat, setLat] = useState('17.824858');
    // const [lon, setLon] = useState('31.0492');

    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');

    let isFocused = useIsFocused();
    
    // const removeValue = async () => {
    //     try {
    //       await AsyncStorage.removeItem('@storage_Key');

    //     } catch(e) {
    //       console.log('Failed to clear Storage');
    //     } 
    //     console.log('Done.')
    //   }

    // const getData = async () => {
    //     try {
    //       return await AsyncStorage.getItem('@storage_Key_1')
    //     } 
    //     catch (err) {
    //       console.log(err)
    //     }
    // }

    // if (false) {

    //     console.log('Using wffwxcr');
    //     console.log('Using wffwxcr');
    //     console.log('Using wffwxcr');

    //     getData()
    //     .then(res => {
    //         const location = JSON.parse(res);
    //         console.log(location);
    //         setLat(parseFloat(location.latitude));
    //         setLon(parseFloat(location.longitude));
    //     })
    //     .then(() => {
    //         fetchAPI();
            
    //     })
    //     .catch(err => {
    //        console.log(err);
    //        alert('Error collecting location');
    //     });

    //     isFocused = false;
    // }

    const fetchAPI = async (lat, lon, location_name) => {
        console.log('+++++++++++++++++++++++++');
        console.log('Trying to fetch here');
        try {
            const endpoint = `/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`;
            const res = await callAPI.get(endpoint);
            const data = await storeWeather(filterData(res.data, location_name));
            console.log(data);
            setWeather(data);
            // latLon = null;
            
            // fetch(`http://10.0.2.2:8000/lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`)
            // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`)
            // .then(res => res.json())
            // .then(data => {
            //     const data_ = await storeWeather(filterData(data));
            //     console.log(data_)
            //     setWeather(data_);
            // })
            // .catch(err => console.log(err));

        } catch (err) {
            console.log(err);
            console.log('API connection failed');
            const data = await getWeather();
            setWeather(data);
            // latLon = null;
        }
    };

    
    const latLon = useGeoLocation();
    // let latLon = useGeoLocation();

    useEffect(() => {
        
        // removeValue()
        // .then(res => {
        //     console.log(res);
        //     console.log('Been "ere done "at');
        // })
        // .catch(err => console.log(err));

        // getData()
        // .then(res => {
        //     const location = JSON.parse(res);
        //     console.log(location);
        //     setLocationName(location.location_name);
        //     setLat(parseFloat(location.latitude));
        //     setLon(parseFloat(location.longitude));
        // })
        // .then(() => {
        //     console.log('Before fetching');
        //     fetchAPI(lat, lon);
        // })
        // .catch(err => {
        //    console.log(err);
        //    alert('Error collecting location');
        // });

        if (latLon) {
            fetchAPI(...latLon);
        }

    },[latLon]);

    return weather;
}

const filterData = (rawData, location_name) => {
    return {
        id: rawData.current.weather.id,
        name: rawData.timezone,
        country: 'rawData.sys.country',
        timezone: rawData.timezone_offset,
        coord: {
            lat: rawData.lat,
            lon: rawData.lon,
        },
        list: rawData.daily,
        location_name: location_name
    };
};