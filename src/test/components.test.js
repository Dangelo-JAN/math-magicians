import renderer from 'react-test-renderer';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/calculator';
import Navbar from '../components/navbar';

describe('Components test', () => {
  const navTest = () => {
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>;
  };
  
  it('Render NavLinks', () => {
    const tree = renderer
      .create(<navTest />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Calculator test', () => {
    it('has Text element', () => {
      render(<Calculator />);
      const element = screen.getByText(/Let's do some math!/i);
      expect(element).toBeInTheDocument();
    });

    it('has AC button', () => {
      render(<Calculator />);
      const element = screen.getByText('AC');
      expect(element).toBeInTheDocument();
    });

    it('has = button', () => {
      render(<Calculator />);
      const element = screen.getByText('=');
      expect(element).toBeInTheDocument();
    });

    it('has +/- button', () => {
      render(<Calculator />);
      const element = screen.getByText('+/-');
      expect(element).toBeInTheDocument();
    });

    it('has % button', () => {
      render(<Calculator />);
      const element = screen.getByText('%');
      expect(element).toBeInTheDocument();
    });

    it('has + button', () => {
      render(<Calculator />);
      const element = screen.getByText('+');
      expect(element).toBeInTheDocument();
    });

    it('has - button', () => {
      render(<Calculator />);
      const element = screen.getByText('-');
      expect(element).toBeInTheDocument();
    });

    it('has x button', () => {
      render(<Calculator />);
      const element = screen.getByText('*');
      expect(element).toBeInTheDocument();
    });

    it('has ÷ button', () => {
      render(<Calculator />);
      const element = screen.getByText('/');
      expect(element).toBeInTheDocument();
    });

    it('has 0 button', () => {
      render(<Calculator />);
      const element = document.getElementById('output');
      expect(element).toBeInTheDocument();
    });

    it('has 1 button', () => {
      render(<Calculator />);
      const element = screen.getByText('1');
      expect(element).toBeInTheDocument();
    });

    it('has 2 button', () => {
      render(<Calculator />);
      const element = screen.getByText('2');
      expect(element).toBeInTheDocument();
    });

    it('has 3 button', () => {
      render(<Calculator />);
      const element = screen.getByText('3');
      expect(element).toBeInTheDocument();
    });

    it('has 4 button', () => {
      render(<Calculator />);
      const element = screen.getByText('4');
      expect(element).toBeInTheDocument();
    });

    it('has 5 button', () => {
      render(<Calculator />);
      const element = screen.getByText('5');
      expect(element).toBeInTheDocument();
    });

    it('has 6 button', () => {
      render(<Calculator />);
      const element = screen.getByText('6');
      expect(element).toBeInTheDocument();
    });

    it('has 7 button', () => {
      render(<Calculator />);
      const element = screen.getByText('7');
      expect(element).toBeInTheDocument();
    });

    it('has 8 button', () => {
      render(<Calculator />);
      const element = screen.getByText('8');
      expect(element).toBeInTheDocument();
    });

    it('has 9 button', () => {
      render(<Calculator />);
      const element = screen.getByText('9');
      expect(element).toBeInTheDocument();
    });

    it('has . button', () => {
      render(<Calculator />);
      const element = screen.getByText('.');
      expect(element).toBeInTheDocument();
    });
  });
});
