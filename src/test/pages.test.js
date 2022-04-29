import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/home';
import Qoute from '../pages/quote';

describe('Pages test', () => {
  describe('Home test', () => {
    it('has Welcome', () => {
      render(<Home />);
      const element = screen.getByText('Welcome to our page');
      expect(element).toBeInTheDocument();
    });

    it('has Home box', () => {
      render(<Home />);
      const element = screen.getByText('iste facere', { exact: false });
      expect(element).toBeInTheDocument();
    });
  });

  describe('Qoute test', () => {
    it('has Qoute box', () => {
      render(<Qoute />);
      const element = screen.getByText('Albert Einstein', { exact: false });
      expect(element).toBeInTheDocument();
    });
  });
});