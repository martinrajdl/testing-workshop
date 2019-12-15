import React from 'react';
import { mount, shallow } from 'enzyme';

import { ModalControler } from './index';

describe('Test modal functionality based on triggers and closers', () => {
	it('should open modal', () => {
		const wrapper = shallow(<ModalControler />);
		// if you are not sure whats happening, just console.log(wrapper.debug()) to see rendereed output
	});
	it('should close modal', () => {
		const wrapper = shallow(<ModalControler isOpenOnRender />);
	});
	it('should called injected function', () => {
		const wrapper = mount(<ModalControler actionHandler={() => {}} />);
		// useEffect will only be called if you mount your component

		// pass some function to our component and check if it was called

		// cause the component to update for example with wrapper.update();
	});
});

// the following example isn't used in this exercise, but is an interesting
// showcase of how you can rewrite expected behaviour of what you do with hooks

// jest.mock('react', () => {
// 	const original = require.requireActual('react');

// 	return {
// 		...original, // Pass down all the exported objects
// 		useRef: jest.fn().mockImplementation(() => {
// 			return {
// 				current: {
// 					getBoundingClientRect: jest
// 						.fn()
// 						.mockReturnValue({ left: 30, top: 50 }),
// 				},
// 			};
// 		}),
// 		useEffect(effect) {
// 			effect();
// 		},
// 	};
// });
