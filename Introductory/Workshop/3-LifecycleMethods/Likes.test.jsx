import React from 'react';
import { shallow } from 'enzyme';

import { Likes } from './Likes';

describe(Likes.name, () => {
	it('should increase like count', () => {
		const wrapper = shallow(<Likes initialCount={100} />);
		const button = wrapper.find('button');
		button.simulate('click');
		const output = wrapper.find('.likeButton__likes').text();
		expect(output).toBe('101');
	});

	it.only('should NOT increase like count after already voted', () => {
		const wrapper = shallow(<Likes initialCount={100} />);
		const button = wrapper.find('button');
		expect(wrapper.find('.likeButton__likes').text()).toBe('100');
		button.simulate('click');
		expect(wrapper.find('.likeButton__likes').text()).toBe('101');
		button.simulate('click');
		expect(wrapper.find('.likeButton__likes').text()).toBe('101');
	});
});
