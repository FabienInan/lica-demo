import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const HomeText = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

const Home = () => {
    return (
        <HomeContainer>
            <HomeText>Bienvenue sur Canebière Info'. Vous trouverez sur ce site diverses informations pratiques lié à notre belle ville telle que la météo et la qualité de l'air.</HomeText>
        </HomeContainer>
            )
}

export default Home
