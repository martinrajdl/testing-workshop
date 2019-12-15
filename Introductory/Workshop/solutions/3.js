import React from 'react';
import { shallow } from 'enzyme';

import { Likes } from './Likes';

describe(Likes.name, () => {
	it.skip('should increase like count', () => {
		const wrapper = shallow(<Likes initialCount={100} />);

		wrapper.find('button').simulate('click');

		const likeCount = wrapper.find('.likeButton__likes').text();

		expect(likeCount).toBe('101');
	});
});
