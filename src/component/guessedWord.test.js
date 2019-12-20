import React from 'react';
import { shallow } from 'enzyme';

import { findByAttribute, checkProps } from '../test/testUtils';
import GuessedWord from './guessedWord';

const defaultProps = {
	guessedWords: [
		{
			guessedWord: 'abc',
			letterMatchCount: 1,
		},
	],
};
const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWord {...setupProps} />);
};

it('does not show warning on expectedProps', () => {
	checkProps(GuessedWord, defaultProps);
});

describe('guessed word fail ', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] });
	});
	it('render without error', () => {
		const component = findByAttribute(wrapper, 'component-guessedWord');
		expect(component.length).toBe(1);
	});
	it(' render instruction when no guessed word ', () => {
		const no_guessedword_message = findByAttribute(wrapper, 'no-guessed-word');
		expect(no_guessedword_message.text().length).not.toBe(0);
	});
});

describe('guessed word pass ', () => {
	let wrapper;

	const guessedWords = [
		{
			guessedWord: 'abc',
			letterMatchCount: 1,
		},
	];
	beforeEach(() => {
		wrapper = setup({ guessedWords });
	});
	it('render without error ', () => {
		const component = findByAttribute(wrapper, 'component-guessedWord');
		expect(component.length).toBe(1);
	});
	it('render guessed word section', () => {
		const guessed_word_section = findByAttribute(wrapper, 'guessed-words');
		expect(guessed_word_section.text().length).not.toBe(0);
	});
	it('correct number of guessed word', () => {
		const guessedWordNodes = findByAttribute(wrapper, 'guessed-word');
		expect(guessedWordNodes.length).toBe(guessedWords.length);
	});
});
