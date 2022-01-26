import React from 'react';
import styled from 'styled-components';

const AirComponentCardContainer = styled.div`
    margin: 8px;
    height: 148px;
    width: 148px;
    border-radius: 8px;
    box-shadow: 0.3px 0.3px 0.3px 1px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const Name = styled.div`
    color: gray;
    line-height: 40px;
    font-size: 20px;
    height: 80px;
`;

const Concentration = styled.div`
    font-size: 22px;
`;

type AirComponentCardProps = {
    name: string;
    value: number;
};

const AirComponentCard = (props: AirComponentCardProps) => {
    return (
        <AirComponentCardContainer>
            <Name>{props.name}</Name>
            <Concentration>{props.value}μg/m3</Concentration>
        </AirComponentCardContainer>
    )
};

export default AirComponentCard;