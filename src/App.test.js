import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../src/test/testUtils';
import App, { UnconnectedApp } from './App';

const setupShallowWrapper = (initialState = {}) => {
	const store = storeFactory(initialState);
	return shallow(<App store={store} />)
		.dive()
		.dive();
};

describe('render', () => {});

describe('updating state', () => {});

describe('redux props', () => {
	it('has `success` state as a props', () => {
		const success = true;
		const wrapper = setupShallowWrapper({ success });

		const successProp = wrapper.instance().props.success;
		expect(successProp).toBe(success);
	});
	it('has `secretWord` state as a props', () => {
		const secretWord = 'abss';
		const wrapper = setupShallowWrapper({ secretWord });
		const secretWordProp = wrapper.instance().props.secretWord;
		expect(secretWordProp).toBe(secretWord);
	});
	it('has `guessWords` state as a props', () => {
		const guessWords = [{ guessedWord: 'ab', letterMatchCount: 2 }];
		const wrapper = setupShallowWrapper({ guessWords });
		const guessedWordsProp = wrapper.instance().props.guessWords;
		expect(guessedWordsProp).toEqual(guessWords);
	});
	it('has `getSecretWord` action creator are object', () => {
		const wrapper = setupShallowWrapper();
		const guessWordProp = wrapper.instance().props.getSecretWord;
		expect(guessWordProp).toBeInstanceOf(Function);
	});
});
it('`getSecretWord` call on App mount', () => {
	const getSecretWordMock = jest.fn();
	const props = {
		getSecretWord: getSecretWordMock,
		success: false,
		guessWords: [],
	};
	const wrapper = shallow(<UnconnectedApp {...props} />);
	//run lifecycle method
	wrapper.instance().componentDidMount();
	// check to see if mock run
	const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
	expect(getSecretWordCallCount).toBe(1);
});
