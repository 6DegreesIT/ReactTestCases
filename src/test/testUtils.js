import checkPropTypes from 'check-prop-types';

export const findByAttribute = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
};
export const checkProps = (component, requestedProps) => {
	const propError = checkPropTypes(component.propTypes, requestedProps, 'prop', component.name);
	expect(propError).toBeUndefined();
};
