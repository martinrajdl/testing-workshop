import { weird3NumCalculator } from './index';
it('should return a correct value if num 1 is large', () => {
	expect(weird3NumCalculator(11, 2, 3)).toBe(5);
});

it('should return a correct value if num 1 is small', () => {
	expect(weird3NumCalculator(1, 2, 3)).toBe(1);
});

it('should return a correct value if num 1 is small', () => {
	expect(weird3NumCalculator(6, 2, 3)).toBe(8);
});
