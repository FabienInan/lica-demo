import React, { useEffect, useState } from 'react';

import AirComponentCard from '../components/AirComponentCard';
import { getAirPollutionForCoordinates } from '../services/WeatherService';
import styled from 'styled-components';

const qualityIndexMapping = [ 
    { color: 'green', value: 'Bonne'},
    { color: 'blue', value: 'Correct'},
    { color: 'orange', value: 'Moyenne'},
    { color: 'red', value: 'Mauvaise'},
    { color: 'black', value: 'Très mauvaise'}
];

const componentsMapping = [
    'Monoxyde de carbone',
    'Ammoniaque',
    'Monoxyde d\'azote',
    'Dioxyde d\'azote',
    'Ozone',
    'Particules fines',
    'Particules de charbon',
    'Dioxyde de soufre',
];

const AirQualityContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 16px;
`;

const GlobalAirQualityContainer = styled.div<{globalQualityIndex: number}>`
    width: 100%;    
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: ${({ globalQualityIndex}) => qualityIndexMapping[globalQualityIndex - 1].color};
`;

const AirQuality = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [globalAirQuality, setGlobalAirQuality] = useState(5);
    const [componentsAirQuality, setComponentsAirQuality] = useState({});

    useEffect(() => {
        getAirPollutionForCoordinates('43.3', '5.4')
            .then((data) => {
                setGlobalAirQuality(parseInt(data.list[0]?.main.aqi));
                setComponentsAirQuality(data.list[0]?.components);
            })
            .finally(() => setIsLoading(false));
    }, []);
    
    return (
        <AirQualityContainer>
            {!isLoading && 
            <GlobalAirQualityContainer globalQualityIndex={globalAirQuality}> Qualité de l'air: {qualityIndexMapping[globalAirQuality - 1].value}</GlobalAirQualityContainer>}
            {
              Object.entries(componentsAirQuality).map((component, idx) => {
                return <AirComponentCard name={componentsMapping[idx]} value={component[1] as number}/>;
              })
            }
        </AirQualityContainer>
    )
}

export default AirQuality;
