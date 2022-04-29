aimport renderer from 'react-test-renderer';
//import renderer from 'react-testing-library/jest-dom';

import Calculator from '../components/calculator';
import Navbar from '../components/navbar';
import Home from '../pages/home';
import Qoute from '../pages/quote';

describe('Snapshots', () => {
  it('Render Navbar', () => {
    const tree = renderer
      .create(<Navbar />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render Calculator', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render Home', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render Qoute', () => {
    const tree = renderer
      .create(<Qoute />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});