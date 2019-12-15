import { filterInactiveUsers } from './index';

describe(filterInactiveUsers.name, function () {
	it('should filter out inactive users', function () {
		expect(false).toEqual(true)
	});

	it('should return message when no users', function () {
		expect(false).toBeTruthy()
	});
});


// const dummyUsers = [
// 	{
// 		name: 'Martin',
// 		active: true,
// 	},
// 	{
// 		name: 'Tomas',
// 		active: false,
// 	},
// 	{
// 		name: 'Filipe',
// 		active: false,
// 	},
// 	{
// 		name: 'Anna',
// 		active: true,
// 	},
// 	{
// 		name: 'Luiza',
// 		active: false,
// 	},
// ];

// const expectedUsers = [
// 	{
// 		name: 'Tomas',
// 		active: false,
// 	},
// 	{
// 		name: 'Filipe',
// 		active: false,
// 	},

// 	{
// 		name: 'Luiza',
// 		active: false,
// 	},
// ];

// expect(filterInactiveUsers(dummyUsers)).toEqual(expectedUsers);
// expect(filterInactiveUsers([])).toEqual('No users');