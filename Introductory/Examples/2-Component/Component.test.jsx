import React from 'react';
import { shallow, mount } from 'enzyme';

import { Component, Welcome } from './Component';

describe(Component.name, () => {
	it('should render component', () => {
		const users = [
			{ name: 'Martin', id: 1 },
			{ name: 'Pedro', id: 2 },
			{ name: 'Luis', id: 3 },
		];
		const wrapper = mount(<Component users={users} />);
		expect(wrapper.exists()).toBeFalsy();
	});
});
//
//
//
//
//
//
//
//
//
//
// const secondElement = wrapper.find(Welcome).at(1);
// expect(secondElement.text()).toBe('Hello, Pedro');
