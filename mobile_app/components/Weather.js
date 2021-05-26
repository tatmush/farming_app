import React from 'react';
import useWeather from '../utils/useWeather';
import Loading from './Weather/Loading';
import WeatherJSX from './Weather/WeatherJSX';
import { Container } from './Weather/Styles';

export default function Weather({navigation}) {
    const weather = useWeather();
    return (
        <Container>
            {!weather ? <Loading navigation={navigation} /> : <WeatherJSX forecast={weather} navigation={navigation} />}
        </Container>
    );
}