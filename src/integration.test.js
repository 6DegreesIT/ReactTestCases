import { storeFactory } from '../src/test/testUtils';
import { guessWord } from '../src/action';

describe('guessedWord action dispatcher', () => {
	const secretWord = 'abss';
	const unsuccessfulGuess = 'ab';
	describe('guessed words', () => {
		let store;
		const guessWords = [{ guessedWord: 'abs', letterMatchCount: 1 }];
		const initialState = { guessWords, secretWord };
		beforeEach(() => {
			store = storeFactory(initialState);
		});
		it('update state for successful guess', () => {
			store.dispatch(guessWord(secretWord));

			const newState = store.getState();
			console.log('abababab', newState);
			const expectedState = {
				secretWord,
				success: true,
				guessWords: [
					...guessWords,
					{
						guessedWord: secretWord,
						letterMatchCount: 3,
					},
				],
			};
			expect(newState).toEqual(expectedState);
		});
		it('update state for unsuccessful guess', () => {
			store.dispatch(guessWord(unsuccessfulGuess));
			const newState = store.getState();
			console.log('cdcdcdcd', newState);
			const expectedState = {
				secretWord,
				success: false,
				guessWords: [
					...guessWords,
					{
						guessedWord: unsuccessfulGuess,
						letterMatchCount: 2,
					},
				],
			};
			expect(newState).toEqual(expectedState);
		});
	});

	describe('no guessed word', () => {
		let store;
		const initialState = { secretWord };
		beforeEach(() => {
			store = storeFactory(initialState);
		});
		it('update state for successful guess', () => {
			store.dispatch(guessWord(secretWord));
			const newState = store.getState();
			const expectedState = {
				...initialState,
				success: true,
				guessWords: [
					{
						guessedWord: secretWord,
						letterMatchCount: 3,
					},
				],
			};
			expect(newState).toEqual(expectedState);
		});
		it('update state for unsuccessful guess', () => {
			store.dispatch(guessWord(unsuccessfulGuess));
			const newState = store.getState();
			console.log('aaaaa', newState);
			const expectedState = {
				...initialState,
				success: false,
				guessWords: [
					{
						guessedWord: unsuccessfulGuess,
						letterMatchCount: 2,
					},
				],
			};

			expect(newState).toEqual(expectedState);
		});
	});
});
