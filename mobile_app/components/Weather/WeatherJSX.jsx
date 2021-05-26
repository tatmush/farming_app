import React from "react";
import { StyleSheet } from 'react-native';
import { isSameDay, format } from "date-fns";
import imageDictionary from "../../utils/imageDictionary";
import Header from '../Header';
import Card from "./Card";
import {
    Container,
    CurrentDay,
    City,
    BigText,
    BigIcon,
    Temp,
    Description,
    Week,
} from "./Styles";

const WeatherJSX = ({ forecast: { list, timezone, location_name }, navigation }) => {

    const currentWeather = list.filter((daily) => {
        const now = new Date().getTime() + Math.abs(timezone * 1000);
        const currentDate = new Date(daily.dt * 1000);
        
        return isSameDay(now, currentDate);
    });

    const daysByHour = list.map((daily) => {
        const dt = new Date(daily.dt * 1000);
        return {
            date: dt,
            // weather: daily.weather[0].main,
            weather: daily.pop,
            name: format(dt, "EEEE"),
            temp: Math.round(daily.temp.day),
            icon:
                imageDictionary[daily.weather[0].icon] || imageDictionary["02d"],
        };
    });

    return (
        currentWeather.length > 0 && (
            <Container>
                <Header navigation={navigation} title='Weather'/>
                <CurrentDay >
                    {/* <City>{name}</City> */}
                    <City>{location_name}</City>
                    <BigText>Today</BigText>
                    <BigIcon
                        source={
                            imageDictionary[
                                currentWeather[0].weather[0].icon
                            ] || imageDictionary["02d"]
                        }
                    />
                        <Temp>{Math.round(currentWeather[0].temp.day)}°C</Temp>
                        <Description>
                            {currentWeather[0].weather[0].description}
                        </Description>
                    </CurrentDay>
                    <Week horizontal={true} showsHorizontalScrollIndicator={false}>
                        {daysByHour.map((day, index) => (
                            <Card
                                key={index}
                                icon={day.icon}
                                name={day.name.substring(0, 3)}
                                temp={day.temp}
                                weather={day.weather}
                            />
                        ))}
                    </Week>
            </Container>
        )
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
export default WeatherJSX;
