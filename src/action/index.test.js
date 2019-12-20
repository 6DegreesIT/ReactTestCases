import { correctGuess, actionTypes } from './';

describe(' correctGuess', () => {
	it('returns object with action type `CORRECT_GUESS` ', () => {
		const action = correctGuess();
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
	});
});
