import AirComponentCard from './AirComponentCard';
import React from 'react';
import renderer from 'react-test-renderer';

it('should render properly the Air Component Card', () => {
    const props = {
        name: 'Monoxyde de carbone',
        value: 12.35
    };
    const tree = renderer.create(<AirComponentCard name={props.name} value={props.value}/>).toJSON();
    expect(tree).toMatchSnapshot();
});