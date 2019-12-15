export function weird3NumCalculator(num1, num2, num3) {
	if (num1 > 10) {
		return num2 + num3;
	}
	if (num1 < 5) {
		return num1;
	}
	return num1 + num2;
}
