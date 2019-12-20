import { actionTypes } from '../action';
import successReducer from './successReducer';

it('returns `false` state when no action is passed', () => {
	const newState = successReducer(undefined, {});
	expect(newState).toBe(false);
});
it('returns `true` state when action type `CORRECT_GUESS` is passed', () => {
	const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
	expect(newState).toBe(true);
});
