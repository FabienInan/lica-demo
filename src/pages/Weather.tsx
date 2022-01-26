import * as moment from 'moment';

import React, { useEffect, useState } from 'react';

import WeatherCard from '../components/WeatherCard';
import { getWeatherForACity } from '../services/WeatherService';
import styled from 'styled-components';

const WeatherContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Weather = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [weatherForecastArray, setWeatherForecastArray] = useState([]);

    useEffect(() => {
        getWeatherForACity('Marseille', 'fr')
            .then((data) => {
                setWeatherForecastArray(data?.list?.map(
                    (item: any) => {
                        return {
                            date: moment.unix(item.dt).format('Do MMM YYYY HH:mm'),
                            temperatureInCelsius: Math.round(item.main.temp), 
                            weatherType: item.weather[0].main.toLowerCase(), 
                        }
                    }
                ));
            })
            .finally(() => setIsLoading(false));
    }, []);
    
    return (
        <WeatherContainer>
            {   !isLoading &&
                weatherForecastArray.map(
                    (weatherForecast) => <WeatherCard {...weatherForecast} ></WeatherCard>)
            }
        </WeatherContainer>
    )
}

export default Weather;
