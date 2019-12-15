import { Foo } from './index';

beforeEach(() => {
	console.log('____________________________');
	console.log('test starting');
	const fooClassRef = Foo;
	fooClassRef._count = 0;
});

afterEach(() => {
	console.log('test finished');
	console.log('____________________________');
});

afterAll(() => {
	console.log('clean mock modules here');
});

describe('Foo Class', () => {
	beforeEach(() => console.log('some more scope here'));

	describe('creating one Foo obj', () => {
		beforeEach(() => console.log('4A'));

		it.only('should have an id of 1', () => {
			console.log('Case A');
			const foo = new Foo();
			expect(foo.id).toBe(1);
		});
	});
	describe('creating two Foo objs', () => {
		let foo1;
		let foo2;

		beforeEach(() => {
			console.log('Two foo obj cases');
			foo1 = new Foo();
			foo2 = new Foo();
		});

		it('should have ids of 1 and 2', () => {
			console.log('Case B1');
			expect(foo1.id).toBe(1);
			expect(foo2.id).toBe(2);
		});

		it('should originally start with ids of 1 and 2, but they could be changed', () => {
			console.log('Case B2');
			expect(foo1.id).toBe(1);
			expect(foo2.id).toBe(2);
			foo2.id = 47;
			expect(foo1.id).toBe(1);
			expect(foo2.id).toBe(47);
		});
	});

	afterAll(() => {
		jest.resetAllMocks();
	});
});
