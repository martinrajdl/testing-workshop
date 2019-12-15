import React from 'react';
import { shallow, mount } from 'enzyme';

import { Component } from '../2-Component';
import { Heading } from '../2-Component/Heading';

describe('Test react component with enzyme', () => {
	it('should render component', () => {
		const wrapper = shallow(
			<Component content={'Banana'} isHeading></Component>
		);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render child (heading) component with correct text', () => {
		const wrapper = mount(
			<Component content={'Banana'} isHeading></Component>
		);
		const heading = wrapper.find(Heading);

		expect(heading.text()).toBe('Banana');
	});

	it('should have important class', () => {
		const wrapper = mount(
			<Component content={'Banana'} isHeading></Component>
		);

		expect(wrapper.childAt(0).hasClass('important')).toBe(true);
	});
});
