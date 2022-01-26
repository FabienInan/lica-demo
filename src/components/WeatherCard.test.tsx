import React from 'react';
import WeatherCard from './WeatherCard';
import renderer from 'react-test-renderer';

it('should render properly the Weather Card', () => {
    const props = {    
        date: 1234567,
        weatherType: 'clear',
        temperatureInCelsius: 23,
    } 
    const tree = renderer.create(<WeatherCard date={props.date} weatherType={props.weatherType} temperatureInCelsius={props.temperatureInCelsius}/>).toJSON();
    expect(tree).toMatchSnapshot();
});