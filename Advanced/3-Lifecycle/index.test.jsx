import React from 'react';
import { shallow } from 'enzyme';

import { Likes } from './index';

describe('Test changes in state', () => {
	it('should increase like count', () => {
		const wrapper = shallow(<Likes initialCount={100} />);

		// to simulate an event, use the .simulate() method on any element you find in the component

		// tip: dont test the correctness of the state, but if the changes in rendered code are correct
	});

	it('should change state.update on update', () => {
		const wrapper = shallow(<Likes initialCount={100} />);
		expect(wrapper.state('updated')).toEqual(false);
		// make the components update by calling .setProps{ initialCount: 200 } and see how updated in state changes
	});
});

// handling state and props in enzyme

// wrap.setProps({ name: 'Moe' })
// wrap.setState({ show: true })

// expect(wrap.props('name')).toEqual('Moe')
// expect(wrap.state('show')).toEqual(true)
// expect('name' in wrap.props()).toEqual(true)
// expect('show' in wrap.state()).toEqual(true)
