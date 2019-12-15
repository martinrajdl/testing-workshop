import React from 'react';
import { mount } from 'enzyme';

import { Component } from './Mocking';

// jest.mock('./module.js', () => {
// 	function doStuff() {
// 		console.log('can pretend its doing things');
// 	}

// 	return { hi: something };
// });

describe(Component.name, () => {
	it('should call handler with incremented value', () => {
		const mockedFunction = jest.fn();
		const wrapper = mount(<Component handler={mockedFunction} />);

		wrapper.find('button').simulate('click');

		expect(mockedFunction).toHaveBeenCalledWith(1);
		expect(wrapper.find('span').text()).toBe('1');
	});
});
