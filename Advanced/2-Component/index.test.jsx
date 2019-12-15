import React from 'react';
import { shallow, mount } from 'enzyme';

import { Component } from './index';
import { Heading } from './Heading';

// I recommend keeping the following cheatesheet open
// https://devhints.io/enzyme
// and looking for other possibilities how tests can be written

describe('Test react component with enzyme', () => {
	it('should render component', () => {
		const wrapper = shallow(
			<Component content={'Banana'} isHeading></Component>
		);

		// you can check if wrapper exists with wrapper.exists()
		// expect(something).toBe(something)
		// if you are not sure whats being rendered, just console.log(wrapper.debug())
	});

	it('should render child (heading) component with correct text', () => {
		// find a component inside your rendered component using the .find() method
		// check for of an element text using the .text() method
		// tip: in order to get contents of child component, you need to "mount" the component you are testing
	});

	it('should have important class', () => {
		// to check if an elemnent has a class use the .hasClass() method
		// tip: in order to get the div rendered by a component, use the childAt() method and look for the first element
	});
});

// some useful matchers
// All matchers can be negated using .not. inside the statement

// toBe compares strict equality, using ===
// toEqual compares the values of two variables. If it’s an object or array, it checks the equality of all the properties or elements
// toBeTruthy true if the value is considered true (like an if does)
// toBeFalsy true if the value is considered false (like an if does)
// toMatch is used to compare strings with regular expression pattern matching
// toContain is used in arrays, true if the expected array contains the argument in its elements set
// toHaveLength(number): checks the length of an array
// toHaveProperty(key, value): checks if an object has a property, and optionally checks its value
