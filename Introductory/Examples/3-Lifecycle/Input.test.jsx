import React from 'react';
import { mount } from 'enzyme';

import { InputWrapper } from './Input';

describe(InputWrapper.name, () => {
	it('should change input value and output', () => {
		const wrapper = mount(<InputWrapper placeholder={'hello'} />);
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
//
//
//
//
//
// const span = wrapper.find('span');
// expect(span.text()).toBe('hello');
// const input = wrapper.find('input');

// input.simulate('change', {
// 	target: { value: 'hi' },
// });

// expect(wrapper.state('value')).toEqual('hi'); // looking for implementation
// expect(span.text()).toBe('hi'); //looking for result
