import { filterInactiveUsers } from './index';

const dummyUsers = [
	{
		name: 'Martin',
		active: true,
	},
	{
		name: 'Tomas',
		active: false,
	},
	{
		name: 'Filipe',
		active: false,
	},
	{
		name: 'Anna',
		active: true,
	},
	{
		name: 'Luiza',
		active: false,
	},
];

describe('Test basic function', function() {
	it('should filter out inactive users', function() {
		const expectedUsers = [
			{
				name: 'Tomas',
				active: false,
			},
			{
				name: 'Filipe',
				active: false,
			},

			{
				name: 'Luiza',
				active: false,
			},
		];
		expect(filterInactiveUsers(dummyUsers)).toEqual(expectedUsers);
	});

	it('should return message when no users', function() {
		expect(filterInactiveUsers([])).toEqual('No users');
	});
});
