import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import { middleware } from '../reducer/configureStore';
import rootReducer from '../reducer';

export const findByAttribute = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
};
export const checkProps = (component, requestedProps) => {
	const propError = checkPropTypes(component.propTypes, requestedProps, 'prop', component.name);
	expect(propError).toBeUndefined();
};
export const storeFactory = initialState => {
	const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

	return createStoreWithMiddleware(rootReducer, initialState);
};
