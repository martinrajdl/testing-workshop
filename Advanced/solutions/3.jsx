import React from 'react';
import { shallow } from 'enzyme';

import { Likes } from '../3-Lifecycle';

describe('Test changes in state', () => {
	it('should increase like count', () => {
		const wrapper = shallow(<Likes initialCount={100} />);
		wrapper.find('button').simulate('click');

		expect(wrapper.state('likeCount')).toEqual(101);
	});

	it('should change state.update on update', () => {
		const wrapper = shallow(<Likes initialCount={100} />);
		expect(wrapper.state('updated')).toEqual(false);

		wrapper.setProps({ initialCount: 200 });

		expect(wrapper.state('updated')).toEqual(true);
	});
});
