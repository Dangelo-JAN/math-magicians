import React from 'react';
// import ReactDom from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/calculator';
// import Navbar from '../components/navbar';

describe('Components test', () => {
//   describe('Navbar test', () => {
//     it('has a logo link', () => {
//       const div = document.createElement('div');

  //       const div = ReactDOM.createElement('div');
  //     root.render(
  //   <React.StrictMode>
  //     <BrowserRouter>
  //       <Container />
  //     </BrowserRouter>
  //   </React.StrictMode>,
  // );

  //       ReactDom.render(
  //         <BrowserRouter>
  //           <Navbar />
  //         </BrowserRouter>,
  //         div,
  //       );

  //       ReactDom.unmountComponentAtNode(div);

  //       const element = document.getElementById('logo');
  //       expect(element).toBeInTheDocument();
  //     });
  //     //   it('has Home link', () => {
  //     render(<Navbar />);
  //     const element = document.getElementById(/home-link/i);
  //     expect(element).toBeInTheDocument();
  //   });

  //   it('has Calculator link', () => {
  //     render(<Navbar />);
  //     const element = document.getElementById(/calculator-link/i);
  //     expect(element).toBeInTheDocument();
  //   });

  //   it('has Quote link', () => {
  //     render(<Navbar />);
  //     const element = document.getElementById(/Quote-link/i);
  //     expect(element).toBeInTheDocument();
  //   });
  // });

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
