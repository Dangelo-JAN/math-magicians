import Operate from './logic/operate';
import Calculate from './logic/Calculate';

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

  describe('Calculate test', () => {
    it('AC test', () => {
      expect(Calculate({ total: 9, next: 6, operation: '+' }, 'AC'))
        .toEqual({ total: null, next: null, operation: null });
    });

    it('Total and Next are provided test', () => {
      expect(Calculate({ total: '3', next: '4', operation: '+' }, '9'))
        .toEqual({ total: '3', next: '49', operation: '+' });
    });

    it('Total and Next are empty test', () => {
      expect(Calculate({ total: null, next: null, operation: '+' }, '9'))
        .not.toEqual({ total: '9', next: null, operation: '+' });
    });

    it('+/- button test', () => {
      expect(Calculate({ total: '1', next: '2', operation: '+' }, '+/-'))
        .toEqual({ total: '1', next: '-2', operation: '+' });
    });

    it('. button test', () => {
      expect(Calculate({ total: '1', next: '2', operation: '+' }, '.'))
        .toEqual({ total: '1', next: '2.', operation: '+' });
    });

    it('= button test', () => {
      const calculation = Calculate({ total: '1', next: '2', operation: '+' }, '=');
      expect(calculation.total).toBe('3');
    });
  });
});
