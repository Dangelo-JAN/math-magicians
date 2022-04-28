import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import Operate from './logic/operate.js';
import Calculate from './logic/calculate.js';

describe('My Components logic test', () => {
  describe('Operate test', () => {
    it('Sum test', () => {
      expect(Operate(1, 1, '+')).toBe('2');
    });

    it('Rest test', () => {
      expect(Operate(1, 1, '-')).toBe('0');
    });
    
    it('Multiply test', () => {
      expect(Operate(1, 1, 'x')).toBe('1');
    });

    it('Devide test', () => {
      expect(Operate(1, 1, '÷')).toBe('1');
    });
  });

  // it('Calculate test', () => {

  // });
});
