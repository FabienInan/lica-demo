import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    margin: 8px;
    height: 216px;
    width: 148px;
    border-radius: 7px;
    box-shadow: 0.3px 0.3px 0.3px 1px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const Date = styled.div`
    color: gray;
    margin: 0 8px;
    line-height: 40px;
    font-size: 16px;
`;

const Temperature = styled.div`
    font-size: 24px;
`;

const WeatherIcon = styled.img`
    width: 80px;
    height: 80px;
    margin: auto;
    display: block;
`;

type WeatherCardProps = {
    date: number;
    weatherType: string;
    temperatureInCelsius: number;
}

const WeatherCard = (props: WeatherCardProps) => {
    return (
        <CardContainer>
            <Date>{props.date}</Date>
            <WeatherIcon src={require(`../assets/${props.weatherType}.png`).default} alt={props.weatherType}/>
            <Temperature>{props.temperatureInCelsius}°C</Temperature>
        </CardContainer>
    )
};

export default WeatherCard;