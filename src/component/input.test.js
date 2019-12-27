import React from 'react';
import { shallow } from 'enzyme';

import { findByAttribute, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput } from './input';

const setupShallowWrapper = (initialState = {}) => {
	const store = storeFactory(initialState);
	return shallow(<Input store={store} />)
		.dive()
		.dive();
};

setupShallowWrapper();
describe('render', () => {});

describe('word not been guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setupShallowWrapper({ success: false });
	});
	it('render without error', () => {
		const component = findByAttribute(wrapper, 'component-input');
		expect(component.length).toBe(1);
	});
	it('renders input box', () => {
		const input_box = findByAttribute(wrapper, 'input_box');
		expect(input_box.length).toBe(1);
	});
	it('renders submit button', () => {
		const submit_button = findByAttribute(wrapper, 'submit_button');
		expect(submit_button.length).toBe(1);
	});
});
describe('word has been guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setupShallowWrapper({ success: true });
	});
	it('render without error', () => {
		const component = findByAttribute(wrapper, 'component-input');
		expect(component.length).toBe(1);
	});
	it('does not render input box', () => {
		const input_box = findByAttribute(wrapper, 'input_box');
		expect(input_box.length).toBe(0);
	});
	it('does not render submit button', () => {
		const submit_button = findByAttribute(wrapper, 'submit_button');
		expect(submit_button.length).toBe(0);
	});
});

describe('updating state', () => {});

describe('redux props', () => {
	it('has `success` state as a props', () => {
		const success = true;
		const wrapper = setupShallowWrapper({ success });
		const successProp = wrapper.instance().props.success;
		expect(successProp).toBe(success);
	});
	it('has `guessWord` action creator are object', () => {
		const wrapper = setupShallowWrapper();
		const guessWordProp = wrapper.instance().props.guessWord;
		expect(guessWordProp).toBeInstanceOf(Function);
	});
});
describe('`guessWord` action creator call', () => {
	let guessWordMock;
	let wrapper;
	let submitButton;
	let guessedWord = 'ab';
	beforeEach(() => {
		guessWordMock = jest.fn();
		const props = {
			guessWord: guessWordMock,
		};
		wrapper = shallow(<UnconnectedInput {...props} />);
		wrapper.setState({ currentGuess: guessedWord });
		// simulate click
		submitButton = findByAttribute(wrapper, 'submit_button');
		submitButton.simulate('click', { preventDefault() {} });
	});
	it('call `guessWord` when submit button is clicked', () => {
		const guessWordMockCount = guessWordMock.mock.calls.length;
		expect(guessWordMockCount).toBe(1);
	});
	it('call `guessWord` with input value as argument', () => {
		console.log('uessWordMock.mock.calls', guessWordMock.mock.calls);
		const guessedWordTemp = guessWordMock.mock.calls[0][0];
		expect(guessedWordTemp).toBe(guessedWord);
	});
	it('clear input field after click on `submit`', () => {
		expect(wrapper.state('currentGuess')).toBe('');
	});
});
