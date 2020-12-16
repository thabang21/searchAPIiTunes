import React from 'react';
import renderer from 'react-test-renderer';
import movies from './movies';

//testing movies componant using snapshot test
it ("testing favorite component" , ()=> {
    const tree = renderer.create(<movies />).toJSON();
    expect(tree).toMatchSnapshot();
})
