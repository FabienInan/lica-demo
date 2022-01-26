import env from 'react-dotenv';

const baseUrl = 'https://api.openweathermap.org/data/2.5/'; 

const apiKey = env.OPEN_WEATHER_KEY;

export const getWeatherForACity = (city, country) =>
    fetch(`${baseUrl}/forecast?q=${city},${country}&units=metric&APPID=${apiKey}`)
        .then(response => response.json());

export const getAirPollutionForCoordinates = (lat, lon) =>
    fetch(`${baseUrl}/air_pollution?lat=${lat}&lon=${lon}&APPID=${apiKey}`)
        .then(response => response.json());