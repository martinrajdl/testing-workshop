import React from 'react';
import { shallow } from 'enzyme';

import { ModalControler } from './index';

describe('Test modal functionality based on triggers and closers', () => {
	it('should open modal', () => {
		const wrapper = shallow(<ModalControler />);
		const opener = wrapper.find('.modalOpenButton');
		opener.simulate('click');
		const modal = wrapper.find('.modal');

		expect(modal.exists()).toBe(true);
	});
	it('should close modal', () => {
		const wrapper = shallow(<ModalControler isOpenOnRender />);
		const cross = wrapper.find('.cross');
		cross.simulate('click');
		const modal = wrapper.find('.modal');

		expect(modal.exists()).toBe(false);
	});

	it('should called injected function', () => {
		let initialValue = 0;

		const updateInitialValue = () => {
			initialValue = 1;
		};
		const wrapper = mount(
			<ModalControler actionHandler={updateInitialValue} />
		);

		wrapper.update();
		expect(initialValue).toEqual(1);
	});
});
