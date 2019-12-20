import { getLetterMatchCount } from './';

describe('letterMatching helper function', () => {
	let secretWord = 'abs';
	it('return `0` word from secretWord', () => {
		const word = getLetterMatchCount('gg', secretWord);
		expect(word).toBe(0);
	});
	it('return `2` word from secretWord', () => {
		const word = getLetterMatchCount('as', secretWord);
		expect(word).toBe(2);
	});
	it('return count of duplicateValue', () => {
		const word = getLetterMatchCount('ass', secretWord);
		expect(word).toBe(2);
	});
	it('return guessedWord is matches with secret word', () => {
		const word = getLetterMatchCount('abs', secretWord);
		expect(word).toBe(secretWord.length);
	});
});
