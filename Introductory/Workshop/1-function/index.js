export const sumTwoNumbers = (num1, num2) => {
	return num1 + num2
}

export const substractSmaller = (num1, num2) => {
	if (num1 > num2) {
		return num1 - num2
	}
	return num2 - num1
}

export const sumNumbersInArray = (someArray) => {
	let sum = 0
	for (let i = 0; i < someArray.length; i++) {
		sum += someArray[i]
	}
	return sum

	// after you write your test, change your implementation with the lower one and see test still passing
}

// return someArray.reduce((a, b) => a + b, 0)


