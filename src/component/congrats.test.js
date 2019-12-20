import React from 'react';
import { shallow } from 'enzyme';

import { findByAttribute, checkProps } from '../test/testUtils';
import Congrats from '../component/congrats';

// setUp the shallowWrapper for the component
const setupShallowWrapper = (props = {}) => {
	return shallow(<Congrats {...props} />);
};

it('render without error', () => {
	const wrapper = setupShallowWrapper({ success: false });
	const component = findByAttribute(wrapper, 'component-congrats');
	expect(component.length).toBe(1);
});
it('render no text when `success` props is false', () => {
	const wrapper = setupShallowWrapper({ success: false });
	const component = findByAttribute(wrapper, 'component-congrats');
	expect(component.text()).toBe('');
});
it('render message when `success` props is true', () => {
	const wrapper = setupShallowWrapper({ success: true });
	const component = findByAttribute(wrapper, 'congrats-message');
	expect(component.text().length).not.toBe('');
});
it('does not throw warning with expected props', () => {
	const expectProps = { success: true };
	checkProps(Congrats, expectProps);
});
