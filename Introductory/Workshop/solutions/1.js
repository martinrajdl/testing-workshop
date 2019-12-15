import {
    sumTwoNumbers,
    substractSmaller,
    sumNumbersInArray
} from './index';


describe(sumTwoNumbers.name, function () {
    it('should substract smaller number from larger number', function () {
        expect(sumTwoNumbers(2, 2)).toBe(4)
        expect(sumTwoNumbers(2, 3)).toBe(5)
    });
});

describe(substractSmaller.name, function () {
    it('should substract smaller number from larger number', function () {
        expect(substractSmaller(10, 5)).toEqual(5);
        expect(substractSmaller(10, 4)).toEqual(6);
        expect(substractSmaller(6, 18)).toEqual(12);
    });
});

describe(sumNumbersInArray.name, function () {
    it('should add up all numbers in an array', function () {
        const sampleArray = [1, 2, 13, 12, 14]
        expect(sumNumbersInArray(sampleArray)).toBe(42);
    });
});



