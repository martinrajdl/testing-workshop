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
		// mock click handler as a jest.fn() and pass it ro rendered Componet with id existing in our request mock

		// simulate what triggers the handler

		await tick();

		// expect the mocked function to be called
		// .toHaveBeenCalled();
		// .toBeCalledWith('Hey, Paul Davids');
	});
});

describe('Test greet function', () => {
	it('should return greet message with mocked name', () => {
		utils.getUserName = jest.fn().mockResolvedValue('Peter Jackson');

		// tip: you can write an except inside .then(data => expect(data)...)
	});
});
