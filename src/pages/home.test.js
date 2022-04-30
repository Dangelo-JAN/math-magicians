import React from 'react';
import renderer from 'react-test-renderer';
import Home from './home';

it('should render correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
