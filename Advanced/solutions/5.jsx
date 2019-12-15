import React from 'react';
import { Component } from './index';
import { shallow } from 'enzyme';
import utils from './utils';

jest.mock('./request-module.js', () => url => {
	return new Promise((resolve, reject) => {
		const users = {
			4: { firstName: 'Mark', lastName: 'Stevens' },
			5: { firstName: 'Paul', lastName: 'Davids' },
		};

		const user = users[parseInt(url.substr('/users/'.length), 10)];

		if (user) {
			return resolve(user);
		}

		return reject({
			error: 'User with id: ' + 1 + ' was not found.',
		});
	});
});

function tick() {
	return new Promise(resolve => {
		setTimeout(resolve, 0);
	});
}

describe('Test mocking a module used in the codebase', () => {
	it('should return greet message with full mocked name', async () => {
		const action = jest.fn();
		const component = shallow(<Component handleClick={action} id={5} />);

		component.simulate('click');
		await tick();
		expect.assertions(3);
		expect(action).toHaveBeenCalled();
		expect(action).toHaveBeenCalledTimes(1);
		expect(action).toBeCalledWith('Hey, Paul Davids');
	});
});

describe('Test greet function', () => {
	it('should return greet message with mocked name', () => {
		utils.getUserName = jest.fn().mockResolvedValue('Peter Jackson');
		return utils
			.greet(0)
			.then(data => expect(data).toEqual('Hey, Peter Jackson'));
	});
});
