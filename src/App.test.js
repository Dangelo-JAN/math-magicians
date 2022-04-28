// import { render, screen } from '@iting-library/react';
// import App from './App';

// it('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import Operate from './logic/operate.js';
import Calculate from './logic/Calculate.js';

describe('My Components logic it', () => {
  describe('Operate it', () => {
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

    it('Residual test', () => {
      expect(Operate(1, 1, '%')).toBe('0');
    });
  });
});
