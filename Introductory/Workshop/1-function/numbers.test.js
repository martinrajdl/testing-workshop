import {
	sumTwoNumbers,
	substractSmaller,
	sumNumbersInArray
} from './index';


// I recommend keeping the following cheatesheet open
// https://devhints.io/jest
// and looking for other possibilities how tests can be written

describe(sumTwoNumbers.name, function () {
	it('should substract smaller number from larger number', function () {
		expect(true).toBe(false);
	});
});

describe(substractSmaller.name, function () {
	it('should substract smaller number from larger number', function () {
		expect(true).toBe(false);
		// try a (largeNum, smallNum)
		// try a different (largeNum, smallNum) to check for variable output
		// try a different usecase (smallNum, largeNum) for larger branch coverage
	});
});

describe(sumNumbersInArray.name, function () {
	it('should add up all numbers in an array', function () {
		const sampleArray = [1, 2, 13, 12, 14]
		expect(true).toBe(false);
	});
});



