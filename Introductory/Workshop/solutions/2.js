import React from 'react';
import { shallow, mount } from 'enzyme';

import { Component } from './Component';
import { Heading } from './Heading';

describe(Component.name, () => {
	it.only('should render component', () => {
		const wrapper = shallow(<Component content={'Banana'}></Component>);

		expect(wrapper.exists()).toBe(true);
	});

	it.skip('should render child (heading) component with correct text', () => {
		const wrapper = mount(
			<Component content={'Orange'} hasHeading></Component>
		);

		const heading = wrapper.find(Heading);
		expect(heading.text()).toBe('Orange');
	});

	it.skip('should have important class', () => {
		const wrapper = shallow(
			<Component content={'Kiwi'} hasHeading></Component>
		);
		expect(wrapper.first().hasClass('important')).toBe(true);
	});
});
